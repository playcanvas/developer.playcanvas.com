---
title: Using WebXR in PlayCanvas
template: usermanual-page.tmpl.html
position: 1
---

## Support of WebXR

Different platforms are a subject to support of WebXR, which can be checked:

```javascript
if (app.xr.supported) {
    // WebXR is supported
}
```


## Starting XR Session

The API for entering XR is on the Camera Component or [XrManager][2] on Application. To start VR presenting you should use the `startXr` method on CameraComponent, provide the type of session and reference space type:

```javascript
entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCAL);
```

It is asynchronous operation and is only possible to start on user interaction, such as button click, mouse click or touch. To know when session is started, you can subscribe to `start` event:

```javascript
app.xr.on('start', function () {
    // XR session has started
});
```

Session type or reference space might not be available on particular platform, so it will fail starting session, providing error in callback and firing `error` event on XrManager:

```javascript
entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_UNBOUNDED, function(err) {
    if (err) {
        // failed to start session
    }
});
```


## Ending XR Session

Exiting XR can be triggered in various ways. You may trigger to exit XR from the code:

```javascript
app.xr.end();
```

Also, user might exit XR via some external process, like back button in the browser. [XrManager][2] will fire events associated with session `end`:

```javascript
app.xr.on('end', function () {
    // XR session has ended
});
```


## Types of XR

Each platform can support different type of sessions, these are:

 * **VR** - Virtual Reality - provides some level of viewer tracking, and it provides exclusive access to XR Device, this means that application will be rendered onto devices frame buffure, and not html canvas element.
 * **AR** - Augmented Reality - this type of session provides exclusive access to XR Device, and content is meant to be blended with real-world environment. In this mode camera clear color should be transparent.

Availability of session type, can change during application life, based on devices being plugged in or features on devices enabled. To check if session type is available:

```javascript
if (app.xr.isAvailable(pc.XRTYPE_VR)) {
    // VR is available
}
```

And you can subscribe to availability change events:

```javascript
app.xr.on('available', function (type, available) {
    console.log('XR session', type, 'type is now', available ? 'available' : 'unavailable');
});

// or specific session type
app.xr.on('available:' + pc.XRTYPE_VR, function (available) {
    console.log('XR session VR type is now', available ? 'available' : 'unavailable');
});
```


## Camera Position and Orientation in XR

When you are presenting in XR the position and orientation of the camera are overwritten by data from the XR session. If you want to implement additional movement and rotation of camera, you should add a parent entity to your camera and apply your translation to this entity.

![Camera Offset][1]

Input source ray as well as position and rotation are in reference space. So if camera position is manipulated by parent transformation, then input source ray, position and rotation should be transformed accordingly.


## Why can't I enable XR mode automatically?

Entering WebXR is required by browsers to be triggered by a *user action*. That means that it must be in response to a key press, a mouse click or a touch event. For that reason there is no way to enter XR immediately on loading a page.

[1]: /images/user-manual/vr/using-webvr/camera-offset.jpg
[2]: /api/pc.XrManager.html
