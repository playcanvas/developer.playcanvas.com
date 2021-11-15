---
title: 物理材质
template: usermanual-page.tmpl.html
position: 1
---

在PlayCanvas中使用物理基础渲染，你需要理解物理材质是如何进行配置的以及什么参数会引起怎么样的效果变化。

在这部分中我们会说说关于材质中一些最有用的属性以及你可以看到几个如何设置它们以影响材质的案例。

首先是关于立方体贴图和工作流程的注意事项

## Image Based Lighting

[First up IBL][6], because inevitably you'll jump into the Editor and create Materials and wonder why your materials don't look the like the samples below. **Physical Materials with an HDR Prefiltered CubeMap look great!**

## 金属星和镜面的工作流程

![工作流程][4]

PBR常常被分为创建资源或工作流程的两个不同的方法。这两个工作流程是等效，并提供相同的结果。实际中选用哪个取决于你按照偏好做出的选择。在PlayCanvas中我们常常选择"金属性" 流作，因为我们发现金属性贴图更容易被创建，并且它只有一个渲染通道，这个以让它更高效地运行。

 **金属性** 工作流包括了设置金属性属性值和创建一个金属性贴图，这将决定模型的哪些区域是金属的哪些不是。通常这是一个简单的二元选择。 1表示金属，0表示非金属。介于两者之间的值并不是经常被使用。

 **镜面** 工作流程 包括了设置镜面属性值和创建一个镜面贴图，这将决定你的材质的反射光颜色和强度.

这里[Marmoset Toolbag blog][5]对这两者间的区别有一个很好的解释。

有关于材质方面...

# 材质属性和材质贴图

## 漫反射

漫反射颜色是一个材质的基础色彩。它是一个RGB颜色格式的属性值。 在用于区分纯物质 (金属, 塑料) 时它可以是一个恒定值，但是它也可以被提供作为一个漫反射贴图纹理。请注意, 你需要经常避免把光照细节 (阴影与高光)包括到你的漫反射材质贴图，因为你的材质还需要被别的贴图影响。

它也常被认作 **光反射率** 或 **基础颜色**.

<iframe src="https://playcanv.as/p/Q28EwTwQ/?color"></iframe>

你可以常常在互联网上看到记录了漫反射/反射率值的图表。

![金属][3]

<table class="centered">
  <tr>
  <th>材质</th><th>RGB值</th>
  </tr>
  <tr>
  <td>金</td><td>(1.000, 0.766, 0.336) 或 [255, 195, 86]</td>
  </tr>
  <tr>
  <td>银</td><td>(0.972, 0.960, 0.915) 或[248, 245, 233]</td>
  </tr>
  <tr>
  <td>铜</td><td>(0.955, 0.637, 0.538) 或[244, 162, 137]</td>
  </tr>
</table>

## 金属性

金属性属性值是**金属性**工作流中的一部分。 金属性值是一个在0-1之间的唯一值，它决定了一个材质是金属 (1) 还是非金属 (0).

<div class="alert-info">
金属性属性值应该是几乎一直被取值为不是0就是1。需要取一个介于这两者之间的值的情况是很罕见的。
</div>

你也可以设置一个金属性的贴图，这可以让你自主定义你的材料的特定区域为金属的或是非金属的。

<iframe src="https://playcanv.as/p/Q28EwTwQ/?metal"></iframe>

## 光滑度

光滑度在 **金属性** 和 **镜面**工作流程中都会被用到，它定义了你的材质表面有多光滑。光滑度会影响材质上倒影的模糊或清晰感，或是高光点的宽或窄。光滑度被从一个介于0-100之间的属性值或是一个光滑度贴图提供。

<iframe src="https://playcanv.as/p/Q28EwTwQ/?gloss"></iframe>

一些PBR系统会使用 **粗糙度** 来代替光滑度。 粗糙度是同光滑度相反的一个值。 如果你需要把一个粗糙的贴图转换为光滑的，只要简单地反转这个值就行。

有些时候光滑度和粗糙度会被**微观面数** 属性值所替代。

## 全部应用到一起

这三个属性 **漫反射**, **金属性** 和 **光滑度** 是物理材质系统的核心。你可以在下面的场景中试试演示不同的组合。

还有许多其他的可以进行探讨的附加属性，它们可以用来制造非常优秀的材质，如环境光遮蔽，自发光，不透明度，正常的和显示高度的贴图。

<iframe src="https://playcanv.as/p/Q28EwTwQ/"></iframe>

[1]: https://store.playcanvas.com
[2]: /user-manual/glossary#high-dynamic-range
[3]: /images/user-manual/graphics/physical-rendering/metals.jpg
[4]: /images/user-manual/graphics/physical-rendering/workflows.jpg
[5]: https://marmoset.co/posts/pbr-texture-conversion/
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/

