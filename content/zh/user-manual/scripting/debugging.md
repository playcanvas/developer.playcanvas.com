---
title: 调试
template: usermanual-page.tmpl.html
position: 8
---

为了使PlayCanvas创建脚本，用户了解如何使用浏览器的开发工具是十分重要的。

Chrome, Firefox以及其它的浏览器都直接集成开发者工具到浏览器中。用户可以通过在windows中按F12键或者在Mac系统中按ALT-CMD-I组合对其进行访问，或者使用浏览器的目录对开发者工具进行访问。

### 调试脚本

为了调试脚本，在开发者工具（Chrome）中选择来源标签。通过点击在资源面板左上角的图标来打开”导航器”。用户可以看到如下界面：

![Debugger][1]

在火狐浏览器（Firefox）中显示如下：

![Firefox][2]

导航器列出了当前在活动标签页中运行的所有脚本，包括所有用户编写的PlayCanvas脚本。在导航器中找到一个需要查看的脚本，点击可以查看脚本的源代码，现在用户就可以对代码进行断点和调试了。

浏览器上有详细说明如何调试JavaScript。用户可以通过以下页面进行了解：[Chrome][3], [Firefox][4], [Safari][5], [Edge / Internet Explorer][6].

<div class="alert alert-info">
请注意，当运行的应用程序在调试器的断点处暂停时，用于启动该应用程序的其他浏览器窗口/标签(包含PlayCanvas代码编辑器或编辑器等)也可能会暂停。
</div>

### Debugging on Mobile Devices

On Android, it is possible to connect to the mobile Chrome browser via the desktop Chrome browser devtools and USB cable. [Google Developer documentation][7] has the detailed steps for the setup.

iOS debugging requires access to a Mac and [Apple has outlined the steps][8] needed to enable developer options to start debugging.

In the situation where either it's not possible to connect to the web view directly from Chrome or Safari (e.g. a web view in another app) or don't have access to a Mac, the following libraries and services can help and are simple to add to projects:

* [RemoteJS][9] - Allows developers to view the console output remotely in a desktop browser and also execute JS in the console which makes it very powerful. The console output can be delayed or slow though.
* [vConsole][10] or [Eruda][11] - Adds a widget DOM object to the page that can be expanded to show console output, network requests, the page elements and more.

[1]: /images/user-manual/scripting/debugger-chrome.jpg
[2]: /images/user-manual/scripting/debugger-firefox.jpg
[3]: https://developers.google.com/web/tools/chrome-devtools/javascript
[4]: https://developer.mozilla.org/en-US/docs/Tools/Debugger
[5]: https://developer.apple.com/safari/tools/
[6]: https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger
[7]: https://developer.chrome.com/docs/devtools/remote-debugging/
[8]: https://webkit.org/web-inspector/enabling-web-inspector/
[9]: https://remotejs.com/
[10]: https://github.com/Tencent/vConsole
[11]: https://github.com/liriliri/eruda

