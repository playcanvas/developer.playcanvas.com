---
title: Common Questions
template: usermanual-page.tmpl.html
position: 25
---

## 如何添加组件？

给实体添加一个**组件**时首先选中目标实体，然后在**检查器**中点击 **Add Component**。或者右键点击实体，从上下文菜单中选择 Add Component 中的组件。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/)

# 如何添加脚本？

<img src="https://playcanvas.com/static-assets/instructions/add-new-script.gif"/>

可以使用 JavaScript 来控制实体的行为。增加一个脚本组件，然后创建一个新脚本。

[Learn more](https://developer.playcanvas.com/en/user-manual/scripting/creating-new/)

## 如何修改背景色？

场景中的背景色与场景中的摄影机有关。摄影机的清空色属性决定了场景的背景色

You could also try and adding a [skybox](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/) to your scene.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/camera/)

## How do I change the material of a model?

<img src="https://playcanvas.com/static-assets/instructions/change_material.gif"/>

3D模型的每一个表面都需要通过**材质**进行渲染。材质定义了表面的属性，诸如颜色，光泽，光滑度等等。

可以通过创建一个新的材质然后拖放到模型上或者在模型的检查器中选择它的材质然后编辑材质属性。

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)

如何创建 cubemap ?

<img src="https://playcanvas.com/static-assets/instructions/new_cubemap.gif"/>

Cubemap 是一种特殊的纹理资源。它整合了6张纹理资源，每张纹理表示盒子的一个面。

To create a cubemap click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and select **New Cubemap**. Then drag 6 textures in the cubemap inspector. To take advantage of Physically Based Rendering make sure you click **Prefilter** after setting the 6 textures.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/)

如何创建一个实体？

<img src="https://playcanvas.com/static-assets/instructions/new_entity.gif"/>

You can create a new Entity by clicking on the <span class="pc-icon">&#57632;</span> Add button in the Hierarchy panel or right click on an Entity and use the **New Entity** menu item.

## 如何创建灯光？

可以通过在实体上增加 **Light** 组件来创建灯光。也可以在实体上点击右键然后选择 New Entity / Directional Light 来创建一个方向光光源。聚光灯或者点光源也可以用一样的方式创建。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/light/)

## 如何创建材质？

3D模型的每一个表面都需要通过**材质**进行渲染。材质定义了表面的属性，诸如颜色，光泽，光滑度等等。

To create a material click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and then select **New Material**.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)

如何创建 shader？

可以通过资源面板来新建 shader 资源。点击 **Add Asset -> Shader**。

[View tutorial](http://developer.playcanvas.com/en/tutorials/custom-shaders/)

## 如何创建一个立方，球形等样式的形体？

<img src="https://playcanvas.com/static-assets/instructions/new_box.gif"/>

You can add primitive shapes like boxes, spheres and others by adding a **Render Component** on an Entity and changing its type to the desired shape.

同样也可以通过右键点击实体然后选择 New Entity / Box 来创建一个立方(其它的形体也是一样)。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/render/)

## 如何创建天空盒？

为场景创建一个天空盒之前首先需要创建一个[Cubemap](http://developer.playcanvas.com/en/user-manual/assets/cubemaps/)资源。然后可以通过把 Cubemap 拖放到 3D 视口，或者前往Scene Settings中拖放 Cubemap 至 Skybox 栏位。

[Learn more](https://developer.playcanvas.com/en/user-manual/designer/settings/#skybox)

## 如何删除资源？

选中资源后按 **Delete** 键或者右键点击资源后选择删除来删除资源。

## 如何删除一个实体？

You can delete an Entity by selecting it and pressing **Delete**. Alternatively you can click on the <span class="pc-icon">&#57636;</span> Delete button in the Hierarchy panel or right click on the Entity and select Delete from the context menu.

## 如何复制一个实体？

To duplicate an Entity use the <span class="pc-icon">&#57638;</span> Duplicate button in the Hierarchy panel or press **Ctrl+D**.

你也可以同样使用“复制”和“粘贴”的方式复制实体。使用 **Ctrl+C** 复制和 **Ctrl+V** 粘贴。

## 如何播放动画？

To play an animation of a 3D model you need to create an Entity with a [Model Component](https://developer.playcanvas.com/en/user-manual/packs/components/model/) and an [Animation Component](https://developer.playcanvas.com/en/user-manual/packs/components/animation/). The **Model Component** will render your model and the **Animation Component** will play animations.

将模型资源拖放到模型组件的资源栏渲染。将动画资源拖放到动画组件的动画栏播放。

## 如何播放声音？

在实体上添加[Sound](https://developer.playcanvas.com/en/user-manual/packs/components/sound/)组件播放声音。通过创建槽位来引用[音频资源](https://developer.playcanvas.com/en/user-manual/assets/audio/)。点击 “Add Slot” 然后拖放音频资源至槽位的 Asset 栏位。如果想要正确的听到声音，还需要在场景中有一个[音频侦听器](https://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/)组件 - 通常情况下它都被放在摄影机实体上。

可以通过从本地拖放一个音频文件至资源面板来创建音频资源。

[View tutorial](https://developer.playcanvas.com/en/tutorials/basic-audio/)

## 如何移除一个组件？

<img src="https://playcanvas.com/static-assets/instructions/remove_component.jpg" />

To remove a component, select the Entity and then click on the **<span class="pc-icon">&#57636;</span> Delete** button in the Inspector next the component’s title.

## 如何渲染 3D 模型？

<img src="https://playcanvas.com/static-assets/instructions/new_model.gif"/>

渲染一个 3D 模型首先需要在一个实体上添加 **Model** 组件，然后拖放**模型资源**到组件的资源栏。也可以直接把模型资源从资源面板拖放至 3D 视口。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/model/)

## 如何 移动 / 旋转 / 缩放 实体？

<img src="https://playcanvas.com/static-assets/instructions/transform.gif"/>

To move an Entity, select it and then move it using the **<span class="pc-icon">&#57617;</span> Translate tool**. To rotate it use the **<span class="pc-icon">&#57619;</span> Rotate tool** and to scale it use the **<span class="pc-icon">&#57618;</span> Scale tool**.

可以分别使用 1 / 2 / 3 快捷键切换 平移 / 旋转 / 缩放 工具。 

## 如何上传资源？

只需要从本地拖放文件到资源面板就可以上传资源。文件将会由服务器进行处理并随后出现在资源面板。

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/importing/)

## 如何使用物理特性？

为实体增加物理属性依赖于实体上的 [Collision](https://developer.playcanvas.com/en/user-manual/packs/components/collision/) 碰撞组件和 [RigidBody](https://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/) 刚体组件。碰撞组件给予实体物理学上的形体，刚体负责把实体的运动交给物理引擎处理。

You can change the default [gravity](https://developer.playcanvas.com/en/user-manual/designer/settings/#gravity) in the Scene Settings.

[View tutorial](https://developer.playcanvas.com/en/tutorials/collision-and-triggers/)

## 如何使用实时阴影？

实时阴影由每个光源的**Cast Shadows**标记独立控制。选中拥有灯光组件的实体，打开灯光组件的投影标记。同时也需要设置会产生阴影和接受阴影的模型组件，打开对应的标记。

[Learn more](https://developer.playcanvas.com/en/user-manual/graphics/lighting/shadows/)

