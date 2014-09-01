---
title: First Person Camera
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/first_person_camera?overlay=false" ></iframe>

*Use the mouse to look around, and the cursor keys to move. Click the mouse to hide the cursor*

In this tutorial, we'll create a simple script for a first-person camera. That is, a scene where it is like the camera is your eyes and you can look around with by moving the mouse and move around using the cursor keys.

## The Pack setup

![Pack Explorer](/images/tutorials/first_person_camera_pack.png)

You should look at the [Pack][designer] for this tutorial yourself in the Designer. The setup is very simple, pay particular attention to the Camera Entity. The Camera Entity has a single script attached which where the code for the first person controls are.

## The Camera script

The camera script is a normal PlayCanvas javascript file, for more information on scripts see the [scripting guide][scripting_guide]. The full source for the script is found at the bottom of this tutorial, or in the [tutorials code repository][tutorials_code] (note you can only access this if you are logged in).

### The setup

In the constructor of the script we initialize a few variables and then we set up the mouse input, by binding some event handlers.

~~~javascript~~~
// Disabling the context menu stops the browser displaying a menu when
// you right-click the page
context.mouse.disableContextMenu();
context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);
~~~

`context.mouse` is always available on desktop platforms, it is used to access mouse events, like movement and button presses.

`context.mouse.disableContextMenu()` prevents right-clicking on the canvas from bringing up the default browser context menu. You should do this if you want to respond to right-clicks, but be careful, browser users will expect right-clicking to bring up a menu, so use it only if you feel you have to.

Next we bind two event handlers using the `on()` function.

For example, `context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this)` responds to the EVENT_MOUSEMOVE event and calls the `this.onMouseMove` method. The final `this` is the scope of the event, it determines what the `this` variable is in your event handler.

### Event handlers

~~~javascript~~~
onMouseMove: function (event) {
    // Update the current Euler angles, clamp the pitch.
    this.ex -= event.dy / 5;
    this.ex = pc.math.clamp(this.ex, -90, 90);
    this.ey -= event.dx / 5;
},
~~~

Our first event handler handles the mouse move event. The `event` variable is a [`pc.input.MouseEvent`][mouse_event] and in this case we are interested in `event.dx` and `event.dy`, which are the number of pixels the mouse has moved since the last mouse event. In this handler we scale the amount moved and apply it to our values of `ex` and `ey` which are the orientation angles of the camera. We are clamping `ex` (the up/down angle) to be between -90 and 90.

~~~javascript~~~
onMouseDown: function (event) {
    // When the mouse button is clicked try and capture the pointer
    if (!pc.input.Mouse.isPointerLocked()) {
        context.mouse.enablePointerLock();
    }
},
~~~

The second event handler reacts to a mouse button being pressed. In this method, we are checking to see if the pointer is locked, if it isn't then we try to lock it. Pointer Locking hides the users pointer but keeps sending mouse events to the application. This is useful for things like first-person cameras because if the pointer is not locked it can move out of the canvas or window and then you can no longer receive events.

<div class="pc-notice-message pc-small">
Pointer Lock is currently only fully supported in Google Chrome. In Firefox it works, but only in full-screen mode.
</div>

### The Update loop

~~~javascript~~~
update: function (dt) {
    // Update the camera's orientation
    this.entity.setEulerAngles(this.ex, this.ey, 0);

    // Update the camera's position
    if (context.keyboard.isPressed(pc.input.KEY_UP)) {
        this.entity.translateLocal(0, 0, -SPEED*dt);
    } else if (context.keyboard.isPressed(pc.input.KEY_DOWN)) {
        this.entity.translateLocal(0, 0, SPEED*dt);
    }

    if (context.keyboard.isPressed(pc.input.KEY_LEFT)) {
        this.entity.translateLocal(-SPEED*dt, 0, 0);
    } else if (context.keyboard.isPressed(pc.input.KEY_RIGHT)) {
        this.entity.translateLocal(SPEED*dt, 0, 0);
    }
},
~~~

In the update method we update the orientation and the position of the camera. First we set the Euler Angles (see the [Entities intro][entities_intro] for more about Eulers) using the values that are updated by mouse events. Then we check for keyboard input. We're listening for the four arrow keys and if they are pressed we translate the Entity in local space. We use local space because we always want to move forward/back or left/right relative to the direction the camera is facing.

## Summary

That's all there is to it. The next step for most games is to make the first person camera a physical object in the world. That means you can't just fly around, you have to fall under gravity and bump into walls.

## Complete Listing

~~~javascript~~~
pc.script.create('first_person_camera', function (context) {
    var SPEED = 10;

    var FirstPersonCamera = function (entity) {
        this.entity = entity;

        // Camera euler angle rotation around x and y axes
        var eulers = this.entity.getEulerAngles()
        this.ex = eulers.x;
        this.ey = eulers.y;


        // Disabling the context menu stops the browser displaying a menu when
        // you right-click the page
        context.mouse.disableContextMenu();
        context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
        context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);

    };

    FirstPersonCamera.prototype = {
        update: function (dt) {
            // Update the camera's orientation
            this.entity.setEulerAngles(this.ex, this.ey, 0);

            // Update the camera's position
            if (context.keyboard.isPressed(pc.input.KEY_UP)) {
                this.entity.translateLocal(0, 0, -SPEED*dt);
            } else if (context.keyboard.isPressed(pc.input.KEY_DOWN)) {
                this.entity.translateLocal(0, 0, SPEED*dt);
            }

            if (context.keyboard.isPressed(pc.input.KEY_LEFT)) {
                this.entity.translateLocal(-SPEED*dt, 0, 0);
            } else if (context.keyboard.isPressed(pc.input.KEY_RIGHT)) {
                this.entity.translateLocal(SPEED*dt, 0, 0);
            }
        },

        onMouseMove: function (event) {
            // Update the current Euler angles, clamp the pitch.
            this.ex -= event.dy / 5;
            this.ex = pc.math.clamp(this.ex, -90, 90);
            this.ey -= event.dx / 5;
        },

        onMouseDown: function (event) {
            // When the mouse button is clicked try and capture the pointer
            if (!pc.input.Mouse.isPointerLocked()) {
                context.mouse.enablePointerLock();
            }
        },
    };

   return FirstPersonCamera;
});
~~~

[designer]: http://playcanvas.com/playcanvas/tutorials/designer/pack/e22564b3-d380-4352-8e69-4fb0155f025a
[scripting_guide]: /user-manual/scripting/
[tutorials_code]: https://playcanvas.com/playcanvas/tutorials/code
[mouse_event]: /engine/api/stable/symbols/pc.input.MouseEvent.html
[entities_intro]: /tutorials/beginner/manipulating-entities/
