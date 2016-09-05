---
title: 预加载和流媒体
template: usermanual-page.tmpl.html
---

当用户加载网页之后就能立刻进入到网页的应用程序这是在网页开发中十分重要的一步。在应用程序开始之前出现进度条以及告知用户需要等待将会导致用户的流失。PlayCanvas资源系统实现了多个功能帮助用户将加载过程简单化，将应用程序运行更快速更顺畅。

## 预加载

![Asset Properties][1]

在项目中的每一个资源都有一个被称为“预加载”的属性。在默认情况下，这个属性设置为开启。如果一个资源被标记为预加载那么这个资源将在应用程序的初始化阶段被自动下载和创建。

使用预加载确保资源在应用程序被开启的第一时间内被呈现。这将预防任何资源在应用程序开始之后突然出现。

## 流媒体

![Streaming][2]

如果在场景中存在一个实体并且这个实体引用了一个资源，当这个实体被启用时，加载请求将会被开启。如果实体在场景中被启用，那么当应用开启时加载请求将会立刻启动。

所有组件将会妥善处理动态加载的资源，并且当资源加载完成时开始正常运行。当一个流动资源被动态加载时，用户将会经常看见弹出框。当被加载模型就会出现，即便这个模型并没有包含材质和纹理。

## 资源标签

在很多情况下，用户都不希望当资源被加载时资源被弹出。加载一组资源然后再集体显示它们，为了达到这个效果，用户可以使用资源标签创建一组资源，然后用户可以在使用资源之前集体加载有着相同标签的资源。

以下是一个例子显示了用户如何使用标签加载一组资源。

```javascript
var assets = app.assets.findByTag("level-1");
var count = 0;

for (var i = 0; i < assets.length; i++) {
    assets[i].once("load", function () {
        count++;
        if (count === assets.length) {
            // asset loading complete
        }
    });
    app.assets.load(assets[i]);
}
```

[1]: /images/user-manual/assets/preloading-and-streaming/asset-properties.jpg
[2]: /images/user-manual/assets/preloading-and-streaming/streaming.gif

