---
title: シンプルなゲームの作成 - パート3
layout: tutorial-page.hbs
tags: games
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="シンプルなゲームの作り方 - Part 3"></iframe>

[フルプロジェクトはこちら][4]を参照してください。[Part 1][1] および [Part 2][2] をまだ読んでいない場合は、これらを先に読んでください。*

## ゲームのスクリプトと入力

これらの2つのスクリプト `game.js` と `input.js` はシーン内のルートエンティティである "Game" にアタッチされています。スクリプトは通常、階層でエンカウントされた順序で実行されるため、非エンティティ特有のスクリプトを最初のエンティティにアタッチするのが最も簡単です。また、設定パネルのスクリプトの読み込み順序を管理することで、エンティティにアタッチせずに最初にスクリプトを読み込むこともできます。

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

// initialize code called once per entity
Game.prototype.initialize = function() {
    this._state = Game.STATE_MENU;
    this._score = 0;

    this.setResolution();

    window.addEventListener("resize", this.setResolution.bind(this));

    // UI からのイベントをリッスンする
    this.app.on("ui:start", this.start, this);
    this.app.on("ui:reset", this.reset, this);
};

Game.prototype.setResolution = function () {
    // 画面の幅が 640 未満の場合は画面いっぱいに表示する
    // それ以外はデフォルト設定を使用する

    var w = window.screen.width;
    var h = window.screen.height;

    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};

// MENU から INGAME に移動するために呼び出す
Game.prototype.start = function () {
    this._state = Game.STATE_INGAME;
    this.app.fire("game:start");
    this.uiMenu.enabled = false;
    this.uiInGame.enabled = true;

    this.audio.sound.play("music");
};

// INGAME から GAMEOVER に移動するために呼び出す
Game.prototype.gameOver = function () {
    this._state = Game.STATE_GAMEOVER;
    this.app.fire("game:gameover");
    this.uiInGame.enabled = false;
    this.uiGameOver.enabled = true;

    this.audio.sound.stop();
    this.audio.sound.play("gameover");
};

// GAMEOVER から MENU に移動するために呼び出す
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

// スコアを加算する
Game.prototype.addScore = function (v) {
    this._score += v;
    this.app.fire("game:score", this._score);
};

// スコアをリセットする
Game.prototype.resetScore = function () {
    this._score = 0;
    this.app.fire("game:score", this._score);
};
```

### ゲームの状態

ゲームスクリプトは、ゲームの全体的な状態を管理し、ゲームの状態を変更するためのメソッドを公開し、ゲームの状態が変更されたことを他のコードに通知するためのイベントを発行します。

私たちはゲームを「Menu」、「In Game」、「Game Over」の3つの主要な状態に分割しました。ゲームスクリプトはそれぞれの状態間の移動を行うメソッド、`start()`、`gameOver()`、`reset()` を提供します。それぞれが `_state` 変数を設定して、どの状態にいるかを記憶し、アプリケーションイベントを発生させ、その変更を他のスクリプトに通知します。ユーザーインターフェイスの要素の切り替えと、音楽またはゲームオーバーサウンドエフェクトの状態を管理します。

これらの状態変更メソッドは、相応しいトリガーイベントが発生したときに、他のスクリプトから呼び出されます。たとえば、`ball.js` によってボールが画面下に落ちたときに、`gameOver()` メソッドが呼び出されます。

### アプリケーションイベント

ここで、イベント発火するゲームスクリプトの方法について見てみましょう。

```javascript
this.app.fire("game:start")
```

イベントは、1つのスクリプトから多数の他のスクリプトに通信するための非常に有用な方法です。イベントの動作方法は、オブジェクト(この場合は `this.app`)がイベントを「発火」することを選択することです。オブジェクトにアクセスする他のコードは、このオブジェクト上の1つまたは複数のイベントをリッスンすることを選択し、コードはイベントが発生すると通知されます。

これに関連する問題の1つは、コードがオブジェクトにアクセスする必要があるということです。これがアプリケーションイベントが非常に便利である理由です。PlayCanvas のすべてのスクリプトは `this.app` にアクセスできます。それは他のすべてのスクリプトの間に中央の通信ハブとして機能することが有用です。

私たちは、名前空間パターンを採用し、イベントを明確にし、名前の衝突を回避するようにしています。上記の `game:start` イベントをリッスンするためのコードは以下のようになります。

```javascript
this.app.on("game:start", function () {
    console.log("game:start event was fired");
}, this)
```

### ポイント

ゲームスクリプトはまた、現在のポイントを管理します。スコアを変更するために使用されるメソッドを公開し、スコアが変更されたことを他のコードに通知するためにイベントを発行します。

### 解像度

最後に、ゲームスクリプトが初期解像度の選択を処理し、メインキャンバスがモバイルとデスクトップの両方で正しいサイズになるようにします。モバイルの場合(幅が640ピクセル未満と定義される)は、ゲーム画面を画面いっぱいに表示します。デスクトップでは、プロジェクト設定で定義された解像度を使用します。

## input.js

入力スクリプトは、マウスまたはタッチスクリーンからの入力をリッスンし、2つの入力から一般的な目的の "タップ" に正規化し、残りのアプリケーションと通信してタップが発生したことを通// イベントリスニングの設定
Input.prototype.initialize = function () {
    this._paused = false;

    // アプリケーションイベントを受け取って、ゲームが一時停止中か、メニューやゲームオーバー状態にあるかを判断する
    this.app.on('game:paused', function () {
        this._paused = true;
    }, this);

    this.app.on('game:resumed', function () {
        this._paused = false;
    }, this);

    // `touch`が有効であることを確認してから、タッチイベントをリスンする
    if (this.app.touch) {
        this.element.addEventListener('touchstart', this._onTouchStart.bind(this), false);
    }

    // マウスイベントをリスンする
    this.element.addEventListener('mousedown', this._onMouseDown.bind(this), false);

};

### Input.prototype._onTap = function (x, y) {
    if (this._paused) {
        return;
    }

    // タッチ位置を宣言
    var camPos = this.camera.entity.getPosition();
    var p = this.camera.entity.camera.screenToWorld(x, y, this.camera.entity.camera.farClip, this.entity.screenToWorldTmp);

    // `Input.worldPos`ベクトルに代入
    var worldPos = Input.worldPos;
    worldPos.set(p.x, p.y, camPos.z - p.z);

    // ボールの中にタップがあれば、ボールをタップする
    var dx = (p.x - worldPos.x);
    var dy = (p.y - worldPos.y);
    var lenSqr = dx * dx + dy * dy;
    if (lenSqr < this.ballRadius * this.ballRadius) {
        this.ball.script.ball.tap(dx, dy);
    }

### };

Input.prototype._onTouchStart = function (e) {
    if (this._paused) {
        return;
    }

###     // タッチイベントを宣言
    var touch = e.changedTouches[0];
    this._onTap(touch.x, touch.y);

    // ブラウザイベント上でpreventDefault()を呼び出して、ブラウザが生成する`click`イベントを回避する
    e.event.preventDefault();

};

Input.prototype._onMouseDown = function (e) {
    if (this._paused) {
        return;
    }

    // マウスイベントを宣言
    this._onTap(e.x, e.y);

};

```

最初に、initialize()でイベントリスニングの設定を行っています。一時停止中(メニューやゲームオーバー状態)であるかどうかを決定するために、アプリケーションイベントを監視します。入力が一時停止されている場合、タップに対応しません。次に、タッチイベント(`this.app.touch`が利用可能かどうかを確認する必要があることに注意してください)とマウスイベントをリッスンします。

### タッチイベント

タッチイベントでは、最初のタッチを取得し、スクリーン座標を通過します。また、ブラウザイベント上で`preventDefault()`を呼び出して、ブラウザが生成する`click`イベントを回避します。

### マウスイベント

「mousedown」イベントでスクリーン座標をタップコードに渡します。ただし、PlayCanvasは、タッチイベントとマウスイベントが同じ座標系であることを保証します。これは通常のブラウザイベントでは発生しません!

### タップ

`_onTap()`は、スクリーン座標(x、y)を受け取り、これがボールに「ヒット」したかどうかを調べ、ボールコードにそのことを伝えます。 

```javascript
this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);
```


この関数は詳細で、スクリーン座標(x、y)を受け取り、カメラにその3D空間の位置を尋ねて、スクリーン上のその点の下にある3D空間の位置を取得します。このために、必要な深さを提供する必要があります。この場合、ボールと同じ深度で3D点を取得します。

`Input.worldPos`というベクトルを渡します。PlayCanvasアプリケーションでは、updateループ中に`new pc.Vec3()`を呼び出して新しいベクトルを作成するなど、新しいオブジェクトを作成することを避けることが重要です。メモリ割り当てを行う(”新しい”を呼び出すこと)回数が多いほど、ブラウザのGarbage Collection(ガベージコレクション)が、割り当てを解放するためのメモリを解放するために行う必要があります。Garbage Collectionは(比較的遅い)操作であり、頻繁に発生すると、ゲームまたはアプリケーションがスタッタリングする原因となります。

ほとんどの場合、PlayCanvasは、ベクトルまたはそれに類するオプションを提供し、オブジェクトを事前に割り当てて再利用できるようにします。

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-four/
[4]: https://playcanvas.com/project/406050
