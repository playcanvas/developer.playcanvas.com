---
title: AR
layout: usermanual-page.hbs
position: 2
---

![AR View][1]

PlayCanvas lets you create Augmented Reality (AR) applications for mobile devices through the WebXR API, as well as through integrations with popular AR frameworks.

## Platforms

AR capabilities are available using the Android Chrome browser. iOS Safari support for WebXR is [in progress][2]. Additionally, frameworks such as [8th Wall][3] and [Zappar][4] allow users to experience AR content in most mobile browsers, including Safari.

*The aforementioned frameworks are external, and have separate licensing, available on their respective websites.*

## Getting started with WebXR AR

When using PlayCanvas’ built-in AR support, the scene’s primary camera’s clear color must be transparent, as so:

![Transparent Clear Color][5]

To start an AR session, device support and availability should also be checked first. Then, on user interaction, such as a button click or other input, an AR session can be started:

```javascript
button.element.on('click', function () {
    // check if XR is supported and AR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {
        // start AR using a camera component
        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_VIEWER);
    }
});
```

Once the user is done, immersive-xr mode can be exited by calling:

```javascript
app.xr.end();
```

Augmented Reality allows blending the real world with virtual imagery, either by composing a rendered buffer over the camera feed or with special projection of a rendered buffer on see-through glasses. Usually it is provided with spatial tracking relative to the real world environment.

Suitable reference space: `pc.XRSPACE_VIEWER`.

## Starter Kits

PlayCanvas provides a number of ‘Starter Kit’ projects to help you and your AR experiences get up and running faster. When creating a new project, simply select from the dialogue the template that suits you best.

[1]: /images/user-manual/xr/ar-view.png
[2]: https://webkit.org/status/#specification-webxr
[3]: /user-manual/xr/ar/8th-wall-integration/
[4]: /user-manual/xr/ar/zappar-integration/
[5]: /images/user-manual/xr/ar/transparent-clear-color.png