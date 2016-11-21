---
title: 灯光烘焙
template: tutorial-page.tmpl.html
tags: lights
---

<iframe src="https://playcanv.as/p/AGtssoOU/"></iframe>

*更多的细节可以参考[完整的工程][1]。*

在戏剧中，通常通过使用形状蒙板在场景上投射阴影来在舞台上创建视觉效果。 这些蒙版被称为"cucoloris"或"cookies"。 使用PlayCanvas在WebGL中创建一个light cookie是通过使用Light组件的纹理或cubemap来实现的。 Light Cookies适用于聚光灯和点光源。

![Grid Cookie][2]
**一个简单的给人一个窗口印象的网格cookie**

## Cookie 纹理

Cookie纹理只是一种常规的纹理资源，应用于Cookie部分中的聚光灯组件。 应用Cookie时，您可以选择要使用的纹理的哪些通道。 例如，如果你只做一个简单的遮罩，你可以只使用Alpha通道。 或者，如果你想要一个全彩的效果，如彩色玻璃窗口，你可以使用完整的RGB值。

![灯光设置][3]

## Cookie 立方体贴图

对于点光源，cookie需要是立方体贴图，以便它可以在光的点周围的6个方向上投影。

## 用例

**异形灯** - cookies可用于遮蔽光源的形状。 例如，如果场景包含窗口或荧光条，则使用聚光灯的光将创建圆形的光形状。 您可以将光的形状屏蔽为长而薄，或者方形，以模拟光的形状。

![灯光形状][5]

**手电筒** - 手电筒和头灯不会均匀地照亮表面，而是它们具有明亮和黑暗的“腐蚀性”区域。 您可以使用light cookie创建此效果。

![手电筒光][4]

[1]: https://playcanvas.com/project/409793/overview/example-light-cookies
[2]: /images/tutorials/intermediate/light-cookies/window-cookie.jpg
[3]: /images/tutorials/intermediate/light-cookies/cookie-setting.jpg
[4]: /images/tutorials/intermediate/light-cookies/torch-cookie.jpg
[5]: /images/tutorials/intermediate/light-cookies/square-cookie.jpg

