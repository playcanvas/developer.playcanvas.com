---
title: 基本的な素材
template: tutorial-page-legacy.tmpl.html
---

Material（素材）は3Dモデルの表面の外見を定義します。多角形の色の変更などのシンプルな設定も可能ですし、海の表面やガラスを通り抜ける光の再現などの複雑な設定もできます。

In this tutorial, we'll walk through how you create a Material, assign it to a primitive shape, and edit the Material's properties. First create a new and empty scene.

## Step 1 - シーンにキューブを追加

シーンのルートエンティティを選択してください。初期の名前はRootです。Attribute Editorでエンティティの名前を"Material Tutorial"などの分かりやすい名前に変更してください。

Select 'New Entity' -> 'Box' menu in the Hierarchy panel. This creates a new Box Entity in the Hierarchy.

![新規ボックス][1]

## Step 2 - 新しい素材を作成

Create new material directly from the PlayCanvas Editor interface. In the Asset panel use the + button to open the New Asset menu and select Material.

![Add Material][2]

これにより新規のMaterial Assetが作成され、画面の右側にMaterial Editorを開きます。Material Editorで、素材の名前をBox Materialに変えてください。

## Step 3 - メッシュに素材を割り当てる

When you create a new cube in the Editor it will have no material assigned and will be rendered using a plain default material. To assign your new material to a model in the scene simply drag the model from the asset panel into the viewport and drop it on to the model you want to assign it to.

## Step 4 - 素材の色を変更

素材の色を変えるには、素材のプロパティの*Diffuse*を編集します。

Select the material either by clicking on it in the asset panel. Or by selecting it from the property inspector when you select the box.

![Diffuse Color][4]

You'll have to expand the Diffuse settings panel in the material editor in the right panel. Click on the color property to edit the diffuse color of the material.

## Bonus - 素材にテクスチャを追加

Changing the color of the material is a good start, but you'll quickly want more detail than a flat color. That is where texture maps come in.

こちらのサンプルテクスチャをダウンロード＆保存：

<a href="/downloads/proto_orange.png"><img style="float:left;" src="/downloads/proto_orange.png" width="128px"/></a>
<a href="/downloads/proto_gray_n.png"><img style="padding-left: 20px; margin: 0px" src="/downloads/proto_gray_n.png" width="128px"/></a>

次に、ファイルをEditorにドラッグしてプロジェクトにアップロードします。

Once they're uploaded it's time to assign them to texture slots on the Material. Select the Material as before and open up the Diffuse section. Drag the `proto_orange` texture from the asset panel into the empty diffuse slot. Then open the Normals section and drag the `proto_gray_n` texture into the normal map slot.

次のようになります：

![Cube][5]

**Tiling** と **Offset** プロパティを編集して、テクスチャーがどのようびキューブを覆うか確認してください。

Take a look at the user manual section on [Physical Materials][6] for more depth on setting up materials.

[1]: /images/tutorials/beginner/basic-materials/new-box.jpg
[2]: /images/tutorials/beginner/basic-materials/new-material.jpg
[3]: /images/tutorials/beginner/basic-materials/box-material.jpg
[4]: /images/tutorials/beginner/basic-materials/diffuse-panel.jpg
[5]: /images/tutorials/beginner/basic-materials/diffuse_normal_cube.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/

