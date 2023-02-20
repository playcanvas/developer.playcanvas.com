---
title: 资源导入流程
layout: usermanual-page.hbs
position: 2
---

有些资源以源格式被上传，在应用到游戏之前需要被转换成“目标”格式。这个过程称为“导入”。比如，一个FBX文件的3D模型可以通过上传，但是在游戏加载之前必须转换成可被PlayCanvas兼容的模型文件。

有些资源在被使用之前没有必要被导入。比如，PNG图像可以立刻作为纹理被运用到游戏设计当中。

## Asset Tasks

当一个需要被导入的源资源被上传时。PlayCanvas启动一个资源任务在服务器上执行导入过程。你将可以在资源面板中查看最近运行的资源任务。

![asset tasks][1]

为了满足用户的需求，这里提供了多种选项用以调整导入通道的行为。

<img loading="lazy" src="/images/user-manual/assets/import-pipeline/asset-tasks.png" width="360px">

### Search related assets

当你通过上传一个新版本的文件来更新一个源资源时，对于用户如何通过导入通道来更新目标资源，这里有两种可能的方式。

* If **Search related assets** is enabled, the pipeline will update target assets no matter what folder they are located in.
* If **Search related assets** is not enabled, the pipeline will only look for the target assets in the same folder as the source asset.

因此，如果你将这个选项设置为开启，用户将可以添加文件资源以及目标资源到文件夹中，确保当更新源资源时，所有相关资源将会被更新。

### Assets default to preload

Newly created assets will automatically be set to [preload][2] or not depending on whether this option is enabled or not. The exception to this are JavaScript script files which will always be set to preloaded when created.

## Texture Import Settings

以下这些选项将只会影响图像和纹理的导入。

### Texture POT (Power of Two)

当这个选项被开启，在贴图被导入时贴图尺寸将不会成为2的整倍数，而是将会被转换成最接近的2的整倍数的分辨率。

### Create Atlases

Images that are uploaded will be imported as a texture atlas instead of a normal texture asset. This is a useful time saver when uploading many spritesheets or UI assets.

## Model Import Settings

以下选项只会影响模型或场景文件（譬如FBX，Collada，obj等）的导入。

### Preserve material mappings

When a model file is updated or reimported, the Editor will try to preserve the material mappings that were set on it.

### Overwrite Models

这个选项决定了当更新或者重新导入一个模型文件时，目标资源是否会被覆盖。在默认情况下，目标资源将会被一个新的模型所覆盖。

### Overwrite Animations

这个选项决定了当更新或重新导入一个模型文件时，从模型创建的动画是否会被覆盖。在默认情况下，新动画将会覆盖。

### Overwrite Materials

这个选项决定了当更新或重新导入一个模型文件时，从模型创建的材质是否会被覆盖。在默认情况下，将会使用新材质代替现有材质。

### Overwrite Textures

这个选项决定了当更新或重新导入一个模型文件时，从模型创建的贴图是否会被覆盖。在默认情况下。新贴图将会覆盖。

### Convert to GLB

Enabled by default on new projects, imported models and animations will create GLB model and animation assets instead of the older, deprecated JSON format.

### Import Hierarchy

Only available if using [Convert to GLB](#convert-to-glb) option. When a model file is imported, a template asset is created that contains the full hierarchy of the model as entities allowing to you to manipulate them directly in the Editor. See more information about this feature [here][3].

## Animation Import Settings

Please refer to the [Animation section][4] for more details.

[1]: /images/user-manual/assets/import-pipeline/asset-tasks-full.jpg
[2]: /user-manual/assets/preloading-and-streaming/
[3]: /user-manual/assets/import-pipeline/import-hierarchy/
[4]: /user-manual/assets/animation/
