---
title: 阴影
layout: usermanual-page.hbs
position: 2
---

在场景中呈现阴影将用户的游戏更接近现实。然后，动态（实时）阴影，会产生大量的运行性能消耗。[光照贴图][4]查看在场景中更有效的添加静态阴影。

![有阴影投射的人物][1]

The PlayCanvas engine implements a shadowing algorithm called shadow mapping. It is completely cross-platform and so is guaranteed to work on both mobile and the desktop.

## Enabling Shadows

![Directional Light][5]

默认情况下，在PlayCanvas中阴影效果是关闭的。用户需要手动将它开启。幸运的是，开始阴影是一件极其简便的事情。首先，识别在场景中哪种类型的灯光是可以制造阴影的。在层级树中选择灯光并且在检查器中修改属性。每个灯光都有“Cast Shadows”（制造阴影）属性。点击这个选项将会让灯光在场景中对图形对象造成阴影。

![Model Component][6]

Now you need to specify which graphical objects in your scene cast and receive shadows. By default, all render and model components cast and receive shadows. To modify these properties, select the entity in the Hierarchy, locate the render or model component in the Inspector and uncheck the 'Cast Shadows' or 'Receive Shadows' option as required.

## Shadow Cascades

When a directional shadow is used over a large area, it often exhibits aliasing, where a shadow near the camera has a low resolution. Capturing the shadow in a single shadow map requires very high and impractical resolution to improve this.

Shadow cascades help to fix this problem by splitting the camera view frustum along the viewing direction, and a separate shadow map is used for each split. This gives nearby objects one shadow map, and another shadow map captures everything in the distance, and optionally additional shadow maps in between.

Note that the number of shadow cascades has an effect on performance, as each shadow casting mesh might need to be rendered into more than a single shadow map.

The following properties can be used to set up shadow cascades.

### Number of cascades

Number of cascades represents the number of view frustum subdivisions, and can be 1, 2, 3 or 4. The default value of 1 represents a single shadow map.

A screenshot showing a single shadow cascade.

![One cascade][7]

A screenshot showing four shadow cascades.

![Four cascades][8]

### Distribution of cascades

The distribution of subdivision of the camera frustum for individual shadow cascades. A value in the range of 0 to 1 can be specified. A value of 0 represents a linear distribution and a value of 1 represents a logarithmic distribution. Visually, a higher value distributes more shadow map resolution to foreground objects, while a lower value distributes it to more distant objects.

## Tuning Shadows

通过PlayCanvas创造的阴影贴图技术只能提供有限的分辨率。因此，用户可能需要掉整一个参数来得到更好的效果。以下的几个属性可以从[Light Component][2] UI中找到。

### Shadow Distance

影子距离是视点与超过它的定向光阴影不再呈现的位置的距离。此值越小，阴影就消失得约快。问题是，这样观看者在周围的场景移动时将会看到的阴影突然出现。因此，你应该根据玩家能看到多远和一般情况下什么好看来平衡这个值。

### Shadow Resolution

每个灯光都通过阴影贴图来产生阴影。阴影贴图可以有256x256, 512x512, 1024x1024 or 2048x2048等的像素，并且可以在灯光组件的接口中可以进行值的设置。分辨率越高，形成的阴影就越清晰。然而，高品质的阴影需要耗费更多的性能去行程，所以确保性能和品质能达到平衡。

### Shadow Bias

阴影贴图可以很容易地渲染工件，但是看起来并不好看。如果用户注意到意料之外的带阴影的斑点或斑块，就需要调整阴影偏移来解决这个问题。

### Normal Offset Bias

“Shadow acne”是一个比较棘手的问题，但是通过阴影偏值就可以有效的解决。遗憾的是，这经常导致某种程度的“Peter Paning”，一种阴影使得物体看起来像漂浮在空中的现象。

法相等距偏值解决了这个问题。另外通过使用偏移量，我们可以避免阴影斑驳和彼特平移问题，一段代码片段的位置沿着几何法线偏移。片段的位置沿着其几何法线偏移。这种“法线偏移”技术的收益率远远优于结果恒定的阴影偏置唯一方法。

## Soft Shadows vs Hard Shadows

阴影的轮廓被称为penumbra。这是一个从暗到明亮的过渡，给予了阴影一个柔和的边缘。柔和的阴影边缘在PlayCanvas中是被默认设置的，用户可以通过改变参数得到一个硬边阴影。如下图所示可看到两者的区别：

![硬阴影和软阴影][3]

通过在GPU中生成多次阴影贴图的样本来达到实现柔和阴影。该算法被称为Percentage Closest Filtering或者PCF for short。该算法从阴影中读取9个本地化的样本(3x3矩阵)，而不是仅仅只有一个。

The shadow sampling type is specified per light and so the option can be found in the Light Inspector.

## Performance Considerations

开启阴影会对性能产生影响：

* For each shadow casting directional or spot light, the scene must be rendered once into a shadow map every frame. Omni light shadows are far more expensive since the scene is rendered six times per light (the shadow map is stored as a 6-sided cube map). Rendering the scene into shadow maps places load on both the CPU and the GPU.
* Using a greater shadow map resolution with generate crisper shadows but the GPU must fill more shadow map pixels and therefore this may affect frame rate.
* Selecting soft shadows (PCF3x3) for the shadow sample type on a shadow receiving material is more expensive on the GPU versus the hard shadows option.
* If your shadows are from static parts of the environment consider using [lightmaps][4] to bake shadows into textures.

[1]: /images/user-manual/graphics/lighting/shadows/doom3_shadows.jpg
[2]: /user-manual/packs/components/light
[3]: /images/user-manual/graphics/lighting/shadows/hard_vs_soft.jpg
[4]: /user-manual/graphics/lighting/lightmapping
[5]: /images/user-manual/scenes/components/component-light-directional.png
[6]: /images/user-manual/scenes/components/component-model.png
[7]: /images/user-manual/graphics/lighting/shadows/shadow_cascades_1.jpg
[8]: /images/user-manual/graphics/lighting/shadows/shadow_cascades_4.jpg
