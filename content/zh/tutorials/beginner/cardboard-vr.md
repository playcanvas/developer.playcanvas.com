---
title: 平面 VR
template: tutorial-page.tmpl.html
---

<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="https://playcanv.as/p/ItQwDzOa" ></iframe>

PlayCanvas使得对移动VR演示的支持变得非常容易，就像您需要支持Google Cardboard一样。 我们创建了一个[插件库] [1]，您可以将它放入场景中以启用对VR的支持。

这里会展示如何添加VR支持

## 第一步: 添加 HMD 输入库

PlayCanvas WebVR库包括一个名为`input_hmd.js`的文件。 这增加了从头戴式显示器(HMDs)获取输入信息的支持。 这个文件是库代码，意味着它不需要添加到实体，但应该在应用程序启动前被加载。 为此，请确保它在“设置”面板中的“脚本加载顺序”中的其他脚本之前。

![脚本加载顺序][2]

## 第二部: 添加 VR 摄像机脚本

WebVR库还包括一个名为`vr_camera.js`的文件。 它将作为你的相机被附加到一个实体上。 此实体可能已附加了摄像机组件(但不是必需的)。 当VR模式激活时，VrCamera脚本将创建一对摄像机(每只眼睛一个!)，并禁用现有的摄像机组件。

![VR 摄像机][3]

## 第三部: 完成它!

使VR摄像机运行起来是你需要做的最少部分。 如果您现在在手机上启动场景，点击屏幕，视图将分为两部分，您可以将手机放入Cardboard VR设备中了。

在 [工程][4]中查看教程的所有源代码。

[1]: http://github.com/playcanvas/webvr
[2]: /images/tutorials/beginner/cardboard-vr/script_loading_order.jpg
[3]: /images/tutorials/beginner/cardboard-vr/script-component.jpg
[4]: https://playcanvas.com/project/406299

