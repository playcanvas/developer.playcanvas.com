---
title: 上传和导入
layout: usermanual-page.hbs
position: 1
---

## Creating New Assets

在PlayCanvas中上传一个新的资源，通过一下几个步骤：

### In the Editor

* Drag and drop your asset file into the Asset panel in the Editor window.
* A progress bar will appear along the bottom.
* When the progress bar disappears, your new Asset will appear in the Asset panel.

现在，当我们尝试通过资源选择器（譬如模型组件或者动画组件）选中一个资源时，您的资源将会出现在任务中。

Note: There is a file size limit of 340MB.

## Updating Existing Assets

更新一个您已经上传了的资源，再一次上传您的资源，确保和已有资源有着相同的文件吗。PlayCanvas将会通过新的上传文件更新现有资源。

## Migrating from JSON to glTF GLB

As of Wed 14 Oct 2020, PlayCanvas will be creating GLBs for model and animation imports instead of JSON. This gives a large reduction in parsing times which means lower load times and more responsive applications.

For projects created prior to this date, they will still create JSON assets by default for consistency.

If you would like to migrate assets to the GLB format, please go to 'Project Settings'.

<img loading="lazy" src="/images/user-manual/assets/importing/project-settings.png" alt="Project settings" width="300">

Open 'Asset Tasks' and tick 'Convert to GLB'.

<img loading="lazy" src="/images/user-manual/assets/importing/asset-tasks.png" alt="Asset tasks settings" width="400">

And finally reimport the model and/or animation file (via drag and drop or the 'Upload' menu option) to create the GLB asset.

<img loading="lazy" src="/images/user-manual/assets/importing/drag-and-drop.gif" alt="Drag and drop file">

Once created, this can be referenced to Entities in place of the existing JSON asset.
