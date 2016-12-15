---
title: 在PlayCanvas中应用WebVR
template: usermanual-page.tmpl.html
position: 1
---

在项目中启用WebVR之后，有一个小的API可供您在脚本中使用，以管理连接到应用程序和进入和退出VR的VR显示。

## 启动VR

用于输入VR的API位于相机组件上。 要启动VR视角，您应该使用`enterVr`方法。

```javascript
this.entity.camera.enterVr(function (err)) {
    if (err) {
        console.error(err); // could not enter VR
    } else {
        // in VR!
    }
});
```

## 退出VR

退出VR可以通过两种方式触发。 首先，用户可能通过一些外部进程退出VR。 例如，点击浏览器上的后退按钮。 第二，你可以使用`exitVR`方法触发相机方法直接退出VR。

```javascript
this.entity.camera.exitVr(function (err) {
    if (err) {
        console.error(err); // could not exit VR
    } else {
        // not in VR!
    }
});
```

## 在VR中的相机位置

当您在VR中演示时，相机的位置和方向将被来自头戴式显示器的数据覆盖。 在某些情况下，例如当您使用Google Cardboard样式设备时，可能需要偏移相机的位置。在这种情况下，您应该向相机中添加父实体，并将您的翻译应用于此实体。

![Camera 偏移量][1]

## 魔术窗口样式VR

魔术窗口是一种当你不通过立体声头戴式显示器观看您的场景的体验。 相反，您可以使用平板电脑或手机设备在场景中创建“魔术窗口”视图。 要在PlayCanvas中启用此类型的视图，您可以在相机上设置VrDisplay属性，而无需调用`enterVr`。

```javascript
if (this.app.vr.display) {
    this.entity.camera.vrDisplay = this.app.vr.display;
}
```

### API 概述

高级用户可能希望了解更多关于可使用的VR API。 然而，在大多数情况下，您只需用到上面的用例。

## pc.VrManager

如果在您的应用程序中启用了VR，则场景中会创建`pc.VrManager`的实例，这个实例可以通过您的应用程序的`this.app.vr`中获得。 VrManager用于访问和管理连接到应用程序的显示器。 VrManager类的主要目的是提供已连接的显示列表以及触发事件以警告新显示的应用程序。

 [pc.VrManager][2] 的文档.

## pc.VrDisplay

对于每个能够显示VR内容的显示器，`pc.VrManager`将在其显示列表中包含一个`pc.VrDisplay`。 `pc.VrDisplay`用于两个主要目的。 首先，作为输入设备，它提供相机的位置和方向，这通常作为应用于其附接的相机的视图和投影矩阵提供。 第二，作为输出设备，它可以是场景被呈现的位置，这被称为“呈现”。 当呈现Vr显示时，意味着VR内容正在显示器上显示。 要开始展示使用下面描述的`enterVr`方法。 要将显示器用作输入设备而不显示，请参阅下面的Magic Window VR部分。

如果您对基础WebVR API很熟悉，则你已经知道`pc.VrDisplay`类包含了`navigator.VRDisplay`对象。

 [pc.VrDisplay][3] 的文档。

## 为什么我无法自动启用VR模式?

启动WebVR需要通过*用户操作*触发浏览器方法。 这意味着它必须响应于按键按压，鼠标点击或触摸事件。 因为这个原因，我们没有办法在加载页面时立即进入VR。

[1]: /images/user-manual/vr/using-webvr/camera-offset.jpg
[2]: /api/pc.VrManager.html
[3]: /api/pc.VrDisplay.html

