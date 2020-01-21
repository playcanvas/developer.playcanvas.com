---
title: VR
template: usermanual-page.tmpl.html
position: 13
---

![VR 视口][3]

PlayCanvas允许您为基于新WebVR API的各种设备创建虚拟现实(VR)应用程序。 WebVR是一个实验性的新的浏览器API，提供对虚拟现实耳机的访问。

## 平台

移动应用方面PlayCanvas VR目前在Android和iOS的移动设备上可以行使纸板式VR模式，它也支持三星Gear VR。

在桌面设备上PlayCanvas VR当前支持Oculus Rift和HTC Vive耳机，同时还需使用特殊构建的Chrome和Firefox。 你可以[在这里] [1]了解更多有关在浏览器中获取WebVR支持的信息。

<div class="alert alert-info" style="text-align:left">
WebVR is an experimental browser API and is not fully supported in all browsers. For mobile browsers we provided support by using a WebVR polyfill, a library that attempts to simulate the native browser experience although with less performance than native. Native support for mobile browsers should be available by the end of 2016.

For desktop, there is no polyfill, but experimental builds of browsers allow native support for Oculus Rift and HTC Vive. See [http://webvr.info/][1] for more details.
</div>

## 开始使用 WebVR

默认情况下，PlayCanvas不会初始化VR管理器，并且不会为了优化原因而加载其他的WebVR polyfill库。 您可以在项目的“渲染设置”中或在“新建项目”对话框中启用项目中的WebVR支持。

![渲染设置][2]

[1]: http://webvr.info/
[2]: /images/user-manual/vr/render-settings.jpg
[3]: /images/user-manual/vr/vr-view.png

