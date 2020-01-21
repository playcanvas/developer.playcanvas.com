---
title: PlayCanvas Hosting
template: usermanual-page.tmpl.html
position: 1
---

最も速く簡単で便利にゲームを公開できる方法はplaycanvas.comへのパブリッシュです。

2つの簡単なステップでPlayCanvasに公開できます：

1. Publish a new **Build**
2. Set the build as the **Primary Build**

公開するにはプロジェクトに最低ひとつのシーンが必要です。

## 新規ビルドの公開

* Go to your Project and open the Editor.
* Click on the <span class="pc-icon" style="font-size">&#57911;</span> button in the left hand side toolbar or click Publishing in the top left Menu

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

![シーンの選択][4]

* Select the Scenes you want to include in your build from the list. Notice that the Scene with the active banner icon will be loaded first when your build is launched if you include it in the build.
* Click 'PUBLISH NOW'
* You will see a new build created in the BUILDS tab. Wait until it finishes processing.
* Your web app is now live! Feel free to tweet it and share to Facebook right from the published URL.

ビルドは次の形式で永久的リンクを与えられます： `https://playcanv.as/b/BUILD_ID/` 。このリンクはビルドを削除しない限り有効です。ゲームへのリンクを共有したい場合は、以下の公開されたプロジェクトリンクを使用することを推奨します。

## 既存のビルド

同じポップアップでビルドをクリック。

![ビルド][5]

既存の公開ビルドのリストが表示されます。

ここでは、各ビルドの左側にあるバナーアイコンをクリックして、プロジェクトのプライマリビルドを設定することができます。これは、ユーザーがDashboard HeaderのPLAYボタンをクリックしたときに再生されるビルドです。

常にゲームの最新版を参照する単一のリンクがあると便利です。古いビルドを削除することによりリンクが壊れる心配がなくなります。このために各プロジェクトにPrimary Buildリンクが用意されています。これは、常に次の形式になります： `https://playcanv.as/p/PROJECT_ID/`

<div class="alert alert-info">
If you are sharing a link to your game you should use the Primary Build link. That means you know it won't change when you re-publish.
</div>

初めてビルドを公開する際、それは自動的にPrimary Buildになります。その後のビルドにおいては、Primary Buildを指定するタイミングを選択することができます。最終的にPrimary Buildに設定する前にビルドを公開して検証することができます。

プロジェクトのPrimary Buildを設定するには、ビルドの左側にあるPrimaryマーカーをクリックします。これが、ユーザーがDashboard HeaderでPLAYボタンをクリックした際にプレイするAppになります。

[1]: /images/user-manual/editor/publishing-toolbar.jpg
[2]: /images/user-manual/editor/publishing.jpg
[3]: /images/user-manual/editor/publishing-new-top.jpg
[4]: /images/user-manual/editor/publishing-new-bottom.jpg
[5]: /images/user-manual/publishing/web/builds.jpg

