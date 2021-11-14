---
title: WebXR Input Sources in PlayCanvas
template: usermanual-page.tmpl.html
position: 4
---

## Input Source

An [XrInputSource][1] represents an input mechanism that allows the user to interact with a virtual world. Those include, but are not limited to: handheld controllers, optically tracked hands, gaze-based input methods and touch screens. But an input source is not explicitly associated with traditional gamepads, mice or keyboards.

## Accessing Input Sources

A list of input sources is available on the [XrInput][2] manager which is created by the [XrManager][3]:

```javascript
var inputSources = app.xr.input.inputSources;
for (var i = 0; i < inputSources.length; i++) {
    // iterate through each available input source
}
```

Input sources can be added and removed dynamically. This can be done by connecting physical devices or by switching input devices by underlying platform, and some input sources have a lifespan only during their primary action (for example, a touchscreen in an AR-type session on mobile). You can subscribe to `add` and `remove` events:

```javascript
app.xr.input.on('add', function (inputSource) {
    // input source been added

    inputSource.once('remove', function () {
        // know when input source has been removed
    });
});
```

## Primary Action (select)

Each input source can have a primary action `select`. On gaze-based input sources, it is the touch of a screen/button. On handheld devices, it is the primary button/trigger. For tracked hands it is emulated by PlayCanvas engine when thumb and index tips are touching. There are also `selectstart` and `selectend` events which you can subscribe to as follows:

```javascript
inputSource.on('select', function () {
    // primary action
});
```

Or through the input manager:

```javascript
app.xr.input.on('select', function (inputSource) {
    // primary action
});
```

## Ray

Each input source has a ray which has an origin where it points from, and a direction in which it is pointing. A ray is transformed to world space. Some examples of input sources might be, but not limited to:

 * Gaze-based input, such as a mobile device which is inserted into a Google Cardboard™ style device. It will have an input source with `targetRayMode` set to `pc.XRTARGETRAY_GAZE`, and will originate from the viewer's position and point straight where the user is facing.
 * Screen-based input. This might be available on mobile devices in Augmented Reality session types, where the user can interact with the virtual world by touchscreen.
 * Handheld devices, like the Oculus Touch™, will have a ray originating from the tip of the handheld device and the direction is based on the rotation of device.
 * Tracked Hands have an emulated by PlayCanvas engine ray that originates from point between thumb and index tips, and pointing forward.

Here is an example illustrating how to check whether a ray has intersected with the bounding-box of a mesh:

```javascript
// update ray with input source data
ray.set(inputSource.getOrigin(), inputSource.getDirection());
// check if mesh bounding box intersects with ray
if (meshInstance.aabb.intersectsRay(ray)) {
    // input source is pointing on a mesh
}
```

## Grip

Some input sources are associated with a physical handheld device, such as an Oculus Touch™, and can have position and rotation. Their position and rotation are provided in world space.

```javascript
if (inputSource.grip) {
    // can render device model
    // position and rotate associated entity with model
    entity.setPosition(inputSource.getPosition());
    entity.setRotation(inputSource.getRotation());
}
```

## GamePad

If the platform supports the [WebXR Gamepads Module][4], then an input source might have an associated [GamePad][5] object with it, which can be accessed to get buttons, triggers, axes and other input hardware states:

```javascript
var gamepad = inputSource.gamepad;
if (gamepad) {
    if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {
        // user pressed a button on a gamepad
    }
}
```

## Hands

If platform supports [WebXR Hand Input][7], then an input source might have an associated hand data, which is exposed as [XrHand][8], and provides convenient information in form of [XrFinger][9] and [XrJoint][10] for application developer to use, such as wrist, fingers, each joint, tips and events for detecting when hands loose/restore tracking.

Creating basic hand model:

```javascript
var joints = [ ];
var hand = inputSource.hand;

if (hand) {
    for(var i = 0; i < hand.joints.length; i++) {
        var entity = new pc.Entity();
        entity.joint = hand.joints[i];
        entity.addComponent('model', { type: 'box' });
        parent.addChild(entity);
        joints.push(entity);
    }
}
```

And synchronising it on every update:

```javascript
for(var i = 0; i < joints.length; i++) {
    var entity = joints[i];
    var joint = entity.joint;
    var radius = joint.radius * 2;
    entity.setLocalScale(radius, radius, radius);
    entity.setPosition(joint.getPosition());
    entity.setRotation(joint.getRotation());
}
```

## Profiles

Each input source might have a list of strings describing a type of input source, which is described in a [profile registry][6]. Based on this, you can figure out what type of model to render for handheld device or what capabilities it might have. Additionally, the profile registry lists gamepad mapping details, such as buttons and axes.

```javascript
if (inputSource.profiles.indexOf('oculus-touch-v2') !== -1) {
    // it is an Oculus Touch™ handheld device
}
```

[1]: /api/pc.XrInputSource.html
[2]: /api/pc.XrInput.html
[3]: /api/pc.XrManager.html
[4]: https://www.w3.org/TR/webxr-gamepads-module-1/
[5]: https://w3c.github.io/gamepad/
[6]: https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry
[7]: https://immersive-web.github.io/webxr-hand-input/
[8]: /api/pc.XrHand.html
[9]: /api/pc.XrFinger.html
[10]: /api/pc.XrJoint.html

