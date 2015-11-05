---
title: Exporting Assets
template: usermanual-page.tmpl.html
skip: false
---

PlayCanvas can import 3D content in three different formats: FBX, 3DS and COLLADA (DAE). We strongly recommend you use FBX since this the most robust and well tested interchange format. It also supports embedding of textures which preserve your material-texture relationships on import to PlayCanvas.

Here are some tips for exporting to the FBX file format:

* Ensure you have the latest available FBX exporter for your modelling application installed.
* Only export what you need from your scene to FBX. For example, if your scene contains a red car and a blue car but you only want to import the red car, export only the red car to FBX. Your modelling application should have an 'Export Selected' option.
* If available, check the 'Embed Media' option in the FBX exporter panel.
* In Blender, use [Autodesk FBX Converter][1] to re-convert FBX files and Embed Media.
* Select the 'Binary' file format option in the FBX exporter panel.

[1]: http://usa.autodesk.com/adsk/servlet/pc/item?id=10775855&siteID=123112

