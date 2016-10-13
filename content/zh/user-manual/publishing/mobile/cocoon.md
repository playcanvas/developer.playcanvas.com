---
title: Cocoon
template: usermanual-page.tmpl.html
position: 1
---

 [Ludei][2]的[Cocoon][1] 是一个能够将你的PlayCanvas游戏转换为本地应用，然后使之可以被提交到Google Play，亚马逊App Store或苹果App Store的云服务。

##  在Cocoon中测试你的PlayCanvas游戏

在你为你的PlayCanvas游戏创建本地应用前，你会想在Cocoon.io上测试一下它以便观察它的运行情况。Ludei已经开发了一款名为开发者应用的极棒的应用，它可以直接从playcanvas.com将你的游戏拉入并在设备上运行它。只要把游戏程序的网址传递给开发者应用，它会顺利地在开发者应用程序中运行。

所以，要怎样才能获取开发者应用呢？让我们通过这个过程来说明它是多么容易：

1. 在[Cocoon.io][1] 注册一个账号并登陆。
2. 创建一个新的工程。 最快的方法是拖放一个包含了你的PlayCanvas游戏内容的zip文件到一个空的工程卡片上: <br><br><img alt="Cocoon.io - Create project" width="320" src="/images/publishing/cocoon/create-project-cocoon.png"></img><p><br><br>从 PlayCanvas将你的游戏下载下来并按照 [自托管][5] 手册的引导进行操作。<br><br>该项目将被自动创建。还有更多的创建项目的方法, 你可以在[Cocoon.io文档部分][3]查看它们。

3. 打开项目设置，单击项目的名称。

4. Cocoon.io 是一个基于云编译器的cordova 跨平台框架。如果你的工程需要用到其他插件, 加载它们到工程中最合适的方法是使用插件选项卡:<br><br><img alt="Cocoon.io - Add plugins" width="320" src="/images/publishing/cocoon/plugins-wizard-cocoon.png"></img><p><br><br>这点很重要，因为开发者应用将按照您的项目相同的配置被创建。 还有一点很重要: 如果你的目标视图使用的引擎是Canvas+, 记得要卸载该插件的白名单。

5. 再项目设置下方，你会看到开发者应用程序部分。点击蓝色的按钮来启动开发者APP:<br><br><img alt="Cocoon.io - Compile the Developer App" width="320" src="/images/publishing/cocoon/compile-devapp-cocoon.png"></img><p><br><br>当面板上方的OS图标停止闪烁, 你就能够下载并安装开发者应用到你的机器上了。你可以访问[Cocoon.io 文档部分][4]以获得更多的关于开发者应用的信息。

6. 打开开发者应用。 选择 URL并进入您所嵌入的你的PlayCanvas 游戏链接(请看下方)。<br><br><img alt="Cocoon.io - Developer App" width="320" src="/images/publishing/cocoon/devapp-urls-cocoon.png"></img><br><br>将这个输入启动界面的URL编辑框并点击 'CANVAS+' 或是 'WEBVIEW+'!

## 嵌入链接

游戏可以通过两种链接的其中一个来访问。构建链接或项目链接。

* `http://playcanv.as/b/BUILD_ID` - 链接到一个特定的构建链接
* `http://playcanv.as/p/PROJECT_ID` - 链接到项目的主要应用

要获得任一链接的嵌入式版本，在host段后方添加 `/e/` ，比如

* `http://playcanv.as/e/b/BUILD_ID`
* `http://playcanv.as/e/p/PROJECT_ID`

## 生成您的游戏的原始构建

现在你可以通过Cocoon.io 开发者应用在你的移动设备上测试你的游戏了, 你也准备好建立一个原生版本了。 再度提示, Cocoon.io 可以很轻易地为你达成这项功能。 你只需要按照以下几个简单步骤来操作:

1. 回到项目配置中, 点击设置选项卡，并根据您的需要配置项目。如果你有需求, 你可以在config.xml的标签编辑器中直接编辑 config.xml 文件。

2. 在图标选项卡中,您可以添加自定义图标到您的游戏中。 如果你将这个配置置空, Cocoon.io 会使用一个默认选项。

3. 或者，您可以在签署部分添加密钥，这样你的项目将在编译期间被签署。

4. 点击'编译' 按钮 (创建和最后编译日期面板下的锤子图标)即可大功告成。

当面板上方的OS图标停止闪烁时, 你将能够下载并安装你的最新版本应用到你的设备上。

[1]: http://cocoon.io/
[2]: https://ludei.com/
[3]: https://cocoon.io/doc/cloud_compiler#create-a-project
[4]: https://cocoon.io/doc/developer_app
[5]: /user-manual/publishing/web/self-hosting/

