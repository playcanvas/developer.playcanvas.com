---
title: Batching
layout: usermanual-page.hbs
position: 4
---

Batching is the process of combining multiple mesh instances together into a single mesh instance, so that they can all be rendered in a single GPU draw call. PlayCanvas provides a handy feature on the [Model][7], [Sprite][9] and [Element][10] components that lets you assign these components to batch groups which give the engine hints on how to combine meshes to reduce the overall draw call count.

メッシュインスタンスを組み合わせることができるか、エンジンが確認するためのルールが多数存在しています。最初のルールは、すべてのメッシュインスタンスが同じマテリアルを共有する必要があるというものです。

一般的なバッチングの使用例は以下のとおりです：

* Combine together static geometry -- e.g. environments -- into a single mesh instance or multiple large instances to reduce draw calls, but still support camera culling.
* Combine together dynamic geometry -- e.g. a set of moving objects -- into a single mesh instance with dynamic properties that are applied on the GPU.

<div class="alert-info">
    The use of batching is currently not compatible with <a href="/user-manual/graphics/lighting/runtime-lightmaps/">runtime lightmaps</a> due to each lightmapped object requiring its own unique lightmap texture.
</div>

## Creating Batch Groups

![Creating Batch Groups][1]

バッチグループは[シーン設定パネル][6]のバッチグループセクションから作成できます。
各バッチグループには多くのプロパティがあり、これらのプロパティはこのバッチグループからバッチを作成する方法についてのヒントをエンジンに示すために使用されます。

### Batch Group Properties

* **Name**: Used to differentiate different batch groups, ideally it would describe the kinds of objects that this batch group will have. This name is available at runtime to retrieve the group.
* **Dynamic**: If enabled then objects inside the batch group can still move/rotate/scale. You can use this for objects that are similar to each other and use the same materials e.g. bullets. Static groups use less runtime resources so you should disable Dynamic if the contents of batch group will not move.
* **Max AABB size**: The maximum size of any one side of the bounding box that contains all objects in the batch group at the time when the batches are created. If the set of meshes are larger than the maximum size it will create multiple batches to be rendered. A larger bounding box will render in less draw calls, but will work less well with camera culling.

## Adding a component to a Batch Group

![Selecting Batch Groups][2]

モデルコンポーネントにはバッチグループプロパティがあり、このプロパティを使用してモデルをバッチグループに割り当てます。

## Rules for combining mesh instances

エンジンがメッシュインスタンスを結合できるかのルールは非常に複雑ですが、簡潔にいえば1つのバッチに属するすべてのメッシュインスタンスは、以下に従う必要があります：

* Have the same Batch Group ID
* Have the same material
* Have the same shader parameters
* Be within a bounding box with no side larger than the Max AABB Size
* Be in the same layer
* Each batch has a maximum vertex count of 65535
* For dynamic batches there is a maximum number of movable mesh instances. This hardware dependent but has a maximum of 1024.

バッチグループにすべてのルールにしたがうわけではないコンポーネントまたはメッシュインスタンスが含まれる場合、バッチグループは複数のバッチを作成し、すべてのルールにしたがうメッシュインスタンスを含む個別のバッチが複数作成されます。

## Trigger re-batching

Based on Batch Groups the engine creates an optimized version of mesh instances. Further changes to many properties of the original mesh instances are not reflected in the optimized versions. To allow for good performance by using batching, while still allowing some further updates, you can request the engine to rebatch individual Batch Groups after you make changes to the original mesh instances. This is often useful with User Interface element components, where you might want to set up batching, but still need to do infrequent updates. Note that re-batching a group is a potentially expensive operation. In many cases, the impact of rebatching can be minimized by separating elements that need updating to separate Batch Group.

Here is an example of a simple script. The script updates `textureAsset` on an element, and marks the Batch Group as dirty.

```javascript
// change textureAsset on element
element.textureAsset = this.hoverAsset;

// if this element has Batch Group set, mark it dirty to rebuild the group in the next frame
if (element.batchGroupId)
    this.app.batcher.markGroupDirty(element.batchGroupId);
```

## Example - Batching a static environment

![Western Scene][3]

このシーンでは、7つの個別のモデルファイルから静的環境を作成しました。これらの一部はシーン内で反復されます。たとえば、ロードタイルは50個のエンティティで使用され、シーンの中央で長い道路が作成されています。

![Western Animation][4]

アニメーションでは、各ドローコールが作成される点を参照できます。この環境では、エンジンは50以上のドローコールを作成して、各モデルを個別にドローしています。ただし地面を除き、これらのモデルはすべて同じマテリアルを使用しており、このためバッチグループに結合することができます。

![Western Animation Batched][5]

このアニメーションでは、建物、サボテン、道路、地面用に4つのバッチグループを作成しました。道路と地面は1つのドローコールに結合されていない点に留意してください。これは、メッシュがバッチグループで定義されたMax AABBサイズよりも大きいためです。

## Terminology

* **Batch Group** - A named group, created in the Editor, that defines some hints on how mesh instances should be combined. Components are assigned to a batch group
* **Batch** - An engine object created at runtime which is the set of mesh instances that are rendered in a single draw call. A batch group may result in multiple batches depending on the properties of the mesh instances that are added to the batch group.
* **Batch Manager** - The programmatic interface for creating and updating batches at runtime. See [API documentation][8].


[1]: /images/user-manual/optimization/batching/batch-groups.jpg
[2]: /images/user-manual/optimization/batching/model-component.jpg
[3]: /images/user-manual/optimization/batching/western-scene.jpg
[4]: /images/user-manual/optimization/batching/western-animation-all.gif
[5]: /images/user-manual/optimization/batching/western-animation.gif
[6]: /user-manual/designer/settings/#batch-groups
[7]: /user-manual/packs/components/model
[8]: /api/pc.BatchManager.html
[9]: /user-manual/packs/components/sprite
[10]: /user-manual/packs/components/element
