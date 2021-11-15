---
title: Sprite Editor
template: usermanual-page.tmpl.html
position: 1
---

スプライトエディタは、テクスチャアトラスアセットとスプライトアセットの両方を編集するのに使用します。スプライトアセットの生成にも使用します。

スプライトエディタを開くには、エディタアセットパネル内でテクスチャアトラスまたはスプライトアセットをダブルクリックします。

![スプライトエディタ][1]

## ビューポート

![ビューポート][2]

スプライトエディタのビューポートには現在選択されているテクスチャアトラスが表示されています。フレームはグレーのボックスでテクスチャアトラスに表示されます。現在選択されているアセットは2組のハンドルで表示されます。緑のハンドルはフレームの幅と高さを修正し、青いハンドルはフレームのボーダープロパティを修正します。

### テクスチャアトラスを編集する

ビューポート内で、マウスを使用しフレームのアウトラインをドラッグします。そして、緑と青のハンドルを使用してフレームの範囲とボーダーを修正します。

#### フレーム

フレームは、テクスチャアトラスで定義されたリージョンです。フレームは名前、位置、ボーダーを持ちます。ボーダーは9スライスリージョンを定義するのに使用します。詳細は [9スライスドキュメント][7]を参照してください。

## インスペクター

インスペクターパネルには、現在選択しているアイテムのプロパティが表示されます。インスペクターは選択しているアイテムがテクスチャアトラスなのか、フレーム、スプライトアセットなのかによって変わります。

### テクスチャアトラスインスペクター

![テクスチャアトラスインスペクター][3]

テクスチャアトラスインスペクターでは、テクスチャアトラスを自動的に固定グリッドにスライスできます。

まず、既存のフレームで行うことを選択します。*既存のフレームを削除*またはフレームを削除せずにフレームの*追加のみ*を選択することもできます。

そしてグリッドセルを指定するメソッドを選択します

* Grid By Frame Count - Specify the number of grid cells horizontally and vertically to divide the texture into
* Grid By Frame Size - Specify the size in pixels that each grid cell should be

オフセットおよびスペーシングの値を設定します。オフセットはグリッドを開始する前にテクスチャの左上から移動するピクセル数です。スペーシングは各グリッドセル間のピクセル数です。

最後にすべての新しく生成されたフレームに対してピボットを設定します。ピボットは、スプライトの位置と回転ポイントを決定します。幅と高さの割合として指定されます。

設定をすべて選択したら、 **Generate Frames** ボタンをクリックしてフレームを生成します。

### フレームインスペクター

![フレームインインスペクター][4]

フレームインスペクターでは、個々のフレームやフレームの集まりに対してプロパティの設定ができます。フレームを1つ以上選択している場合に表示されます。フレームインスペクターは、新しいスプライトフォームを生成する場所でもあります。

インスペクターではフレームのポジション、サイズ、ボーダープロパティを修正できます。

#### フレームインスペクターアクション

**New Sprite From Selection**

新しいスプライトアセットを生成し、スプライトに選択したフレームを選択した順に割り当てます。

 * **New Sliced Sprite From Selection** - Create a new Sprite Asset and set its type to *Sliced*. Assign the frames that you have selected to the Sprite, in the order that they were selected.
 * **Focus on Selection** - Focus the viewport on the selected Frames. [Keyboard Shortcut: F]
 * **Trim Selected Frames** - Reduce the size of the selected frames to remove any excess empty space around an image. [Keyboard Shortcut: T]
 * **Delete Selected Frames** - Delete the selected Frames [Keyboard Shortcut: Delete]

### スプライトインスペクター

![スプライトインスペクター][5]

スプライトアセットが選択されている場合、スプライトインスペクターが表示されます。このスプライトインスペクターは、1つ以上のスプライトのプロパティの編集に使用します。詳細は [スプライトアセット][6] を参照してください。

**Add Frames to Sprite Asset** ボタンをクリックしてスプライトエディットモードに入ります。このモードでは、フレームパネルやビューポートから複数のフレームを選択してスプライトに追加できます。 **Add Selected Frames**をクリックして、自分のスプライトにフレームを追加します。

スプライトインスペクターを使用して、スプライト内でフレームの順序をつけなおしたり、個々のフレームを削除したりできます。

## フレームパネル

フレームパネルではテクスチャアトラスのフレームの選択・削除ができます。

## アセットパネル

アセットパネルでは、現在のテクスチャアトラスから生成されたすべてのスプライトアセットが表示されています。このパネルからスプライトアセットを選択することもできます。

* [PixelBoy](https://twitter.com/2pblog1)による作品* 

[1]: /images/user-manual/2D/sprite-editor/sprite-editor-highlights.jpg
[2]: /images/user-manual/2D/sprite-editor/viewport.jpg
[3]: /images/user-manual/2D/sprite-editor/texture-atlas-inspector.jpg
[4]: /images/user-manual/2D/sprite-editor/frame-inspector.jpg
[5]: /images/user-manual/2D/sprite-editor/sprite-inspector.jpg
[6]: /user-manual/assets/sprites/
[7]: /user-manual/2D/9-slicing/

