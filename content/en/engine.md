---
title: PlayCanvas Engine
template: usermanual-page.tmpl.html
---

The PlayCanvas Engine is an open source javascript framework which you can use to build games and interactive 3D content for the web. The Engine is provided free and separately to the PlayCanvas tools to allow you maximum flexibility for you development.

## How do I get the engine?

Download the full source for the engine from our [Github page][1]. Instructions on how to build the complete engine are included in the README file.

## Now what?

Check out the [engine examples][2]. The source code for all samples is included in the engine repository.

## How do I use a 3D Model in the Engine?

To load a 3D model into the Engine first you need to convert it from the format used by the modelling package (e.g. COLLADA or FBX) to the format used by the Engine (a JSON format). The conversion process is performed by our server. To convert a model follow [these instructions][3], when the model conversion is finished (this should only take a few seconds) then the model is ready to download.

![Completed Model Conversion][6]

When you select the completed model you will see details about the asset and additional all the target assets that were created by this asset.

Select the asset of type "model" which is the 3D model in the runtime format and click Download in the Inspector.

![Download][7]

This will download the complete model including materials and textures, ready to load in the Engine.

To load the model file into your engine use the [loadFromUrl][5] API.

[1]: https://github.com/playcanvas/engine
[2]: http://playcanvas.github.io
[3]: /user-manual/assets/importing/
[4]: /user-manual/glossary/#target_asset
[5]: /engine/api/stable/symbols/pc.AssetRegistry.html#loadFromUrl
[6]: /images/user-manual/editor/assets-completed.png
[7]: /images/user-manual/editor/download-model.jpg
