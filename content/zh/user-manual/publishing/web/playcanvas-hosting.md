---
title: PlayCanvas Hosting
template: usermanual-page.tmpl.html
position: 1
---

最快，最简单以及最方便的方式就是将您的游戏发布在PlayCanvas.com。

在PlayCanvas中发布包含了一下两个步骤：

1. Publish a new **Build**
2. Set the build as the **Primary Build**

为了能顺利发布游戏，用户需要在程序中添加至少一个场景。

## 发布一个新的版本

* Go to your Project and open the Editor.
* Click on the <span class="pc-icon" style="font-size">&#57911;</span> button in the left hand side toolbar or click Publishing in the top left Menu

![Publish Button][1]

* 这将打开“发布”对话框。 在这里，您可以发布构建或下载构建以供自托管。

![Publish][2]

* 点击“在PlayCanvas上发布”旁边的PUBLISH按钮。

![Publish New Build][3]

* 用户将需要填写一些关于项目的如下细节内容：

  * *Image*: Click on the image to upload a different one if you want. This will be used when sharing the build on Social Media.
  * *Title*: The title of your build.
  * *Description*: The description of your build. This will be used when sharing the link of your build on Social Media.
  * *Version*: The version is there to help you distinguish one build from another. Use a value that makes sense to you.
  * *Release Notes*: Enter any new changes you made for this build. Again like the Version, this will only be shown to you so that you keep better track of your builds.

![Select scenes][4]

* Select the Scenes you want to include in your build from the list. Notice that the Scene with the active banner icon will be loaded first when your build is launched if you include it in the build.
* Click 'PUBLISH NOW'
* You will see a new build created in the BUILDS tab. Wait until it finishes processing.
* Your web app is now live! Feel free to tweet it and share to Facebook right from the published URL.

Builds are given permanent link in the form `https://playcanv.as/b/BUILD_ID/`. This link will be valid until you delete the build. If you want to share a link to your game, you should probably use the published project link explained below.

## 现有版本

单击相同弹出窗口上的版本。

![版本][5]

在这里，您可以看到现有已发布版本的列表。

在这里，您还可以通过单击每个构建左侧的横幅图标为项目设置主构建。 这将是用户在单击仪表板标题中的PLAY按钮时播放的构建。

It's useful to have a single link that will always refer to the latest version of your game. That way you don't have to worry about broken links when you delete old builds. This is why we each project has a Primary Build link. This will always be in the form `https://playcanv.as/p/PROJECT_ID/`

<div class="alert alert-info">
If you are sharing a link to your game you should use the Primary Build link. That means you know it won't change when you re-publish.
</div>

当第一次用户发布一个项目时，这个将会将会被自动设置为首要项目。对于随后的工程用户可以选择合适将其设置为首要工程。这意味着用户可以发布这个工程以及检测在将其设置为首要工程之前。

为您的项目设置首要工程，点击工程左侧的旗帜标记。当用户在操作板中点击PLAY按钮时这个工程将会被生成用户所使用的App。

[1]: /images/user-manual/editor/publishing-toolbar.jpg
[2]: /images/user-manual/editor/publishing.jpg
[3]: /images/user-manual/editor/publishing-new-top.jpg
[4]: /images/user-manual/editor/publishing-new-bottom.jpg
[5]: /images/user-manual/publishing/web/builds.jpg

