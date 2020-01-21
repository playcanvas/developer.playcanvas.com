---
title: Facebook
template: usermanual-page.tmpl.html
position: 7
---

[Facebook][1]是一个面向广大受众的很好的发布PlayCanvas游戏的地方。 从PlayCanvas发布游戏到Facebook是很直接了当的。

## 怎样发布到Facebook

**1.** 发布您的游戏到PlayCanvas。 (您也可以发布自托管的游戏到Facebook，这将是一个类似如下的过程)

**2.** 访问 [Facebook 开发者门户网站][2]并为你的游戏创建一个新的 Facebook 应用。

**3.** 当被要求时选择 **Facebook Canvas** 作为应用类型。

![Facebook Canvas][3]

**4.** 对于安全窗口的 URL输入你的游戏的 `playcanv.as` URL

![安全窗口][4]

**5.** In the Application Settings section add the Website URL so that it looks like this: `https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/[BUILD_HASH]/index.html`. To find this URL take your `playcanv.as` game link e.g. `https://playcanv.as/p/JtL2iqIH/` and add an `e/` before the `p/` e.g. `https://playcanv.as/e/p/JtL2iqIH/`. This will redirect in your browser, use this URL for the Website URL

![网址][5]

<div class="alert alert-info">
Adding this URL as your website URL is required because of the way PlayCanvas hosts games and the security requirements that Facebook implements to allow access to its API. We're working on a fix for this in PlayCanvas so that you only need to set the Secure Canvas URL.
</div>

**6.** 最后, 设置你游戏所需要的所有的图片和图标。

![图片][6]

**7.** 您可以通过访问设置页面中列出的程序的URL测试游戏

![应用 URL][7]

[1]: http://facebook.com
[2]: https://developers.facebook.com/
[3]: /images/user-manual/publishing/web/facebook/choose-platform.jpg
[4]: /images/user-manual/publishing/web/facebook/secure-canvas-url.jpg
[5]: /images/user-manual/publishing/web/facebook/website-url.jpg
[6]: /images/user-manual/publishing/web/facebook/icons.jpg
[7]: /images/user-manual/publishing/web/facebook/app-url.jpg

