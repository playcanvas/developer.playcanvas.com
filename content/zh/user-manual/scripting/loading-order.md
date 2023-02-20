---
title: 加载顺序
layout: usermanual-page.hbs
position: 7
---

总的来说所有的脚本都会在程序的开始部分被加载。加载顺序是由你可以从项目的主编辑器菜单或场景访问的设置决定的。

![加载顺序][1]

加载顺序面板会显示你的所有被标记为`预加载` 的脚本并把它们按加载和运行的顺序排列。

![加载顺序列表][2]

你可以拖动并移动单个脚本以改变它在排序中的位置。

当脚本第一次被加载时，它们会被立即执行，这意味着第一个被加载的脚本也会是序列中第一个被执行的。然而脚本的加载顺序**不会** 影响脚本组件中的脚本方法执行的顺序。例如，在同一个实例上的脚本对象们的初始化部分会按照他们在实例上的悬挂顺序被调用，而不是按照加载顺序。

## Preloading

Like other assets in PlayCanvas by default a script asset is marked as `preload`. This means that it will be loaded before the application starts. If you disable preloading on a script it will not be loaded under normal circumstances. This way you can include a script in your project but prevent it from loading by unchecking `preload`. You can trigger a non-preloading script to load dynamically by using the regular asset API. e.g. `this.app.assets.load(asset);`
It is possible to subscribe to dynamic changes to script registry:
```javascript
this.app.scripts.on('add', function(name, scriptType) {
    console.log('script', name, 'has been loaded');
});
```

## Concatenation

通常情况下当您发布或导出您的应用程序时所有预加载了的脚本会被连接成一个单独的脚本文件。这可以通过减少需要加载的所有脚本的请求数来优化装载步骤。

[1]: /images/user-manual/scripting/script-loading-order.jpg
[2]: /images/user-manual/scripting/loading-order-list.jpg
