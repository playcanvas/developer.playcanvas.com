---
title: Post Effects
template: page.tmpl.html
position: 8
---

PlayCanvas has built-in support for post-processing effects. Post effects modify the final rendered image and provide an easy way for you to add some visual flare to your application.

We have implemented post effects as external scripts that you can add to an Entity that has a [Camera][camera] component attached. To easily add built-in post effects to a camera, simply right click on the camera entity in the hierarchy and select the desired post effect from the list:

<img alt="Adding built-in post effects" src="/images/platform/builtin_posteffects.png"></img>

You can also create your own post effects - for examples have a look at the built-in effects on [GitHub][github_posteffects].

Built-in post effects include:

* [Bloom][bloom]
* [Brightness-Contrast][brightness_contrast]
* [Hue-Saturation][hue_saturation]
* [FXAA][fxaa]
* [Sepia][sepia]

[camera]: /user-manual/packs/entities/components/camera
[github_posteffects]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[bloom]: /user-manual/posteffects/bloom
[brightness_contrast]: /user-manual/posteffects/brightness_contrast
[hue_saturation]: /user-manual/posteffects/hue_saturation
[fxaa]: /user-manual/posteffects/fxaa
[sepia]: /user-manual/posteffects/sepia