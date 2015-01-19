---
title: More Cameras
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/more_cameras?overlay=false" ></iframe>

*Click to focus, then press `space` to zoom in and out, press `left arrow` and `right arrow` to switch to the left and right cameras*

The [Basic Cameras][basic_cameras] tutorial walks you through creating a camera Entity and adding it to your Pack. For a single static camera, no scripting is required. But for a more dynamic and interactive camera or for more advanced usage you might want to attach a script Component and program the camera behaviour yourself.

## Altering Attributes

The first way you might want to modify a camera at runtime, is to change the values of attributes on camera Component. You do this the same way that you set attributes on any other Component, by using the `set()` and `get()`
methods on the ComponentSystem.

~~~javascript~~~
pc.script.create('zoom', function (context) {
    // Creates a new Zoom instance
    var Zoom = function (entity) {
        this.entity = entity;

        this.targetFov = 45;
    };

    Zoom.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (context.keyboard.wasPressed(pc.KEY_SPACE) ) {
                if (this.targetFov == 10) {
                    this.targetFov = 45;
                } else {
                    this.targetFov = 10;
                }
            }

            var fov = this.entity.camera.fov;

            if (fov < this.targetFov) {
                fov += (10 * dt);
                if (fov > this.targetFov) {
                    fov = this.targetFov;
                }
            }

            if (fov > this.targetFov) {
                fov -= (10 * dt);
                if (fov < this.targetFov) {
                    fov = this.targetFov;
                }
            }

            this.entity.camera.fov = fov;
        }
    };

    return Zoom;
});
~~~

In this sample pressing the spacebar triggers a change in field of view. With the line `var fov = this.entity.camera.fov` we `get()` the value of `fov` from the camera component of the entity that this script is attached to.

With `context.keyboard.wasPressed()` we detect the keypress and toggle between the value of the target fov.

With the final two nested `if(){}` constucts we gradually change the fov values to create the zoom in/ zoom out effect.

With the line `this.entity.camera.fov = fov` we `set()` the fov camera attribute to the new value.

Notice that when you are zoomed out the top and bottom cubes are at the edges of the screen, this matches our expectation from the [PlayCanvas Designer scene][designer] where the cubes sit next to the
top and bottom sides of the camera [frustum][frustum]

## Current Camera

Another way you might want to create interactivity with cameras is by switching between multiple cameras. You can achieve this by adding several camera Entities to your pack; ensure that only one is activated; and then alter which is the current camera at runtime in your script.

~~~javascript~~~
pc.script.create('camera_manager', function (context) {
    // Creates a new CameraManager instance
    var CameraManager = function (entity) {
        this.entity = entity;
        
        this.activeCamera = null;
    };

    CameraManager.prototype = {
        setCamera: function (cameraName) {
            // Disable the currently active camera
            this.activeCamera.enabled = false;

            // Enable the newly specified camera
            this.activeCamera = this.entity.findByName(cameraName);
            this.activeCamera.enabled = true;
        },
        
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.activeCamera = this.entity.findByName('Center');
            context.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        },
        
        //prevents default browser actions, such as scrolling when pressing cursor keys
        onKeyDown: function (event) {
            event.event.preventDefault();
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (context.keyboard.wasPressed(pc.KEY_SPACE) ) {
                this.setCamera('Center');
            } else if (context.keyboard.wasPressed(pc.KEY_LEFT)) {
                this.setCamera('Left');
            } else if (context.keyboard.wasPressed(pc.KEY_RIGHT)) {
                this.setCamera('Right');
            }
        }
    };

    return CameraManager;
});
~~~

In this sample, pressing the arrow keys sets the current camera to be a left or right camera Entity (from those that are in the currently loaded Pack) and the space key activates the central camera.

We initially  create a function to find the camera entity we want by name - with the `findByName()` function applied to the parent entity of this script (given that the cameras are located there, there is no need to use `context.root.findByName()` to search through all the entities in the pack).

We set up an object containing the names of the camera Entities that correspond to the arrow and space keys [(see the Designer scene)][designer].

Next we loop through the keys and if one was pressed then we find the entity by its name, and we set it to be the current camera using the `setCamera()` function we defined early in the script which disables the current active camera, then finds the new camera to activate.

[basic_cameras]: /tutorials/beginner/basic-cameras/
[frustum]: https://en.wikipedia.org/wiki/Frustum
[designer]: http://playcanvas.com/playcanvas/tutorials/designer/pack/470b8e24-857a-4608-8c84-4237452e39b1
