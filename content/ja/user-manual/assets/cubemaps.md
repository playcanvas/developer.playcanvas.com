---
title: Cubemap
template: usermanual-page.tmpl.html
position: 7
---

キューブマップは特別なテクスチャーアセットです。各テクスチャーがキューブの面を表す、6つのテクスチャーアセットで構成されています。一般的に次の二つの用途があります：

1. A cubemap can define your scene's sky box. A sky box contains imagery of the distant visuals of your scene such as hills, mountains, the sky and so on.
2. A cubemap can add reflections to any material. Imagine a shiny, chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, you would normally set the scene's sky box cubemap as the cubemap on a reflective object's materials.

<iframe src="https://playcanv.as/b/xp7v1oFB/" allowfullscreen></iframe>

## キューブマップテクスチャーのインポート

キューブマップは、入力として6つのテクスチャアセットを必要とするアセットです。そのため、新しいキューブマップアセットを構成するためには、まずプロジェクトに6つの画像をインポートする必要があります。これを行うには、ファイルシステムからAssetパネルに6つの画像をドラッグします(またはAsset パネルのUploadオプションをクリック)。アップロードされ、処理されると、画像がAsset パネルに表示され、キューブマップアセットに割り当てる準備ができます。

## キューブマップの作成

PlayCanvas Editorインターフェイスから直接キューブマップアセットを作成することができます。アセットパネルのCreate Assetメニューを使用してください。

![キューブマップの作成][1]

これにより新規のキューブマップアセットが作成され、画面の右側にCube Map Editorを開きます。

## キューブマップの作成

キューブマップを編集するために選択するには、Assetパネルで選択します。最も簡単な方法はキューブマップフィルタを選択して選択肢のオプションを絞ることです。キューブマップは、クロス型のアイコンで見分けます。

![キューブマップのサムネイル][2]

キューブマップを選択するとEditorの右側のInspectorパネルに表示されます。

## キューブマップのプロパティ

キューブマップを選択してそのプロパティを編集できます。

![キューブマップのプロパティ][3]

### Filtering
This setting determines how the pixels of the cubemaps are interpolated as they are magnified. Magnification is when the texel to screen pixel ratio is less than one. Linear gives the best results visually, followed by Nearest.

### Anisotropy
Anisotropy is a value between 1 and 16 that gives control over the quality of texture sampling as the camera's view vector becomes more closely aligned with the plane of a textured surface.

## キューブマップにテクスチャを割り当てる

![キューブマップのプレビュー][4]

キューブマップPreviewパネルには、十字形にフラット化されたキューブマップの6つの面が表示されます。平らにした段ボール箱を想像してください。キューブマップを構築するには、AssetパネルからテクスチャアセットをPreview パネルのフェイススロットにドラッグするだけです。また、キューブマップのフェイススロットを選択し、Assetパネルからテクスチャアセットを選択することもできます。

キューブマップの面は次の通りです：

* Square (the same resolution in width and height)
* Power of two in dimension (1x1, 2x2, 4x4, 8x8, 16x16, 32x32 and so on)
* All faces must be the same resolution

Editorは面に自動的にテクスチャを割り当てる方法を見つけようとします。これは、キューブマップの面によく使用される命名規則を一致させることによって、最初の面をスロットにドラッグするときに実行されます。例えば：

* negx, posx, negy, posy, negz, posz
* left, right, top|up, bottom|down, front|forward, back|backward
* 0-5|1-6

一致するテクスチャセットの例は次のとおりです：

* face_posx.jpg
* face_negx.jpg
* face_posy.jpg
* face_negy.jpg
* face_posz.jpg
* face_negz.jpg

## イメージベースの照明

この手法により、CubeMapなどの環境マップを使用して物理に基づいたアンビエント照明や素材による反射をシミュレーションできます。これがどのように動作するか、また、IBL用にCubeMapを作成する方法については[こちら][6]をご確認ください。

## 素材にキューブマップを割り当てる

デフォルトのフォンと物理素材の種類はどちらも反射プロパティを持ちます。Environmentプロパティセクションを展開すると、次が表示されます：

![キューブマップの素材][5]

Emptyスロットをクリックしてキューブマップを選択するか、アセットパネルからキューブマップスロットにキューブマップアセットをドラッグ＆ドロップすることができます。

補足：物理素材が割り当てられ、プレフィルタされる場合は、デフォルトの環境マップとしてシーンのスカイボックスを使用します。

[1]: /images/user-manual/assets/cubemaps/cubemap-create.png
[2]: /images/user-manual/assets/cubemaps/cubemap-thumbnails.png
[3]: /images/user-manual/assets/cubemaps/cubemap-properties.png
[4]: /images/user-manual/assets/cubemaps/cubemap-preview.png
[5]: /images/user-manual/assets/cubemaps/cubemap-material.png
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/

