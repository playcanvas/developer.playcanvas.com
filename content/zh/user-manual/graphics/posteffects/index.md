---
title: 后期效果
template: usermanual-page.tmpl.html
position: 6
---

PlayCanvas内置了对后期效果的支持。后期效果可以修改程序最终渲染出的图像，并提供一个简单的方法让你可以把一些视觉耀斑添加到您的应用程序中。

我们已经把实施好了的后期效果设置为了你可以添加到有[相机][1] 组建的实例上的外部脚本。为了简单地添加内置后期效果到相机上，只要右键层级树中的相机实体并选择弹出列表中的后期效果选项:

<img alt="Adding built-in post effects" src="/images/platform/builtin_posteffects.jpg"></img>

你也可以创建你自己的后期效果 - 你可以前往 [GitHub][2] 来查看内置后期效果的案例。

内置后期效果包括:

* [屏幕泛花][3]
* [亮度对比度调整][4]
* [色相饱和度调整][5]
* [快速抗锯齿][6]
* [复古风格][7]
* [暗角][8]

[1]: /user-manual/packs/components/camera
[2]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[3]: /user-manual/graphics/posteffects/bloom
[4]: /user-manual/graphics/posteffects/brightness_contrast
[5]: /user-manual/graphics/posteffects/hue_saturation
[6]: /user-manual/graphics/posteffects/fxaa
[7]: /user-manual/graphics/posteffects/sepia
[8]: /user-manual/graphics/posteffects/vignette

