---
title: Optimizing WebXR applications
template: usermanual-page.tmpl.html
position: 3
---

## はじめに

A high and consistent framerate is critical for making and enjoyable XR experience. When creating VR/AR content it is more important than ever to test and optimize early in development and maintain the target framerate throughout development.

Rendering WebXR is expensive due to the fact that the scene must be rendered once for each view (eye). PlayCanvas engine contains many optimizations to ensure that VR rendering doesn't not duplicate too much effort, but stereo rendering is still more expensive that mono rendering. In addition, devices like the Oculus Rift and HTC Vive demand higher frame rates like, 75Hz or 90Hz, which means there is even less time to render a frame. Mobile VR, whilst it doesn't have the high frame rates, may have another issue which is the lack of native support for the distortion rendering means that this post-process stage is done in Javascript and WebGL adding additional overhead.

しかし、対策はあります。 PlayCanvasには、アプリケーションの処理時間を短縮するための機能が多数用意されています。

### ランタイムのライトマップ生成

Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modelling tool or you can use PlayCanvas's built in Runtime Lightmap Generation.

[ランタイムのライトマップ生成][1]についてはこちらをご確認ください。

### リアルタイムシャドーの使用に関する注意

動的ライトと同様の理由から、動的シャドウにもフレームごとのランタイムコストがあります。ポイントライトは影を生成するためにシーンを6回レンダリングする必要があります。動的シャドウを作るライトの数は制限するべきです。

### フィルレートとオーバードローを監視

フィルレートとは、画面上の各ピクセルに適用されるシェーダオペレーションの数を示します。フラグメントシェーダの計算が高く(ライトや複雑な素材が多いなど)、高解像度(デバイスピクセル比率が高いモバイル端末など)の場合、アプリケーションはフレームレートを高く保つためにシーンのレンダリングに時間をかけすぎてしまいます。

オーバードローとは、カメラに近い他のジオメトリによって隠されているジオメトリを描画することで上書きされるピクセルの数を示します。オーバードローが多い場合、表示されていないピクセルを描画するためにGPU処理を無駄にしていることがわかります。

[WebGL Insight][2]のような拡張機能はオーバードローを視覚化するのに役立ちます

### ガベージコレクションストール

Webブラウザには、未使用のJavascriptオブジェクトの自動ガベージコレクションがあります。PlayCanvasエンジンはランタイムの割り当てを最小限に抑えるように設計されているのでコード内でも同じように注意するべきです。ベクターやその他のオブジェクトをあらかじめ割り当て、それらを再利用することで、フレーム毎にたくさんのオブジェクトが作成および破棄されることを防ぎます。

### プロファイリングツール

PlayCanvasにはプロファイラツールが組み込まれています。EditorのLaunch Profilerボタンを使用して、プロファイリングを有効にしてアプリケーションを実行します。[プロファイラの詳細はこちら][3]

### 最適化に関する基本的なアドバイス

[最適化に関する詳細のガイドライン][4]はこちら。

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://github.com/3Dparallax/insight
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/

