---
title: バッチング
template: usermanual-page.tmpl.html
position: 4
---

Batching is the process of combining multiple mesh instances together into a single mesh instance, so that they can all be rendered in a single GPU draw call. PlayCanvas provides a handy feature on the [Model][7], [Sprite][9] and [Element][10] components that lets you assign these components to batch groups which give the engine hints on how to combine meshes to reduce the overall draw call count.

メッシュインスタンスを組み合わせることができるか、エンジンが確認するためのルールが多数存在しています。最初のルールは、すべてのメッシュインスタンスが同じマテリアルを共有する必要があるというものです。

一般的なバッチングの使用例は以下のとおりです：

*  静的幾何学（たとえば環境）を1つのメッシュインスタンス、または複数の大きなインスタンスに結合させてドローコールを減らします。ただし、カメラカリングは依然としてサポートされます。
* 動的幾何学（たとえば、移動オブジェクトのセット）を、GPUで適用された動的プロパティとともに1つのメッシュインスタンスに結合します。

<div class="alert-info">
    The use of batching is currently not compatible with <a href="/user-manual/graphics/lighting/runtime-lightmaps/">runtime lightmaps</a> due to each lightmapped object requiring its own unique lightmap texture.
</div>

## バッチグループの作成

![Creating Batch Groups][1]

バッチグループは[シーン設定パネル][6]のバッチグループセクションから作成できます。
各バッチグループには多くのプロパティがあり、これらのプロパティはこのバッチグループからバッチを作成する方法についてのヒントをエンジンに示すために使用されます。

### バッチグループのプロパティ

* **Name**: 異なるバッチグループを区別するために使用されます。このバッチグループが保有するオブジェクトの種類を説明するような名前を設定することが理想的です。この名前は実行時に利用可能で、グループを取得できます。
* **Dynamic**: 有効化された場合でも、バッチグループ内のオブジェクトは依然として移動/回転/拡張できます。この機能は、たとえば銃弾など互いに類似して、同じマテリアルを使用するオブジェクトに使用可能です。静的なグループは、より少ないランタイムリソースを使用するため、バッチグループのコンテンツが移動しない場合にはDynamicを非有効化する必要があります。
* **Max AABB size**: 
バッチが作成された時点でのバッチグループ内のすべてのオブジェクトを含む、バウンディングボックスの任意の側面の最大サイズ。メッシュのセットのサイズが、最大サイズよりも大きい場合にはレンダリング用に複数バッチが作成されます。より大きなバウンディングボックスの場合には、より少ないドローセルでレンダリングされます。ただし、この場合にはカメラカリングとの連携度合が減少します。

## バッチグループにコンポーネントを追加

![Selecting Batch Groups][2]

モデルコンポーネントにはバッチグループプロパティがあり、このプロパティを使用してモデルをバッチグループに割り当てます。

## メッシュインスタンスを結合させるルール

エンジンがメッシュインスタンスを結合できるかのルールは非常に複雑ですが、簡潔にいえば1つのバッチに属するすべてのメッシュインスタンスは、以下に従う必要があります：

* 同じバッチグループIDを持つ
* 同じマテリアルを持つ
* 同じシェーダーパラメータを持つ
* 側面のサイズが、Max AABBサイズ以下のバウンディングボックス内にある
* 同じレイヤー内にある
* 各バッチの最大頂点カウントは65535
* 動的バッチには、移動可能なメッシュインスタンスの最大数があります。これはハードウェアに依存していますが、最大は1024です。

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

## 例 - 静的環境のバッチング

![Western Scene][3]

このシーンでは、7つの個別のモデルファイルから静的環境を作成しました。これらの一部はシーン内で反復されます。たとえば、ロードタイルは50個のエンティティで使用され、シーンの中央で長い道路が作成されています。

![Western Animation][4]

アニメーションでは、各ドローコールが作成される点を参照できます。この環境では、エンジンは50以上のドローコールを作成して、各モデルを個別にドローしています。ただし地面を除き、これらのモデルはすべて同じマテリアルを使用しており、このためバッチグループに結合することができます。

![Western Animation Batched][5]

このアニメーションでは、建物、サボテン、道路、地面用に4つのバッチグループを作成しました。道路と地面は1つのドローコールに結合されていない点に留意してください。これは、メッシュがバッチグループで定義されたMax AABBサイズよりも大きいためです。

## 用語集

* **バッチグループ** - エディターで作成され、名前の付いたグループ。メッシュインスタンスを結合する方法を示すヒントを定義します。コンポーネントはバッチグループに割り当てられます。
* **バッチ** - ランタイム時に作成されるエンジンオブジェクトで、1つのドローコール内でレンダリングされる一連のメッシュインスタンス。バッチグループは、バッチグループに追加されたメッシュインスタンスのプロパティに応じてバッチグループをもたらします。
* **バッチマネージャー** - ランタイム時にバッチを作成およびアップデートするプログラムインターフェース。 [API ドキュメント][8]を参照してください。

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

