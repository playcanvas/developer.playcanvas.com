---
title: XR
sidebar_position: 20
---

![VR View](/images/user-manual/xr/vr-view.png)

PlayCanvas lets you create [AR][6] (Augmented Reality) and [VR][7] (Virtual Reality) applications for a variety of devices based on the new WebXR API, as well as through external integrations.

## Capabilities

Through extensions, WebXR is ever growing and various platforms are constantly implementing new and existing WebXR Modules. The PlayCanvas Engine provides access to these modules in the form of integrations, so they are easier to work with and work nicely with PlayCanvas' systems.

You can check a [list of currently supported modules][5].

## 対応プラットフォーム

WebXR is a new API and it is being rolled out gradually to all major platforms. Up-to-date support can be checked on [caniuse.com][3].

また、[WebXR Polyfill][4]を使用することでサポートを実現できます。

On **mobile**, WebXR works on Android with VR and AR session types.

On **HMDs**, such as Meta Quest, WebXR is well-supported for VR and AR session types. Apple Vision Pro currently supports VR session types when enabled in Safari settings.

On **desktop**, WebXR currently works in Chrome and Edge, and devices are linked through various native APIs, such as SteamVR, OpenXR, and others. This covers the majority of desktop-based VR devices and allows devices such as Meta Quest to be used via Steam Link.

## XRデバイスなしでもWebXRをテストする方法

To start developing with WebXR today, a Chrome [extension][1] can be used which emulates the WebXR API. This allows developers to interact with various head-mounted displays and controllers.

## WebXRの始め方

まず、サポートと利用可能性を確認し、ユーザーが操作したときにXRセッションを開始します。

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
[3]: https://caniuse.com/#feat=webxr
[4]: https://github.com/immersive-web/webxr-polyfill
[5]: /user-manual/xr/capabilities/
[6]: /user-manual/xr/ar/
[7]: /user-manual/xr/vr/
