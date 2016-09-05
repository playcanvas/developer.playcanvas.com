---
title: 材质
template: usermanual-page.tmpl.html
position: 6
---

3D模型的每一个面都通过使用材质被渲染。材质决定了外观的属性，譬如颜色，亮度，表面是否隆起等。

在PlayCanvas中，材质就是一种将所有属性集合在一起的资源类型。在默认情况下，一般为物理材质。这表明一些基础的属性就可以用来创造出许多不同类型的视觉效果。譬如：光滑的塑料，粗糙的木材，刮花的金属。

We also support our old Phong Material type.

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

You can modify which materials are assigned to where on a model asset or you can customize the materials of a particular Entity that has a model component.

When you select an Entity with a model component you will see two buttons - Asset Materials and Entity Materials.

<br style="clear:both;" />

<img src="/images/user-manual/model-inspector-free-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

Clicking on Asset Materials will select the model asset. You can also select the model asset from the asset panel. The model inspector will show the meshes of model and which material is assigned to each. You can clear a material using the X button, and click the empty slot to assign a new material.

You can also drag and drop material Assets from the asset panel onto the material slot.

<br style="clear:both;" />

Clicking on Entity Materials will first ask you to select the mesh instance for which you want to customize the material:

<img src="/images/user-manual/material_overrides/select.png" style="max-width: 100%" />

After selecting the mesh instance a new material picker will appear in the model component:

<img src="/images/user-manual/material_overrides/selected.png" style="max-width: 100%" />

Then you can select a different material for this particular Entity:

<img src="/images/user-manual/material_overrides/overriden.png" style="max-width: 100%" />

<br style="clear:both;" />

## Editing a Material

<img src="/images/user-manual/material-inspector.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

Once you have a material selected you can edit its properties.

The Editor supports to types of material 'Shading Model', this is defined in a drop-down at the top of the material inspector.

### Physical

The physical shading model is our most advanced shading model. This is the model for PlayCanvas's Physically Based Renderer (PBR).

[Physical Material Properties][1]

### Phong

The phong shading model is our legacy shading model. Use this for compatibility reasons.

[Phong Material Properties][2]

## Material Maps

<img src="/images/user-manual/material-map-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

Much of editing a material involves creating and assigning textures maps to the various slots detailed on the pages above.

There are a few options that are available on most texture map slots for a material.

### Texture Asset

First is the texture asset, upload an image to PlayCanvas and we'll create a texture asset for you. you can assign this to a slot on a material.

### Color or Tint Color

Some map slots can be a flat color instead of a texture map. Some slots also support a tint color if a texture is also assigned. If enabled the tint color is multiplied by the color in the texture map slot.

### Channel

Some maps only require a single grayscale value e.g. 0.0 -> 1.0. In this case it is possible to select which channel of the texture to use. **RGB** means that all three channels are used. **R**, **G** or **B** means that only the red, green or blue channel will be used.

[1]: /user-manual/assets/physical-material
[2]: /user-manual/assets/phong-material

