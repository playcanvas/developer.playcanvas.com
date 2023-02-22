---
title: ビネットエフェクト
layout: usermanual-page.hbs
position: 6
---

写真や視覚では、[ビネット][1]とは画像の中心に比べて、画像の明るさや彩度を減少させることです。フレームの中心に注意を引くために使用できます。

エフェクトをかけていない画像:

![Image without effect][2]

エフェクトを適用した同じ画像：

![Image with effect][3]

ビルドインのビネットエフェクトには次の属性があります：

* **Offset**: エフェクトのオフセットをコントロール。
* **Darkness**: エフェクトの暗さをコントロール。

Find the post-processing effect script on [GitHub][4].

[1]: https://en.wikipedia.org/wiki/Vignetting
[2]: /images/platform/posteffects/without_effects.png
[3]: /images/platform/posteffects/with_vignette.png
[4]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-vignette.js
