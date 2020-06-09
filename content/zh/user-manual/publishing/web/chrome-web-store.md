---
title: Chrome 网页商店
template: usermanual-page.tmpl.html
position: 5
---

## 在Chrome Web Store发布

如果你正在开发HTML5游戏，有机会的话，你会想要更多人有机会能够玩到你的游戏，甚至理想地来说，你会在这个过程中获得一些经济奖励。在网页上将应用货币化比在移动端的app商城要困难许多，其中，需要对支付处理的标准化和信用卡信息进行存储。但仍有多种其它的选择。其中一个你需要为你的游戏发布考虑的不错的平台是<a href="https://chrome.google.com/webstore" target="_blank">Chrome Web Store</a>.

![Chrome Web Store][1]

这是为桌面版本的Chrome精心策划设计的一款app商城(可以在 Win, Mac, Linux 以及 Chrome OS上打开)。在这里发布游戏可以将它推送给大众并为您提供简单的付款机制。让我们通过该步骤发布一款免费游戏。

Google可以让你以两种形式发布你的游戏:作为托管应用程序或打包应用程序。

## 创建一个托管应用

被托管的应用基本上是带有一点点额外的元数据的基本网站。为什么托管应用更优秀呢?

* 你的游戏将可以被Chrome网上应用店的用户发现。
* Chrome 网上应用店的用户可以将你的应用下载到他们的Chrome应用页面，并生成一个标识你的游戏的一个书签。这将在其在不同设备上使用Chrome浏览器时对不同设备之间进行同步 (如果你处于登陆状态)。

会有更多的人下载并开始玩你的游戏。这听起来很棒。

在开始之前，你需要点击Chrome Web Store中的着陆页的右上角的齿轮图标，选择开发人员信息中心。登陆并点击标有“添加新项”按钮。

以下是你为发布一个托管应用所需做的准备的清单:

* 一个包含了主程序以及 128×128大小游戏图标的zip文件。Google 提供了清单文件格式的参考和如何创建图标(以及您所提交的其他格式的图像)的指导方针 。
* 您的游戏描述。请确保它有趣并令人激动! 请记住, 你是在尝试通过它说服一个人下载你的游戏，所以请让这份描述看上去很高上大。
* 一部分的截图和 YouTube视频链接可以告知游戏的潜在用户你的游戏玩起来是什么样的。
* Google可以使用一部分的图像在线上商城为你的游戏进行推广。 这取决于你的游戏有多成功, 它可能会被显示在一个小型、中型或大型(或字幕形式) 的宣传框中。请花些时间确保您提供了所有的图像资料。一个优秀的游戏可能会因平淡的宣传影像被拉低期待!
* 验证您所拥有的游戏的URL。你可以通过谷歌的网站管理员工具来进行此操作。

还有一些其他的选项，涵盖了谷歌分析，游戏类别，你的游戏将陆续上市的地区等等。当你填完后，点击“发布”。请注意谷歌需要花一点时间(不超过60分钟的时间，但要快很多)在你的游戏正式在商城中上架前来扫描你的上传文档。

## 创建一个压缩包应用

虽然托管型应用非常优秀，但它们还是存在一些问题的:

* 用户们可能会认为你在偷懒! '看! 这不就是一个网页链接! 噫!'. 用户期望可以看到更多的东西被加载安装到他们的浏览器中。
* 托管型应用不能断网工作 (除非你巧妙地让浏览器应用本地服务器)。
* 托管行应用仅仅只是网页呈现，没有一个应用的感觉。
* 如果你的游戏运行需要基于超大数据量的资源并且之前没有任何缓存, 用于下载的时间会变得很长。

进入压缩包应用！这些都是从Chrome上下载下来的完整的应用，能够不需要联网并在它自己的没有Chrome图标的窗口中运行(当然，你如果你想要也可以保留图标)。并且由于他们从本地存储加载，他们启动的非常快。

PlayCanvas已经再Chrome在线商城中发布了一个压缩包应用的案例。这是一个被称为SWOOOP的游戏。

<img alt="SWOOOP" src="/images/publishing/swooop.png">

请自行在这里 <a href="https://chrome.google.com/webstore/detail/swooop/jblimahfbhdcengjfbdpdngcfcghladf" target="_blank">确认</a>。

从PlayCanvas中创建一个压缩包游戏应用比创建一个被托管的需要多一些步骤。下面是打包并发布类似SWOOOP的游戏所需步骤的概要：

* 按照 [自托管导航][2]中的指示从PlayCanvas下载您的游戏。
* 解压缩这些内容。
* 为SWOOOP创建manifest.json档案。它看起来像这样：

```javascript
{
  "name": "SWOOOP",
  "description": "Loop and swoop your bi-plane around the magical island. What's your highscore?",
  "version": "1.0",
  "app": {
    "background": {
      "scripts": ["background.js"]
    }
  },
  "icons": { "16": "swooop16.png", "48": "swooop48.png", "128": "swooop128.png" }
}
```

* 创建一个包含游戏是如何启动的配置的background.js文件：

```javascript
chrome.app.runtime.onLaunched.addListener(function() {
 chrome.app.window.create('index.html', {
   'bounds': {
     'width': 1280,
     'height': 720
   }
 });
});
```

* 创建一个清单中会引用的图标并把它放到和index.html相同的文件夹中。
* 转移所有index.html中的JavaScript脚本块到外部引用的JS文件中 (这里有两项)。这样做是因为Chrome 会将.html中的代码块认作外部威胁。
* 请检查您的游戏是否使用了HTML5本地存储的API。 压缩应用是不能使用该 API的，尽管它们可以使用Chrome的具体替代方案。

现在我们已经设置完成了！将游戏文件全部打包并上传你的新项目到CWS的开发人员仪表盘中。像托管应用时一样填写表格的其余部分， (当然，由于没有权限设置，你现在不需要展示你的托管应用程序URL权限)。

非常庆幸地，将发布游戏到Chrome网上应用店的程序做的非常简单是多么的有眼光。无论您选择发布一个托管应用还是你自己打包的应用程序，正如我们所展示的，都有自己的优点和缺点。你可以选择尝试我们的建议。这是一个任何人都可以随时使用的优秀发布平台，所以自己尝试一下吧！

[1]: /images/publishing/web/chromewebstore.png
[2]: /user-manual/publishing/web/self-hosting

