---
title: 通信
template: usermanual-page.tmpl.html
position: 6
---

イベントは、毎フレーム確認をせずに、発生する出来事に応答するためにスクリプト間で通信する便利な方法です。

PlayCanvas Engineには、如何なるオブジェクトにもイベント処理を追加できるシンプルな方法があります。

```javascript
pc.events.attach(object);
```

これは`on()`, `off()`, `fire()` , `hasEvent()` メソッドをオブジェクトに追加します。つまり、そのオブジェクトから始動されるイベントに対してリッスンすることができます。

デフォルトで、全てのスクリプトインスタンスはイベントを始動できます。手動で呼ぶ必要はありません。

## イベントの使用

`fire()`を使用してイベントをトリガ（）`。この例では、プレイヤーのスクリプトは、フレーム毎に引数として渡すxとy値で`move`イベントを発生させます。

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.fire('move', x, y);
};
```

`on()` と `off()`を使用してイベントをリッスン。この例では、表示スクリプトは、プレーヤーの`move`イベントをリッスンし、xとyの値を出力します。

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

### アプリケーションイベント

「アプリケーションイベント」と呼ばれる、エンティティ間の通信にイベントを使用する便利で強力な方法があります。上記の例で確認できる通り、特定のエンティティに対してイベントをリッスンするとセットアップコストが発生します。たとえば、リスナーはイベントを発生される特定のエンティティへの参照を持つ必要があります。動作するケースもありますが、基本的にはイベントを発生させるために中央ハブとしてメインアプリケーション(`this.app`)を使用することがより適切です。イベントを使用するために、エンティティの参照を維持する必要がないことを意味します。

これは、`this.app`上のすべてのイベントをリッスンすることによって動作します。慣例により、イベントの範囲を通知し衝突を防止するために、イベント名に名前空間を使用します。たとえば、プレイヤーで`move` イベントを発生させる代わりに`player:move` イベントをアプリケーションで発生させます。

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

`player:move` イベントのリッスン。

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

イベントの詳細は [API Reference][1]からご確認ください

[1]: http://developer.playcanvas.com/en/api/pc.events.html

