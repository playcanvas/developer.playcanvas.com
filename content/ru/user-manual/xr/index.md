---
title: XR
template: usermanual-page.tmpl.html
position: 20
---

![VR View][2]

PlayCanvas lets you create Virtual Reality (VR) and Augmented Reality (AR) applications for a variety of devices based on the new WebXR API. WebXR is an evolution of the WebVR API and is being added to modern browsers, providing access to virtual reality headsets, controllers and AR features.

## Platforms

WebXR is a new API and it is being rolled out gradually to all major platforms. Up to date support can be checked on [caniuse.com][3].

Additionally, support can be achieved with the [WebXR Polyfill][4].

On **mobile**, PlayCanvas XR currently works on Android and iOS devices using Cardboard-style VR headsets and it is supported on the Samsung Gear VR. Some level of AR is also available. It also works on stand-alone Android based VR devices, such as the Oculus Quest™.

On **desktop**, PlayCanvas XR currently works in Chrome and Edge, and devices are linked through various native APIs, such as Windows Mixed Reality, OpenXR and others. This covers the majority of desktop-based VR devices.

## Testing WebXR without XR device

To start developing with WebXR today, a browser [extension][1] can be used in Chrome or Firefox which emulates the WebXR API. This allows developers to interact with various head-mounted displays and controllers.

## Getting started with WebXR

To start an XR session, support and availability should be checked first. Then, on user interaction XR, a session can be started:

```javascript
button.element.on('click', function () {
    // check if XR is supported and VR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // start VR using a camera component
        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

[1]: https://github.com/MozillaReality/WebXR-emulator-extension
[2]: /images/user-manual/xr/vr-view.png
[3]: https://caniuse.com/#feat=webxr
[4]: https://github.com/immersive-web/webxr-polyfill

