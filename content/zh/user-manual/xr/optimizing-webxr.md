---
title: Optimizing WebXR applications
template: usermanual-page.tmpl.html
position: 3
---

## 简介

A high and consistent framerate is critical for making and enjoyable XR experience. When creating VR/AR content it is more important than ever to test and optimize early in development and maintain the target framerate throughout development.

Rendering WebXR is expensive due to the fact that the scene must be rendered once for each view (eye). PlayCanvas engine contains many optimizations to ensure that VR rendering doesn't not duplicate too much effort, but stereo rendering is still more expensive that mono rendering. In addition, devices like the Oculus Rift and HTC Vive demand higher frame rates like, 75Hz or 90Hz, which means there is even less time to render a frame. Mobile VR, whilst it doesn't have the high frame rates, may have another issue which is the lack of native support for the distortion rendering means that this post-process stage is done in Javascript and WebGL adding additional overhead.

但是，并不是所有方法都不可行了。 PlayCanvas中包含许多专门设计的功能，可让您的应用程序在更短的时间内执行更多操作。

### 运行时生成光照贴图

Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modelling tool or you can use PlayCanvas's built in Runtime Lightmap Generation.

查阅更多关于 [运行时生成光照贴图][1]的信息。

### 谨慎地开启实时阴影功能

由于相似的原因，动态阴影也具有每帧运行时成本。 特别是点光源所产生的阴影，它需要对场景进行6次渲染，以产生阴影。 你应该避免让许多灯光投射动态阴影的情况出现。

### 查看您的填充率和绘制量

填充率是指应用于屏幕上每个像素的着色器操作数。 如果你片段着色器计算量十分高(例如大量的灯光和复杂的材料)和设置了高分辨率(例如手机具有高设备像素比率)，那么你的应用程序将花费太多的时间渲染场景以维持高帧速率。

过度绘制指的是被接近摄像机的其他几何体遮挡的几何体覆盖了多少像素。 过多的绘制显示您正在浪费GPU处理，试图对不可见的像素进行绘制。

使用[WebGL Insight][2]这样的扩展可以帮助您可视化过度绘制的情况。

### 垃圾回收机制

Web浏览器有对不再使用的Javascript对象进行垃圾回收的功能。 PlayCanvas引擎被设计为最小化运行时分配，你应该尝试在代码中做同样的事情。 预分配向量和其他对象，并重新使用它们，以便每一帧不会出现大量的对象创建和销毁。

### 分析工具

PlayCanvas自带一个内置的分析工具。 在编辑器中使用Launch Profiler按钮运行具有分析活动的应用程序。 [阅读更多关于profiler的信息][3]。

### 一般的优化提示

可用的[更多优化准则][4]。

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://github.com/3Dparallax/insight
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/

