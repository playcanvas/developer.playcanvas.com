---
title: VR
sidebar_position: 21
---

![VR View](/img/user-manual/xr/vr-view.png)

PlayCanvas also lets you create Virtual Reality (VR) applications.

## 対応プラットフォーム

VR capabilities are available across various platforms: desktop (Chrome, Edge), mobile (Chrome, Samsung) and HMDs (Apple Vision Pro, Meta, Magic Leap, Pico).

:::warning

Due to an issue in WebKit on Apple Vision Pro, you must currently disable `Anti-Alias` in the Scene Settings of your project.

:::

## WebXR VRの始め方

To start a VR session, device support and availability should be checked first. Then, on a user interaction such as a button click or other input, a VR session can be started:

```javascript
button.element.on('click', () => {
    // check if XR is supported and VR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // start AR using a camera component
        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

ユーザーが終了したら、VRモードは次のようにして終了できます。

```javascript
app.xr.end();
```

## スターターキット

PlayCanvas provides a ‘VR Kit’ project to help you and your VR experience get up and running faster. When creating a new project, simply select ‘VR Kit’ from the New Project dialog.
