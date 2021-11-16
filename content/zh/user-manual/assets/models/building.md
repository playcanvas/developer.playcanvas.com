---
title: 创建模型
template: usermanual-page.tmpl.html
position: 2
---

Building art and animations for PlayCanvas can be done using almost any of the many 3D modeling programs available. For example: Blender, SketchUp, Autodesk 3D Studio Max or Autodesk Maya.

PlayCanvas被设计得能够最完整地导入FBX交换格式的内容，因此，一般来说，如果您的建模应用程序支持FBX，PlayCanvas也支持它。 因此，使用PlayCanvas导入模型时，您不必使用任何特殊的艺术工具插件，并且没有必须遵循的PlayCanvas特定的工作流程。

一些可被考虑使用的建模和动画程序：

*免费选项：Blender\*, Wings3D, Voidworld, SketchUp, Sculptris, Daz Studio\*。
*低成本付费选项：3D-Coat, NVIL, Hexagon
*高成本付费选项： ZBrush, Autodesk 3D Studio Max\*, Autodesk Maya\*, Luxology Modo\*。

\* *这个程序也能够创建动画。*

为了生成纹理，请考虑这些程序:

* 免费选项: Blender, Pixexix Free, xNormal, MaPZone, GIMP, Krita desktop, MyPaint.
* 付费选项: Substance Designer (as well as Substance Painter and Bitmap2Material), Photoshop, Quixel NDO and DDO, CrazyBump, Pixexix Pro, Clip Studio Paint/Manga Studio, SERIF DrawPlus/PhotoPlus.

注意许多上面列出的用于建模的程序也允许纹理绘画。 如果你想要更多的选择，这个页面[external wiki][1]可以帮助你。 请注意，某些信息可能已过期。

## 网格构造的一般注意事项

无论您使用哪个建模应用程序，在构建用于PlayCanvas的3D场景时需要注意一些事情。

*网格可以蒙皮到256骨骼上
* NURBS网格将转换为三角形网格，进而转换为PlayCanvas所适应的格式。

---

## 混合器

![Blender图标][3]

[Blender][4]是一个用于3D建模的神奇的免费工具，非常适合为PlayCanvas生成3D资源。

Blender支持将文件导出为COLLADA和FBX格式，但是内置的导出器确实有一些局限性。

### **贴图类型**

从Blender 2.71开始，材质的漫反射和法线贴图将被导出到FBX文件。 如果导出时其他地图类型丢失，则必须在编辑器中的材质编辑器中设置这些地图。

### **嵌入纹理**

嵌入式纹理使模型导入变得更加容易。

Blender 的COLLADA导出器不能将纹理嵌入到导出的模型文件中。

Blender的2.71版本具有改进的FBX导出模块，可以直接从Blender实现多种嵌入纹理。 首先确保对象在Blender中正确呈现。 导出到FBX时，将“路径模式”设置为复制并选中“嵌入纹理”框。

或者，使用[Autodesk FBX Converter][5]将来自Blender的导出转换为带有嵌入式媒体的导出。 只需在FBX Converter中打开该文件，然后使用* Embedded Media *复选框进行重新保存。

<div class="alert alert-warning">
注意: 这里似乎存在一个问题，尽管用户没有在Blender中设置自发光属性，Blender 2.71的FBX导出依旧会生成自发光， - 这不是一个PlayCanvas引擎所需要的项。 为了避免这种情况，在Blender中，您可以将材质的Diffuse颜色设置更改为0(在“属性编辑器”中的“材质”选项卡下)。 或者直接降低PlayCanvas编辑器内的自发光率。
</div>

### **动画**

对于 Blender 2.71:

包含在混合文件中的自动动画将使用默认的fbx导出器设置导出，并与PlayCanvas资源导入管道兼容。 请注意，对于同一模型的多个动画，您需要上传多个fbx文件 - 每个动画一个。 为了节省内存，您可以在导出之前从混合文件中删除模型和纹理，选择仅在fbx导出器设置中导出骨架，或者从项目仪表板的资产页面中删除重复的“模型”目标资源(选择“target” 从资源页面上的下拉菜单中查看目标资源)。

### **学习Blender**

在网络上有大量的教授学习如何使用Blender的资源。 我们推荐的几个是：

* [Blender Cookie][2]
* [Blender Guru][6]

---

## Autodesk 3D Studio Max

### 材质

您应该使用Max中的标准材料类型，或Multi / Sub-Object材料类型，只要它所引用的材料是标准材料。 下面屏幕截图中突出显示的区域显示了导出到PlayCanvas时所遵循的设置:

![Max material editor][7]

### 支持的贴图插槽

PlayCanvas解释导出时3DS Max材质贴图类型的一个子集。 请注意，地图可以是3DS Max支持的任何格式，但如果地图不是Web格式(即JPEG，GIF或PNG)，则它们将在导出时转换为这些格式。

**漫反射颜色**

将位图映射分配给此插槽可在PlayCanvas材质上启用漫射映射。 这基本上覆盖了材料上已经设置的漫反射颜色(通过颜色选择器)。 如果漫射贴图有一个alpha通道，它将被用作PlayCanvas运行时中的每个像素的alpha值。

此外，可以将RGB乘法映射分配给漫射颜色插槽。 这具有启用光照贴图的效果，其中地图1是漫射贴图，而贴图2是光贴图。

**高光颜色**

将位图映射分配给此插槽在PlayCanvas材质中启用镜像映射。 这基本上覆盖了材料上设置的任何镜面颜色(通过颜色选择器)。 这允许您屏蔽表面上的镜面反射区域，或者反射高光强调不同区域中的不同颜色。 如果镜面地图有一个alpha通道，它将用于设置每像素的闪耀。

**高光级别**

将位图映射分配给此槽将激活材料镜面颜色的每像素衰减。 这基本上覆盖了对材料设置的任何镜面级。

**光泽度**

将位图映射分配给此插槽将激活材质上的每像素光泽度。 这基本上覆盖了在材料上设置的任何光泽度。

**自发光**

将位图映射分配给此插槽将在PlayCanvas材质中启用贴图自发光。自发光贴图可以是完全RGB色(灰度不限制)，并且将被添加到发光面的结果中。 因此，发光贴图中的黑色像素将不会作为像素值添加任何内容。 而任何其他颜色的像素都会增加像素的亮度。

**不透明度**

把位图映射分配给此槽将允许在PlayCanvas材质上进行不透明度映射。 不透明度图中的黑色像素将是完全透明的，白色像素将是完全不透明的，并且任何灰色像素将对应于一些等效的中间α值。

如果材质具有不透明度地图，则它将覆盖漫射地图中可能已设置的任何Alpha通道。 在漫反射贴图的alpha通道上使用不透明度贴图会降低程序速度，因为在PlayCanvas运行时需要生成两个纹理，而不是一个，默认着色器必须做一些工作。 但是，如果性能不是问题，并且使用不透明度映射很方便，则支持该功能。

**凹凸**

将正常凹凸贴图分配给此插槽启用正常映射。 请注意，默认情况下，此槽的“Amount”值设置被为30。 PlayCanvas会忽略此值并将其视为设置为100，为了使渲染匹配实时渲染更紧密，因此建议您将此值在Max中也设置为100 。

创作法线贴图有许多不同的方式，主要有使用两种不同格式的绿色组件。 例如，默认情况下，3DS Max希望砖墙的法线贴图显示如下：

![法线贴图][8]

注意凸起区域底部边缘的较亮区域。 PlayCanvas期望绿色分量(或法线贴图中每个法线的Y分量)被翻转。 将文件加载到Photoshop中，选择绿色通道并按Ctrl + I反转通道，可以得到：

![具有Y分量翻转的法线贴图][9]

现在，PlayCanvas中的照明将是一致的。

如果分配的法线贴图具有alpha通道，则其将被视为具有高度的视差贴图。 高度图的alpha较浅区域被视为比较暗区域“更高”。

**影子**

将位图映射分配给此槽将允许其在PlayCanvas材质中进行球体映射。 位图将看起来像这样: 

![球状贴图][10]

球体映射是反射映射的最简单，也最不令人信服的形式之一，但在许多情况下，它足以为物体表面提供令人愉快的光泽。

---

## Autodesk Maya

### 材质

您可以使用Maya中的标准材质类型：lambert，blinn和phong。 下面的屏幕截图中突出显示的区域显示导出到PlayCanvas时所遵循的材料设置：

![Maya material editor][11]

[1]: http://wiki.polycount.com/wiki/Tools
[2]: https://cgcookie.com/learn-blender
[3]: /images/user-manual/assets/models/building/blender-logo.jpg
[4]: http://blender.org
[5]: https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives
[6]: http://www.blenderguru.com/
[7]: /images/user-manual/assets/models/building/max-material-editor.jpg
[8]: /images/user-manual/assets/models/building/wall-norm.jpg
[9]: /images/user-manual/assets/models/building/wall-norm-yflip.jpg
[10]: /images/user-manual/assets/models/building/mountains-sphere.jpg
[11]: /images/user-manual/assets/models/building/maya-material-editor.jpg

