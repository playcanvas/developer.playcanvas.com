---
title: XR
template: usermanual-page.tmpl.html
position: 13
---

![VR View][3]

PlayCanvas lets you create Virtual Reality (VR) and Augmented Reality applications for a variety of devices based on the new WebXR API. WebXR is an evolution from WebVR API, and is being added to modern browser APIs that provides access to virtual reality headsets, controllers and AR features of a device.

## Platforms

WebXR being a new API, is being rolled out gradually to all major platforms.
Up to date support can be checked on [caniuse.com][4].

Additionally support can be extended with [WebXR Polyfill][5].

On **mobile** PlayCanvas XR is currently on Android and iOS devices using Cardboard-style VR headsets and it is supported on the Samsung Gear VR. Some level of AR is also available. As well as stand-alone Android based VR devices, such as Oculus Quest™.

On **desktop** PlayCanvas XR is currently supported in Chrome and Edge, and devices are linked through various native APIs, such as Windows Mixed Reality, OpenXR and others, which covers majority of desktop based VR devices.

## Testing WebXR without XR device

To start developing with WebXR, [extension][1] can be used in Chrome or Firefox, which emulates WebXR, and allows developer to interact with various head mounted displays and controllers.

## Getting started with WebXR

To start XR session, support and availability should be checked first, then on user interaction XR session can be started:

```javascript
button.element.on('click', function () {
    // check if XR is supported and VR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // start VR using camera component
        entity.camera.startXr(pc.XRTYPE_VR);
    }
});
```

[1]: https://github.com/MozillaReality/WebXR-emulator-extension
[2]: /images/user-manual/vr/render-settings.jpg
[3]: /images/user-manual/vr/vr-view.png
[4]: https://caniuse.com/#feat=webxr
[5]: https://github.com/immersive-web/webxr-polyfill
