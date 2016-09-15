---
title: 灯光
template: usermanual-page.tmpl.html
position: 1
---

在现实世界中，我们周边的坏境被许多光源照亮。太阳，路灯，电视屏幕等等。在PlayCanvas场景中，用户可以设置许多不同类型的光源模拟在现实生活中的真实光源。

PlayCanvas拥有三种不同的光源：

* 定向灯
* 点光源
* 聚光灯

## 定向光

定向光是和太阳光及其相似的一种光源。因为太阳距离地球十分的遥远，阳光照射到地球表面相当于向一个方向照射。在PlayCanvas中，这个类型的光源被称为定向光。

当为被选中时，定向光在编辑器3D视角中呈现如下图标：

![Directional light icon][1]

在层级树和检查器中点击这个图标选择灯光。

定向光如何照亮一个对象：

![Directional light][2]

在性能方面引擎处理定向光是最快的。

## 点光源

Point lights are light sources that emit light from a single point in all directions. Examples of this type of light are an unshaded light bulb or candlelight.

When unselected, a point light is represented by the following icon in the Editor's 3D view:

![Point light icon][3]

在层级树和检查器中点击这个图标选择灯光。

A point light lights an object like this:

![Point light][4]

Point lights are more costly than directional lights but faster to process than spot lights.

## Spot Lights

Spot lights, like point lights, emit light from a single point in space. However, the light from the spot light is constrained to a cone shape. Examples of a spot light would be a torch or the light from a lighthouse.

When unselected, a spot light is represented by the following icon in the Editor's 3D view:

![Spot light icon][5]

在层级树和检查器中点击这个图标选择灯光。

A spot light lights an object like this:

![Spot light][6]

Spot lights are the most costly type of light so use them sparingly.

[1]: /images/user-manual/graphics/lights/directional_icon.jpg
[2]: /images/user-manual/graphics/lights/directional.jpg
[3]: /images/user-manual/graphics/lights/point_icon.jpg
[4]: /images/user-manual/graphics/lights/point.jpg
[5]: /images/user-manual/graphics/lights/spot_icon.jpg
[6]: /images/user-manual/graphics/lights/spot.jpg

