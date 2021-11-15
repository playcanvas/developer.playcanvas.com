---
title: 资源导入通道
template: usermanual-page.tmpl.html
position: 2
---

有些资源以源格式被上传，在应用到游戏之前需要被转换成“目标”格式。这个过程称为“导入”。比如，一个FBX文件的3D模型可以通过上传，但是在游戏加载之前必须转换成可被PlayCanvas兼容的模型文件。

有些资源在被使用之前没有必要被导入。比如，PNG图像可以立刻作为纹理被运用到游戏设计当中。

## 资源任务

当一个需要被导入的源资源被上传时。PlayCanvas启动一个资源任务在服务器上执行导入过程。你将可以在资源面板中查看最近运行的资源任务。

![asset tasks][1]

There are a variety of options available to tune the behavior of the import pipeline to suit your needs.

<img src="/images/user-manual/assets/import-pipeline/asset-tasks.png" width="360px">

### 搜索相关资源

When you update an source asset by uploading a new version of the file. There are two possible behaviors for how we update the target assets that are created by the import pipeline.

如果**Search related assets**被开启，通道将会更新目标资源无论它们位于哪个文件夹。
如果**Search related assets**被关闭，通道将只会寻找在于源资源在同一文件夹中的目标资源。

因此，如果你将这个选项设置为开启，用户将可以添加文件资源以及目标资源到文件夹中，确保当更新源资源时，所有相关资源将会被更新。

### Assets default to preload

Newly created assets will automatically be set to [preload][2] or not depending on whether this option is enabled or not. The exception to this are JavaScript script files which will always be set to preloaded when created.

## Texture Import Settings

These options only affect the importing of images and textures.

### Texture POT (Power of Two)

当这个选项被开启，在贴图被导入时贴图尺寸将不会成为2的整倍数，而是将会被转换成最接近的2的整倍数的分辨率。

### Create Atlases

Images that are uploaded will be imported as a texture atlas instead of a normal texture asset. This is a useful time saver when uploading many spritesheets or UI assets.

## Model Import Settings

以下选项只会影响模型或场景文件（譬如FBX，Collada，obj等）的导入。

### Preserve material mappings

When a model file is updated or reimported, the Editor will try to preserve the material mappings that were set on it.

### 覆盖模型

When a model file is updated or reimported this option determines whether or not the target model file is overwritten. The default behavior is to overwrite with the new model.

### 覆盖动画

When a model file is updated or reimported this option determines whether or not a animations created from the model are overwritten. The default behavior is to overwrite with the new animations.

### 覆盖材质

When a model file is updated or reimported this option determines whether or not materials created from the model are overwritten. The default behavior is to leave existing materials.

### 覆盖贴图

When a model file is updated or reimported this option determines whether or not textures created from the model are overwritten. The default behavior is to overwrite with the new textures.

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

