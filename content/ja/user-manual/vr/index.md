---
title: VR
template: usermanual-page.tmpl.html
position: 13
---

![VR ビュー][3]

PlayCanvasでは、新しいWebVR APIに基づいてさまざまなデバイス用のバーチャルリアリティ(VR)アプリケーションを作成できます。WebVRは、バーチャルリアリティヘッドセットへのアクセスを提供する実験的な新しいブラウザAPIです。

## プラットフォーム

現在、モバイルではPlayCanvas VRはCardboardスタイルのVRヘッドセットを使用しているAndroidおよびiOSデバイスに搭載されており、Samsung Gear VRで対応されています。

現在、デスクトップではPlayCanvas VRはChromeとFirefoxの特別なビルドを使用して、Oculus RiftとHTC Viveヘッドセットで対応されています。ブラウザでのWebVRの対応については[こちら][1]をご覧ください。

<div class="alert alert-info" style="text-align:left">
WebVR is an experimental browser API and is not fully supported in all browsers. For mobile browsers we provided support by using a WebVR polyfill, a library that attempts to simulate the native browser experience although with less performance than native. Native support for mobile browsers should be available by the end of 2016.

For desktop, there is no polyfill, but experimental builds of browsers allow native support for Oculus Rift and HTC Vive. See [http://webvr.info/][1] for more details.
</div>

## WebVRの開始

デフォルトで、PlayCanvasはVrManagerを初期化せず、最適化の理由から追加のWebVR polyfillライブラリを読み込みません。WebVRへの対応は、プロジェクトのRender SettingsまたはNew Projectダイアログで有効にできます。

![設定をレンダリング][2]

[1]: http://webvr.info/
[2]: /images/user-manual/vr/render-settings.jpg
[3]: /images/user-manual/vr/vr-view.png

