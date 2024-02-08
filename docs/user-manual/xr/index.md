---
title: XR
sidebar_position: 20
---

![VR View][2]

PlayCanvas lets you create [AR][6] (Augmented Reality) and [VR][7] (Virtual Reality) applications for a variety of devices based on the new WebXR API, as well as through external integrations.

## Capabilities

Through extensions, WebXR is ever growing and various platforms are constantly implementing new and existing WebXR Modules. The PlayCanvas Engine provides access to these modules in the form of integrations, so they are easier to work with and work nicely with PlayCanvas' systems.

You can check a [list of currently supported modules][5].

## Platforms

WebXR is a new API and it is being rolled out gradually to all major platforms. Up-to-date support can be checked on [caniuse.com][3].

Additionally, support can be achieved with the [WebXR Polyfill][4].

On **mobile**, WebXR works on Android with VR and AR session types.

On **HMDs**, such as Meta Quest, WebXR is well-supported for VR and AR session types. Apple Vision Pro currently supports VR session types when enabled in Safari settings.

On **desktop**, WebXR currently works in Chrome and Edge, and devices are linked through various native APIs, such as SteamVR, OpenXR, and others. This covers the majority of desktop-based VR devices and allows devices such as Meta Quest to be used via Steam Link.

## Testing WebXR without XR device

To start developing with WebXR today, a Chrome [extension][1] can be used which emulates the WebXR API. This allows developers to interact with various head-mounted displays and controllers.

## Getting started with WebXR

To start an XR session, support and availability should be checked first. Then, on user interaction XR, a session can be started:

```javascript
button.element.on('click', function () {
    // check if XR is supported and VR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // start VR session providing a camera component
        app.xr.start(entity.camera, pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

[1]: https://chromewebstore.google.com/detail/immersive-web-emulator/cgffilbpcibhmcfbgggfhfolhkfbhmik
[2]: /images/user-manual/xr/vr-view.png
[3]: https://caniuse.com/#feat=webxr
[4]: https://github.com/immersive-web/webxr-polyfill
[5]: /user-manual/xr/capabilities/
[6]: /user-manual/xr/ar/
[7]: /user-manual/xr/vr/
