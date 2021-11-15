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
        <iframe src="https://playcanv.as/p/PROJECT_ID/"></iframe>
    </body>
</html>
```

## 在您自己的服务器上进行自托管

为了能从PlayCanvas中独立地控制您的游戏，按一下步骤进行操作：

* 前往您的工程并打开编辑器。
* 点击在工具条左手边的<span class="pc-icon" style="font-size">&#57911;</span>按钮或者点击在左上角目录中的发布按钮。

![Publish Button][3]

这将会打开发布对话框。

![Publish][4]

* Click the DOWNLOAD .ZIP button

![Download][5]

* Enter a name for your export. This will be the name of the .zip file that will be created for you.
* Select the Scenes you want to include in your export from the list. Notice that the Scene with the active banner icon will be the first scene loaded when your app is launched.
* Click on the 'DOWNLOAD' button on the bottom to download a zip file of your project ready for deployment.
* Extract the contents of the zip file to a location of your choosing. The file `index.html` will load your game.

## Running a Downloaded Build

You cannot load your game by opening the `index.html` file in a browser or from a `file://` url. You must use a local webserver to load the `index.html` file using `http://` or `https://`.

有许多选项可以运行网络服务，以下举例了一些例子：

* *Easy:* Install [Python][6] and run the command *python -m SimpleHTTPServer* from the same folder as your game's index.html. Then point your browser to http://localhost:8000
* *Intermediate:* Install [XAMPP][7]. Although this is a full PHP development environment, it includes an easy to configure Apache server.
* *Advanced:* Install [Apache][8] or [nginx][9] as a standalone service.

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
[2]: /user-manual/publishing/web/playcanvas-hosting
[3]: /images/user-manual/publishing/toolbar-publish.png
[4]: /images/user-manual/publishing/dialog-publish.png
[5]: /images/user-manual/publishing/dialog-publish-download.png
[6]: https://www.python.org/
[7]: https://www.apachefriends.org/index.html
[8]: https://httpd.apache.org/
[9]: https://www.nginx.com/

