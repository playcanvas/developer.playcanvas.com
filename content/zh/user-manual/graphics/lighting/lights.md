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

当未被选中时，定向光在编辑器3D视角中呈现如下图标：

![Directional light icon][1]

在层级树和检查器中点击这个图标选择灯光。

定向光如何照亮一个对象：

![Directional light][2]

在性能方面引擎处理定向光是最快的。

## 点光源

点光源是从一个中心点向空间内所有范围都发射灯光的一种光源。这个类型的灯光例子是一种无罩灯泡或者蜡烛。

当未被选中时，点光源在编辑器的3D视角中呈现如下图标：

![Point light icon][3]

在层级树和检查器中点击这个图标选择灯光。

点光源如何照亮一个对象：

![Point light][4]

点光源对比定向光需要更多时间处理，但是比聚光灯快。

## 聚光灯

聚光灯，和点光源一样，光源来自空间中的一个点。然而，聚光灯的光源被一个圆锥型外罩所包裹。聚光灯的例子将会是一个火炬或者从灯塔发射的一束灯光。

当未被选中时，聚光灯在编辑器3D视角中呈现如下图标：

![Spot light icon][5]

在层级树和检查器中点击这个图标选择灯光。

聚光灯如何照亮一个对象：

![Spot light][6]

聚光灯是内存消耗最大的光源类型，所以需要谨慎使用。

[1]: /images/user-manual/graphics/lights/directional_icon.jpg
[2]: /images/user-manual/graphics/lights/directional.jpg
[3]: /images/user-manual/graphics/lights/point_icon.jpg
[4]: /images/user-manual/graphics/lights/point.jpg
[5]: /images/user-manual/graphics/lights/spot_icon.jpg
[6]: /images/user-manual/graphics/lights/spot.jpg

