---
title: Materials
template: usermanual-page.tmpl.html
position: 6
---

3Dモデルの全ての表面は素材を使ってレンダリングされます。素材は、その表面の色、光沢、平滑度などのプロパティを定義します。

PlayCanvasでは、素材とはこれらのプロパティを収集するアセットタイプです。デフォルトでは物理的な素材を表します。表面の荒い木材、傷の付いた金属に、滑らかなプラスチックなどの様々な視覚効果を作成するために使用できる基本的なプロパティを露出します。

古いPhong素材タイプにも対応しています。

## 素材のインポート

3Dモデルファイルを(例えばFBXやCOLLADA)PlayCanvasにアップロードすると素材は自動的にインポートされます。素材は、3Dモデリングツール内のものと同様のプロパティを使用して生成されます。埋め込まれたメディア(FBXのみ)を使用してアップロードする場合、関連するすべてのテクスチャマップが自動的に設定されます。

## 新規素材の作成

PlayCanvas Editorインターフェイスから直接新しい素材を作成することができます。

<img src="/images/user-manual/create-asset-menu.jpg" style="width: 300px;" />

これにより、新素材のアセットを作成し、画面の右側に素材インスペクタを開きます。

## 素材の選択

<img src="/images/user-manual/model-inspector-simple.jpg" style="width: 300px; float:right; padding: 20px; padding-top: 0px;" />

素材を編集するには、まずそれを選択する必要があります。これで素材インスペクタが開きます。

アセットパネルで素材を選択することができます。また、モデルコンポーネントのモデルインスペクタから素材を選択することもできます。

基本的に、素材のプレビューアイコンをクリックすると、素材インスペクタに移行します。

## 素材の指定

<img src="/images/user-manual/material_overrides/model.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

モデルアセットのどこにどの素材が割り当てられるかを修正することができます。また、モデルコンポーネントを持つ特定のエンティティの素材をカスタマイズすることもできます。

モデルコンポーネントを持つエンティティを選択すると、2つのボタンが表示されます。Asset MaterialsとEntity Materialsです。

<br style="clear:both;" />

<img src="/images/user-manual/model-inspector-free-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

Asset Materialsをクリックすると、モデルのアセットが選択されます。また、アセットパネルからモデルアセットを選択することもできます。モデルインスペクタはモデルのメッシュと、それぞれに割り当てられる素材を表示します。Xボタンで素材をクリアし、空のスロットをクリックして新しい素材を割り当てます。

アセットパネルから素材のアセットを素材スロットにドラッグ＆ドロップすることもできます。

<br style="clear:both;" />

エンティティマテリアルをクリックすると、まず、素材をカスタマイズしたいメッシュインスタンスを選択するように求められます：

<img src="/images/user-manual/material_overrides/select.png" style="max-width: 100%" />

メッシュインスタンスを選択した後、新しい素材ピッカーがモデルコンポーネントに表示されます。

<img src="/images/user-manual/material_overrides/selected.png" style="max-width: 100%" />

次にこの特定のエンティティ用に別の素材を選択することができます：

<img src="/images/user-manual/material_overrides/overriden.png" style="max-width: 100%" />

<br style="clear:both;" />

## 素材の編集

<img src="/images/user-manual/material-inspector.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

素材を選択すればそのプロパティを編集することができます。

エディタは、'Shading Model'の素材タイプに対応しています。素材インスペクタの上部にあるドロップダウンで定義されます。

### 物理的

物理的なシェーディングモデルは、最も先進的なシェーディングモデルです。これはPlayCanvasのPhysically Based Renderer (PBR)のモデルです。

[物理的な素材プロパティ][1]

### Phong

フォンシェーディングモデルは、受け継がれてきたシェーディングモデルです。互換性のために使用してください。

[Phong素材プロパティ][2]

## 素材マップ

<img src="/images/user-manual/material-map-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;" />

素材の編集の大部分は、上記のページで説明している様々なスロットに対してテクスチャーマップを作成および指定することです。

素材のほとんどのテクスチャマップスロットで利用可能なオプションがいくつかあります。

### テクスチャーアセット

一つ目はテクスチャアセットです。PlayCanvasに画像をアップロードすると、テクスチャアセットが作成されます。素材のスロットにこれを割り当てることができます。

### カラーまたはティントカラー

いくつかのマップスロットをテクスチャマップではなく単色にすることができます。テクスチャーが指定されているスロットがティントカラーにも対応している場合もあります。有効にした場合、ティントカラーはテクスチャマップスロットの中の色で乗算されます。

### チャンネル

一部のマップは、単一のグレースケール値を必要とします。例：0.0 - >1.0。この場合、使用するテクスチャのチャンネルを選択することが可能です。** RGB**は、3つすべてのチャネルが使用されることを意味します。**R**, **G** または **B**は、赤、緑、青のチャンネルのみが使用されることを意味します。

[1]: /user-manual/assets/physical-material
[2]: /user-manual/assets/phong-material

