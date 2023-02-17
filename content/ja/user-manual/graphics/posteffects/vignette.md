---
title: ビネットエフェクト
layout: usermanual-page.hbs
position: 6
---

In photography and optics, [vignetting][1] is the reduction of an image's brightness or saturation at the periphery compared to the image center. You can use it to draw attention to the center of the frame.

エフェクトをかけていない画像:

![Image without effect][2]

And the same image with the effect applied:

![Image with effect][3]

ビルドインのビネットエフェクトには次の属性があります：

* **Offset**: Controls the offset of the effect.
* **Darkness**: Controls the darkness of the effect.

Find the post-processing effect script on [GitHub][4].

[1]: https://en.wikipedia.org/wiki/Vignetting
[2]: /images/platform/posteffects/without_effects.png
[3]: /images/platform/posteffects/with_vignette.png
[4]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-vignette.js
