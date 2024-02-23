---
title: AR
sidebar_position: 20
---

PlayCanvas lets you create Augmented Reality (AR) applications for mobile and HMD devices through the WebXR API, as well as through integrations with popular AR frameworks.

## 対応プラットフォーム

AR capabilities are available using the Android Chrome Browser, Meta Quest Browser, Magic Leap Helio, Samsung Internet, Microsoft Edge and many others. Additionally, frameworks such as [8th Wall][3] and [Zappar][4] allow users to experience AR content in most mobile browsers, including Safari.

:::note

The aforementioned frameworks are external and have separate licensing, available on their respective websites.

:::

## WebXR ARの開始

PlayCanvasの組み込みARサポートを使用する場合、シーンの主要カメラのクリアカラーは透明でなければなりません。以下のようになります。

![Transparent Clear Color](/img/user-manual/xr/ar/transparent-clear-color.png)

ARセッションを開始するには、デバイスのサポートと利用可能性をまず確認する必要があります。その後、ユーザーの操作(ボタンクリックなど)に応じて、ARセッションを開始できます。

```javascript
button.element.on('click', function () {
    // check if XR is supported and AR is available
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {
        // start AR using a camera component
        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

Once the user is done, the AR session can be exited by calling:

```javascript
app.xr.end();
```

Augmented Reality allows blending of the real world with virtual imagery, either by composing a rendered buffer over the camera feed or with a special projection of a rendered buffer on see-through glasses. Usually, it is provided with spatial tracking relative to the real-world environment.

Suitable reference space: `pc.XRSPACE_LOCALFLOOR`.

## スターターキット

PlayCanvas provides several ‘Starter Kit’ projects to help you and your AR experiences get up and running faster. When creating a new project, simply select from the dialog the template that suits you best.

[2]: https://webkit.org/status/#specification-webxr
[3]: /user-manual/xr/ar/8th-wall-integration/
[4]: /user-manual/xr/ar/zappar-integration/
