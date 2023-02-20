---
title: Cubemap
layout: usermanual-page.hbs
position: 7
---

立方体贴图是一种特殊类型的纹理资源。 立方体贴图由6个纹理资源组成，其中每个纹理表示立方体的一个面， 它们通常有两种用途：

1. A cubemap can define your scene's sky box. A sky box contains imagery of the distant visuals of your scene such as hills, mountains, the sky and so on.
2. A cubemap can add reflections to any material. Imagine a shiny, chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, you would normally set the scene's sky box cubemap as the cubemap on a reflective object's materials.

<iframe loading="lazy" src="https://playcanv.as/b/xp7v1oFB/" title="Cubemap"></iframe>

## Importing Cubemap Textures

一个立方体贴图需要六个纹理资源作为输入资源。 因此，为了完全配置新的立方体资产，您必须首先将6个图像导入到项目中。 要执行此操作，只需将6个图像从文件系统拖动到“资源”面板(或选择“资源”面板的上传选项)。 上传和处理后，图像将显示在“资源”面板中，现在可以将其分配给立方体贴图资源。

## Creating Cubemaps

您可以直接从PlayCanvas编辑器界面的“资源”面板中的“创建资源”菜单创建新的立方体资源。

![立方体贴图创建][1]

这将创建一个新的立方体贴图资源并打开屏幕右侧的立方体贴图编辑器。

## Selecting Cubemaps

要选择cubemap以编辑它，请在“资源面板”中选择它。 最简单的方法是选择cubemap过滤器来缩小选择的选项。 Cubemaps由十字形缩略图标识:

![立方体贴图缩略图][2]

选择立方体贴图时，它将被加载到编辑器右侧的“检查器”面板中。

## Cubemap Properties

一旦你选择了一个立方体贴图，你可以对它的属性进行编辑。

![立方体贴图属性][3]

### Filtering
This setting determines how the pixels of the cubemaps are interpolated as they are magnified. Magnification is when the texel to screen pixel ratio is less than one. Linear gives the best results visually, followed by Nearest.

### Anisotropy
Anisotropy is a value between 1 and 16 that gives control over the quality of texture sampling as the camera's view vector becomes more closely aligned with the plane of a textured surface.

## Assigning Textures to Cubemaps

![立方体贴图预览][4]

“立方体预览”面板显示一个立方体贴图的六个面，并将其平面化为十字形。 想象一下已经展开平放的纸板箱。 要构造立方体贴图，只需将纹理资源从“资源”面板拖动到“预览”面板中的代表面的孔中。 您还可以选择立方体的某个面，然后从“资源”面板中选择替换的纹理资源。

立方体贴图的面必须为:

* Square (the same resolution in width and height)
* Power of two in dimension (1x1, 2x2, 4x4, 8x8, 16x16, 32x32 and so on)
* All faces must be the same resolution

为了辅助你，编辑器试图找出如何智能地自动分配纹理到面中。 当您尝试通过将一个面贴图拖动到面插槽并按照常用的立方体贴图面的命名约定匹配时执行此操作，例如：

* negx, posx, negy, posy, negz, posz
* left, right, top|up, bottom|down, front|forward, back|backward
* 0-5|1-6

一个已匹配的纹理集的示例：

* face_posx.jpg
* face_negx.jpg
* face_posy.jpg
* face_negy.jpg
* face_posz.jpg
* face_negz.jpg

## Image Based Lighting

This technique allows to use Environment Map such as CubeMap in order to simulate physically based ambient light and reflection on materials. [Read more][6] on how it works and how to author CubeMaps for IBL.

## Assigning Cubemaps to Materials

默认的蓬状和物理的材质都具有反射特性。如果展开环境属性部分，您将看到以下内容：

![立方体贴图材质][5]

您可以单击空槽以选择立方体图或将立方体资源从资源面板拖放到立方体贴图的插槽中。

注: 物理材质如果被分配和预过滤将被作为默认环境贴图使用到场景天空盒。

## Converting Equirectangular or Octahedral HDRIs to Cubemaps

Environment textures often are in a equirectangular or Octahedral format ([Poly Haven][7] for example) and will need to be converted to cubemaps before they can be used in PlayCanvas.

This can be done via [PlayCanvas Texture Tool][8], available in the browser.

1. Download the HDR version of environment texture and press 'Add Files' button in PlayCanvas Texture Tool to load the file. 
2. Select the loaded texture on the left.
3. Under 'Reproject' section, change the 'source' to the format of texture. 
4. Change 'target' to 'cube'.
5. Change 'encoding' to the desired format:
    - 'rgbe' for exporting to 'HDR' 
    - 'rgbm' for exporting to 'PNG'
6. Set the width to the desired size per face texture. 512 is a good balance between quality and file size. 
7. Press 'Reproject' button to do the conversion to a cubemap. 
8. Press 'Export to PNG' or 'Export to HDR' to download the 6 individual cubemap face textures that are ready to be uploaded to PlayCanvas.

![PlayCanvas Texture Tool][12]

Other tools that can also do this conversion include:

* Mateusz Wisniowski's [HDRI-to-CubeMap tool][9] (browser)
* [cmftStudio][10] (desktop) with [guide][11]


[1]: /images/user-manual/assets/cubemaps/cubemap-create.png
[2]: /images/user-manual/assets/cubemaps/cubemap-thumbnails.png
[3]: /images/user-manual/assets/cubemaps/cubemap-properties.png
[4]: /images/user-manual/assets/cubemaps/cubemap-preview.png
[5]: /images/user-manual/assets/cubemaps/cubemap-material.png
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
[7]: https://polyhaven.com/hdris
[8]: https://playcanvas.com/texture-tool
[9]: https://matheowis.github.io/HDRI-to-CubeMap/
[10]: https://github.com/dariomanesku/cmftStudio
[11]: https://jamie-white.com/webgl/equirectangular-hdr-image-to-face-list/
[12]: /images/user-manual/assets/cubemaps/playcanvas-texture-tool-convert.png
