---
title: 分析器
template: usermanual-page.tmpl.html
position: 2
---

PlayCanvas提供了一个协助诊断性能问题的实时分析器。

![Profiler][1]

分析器是一个覆盖了你的App的控制面板，显示了许多有用的事件信息以及运行状态。因此无论何时你想知道为何你的app达不到60帧每秒，在分析器中用户就可以快速找到原因所在。

要启动Profiler，请从启动按钮的子菜单中选中Profiler复选框：

![Profiler Launch][2]

同样提供了切换分析器的热键：CTRL (CMD) + ALT + T。

## 分析器概述

![Profiler Stats][3]

分析器的左边面板显示的统计数据和最近被渲染的场景有关。这显示了帧速率，被运行运行的摄像机的数量（通常情况下用户将会使这个设置为1），着色器的数量，材质，三角形等等。同样，frame time is broken down into update（运行所有组件加载的事件），物理（模拟时间）以及渲染时间（传送所有图形命令到WebGL的时间）。一目了然地可以找到问题所在。

![Profiler Timeline][4]

右侧面板是分析器的时间线。这显示了用户app运行期间关键事件的数量：

* **dom** (DOM interactive)：当浏览器停止解析html文档时的事件，将允许渲染页面的第一帧到屏幕上。
* **preload**: event when PlayCanvas initiates preloading of all assets that are required before the app can start.
* **preload**: 当PlayCanvas初始化所有组件的预加载时所要求的事件。
* **start**: event when PlayCanvas begins the main application loop and rendering begins.
* **start**: 当PlayCanvas开始主要应用程序循环和渲染的事件。

绿色横杠显示了单独的异步资源加载。橙色横杠为阻断着色器的事件。

[1]: /images/user-manual/optimization/profiler/profiler.png
[2]: /images/user-manual/optimization/profiler/profiler_launch.png
[3]: /images/user-manual/optimization/profiler/profiler_stats.png
[4]: /images/user-manual/optimization/profiler/profiler_timeline.png

