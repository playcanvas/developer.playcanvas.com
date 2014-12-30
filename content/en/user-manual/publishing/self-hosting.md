---
title: Self-hosting
template: page.tmpl.html
position: 2
---

If you want to self-host your game on your own web site, there are a couple of options:

1. Embed a PlayCanvas hosted game using an [iframe][iframe].
2. Download your game from your project page and upload the files to your own site.

## iframe Embedding

When you [publish to playcanvas.com](/user-manual/publishing/playcanvas), your game is assigned a URL. This page incorporates a 'bottom bar' which displays a view count, social sharing buttons and a fullscreen button.

![Bottom Bar](/images/publishing/selfhosting/bottombar.png)

As it happens, this page embeds your game in an iframe. So although the published URL for your game might be:

	http://apps.playcanvas.com/activision/callofduty/ghosts

The actual game itself can be found here:

	http://apps.playcanvas.com.s3-website-eu-west-1.amazonaws.com/activision/callofduty/ghosts/

The simplest example of a page which embeds this PlayCanvas game would be:

~~~html~~~
<html>
	<head>
	</head>
	<body>
		<iframe src="http://apps.playcanvas.com.s3-website-eu-west-1.amazonaws.com/activision/callofduty/ghosts/"></iframe>
	</body>
</html>
~~~~~~

## Self-Hosting all Game Files

In order to host your game independently of PlayCanvas' servers, do the following:

* In your project dashboard, select the 'PUBLISH' tab.

![Publish](/images/platform/dashboard_publish.png)

* Click the DOWNLOAD button
* Enter a name for your export. This will be the name of the .zip file that will be created for you.
* Select the Packs you want to include in your export from the list. Notice that the Primary Pack (the one with the blue banner icon), is always included and it will be the first pack loaded when your app is launched.
* Click on the 'Web' button on the bottom to download your export for Web deployment.
* Extract the contents wherever you like and point a browser at the contained index.html. You PlayCanvas web app will load.

If you run your game from your local file system, it needs to be served from a local web server. If you don't do this, the browser will block HTTP requests made by the engine (for security purposes). There are many options for running a web server. Here are a few:
* *Easy:* Install [Python][python] and run the command *python -m SimpleHTTPServer* from the same folder as your game's index.html. Then point your browser to http://localhost:8000
* *Intermediate:* Install [XAMPP][xampp]. Although this is a full PHP development environment, it includes an easy to configure Apache server.
* *Advanced:* Install [Apache][apache] as a standalone service.

[apache]: http://httpd.apache.org/download.cgi
[iframe]: http://www.w3schools.com/tags/tag_iframe.asp
[python]: https://www.python.org/downloads/
[xampp]: https://www.apachefriends.org/index.html
