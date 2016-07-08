---
title: Basic Keyboard Input
template: tutorial-page-legacy.tmpl.html
position: 1
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_keyboard?overlay=false"></iframe>

*Click to focus, then press `left arrow`, `right arrow` and `spacebar` to rotate the cube. Press and release the 'a' key to change color.*

Keyboard handling in the PlayCanvas engine is provided by the `pc.Keyboard` object. The Keyboard object provides a simple interface
for common keyboard operations like checking if a key is pressed or held down. It also takes away the various cross-browser problems with
handling keycodes and charcodes.

Take a look at the keyboard input Scene in the [tutorials project][1]. Here is the code for the tutorial:

~~~javascript~~~
pc.script.create("keyboard_handler", function (app) {

    var KeyboardHandler = function (entity) {
        this.entity = entity;
    };

    KeyboardHandler.prototype = {
        initialize: function () {
            // Use on() to listen for events on the keyboard device.
            // Arguments are:
            // 1) The event name to listen for
            // 2) The callback function to call when the event fires
            // 3) (optional) The value to use for 'this' in the callback function
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
            app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);

            this.redMaterial = app.assets.find("Red", pc.asset.ASSET_MATERIAL);
            this.whiteMaterial = app.assets.find("White", pc.asset.ASSET_MATERIAL);
        },

        update: function (dt) {
            /*
             * Notice in the demo that pressing and holding the arrow keys doesn't
             * make the block spin. wasPressed() is used to detect a
             * keypress that occurred since the last frame and will only be
             * called once even if the key is held down.
             */
            var angle = 0;
            if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                angle = -5;
            } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
                angle = 5;
            }

            /*
             * Notice that pressing and holding the space bar makes the block
             * continuously spin. isPressed() is used to detected if a
             * key is down right now. So it will be true every frame as long as
             * the key is still pressed.
             */
            if (app.keyboard.isPressed(pc.KEY_SPACE)) {
                angle = 1;
            }

            // Update the spinning cube
            this.entity.rotateLocal(0, angle, 0);
        },

        /*
        * Event handler called when key is pressed
        */
        onKeyDown: function (event) {
            // Check event.key to detect which key has been pressed
            if (event.key === pc.KEY_A) {
                this.entity.model.materialAsset = this.redMaterial;
            }

            // When the space bar is pressed this scrolls the window.
            // Calling preventDefault() on the original browser event stops this.
            event.event.preventDefault();
        },

        /*
        * Event handler called when key is released
        */
        onKeyUp: function (event) {
            // Check event.key to detect which key has been pressed
            if (event.key === pc.KEY_A) {
                this.entity.model.materialAsset = this.whiteMaterial;
            }
        },
    };

    return KeyboardHandler;
});
~~~

There are two ways of detecting keyboard input. The first is done in the update method of your scripts. Use `isPressed()` and `wasPressed()` and check whether a key is currently pressed or has just been pressed. The second uses events to respond to a key press or release as it happens.

## `isPressed` vs `wasPressed`

In the demo above you can see the difference in behaviour between `isPressed()` and `wasPressed()`.

When you press and hold the left or right arrow keys the cube will rotate by 5&deg;, but it will only rotate once. This is because `wasPressed()` only returns true for the frame immediately after the key was pressed.

If you press and hold the spacebar you will see that the cube rotates continuously by 1&deg; per frame. This is because `isPressed()` returns true for every frame in which the key is pressed.

### `isPressed(key)`

`isPressed(key)` checks to see if `key` is currently pressed and returns true if it is. It will return true for every frame while the key is pressed.

### `wasPressed(key)`

`wasPressed(key)` checks to see if `key` was pressed *since the last frame*. `wasPressed()` will only return true once for a single key press.

## Events

The second method of handling key presses is to listen for events. Two keyboard events are supported on the Keyboard device:

* `pc.EVENT_KEYDOWN`
* `pc.EVENT_KEYUP`

[DOM][3] keyboard events are implemented differently on different browsers so the PlayCanvas Engine provides events on the `pc.Keyboard` object so you can use the same code everywhere. When the keyboard events are fired the event handler is passed a `pc.KeyboardEvent` object which contains the key code of the key that was pressed on released.

Notice we are also passing a third argument to on(), which is `this` or the Script Instance itself. The third argument to on() is used as `this` in the event callbacks, so we need to pass it in here, otherwise it won't be set to the correct object.

## Key Codes

Identifying which key is pressed is done using key codes. These are numerical values which match up to a key on the keyboard. For example, pc.KEY_A is the `A` key, pc.LEFT is the left arrow key.

Note, you should always use the enumeration `pc.KEY_*` rather than using numerical values. As the actual value of these constants may change in the future.

## Try it out

Try it out in full screen [here][2] or at the top of the page. Compare tapping and holding the arrow keys, and tapping and holding the spacebar.

[1]: https://playcanvas.com/project/186/overview/tutorials
[2]: http://apps.playcanvas.com/playcanvas/tutorials/input_keyboard
[3]: /user-manual/glossary#dom

