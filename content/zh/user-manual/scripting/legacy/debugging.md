---
title: 调试
template: usermanual-page.tmpl.html
position: 7
---

为了创建PlayCanvas的脚本，至关重要的一点是你需要知道如何访问和使用浏览器的开发工具。 让我们依次查看每种浏览器。

## Google Chrome

Chrome已将[开发人员工具](https://developer.chrome.com/devtools) 直接整合到浏览器中。 通过按Windows上的F12或Mac上的ALT-CMD-I访问它们。

### 调试代码

为了调试您的脚本，请选择开发工具中的源标签。 通过单击“源”窗格左上角的图标打开“导航器”。 你应该看到类似下面显示的东西 : 

<img alt="Show sources in Chrome" width="640" src="/images/platform/browser_chrome_view_sources.png"></img>

导航器列出当前在活动选项卡中运行的所有脚本，包括您编写的任何PlayCanvas脚本。 在导航器中查找您的一个脚本，并选择它来打开源代码。 您现在可以设置断点和调试。

<div class="alert alert-info">
请注意，当运行的应用程序在调试器的断点处暂停时，用于启动该应用程序的其他浏览器窗口/标签(包含PlayCanvas代码编辑器或编辑器等)也可能会暂停。
</div>

### 安装WebGL 检查工具

如果您对PlayCanvas如何向显卡发送数据感兴趣，那么您可能有兴趣安装[WebGL Inspector](https://chrome.google.com/webstore/detail/ogkcjmbhnfmlnielkjhedpcjomeaghda?utm_source=chrome-ntp-icon)。 这是一个Chrome扩展程序，一旦安装，您将看到字母'GL'出现在地址栏/多功能框的右端，当您运行您的PlayCanvas游戏。 如果单击GL字母，页面将重新加载，在选项卡的右上角有两个按钮：“捕获”和“UI”。 单击“捕获”获取渲染当前帧所需的整个状态，然后单击“UI”以检查数据。 你应该看到类似下面显示的东西：

<img alt="WebGL Inspector in Chrome" width="640" src="/images/platform/browser_chrome_webgl_inspector.jpg"></img>

要了解有关如何使用WebGL Inspector的更多信息，请访问项目的[主页](http://benvanik.github.com/WebGL-Inspector/)。

