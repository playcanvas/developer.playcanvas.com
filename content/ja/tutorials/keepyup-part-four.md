---
title: シンプルなゲームの作成 - パート4
layout: tutorial-page.hbs
tags: games
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="シンプルなゲームの作成 - パート4"></iframe>

*フルプロジェクトは[こちら][6]から入手できます。[パート1][1]、[パート2][2]、[パート3][3]をまだ確認していない場合は、先に読んでください。*

## ボール

Keepy Upゲームでは、ボールが注目の的です。プレーヤーの入力に反応し、環境(重力)にも反応し、音を出します。おそらくゲームの中で最も複雑な部分ですが、ここではできるだけシンプルに説明します。

## ball.js

```javascript
var Ball = pc.createScript('ball');

Ball.attributes.add('gravity', {
    type: 'number',
    default: -9.8,
    description: '使用する重力の値'
});

Ball.attributes.add('defaultTap', {
    type: 'number',
    default: 5,
    description: 'ボールがタップされたときに設定する速度'
});

Ball.attributes.add('impactEffect', {
    type: 'entity',
    description: 'ボールがタップされたときにトリガーするパーティクルエフェクト'
});

Ball.attributes.add('ballMinimum', {
    type: 'number',
    default: -6,
    description: 'ボールが最小y値以下になった場合、ゲームオーバーをトリガーする'
});

Ball.attributes.add('speedMult', {
    type: 'number',
    default: 4,
    description: 'タップがオフセンターの場合にX速度に適用する乗数'
});

Ball.attributes.add('angMult', {
    type: 'number',
    default: -6,
    description: 'タップがオフセンターの場合に適用する角速度の乗数'
});

Ball.tmp = new pc.Vec3();

// エンティティ毎に一度だけ呼び出される初期化コード
Ball.prototype.initialize = function() {
    this.paused = true;

    // "Game" Entityを取得して、イベントを受信する
    this.game = this.app.root.findByName("Game");

    this.app.on("game:start", this.unpause, this);
    this.app.on("game:gameover", this.pause, this);
    this.app.on("game:reset", this.reset, this);

    // プロパティを初期化します
    this._vel = new pc.Vec3(0, 0, 0);
    this._acc = new pc.Vec3(0, this.gravity, 0);
    this._angSpeed = 0;

    // リセットのための初期位置と回転を保存します
    this._origin = this.entity.getLocalPosition().clone();
    this._rotation = this.entity.getLocalRotation().clone();
};

// 毎フレーム呼び出される更新コード
Ball.prototype.update = function(dt) {
    // pausedのときは更新しない
    if (this.paused) {
        this.entity.rotate(0, 30*dt, 0);
        return;
    }

    var p = this.entity.getLocalPosition();
    var tmp = Ball.tmp;

    // 加速度を一時変数に統合します
    tmp.copy(this._acc).scale(dt);
    this._vel.add(tmp);

    // 位置を一時変数に統合します
    tmp.copy(this._vel).scale(dt);
    p.add(tmp);

    // 位置を更新する
    this.entity.setLocalPosition(p);

    // 角速度によって回転する
    this.entity.rotate(0, 0, this._angSpeed);

    // ゲームオーバー条件を確認する
    if (p.y < this.ballMinimum) {
        this.game.script.game.gameOver();
    }
};

/*
 * ボールを空中でタップするためのインプットハンドラによって呼び出されます
 * dxはボール中央からのタップのx距離で、dyはy距離です
 */
Ball.prototype.tap = function (dx, dy) {
    // タップの位置に応じて速度とスピンを更新する
    this._vel.set(this.speedMult * dx, this.defaultTap, 0);
    this._angSpeed += this.angMult * dx;

    // タップのワールド空間での位置を計算します
    var tmp = Ball.tmp;
    tmp.copy(this.entity.getLocalPosition());
    tmp.x -= dx;
    tmp.y -= dy;

    // タップ位置に向かってパーティクルエフェクトをトリガーし、ボールの中心から離れた方向に向けます
    this.impactEffect.setLocalPosition(tmp);
    this.impactEffect.particlesystem.reset();
    this.impactEffect.particlesystem.play();
    this.impactEffect.lookAt(this.entity.getPosition());

    // オーディオを再生する
    this.entity.sound.play("bounce");

    // スコアを1点加算する
    this.game.script.game.addScore(1);
};

// ゲームが再生されていないときはボールの更新を一時停止します
Ball.prototype.unpause = function () {
    this.paused = false;

    // タップでゲームを開始します
    this.tap(0, 0);
};

// ボールの更新を再開します
Ball.prototype.pause = function () {
    this.paused = true;
};

// ボールを初期値にリセットします
Ball.prototype.reset = function () {
    this.entity.setLocalPosition(this._origin);
    this.entity.setLocalRotation(this._rotation);
    this._vel.set(0,0,0);
    this._acc.set(0, this.gravity, 0);
    this._angSpeed = 0;
};
```

### スクリプト属性

まず、スクリプトの先頭に定義されている一連のスクリプト属性に注目します。スクリプト属性を定義することで、スクリプトからエディタに値を公開できます。その理由は、次の3つの点があります。

![Script Attributes][5]

まず、同じスクリプトを異なる値を持つ多数のエンティティに使用できるためです。たとえば、色を設定するスクリプト属性を使用し、エディタで赤、青、緑のバージョンのエンティティを作成することができます。

2番目に、スクリプトの動作をすばやく簡単に調整できることが挙げられます。スクリプト属性を変更すると(また、エディタからプロパティを変更する場合)、その場で、エディタから起動されたゲームのすべてのインスタンスに変更が即座に適用されます。つまり、ここで定義している「ballMinimum」プロパティの場合、ゲームをロードしなくても、下部にあるボールオフ画面において「ballMinimum」の値を調整し、ボールが画面下端から落下するようになるかどうかをテストできます。

これは「反復スピード」と呼ばれます。ゲームを修正してテストする速度が速いほど、開発を迅速に進めることができます!

ボールでは、重力、ボールがタップされたときに適用されるインパルスなど、多数のプレイプレイプロパティを調整するために、スクリプト属性を定義しています。これらの属性により、ゲームを自分たちの好みに合わせて素早く調整できます。

3番目に、スクリプト属性はシーン内のエンティティまたはアセットにスクリプトをリンクするための素晴らしい方法です。たとえば、ボールスクリプトでは、タップされたときにパーティクルエフェクトをトリガーする必要があります。パーティクルエフェクトは、シーン内の別のエンティティにあります。私たちは「impactEffect#### 物理シミュレーション

### ボールのスクリプトは簡単な物理シミュレーションを実行し、ボールを重力で落下させ、タップに応答するようになっています。また、ゲームイベントをリッスンしてポーズやリセットをしています。最後に、粒子効果を表示したり、サウンドを再生したりするために他のシステムと対話します。

物理シミュレーションでは、3つの量、加速度、速度、位置が関連しています。

**加速度を変更**する場合、これは時間の経過に対して力を適用する場合に役立ちます。 ボールの重力のように。

**速度を変更**する場合、これは瞬間的な変化です。フロアに弾むボールのように。

* **位置を変更**する場合、テレポートのように、リアルワールドに相当するものはありません!
* シミュレーションでは、重力による加速度が一定で、ボールをタップすると速度に瞬時の変化を与え、ゲームをリセットするとボールを開始位置に戻します。
* 更新ループで次のことを行います。

> _(変化する速度) = (加速度) * (前フレームからの経過時間)_

> _(新しい速度) = (古い速度) + (変化する速度)_

> _(位置の変化) = (新しい速度) * (前フレームからの経過時間)_

> _(新しい位置) = (古い位置) + (位置の変化)_

#### コードでは以下のようになります。

```javascript
var p = this.entity.getLocalPosition();

// integrate the velocity in a temporary variable
tmp.copy(this._acc).scale(dt);
this._vel.add(tmp);

// integrate the position in a temporary variable
tmp.copy(this._vel).scale(dt);
p.add(tmp);

// update position
this.entity.setLocalPosition(p);
```

インターミディエイトの値を保存するために一時ベクター、 `tmp`を使用していることに着目してください。 毎フレームに新しいベクトルを生成しないことが重要です。また、更新された位置を適用するために ` setLocalPosition `を呼び出す必要があることにも注意してください。

最後に、球体の角速度値を使用して ` entity.rotate()`を使用して球体を回転させます。これは物理的に正確ではありませんが、見た目が良くなります。

入力に応答する

[Part 2][2]から覚えているかもしれませんが、 `input.js`スクリプトは、入力がボールにヒットしたかどうかを確認し、そうであれば` tap()`メソッドを呼び出します。上記で定義された `tap()`メソッドは、ボールの速度と角速度に対する直接的な変化を適用します。 ゲームプレイの期待に合わせて新しい速度と角速度を乗算するためにスクリプト属性 `this.speedMult` と `this.angMult`を使用しています。

また、タップメソッドを使用して、ヒット位置でパーティクルのダストクラウドをトリガーしてサウンドエフェクトを再生します。 [Part 5][4]でパーティクルとサウンドについて説明します。

#### 要約

ボールスクリプトは、ボールを重力で落下させ、タップに応答させるために簡単な物理シミュレーションを実行します。また、ゲームイベントをリッスンしてポーズやリセットをしています。最後に、粒子効果を表示したり、サウンドを再生したりするために他のシステムと対話します。

インパクトの点で埃のパーティクルと効果音の再生をトリガーするためにもタップメソッドを使用します。パーティクルと音声については[その5][4]で説明します。

## まとめ

ボールスクリプトは、重力下でのボールの落下や、タップへの反応を可能にするため、単純な物理シミュレーションを実行します。また、ゲームイベントにリッスンして、一時停止やリセットを行います。最後に、他のシステムと相互作用してパーティクルエフェクトの表示や音声の再生を行います。

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-five/
[5]: /images/tutorials/beginner/keepyup-part-four/ball-script-attributes.jpg
[6]: https://playcanvas.com/project/406050
