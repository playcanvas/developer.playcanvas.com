---
title: 使用CDN进行托管
template: usermanual-page.tmpl.html
position: 5
---

在部署用于自承载的PlayCanvas应用程序时，通常需要将应用程序所提供的位置(index.html)与应用程序加载的资产分开。 例如，内容传送网络(CDN)用于确保资产从地理上靠近用户计算机的服务器传送。 这使您的应用程序加载更快。 本指南将向您介绍如何配置您的PlayCanvas应用程序，以便为资源指定单独的存放位置。

第一步是按照[发布指南][1]中的步骤下载应用程序的Web项目。 然后，我们开始更改已下载的项目文件中的`index.html`文件。

## 从其他位置进行资源服务

最简单的更改是从不同的位置加载所有资源。 这是通过在index.html中设置“ASSET PREFIX”属性来实现的

![index.html][2]

在预加载阶段和运行时期间，“ASSET_PREFIX”将资源(包括场景)在所有请求之前预置。 例如，您在CDN资源商店中应将其设置在根文件夹里。 在上面的例子中，预置一个URL为`files/123456/1/texture.jpg`这样的资源现在将加载于`http://keepy-up-cdn.example.com/files/123456/1/texture.jpg`.

## 其他网址

有一些剩余的文件直接由`index.html`引用。 其中特别是样式表，PlayCanvas javascript引擎内容，应用程序的`config.json`文件和`__loading __.js`和`__start __.js`应用程序脚本。 请按照如下所示更新您的index.html。

![index.html][3]

## 将文件复制到CDN

接下来，您应该将所有必需的文件复制到服务器上的新位置。 这些文件被使用`ASSET PREFIX`加载:

`game scripts.js`，场景json文件(例如`123456.json`)，assets(`files`文件夹中的所有内容)和`logo.png`默认加载屏幕图标。

同时这些文件会由index.html引用: `playcanvas-stable.min.js`，`config.json`，`__loading __.js`，`__start __.js`和`styles.css`。

![CDN 文件][4]

您应该将所有这些文件复制到您的CDN托管服务器中。

## 设置CORS

您的应用程序现在可以从单独的服务器加载文件。 要解决的最后一步是确保您的服务器正确设置为服务跨源资源共享(CORS)头。 CORS是浏览器的安全功能，这意味着默认情况下，在 `http://example.com` 上的网页不能从 `http://keepy-up-cdn.example.com/` 上的网页下载文件 /`因为他们有不同的“源地址”。 要解决这个问题，您必须将服务器设置在 `http://keepy-up-cdn.example.com/`，以提供CORS头，告知浏览器允许其他页面下载内容。

设置CORS因使用的CDN或服务器而异。 您需要检查您的服务器或CDN提供商的文档，以了解如何设置CORS头内容。 例如，亚马逊网页服务器CORS设置的页面是[这里][5]

[1]: /user-manual/publishing/web/self-hosting
[2]: /images/user-manual/publishing/web/cdn-index.jpg
[3]: /images/user-manual/publishing/web/cdn-more.jpg
[4]: /images/user-manual/publishing/web/cdn-files.jpg
[5]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html

