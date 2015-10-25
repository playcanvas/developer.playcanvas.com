---
title: Self-hosting
template: usermanual-page.tmpl.html
position: 2
---

There are two options for self-hosting a PlayCanvas game on your own domain.

1. Embed a PlayCanvas hosted game using an [iframe][1].
2. Download your game from your project page and upload the files to your own site.

## iframe Embedding

When you [publish to playcanvas.com][2], your game is assigned a URL. To embed your application in another page. You can simply include this URL as the `src` property of an iframe.

~~~html~~~
<html>
	<head>
        <title>My Great Game</title>
	</head>
	<body>
		<iframe src="http://playcanv.as/p/PROJECT_ID"></iframe>
	</body>
</html>
~~~

## Self-hosting on your own server

In order to host your game independently of PlayCanvas' servers, do the following:

![Publish][4]

* In your project dashboard, select the 'PUBLISH' tab.
* Click the DOWNLOAD button
* Enter a name for your export. This will be the name of the .zip file that will be created for you.
* Select the Packs you want to include in your export from the list. Notice that the Primary Pack (the one with the blue banner icon), is always included and it will be the first pack loaded when your app is launched.
* Click on the 'Web' button on the bottom to download a zip file of your project ready for deployment.
* Extract the contents of the zip file to a location of your choosing. The file `index.html` will load your game.

<div class="alert alert-warning">
You cannot load your game by opening the index.html file in a browser or from a **file://** url. You must use a local webserver to load the index.html file.
</div>

There are many options for running a web server. Here are a few:

* *Easy:* Install [Python][5] and run the command *python -m SimpleHTTPServer* from the same folder as your game's index.html. Then point your browser to http://localhost:8000
* *Intermediate:* Install [XAMPP][6]. Although this is a full PHP development environment, it includes an easy to configure Apache server.
* *Advanced:* Install [Apache][7] or [nginx][8] as a standalone service.

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe
[2]: /user-manual/publishing/playcanvas
[3]: /images/publishing/selfhosting/bottombar.png
[4]: /images/platform/dashboard_publish.png
[5]: https://www.python.org/downloads/
[6]: https://www.apachefriends.org/index.html
[7]: http://httpd.apache.org/download.cgi
[8]: http://nginx.org/
