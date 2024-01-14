---
title: VR
sidebar_position: 3
---

![VR View][1]

PlayCanvasでは、WebXR APIを使用してヘッドセットやモバイルフォン向けのバーチャルリアリティ（VR）アプリケーションを作成することも可能です。WebXRはWebVR APIの進化形で、デスクトップブラウザで広くサポートされています。

## 対応プラットフォーム

VR機能はChromeとEdgeブラウザで利用可能です。デバイスは、Windows Mixed Reality、OpenXRなどのさまざまなネイティブAPIを通じてリンクされています。これにより、デスクトップベースのVRデバイスの大半をカバーしています。

## WebXR VRの始め方

VRセッション (VR session) を開始するには、まずデバイスのサポートと利用可能性を確認する必要があります。その後、ボタンのクリックや他の入力などのユーザーのインタラクションにより、VRセッションを開始することができます。

```javascript
button.element.on('click', function () {
    // XRがサポートされ、VRが利用可能かどうかを確認する
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {
        // Cameraコンポーネントを使用してARを開始する
        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

ユーザーが終了したら、VRモードは次のようにして終了できます。

```javascript
app.xr.end();
```

## スターターキット

PlayCanvasは「VR Kit」プロジェクトを提供しており、これによりあなたのVR体験をより迅速に立ち上げることができます。新しいプロジェクトを作成する際には、ダイアログから「VR Kit」を選択するだけです。

[1]: /images/user-manual/xr/vr-view.png