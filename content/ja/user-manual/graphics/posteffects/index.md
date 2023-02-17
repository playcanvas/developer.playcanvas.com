---
title: 後処理エフェクト
layout: usermanual-page.hbs
position: 6
---

PlayCanvasは、プロジェクトへの追加のポストプロセスエフェクトをサポートしています。ポストエフェクトは最終レンダリングされた画像を修正して、アプリケーションにより効果的なビジュアルを追加する簡単な方法を提供します。

ポストエフェクトをスクリプトとして実装しました。このスクリプトは[カメラ][1]コンポーネントがアタッチされているエンティティに追加できます。カメラにポストエフェクトを追加するには、以下の手順を参照してください。

1. Choose one of the effects below and get the script from the GitHub link.
  * [Bloom][3]
  * [Brightness-Contrast][4]
  * [Hue-Saturation][5]
  * [FXAA][6]
  * [Sepia][7]
  * [Vignette][8]
2. Add a [Script][9] component to the Entity representing your camera.
3. Assign the desired post effect scripts to the camera entity's Script component. Note that the order in which the post effect script are listed in the Script component determine the order in which they are applied.

You can also create your own post effects. You can find some additional ones on [GitHub][2].

[1]: /user-manual/packs/components/camera
[2]: https://github.com/playcanvas/engine/tree/main/scripts/posteffects
[3]: /user-manual/graphics/posteffects/bloom
[4]: /user-manual/graphics/posteffects/brightness_contrast
[5]: /user-manual/graphics/posteffects/hue_saturation
[6]: /user-manual/graphics/posteffects/fxaa
[7]: /user-manual/graphics/posteffects/sepia
[8]: /user-manual/graphics/posteffects/vignette
[9]: /user-manual/packs/components/script
