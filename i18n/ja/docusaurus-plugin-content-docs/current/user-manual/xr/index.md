---
title: XR
sidebar_position: 20
---

![VR View][2]

PlayCanvasでは、新たなWebXR APIをベースに、外部連携機能やAR(Augmented Reality/拡張現実)やVR(Virtual Reality/仮想現実)アプリケーションを多様なデバイス用に制作することができます。WebXRはWebVR APIの発展形であり、最新のブラウザに加え、VRヘッドセット、コントローラー、AR機能へのアクセスを提供しています。

## 対応プラットフォーム

WebXRは新しいAPIであり、徐々にすべての主要なプラットフォームへ移行しています。最新のサポート状況は[caniuse.com][3]で確認できます。

また、[WebXR Polyfill][4]を使用することでサポートを実現できます。

**モバイル**では、PlayCanvas XRはCardboardスタイルのVRヘッドセットやその他のデバイスを使用したAndroidおよびiOSデバイスで動作します。ARも利用できます。Oculus QuestTMなどのAndroidベースのVRスタンドアロンデバイスでも動作します。

**デスクトップ**では、PlayCanvas XRは現在ChromeとEdgeで動作し、Windows Mixed Reality、OpenXRなどのさまざまなネイティブAPIを介してデバイスがリンクされます。これにより、デスクトップベースの大半のVRデバイスをカバーします。

## XRデバイスなしでもWebXRをテストする方法

WebXRを使って開発を始めるには、ChromeまたはFirefoxでWebXR APIをエミュレートする[拡張機能][1]を使用できます。これにより、さまざまなヘッドマウントディスプレイやコントローラーを操作できます。

## WebXRの始め方

まず、サポートと利用可能性を確認し、ユーザーが操作したときにXRセッションを開始します。

```javascript
button.element.on('click', function () {
    // XRがサポートされており、VRが利用可能かどうかを確認
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // Cameraコンポーネントを使用してVRを開始
        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

[1]: https://github.com/MozillaReality/WebXR-emulator-extension
[2]: /images/user-manual/xr/vr-view.png
[3]: https://caniuse.com/#feat=webxr
[4]: https://github.com/immersive-web/webxr-polyfill
