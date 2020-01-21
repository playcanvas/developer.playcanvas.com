---
title: Bloom Effect
template: usermanual-page.tmpl.html
position: 1
---

泛花是一种用于再现真实相机的成像效果的后期效果。该效果会在光从明亮区域到图像中暗色区域的边界上延伸产生干涉条纹(或羽化效果)， 造成一个非常明亮的光被相机捕捉到后在场景中铺天盖地的假象。 <small>(来自于 [Wikipedia][1])</small>

这是一张没有泛花的图片：

<img alt="Image without effect" src="/images/platform/posteffects/without_effects.png"></img>

和一张同样的但是有泛花的图片:

<img alt="Image with effect" src="/images/platform/posteffects/with_bloom.png"></img>

The built-in bloom effect has the following attributes:
* **Bloom Intensity**: The intensity of the effect
* **Bloom Threshold**: Only pixels brighter than this threshold will be processed. Ranges from 0 to 1.
* **Blur Amount**: Controls the amount of blurring.

[1]: http://en.wikipedia.org/wiki/Bloom_(shader_effect)

