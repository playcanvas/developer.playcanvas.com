---
title: PlayCanvas ホスティング
template: usermanual-page.tmpl.html
position: 1
---

最も速く簡単で便利にゲームを公開できる方法はplaycanvas.comへのパブリッシュです。

2つの簡単なステップでPlayCanvasに公開できます：

1.新規 **ビルド**の公開
2. ビルドを**プライマリビルド**に設定

公開するにはプロジェクトに最低ひとつのシーンが必要です。

## 新規ビルドの公開

* プロジェクトに移行してEditorを開く。
* 左側のツールバーの<span class="pc-icon" style="font-size">&#57911;</span>ボタンをクリックするか左上メニューからPublishingをクリック。

![Publish ボタン][1]

* Publishingダイアログが開きます。ここから自己ホスティング用のビルドを公開したり、ビルドをダウンロードすることができます。

![公開][2]

* "Publish on PlayCanvas"の横のPUBLISHボタンをクリック。

![新しいビルドの公開][3]

*次に、新しいビルドに関するいくつかの詳細を記入する必要があります。使用可能なフィールドは以下のとおりです：

  * *Image*: Click on the image to upload a different one if you want. This will be used when sharing the build on Social Media.
  * *Title*: The title of your build.
  * *Description*: The description of your build. This will be used when sharing the link of your build on Social Media.
  * *Version*: The version is there to help you distinguish one build from another. Use a value that makes sense to you.
  * *Release Notes*: Enter any new changes you made for this build. Again like the Version, this will only be shown to you so that you keep better track of your builds.
  * *Concatenate Scripts*: Check this to combine all of your PlayCanvas scripts into a single JavaScript file.
  * *Minify Scripts*: Check this to minify your PlayCanvas scripts to reduce the file size.
  * *Generate Source Map*: Include Source Maps with the build. This can be useful for debugging but is generally disabled when publishing a production version of your app.
  * *Optimize Scene Format*: Compresses the scene JSON up to 50%. Read more [here][6].

![シーンの選択][4]

* Select the Scenes you want to include in your build from the list. Notice that the Scene with the active banner icon will be loaded first when your build is launched if you include it in the build.
* Click 'PUBLISH NOW'
* You will see a new build created in the BUILDS tab. Wait until it finishes processing.
* Your web app is now live! Feel free to tweet it and share to Facebook right from the published URL.

ビルドは次の形式で永久的リンクを与えられます： `https://playcanv.as/b/BUILD_ID/` 。このリンクはビルドを削除しない限り有効です。ゲームへのリンクを共有したい場合は、以下の公開されたプロジェクトリンクを使用することを推奨します。

## Selecting a Primary Build

同じポップアップでビルドをクリック。

![ビルド][5]

既存の公開ビルドのリストが表示されます。

You can also set the Primary Build for your project, by clicking on the banner icon on the left of each build. This will be the build that users play when they click on the PLAY button on the project's home page.

常にゲームの最新版を参照する単一のリンクがあると便利です。古いビルドを削除することによりリンクが壊れる心配がなくなります。このために各プロジェクトにPrimary Buildリンクが用意されています。これは、常に次の形式になります： `https://playcanv.as/p/PROJECT_ID/`

<div class="alert alert-info">
ゲームへのリンクをシェアする場合は、Primary Buildリンクを使用するべきです。これにより、再公開する際にリンクが変更される心配がなくなります。
</div>

The first time you publish a build, it will automatically become the Primary Build. For any subsequent build, you can choose when to assign it to be the Primary Build. This means that you can publish builds and test them before finally publishing them to your audience.

[1]: /images/user-manual/publishing/toolbar-publish.png
[2]: /images/user-manual/publishing/dialog-publish.png
[3]: /images/user-manual/publishing/dialog-publish-build.png
[4]: /images/user-manual/publishing/dialog-publish-build-scenes.png
[5]: /images/user-manual/publishing/dialog-builds.png
[6]: /user-manual/optimization/optimizing-scene-format

