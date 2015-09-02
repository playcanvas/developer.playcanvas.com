---
title: Communication
template: page.tmpl.html
position: 4
---

Communication between different scripts is very straightforward. Script Instances are exposed through the script component on an Entity.

For example,

~~~javascript~~~
// player.js
pc.script.create("player", function (app) {
    var Player = function (entity) {
        this.entity = entity;
    };

    Player.prototype = {
        move: function (x, y) {
            this.entity.translate(x, y, 0);
        }
    };

    return Player;
});
~~~

~~~javascript~~~

// input.js
pc.script.create("input", function (app) {
    var Input = function (entity) {
        this.entity = entity;
    };

    Input.prototype = {
        update: function (dt) {
            if (app.keyboard.isPressed(pc.KEY_LEFT)) {
                // Call the move() method on the player script
                this.entity.script.player.move(-1, 0);
            }

            if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
                // Call the move() method on the player script
                this.entity.script.player.move(1, 0);
            }
        }
    };

    return Input;
});
~~~

In the example above we have two scripts: *player.js* and *input.js* are attached to the same Entity. The Input script checks for input on the keyboard and if the left or right arrow key is pressed it tells the Player script to move the player.

This is the line that communicates between script instances

~~~js~~~
this.entity.script.player.move(1,0);
~~~

All scripts attached to a script component are exposed on the script component itself under the name defined in the `pc.script.create()` function.

## Events

If you wish to broadcast to many scripts all at once you can use the [event system][0] to send and listen for events.

[0]: /user-manual/scripting/events

