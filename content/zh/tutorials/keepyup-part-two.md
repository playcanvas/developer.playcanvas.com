---
title: 制作一个简单的游戏 - Part 2
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk/?overlay=false"></iframe>

*你可以在这里找到[完整项目][16]。 如果你还没有看过[第1部分][1]请先阅读它。

## 材质设置

我们保证这个游戏的图形需求非常简单，因此没有太多的设置，但我们还是不得不位球、背景和前景设置一些材质资源。

### 什么是材质?

材质是PlayCanvas中的一种资源，它描述了3D模型表面在呈现到屏幕时的外观的方式。 材质决定了模型表面的颜色，也决定了表面与光相互作用的方式。 例如，您可以将材质设置为光滑金属或粗糙橡胶。 PlayCanvas有一个内置的材质，称为物理材质，它可以覆盖90％的材质用例。 当你需要更高级的效果，可以选择通过使用GLSL着色器代码来编写创建自己的材质。

### 立方体贴图

在我们转到材质之前，我们先进行立方体贴图资源的设置。 立方体贴图是由多维数据集表面上的6个纹理组成的资源。 你可以认为这是远离你的场景的环境。 PlayCanvas物理材质可以使用立方体贴图做基于图像的照明。 这使用立方体地图中的颜色来点亮场景中的材质。 例如在我们的场景中，立方体贴图有一个蓝色的天空和一个绿色的草地表面。 所以我们的球将从上面点亮蓝色，从下面点亮绿色。你可以在我们的文档中 [阅读更多][7]。

![立方体贴图][8]

要设置立方图，首先从新建资源菜单创建立方体资源，分配6个纹理到立方体贴图的每个面。 当您的立方体地图分配了所有6个面时，按下“预过滤器”按钮。 **所需的预滤波使立方体地图正常工作！**

## 足球实体

![足球][3]

足球是我们从[PlayCanvas素材库][2]导入的3D模型。 足球材料已经将主要部分为你设置好了，但你可能需要做一些简单的更改。 让我们看看足球使用的每个贴图。

#### 漫反射

![漫反射][4]

漫反射贴图定义了材质表面的颜色。 在本案例中，它是足球的黑白图案。

#### 环境

![环境][9]

我们将快速地跳转到环境部分，因为在这里我们需要看到的镜面变化的影响。 要设置环境，请在材质中的立方体贴图的插槽上拖入Cubemap资源。

#### 镜面

![镜面][5]

镜面部分确定材料如何与灯光相互作用。 镜面效果有两个“工作流程”，“金属工作流”和“镜面工作流”，您可以在我们的[文档][6]中找到更多信息。 对于足球我们使用金属性设置，所以一定要勾选“使用金属”框。 由于我们的足球不是由金属制成，所以我们滑动金属滑块一直到0。然后我们滑动光泽滑块设置我们的粗糙/光滑的材料直到材质呈现它应该有的样子。 我们把它设置到大约一半的位置，这可以让球发出不错的光泽，但又不是完全光滑的。

#### 法线

![法线][10]

我们附着上的最后一个贴图就是法线贴图。法线贴图用于为模型添加细节。 在这种情况下，足球的单独补丁不在几何形状(即平滑球体)中建模，而是在法线图中进行。 这意味着足球将被正确按照补丁的样子被附上高光，并不会产生大量额外的多边形的开销。

## 背景材质

![背景][11]

我们的背景材料更简单，只有一个纹理贴图。

#### 自发光

![自发光][12]

自发光贴图设置表面处的颜色自行发出对应光，就好像它默认就是那种颜色。 这意味着场景中的灯光不会影响发光表面的亮度。 注意，发光材料不会影响场景中的任何其他对象，实际上没有发射光。

在本案例中下，我们不希望背景被点亮，它只是一个静态场景。 所以我们使用自发光贴图来做到这一点。

## 罩子材质

![罩子][13]

罩子的材质甚至比背景更简单。 在这种情况下，我们要做的只有设置设置自发光属性的颜色。

![自发光][14]

继续前往 [第 3 部分][15].

[1]: /tutorials/keepyup-part-one/
[2]: http://store.playcanvas.com/
[3]: /images/tutorials/beginner/keepyup-part-two/ball-material.jpg
[4]: /images/tutorials/beginner/keepyup-part-two/ball-diffuse.jpg
[5]: /images/tutorials/beginner/keepyup-part-two/ball-spec.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/
[7]: /user-manual/assets/cubemaps/
[8]: /images/tutorials/beginner/keepyup-part-two/cubemap-preview.jpg
[9]: /images/tutorials/beginner/keepyup-part-two/ball-env.jpg
[10]: /images/tutorials/beginner/keepyup-part-two/ball-normal.jpg
[11]: /images/tutorials/beginner/keepyup-part-two/backdrop-material.jpg
[12]: /images/tutorials/beginner/keepyup-part-two/backdrop-emissive.jpg
[13]: /images/tutorials/beginner/keepyup-part-two/overlay-material.jpg
[14]: /images/tutorials/beginner/keepyup-part-two/overlay-emissive.jpg
[15]: /tutorials/keepyup-part-three/
[16]: https://playcanvas.com/project/406050

