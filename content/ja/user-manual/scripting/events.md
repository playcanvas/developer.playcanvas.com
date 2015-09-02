---
title: Events
template: page.tmpl.html
position: 5
---

Events are a useful way of responding to things that happen without checking every frame.

The PlayCanvas Engine contains a simple way to add event handling to any object:

~~~javascript~~~
pc.events.attach(object);
~~~

This will add the methods: `on()`, `off()`, `fire()` and `hasEvent()` to the object. Which means that you can listen for events fired by that object.

By default all script instances can fire events you don't need to call this manually.

## Using events

Listen for events firing by using `on()` and `off()`.

~~~javascript~~~
pc.script.create("display", function (app) {
    var Display = function (entity) {
        this.entity = entity;
    };

    Display.prototype = {
        initialize: function () {
            var player = app.findByName("Player");

            // remove move event listeners
            player.script.player.off("move");

            // listen move event
            player.script.player.on("move", function (x, y) {
                //...
            });

        }
    };

    return Display;
});
~~~

Trigger an event using `fire()`

~~~javascript~~~
pc.script.create("player", function (app) {
    var Player = function (entity) {
        this.entity = entity;
    };

    Player.prototype = {
        update: function (dt) {
            var x = 1;
            var y = 1;

            this.fire("move", x, y);
        }
    };

    return Player;
});
~~~

More details in the [API Reference][1]

[1]: http://developer.playcanvas.com/engine/api/stable/symbols/pc.events.html#fire

