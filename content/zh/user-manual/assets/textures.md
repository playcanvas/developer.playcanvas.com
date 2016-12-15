---
title: 纹理
template: usermanual-page.tmpl.html
position: 4
---

纹理是可以被分配到 [材质][1] 表面并应用到图元的图片。

## 导入材质

你有3种方式将纹理资源导入PlayCanvas:

1. 将图像拖放到“资源”面板中
2. 从“资源”面板的上下文菜单中选择“上传”，然后使用文件浏览器选择一个图像
3. 导入嵌入纹理的FBX文件。

支持的图片格式有：

* JPG
* PNG
* GIF
* TGA
* BMP
* TIF
* HDR
* EXR

导入的JPG和PNG文件保持原始格式。

GIF，TGA，BMP和TIF图片类型将在导入时转换为JPG或PNG。 如果导入的图像具有透明度，则会将其转换为PNG。 否则，它将转换为JPG。

HDR和EXR是[高动态范围格式] [2]格式。 这些类型的图像在导入时转换为PNG，并标记为以RGBM格式存储。 RGBM本质上在PNG的alpha通道中存储用于RGB值的乘法器，使得能够将HDR格式压缩为低动态范围格式。

默认情况下，导入的图像将调整为下一个最高的2。 例如，在导入时，400x400的图片将调整为512x512。 这是因为图形引擎不能利用非功率的两个纹理的mip映射。 但是，在导入非功率两个纹理之前，可以通过在“资产任务”面板中禁用 '纹理POT' 设置来覆盖此行为。

## 纹理属性

在资源面板中选择纹理的缩略图，可以将其加载到“检查器”面板中。 请注意，您可以在检查器中同时多次选择纹理并编辑所有选项。

纹理与材质共享了一部分的基础属性的设置 (ID, name, tags 以及一些其他的)。但它依旧有一些纹理独享的属性。

![纹理属性][3]

### 纹理过滤

纹理过滤给出了如何计算纹理映射像素的颜色的控制。“点”应用没有过滤而“线性”将插入相邻像素的颜色。这会产生更好的视觉效果,尤其是作为一个最小化了的纹理(纹理在屏幕上占用更少像素的纹素比)。

### 各向异性

当纹理表面被从一个倾斜的角度看时,他们的质量会下降并显得模糊。为了解决这个问题,你可以设置一个叫做各向异性的值。我们来看看不同的各向异性值会怎样影响纹理的外观:

![各向异性][4]

注意,随着各向异性增加,在GPU上抽样纹理的成本也增加了。

### 纹理寻址

纹理寻址属性让你能够在控制一个纹理如何采样范围0到1以外的纹理坐标。看看不同的模式如何影响下面的精灵的显示:

![寻址][5]

## 纹理压缩

纹理数据存储在设备的视频存储器(或VRAM)中。 重要的是要确保您的应用程序不会耗尽VRAM，因为这可能会导致浏览器标签崩溃等不良现象。

编辑器能够对纹理应用有损压缩方案，以显着减少使用的VRAM数量。 这些方案是：

* DXT：通常由桌面设备支持
* PVR：通常由iOS设备支持
* ETC：通常由Android设备支持。

就比如这个纹理资源:

<img src="/images/user-manual/assets/textures/brick.jpg" alt="Brick Texture" style="width: 256px; height: 256px;"/>

这是一个大小为202KB的512x512 JPG。 然而，JPG是一种压缩格式，当传递到图形引擎时，它被扩展为占用1.05MB VRAM(包括mipmap级别)的未压缩RGB8格式。

能够使所有的压缩方案实现以下结果:

![压缩结果][6]

本次压缩减少了VRAM6倍的使用。此外,在这种情况下,压缩也将下载大小从202 kb减少到116 kb。

[1]: /user-manual/assets/materials
[2]: https://en.wikipedia.org/wiki/High-dynamic-range_imaging
[3]: /images/user-manual/assets/textures/texture-properties.png
[4]: /images/user-manual/assets/textures/anisotropy.png
[5]: /images/user-manual/assets/textures/texture-address.png
[6]: /images/user-manual/assets/textures/compression-results.png

