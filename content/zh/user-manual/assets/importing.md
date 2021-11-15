---
title: 上传并导入
template: usermanual-page.tmpl.html
position: 1
---

## 创建新资源

在PlayCanvas中上传一个新的资源，通过一下几个步骤：

### 在编辑器中

* 将您的资源文件拖拽放入编辑器窗口的资源面板。
* 一个进度条将会出现在面板底部。
* 当进度条读取进度完成，您新的资源将会出现在资源面板中。

现在，当我们尝试通过资源选择器（譬如模型组件或者动画组件）选中一个资源时，您的资源将会出现在任务中。

Note: There is a file size limit of 340MB.

## 更新已有资源

更新一个您已经上传了的资源，再一次上传您的资源，确保和已有资源有着相同的文件吗。PlayCanvas将会通过新的上传文件更新现有资源。

## Migrating from JSON to glTF GLB

As of Wed 14 Oct 2020, PlayCanvas will be creating GLBs for model and animation imports instead of JSON. This gives a large reduction in parsing times which means lower load times and more responsive applications.

For projects created prior to this date, they will still create JSON assets by default for consistency.

If you would like to migrate assets to the GLB format, please go to 'Project Settings'.

<img src="/images/user-manual/assets/importing/project-settings.png" alt="Project settings" width="300"/>

Open 'Asset Tasks' and tick 'Convert to GLB'.

<img src="/images/user-manual/assets/importing/asset-tasks.png" alt="Asset tasks settings" width="400"/>

And finally reimport the model and/or animation file (via drag and drop or the 'Upload' menu option) to create the GLB asset.

<img src="/images/user-manual/assets/importing/drag-and-drop.gif" alt="Drag and drop file"/>

Once created, this can be referenced to Entities in place of the existing JSON asset.

