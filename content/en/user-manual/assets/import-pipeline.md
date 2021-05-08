---
title: Asset Import Pipeline
template: usermanual-page.tmpl.html
position: 2
---

Some assets are uploaded in source format and need to be converted into a "target" format before they can be used in a game at runtime. This process is called *Importing*. For example, a 3D model can be uploaded as an FBX file, but must be converted into a PlayCanvas compatible model file before it can be loaded in the game.

Some assets don't need to be imported before they can be used. For example a PNG image can be used as a texture immediately.

## Asset Tasks

When a source asset is uploaded that needs to be imported. PlayCanvas starts an Asset Task to perform this import process on our server. You can see the asset tasks that you are currently running in the Asset Panel.

![asset tasks][1]

There are a variety of options available to tune the behavior of the import pipeline to suit your needs.

![asset task options][2]

### Auto-run

By default, when you upload a file we will automatically run the import pipeline for that asset. If you don't want to run the pipeline you can disable auto-run from the task panel or from the settings.

If auto-run is disabled you can run or dismiss tasks individually from the asset panel.

### Search related assets

When you update an source asset by uploading a new version of the file. There are two possible behaviors for how we update the target assets that are created by the import pipeline.

* If **Search related assets** is enabled, the pipeline will update target assets no matter what folder they are located in.
* If **Search related assets** is not enabled, the pipeline will only look for the target assets in the same folder as the source asset.

So, if you leave this enabled, you are able to organize your source and target assets into folders and be sure that when you update a source assets it will update all related assets.

## Texture Options

These options only affect the importing of images and textures

### Texture POT (Power of Two)

When this option is enabled textures that are not a power of two will be converted to the nearest power of two resolution when they are imported.

## Model Options

These options only affect the importing of model or scene files (e.g. FBX, Collada, obj, etc)

### Overwrite Models

When a model file is updated or reimported this option determines whether or not the target model file is overwritten. The default behavior is to overwrite with the new model.

### Overwrite Animations

When a model file is updated or reimported this option determines whether or not a animations created from the model are overwritten. The default behavior is to overwrite with the new animations.

### Overwrite Materials

When a model file is updated or reimported this option determines whether or not materials created from the model are overwritten. The default behavior is to leave existing materials.

### Overwrite Textures

When a model file is updated or reimported this option determines whether or not textures created from the model are overwritten. The default behavior is to overwrite with the new textures.

[1]: /images/user-manual/assets/import-pipeline/asset-tasks-full.jpg
[2]: /images/user-manual/assets/import-pipeline/asset-tasks.jpg
