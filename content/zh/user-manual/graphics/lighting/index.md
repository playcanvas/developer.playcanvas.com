---
title: 灯光
template: usermanual-page.tmpl.html
position: 2
---

照亮一个场景是一个对像素的颜色和阴影的计算过程，场景的渲染基于平面的材质属性以及应用在该材质的光源。

在PlayCAnvas中，灯光可以大致分为两个基本类别：动态光源和光照贴图。

## 动态光源

照明计算在实时运行状态下被归类为动态。

## 光照贴图

For lights and geometry that does not move, it is often preferable to determine the lighting information in advance. This information is then saved into lightmap textures which are applied to the surface materials. This method has a very low runtime cost at the expense of having static lighting which can not change and pre-computation times.

这里有两种方式创建光照贴图：

### 外部光照贴图生成

许多3D创建工具包含了光照贴图生成器或者允许在程序中自主添加，包括3DS Max，Maya以及Blender。这些工具普遍都可以生成允许作为常规资源被上传的光照贴图，添加到标准物理材质的光照贴图插槽。

### PlayCanvas光照贴图生成

PlayCanvas引擎已经搭建了光照贴图生成器。这个可以帮助自动生成光照贴图在游戏开始之前。用这种方法用户可以使用标准灯光组件，更改以及在编辑器中预览场景。

