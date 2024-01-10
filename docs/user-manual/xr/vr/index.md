---
title: VR
sidebar_position: 3
---

![VR View][1]

PlayCanvas also lets you create Virtual Reality (VR) applications for headsets and mobile phones using the WebXR API. WebXR is an evolution of the WebVR API and it is widely supported in desktop browsers.

## Platforms

VR capabilities are available in the Chrome and Edge browsers. Devices are linked through various native APIs, such as Windows Mixed Reality, OpenXR and others. This covers the majority of desktop-based VR devices.

## Getting started with WebXR VR

To start a VR session, device support and availability should be checked first. Then, on user interaction such as a button click or other input, a VR session can be started:

```javascript
button.element.on('click', function () {
    // check if XR is supported and VR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // start AR using a camera component
        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

Once the user is done, VR mode can be exited by calling:

```javascript
app.xr.end();
```

## Starter Kits

PlayCanvas provides a ‘VR Kit’ project to help you and your VR experience get up and running faster. When creating a new project, simply select ‘VR Kit’ from the dialog.

[1]: /images/user-manual/xr/vr-view.png