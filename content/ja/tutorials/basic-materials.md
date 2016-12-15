---
title: 基本的な素材
template: tutorial-page.tmpl.html
tags: material
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg
---

Material（素材）は3Dモデルの表面の外見を定義します。多角形の色の変更などのシンプルな設定も可能ですし、海の表面やガラスを通り抜ける光の再現などの複雑な設定もできます。

このチュートリアルでは、Material（素材）の作成、基本的な形への割り当て、プロパティの編集について説明します。まず新しいシーンを作成してください。

## Step 1 - シーンにキューブを追加

シーンのルートエンティティを選択してください。初期の名前はRootです。Attribute Editorでエンティティの名前を"Material Tutorial"などの分かりやすい名前に変更してください。

HierarchyパネルのBoxエンティティで'New Entity' -> 'New Box' を選択してください。これでHierarchyに新規のBoxエンティティが作成されます。

![新規ボックス][1]

## Step 2 - 新しい素材を作成

PlayCanvas Editorインターフェイスから直接新しい素材を作ります。Assetパネルで+ボタンを押してNew Assetメニューを開きMaterialを選択してください。

![Add Material][2]

これにより新規のMaterial Assetが作成され、画面の右側にMaterial Editorを開きます。Material Editorで、素材の名前をBox Materialに変えてください。

## Step 3 - メッシュに素材を割り当てる

Editorで新しいキューブを作成する場合、割り当てられている素材は無く、プレーンなデフォルトの素材を使用してレンダリングされます。シーン内のモデルに新しい素材を割り当てるには、モデルをアセットパネルからビューポートにドラッグして、割り当てるモデルにそれをドロップします。

## Step 4 - 素材の色を変更

素材の色を変えるには、素材のプロパティの*Diffuse*を編集します。

アセットパネルで素材をクリックするか、ボックスを選ぶ際にプロパティーインスペクタから選択します。

![Diffuse Color][4]

右パネルの素材エディタでDiffuse設定パネルを展開する必要があります。カラープロパティをクリックして素材のdiffuse色を編集します。

## Bonus - 素材にテクスチャを追加

素材の色の変更ができたので、次に テクスチャーマップを使用して均一でない色のつけかたを説明します。

こちらのサンプルテクスチャをダウンロード＆保存：

<a href="/downloads/proto_orange.png"><img style="float:left;" src="/downloads/proto_orange.png" width="128px"/></a>
<a href="/downloads/proto_gray_n.png"><img style="padding-left: 20px; margin: 0px" src="/downloads/proto_gray_n.png" width="128px"/></a>

次に、ファイルをEditorにドラッグしてプロジェクトにアップロードします。

アップロードが完了したら、次に素材のテクスチャースロットに割り当てます。以前と同様、素材を選択してDiffuseセクションを開きます。アセットパネルから空のdiffuseスロットに`proto_orange`テクスチャーをドラッグします。次に、Normalsセクションを開き、`proto_gray_n`テクスチャーを法線マップスロットにドラッグします。

次のようになります：

![Cube][5]

**Tiling** と **Offset** プロパティを編集して、テクスチャーがどのようびキューブを覆うか確認してください。

素材の設定に関する詳細はユーザマニュアルの[Physical Materials][6]セクションをご確認ください。

[1]: /images/tutorials/beginner/basic-materials/new-box.jpg
[2]: /images/tutorials/beginner/basic-materials/new-material.jpg
[3]: /images/tutorials/beginner/basic-materials/box-material.jpg
[4]: /images/tutorials/beginner/basic-materials/diffuse-panel.jpg
[5]: /images/tutorials/beginner/basic-materials/diffuse_normal_cube.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/

