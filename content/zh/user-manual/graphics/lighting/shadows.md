---
title: 阴影
template: usermanual-page.tmpl.html
position: 2
---

在场景中呈现阴影将用户的游戏更接近现实。然后，动态（实时）阴影，会产生大量的运行性能消耗。[光照贴图][4]查看在场景中更有效的添加静态阴影。

![Characters with shadow casting][1]

PlayCanvas引擎去实现了阴影算法称为阴影贴图。这个是跨平台的一种算法所以保证了能在移动端和电脑端运行。此外，阴影对任何用户是免费开放的－用户不需要购买会员来让您的游戏看起来更棒。

## 开启阴影

![Directional Light][5]

默认情况下，在PlayCanvas中阴影效果是关闭的。用户需要手动将它开启。幸运的是，开始阴影是一件极其简便的事情。首先，识别在场景中哪种类型的灯光是可以制造阴影的。在层级树中选择灯光并且在检查器中修改属性。每个灯光都有“Cast Shadows”（制造阴影）属性。点击这个选项将会让灯光在场景中对图形对象造成阴影。

![Model Component][6]

现在用户需要定义在场景中哪个图形对象可以制造阴影和接收阴影。默认情况下，所有模型组件可以接受阴影但不能知道阴影。因此，为了能让一个实体产生阴影，在层级树中选中这个实体，在检查器中找到模型组件并且点击“Cast Shadows”选项。

现在在编辑器视角中用户应该可以看得见这个实体制造的阴影了。

## 调整阴影

通过PlayCanvas创造的阴影贴图技术只能提供有限的分辨率。因此，用户可能需要掉整一个参数来得到更好的效果。以下的几个属性可以从[Light Component][2] UI中找到。

### 阴影距离

The shadow distance is the distance from the viewpoint beyond which directional light shadows are no longer rendered. The smaller this value, the crisper your shadows will be. The problem is that the viewer will be able to see the shadows suddenly appear as the viewpoint moves around the scene. Therefore, you should balance this value based on how far the player can see into the distance and generally what looks good.

### 阴影分辨率

每个灯光都通过阴影贴图来产生阴影。阴影贴图可以有256x256, 512x512, 1024x1024 or 2048x2048等的像素，并且可以在灯光组件的接口中可以进行值的设置。分辨率越高，形成的阴影就越清晰。然而，高品质的阴影需要耗费更多的性能去行程，所以确保性能和品质能达到平衡。

### 阴影偏移

阴影贴图可以很容易地渲染工件，但是看起来并不好看。如果用户注意到意料之外的带阴影的斑点或斑块，就需要调整阴影偏移来解决这个问题。

### 法向等距偏值

“Shadow acne”是一个比较棘手的问题，但是通过阴影偏值就可以有效的解决。遗憾的是，这经常导致某种程度的“Peter Paning”，一种阴影使得物体看起来像漂浮在空中的现象。

法相等距偏值解决了这个问题。另外通过使用偏移量，我们可以避免shadow acne 和 Peter Panning问题，一段代码片段的位置沿着几何法线偏移。

## 软阴影和硬阴影

阴影的轮廓被称为penumbra。这是一个从暗到明亮的过渡，给予了阴影一个柔和的边缘。柔和的阴影边缘在PlayCanvas中是被默认设置的，用户可以通过改变参数得到一个硬边阴影。如下图所示可看到两者的区别：

![Hard vs soft shadows][3]

通过在GPU中生成多次阴影贴图的样本来达到实现柔和阴影。该算法被称为Percentage Closest Filtering或者PCF for short。该算法从阴影中读取9个本地化的样本（3x3矩阵），而不是仅仅只有一个。

阴影样本类型由每个材质所指定，因此用户可以在材质编辑器中找到相对应的选项。

##性能方面的考虑

开启阴影会对性能产生影响：

* For each shadow casting directional or spot light, the scene must be rendered once into a shadow map every frame. Point light shadows are far more expensive since the scene is rendered six times per light (the shadow map is stored as a 6-sided cube map). Rendering the scene into shadow maps places load on both the CPU and the GPU.
* Using a greater shadow map resolution with generate crisper shadows but the GPU must fill more shadow map pixels and therefore this may affect frame rate.
* Selecting soft shadows (PCF3x3) for the shadow sample type on a shadow receiving material is more expensive on the GPU versus the hard shadows option.
* If your shadows are from static parts of the environment consider using [lightmaps][4] to bake shadows into textures.

[1]: /images/user-manual/graphics/shadows/doom3_shadows.jpg
[2]: /user-manual/packs/components/light
[3]: /images/user-manual/graphics/shadows/hard_vs_soft.jpg
[4]: /user-manual/graphics/lighting/lightmaps
[5]: /images/user-manual/scenes/components/component-light-directional.png
[6]: /images/user-manual/scenes/components/component-model.png

