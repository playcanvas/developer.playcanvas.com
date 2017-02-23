---
title: WebVR Ray Input
template: tutorial-page.tmpl.html
tags: vr, input
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/460449/4CA52F-image-75.jpg
---

<iframe src="https://playcanv.as/p/TAYVQgU2/"></iframe>

*Use the mouse to move the camera around and interact with the 3D world. Click the VR button in the bottom right if you have a VR compatible device and headset to enter VR.*

This is a WebVR experience that interacts with the world with a laser point like control. Supports desktop, mobile, Google Cardboard™, Google Daydream™, Samsung Gear VR™ and other VR headsets.

Let's have a look at the [tutorial project][1].


## Enter VR UI and VR Camera

Every WebVR experience on PlayCanvas will always have these two elements in some form:

* Adding a UI for the user to enter VR
* Adding VR support to the camera

In this project, we have `web-vr-ui.js` which is added to the Root entity. This will show an HTML UI button in the bottom right corner to enter/exit VR.

`look-camera.js` supplies the support for VR to the camera and also listens to events to rotate the view from input devices such as mouse, touch and gamepad.

Example from the `input-mouse.js`:
~~~javascript~~~
InputMouse.prototype._onMouseMove = function (event) {
    if (this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT)) {
        this.app.fire('camera:pitch:rotate', event.dy * this.sensitivity);
        this.app.fire('camera:yaw:rotate', event.dx * this.sensitivity);
    }
};
~~~

For the most simplest of WebVR experiences where user can look around a scene, these two files are all that needed and can be used as-is.

To read more about the direct PlayCanvas API for WebVR, please refer to the [User Manual][2].


## VR Input Types

The level of fidelity for input devices can be broken into the following groups (DOF == Degrees of Freedom):

* **0 DOF / Gaze** - The default type where there are no input devices with orientation or positional support. These include the Google Cardboard™ and Samsung Gear VR™.
* **3 DOF** - VR input device where there orientation support such as the Google Daydream™ controller. The hand position in VR is usually calculated using a simulated arm model.
* **6 DOF** - Finally, we have input devices where there are both positional and orientation support such as the Oculus Rift Touch™ and Vive™ controllers.

This tutorial project supports all three via the `input-*.js` files. Mouse, touch and gamepad are for 0 DOF input. `input-vr.js` for 3 DOF (with a simulated arm model) and 6 DOF input types.

As this is a scalable experience, it is catered for the lowest common dominator between the three and therefore it is assumed there is only one button on all input types.

However, it is simple to modify or expand on top if you only wanted to support a particular controller like the Oculus Rift Touch™.

### VR Tracked Input Devices

The system for the tracked input devices consists of two files:

* `vr-gamepad-manager.js` that manages all the tracked input devices that are connected and provides the data about the position and orientation of each one.
* `input-vr.js` which should be added to the entity that represents that device in the VR world (e.g a hand or pointing device). In this case, it is added to entity's *Tracked Controller 1* and *2*.

`input-vr.js` can be configured to represent the left, right, either or 'neither' (when the controller doesn't identify itself as left or right) hand and the priority is set to map the nth connected device that represents that hand.

![Input VR Script][9]

## Interacting with World

### Ray Controller

The ray input logic is in `controller-ray.js` and works like a laser pointer to interact with the world. The script can be attached to any entity and uses the [entity's forward][3] property for the direction of the ray.

In this tutorial, we have it attached to the camera entity for 0 DOF input and also to the Tracked Controller 1 and 2 entities for 3 DOF and 6 DOF input.

The controller fires the following events to the entities that it interacts with:

* `controller:hover:off` - User was pointing at the entity last frame and is no longer this frame
* `controller:hover:on` - User was pointing at the entity last frame and is no longer this
* `controller:button:down` - User presses the button when pointing at an entity
* `controller:button:up` - User releases the button when pointing at an entity
* `controller:button:click` - User has pressed and released the button on the same entity

In this tutorial, we have the `button-type-toggle.js` listen to the `controller:hover:off`, `controller:hover:on` and `controller:button:click` events like so:

~~~javascript~~~
this.entity.on('controller:button:click', this._onButtonClick, this);
this.entity.on('controller:hover:on', this._onHoverOn, this);
this.entity.on('controller:hover:off', this._onHoverOff, this);
~~~

For more information on using events, please refer to the [API reference][14].

### Shapes

We use the [PlayCanvas Shapes][4] to approximate the physical volume and they are added to a global collection that can be tested against.


This is all packaged in `shape.js` which are attached to the interactive entities and are automatically added to the global collection in `shape-world.js` that can be queried against by the rest of the application.

`shape.js` supports [Spheres][5], [Axis Aligned Boxes][6] and [Oriented Boxes][7] using the world position, world orientation and local scale to construct the Shape.

Once the `shape.js` component has been added to the entity, the entity is now an object that can be interacted with `controller-ray.js` and can listen for the events listed above.

Taking the *PlayCanvas Cube* entity as an example:

![PlayCanvcs Cube][8]

The Shape is set to be an OBB ([Oriented Box][7]) with local scale of the entity is 1, 1, 1 so it will construct a Oriented Box that is of size, 1 by 1 by 1 unit.

In the case where the Shape and visual representation are of different scales such as the *Rotate Left* entity, it should have the following hierarchy:

![Rotate Left][10]

Where the core logic (in this case, rotate the cube left) of the entity is on the parent entity (1), the Shape as a child with the local scale set to physical volume (2) and the visual representation as a child (3).

'Use Parent' in the `shape.js` component is ticked so that `controller-ray.js` events are fired at the parent entity where the core logic for the object is rather than the entity that the `shape.js` component is attached to.

![Shape Use Parent][11]

`shape.js` can also be used to create a compound of shapes to represent one entity simply by adding more Shape entities to the parent entity.

### Shape World

`shape-world.js` contains the collection of Shapes in the world and makes it globally accessible. Through this script component, we can raycast into the world and find the closest intersected entity to the ray's origin.

E.g.
~~~javascript~~~
var ray = new pc.Ray(this.entity.getPosition(), this.entity.forward);
var hitEntity = this.app.shapeWorld.raycast(ray);
if (hitEntity) {
    // Ray has intersected with a Shape and hitEntity is the associated entity for that Shape
}
~~~

[1]: https://playcanvas.com/project/460449/overview/webvr-ray-input
[2]: http://developer.playcanvas.com/en/user-manual/vr/using-webvr/
[3]: http://developer.playcanvas.com/en/api/pc.Entity.html#forward
[4]: https://github.com/playcanvas/engine/tree/master/src/shape
[5]: http://developer.playcanvas.com/en/api/pc.BoundingSphere.html
[6]: http://developer.playcanvas.com/en/api/pc.BoundingBox.html
[7]: http://developer.playcanvas.com/en/api/pc.OrientedBox.html
[8]: /images/tutorials/webvr-ray-input/playcanvas-cube.jpg
[9]: /images/tutorials/webvr-ray-input/input-vr.jpg
[10]: /images/tutorials/webvr-ray-input/rotate-left.jpg
[11]: /images/tutorials/webvr-ray-input/shape-use-parent.jpg
[12]: https://developer.oculus.com/webvr/
[13]: https://developer3.oculus.com/documentation/vrweb/latest/concepts/carmel-launching-content/
[14]: http://developer.playcanvas.com/en/api/pc.events.html
