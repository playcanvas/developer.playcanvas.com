---
title: 基本的なマテリアル
layout: tutorial-page.hbs
tags: material,basics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"
---

マテリアルは、3Dモデルの表面の外観を定義するものです。非常に単純には、マテリアルは多角形の色を設定し、最も複雑な場合には海面をシミュレートしたり、ガラスを通過する光の方法をシミュレートすることができます。

このチュートリアルでは、マテリアルの作成方法、プリミティブシェイプに割り当てる方法、マテリアルのプロパティを編集する方法を説明します。まず、新しい空のシーンを作成してください。

## ステップ1 - シーンにキューブを追加

シーンのルートエンティティを選択します。初期の名前は "Root" と呼ばれます。属性エディタで、エンティティの名前を "Material Tutorial" のような意味のある名前に変更します。

ヒエラルキーパネルで 'New Entity'-> 'Box' メニューを選択します。これにより、ヒエラルキーに新しいボックスエンティティが作成されます。

![New Box][1]

## ステップ2 - 新しいマテリアルを作成

PlayCanvasエディターのインターフェースから直接新しいマテリアルを作成します。アセットパネルで+ボタンを使用して、新しいアセットメニューを開き、マテリアルを選択します。

![Add Material][2]

これにより、新しいマテリアルアセットが作成され、画面右側にマテリアルエディタが表示されます。マテリアルエディタで、マテリアルの名前を「Box Material」に変更します。

## ステップ3 - キューブにマテリアルを割り当てる

エディタで新しいキューブを作成すると、マテリアルが割り当てられず、単純なデフォルトマテリアルを使用してレンダリングされます。シーンのモデルに新しいマテリアルを割り当てるには、アセットパネルからモデルをビューポートにドラッグして、割り当てたいモデルにドロップするだけです。

## ステップ4 - マテリアルの色を変更する

マテリアルの色を変更するには、マテリアルの *Diffuse* プロパティを編集する必要があります。

マテリアルを選択して、アセットパネルでクリックするか、ボックスを選択するときにプロパティインスペクターから選択します。

![Diffuse Color][4]

マテリアルエディタの右側のDiffuse設定パネルを展開する必要があります。色のプロパティをクリックして、マテリアルの拡散色を編集します。

## ボーナス - マテリアルにテクスチャを追加する

マテリアルの色の変更は良いスタートですが、フラットな色よりも詳細な情報をすぐに必要になります。そこで、テクスチャマップが登場するのです。

こちらからサンプルのテクスチャをダウンロードして保存してください。

<a href="/downloads/proto_orange.png"><img loading="lazy" style="float:left;" src="/downloads/proto_orange.png" alt="Sample diffuse map texture" width="128"></a>
<a href="/downloads/proto_gray_n.png"><img loading="lazy" style="padding-left: 20px; margin: 0px" src="/downloads/proto_gray_n.png" alt="Sample normal map texture" width="128"></a>

その後、エディタにドラッグしてファイルをアップロードします。

アップロードすると、マテリアルのテクスチャスロットにそれらを割り当てる時が来ました。前述のようにマテリアルを選択して、Diffuseセクションを開きます。アセットパネルから `proto_orange` テクスチャを空の拡散スロットにドラッグします。次にNormalsセクションを開き、 `proto_gray_n` テクスチャをノーマルマップスロットにドラッグします。

以下のようなものが表示されます。

![Cube][5]

テクスチャがキューブに巻き付けられる方法を変更するには、 **Tiling** および **Offset** プロパティを変更してみてください。

マテリアルを設定するのにさらに深い知識が必要な場合は、ユーザーマニュアルの[物理マテリアル][6]セクションを参照してください。

[1]: /images/tutorials/beginner/basic-materials/new-box.jpg
[2]: /images/tutorials/beginner/basic-materials/new-material.jpg
[3]: /images/tutorials/beginner/basic-materials/box-material.jpg
[4]: /images/tutorials/beginner/basic-materials/diffuse-panel.jpg
[5]: /images/tutorials/beginner/basic-materials/diffuse_normal_cube.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/
