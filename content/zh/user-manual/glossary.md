---
title: 词汇表
template: usermanual-page.tmpl.html
position: 50
---

以下是我们用来描述PlayCanvas引擎和工具的一些专业用词的总述。

<h2 id="app">应用程序</h2>
`pc.Application`类储存了运行用户的应用程序来说所有有用的引擎部件。包括了：场景图形层级结构，组件系统，键盘和鼠标处理程序。应用程序从`pc.script.create`通过传输初始化回调被用在所有用户脚本。

<h2 id="asset">资源</h2>
一个资源就是一个数据的单位，通常来说资源从例如Blender或者3DStudio Max等应用程序中被创建导入到PlayCanvas中。资源可以是3D模型，动画，音频样本或者一个图像。资源可以被分配到某个[组件][1]的属性。比如，可以将一个模型资源分配到模型组件的’model’属性。查看更多请移步 [Source Assets][2] 和 [Target Assets][3].

<h2 id="asset_pipeline">资源通道</h2>
资源通道是一个运行在PlayCanvas服务器中转换一个上传了的[源资源][4]的过程。比如：一个FBX场景文件用于一个或多个[目标资源][5]可以为一个模型文件，一个材质和一些纹理。通道被设计为将上传文件转化到准备应用在游戏中的优化版本。将一个资源通过通道进行处理，从PlayCanvas编辑器或者控制面板中上传这个资源到PlayCanvas中。

<h2 id="attribute">属性</h2>
属性是一个[组件][6]的特性。属性通过界面控件（选择器、复选框、滑块）等呈现在PlayCanvas编辑器界面中。属性可以通过这些组件进行调整，当你通过点击编辑器的“play”按钮来运行游戏，更新的数据将会实时对游戏进行更新。

<h2 id="component">组件</h2>
组件描述了[实体][7]的属性和功能。在PlayCanvas引擎中，对比使用长链的继承类定义对象，而是作为一个实体和组件的集合。

组件通过在PlayCanvas编辑器的组件按钮被添加到实体中，或者通过`ComponentSystem`对象在实时运行时添加。

<h2 id="dom">DOM</h2>
DOM(Document Object Model)是一种HTML文档展示的形式。Web浏览器提供了一个查询和修改DOM的界面。

<h2 id="entity">实体</h2>
实体是在[PlayCanvas Engine][8]中创建你的应用程序的重要一部分。通常一个实体将会作为一个单独对象存在在游戏或者应用程序中，即使一个单独对象可能由多个实体组成。

所有实体都拥有一个变换矩阵来提供它们的位置和方向；实体都有一个父节点，从这个父节点中实体继承了变形，或者也存在子节点来支持对实体的变形。

<h2 id="framework">框架</h2>
在PlayCanvas中，框架位于抽象的上层。框架由各种高级高级要素组成比如实体组件系统和PlayCanvas编辑器的交互接口。点击[API Reference][9]查看更多。

<h2 id="gizmo">小工具</h2>
一个小工具就是一个控制器，可以拖动鼠标来编辑实体的属性，通常用于对变换矩阵的编辑。一个小工具由三个颜色代码部分组成，每个部分都是三维空间中的一个轴。红色是X轴，绿色是Y轴，蓝色是Z轴。有时候也会有一个操作需要用多个轴的情况。比如：the translate gizmo features clickable plane icons to allow translation in two dimensions at once, on the X and Y, Y and Z, Z and X planes.

<h2 id="material">材质</h2>
一个材质就是一个资源类型，定义了在3D模型模型表面的属性。材质由一组属性组成比如漫反射、高光色和对纹理资产的引用比如漫反射贴图和高光贴图。在PlayCanvas编辑器中，编辑一个材质可以通过选择一个模型，在3D视角中点击这个模型的材质。

<h2 id="scene">场景</h2>
一个场景是实体数据、艺术数据、代码数据的集合，可以作为一个单位被加载。一个场景可能为你的整个游戏，或者仅仅只是一个等级或者一部分你的游戏。

<h2 id="editor">PlayCanvas 编辑器</h2>
PlayCanvas编辑器是一个可视化编辑工具，可以被开发团队成员使用用于编辑[场景][11].PlayCanvas编辑器被用于操作[实体][12]。

<h2 id="engine">PlayCanvas 引擎</h2>
PlayCanvas引擎室一个JavaScript库，提供了所有用户在创建交互3D应用程序或者游戏时所需要的函数。通过PlayCanvas引擎创建的程序将可以直接在模型web浏览器上运行，不需要使用第三方插件。

<h2 id="project">项目</h2>
一个项目是实体、资源以及代码的集合归属于一个单一用户。通常一个单一的项目将仅仅包含一个单一应用程序的资源，但用户可以从单个项目开发多个应用程序。

<h2 id="source_asset">源资源</h2>
源资源是一个已经被上传到PlayCanvas中的原始文件。作为PlayCanvas资源通道的输入数据，源资源创建了[目标资源][13].

<h2 id="target_asset">目标资源</h2>
目标资源是一种可以在实时运行时候被加载到游戏中的文件。在进入引擎时，将会被转换成合适的格式。目标资源通常为[源资源][14]被上传和通过资源管道输入而产生的产物。

<h2 id="transform">变换矩阵</h2>
变换矩阵是一个表示一组线性变换的数学矩阵。特别在平移，旋转和尺寸方面。这表示一个变换矩阵可以被用来表现位置，方向以及在对象的大小在3D空间中。在PlayCanvas引擎中每个[实体][15]都有一个变换矩阵可以通过`getLocalTransform()`加载。

<h2 id="hdr">高清动态范围</h2>
高清动态范围或HDR指出颜色信息在通常0-1范围之外。在标准范围内，0表示黑色1表示显示设备能表现的最亮的颜色。在真实环境中并没有这样的局限性，太阳可以是周围天空几倍的亮度。

[1]: #component
[2]: #source_asset
[3]: #target_asset
[4]: #source_asset
[5]: #target_asset
[6]: #component
[7]: #entity
[8]: #engine
[9]: /en/api/
[10]: #explorer
[11]: #scene
[12]: #entity
[13]: #target_asset
[14]: #source_asset
[15]: #entity

