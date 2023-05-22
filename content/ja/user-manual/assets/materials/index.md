---
title: マテリアル
layout: usermanual-page.hbs
position: 10
---

3Dモデルのすべての表面は、マテリアルを使用してレンダリングされます。マテリアルは、色、光沢、凹凸など、表面の特性を定義します。

PlayCanvasでは、マテリアルはプロパティをまとめたアセットタイプです。デフォルトでは、物理的なマテリアルを表します。これにより、滑らかなプラスチックから粗い木材、傷だらけの金属まで、さまざまな種類の視覚効果を作成するために使用できる基本的なプロパティが公開されます。

以前のフォンマテリアルタイプもサポートしています。

## マテリアルのインポート

PlayCanvasに3Dモデル(例:FBXまたはCOLLADA)ファイルをアップロードすると、マテリアルが自動的にインポートされます。マテリアルは、3Dモデリングツール内に存在するプロパティと同じプロパティで生成されます。埋め込みメディア(FBXのみ)を使用してアップロードする場合は、関連するすべてのテクスチャマップが自動的に設定されます。

## 新しいマテリアルの作成

PlayCanvas Editorインターフェイスから直接新しいマテリアルを作成できます。

<img loading="lazy" src="/images/user-manual/assets/materials/create-asset-menu.jpg" width="300">

これにより、新しいマテリアルアセットが作成され、画面の右側にマテリアルインスペクターが開きます。

## マテリアルの選択

<img loading="lazy" src="/images/user-manual/assets/materials/model-inspector-simple.jpg" style="width: 300px; float:right; padding: 20px; padding-top: 0px;">

マテリアルを編集するには、まず選択する必要があります。これにより、マテリアルインスペクターが表示されます。

マテリアルをアセットパネルで選択することもできます。また、モデルインスペクターやモデルコンポーネントからもマテリアルを選択できます。

マテリアルのプレビューアイコンをクリックすると、マテリアルインスペクターに移動します。

## マテリアルの割り当て

<img loading="lazy" src="/images/user-manual/assets/materials/model.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;">

Modelアセットのどこにどのマテリアルを割り当てるかを変更することができます。また、Modelコンポーネントを持つ特定のEntityのマテリアルをカスタマイズすることもできます。

Modelコンポーネントを持つEntityを選択すると、2つのボタンが表示されます - アセットマテリアルとEntityマテリアル。

<br style="clear:both;">

<img loading="lazy" src="/images/user-manual/assets/materials/model-inspector-free-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;">

Asset Materialsをクリックすると、Modelアセットが選択されます。アセットパネルからもModelアセットを選択できます。モデルインスペクターには、モデルのメッシュと各々に割り当てられたマテリアルが表示されます。Xボタンを使用してマテリアルをクリアでき、空きスロットをクリックして新しいマテリアルを割り当てることができます。

アセットパネルからマテリアルアセットをドラッグアンドドロップして、マテリアルスロットにドロップすることもできます。

<br style="clear:both;">

エンティティマテリアルをクリックすると、まずカスタマイズするメッシュインスタンスを選択するよう求められます。

<img loading="lazy" src="/images/user-manual/assets/materials/select.png" style="max-width: 100%">

メッシュインスタンスを選択した後、Modelコンポーネントに新しいマテリアルピッカーが表示されます。

<img loading="lazy" src="/images/user-manual/assets/materials/selected.png" style="max-width: 100%">

その後、この特定のエンティティに別のマテリアルを選択できます。

<img loading="lazy" src="/images/user-manual/assets/materials/overridden.png" style="max-width: 100%">

<br style="clear:both;">

## マテリアルの編集

<img loading="lazy" src="/images/user-manual/assets/materials/material-inspector.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;">

マテリアルを選択した後、そのプロパティを編集できます。

エディタには2つのマテリアル 'シェーディングモデル' があり、マテリアルインスペクターの上部にドロップダウンで定義されています。

### Physical

物理的なシェーディングモデルは、最も高度なシェーディングモデルです。これは、PlayCanvasのPBR（物理ベースレンダラー）のモデルです。

[Physical Material Properties][1]

### Phong

フォンのシェーディングモデルは、レガシーシェーディングモデルです。互換性のために使用してください。

[Phong Material Properties][2]

## マテリアルマップ 

<img loading="lazy" src="/images/user-manual/assets/materials/material-map-slot.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;">

マテリアルの編集には、上記ページで詳細に説明されているさまざまなスロットにテクスチャマップを作成および割り当てることが多く含まれます。

ほとんどのテクスチャマップスロットで利用可能ないくつかのオプションがあります。

### Textureアセット

最初にTextureアセットをアップロードしてください。PlayCanvasはTextureアセットを作成します。これらをマテリアルのスロットに割り当てることができます。

### ColorまたはTint Color

いくつかのマップスロットは、テクスチャマップがなくても単色にすることができます。また、テクスチャが割り当てられている場合は、tint colorをサポートするスロットもあります。tint colorが有効になっている場合、tint colorは、テクスチャマップスロットの色に乗算されます。

### Channel

一部のマップでは、単一のグレースケール値、つまり0.0 -> 1.0が必要です。この場合、使用するテクスチャのチャンネルを選択できます。 **RGB** は、すべての3つのチャンネルを使用することを意味します。**R**、 **G**、または **B** は、赤、緑、または青チャンネルのみが使用されることを意味します。

[1]: /user-manual/assets/materials/physical-material
[2]: /user-manual/assets/materials/phong-material
