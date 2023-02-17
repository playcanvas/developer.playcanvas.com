---
title: Layers
layout: usermanual-page.hbs
position: 4
---

## Layers Overview

レイヤーによって、アプリケーションのレンダーループをカスタマイズできます。
レイヤーを使用すると、高度なレンダリング機能を実装できます。たとえば：

* modify the order in which your meshes are rendered
* set cameras to render only some meshes
* set which lights affect which meshes

PlayCanvasアプリケーションは、常に表示されているデフォルトの一連のレイヤーによって作成されています。独自のレイヤーを作成し、特定の要件に適合するよう再整理することが可能です。

基本的なレベルにおいて、レイヤーはレンダリングをおこなうメッシュのリストです。各レイヤーは2つのサブレイヤーに分けられます：OpaqueとTransparentです。メッシュがレイヤーに追加されると、レイヤーはメッシュ上のマテリアルを透過してレンダリングするかどうかに応じてメッシュを2つのサブレイヤーのいずれかに保管します。これは、透過サブレイヤーは多くの場合、透過サブレイヤーとは異なる方法でソートされるためです。

## Rendering Order

There are three factors that determine the order in which meshes are rendered.

### Camera Priority

Priority of the camera is the main factor that controls the order in which the meshes are rendered. Each camera has a priority assigned to it, and cameras with smaller values for priority are rendered first.

Each camera also has a list of layers set up on it, which controls which layers the camera renders. Their order is described in the next section.

![Camera Layers][6]

### Layer Composition

Next is order of layers in the application. Each application contains a `pc.LayerComposition` object which is available in your application as `this.app.scene.layers`. The layer composition determines the order of all sub-layers. The ordering is based on the sub-layer not on the layer so that you can, for example, render all the opaque sub-layers first, then all the transparent sub-layers afterwards.

**注**: ワールドレイヤーの後にレンダリングされるレイヤー内にモデルコンポーネントを設置しても、ワールドレイヤー内のすべてに優先してモデルをレンダリング**するわけではありません！** モデルのレンダリングに使用されるスタンダードマテリアルには、`depthTest`というプロパティがあります。このプロパティがtrueの場合（デフォルト）、モデルの各ピクセルがレンダリングされる前に、このピクセルの前に何かないかGPUがテストして確認します。そのピクセルがそれよりも前の層深度の中に描かれても、テストは可視的なピクセルのみが描かれる点を確認します。メッシュをレンダリングする際にカメラからの距離を無視したい場合には、マテリアル内の `depthTest`を非有効化してください。

### Sort Modes

各サブレイヤーにはソートモードがあります。各フレームで、サブレイヤー内のメッシュはそのソートモードに応じてソートされます。これは、サブレイヤーがレンダリングされる際の、メッシュがレンダリングされる順序を決定します。

* **Material / Mesh** (`pc.SORTMODE_MATERIALMESH`) - This is the default mode for opaque sub-layers. Mesh instances are sorted to minimize switching between materials and meshes to improve rendering performance.
* **Back-to-front** (`pc.SORTMODE_BACK2FRONT`) - This is the default mode for transparent sub-layers. Mesh instances are sorted back to front. This is the way to properly render many semi-transparent objects on different depth, one is blended on top of another.
* **Front-to-back** (`pc.SORTMODE_FRONT2BACK`) - Mesh instances are sorted front to back. Depending on GPU and the scene, this option may give better performance than `pc.SORTMODE_MATERIALMESH` due to reduced overdraw.
* **Manual** (`pc.SORTMODE_MANUAL`) - This is the default mode for UI or 2D layers. Mesh instances are sorted based on `drawOrder` property. The Element Component and Sprite Component should be placed in layers with this sort mode.
* **None** (`pc.SORTMODE_NONE`) - No sorting is applied. Mesh instances are rendered in the same order they were added to a layer.

## Default Layers

PlayCanvasアプリケーションは、一連のデフォルトレイヤーによって作成されています。これらのレイヤーの場所は変更しないでください。正しい場所に存在しないと、エンジンの一部の機能が正常に作動しなくなります。デフォルトの順序は以下のとおりです：

![Default Layers][1]

1. **World (Opaque)** - Used to render components that are not transparent and most opaque component meshes.
1. **Depth (Opaque)** - Used to capture the color or the depth buffer of the scene, see [Depth Layer][7].
1. **Skybox (Opaque)** - Used to render the skybox. It is rendered after the World (Opaque) to reduce overdraw.
1. **World (Transparent)** - Used to render components that are transparent and other transparent component meshes.
1. **Immediate (Opaque)** - Used to render immediate mode meshes. e.g. `app.renderLine()`.
1. **Immediate (Transparent)** - Used to render immediate mode meshes. e.g. `app.renderLine()`.
1. **UI (Transparent)** - Used to render Element components. All Element components are transparent, so the Opaque sub-layer is not used.

## Using Custom Layers

デフォルトのレイヤーには、エンジンの既存の機能が実装されています。ただし、独自のレイヤーを作成し、コンテンツをレンダリングする順序をカスタマイズしてこそ、エンジンを十分に活用することができます。

### Create a layer

レイヤーの管理は、エディターの**Settings**セクション内**LAYERS**パネルからおこないます。

![Creating a layer][2]

Layersセクションで、作成するレイヤーの名前を入力し**Add Layer**をクリックします。ボタンの下に利用可能なレイヤーのリストが表示され、新規作成したレイヤーも含まれています。

### Setting the sort mode

![Edit a layer][3]

レイヤーリストで、各サブレレイヤーのソートモードを選択できます。
レイヤーを拡張し、ドロップダウンメニューからソートモードを選択してください。

### Choosing the layer order

![Add layer][4]

レイヤー構成にサブレイヤーを追加するには、**ADD SUBLAYER**を選び、追加するサブレイヤーを選択します。レイヤーがRender Orderリストに表示されたら、各サブレイヤーをドラッグすれば順序を変更できます。

### Rendering entities in layers

メッシュをレンダリングするコンポーネントにはすべて`layers`プロパティがあり、このプロパティはメッシュをどのレイヤーやサブレイヤーに追加するかの決定に使用されます。これらのコンポーネントには、モデル、エレメント、スプライト、パーティクルシステムなどがあります。カメラコンポーネントとライトコンポーネントにも`layers`プロパティがあり、それぞれどのレイヤーをレンダリングするか、または照らすかを決定します。

![Layer Components][5]

*Note:* The model is assigned to the Test Layer. In order for it to be rendered, the camera must include Test Layer in its layer list. In order for it to be lit, the light must include Test Layer in its layer list too.

### Recommended setup

Your scene typically contains many entities, which render meshes. It is recommended for each of these to be on exactly one layer. In most cases, these would be on the World layer, but for more control, you can assign them to layers such as Terrain, Buildings, Characters.

A new scene by default contains a single camera, and this is all that is needed in many applications. Additional cameras are useful for cases such as cutting between different cameras in the scene, or when rendering picture in picture or split screen, or when rendering the scene into a texture. 

When you add an additional camera, these are the recommended steps:
1. Set the priority of new and existing cameras to control the order in which they render.
2. Set up the layers of the newly created camera to specify which layers it renders. For example you might render a top down map camera and only want Terrain and Building layers in it, but not Characters.
3. If your camera renders into a texture, use a script to assign a render target to the `renderTarget` property of the camera.

[1]: /images/user-manual/graphics/layers/default-layers.jpg
[2]: /images/user-manual/graphics/layers/new-layer.jpg
[3]: /images/user-manual/graphics/layers/edit-layer.jpg
[4]: /images/user-manual/graphics/layers/add-sub-layer.jpg
[5]: /images/user-manual/graphics/layers/test-layer-components.jpg
[6]: /images/user-manual/graphics/layers/camera-layers.jpg
[7]: /user-manual/graphics/cameras/depth-layer