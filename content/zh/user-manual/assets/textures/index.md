---
title: 纹理
template: usermanual-page.tmpl.html
position: 15
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

By default, imported images will be resized to the nearest power of two. For example, an image that is 323x414 will be resized to 256x512 on import. This is done because the graphics engine cannot utilize mipmapping with non-power of two textures. However, this behavior can be overridden by disabling the 'Textures POT' setting in the Asset Tasks panel before importing a non-power of two texture.

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

## Max Texture Size

Different devices can support different texture sizes. Using [WebGL report][7] on the device and browser, we can see the max size supported.

For example, this is from a MacBook Pro 16 inch (2020) laptop with Chrome which shows support up to 16384x16384.

<img src="/images/user-manual/assets/textures/mac-webgl-report.png" alt="Macbook Pro WebGL report" style="width: 600px;"/>

Whereas on a Samsung S7 mobile device, only 4096x4096 is supported.

<img src="/images/user-manual/assets/textures/samsung-s7-webgl-report.jpg" alt="Samsung S7 WebGL report" style="width: 600px;"/>

If the engine attempts to utilize a texture that exceeds the max texture size reported by WebGL, it will resize it down to this maximum size at runtime. Note that this is only done for texture loaded from images (PNG, JPG, GIF). Compressed textures cannot be resized at runtime and will simply fail to render if they are too large for the device.

If you would like to avoid downsizing at runtime, at the time of writing (Fri 23 Oct 2020), 4096x4096 is very widely supported with some developers even opting for 2048x2048 which is guaranteed to work everywhere.

[1]: /user-manual/assets/materials
[2]: https://en.wikipedia.org/wiki/High-dynamic-range_imaging
[3]: /images/user-manual/assets/textures/texture-properties.png
[4]: /images/user-manual/assets/textures/anisotropy.png
[5]: /images/user-manual/assets/textures/texture-address.png
[7]: https://webglreport.com/

