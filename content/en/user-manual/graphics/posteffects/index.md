---
title: Post Effects
template: usermanual-page.tmpl.html
position: 6
---

PlayCanvas has built-in support for post-processing effects. Post effects modify the final rendered image and provide an easy way for you to add some visual flare to your application.

We have implemented post effects as external scripts that you can add to an Entity that has a [Camera][1] component attached. To easily add built-in post effects to a camera, simply right click on the camera entity in the hierarchy and select the desired post effect from the list:

<img alt="Adding built-in post effects" src="/images/platform/builtin_posteffects.jpg"></img>

You can also create your own post effects - for examples have a look at the built-in effects on [GitHub][2].

Built-in post effects include:

* [Bloom][3]
* [Brightness-Contrast][4]
* [Hue-Saturation][5]
* [FXAA][6]
* [Sepia][7]
* [Vignette][8]

[1]: /user-manual/packs/components/camera
[2]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[3]: /user-manual/graphics/posteffects/bloom
[4]: /user-manual/graphics/posteffects/brightness_contrast
[5]: /user-manual/graphics/posteffects/hue_saturation
[6]: /user-manual/graphics/posteffects/fxaa
[7]: /user-manual/graphics/posteffects/sepia
[8]: /user-manual/graphics/posteffects/vignette
