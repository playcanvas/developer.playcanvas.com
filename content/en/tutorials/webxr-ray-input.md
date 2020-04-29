---
title: WebXR Ray Input
template: tutorial-page.tmpl.html
tags: vr, input
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/460449/4CA52F-image-75.jpg
---

<iframe src="https://playcanv.as/p/TAYVQgU2/"></iframe>

*Click the VR/AR button if you have a VR/AR compatible device/headset.*

This is a WebXR experience that interacts with valid XR input source, such as: laser pointer; gaze; touch screen. Supports desktop, mobile, Google Cardboard™, Google Daydream™, Samsung Gear VR™ and other VR/AR headsets.

Let's have a look at the source of the [tutorial project][1].


## Entering VR/AR

Every WebXR experience on PlayCanvas will always have these two elements in some form:

* Adding a user interaction for the user to enter VR/AR
* Enabling VR/AR on the camera

```javascript
button.element.on('click', function() {
    // check support for VR
    if (app.xr.isAvailable(pc.XRTYPE_VR)) {
        // start VR session
        cameraEntity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCAL);
    }
});
```

In this project, we have `xr.js` which is added to the Root entity. It manages VR and AR UI buttons, reacts to XR availability changes and XR session state changes.

To read more about the direct PlayCanvas API for WebXR, please refer to the [User Manual][2].


## XR Input Types

The level of fidelity for input devices can be broken into the following groups (DOF == Degrees of Freedom):

* **Gaze** - The default type which has no position and orientation of its own, and is based on the orientation of the head mounted display. Simply put - it is always facing forwards in the direction the user is facing. These include mobile-based VR devices such as Google Cardboard™ and Samsung Gear VR™.
* **Screen** - Touch based input source, which is possible in AR. For example, on mobile devices with touch screens.
* **Tracked Pointer** - Input source which has a tracked rotation and an optionally tracked position in space. This is usually a grippable device, and is associated with hands, either as hand controllers or tracked hands itself. This can be: Google Daydream™, Gear VR™ Controller, Oculus Touch™, Vive™ controllers and many others.

Every input source has a ray with an origin where it starts and a direction in which it is pointing. WebXR input source implementation in PlayCanvas supports all input source types without any extra work from a developer. If an input source is grippable, then we can render its model based on the provided position and rotation.

### XR Tracked Input Devices

The system for the tracked input sources consists of two files:

#### `xr-input-manager.js`

This tracks added/removed input sources and makes instances of controller entities for them. For example:

```javascript
app.xr.input.on('add', function (inputSource) {
    // new input source is added
});
```

#### `controller.js`

This is attached to each entity that represents an input source. When an input source can be gripped, it will enable the rendering of a model for a controller.

On each update, it will position and rotate entity based on input source position and rotation:

```javascript
if (inputSource.grip) {
    entity.model.enabled = true;
    entity.setPosition(inputSource.getPosition());
    entity.setRotation(inputSource.getRotation());
}
```

Additionally, it tracks the primary action of an input source that allows the user to trigger the `select` event. And uses a ray to interact with virtual objects. Here is a basic example of how to check if a mesh AABB is intersecting with controller's ray when the user uses the primary action on an input source.

```javascript
inputSource.on('select', function() {
    // set ray to match input source
    ray.set(inputSource.getOrigin(), inputSource.getDirection());
    // check for intersection
    if (mesh.aabb.intersectsRay(ray)) {
        // use triggered primary action
        // on a virtual object
    }
});
```

## Interacting with World

### Ray Picking

The Ray is a way of pointing in XR environments. Either gaze, screen or laser pointer-style input sources, they all have a ray with an origin and a direction.

In this tutorial, we track each input source and constantly check if it intersects with bounding shapes of pickable objects in the scene. Originally ray, position and rotation of an input source are in XR session space, but if we transform the XR camera by ancestors, then ray, position and rotation will automatically inherit such offset transformations. So ray and grip transforms are in XR camera parents transformation space.

The controller fires the following events to the entities that it interacts with:

* `controller:hover:off` - User was pointing at the entity last frame and is no longer doing so this frame
* `controller:hover:on` - User was not pointing at the entity last frame and is doing so this frame
* `controller:button:down` - User starts primary action when pointing at an entity
* `controller:button:up` - User ends primary action when pointing at an entity
* `controller:button:click` - User "clicked" with primary action when pointing at an entity

In this tutorial, we have the `button-type-toggle.js` listen to the `controller:hover:off`, `controller:hover:on` and `controller:button:click` events like so:

```javascript
entity.on('controller:button:click', function () {
    // entity was clicked with a controller
});
```

For more information on using events, please refer to the [API reference][14].

As this is a scalable experience, it is catered for the lowest common dominator between input sources and therefore it is assumed there is only one primary action for interaction.

However, it is simple to modify or expand on top if you only wanted to support a particular controller like the Oculus Rift Touch™.

### Shapes

We use the [PlayCanvas Shapes][4] to approximate the physical volume and they are added to a global collection that can be tested against.

This is all packaged in `shape.js` which are attached to the interactive entities and are automatically added to the global collection in `shape-world.js` that can be queried against by the rest of the application.

`shape.js` supports [Spheres][5], [Axis Aligned Boxes][6] and [Oriented Boxes][7] using the world position, world orientation and local scale to construct the Shape.

Once the `shape.js` script has been added to the entity, the entity is now an object that can be interacted with `controller.js` and can listen for the events listed above.

Taking the *PlayCanvas Cube* entity as an example:

![PlayCanvcs Cube][8]

The Shape is set to be an OBB ([Oriented Box][7]) with local scale of the entity is 1, 1, 1 so it will construct a Oriented Box that is of size, 1 by 1 by 1 unit.

In the case where the Shape and visual representation are of different scales such as the *Rotate Left* entity, it should have the following hierarchy:

![Rotate Left][10]

Where the core logic (in this case, rotate the cube left) of the entity is on the parent entity (1), the Shape as a child with the local scale set to physical volume (2) and the visual representation as a child (3).

'Use Parent' in the `shape.js` component is ticked so that `controller.js` events are fired at the parent entity where the core logic for the object is rather than the entity that the `shape.js` component is attached to.

![Shape Use Parent][11]

`shape.js` can also be used to create a compound of shapes to represent one entity simply by adding more Shape entities to the parent entity.

### Shape World

`shape-world.js` contains the collection of Shapes in the world and makes it globally accessible. Through this script component, we can raycast into the world and find the closest intersected entity to the ray's origin.

E.g.
```javascript
// update ray
ray.set(inputSource.getOrigin(), inputSource.getDirection());
// check for intersections
var hitEntity = app.shapeWorld.raycast(ray);
if (hitEntity) {
    // ray has intersected with a shape
    // and hitEntity is the associated entity for that shape
}
```

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
