---
title: Physically Based Rendering
template: usermanual-page.tmpl.html
position: 3
---

![Star-Lord][1]
*Star-Lord Model by [Joachim Coppens][2]*

基于物理的渲染(PBR)是一个艺术工作流程的组合，使在图形渲染时一同工作的物理性能和材质着色器获得协调和一致。

# 基本原理

接下来，我们会尝试基于物理的着色器背后是如何计算照明的并总结这些基本原理。在接下来的章节中，我们将详细介绍在PlayCanvas中使用的基于物理的渲染方式的工作细节。

## 漫反射 & 镜面反射

Diffuse and Specular (or reflected) light are the two terms that describe two main types of interaction between light and a material. Specular light refers to light which has bounced off the surface. On a smooth surface this light will reflect all the in same direction and the surface will appear mirror-like. Diffuse light is light that has been absorbed, scattered in the material and re-emerged. This light tends to be uniform in direction unlike specular light. During this absorbing and re-emerging some light wavelengths will be absorbed. The wavelengths that are not absorbed give the material its color. For example, if all blue and green wavelengths are absorbed, the material will appear red. In rendering terms, diffuse color is sometimes known as "albedo" or "base color".

## 节约性能

![Energy Conservation][3]
*Smooth surfaces have small bright patches, rough surfaces have large dim patches*

One of the key features of physically correct rendering is that of Energy Conservation. Derived from the fact that the diffuse light and the reflected light all come from the light hitting the material, the sum of diffuse and reflected light can not be more than the total light hitting the material. In practice this means that if a surface is highly reflective it will show very little diffuse color. And the opposite, if a material has a bright diffuse color, it can not reflect much.

PBR让人欣喜的地方在于性能的节约全部包含在了着色器内，因此作为一个美术工作者你就不需要考虑这方面的问题了。它会自己工作！

## 金属 & 非金属

![Metals & Non-metals][4]
*Metals and Non-metals*

One thing that's new with PBR versus older shading models is thinking about what a material is made of in order to determine its behavior. The main thing we consider here is whether the material is a conductor (usually a metal) or an insulator (a non-metal).

这很重要的原因是它决定了关于材料将如何呈现光照的许多因素。举个例子，金属的反射率一般在(60％-90％之间)而非金属则在(0％-20％)之间。第二点，非金属反射出的影子通常是白色的，而金属通常会反射出与影像漫反射相同的颜色。

因为有这些差异的存在，PBR工作流程中设置了**金属**参数，使得定义材质位金属或非金属变得简单了许多。更多关于金属设置的工作流程请看下方。

## 菲涅尔透视效果

菲涅尔是一个术语，你不需要真的明白PlayCanvas是怎样进行PBR工作的，但是它会给你一个关于如何表现材质的更好的意见。

你对于菲涅尔所需要了解的部分只有它意味着在你通过一个面观察事物的角度会影响反射后呈现出的景象。如果这个面在你的视野里几乎只有边缘，它将会呈现完全反射。

## 微观表面

最后我们来看微观表面部分。通常来说，3D美术师们对法线贴图这个概念是很熟悉的。即用于修改材质被贴到面上的方向的贴图。微观表面，或者还可以认作粗糙度或光滑度，只在很小的尺寸们中提供了一个相似的效果。材质的围观表面描述了材质有多粗糙或者光滑。从玻璃比较(最高光滑度，最低粗糙度)到砂纸(最高粗糙度，最低光滑度)。我们并没有指定确切的方向上的确切的面数，仅仅是一个粗糙与光滑的概念。

一些PBR系统会使用粗糙系数，一些使用光滑系数，这些都是相同的概念。粗糙系数指与光滑相背离的程度，反之同样。如果你想从一个效果转换到另一个，简单的做法是反转纹理或系数值。

[下一章: 物理材质][6]

*更多信息请参阅 Marmoset Toolbag 的 [PBR 理论][5] 文章 *。

[1]: /images/user-manual/graphics/physical-rendering/star-lord.jpg
[2]: http://joachimcoppens.com/
[3]: /images/user-manual/graphics/physical-rendering/energy-conservation.jpg
[4]: /images/user-manual/graphics/physical-rendering/materials.jpg
[5]: https://www.marmoset.co/toolbag/learn/pbr-theory
[6]: /user-manual/graphics/physical-rendering/physical-materials

