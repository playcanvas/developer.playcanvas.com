---
title: More Cameras
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/more_cameras?overlay=false" ></iframe>

*Click to focus, then press `space` to zoom in and out, press `left arrow` and `right arrow` to switch to the left and right cameras*

The [Basic Cameras][1] tutorial walks you through creating a camera Entity and adding it to your Scene. For a single static camera, no scripting is required. But for a more dynamic and interactive camera or for more advanced usage you might want to attach a script Component and program the camera behaviour yourself.

## Altering Attributes

The first way you might want to modify a camera at runtime, is to change the values of attributes on camera Component. You do this the same way that you set attributes on any other Component, by using the `set()` and `get()`
methods on the ComponentSystem.

~~~javascript~~~
pc.script.create('zoom', function (app) {
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
            if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {
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

With `app.keyboard.wasPressed()` we detect the keypress and toggle between the value of the target fov.

With the final two nested `if(){}` constucts we gradually change the fov values to create the zoom in/ zoom out effect.

With the line `this.entity.camera.fov = fov` we `set()` the fov camera attribute to the new value.

Notice that when you are zoomed out the top and bottom cubes are at the edges of the screen, this matches our expectation from the [PlayCanvas Editor scene][3] where the cubes sit next to the
top and bottom sides of the camera [frustum][2]

## Current Camera

Another way you might want to create interactivity with cameras is by switching between multiple cameras. You can achieve this by adding several camera Entities to your Scene; ensure that only one is activated; and then alter which is the current camera at runtime in your script.

~~~javascript~~~
pc.script.create('camera_manager', function (app) {
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
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        },

        //prevents default browser actions, such as scrolling when pressing cursor keys
        onKeyDown: function (event) {
            event.event.preventDefault();
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {
                this.setCamera('Center');
            } else if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                this.setCamera('Left');
            } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
                this.setCamera('Right');
            }
        }
    };

    return CameraManager;
});
~~~

In this sample, pressing the arrow keys sets the current camera to be a left or right camera Entity (from those that are in the currently loaded Scene) and the space key activates the central camera.

We initially  create a function to find the camera entity we want by name - with the `findByName()` function applied to the parent entity of this script (given that the cameras are located there, there is no need to use `app.root.findByName()` to search through all the entities in the Scene).

We set up an object containing the names of the camera Entities that correspond to the arrow and space keys [(see the Editor scene)][3].

Next we loop through the keys and if one was pressed then we find the entity by its name, and we set it to be the current camera using the `setCamera()` function we defined early in the script which disables the current active camera, then finds the new camera to activate.

[1]: /tutorials/beginner/basic-cameras/
[2]: https://en.wikipedia.org/wiki/Frustum
[3]: https://playcanvas.com/editor/scene/329672

