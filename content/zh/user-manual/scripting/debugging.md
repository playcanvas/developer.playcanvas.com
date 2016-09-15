---
title: 调试
template: usermanual-page.tmpl.html
position: 7
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
Note that when a running app is paused at a breakpoint in the debugger, other browser windows/tabs used to launch that app (containing the PlayCanvas Code Editor or Editor etc.) might also be paused.
</div>

[1]: /images/user-manual/scripting/debugger-chrome.jpg
[2]: /images/user-manual/scripting/debugger-firefox.jpg
[3]: https://developer.chrome.com/devtools/docs/javascript-debugging
[4]: https://developer.mozilla.org/en-US/docs/Tools/Debugger
[5]: https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Debugger/Debugger.html#//apple_ref/doc/uid/TP40007874-CH5-SW1
[6]: https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/debugger/

