---
title: VR
template: usermanual-page.tmpl.html
position: 10
---

![VR ビュー][3]

PlayCanvasでは、新しいWebVR APIに基づいてさまざまなデバイス用のバーチャルリアリティ(VR)アプリケーションを作成できます。WebVRは、バーチャルリアリティヘッドセットへのアクセスを提供する実験的な新しいブラウザAPIです。

## プラットフォーム

現在、モバイルではPlayCanvas VRはCardboardスタイルのVRヘッドセットを使用しているAndroidおよびiOSデバイスに搭載されており、Samsung Gear VRで対応されています。

現在、デスクトップではPlayCanvas VRはChromeとFirefoxの特別なビルドを使用して、Oculus RiftとHTC Viveヘッドセットで対応されています。ブラウザでのWebVRの対応については[こちら][1]をご覧ください。

<div class="alert alert-info" style="text-align:left">
WebVRは実験的なブラウザAPIであり、すべてのブラウザで完全に対応されているわけではありません。モバイルブラウザでは、WebVR polyfillを使用して対応しています。これは、パフォーマンスを低下させたような形でネイティブブラウザをシミュレートするライブラリです。モバイルブラウザのネイティブへの対応は、2016年末には用意できます。

デスクトップの場合、ポリフィルはありませんが、実験的なブラウザビルドではOculus RiftとHTC Viveのネイティブ対応が可能です。詳細は[http://webvr.info/][1] を参照してください。
</div>

## WebVRの開始

デフォルトで、PlayCanvasはVrManagerを初期化せず、最適化の理由から追加のWebVR polyfillライブラリを読み込みません。WebVRへの対応は、プロジェクトのRender SettingsまたはNew Projectダイアログで有効にできます。

![設定をレンダリング][2]

[1]: http://webvr.info/
[2]: /images/user-manual/vr/render-settings.jpg
[3]: /images/user-manual/vr/vr-view.png

