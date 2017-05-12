---
title: Entity Picking
template: tutorial-page.tmpl.html
tags: raycast
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg
---

<iframe src="https://playcanv.as/b/0iehjK3i/"></iframe>
**Collision Picking** - *click to select a shape*

<iframe src="https://playcanv.as/b/RxJFqzy5/"></iframe>
**Frame Buffer Picking** - *click to select a shape*

Try it from the Editor in the [tutorial project.][1]

This tutorial describes to methods of selecting an Entity from the 3D scene, for example, on the click of the mouse.

## Collision Picking

Collision based picking uses the collision components to add a shape to each Entity that needs to be picked. Then we use the [raycastFirst()][2] method in the rigidbody system to fire a ray from the mouse click position into the screen to see if it hits a collision component. If it does, that Entity is "selected".

~~~javascript~~~
var PickerRaycast = pc.createScript('pickerRaycast');

// initialize code called once per entity
PickerRaycast.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
};

PickerRaycast.prototype.onSelect = function (e) {
    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);
    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);

    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    if (result) {
        var pickedEntity = result.entity;
        pickedEntity.script.pulse.pulse();
    }
};
~~~

## Frame Buffer Picking

Frame buffer based picking uses the [pc.Picker][3] class to render the scene to a internal buffer. When the mouse is clicked the color of the buffer at the mouse location is used to determine which mesh instance was selected. This has some advantages and disadvantages over the collision based method. Advantages include: using a rectangle to pick many items in a scene at once, this method doesn't have require the physics library to be included and active in your project. The main disadvantage is that this uses the `readPixels` method which stalls the graphics pipeline. This can have serious rendering performance implications particularly on mobile.

~~~javascript~~~
var PickerFramebuffer = pc.createScript('pickerFramebuffer');

// initialize code called once per entity
PickerFramebuffer.prototype.initialize = function() {
    // Create a frame buffer picker with a resolution of 1024x1024
    this.picker = new pc.Picker(this.app.graphicsDevice, 1024, 1024);
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
};

PickerFramebuffer.prototype.onSelect = function (event) {
    var canvas = this.app.graphicsDevice.canvas;
    var canvasWidth = parseInt(canvas.clientWidth, 10);
    var canvasHeight = parseInt(canvas.clientHeight, 10);

    var camera = this.entity.camera.camera;
    var scene = this.app.scene;
    var picker = this.picker;

    picker.prepare(camera, scene);

    // Map the mouse coordinates into picker coordinates and
    // query the selection
    var selected = picker.getSelection({
        x: Math.floor(event.x * (picker.width / canvasWidth)),
        y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
    });

    if (selected.length > 0) {
        // Get the graph node used by the selected mesh instance
        var entity = selected[0].node;

        // Bubble up the hierarchy until we find an actual Entity
        while (!(entity instanceof pc.Entity) && entity !== null) {
            entity = entity.getParent();
        }
        if (entity) {
            entity.script.pulse.pulse();
        }
    }
};
~~~

[1]: https://playcanvas.com/project/405856
[2]: http://developer.playcanvas.com/en/api/pc.RigidBodyComponentSystem.html#raycastFirst
[3]: http://developer.playcanvas.com/en/api/pc.Picker.html
