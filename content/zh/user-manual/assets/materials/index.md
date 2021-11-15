---
title: Material
template: usermanual-page.tmpl.html
position: 10
---

3D模型的每一个面都通过使用材质被渲染。材质决定了外观的属性，譬如颜色，亮度，表面是否隆起等。

在PlayCanvas中，材质就是一种将所有属性集合在一起的资源类型。在默认情况下，一般为物理材质。这表明一些基础的属性就可以用来创造出许多不同类型的视觉效果。譬如：光滑的塑料，粗糙的木材，刮花的金属。

我们同样也支持旧Phong材质类型。

## 导入材质

当用户上传一个3D模型文件（譬如 FBX or COLLADA） 时，材质将会自动被导入到PlayCanvas引擎中。材质将会生成和现有的3D建模工具一样的属性。如果用户通过嵌入式媒体（FBX）上传所有相关联的纹理贴图系统将会自动为用户进行设置。

## 创建新材质

用户可以直接使用PlayCanvas编辑接口来创建新的材质。

<img src="/images/user-manual/create-asset-menu.jpg" style="width: 300px;" />

这将创建新的材质资源并且开启在屏幕右边的材质检查器。

## 选择一个材质

<img src="/images/user-manual/model-inspector-simple.jpg" style="width: 300px; float:right; padding: 20px; padding-top: 0px;" />

为了能够编辑一个材质，首先用户需要选中它，这个操作将会显示材料检查器。

用户可以在资源面板中选择想要的材质。同样用户还可以在模型检查起或模型组件中选择材质。

一般来说，点击一个材质预览图标将会带着用户进入材质检查器。

## 指定材质

<img src="/images/user-manual/material_overrides/model.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

用户可以修改材质被分配到哪个模型资源或者用户可以打造包含模型组件的特定实体的材质。

当用户选中一个有着模型组件的实体，用户将会看到两个按钮－资源材质和实体材质。

<br style="clear:both;" />

<img src="/images/user-manual/model-inspector-free-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

用户可以修改材质被分配到哪个模型资源或者用户可以打造包含模型组件的特定实体的材质。当用户选中一个有着模型组件的实体，用户将会看到两个按钮－资源材质和实体材质。点击资源材质将会选中模型资源。用户同样可以从资源面板中选择模型资源。模型检测器将会显示网格模型以及材质的分配。用户可以通过点击X按钮来清除材质，点击空白插槽来分配一个新的材质。

用户同样可以通过从资源面板拖拽材质素材到材质插槽。

<br style="clear:both;" />

点击实体材质将会系统将会向通知用户为所创建的材质选择网格实例：

<img src="/images/user-manual/material_overrides/select.png" style="max-width: 100%" />

在选择网格实例之后，一个新的材质选择器将会出现在模型组件中：

<img src="/images/user-manual/material_overrides/selected.png" style="max-width: 100%" />

之后用户就可以为特定实体选择不同的材质了：

<img src="/images/user-manual/material_overrides/overriden.png" style="max-width: 100%" />

<br style="clear:both;" />

## 编辑材质

<img src="/images/user-manual/material-inspector.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

当用户选中一个材质时就可以对材质的属性进行编辑。

编辑器支持类型为“光照模型”的模型，这个属性在材质检查器顶部的下拉菜单中定义。

### 物理

物理光照模型为PlayCanvas中最前沿的光照模型。这个模型用于PlayCanvas的Physically Based Renderer(PBR)。

[物理材质]属性[1]

### Phong

Phong光照模型作为遗留的光照模型，在兼容性方面有着很重要的作用。

[Phong材质属性][2]

## 材质贴图

<img src="/images/user-manual/material-map-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

大量的编辑材质涉及了创建和分配纹理贴图到多个插槽在页面上进行详细说明。

这里有一些选项将出现在材质的大多数纹理贴图中。

### 纹理资源

首先纹理资源，上传一个图像到PlayCanvas，我们将会为用户创建一个纹理资源。用户可以为这个纹理在材质中资源分配插槽。

### 颜色或色调

Some map slots can be a flat color instead of a texture map. Some slots also support a tint color if a texture is also assigned. If enabled the tint color is multiplied by the color in the texture map slot.

### 通道

有些贴图只要求一个简单的灰度值譬如0.0 -> 1.0。在这种情况中是有可能选择纹理的哪个通道被使用。**RGB**意味着所有通道都被使用。**R**, **G** or **B** 意味着只有红，绿或者蓝通道将会被使用。

[1]: /user-manual/assets/physical-material
[2]: /user-manual/assets/phong-material

