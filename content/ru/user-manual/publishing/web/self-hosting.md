---
title: Self-hosting
template: usermanual-page.tmpl.html
position: 2
---

There are two options for self-hosting a PlayCanvas game on your own domain.

1. Embed a PlayCanvas hosted game using an [iframe][1].
2. Download your game from the Editor and upload the files to your own site.

## iframe Embedding

When you [publish to playcanvas.com][2], your game is assigned a URL. To embed your application in another page. You can simply include this URL as the `src` property of an iframe.

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

## Self-hosting on your own server

In order to host your game independently of PlayCanvas' servers, do the following:

* Go to your Project and open the Editor.
* Click on the <span class="pc-icon" style="font-size">&#57911;</span> button in the left hand side toolbar or click Publishing in the top left Menu

![Publish Button][3]

* This will open up the Publishing Dialog.

![Publish][4]

* Click the DOWNLOAD .ZIP button

![Download][5]

* Enter a name for your export. This will be the name of the .zip file that will be created for you.
* Select the Scenes you want to include in your export from the list. Notice that the Scene with the active banner icon will be the first scene loaded when your app is launched.
* Click on the 'DOWNLOAD' button on the bottom to download a zip file of your project ready for deployment.
* Extract the contents of the zip file to a location of your choosing. The file `index.html` will load your game.

## Running a Downloaded Build

You cannot load your game by opening the `index.html` file in a browser or from a `file://` url. You must use a local webserver to load the `index.html` file using `http://` or `https://`.

There are many options for running a web server. Here are a few:

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

