---
title: Optimizing WebXR applications
layout: usermanual-page.hbs
position: 5
---

## はじめに

A high and consistent framerate is critical for making an enjoyable XR experience. When creating VR/AR content, it is more important than ever to test and optimize early and maintain the target framerate throughout development.

For AR experiences, framerates must be managed carefully as world, image and face tracking effects sometimes incur significant performance costs. This is in addition to the typically performance-constrained mobile hardware most users have access to.

For VR experiences, rendering is especially expensive due to the fact that the scene must be rendered once for each view (eye). While PlayCanvas is highly optimized to ensure VR rendering doesn't fully duplicate effort, stereo rendering remains more expensive than mono rendering.

In addition, devices like the Oculus Rift and HTC Vive demand high frame rates, like 75Hz or 90Hz, further increasing the need for highly efficient rendering. Mobile VR, whilst not requiring high framerates, suffer from the lack of native support for distortion effects, incurring additional overhead on a JavaScript and WebGL layer.

PlayCanvas, however, includes a number of features specifically designed to let your application do more in less time.

### Runtime lightmap generation

Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modelling tool or you can use PlayCanvas's built in Runtime Lightmap Generation.

[ランタイムのライトマップ生成][1]についてはこちらをご確認ください。

### Cautious use of real time shadows

For similar reasons to dynamic lights, dynamic shadows also have a per-frame runtime cost. Omni lights, in particular, have to render the scene 6 times to generate shadows. You should avoid having many lights casting dynamic shadows.

### Watch your fill rate and overdraw

フィルレートとは、画面上の各ピクセルに適用されるシェーダオペレーションの数を示します。フラグメントシェーダの計算が高く(ライトや複雑な素材が多いなど)、高解像度(デバイスピクセル比率が高いモバイル端末など)の場合、アプリケーションはフレームレートを高く保つためにシーンのレンダリングに時間をかけすぎてしまいます。

オーバードローとは、カメラに近い他のジオメトリによって隠されているジオメトリを描画することで上書きされるピクセルの数を示します。オーバードローが多い場合、表示されていないピクセルを描画するためにGPU処理を無駄にしていることがわかります。

[WebGL Insight][2]のような拡張機能はオーバードローを視覚化するのに役立ちます

### Garbage collection stalls

Webブラウザには、未使用のJavascriptオブジェクトの自動ガベージコレクションがあります。PlayCanvasエンジンはランタイムの割り当てを最小限に抑えるように設計されているのでコード内でも同じように注意するべきです。ベクターやその他のオブジェクトをあらかじめ割り当て、それらを再利用することで、フレーム毎にたくさんのオブジェクトが作成および破棄されることを防ぎます。

### Profiling Tools

PlayCanvasにはプロファイラツールが組み込まれています。EditorのLaunch Profilerボタンを使用して、プロファイリングを有効にしてアプリケーションを実行します。[プロファイラの詳細はこちら][3]

### General optimization tips

[最適化に関する詳細のガイドライン][4]はこちら。

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://github.com/3Dparallax/insight
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/
