---
title: 词汇表
template: usermanual-page.tmpl.html
position: 26
---

以下是我们用来描述PlayCanvas引擎和工具的一些专业用词的总述。

## Application

The `Application` class is where all the useful engine stuff that your application needs to run is stored. It manages:

* The `Scene` which includes the scene hierarchy and scene settings
* The `ComponentSystem`s
* The input devices (keyboard, mouse, touch and gamepad)

The Application is accessible from any script function (`initialize`, `update` and so on) as `this.app`.

## 资源

一个资源就是一个数据的单位，通常来说资源从例如Blender或者3DStudio Max等应用程序中被创建导入到PlayCanvas中。资源可以是3D模型，动画，音频样本或者一个图像。资源可以被分配到某个[组件][component]的属性。比如，可以将一个模型资源分配到模型组件的’model’属性。查看更多请移步 [Source Assets][source-asset] 和 [Target Assets][target-asset].

## 资源通道

资源通道是一个运行在PlayCanvas服务器中转换一个上传了的[源资源][source-asset]的过程。比如：一个FBX场景文件用于一个或多个[目标资源][target-asset]可以为一个模型文件，一个材质和一些纹理。通道被设计为将上传文件转化到准备应用在游戏中的优化版本。将一个资源通过通道进行处理，从PlayCanvas编辑器或者控制面板中上传这个资源到PlayCanvas中。

## 属性

属性是一个[组件][component]的特性。属性通过界面控件（选择器、复选框、滑块）等呈现在PlayCanvas编辑器界面中。属性可以通过这些组件进行调整，当你通过点击编辑器的'Launch'按钮来运行游戏，更新的数据将会实时对游戏进行更新。

## 组件

组件描述了[实体][entity]的属性和功能。在PlayCanvas引擎中，对比使用长链的继承类定义对象，而是作为一个实体和组件的集合。

组件通过在PlayCanvas编辑器的组件按钮被添加到实体中，或者通过`ComponentSystem`对象在实时运行时添加。

## DOM

DOM(Document Object Model)是一种HTML文档展示的形式。Web浏览器提供了一个查询和修改DOM的界面。

## 实体

实体是在[PlayCanvas Engine][playcanvas-engine]中创建你的应用程序的重要一部分。通常一个实体将会作为一个单独对象存在在游戏或者应用程序中，即使一个单独对象可能由多个实体组成。

All Entities have a position, rotation and scale. They have a parent node from which they inherit a transform, and they may have child nodes to which they supply their transform.

## 框架

在PlayCanvas中，框架位于抽象的上层。框架由各种高级高级要素组成比如实体组件系统和PlayCanvas编辑器的交互接口。点击[API Reference][api-reference]查看更多。

## 小工具

一个小工具就是一个控制器，可以拖动鼠标来编辑实体的属性，通常用于对变换矩阵的编辑。一个小工具由三个颜色代码部分组成，每个部分都是三维空间中的一个轴。红色是X轴，绿色是Y轴，蓝色是Z轴。有时候也会有一个操作需要用多个轴的情况。比如：the translate gizmo features clickable plane icons to allow translation in two dimensions at once, on the X and Y, Y and Z, Z and X planes.

## 高清动态范围

高清动态范围或HDR指出颜色信息在通常0-1范围之外。在标准范围内，0表示黑色1表示显示设备能表现的最亮的颜色。在真实环境中并没有这样的局限性，太阳可以是周围天空几倍的亮度。

## 材质

一个材质就是一个资源类型，定义了在3D模型模型表面的属性。材质由一组属性组成比如漫反射、高光色和对纹理资产的引用比如漫反射贴图和高光贴图。在PlayCanvas编辑器中，编辑一个材质可以通过选择一个模型，在3D视角中点击这个模型的材质。

## PlayCanvas 编辑器

PlayCanvas编辑器是一个可视化编辑工具，可以被开发团队成员使用用于编辑[场景][scene].PlayCanvas编辑器被用于操作[实体][entity]。

## PlayCanvas 引擎

PlayCanvas引擎室一个JavaScript库，提供了所有用户在创建交互3D应用程序或者游戏时所需要的函数。

通过PlayCanvas引擎创建的程序将可以直接在模型web浏览器上运行，不需要使用第三方插件。

## 项目

A Project is a collection of [Scenes][scene] and [Assets][asset] that belongs to a single user. Usually a single Project will only contain resources for a single application, though you can export multiple applications from a single Project.

## 场景

一个场景是实体数据、艺术数据、代码数据的集合，可以作为一个单位被加载。一个场景可能为你的整个游戏，或者仅仅只是一个等级或者一部分你的游戏。

## Script

A Script is an [Asset][asset]. It is assigned to a Script [Component][component] on an [Entity][entity]. Scripts are written in JavaScript. They have several predefined functions that can be overridden:

* `initialize` - called once on instantiation
* `postInitialize` - called once after all script `initialize` functions have been called
* `update` - called every frame
* `postUpdate` - called every frame after all script `update` functions have been called
* `swap` - called when a script is 'hot reloaded' (due to a save event in the Code Editor)

## 源资源

源资源是一个已经被上传到PlayCanvas中的原始文件。作为PlayCanvas资源通道的输入数据，源资源创建了[目标资源][target-asset].

## 目标资源

目标资源是一种可以在实时运行时候被加载到游戏中的文件。在进入引擎时，将会被转换成合适的格式。目标资源通常为[源资源][source-asset]被上传和通过资源管道输入而产生的产物。

## Template

A Template is an [Asset][asset] that contains a piece of an [Entity][entity] hierarchy. It has a root Entity and can have any number of children. A Template is a reusable Entity that you can instantiate dynamically at runtime or place multiple instances of it in your [Scene][scene]. When you change the Template Asset all instances of the Template will also change.

## 贴图

A Texture is an [Asset][asset]. Typically, it contains image data that can be mapped onto 2D or 3D geometry. Textures can also be used to store other types of generic numeric data for processing on the GPU. PlayCanvas can load textures from standard web format images (JPG, PNG and GIF). The engine can also read super-compressed Basis textures that can be transcoded to natively supported GPU formats on load.

## 变换矩阵

变换矩阵是一个表示一组线性变换的数学矩阵。特别在平移，旋转和尺寸方面。这表示一个变换矩阵可以被用来表现位置，方向以及在对象的大小在3D空间中。在PlayCanvas引擎中每个[实体][entity]都有一个变换矩阵可以通过`getLocalTransform()`加载。

[api-reference]: /api/
[application]: #application
[asset]: #asset
[asset-pipeline]: #asset-pipeline
[attribute]: #attribute
[component]: #component
[dom]: #dom
[entity]: #entity
[framework]: #framework
[gizmo]: #gizmo
[high-dynamic-range]: #high-dynamic-range
[material]: #material
[playcanvas-editor]: #playcanvas-editor
[playcanvas-engine]: #playcanvas-engine
[project]: #project
[scene]: #scene
[script]: #script
[source-asset]: #source-asset
[target-asset]: #target-asset
[template]: #template
[texture]: #texture
[transformation-matrix]: #transformation-matrix

