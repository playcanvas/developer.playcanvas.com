---
title: Communication
sidebar_position: 6
---

Events are a useful way of communicating between scripts in order to respond to things that happen without checking every frame.

Many PlayCanvas object types (such as script instances) have event handling support built-in, inherited from the Engine's [`EventHandler`][1] class. Event handling objects have the following methods:

* `on()` - registers an event listener.
* `once()` - registers an event listener that unregisters itself after the first time it is called.
* `off()` - unregisters an event listener.
* `fire()` - sends an event.
* `hasEvent()` - queries whether an object is listening on a particular event.

## Using events

Trigger an event using `fire()`. In this example, the player script fires a `move` event every frame with the x and y values passed as arguments.

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    const x = 1;
    const y = 1;
    this.fire('move', x, y);
};
```

Listen for events firing by using `on()` and `off()`. In this example, the display script listens for the `move` event on the player and prints out the x and y values.

```javascript
var Display = pc.createScript('display');

// set up an entity reference for the player entity
Display.attributes.add('playerEntity', { type: 'entity' });

Display.prototype.initialize = function () {
    // method to call when player moves
    const onPlayerMove = function(x, y) {
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

## Application Events

There is a very convenient and powerful method of using events to communicate between entities that we call "Application Events". As you can see in the example above, listening for events on specific entities incurs some set up cost. For instance, the listener must have a reference to the specific entity that is firing the event. This works with some cases, but for a more general case we find that it is more appropriate to use the main application (`this.app`) as a central hub for firing events. This means you don't have to keep references of entities around in order to use the events.

This works by firing and listening to all events on `this.app`. By convention, we use namespaces in event names in order to signal event scope and prevent clashes. For example, the `player:move` event is fired on the application instead of firing the `move` event on the player.

Let's try the same example using application events.

Firing the `player:move` event:

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    const x = 1;
    const y = 1;
    this.app.fire('player:move', x, y);
};
```

Listening for the `player:move` event:

```javascript
var Display = pc.createScript('display');

Display.prototype.initialize = function () {
    // method to call when player moves
    const onPlayerMove = function(x, y) {
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

As you can see, this reduces the amount of set up and makes for cleaner code.

[1]: https://api.playcanvas.com/engine/classes/EventHandler.html
