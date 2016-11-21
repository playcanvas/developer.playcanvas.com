---
title: 基本材质
template: tutorial-page.tmpl.html
tags: materials
---

材料是定义3D模型的表面的外观的东西。 最简单的举例，一个材质设置了多边形的颜色，在其最复杂的情况下，一种材料可以模拟海洋的表面或光通过玻璃的效果。

在本教程中，我们会逐步讲解如何创建一个材质，如何把它附给一个形状，以及如何编辑材质的各项属性。首先我们来创建一个新的空场景。

## 第 1 步 - 在你的场景中添加一个方块

选择场景中的根实体。在场景初建成时它会被称作位"Root"。在属性编辑器中将实体重命名使其有意义，如“材质教程”。

选择层级树中的'New Entity' -> 'Box'菜单。这就在层级树中创建了一个新的立方体实体。

![新的立方体][1]

## 第2步 - 创建一个新的材质

直接从PlayCanvas编辑器界面创建新材料。 在资源面板中，使用+按钮打开“新建资源”菜单，然后选择材质。

![添加材质][2]

这将创建一个新的材质资源，并在屏幕的右侧显示材质编辑器。 在材质编辑器中将材料重命名为"Box Material"。

## 第3步 - 把材质赋给立方体

当您在编辑器中创建新的多维数据集时，它没有被分配任何材料，并且将使用默认材质进行渲染。 要将新材质分配到场景中的模型，只需将模型从资源面板拖动到视口中，并将其拖放到要分配给它的模型。

## 第 4 步 - 改变材质的颜色

为了改变材质的颜色，我们需要编辑材质的 *默认*属性。

通过在资产面板中单击选择材质。或当你选择了方块实体时从其属性检查器中的参数选择材质。

![漫反射颜色][4]

您必须在右面板中的材质编辑器中展开“漫反射”设置面板。 单击颜色属性以编辑材料的漫反射颜色。

## 优化 - 向材质添加贴图

能够改变材质的颜色是一个很好的开始，但是你会很快地想拥有更多的细节而不是单纯的颜色。这就是贴图所存在的意义。

下载& 保存这些样板贴图:

<a href="/downloads/proto_orange.png"><img style="float:left;" src="/downloads/proto_orange.png" width="128px"/></a>
<a href="/downloads/proto_gray_n.png"><img style="padding-left: 20px; margin: 0px" src="/downloads/proto_gray_n.png" width="128px"/></a>

然后通过将文件拖动到编辑器中将它们上传到您的项目。

上传之后，就可以将它们分配到材质上的纹理插槽中。 选择材料，打开漫反射部分。 将“proto_orange”纹理从资源面板拖动到空的漫反射贴图槽中。 然后打开Normals部分，并将“proto_gray_n”纹理拖动到法线贴图槽中。

你将会看到像是这样的东西:

![立方体][5]

尝试修改**平铺**和**偏移**属性，以影响纹理在多维数据集周围的方式。

有关设置材料的更多详情，请参阅用户手册的[物理材料] [6]部分。

[1]: /images/tutorials/beginner/basic-materials/new-box.jpg
[2]: /images/tutorials/beginner/basic-materials/new-material.jpg
[3]: /images/tutorials/beginner/basic-materials/box-material.jpg
[4]: /images/tutorials/beginner/basic-materials/diffuse-panel.jpg
[5]: /images/tutorials/beginner/basic-materials/diffuse_normal_cube.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/

