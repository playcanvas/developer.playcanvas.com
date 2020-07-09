---
title: 自托管
template: usermanual-page.tmpl.html
position: 2
---

我们为自托管提供了以下两个选项：

1. 通过使用[iframe][1]嵌入PlayCanvas游戏。
2. 从编辑器中下载游戏，在用户自己的页面中上传游戏文件。

## iframe 嵌入

当用户[向PlayCanvas.com发布游戏][2]时,您的用户将会被分配一个链接。将您的应用程序嵌入到另外一个页面，只需要简单的在框架的`src`属性中写入这个游戏的链接。

```html
<html>
    <head>
        <title>My Great Game</title>
    </head>
    <body>
        <iframe src="http://playcanv.as/p/PROJECT_ID"></iframe>
    </body>
</html>
```

## 在您自己的服务器上进行自托管

为了能从PlayCanvas中独立地控制您的游戏，按一下步骤进行操作：

* 前往您的工程并打开编辑器。
* 点击在工具条左手边的<span class="pc-icon" style="font-size">&#57911;</span>按钮或者点击在左上角目录中的发布按钮。

![Publish Button][5]

这将会打开发布对话框。

![Publish][4]

* 点击下载按钮

![Download][6]

* 为项目输入一个名称。这将会成为创建的zip压缩文件的名称。
* 在列表中选择一个你想在导出中包含的场景。注意首要场景（有着活动旗帜标志），当你的App开始时这个场景将会被第一个加载。
* 将压缩文件的内容提取到您选择的位置。文件`index.html` 将会加载用户的游戏。

用户不可以通过在浏览器中打开index.html文件加载游戏或者一个**file://**超级链接。用户必须使用本地网络服务器加载index.html文件。

有许多选项可以运行网络服务，以下举例了一些例子：

* *Advanced:* Install [Apache][9] or [nginx][10] as a standalone service.
* *Easy:*安装[Python][7] 并且在和游戏的index.html文件夹的相同目录下运行语句*python -m SimpleHTTPServer*。然后将您的浏览器指向http://localhost:8000
* *Intermediate:* 安装[XAMPP][8]。尽管这是一个全PHP开发环境，但是这个包括了一个易于配置的Apache服务器。
* *Advanced:* 安装[Apache][9] 或者 [nginx][10]作为独立的服务。

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe
[2]: /user-manual/publishing/playcanvas
[3]: /images/publishing/selfhosting/bottombar.png
[4]: /images/user-manual/editor/publishing.jpg
[5]: /images/user-manual/editor/publishing-toolbar.jpg
[6]: /images/user-manual/editor/publishing-download.jpg
[7]: https://www.python.org/downloads/
[8]: https://www.apachefriends.org/index.html
[9]: http://httpd.apache.org/download.cgi
[10]: http://nginx.org/

