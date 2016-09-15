---
title: 通信
template: usermanual-page.tmpl.html
position: 6
---

事件是一种有效的方法来进行脚本和脚本之间的通信为了响应某些事件而不用检查每个帧。

PlayCanvas引擎包含了一个简单的方法添加事件到任意对象：

```javascript
pc.events.attach(object);
```

这将会添加以下几种方法到对象： `on()`, `off()`, `fire()` and `hasEvent()` 。这就意味着用户可以响应对象所触发的事件。

默认情况下，所有脚本实例都可以触发事件用户不必通过手动方式触发。

## 使用事件

通过`fire()`来触发一个事件。在这个例子中，名为player的脚本在每个帧都触发了`move` 事件，X和Y值作为参数传递。

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.fire('move', x, y);
};
```

通过`on()` 和 `off()`监听事件的触发。在这个例子中，名为DIsplay的脚本监听了在Player上的`move` 事件并且显示X和Y的值。

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

## 应用事件

PlayCanvas提供了一个方便而又强大的方法来对实体和实体之间进行通信，我们称之为“应用事件”。就像上面的例子，在特定的实体监听事件将会带来一些设置成本。譬如，监听器必须引用正在触发事件的特定实体，这将发生在某些情况下，但是对于一般情况下，我们发现它更适合使用主要应用(`this.app`) 作为中心枢纽来触发事件。这意味着为了使用事件用户不必每次都引用实体。

通过触发和监听在`this.app`的所有事件。按照惯例，为了向事件范围内发射信号和避免冲突我们使用命名空间作为事件名称。譬如，`player:move` 事件将会在应用程序中被触发而不是触发`move`事件。

来让我们通过使用应用事件来进行相同的例子。

触发 `player:move` 事件。

```javascript
var Player = pc.createScript("player");

Player.prototype.update = function (dt) {
    var x = 1;
    var y = 1;
    this.app.fire("player:move", x, y);
};
```

监听 `player:move` 事件。

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

就如您所见，这有效的减少了代码设置帮助代码看起来更清晰。

更多的消息请点击 [API Reference][1]

[1]: http://developer.playcanvas.com/en/api/pc.events.html

