---
title: 物理学材质
layout: usermanual-page.hbs
position: 1
---

在PlayCanvas中使用物理基础渲染，你需要理解物理材质是如何进行配置的以及什么参数会引起怎么样的效果变化。

在这部分中我们会说说关于材质中一些最有用的属性以及你可以看到几个如何设置它们以影响材质的案例。

首先是关于立方体贴图和工作流程的注意事项

## Image Based Lighting

[First up IBL][6], because inevitably you'll jump into the Editor and create Materials and wonder why your materials don't look the like the samples below. **Physical Materials with an HDR Prefiltered CubeMap look great!**

## Metalness and Specular Workflow

![工作流程][4]

PBR常常被分为创建资源或工作流程的两个不同的方法。这两个工作流程是等效，并提供相同的结果。实际中选用哪个取决于你按照偏好做出的选择。在PlayCanvas中我们常常选择"金属性" 流作，因为我们发现金属性贴图更容易被创建，并且它只有一个渲染通道，这个以让它更高效地运行。

 **金属性** 工作流包括了设置金属性属性值和创建一个金属性贴图，这将决定模型的哪些区域是金属的哪些不是。通常这是一个简单的二元选择。 1表示金属，0表示非金属。介于两者之间的值并不是经常被使用。

 **镜面** 工作流程 包括了设置镜面属性值和创建一个镜面贴图，这将决定你的材质的反射光颜色和强度.

这里[Marmoset Toolbag blog][5]对这两者间的区别有一个很好的解释。

有关于材质方面...

# Material Properties and Maps

## Diffuse

漫反射颜色是一个材质的基础色彩。它是一个RGB颜色格式的属性值。 在用于区分纯物质 (金属, 塑料) 时它可以是一个恒定值，但是它也可以被提供作为一个漫反射贴图纹理。请注意, 你需要经常避免把光照细节 (阴影与高光)包括到你的漫反射材质贴图，因为你的材质还需要被别的贴图影响。

它也常被认作 **光反射率** 或 **基础颜色**.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?color" title="Physical Materials - Diffuse"></iframe>

You can often find the charts of recorded values for diffuse/albedo values on the internet.

![Metals][3]

| Material | RGB                                      |
|----------|------------------------------------------|
| Gold     | (1.000, 0.766, 0.336) or [255, 195, 86]  |
| Silver   | (0.972, 0.960, 0.915) or [248, 245, 233] |
| Copper   | (0.955, 0.637, 0.538) or [244, 162, 137] |

## Metalness

The metalness value is part of the **metalness** workflow. Metalness is a single value between 0-1 which determines if a material is metal (1) or non-metal (0).

<div class="alert-info">
The metalness value should almost always be 0 or 1. It is rare that you will need a value somewhere between these two.
</div>

You can also supply a metalness map which lets you define specific areas of your material as metal or non-metal.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?metal" title="Physical Materials - Metalness"></iframe>

## Glossiness

光滑度在 **金属性** 和 **镜面**工作流程中都会被用到，它定义了你的材质表面有多光滑。光滑度会影响材质上倒影的模糊或清晰感，或是高光点的宽或窄。光滑度被从一个介于0-100之间的属性值或是一个光滑度贴图提供。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?gloss" title="Physical Materials - Glossiness"></iframe>

Some PBR systems use **Roughness** instead of Glossiness. The roughness is the inverse of the glossiness. If you need to convert a roughness map to a glossiness map, simply invert it.

Sometimes glossiness and roughness are referred to as the **microsurface** value.

## All together

These three properties **diffuse**, **metalness** and **glossiness** are the core of the physical material system. You can try different combinations in the live demo below.

There are many other additional properties to investigate that can be used to make great materials such as Ambient Occlusion, Emissive, Opacity, Normal and Height maps.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/" title="Physical Materials - All"></iframe>

[1]: https://store.playcanvas.com
[2]: /user-manual/glossary#high-dynamic-range
[3]: /images/user-manual/graphics/physical-rendering/metals.jpg
[4]: /images/user-manual/graphics/physical-rendering/workflows.jpg
[5]: https://marmoset.co/posts/pbr-texture-conversion/
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
