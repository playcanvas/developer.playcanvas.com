---
title: 工作流程
template: usermanual-page.tmpl.html
position: 3
---

有两种方法供你在开发应用PlayCanvas的同时运行应用程序的脚本。在开发和迭代程序时，本地服务器会为您的代码进行服务，而在进行共享和发布时你将使用代码库。每种方式都有不同的优点，你会经常在两者之间切换。

## PlayCanvas 代码目录

<img src="/images/platform/playcanvas_repo.jpg" style="max-width: 100%" />

迄今为止开发PlayCanvas应用脚本的最简单的方法是使用PlayCanvas内置的代码编辑器编辑和存储您的脚本，这样服务器可以在任何时候访问它们。

这就是为什么你的项目在您创建它时被设成为默认设置。如果你已将自己的项目转移到外部代码库，你可以随时使用代码目录同步代码库使其恢复。

### 添加一个新脚本

<img src="/images/user-manual/scenes/components/component-script.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

为了添加一个新的脚本，无论是单击Add Script按钮还是PlayCanvas编辑器中打开你的场景并选择或添加脚本组件到的您希望将脚本添加到的实体上都可以。然后在脚本选取器控件中点击您脚本的URL类型的名称，然后按Enter键。

另外，您可以从资源面板中拖拽脚本到脚本组件上。

<div class="alert alert-info small">
你只能在使用的是PlayCanvas用于存储你的脚本时才能编辑脚本。 如果你设置了一个外部的代码库，你无法通过PlayCanvas编辑它的脚本。你将不得不使用本地服务器或提交代码到你的资料库中。
</div>

点击脚本链接，内置的代码编辑器会为其打开一个新的标签。您可能需要允许来自playcanvas.com弹出窗口来查看新的标签。当您对脚本进行第一次编辑后它将被创建和保存。然后，您可以通过点击编辑器上的[Code][1]标签在你的[资源面板][2]中看到所有的代码文件。

## 本地服务器

在你开发游戏时你总想快速地迭代它。你的脚本文件驻留在本地计算机中，并且你也在这里编辑它们。通过在本地机器上会运行一个很小的Web服务器，要使你对脚本的任何更改被立即纳入应用程序将只需刷新浏览器。

开启web服务器很简单，你将要启动的脚本放置于电脑上的文件夹中，然后启动此服务即可。安装和设置本地服务器的方法在每个平台上都略有不同。

### Windows

首先，你需要从 [这里][3]获取python环境。默认情况下`localserver.bat`使用的Python版本为2.7，你也可以设置它以任何最近的版本运行。

* [下载服务器脚本][4]

* 保存文件 `localserver.bat` 到存放脚本的文件夹。

* 双击服务以运行它。 您将会在终端上看到一条像这样的提示：
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### OS X and Linux

* [下载服务器脚本][5]

* 保存文件 `localserver.bat` 到存放脚本的文件夹。

* 使服务器文件获得执行权限。在命令行中键入：
~~~sh~~~
chmod a+x /path/to/scripts/localserver
~~~

* 现在你可以双击本地服务器文件启动服务。您将会在终端上看到一条像这样的提示：
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### 运行连接本地服务器的应用程序

一旦你开启了服务器，你可以通过在浏览器中访问网址`http://localhost:51000` 来测试服务器是否正常工作。你将会看到如下服务目录:

![服务目录](/images/platform/localserver.png "本地服务目录")

在PlayCanvas编辑器中启动场景需要使用 `Launch Local` 命令使应用查找到连接到 `http://localhost:51000` 的脚本，这意味着如果你的本地服务器正在运行，浏览器会从您的计算机加载脚本。

## 代码库

虽然运行在本地服务器是很好和简单的做法，但这对在团队中不编辑代码的其它成员而言并不是真的有必要，比如说艺术设计师和制作人员。此外，如果你想发布或以可解压的形式导出脚本代码，您的脚本代码必须被放置在PlayCanvas服务器可以访问到的地方，只有这样它才可以被打包并导出。

对于这些情况，我们提供了外部代码库进行支持。也就是说，你的源代码控制系统和我们的服务器之间会有连接。

<img src="/images/platform/external_repo.jpg" style="max-width:100%" />

我们完全支持Git和Mercurial的代码仓库。

为了克隆一个代码库，你需要在最上面的输入字段中输入其克隆网址。幕后PlayCanvas将克隆或同步出的代码的副本，并上传到我们的服务器上。这种同步操作的状态显示在代码页上，当状态为“绿色”，表示该库已被克隆。

有效的URL克隆的例子有任何这些:
* `ssh://hg@bitbucket.org/username/repository`
* `https://username@bitbucket.org/username/repository`
* `git@github.com:username/repository.git`
* `https://github.com/username/repository.git`
* 任何其他的能被Playcanvas访问的Git或Mercurial的网址。

现在，当您从PlayCanvas运行您的应用程序，代码将在程序运行的同时被包含在应用程序中。这意味着你并不需要运行本地服务器。此外，当您导出一个有代码库设置的场景时，代码将被包含在您的输出内容里。

## 如何为所有的资料库提供权限

显示在您的网址下面的框中的公共密钥是用于获取克隆库权限的。 举个例子， 获得 <a href="https://bitbucket.org" target="_blank">Bitbucket</a> 或 <a href="https://github.com" target="_blank">Github</a>中任何一个你可以访问的资料库的克隆权限, 你需要:

1. 复制你的公开密钥。
2. 前往您的<a href="https://bitbucket.org" target="_blank">Bitbucket</a> 或 <a href="https://github.com" target="_blank">Github</a>账户。
3. 添加您的公钥到SSH密钥部分。
4. 同步您的资料库。

你只需要为您的帐户设置一遍。

## 如何为特定的资料库提供权限

相反，如果你只是想访问特定的资源库，可以改为：

1. 复制你的公开密钥。
2. 前往您的 <a href="https://bitbucket.org" target="_blank">Bitbucket</a> 或<a href="https://github.com" target="_blank">Github</a>账户。
3. 添加您的公钥到密钥部署部分。
4.同步您的资料库。

## 切换

<img src="/images/user-manual/launch-options.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

你可以在使用PlayCanvas编辑器时通过选择使用哪些启动按钮轻松地在使用本地代码和使用代码库之间进行切换。

**Launch** 将启用服务器上的代码，即使用你的代码库或代码目录， **Launch (Local)** 将针对启用本地运行的服务器。

导出场景的操作将只会使用PlayCanvas服务器上的代码资源 - 因此请在进行导出前确认你已经将代码进行了上传或同步。

[1]: /user-manual/dashboard/code
[2]: /user-manual/designer/assets
[3]: http://www.python.org/download/
[4]: /downloads/localserver.bat
[5]: /downloads/localserver

