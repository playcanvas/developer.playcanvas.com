---
title: Exporting Assets
layout: usermanual-page.hbs
position: 3
---

PlayCanvas can import 3D content in the following formats: glTF binary (GLB), FBX, OBJ, 3DS and COLLADA (DAE). We strongly recommend you use GLB as it's an open source industry standard and fantastically supported in the Editor.

![GLB Import Example][glb-import-gif]

(Model by Loïc Norgeot and mosquito scan by Geoffrey Marchal for [Sketchfab][mosquito] licensed under [CC BY 4.0][cc-40]).

If GLB is not available, then please use FBX as it is a robust and well tested interchange industry format.

## General export tips

* Only export what you need from your scene. For example, if your scene contains a red car and a blue car but you only want to import the red car, export only the red car. Your modelling application should have an 'Export Selected' or similar option.

## Export to GLB file format tips

* Set the format to glTF Binary (GLB).
* Ensure that materials and images are set to be exported and embedded in the GLB. Otherwise, you must upload all scene textures separately and relink all textures to materials and re-configure the materials parameters.

## Export to FBX file format tips

* Ensure you have the latest available FBX exporter for your modelling application installed.
* Select the 'Embed Media' option in the FBX exporter panel. This packages the scene's textures in the exported FBX. This preserves material to textures links during import into PlayCanvas. Otherwise, you must upload all scene textures separately and relink all textures to materials.
* Select the 'Binary' file format option in the FBX exporter panel. This reduces FBX file size considerably.

[glb-import-gif]: /images/user-manual/assets/models/building/glb-import.gif
[cc-40]: https://creativecommons.org/licenses/by/4.0/
[mosquito]: https://sketchfab.com/3d-models/
