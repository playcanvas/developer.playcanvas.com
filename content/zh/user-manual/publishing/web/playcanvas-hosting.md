---
title: PlayCanvas 托管
template: usermanual-page.tmpl.html
position: 1
---

最快，最简单以及最方便的方式就是将您的游戏发布在PlayCanvas.com。

在PlayCanvas中发布包含了一下两个步骤：

1. 发布一个新的 **版本**
2. 将其设置为 **首要版本**

为了能顺利发布游戏，用户需要在程序中添加至少一个场景。

## 发布一个新的版本

* 进入您的程序并打开编辑器。
* 点击在工具栏左下角的<span class="pc-icon" style="font-size">&#57911;</span> 按钮，或者点击在左上角的目录中的发布。

![Publish Button][1]

* 这将打开“发布”对话框。 在这里，您可以发布构建或下载构建以供自托管。

![Publish][2]

* 点击“在PlayCanvas上发布”旁边的PUBLISH按钮。

![Publish New Build][3]

* 用户将需要填写一些关于项目的如下细节内容：

  * *Image*: 点击上传图像。当将项目分享在社交媒体上时，这个图像将会展现给其他用户。
  * *Title*: 项目的名称。
  * *Description*: 项目的描述。用于当将项目链接分享在社交媒体上时。
  * *Version*:   版本帮助用户对项目进行分辨。使用版本序号可以很大程度上帮助我们。
  * *Release Notes*：注明用户对这个项目进行任何的更改变化。

![Select scenes][4]

*从列表中选择要包括在构建中的场景。 请注意，如果您在构建中包含它，那么将首先加载主场景(具有活动横幅图标的那个)。
*点击“立即发布”
*您将看到在BUILDS选项卡中创建的新构建。 等待，直到它完成处理
*您的网络应用程序现已上线！ 随意发布，并从发布的网址分享到Facebook。

项目从`http://playcanv.as/b/BUILD_ID`被给予了永久链接。这个链接将会一直有效直到用户删除项目。如果用户想要分享一个链接到你的游戏，用户应该使用已发布的项目链接在其底部进行解释。

## 现有版本

单击相同弹出窗口上的版本。

![版本][5]

在这里，您可以看到现有已发布版本的列表。

在这里，您还可以通过单击每个构建左侧的横幅图标为项目设置主构建。 这将是用户在单击仪表板标题中的PLAY按钮时播放的构建。

保存一个单一的链接用于指向游戏的最新版本是非常有用的。这就不需要去担心当我们删除一个旧项目时我们会破坏链接。这就是为什么每个工程都有一个首要项目链接。这将会存在于`http://playcanv.as/p/PROJECT_ID`

<div class="alert alert-info">
如果用户分享一个链接到游戏中，请使用首要工程链接。这表明当用户知道这个链接不会因为重新发布而改变。
</div>

当第一次用户发布一个项目时，这个将会将会被自动设置为首要项目。对于随后的工程用户可以选择合适将其设置为首要工程。这意味着用户可以发布这个工程以及检测在将其设置为首要工程之前。

为您的项目设置首要工程，点击工程左侧的旗帜标记。当用户在操作板中点击PLAY按钮时这个工程将会被生成用户所使用的App。

[1]: /images/user-manual/editor/publishing-toolbar.jpg
[2]: /images/user-manual/editor/publishing.jpg
[3]: /images/user-manual/editor/publishing-new-top.jpg
[4]: /images/user-manual/editor/publishing-new-bottom.jpg
[5]: /images/user-manual/publishing/web/builds.jpg

