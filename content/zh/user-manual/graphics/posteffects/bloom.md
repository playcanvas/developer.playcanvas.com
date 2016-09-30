---
title: 屏幕泛花
template: usermanual-page.tmpl.html
position: 1
---

泛花是一种用于再现真实相机的成像效果的后期效果。该效果会在光从明亮区域到图像中暗色区域的边界上延伸产生干涉条纹(或羽化效果)， 造成一个非常明亮的光被相机捕捉到后在场景中铺天盖地的假象。 <small>(来自于 [Wikipedia][1])</small>

这是一张没有泛花的图片：

<img alt="Image without effect" src="/images/platform/posteffects/without_effects.png"></img>

和一张同样的但是有泛花的图片:

<img alt="Image with effect" src="/images/platform/posteffects/with_bloom.png"></img>

内置的泛花效果有以下属性:
* **泛花强度**: 效果的强度
* **泛花阈值**: 只有亮度超过这个阈值的像素会被处理。范围从0到1。
* **模糊量**: 控制模糊的程度

[1]: http://en.wikipedia.org/wiki/Bloom_(shader_effect)

