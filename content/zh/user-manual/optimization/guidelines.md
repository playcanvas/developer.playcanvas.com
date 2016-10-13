---
title: 优化指南
template: usermanual-page.tmpl.html
position: 1
---

为了使您的PlayCanvas app达到最好的标准，这里有一些提示和技巧。

## JavaScript

* 调用new方法来分配一个新的JavaScript对象(特别是向量，矩阵以及四元数)呈现了动态分配并且消耗巨大。因此用户需要在脚本的initialize函数中预先配置对象，并且在update函数中重复利用这些对象。这也可能产生将会导致系统周期性冻结的垃圾回收机制。

## Graphics

* 当纹理的各向异性的值提高，视觉效果提高了但是性能下降。注意将视觉效果和性能达到一个平衡点。
* 寻找机会将多个纹理包添加到单个图像中。比如，灰度不透明贴图可以储存在漫反射贴图的alpha频道。或者一个灰度不透明可以储存在一个镜面贴图的alpha频道。这个将会产生更多的显存使用。
* 请注意在场景中的动态光源的数量，请始终保持在最少数量。
* 允许在动态光源的阴影贴图消耗是十分巨大的。点光源阴影的消耗更高。对于各个制造阴影的点光源，场景必须被渲染6次将其放置在阴影贴图中。
* In PlayCanvas, a mesh instance is a draw call (a command to draw an individual graphical primitive). Each draw call requires some effort on the CPU to dispatch to WebGL. Therefore, keeping the number of draw calls low is advisable, particularly on mobile. You can see a list of the draw calls for a particular Model by selecting the model asset and viewing it in the Inspector. 100-200 draw calls is a rough target for low end mobile devices. High end desktop machines on the other hand can process thousands every frame and still maintain 60fps.
* 注意在您的程序中允许'Use Device Pixel Ratio’。这个将会导致您的PlayCanvas APP使用设备的原始分辨率来减少像素化但是这也会造成更多效素被填充这这将对帧速率产生一个严重的影响。
* 保持在场景中的混合网格实例在最少数量。 混合网格将被延迟直到所有的不透明网格实例被处理完成以及提交从后往前的摄像机的深度指令。此结果在像素中将会被多次填充并且可以造成许多渲染状态的改变从混合网格不能被材质储存开始。
* 尽量保持通过app生成的着色器的数量越少越好。着色器必须被编译并且和需求相对应，将会导致app的启动被延迟并在对影响帧速率。如果材质A有一个自发光贴图，材质B没有，各自的着色器将会被产生。如果用户设置一个黑色的自发光贴图在材质B，材质之间将可以分享同一个着色器。这将减少了在场景中材质的数量并且减少了被生成的着色器的数量。
* 后期效果可以着极大的消耗，因此在使用之前请多考虑。这可以占用极大的内存消耗在像素填充方面。
* Only enable frustum culling on a camera component if, on balance, it is likely to save more performance than it costs to calculate visiblity. If you are rendering a scene where all mesh instances are always visible, definitely disable this option.
* 
* Enabling backface culling on a material will be cheaper than disabling it. Generally speaking, backface culling reduces the number of pixels that the GPU has to fill. This is the default setting for newly created materials.

## Physics

* 碰撞网格不需要被设置成和可渲染网格同等等级的细节。建议您为碰撞体设置低像素的网格。
* 在场景中保持尽量少的动态光源物体的数量，特别是在移动手机中。

