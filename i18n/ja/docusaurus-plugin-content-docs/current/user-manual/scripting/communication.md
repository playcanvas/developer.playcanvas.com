---
title: スクリプト間の通信方法
sidebar_position: 6
---

イベントは、毎フレームチェックすることなく発生したことに応答するためにスクリプト間で通信する便利な方法です。

イベントは、PlayCanvasの多くのオブジェクトタイプ（例えばスクリプトインスタンスなど）に組み込まれており、エンジンの[`EventHandler`][1]クラスから継承されたイベントハンドリングサポートがあります。イベントハンドリングオブジェクトには以下のメソッドがあります：

* `on()` - イベントリスナーを登録します。
* `once()` - 最初に呼ばれた後に自動的に登録解除されるイベントリスナーを登録します。
* `off()` - イベントリスナーの登録を解除します。
* `fire()` - イベントを送信します。
* `hasEvent()` - 特定のイベントをリッスンしているかどうかを問い合わせます。

## イベントの使用

`fire()` を使用してイベントをトリガーします。この例では、プレイヤースクリプトが x と y の値を引数として毎フレーム `move` イベントを発生させています。

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.fire('move', x, y);
};
```

`on()` と `off()`を使用してイベントをリッスンする。この例では、表示スクリプトは、プレーヤーの`move`イベントをリッスンし、xとyの値を出力します。

```javascript
var Display = pc.createScript('display');

// set up an entity reference for the player entity
Display.attributes.add('playerEntity', { type: 'entity' });

Display.prototype.initialize = function () {
    // method to call when player moves
    var onPlayerMove = function(x, y) {
        console.log(x, y);
    };

    // listen for the player move event
    this.playerEntity.script.player.on('move', onPlayerMove);

    // remove player move event listeners when script destroyed
    this.playerEntity.script.player.on('destroy', function() {
        this.playerEntity.script.player.app.off('move', onPlayerMove);
    });
};
```

## アプリケーションイベント

「アプリケーションイベント」と呼ばれる、エンティティ間で通信するためにイベントを使用する非常に便利で強力な方法があります。上記の例では特定のエンティティでイベントを聞くことでセットアップコストが発生します。たとえば、イベントを発生させている特定のエンティティに参照を持つ必要があります。これはいくつかの場合には機能しますが、より一般的な場合には、イベントを使用するためにエンティティの参照を保持する必要はなく、`this.app` を中心に使用する方が適切です。

これは `this.app` 上のすべてのイベントを発生させて聞くことによって機能します。イベントのスコープをシグナルするためにイベント名に名前空間を使用し、クラッシュを防ぎます。たとえば、`player:move` イベントはプレイヤーの `move` イベントを発生させる代わりにアプリケーション上で発生させます。

アプリケーションイベントを使用して同じ例を試してみましょう。

`player:move` イベントの発動。

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.app.fire('player:move', x, y);
};
```

`player:move` イベントをリッスン。

```javascript
var Display = pc.createScript('display');

Display.prototype.initialize = function () {
    // method to call when player moves
    var onPlayerMove = function(x, y) {
        console.log(x, y);
    };

    // listen for the player:move event
    this.app.on('player:move', onPlayerMove);

    // remove player:move event listeners when script destroyed
    this.on('destroy', function() {
        this.app.off('player:move', onPlayerMove);
    });
};
```

ご覧の通り、これにより設定コードを減らし、よりクリーンなコードになります。

[1]: https://api.playcanvas.com/classes/Engine.EventHandler.html
