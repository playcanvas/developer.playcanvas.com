---
title: 使用CDN进行托管
layout: usermanual-page.hbs
position: 5
---

在部署用于自承载的PlayCanvas应用程序时，通常需要将应用程序所提供的位置(index.html)与应用程序加载的资产分开。 例如，内容传送网络(CDN)用于确保资产从地理上靠近用户计算机的服务器传送。 这使您的应用程序加载更快。 本指南将向您介绍如何配置您的PlayCanvas应用程序，以便为资源指定单独的存放位置。

The first step is to download a web build of your application following the steps in [the publishing guide][1]. Then we start by making changes to the `index.html` and `__settings__.js` files in the downloaded build.

## Serving Assets from another location

The simplest change to make is to load all assets from a different location. This is done by setting the `ASSET_PREFIX` property in your `__settings__.js`.

![settings.js][2]

在预加载阶段和运行时期间，“ASSET_PREFIX”将资源(包括场景)在所有请求之前预置。 例如，您在CDN资源商店中应将其设置在根文件夹里。 在上面的例子中，预置一个URL为`files/123456/1/texture.jpg`这样的资源现在将加载于`http://keepy-up-cdn.example.com/files/123456/1/texture.jpg`.

## Additional URLs

There are a few remaining files that are referenced directly by the `index.html`. In particular, the style sheet, the PlayCanvas javascript engine, the `__settings__.js`, `__loading__.js` and `__start__.js` application scripts. Update your index.html as seen below.

![index.html][3]

In `__settings__.js`, the path to the application settings `config.json` would need to be changed as well. Update

![settings.js][6]

## Copy Files to CDN

接下来，您应该将所有必需的文件复制到服务器上的新位置。 这些文件被使用`ASSET PREFIX`加载:

`__game_scripts.js`, scene json (e.g. `123456.json`), `config.json`, assets (everything inside the `files` folder) and `logo.png` the default loading screen logo.

And these files are referenced by the index.html:

- `playcanvas-stable.min.js`,
- `manifest.json`
- `__settings__.js`
- `__loading__.js`
- `__start__.js`
- `styles.css`

![CDN 文件][4]

您应该将所有这些文件复制到您的CDN托管服务器中。

## Setting up CORS

您的应用程序现在可以从单独的服务器加载文件。 要解决的最后一步是确保您的服务器正确设置为服务跨源资源共享(CORS)头。 CORS是浏览器的安全功能，这意味着默认情况下，在 `http://example.com` 上的网页不能从 `http://keepy-up-cdn.example.com/` 上的网页下载文件 /`因为他们有不同的“源地址”。 要解决这个问题，您必须将服务器设置在 `http://keepy-up-cdn.example.com/`，以提供CORS头，告知浏览器允许其他页面下载内容。

设置CORS因使用的CDN或服务器而异。 您需要检查您的服务器或CDN提供商的文档，以了解如何设置CORS头内容。 例如，亚马逊网页服务器CORS设置的页面是[这里][5]

[1]: /user-manual/publishing/web/self-hosting
[2]: /images/user-manual/publishing/web/cdn-settings-assets-prefix.png
[3]: /images/user-manual/publishing/web/cdn-index.png
[4]: /images/user-manual/publishing/web/cdn-files.png
[5]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html
[6]: /images/user-manual/publishing/web/cdn-settings-config-prefix.png
