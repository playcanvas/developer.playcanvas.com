---
title: 导入资源
template: usermanual-page.tmpl.html
position: 3
---

PlayCanvas可以导入3D媒体通过以下文件类型：FBX, OBJ, 3DS and COLLADA (DAE)。我们强烈推荐用户使用FBX类型文件已达到最佳效果。

以下有几点关于导出FBX文件的小提示：

* 确保安装建模应用时有最新可用的FBX插件。
* 用户只要求导出其在场景中所需要的资源。比如，如果一辆红车和一辆蓝色同时存在于一个场景之中，而我们只想导入红车，并且只将红车导出为FBX。您的建模应用应会有“选择导出”选项。
* 在FBX插件面板中选择“Embed Media”，这会将场景中的纹理打包导出到FBX文件。在导入到PlayCanvas时，这将保留材质和纹理之间的链接。否则，你将必须单独更新所有场景中的纹理以及重新制作纹理和材质之间的链接。
* 在FBX插件面板中选择”Binary”文件类型选项。这将有效地减少FBX文件的体积。
* 对于混合模式而言，使用[Autodesk FBX Converter][1] 来重新转换FBX文件和Embed Media。

[1]: http://usa.autodesk.com/adsk/servlet/pc/item?siteID=123112&id=22694909

