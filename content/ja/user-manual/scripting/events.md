---
title: Events
template: usermanual-page.tmpl.html
position: 6
---

イベントは、毎フレーム確認をせずに、発生する出来事に応答できる便利な方法です。

PlayCanvas Engineには、如何なるオブジェクトにもイベント処理を追加できるシンプルな方法があります。

```javascript
pc.events.attach(object);
```

これにより`on()`, `off()`, `fire()` , `hasEvent()` メソッドがオブジェクトに追加されます。つまり、そのオブジェクトから始動されるイベントに対してリッスンすることができます。

デフォルトで、全てのスクリプトインスタンスはイベントを始動できます。手動で呼ぶ必要はありません。

## イベントの使用

Trigger an event using `fire()`. In this example, the player script fires a `move` event every frame with the x and y values passed as arguments.

```javascript
var Player = pc.createScript("player");

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.fire("move", x, y);
};
```

Listen for events firing by using `on()` and `off()`. In this example, the display script listens for the `move` event on the player and prints out the x and y values.

```javascript
var Display = pc.createScript("display");

// set up an entity reference for the player entity
Display.attributes.add("playerEntity", {type: "entity"});

Display.prototype.initialize = function () {
    // remove all move event listeners on the player
    this.playerEntity.script.player.off("move");

    // listen for the move event
    this.playerEntity.script.player.on("move", function (x, y) {
        console.log(x, y);
    });
};
```

## Application Events

There is a very convenient and powerful method of using events to communicate between entities that we call "Application Events". As you can see in the example above listening for events on specific entities incurs some set up cost. For instance, the listener must have a reference to the specific entity that is firing the event. This works with some cases, but for a more general case we find that it is more appropriate to use the main application (`this.app`) as a central hub for firing events. This means you don't have to keep references of entities around in order to use the events.

This works by firing and listening to all events on `this.app`. By convention we use namespaces in event names in order to signal event scope and prevent clashes. For example, the `player:move` event is fired on the application instead of firing the `move` event on the player.

Let's try the same example using application events.

Firing the `player:move` event.

```javascript
var Player = pc.createScript("player");

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.app.fire("player:move", x, y);
};
```

Listening for the `player:move` event.

```javascript
var Display = pc.createScript("display");

Display.prototype.initialize = function () {
    // remove all player:move event listeners
    this.app.off("player:move");

    // listen for the player:move event
    this.app.on("player:move", function (x, y) {
        console.log(x, y);
    });
};
```

As you can see this reduces set up code and makes for cleaner code.

More details on events in the [API Reference][1]

[1]: http://developer.playcanvas.com/en/api/pc.events.html

