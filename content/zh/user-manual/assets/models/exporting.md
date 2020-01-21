---
title: Exporting Assets
template: usermanual-page.tmpl.html
position: 3
---

PlayCanvas可以导入3D媒体通过以下文件类型：FBX, OBJ, 3DS and COLLADA (DAE)。我们强烈推荐用户使用FBX类型文件已达到最佳效果。

以下有几点关于导出FBX文件的小提示：

* Ensure you have the latest available FBX exporter for your modelling application installed.
* Only export what you need from your scene to FBX. For example, if your scene contains a red car and a blue car but you only want to import the red car, export only the red car to FBX. Your modelling application should have an 'Export Selected' option.
* Select the 'Embed Media' option in the FBX exporter panel. This packages the scene's textures in the exported FBX. This preserves material to textures links during import into PlayCanvas. Otherwise, you must upload all scene textures separately and relink all textures to materials.
* Select the 'Binary' file format option in the FBX exporter panel. This reduces FBX file size considerably.
* For Blender, use [Autodesk FBX Converter][1] to re-convert FBX files and Embed Media.

[1]: http://usa.autodesk.com/adsk/servlet/pc/item?siteID=123112&id=22694909

