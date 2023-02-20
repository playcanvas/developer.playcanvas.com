---
title: Optimizing WebXR applications
layout: usermanual-page.hbs
position: 5
---

## 简介

A high and consistent framerate is critical for making an enjoyable XR experience. When creating VR/AR content, it is more important than ever to test and optimize early and maintain the target framerate throughout development.

For AR experiences, framerates must be managed carefully as world, image and face tracking effects sometimes incur significant performance costs. This is in addition to the typically performance-constrained mobile hardware most users have access to.

For VR experiences, rendering is especially expensive due to the fact that the scene must be rendered once for each view (eye). While PlayCanvas is highly optimized to ensure VR rendering doesn't fully duplicate effort, stereo rendering remains more expensive than mono rendering.

In addition, devices like the Oculus Rift and HTC Vive demand high frame rates, like 75Hz or 90Hz, further increasing the need for highly efficient rendering. Mobile VR, whilst not requiring high framerates, suffer from the lack of native support for distortion effects, incurring additional overhead on a JavaScript and WebGL layer.

PlayCanvas, however, includes a number of features specifically designed to let your application do more in less time.

### Runtime lightmap generation

Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modelling tool or you can use PlayCanvas's built in Runtime Lightmap Generation.

查阅更多关于 [运行时生成光照贴图][1]的信息。

### Cautious use of real time shadows

For similar reasons to dynamic lights, dynamic shadows also have a per-frame runtime cost. Omni lights, in particular, have to render the scene 6 times to generate shadows. You should avoid having many lights casting dynamic shadows.

### Watch your fill rate and overdraw

填充率是指应用于屏幕上每个像素的着色器操作数。 如果你片段着色器计算量十分高(例如大量的灯光和复杂的材料)和设置了高分辨率(例如手机具有高设备像素比率)，那么你的应用程序将花费太多的时间渲染场景以维持高帧速率。

过度绘制指的是被接近摄像机的其他几何体遮挡的几何体覆盖了多少像素。 过多的绘制显示您正在浪费GPU处理，试图对不可见的像素进行绘制。

使用[WebGL Insight][2]这样的扩展可以帮助您可视化过度绘制的情况。

### Garbage collection stalls

Web浏览器有对不再使用的Javascript对象进行垃圾回收的功能。 PlayCanvas引擎被设计为最小化运行时分配，你应该尝试在代码中做同样的事情。 预分配向量和其他对象，并重新使用它们，以便每一帧不会出现大量的对象创建和销毁。

### Profiling Tools

PlayCanvas自带一个内置的分析工具。 在编辑器中使用Launch Profiler按钮运行具有分析活动的应用程序。 [阅读更多关于profiler的信息][3]。

### General optimization tips

可用的[更多优化准则][4]。

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://github.com/3Dparallax/insight
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/
