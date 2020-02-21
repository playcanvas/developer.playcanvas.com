---
title: WebXR Input Sources in PlayCanvas
template: usermanual-page.tmpl.html
position: 4
---

## Input Source

[XrInputSource][1] - represents an input mechanism that allows user to interact with virtual world. Those include, but are not limited to: handheld controllers, optically tracked hands, gaze-based input methods, touch screens. But input source is not explicitly associated with traditional gamepads, mice or keyboard.

## Accessing Input Sources

List of input sources is available on [XrInput][3] manager which is created by [XrManager][4]:

```javascript
var inputSources = app.xr.input.inputSources;
for (var i = 0; i < inputSources.length; i++) {
    // iterate through each available input source
}
```

Input sources can be added and removed dynamically, this can be done by connecting physical devices, or some input sources have lifespan during their primary action, for example touchscreen in AR type session on mobile. You can subscribe to `add` and `remove` events:

```javascript
app.xr.input.on('add', function (inputSource) {
    // input source been added

    inputSource.once('remove', function () {
        // know when input source has been removed
    });
});
```

## Primary Action (select)

Each input source can have primary action `select`, on gaze-based input sources it is touch of a screen/button. On handheld devices it is primary button/trigger. There is also `selectstart` and `selectend` events, which you can subscribe like so:

```javascript
inputSource.on('select', function () {
    // primary action
});
```

Or through input manager:

```javascript
app.xr.input.on('select', function (inputSource) {
    // primary action
});
```

## Ray

Each input source has a [Ray][2], which has origin where it points from, and direction of pointing. Ray is transformed in XR local space, and if camera ancestors are transformed, then ray should be transformed accordingly. Some examples of input sources might be, but not limited to:

 * Gaze-based input, such as mobile device which is inserted into Google Cardboard™ style device. It will have input source with `targetRayMode` as `pc.XRTARGETRAY_GAZE`, and will originate from viewers position and direct straight where user is facing.
 * Screen-based input, might be available on mobile devices in Augmented Reality session types, where user can interact with virtual world by touchscreen.
 * Handheld devices, like Oculus Touch™ will have ray originating from tip of handheld device and direction based on rotation of device.

Here is example of checking if Ray has intersected with BoundingBox of a mesh:

```javascript
if (meshInstance.aabb.intersectsRay(inputSource.ray)) {
    // input source is pointing on a mesh
}
```

## Grip

Some input sources are associated with a physical handheld device, such as Oculus Touch™, and can have position and rotation. Their position and rotation are calculated in XR session space. If XR camera parent is transformed, then controller entity should be in same parent, or inherit transformation accordingly:

```javascript
if (inputSource.grip) {
    // can render device model

    // position and rotate associated entity with model
    entity.setLocalPosition(inputSource.position);
    entity.setLocalRotation(inputSource.rotation);
}
```

## GamePad

If platform supports [WebXR Gamepads Module][5], then input source might have associated [GamePad][6] object with it, which can be accessed to get buttons, triggers, axes and other input hardware states:

```javascript
var gamepad = inputSource.gamepad;
if (gamepad) {
    if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {
        // user pressed a button on a gamepad
    }
}
```

## Profiles

Each input source might have a list of strings describing a type of input source, which is described in [profile registry][7]. Based on which you can figure out what type of model to render for handheld device or what capabilities it might have. Additionally profile registry lists gamepad mapping details, such buttons and axes.

```javascript
if (inputSource.profiles.indexOf('oculus-touch-v2') !== -1) {
    // it is an Oculus Touch™ handheld device
}
```


[1]: /api/pc.XrInputSource.html
[2]: /api/pc.Ray.html
[3]: /api/pc.XrInput.html
[4]: /api/pc.XrManager.html
[5]: https://www.w3.org/TR/webxr-gamepads-module-1/
[6]: https://w3c.github.io/gamepad/
[7]: https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry
