---
title: 暗角特效
layout: usermanual-page.hbs
position: 6
---

In photography and optics, [vignetting][1] is the reduction of an image's brightness or saturation at the periphery compared to the image center. You can use it to draw attention to the center of the frame.

这是一张没有经过处理的图片:

![Image without effect][2]

And the same image with the effect applied:

![Image with effect][3]

内置的暗角效果有以下属性:

* **Offset**: Controls the offset of the effect.
* **Darkness**: Controls the darkness of the effect.

Find the post-processing effect script on [GitHub][4].

[1]: https://en.wikipedia.org/wiki/Vignetting
[2]: /images/platform/posteffects/without_effects.png
[3]: /images/platform/posteffects/with_vignette.png
[4]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-vignette.js
