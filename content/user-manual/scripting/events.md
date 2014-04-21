---
title: Events
template: page.tmpl.html
position: 5
---

Events are a useful way of responding to things that happen without checking every frame.

The PlayCanvas Engine contains a simple way to add event handling to any object:

~~~javascript~~~
pc.script.create("player", function (context) {
    var Player = function (entity) {
        this.entity = entity;

        // Attach event functions
        pc.events.attach(this);
    };

    Player.prototype = {
        //...
    };

    return Player;
});
~~~

In the constructor of Player, we're calling `pc.events.attach()` which adds event functions to the Player instance.

## Using events

Listen for events firing by using `on()` and `off()`

~~~js~~~
player.on("move", function (x, y) { console.log("Player moved"); }, this)
~~~

Fire events using `fire()`

~~~js~~~
player.fire("move", x, y);
~~~

More details in the [API Reference](http://developer.playcanvas.com/engine/api/stable/symbols/pc.events.html#fire)
