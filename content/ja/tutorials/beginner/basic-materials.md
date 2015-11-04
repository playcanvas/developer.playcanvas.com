---
title: 基本的な素材
template: tutorial-page.tmpl.html
---

Material（素材）は3Dモデルの表面の外見を定義します。多角形の色の変更などのシンプルな設定も可能ですし、海の表面やガラスを通り抜ける光の再現などの複雑な設定もできます。

このチュートリアルでは、Material（素材）の作成、基本的な形への割り当て、プロパティの編集について説明します。始める前に、 [Getting Started][1]ガイドのように、プロジェクトと新しいシーンを作成してください。

## Step 1 - シーンにキューブを追加

シーンのルートエンティティを選択してください。初期の名前はRootです。Attribute Editorでエンティティの名前を"Material Tutorial"などの分かりやすい名前に変更してください。

'Entity'メニューの'New Entity' -> 'New Box' を選択してください。これでHierarchyに新規の子ボックスエンティティが作成されます。

## Step 2 - 新しい素材を作成

PlayCanvas Editorインターフェイスから直接新しい素材を作ります。Asset Explorerを開き (Aを押すか、ViewメニューのToggle Asset Explorerを選択) 、素材フィルタの横にある+ボタンを押します。

![Add Material][2]

これにより新規のMaterial Assetが作成され、画面の右側にMaterial Editorを開きます。Material Editorで、素材の名前をBox Materialに変えてください。

## Step 3 - 既存のキューブ素材を選択

3Dビューで素材を選択する方法は二つあります。一つ目は、3Dビューでモデルを右クリックしてEdit Material（素材の編集）を選択する方法です。二つ目は、左クリックでエンティティを選択してから変種したい素材を左クリックする方法です。

選択すると、Material EditorがEditorの左コラムに表示されます。

![Assign Material][3]

基本のオブジェクトを選択した際、初期のMaterialスロットはこのように空になっています。

## Step 4 - メッシュに素材を割り当てる

Assetピッカーの+ボタンをクリックして、新しい素材を選択してください。Material Editor は素材のプレビューや編集できる属性オプションを表示します。PlayCanvasで作成される素材は、"Phong" Materialとして知られているものです。これは、3Dモデリングプログラムで最も一般的に使用されている素材の種類です。

## Step 5 - 素材の色を変更

素材の色を変えるには、素材のプロパティの*Diffuse*を編集します。

素材を選択したら、Diffuse属性のセクションを開き、赤いシェードになるよう色を編集します。

![Diffuse Color][4]

Diffuseプロパティの色を編集すると、キューブの色が変わります。

## Bonus - その他の素材プロパティ

Diffuse以外のプロパティも編集できます。**specular color** や **emissive color** を編集して変化をご確認ください。

## Bonus - 素材にテクスチャを追加

素材の色の変更ができたので、次に テクスチャーマップを使用して均一でない色のつけかたを説明します。

こちらのサンプルテクスチャをダウンロード＆保存：

<a href="/downloads/proto_orange.png"><img style="float:left; margin-right: 32px;" src="/downloads/proto_orange.png" width="128px"/></a>
<a href="/downloads/proto_gray_n.png"><img src="/downloads/proto_gray_n.png" width="128px"/></a>

次に、ファイルをEditorにドラッグしてプロジェクトにアップロードします。

アップロードが完了したら、次に素材のテクスチャースロットに割り当てます。以前と同様、素材を選択してDiffuseセクションを開きます。色の修正を行う代わりに、Textureピッカーを開き、`proto_orange`テクスチャーを割り当てます。次に、Normalセクションを開き、Textureスロットで`proto_gray_n`テクスチャーを割り当てます。

次のようになります：

![Cube][5]

**Tiling** と **Offset** プロパティを編集して、テクスチャーがどのようびキューブを覆うか確認してください。

[PlayCanvas tutorials project][7]の [Basic Materials project scene here][6]をご確認ください。Hierarcy のBoxアイテムを左クリックして、ビューがズームアウトしすぎている場合はFを押してフォーカスしてください。

[1]: /getting-started
[2]: /images/content_creation/add_material.png
[3]: /images/content_creation/assign_material.png
[4]: /images/content_creation/material_editor.png
[5]: /images/content_creation/diffuse_normal_cube.jpg
[6]: https://playcanvas.com/editor/scene/339076
[7]: https://playcanvas.com/project/186/overview/tutorials

