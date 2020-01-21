---
title: Self-hosting
template: usermanual-page.tmpl.html
position: 2
---

我们为自托管提供了以下两个选项：

1. Embed a PlayCanvas hosted game using an [iframe][1].
2. Download your game from the Editor and upload the files to your own site.

## iframe 嵌入

当用户[向PlayCanvas.com发布游戏][2]时,您的用户将会被分配一个链接。将您的应用程序嵌入到另外一个页面，只需要简单的在框架的`src`属性中写入这个游戏的链接。

~~~html~~~
<html>
    <head>
        <title>My Great Game</title>
    </head>
    <body>
        <iframe src="https://playcanv.as/p/PROJECT_ID/"></iframe>
    </body>
</html>
~~~

## 在您自己的服务器上进行自托管

为了能从PlayCanvas中独立地控制您的游戏，按一下步骤进行操作：

* Go to your Project and open the Editor.
* Click on the <span class="pc-icon" style="font-size">&#57911;</span> button in the left hand side toolbar or click Publishing in the top left Menu

![Publish Button][5]

这将会打开发布对话框。

![Publish][4]

* 点击下载按钮

![Download][6]

* Enter a name for your export. This will be the name of the .zip file that will be created for you.
* Select the Scenes you want to include in your export from the list. Notice that the Scene with the active banner icon will be the first scene loaded when your app is launched.
* Click on the 'WEB DOWNLOAD' button on the bottom to download a zip file of your project ready for deployment.
* Extract the contents of the zip file to a location of your choosing. The file `index.html` will load your game.

<div class="alert alert-warning">
You cannot load your game by opening the index.html file in a browser or from a **file://** url. You must use a local webserver to load the index.html file.
</div>

有许多选项可以运行网络服务，以下举例了一些例子：

* *Easy:* Install [Python][7] and run the command *python -m SimpleHTTPServer* from the same folder as your game's index.html. Then point your browser to http://localhost:8000
* *Intermediate:* Install [XAMPP][8]. Although this is a full PHP development environment, it includes an easy to configure Apache server.
* *Advanced:* Install [Apache][9] or [nginx][10] as a standalone service.

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

