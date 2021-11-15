---
title: 制作一个简单的游戏 - Part 2
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk/?overlay=false"></iframe>

*[完成されたプロジェクトはこちら][4]です。先に[その1][1]と[その2][2] を読んでください。*

## ゲームスクリプトと入力

これらの2つのスクリプト`game.js`と` input.js`は、「Game」と呼ばれるシーンのルートエンティティに添付されています。スクリプトは基本的に階層で遭遇される順に実行されるので、エンティティ特有でない任意のスクリプトを最初のエンティティに添付するのが最も簡単です。また、エンティティに添付せずに最初にスクリプトを読み込むために、エディタの設定パネルでのスクリプトの読み込み順を管理することができます。

## game.js

```javascript
var Game = pc.createScript('game');

Game.attributes.add('uiMenu', {type: 'entity'});
Game.attributes.add('uiInGame', {type: 'entity'});
Game.attributes.add('uiGameOver', {type: 'entity'});
Game.attributes.add('audio', {type: 'entity'});

Game.STATE_MENU = 'menu';
Game.STATE_INGAME = 'ingame';
Game.STATE_GAMEOVER = 'gameover';

// initializeコードが各エンティティで一度のみ呼ばれる
Game.prototype.initialize = function() {
    this._state = Game.STATE_MENU;
    this._score = 0;

    this.setResolution();

    window.addEventListener("resize", this.setResolution.bind(this));

    // UIからイベントをリッスン
    this.app.on("ui:start", this.start, this);
    this.app.on("ui:reset", this.reset, this);
};

Game.prototype.setResolution = function () {
    // 画面の幅が640未満の場合
    // 画面全体を埋める
    // その他の場合
    // デフォルト設定を使用

    var w = window.screen.width;
    var h = window.screen.height;

    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};

// MENUからINGAMEに移行するにはこれを呼ぶ
Game.prototype.start = function () {
    this._state = Game.STATE_INGAME;
    this.app.fire("game:start");
    this.uiMenu.enabled = false;
    this.uiInGame.enabled = true;

    this.audio.sound.play("music");
};

// INGAMEからGAMEOVERに移行するにはこれを呼ぶ
Game.prototype.gameOver = function () {
    this._state = Game.STATE_GAMEOVER;
    this.app.fire("game:gameover");
    this.uiInGame.enabled = false;
    this.uiGameOver.enabled = true;

    this.audio.sound.stop();
    this.audio.sound.play("gameover");
};

// GAMEOVERからMENUに移行するにはこれを呼ぶ
Game.prototype.reset = function () {
    this.app.fire("game:reset");
    this.resetScore();
    this._state = Game.STATE_MENU;
    this.uiGameOver.enabled = false;
    this.uiMenu.enabled = true;

    this.audio.sound.stop();
};

// 現在のスコアを返す
Game.prototype.getScore = function () {
    return this._score;
};

// スコアに値を追加
Game.prototype.addScore = function (v) {
    this._score += v;
    this.app.fire("game:score", this._score);
};

// スコアをリセット
Game.prototype.resetScore = function () {
    this._score = 0;
    this.app.fire("game:score", this._score);
};
```

### ゲームの状態

ゲームスクリプトはゲームの状態の全体を管理します。ゲームの状態を変更するためにいくつかのメソッドを公開し、ゲームの状態が変更されたことを他のコードに知らせるためにイベントを発生させます。

ゲームには3つの主要の状態、メニュー、ゲーム内、ゲームオーバーがあります。`start()`, `gameOver()`,  `reset()`のゲームスクリプトを使用して各状態間を移行します。それぞれが現在の状態を記憶するために`_state`変数を設定し、状態の変化を他のスクリプトに通知するためにアプリケーションイベントを発生させ、ユーザインタフェース要素のオン・オフを切り替え、音楽やゲームオーバーの効果音の状態を管理します。

これらの状態の変更メソッドは、適切なトリガーイベントが発生した場合に他のスクリプトから呼び出されます。例えば、`gameOver()`メソッドはボールが画面下から出た時に `ball.js` によって呼び出されます。

### アプリケーションイベント

ゲームスクリプトがどのようにアプリケーションでイベントを発生させるかを確認してみましょう。

```javascript
this.app.fire("game:start")
```

イベントは、一つのスクリプトを他のスクリプトと通信させるための非常に便利な方法です。オブジェクトがイベントの発生を選択します(この場合は`this.app`)。オブジェクトへのアクセス権を持つ他のコードは、このオブジェクトのイベントにリッスンすることができ、イベントが発生したとき、コードに通知が送られます。

ここで問題となのは、コードがイベントにリッスンし始めるために、オブジェクトにアクセスする必要があるということです。アプリケーションイベントが非常に便利なのはこのためです。PlayCanvas内のすべてのスクリプトに`this.app`へのアクセス権があります。それは他のスクリプトとの間の中央通信ハブとして機能させることで有用になります。

イベントを明確にし、衝突を避けるために、名前空間パターンを使用しています。上記の`game:start` イベントをリッスンする場合、次のコードを使用します：

```javascript
this.app.on("game:start", function () {
    console.log("game:startイベントが発動");
}, this)
```

### スコア

ゲームスクリプトは現在のスコアも管理します。これは、スコアを変更するためのメソッドを公開し、スコアが変更したことを他のコードに知らせるためにイベントを発生させます。

### 解像度

最後に、モバイルとデスクトップの両方でメインキャンバスが正しいサイズになることを確認するために、ゲームのスクリプトは解像度の初期の選択を処理します。モバイルでは(640ピクセル未満の画面)、ゲームが画面全体を埋めます。デスクトップでは、プロジェクト設定で設定した定義済みの解像度を使用します。

## input.js

入力スクリプトはマウスやタッチスクリーンからの入力にリッスンし、これらの入力を標準的な「タップ」に統一し、アプリケーションにタップが発生していることを知らせます。

```javascript
var Input = pc.createScript('input');

Input.attributes.add('ball', {type: 'entity'});
Input.attributes.add('camera', {type: 'entity'});
Input.attributes.add('ballRadius', {type: 'number', default: 0.5});

Input.worldPos = new pc.Vec3();

// エンティティ毎に一度呼び出されるコードのinitialize
Input.prototype.initialize = function() {

    var self = this;

    this._paused = true;

    // 入力に応答するべきか分かるよう、ゲームイベントにリッスンする
    this.app.on("game:start", function () {
        self._paused = false;
    });
    this.app.on("game:gameover", function () {
        self._paused = true;
    });

    // 可能であればタッチイベントを設定する
    if (this.app.touch) {
        this.app.touch.on("touchstart", this._onTouchStart, this);
    }

    // マウスイベントを設定
    this.app.mouse.on("mousedown", this._onMouseDown, this);
};

Input.prototype._onTap = function (x, y) {
    var p = this.ball.getPosition();
    var camPos = this.camera.getPosition();
    var worldPos = Input.worldPos;

    // タッチまたはクリックの3Dワールドで位置を取得
    // worldPos変数で保管。
    // この位置はボールと同じだけカメラから離れています
    this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);

    // ボールへのタッチ／クリックの距離を取得
    var dx = (p.x - worldPos.x);
    var dy = (p.y - worldPos.y);

    // クリックがボールの中の場合、ボールをタップします
    var lenSqr = dx*dx + dy*dy;
    if (lenSqr < this.ballRadius*this.ballRadius) {
        this.ball.script.ball.tap(dx, dy);
    }
};

Input.prototype._onTouchStart = function (e) {
    if (this._paused) {
        return;
    }

    // イベントに反応
    var touch = e.changedTouches[0];
    this._onTap(touch.x, touch.y);

    // マウスイベントが発動するのも止めます
    e.event.preventDefault();
};

Input.prototype._onMouseDown = function (e) {
    if (this._paused) {
        return;
    }

    // イベントに反応
    this._onTap(e.x, e.y);
};
```

まず、initializeでイベントのリスニングを設定します。ゲームが一時停止中(つまりメニューまたはゲームオーバー状態)であることを判断するために、アプリケーションのイベントはにリッスンします。入力が一時停止されている場合、タップに反応しません。次に、タッチイベント (`this.app.touch`が利用可能か確認する必要があります)とマウスイベントにリッスンします。

### タッチイベント

タッチイベントの場合、最初のタッチの画面座標を渡します。また、ブラウザが `click`イベントを生成することを防ぐためにブラウザで`preventDefault()` を呼びます。

### マウスイベント

「マウスダウン」イベントではタップコードを介してスクリーン座標を渡します。 PlayCanvasはタッチとマウスイベントが同じ座標系を持っていることを保証します。これは通常のブラウザイベントとは異なります！

### タップ

`_onTap()` は画面座標(x, y)を使用してボールに当たっているかを判断し、当たっている場合はボールのコードにタップされたことを知らせます。

```javascript
this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);
```

具体的には、この関数は画面座標を(x, y)を使用してカメラに要求を出し、画面上のその位置の下に3Dの点が来るよう変換します。これを行うには、この3Dの点の画面からの距離を深さで指定する必要があります。このケースでは、ボールの位置と同じ深さに3Dの点があります。

ベクター`Input.worldPos`も渡します。PlayCanvasアプリケーションでは、更新ループ内で新しいオブジェクトを作成することを回避するべきです。例えば、新しいベクターを作成するために`new pc.Vec3()` を呼び出す場合です。メモリ割り当てが増えると(`new`を呼ぶことで)、割り当てをクリアするためにブラウザはより多くのGarbage Collectionを行う必要があります。Garbage Collectionはオペレーション(比較的遅い)で、頻繁に行うとゲームやアプリケーションの動作に支障をもたらします。

ほとんどの場合、PlayCanvasは事前にオブジェクトの割り当てや再利用ができるようにベクターまたは類似のオプションを渡すオプションを提供します。

```javascript
// タッチ／クリックからボールへの距離を取得
var dx = (p.x - worldPos.x);
var dy = (p.y - worldPos.y);

// クリックがボールの中の場合、ボールをタップ
var lenSqr = dx*dx + dy*dy;
if (lenSqr < this.ballRadius*this.ballRadius) {
    this.ball.script.ball.tap(dx, dy);
}
```

タップした位置の3D点を取したら、それがボールと重なっているかどうかをテストします。ここでは、二乗半径を、タップとボールの間の距離の二乗値に対してテストします。これにより、テストするたびに時間のかかる平方根オペレーションを行わずにすみます。

タップがボールに当たると、タップが発生した場所のボールからの距離を渡し、ボールスクリプトで`tap(dx, dy)` 関数を呼び出します。これは[パート4][3]で使用します。

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-four/
[4]: https://playcanvas.com/project/406050

