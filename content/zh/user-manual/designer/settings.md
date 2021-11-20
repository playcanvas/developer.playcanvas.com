---
title: 设置
template: usermanual-page.tmpl.html
position: 7
---

设置面板可以调整项目的各项参数。点击编辑器左下角的齿轮按钮打开(在[工具栏][1]上)

<img src="/images/user-manual/editor/settings/cog.jpg" style="display: inline; vertical-align: middle;">

## 编辑器

这些是关于编辑器的个性化设置。

#### 网格

可以在这里编辑场景中的地面网格参数：每条栅格线的距离和总共有多少栅格。

#### 吸附

这是当吸附状态打开时，产生坐标位置吸附的最小距离。

#### 摄影机裁切

在这里设置编辑器的近裁切面和远裁切面。

#### 清空色

这是摄影机擦除画面时所使用的颜色。

#### 图标尺寸

这里设置不同组件在 3D 视口中的现实大小。如果设置为 0 的话，场景中就看不到图标了。

#### 本地服务器

这里指向的是代码的加载 URL，如果使用 Launch Local，游戏将从这里加载代码。

#### Locale

The locale that you can preview in the Editor and when you Launch your application. This is only visible to you not other members of your team. This is used when you
have enabled Localization for Text Elements and when you use Localized Assets.

## 物理设置

物理设置会决定场景中的刚体组件行为。

#### 启用

当这项启用时，3D 物理引擎将会包含在应用之中。

#### 重力

重力是在每一帧中都施加在刚体上的加速度。在默认情况下，设置为 -9.8 米每秒平方，这基本上等同于地球重力。如果需要制作太空类型的作品，那么可以考虑把这个数值设定为 0 (无重力)。

## 渲染

渲染设置影响画面相关的若干特性。

#### 环境颜色

环境中背景照明的颜色。PlayCanvas 允许用户创建 方向光、点光源、聚光灯，这些灯光将会在对象表面形成直接光照并被吸收。但是在现实环境中，光线会在物件之间反射。我们称之为间接照明。一个全局的背景照明是对间接照明的粗糙近似，相当于一个从所有方向均匀射出的灯光。全局背景颜色将会与环境参数相乘应用在材质上，影响最终的物件颜色。

不过，如果你使用了天空盒以及物理学材质，环境颜色将不再起作用。

#### 天空盒

天空盒是一张 [cubemap][3] 资源，用于渲染 3D 场景的背景。使用 6 张不同方向的 2D 图片来呈现出无穷远处的环境配合场景中的 3D 模型。

想要添加一个天空盒，首先创建一份 Cubemap 资源然后指定给设置面板中的 cubemap 槽位。

不过，如果你使用了预过滤 Cubemap，天空盒将会被默认作为所有物理学材质的反射用环境图。

#### 天空盒亮度

这里的滑动条控制天空盒的亮度，可选的范围从 0 (完全漆黑) 到 32 (最为明亮)。

#### 天空盒 Mip

当使用预过滤天空盒的情况下，可以选择呈现的天空球 mip。每一层级的 mip 都会比上层看起来更加的模糊。你可以选择更加模糊的天空盒来满足艺术设计上的需求。

#### 色调映射

色调映射是一种压缩高动态范围色彩 (HDR) 至有限动态范围 (显示设备可呈现值) 的处理过程。有两种色调映射的方案。

* **线性：** 根据曝光值缩放 HDR 色彩。
* **胶片：** 更复杂的曲线，在高光位置更加柔和，同时暗部的细节也有更多保留。

线性色调映射为默认开启，它计算简单 (颜色*曝光)。可以设置曝光值来快速的调节画面明暗。注意这个参数与 Photoshop 的 brightness 并不是一回事，请考虑做为输入的亮度数据可能是大动态范围的。譬如如果我们有一个灯光的强度设定为 8，那么当曝光系数设定为 0.5 时，其亮度仍然达到 4。因此并不会因为调整它而使得画面直接变暗。

胶片色调映射通常适用于高对比度的环境中，譬如场景由阳光照明或室内场景中有明亮的灯光靠近墙壁或天花板这样的环境。它将会非常流畅的将超高亮度的部分调整到更加感官真实的状态 (我们的眼睛以及银盐胶片也会有色调映射，我们肉眼无法看到物理线性的亮度)。同时，每个摄影师都会告诉你：没人喜欢刺眼的亮斑和死黑的暗部出现在照片里。胶片色调映射能帮你把这些细节去掉。

#### 曝光

曝光值调整整个场景的视觉亮度。

#### Gamma 校正

计算设备屏幕并不是为输出物理线性亮度，而是为了还原感知线性(sRGB)信号而设计。但是为了正确的进行光照计算，贴图颜色必须转换为物理学线性，同时计算结束之后的湖面也需要转换回 sRGB。在 gamma 校正后的环境下进行渲染，可以减少丑陋的过饱和高光并可以在照明后更好的保持原始色彩，因此我们建议在同场情况下都将其开启。下面的对比图片中有色进行了 gamma 校正而左侧则略过了 gamma 校正。

![Gamma 校正][4]

更多关于 gamma 校正的资料，可以阅读这个[GPU Gems 章节][5]。

#### 雾

雾的类型参数可以用来控制场景中的环境氛围。这里有个关于雾的例子：

雾有如下的种类：

* None - 没有雾
* Linear - 雾的浓度会线性增加从雾的开始距离到截止距离
* Exp - 雾从视野位置开始指数增加
* Exp2 - 雾从视野位置开始指数平方增加

#### 颜色

雾的颜色。雾的颜色会和其它表面的颜色随着雾的逐渐加强而完全融合在一起。

#### 起始距离

从视点位置开始多少距离开始产生雾的影响。

#### 截止距离

从视点距离开始，当雾达到最大值的距离。任何比这个距离更远的物件都将消失在雾中。

#### 雾浓度

雾的浓度决定了雾以多快的 Exp 或 Exp2 速率覆盖场景。数值越大雾越浓厚。雾的密度必须为正值。

#### 分辨率

控制应用的宽度和高度。可以选择如下的分辨率模式：

* 自动 - 分辨率将会始终和画布保持一致
* 固定 - 分辨率将会示众固定于 宽度 x 高度 像素

#### 填充模式

填充模式将会控制游戏画面随着画布变化的方式，有如下的几种模式：

* None - 画布将会和分辨率的宽高设定保持一致。
* Keep aspect Ratio - 画布将会扩展填充窗口以保持正确的宽高比。
* Fill window - 画布将会拉伸填满整个窗口。

#### 设备像素比例

当开启时，画布分辨率将会在计算时考虑设备的像素纵横比。

#### 透明画布

在主画布上开启半透明混合模式。

#### 保持绘图缓冲

在绘制 WebGL 内容时启用缓冲区保护，以方便和 HTML 元素混合呈现。

## Layers

Manage rendering layers and their render order. You can find out more about layers [here][10].

## 音频

#### 使用传统音频

开启传统音频组件。仅当需要兼容早期项目时开启，现在应弃用该组件。

## 光照图

#### 尺寸缩放

场景中所有贴图尺寸的缩放控制。

#### 最大分辨率

允许创建的最大光照图尺寸。

## Batch Groups

Here you can create and manage Batch Groups for the Project. You can assign [Model][7] components and [Element][8] components to Batch Groups and the engine will attempt to reduce draw calls by merging the mesh instances of objects in the same group together. See more on Batching [here][9].

## 加载屏幕 (仅用于 ORG 用户)

在这里你可以设定脚本创建独立的加载屏幕。点击 *Create Default* 创建新的加载屏。更相信的信息请阅读加载屏幕的相关文档。[点这里][6]

## External Scripts

Here you can specify the URLs of external scripts you would like to include in your application. These URLs are added as &lt;script&gt; tags in the main HTML page of the application before any other script is loaded.

## Input

Here you can enable or disable various input devices for your application.

## Localization

Here you can specify JSON Assets that contain localization data. Assets in this list will automatically be parsed for localization data when loaded. These are used to localized your Text Elements.

You can click CREATE NEW ASSET to create a new localization asset. You can then add data to that asset for the desired locale.

Read more about localization [here][11].

## 资源任务

#### 自动运行

当资源上传后自动进行资源流水线处理。

#### 纹理POT (二次方)

当贴图上传后导入为最接近的2的整倍数尺寸。

#### Create Atlases

When a new image is uploaded it will be created as a Texture Atlas instead of a Texture.

#### 搜索相关资源

当资源更新至新版本后，搜索所有相关的资源 (譬如材质和贴图) 并更新。如果不启用则只检查同目录内的相关资源。

#### 模型覆盖

当导入新的场景 (譬如一个FBX) 时，该选项决定场景中的模型是否被覆盖为新版。

#### 覆盖动画

当导入新的场景 (譬如一个FBX) 时，该选项决定场景中的动画是否被覆盖为新版。

#### 覆盖材质

当导入新的场景 (譬如一个FBX) 时，该选项决定场景中的材质是否被覆盖为新版。

#### 覆盖贴图

当倒入新的场景 (譬如一个FBX) 时，该选项决定场景中的贴图是否被覆盖为新版。

[1]: /user-manual/designer/menus-and-toolbar
[2]: /images/user-manual/editor/settings/cog.jpg
[3]: /user-manual/assets/cubemaps
[4]: /images/user-manual/editor/settings/gamma-correction.jpg
[5]: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear
[6]: /user-manual/designer/loading-screen
[7]: /user-manual/packs/components/model
[8]: /user-manual/packs/components/element
[9]: /user-manual/optimization/batching
[10]: /user-manual/graphics/layers/
[11]: /user-manual/user-interface/localization

