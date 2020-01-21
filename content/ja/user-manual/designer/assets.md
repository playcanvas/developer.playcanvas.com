---
title: Assets
template: usermanual-page.tmpl.html
position: 6
---

アセットパネルは、プロジェクトで利用可能なすべてのアセットを管理します。ここから、アセットの作成、アップロード、削除、検査が行えます。

![アセットパネル][1]

## フォルダ階層

フォルダパネルから、フォルダのツリーにアセットを整理することができます。

新しいフォルダを作成するには、Add Asset (+) ボタンをクリック、Folderを選択します。また、新しいフォルダを作成する場所を右クリックして、New Asset> Folderを選択します。

フォルダの名前を変更するには、階層パネルでそれをダブルクリックして、InspectorのName フィールドを編集します。

フォルダを削除するには、階層でそれをダブルクリックしてdeleteを押します。また、削除したいフォルダを右クリックして、コンテキストメニューからDeleteを選択します。

フォルダの構成を整理するにはフォルダを互いの中にドラッグすることができます。

## アセットの作成とアップロード

コンピューターのファイルシステムからアセットパネルにファイルをドラッグして新しいアセットを作成することができます。Editorがアセットをアップロード及びインポートします。

Add Asset (+) アイコンを使用して特定のアセットタイプを作成することもできます。

アセットを選択してDelete Assetアイコンをクリックすると、削除できます。

## アセットの編集

次の特定のテキストベースのアセットはPlayCanvas Script Editorで開いて編集することができます：text, json, shader, html, css, script asset。これを行うには、アセットのサムネイルをダブルクリックします。

## アセットの調査

任意のアセットの詳細を確認するには、アセットパネルのサムネイルを選択します。アセットの詳細がInspectorに表示されます。

## フィルタリング

フィルタドロップダウンから表示させるアセットの種類を選択して表示されているアセットをフィルタします。

## 検索

検索ボックスを使用して、プロジェクト内のアセットのグローバル検索を実行することができます。ボックスに入力し始めると、Editorは一致する結果を動的にアセットパネルで表示します。

**ID** - 特定のアセットを固有のIDで検索することができます。検索フィールドにIDを入力するだけで正確な一致が認識され、そのIDを持つひとつのアセットが表示されます。

**RegExp** - 正規表現を使用して検索することもできます。検索フィールドの先頭に `*` を追加し、後ろにregexpクエリを入力してください。すべてのアセットを検索するには `*.`(任意の文字の)正規表現クエリを使用します。

**Tags** - To search by tags and their combinations type tags in square brackets `[ ]`. Simple query operators: AND, OR are allowed by expressing query as array of strings or other arrays with strings. Logic of query is same as for [`findByTag`][7] from `AssetsRegistry`.
Here are some examples:

`[ level-1 ]` - returns all assets that are tagged by `level-1`.
`[ level-1, level-2 ]` - returns all assets that are tagged by `level-1 OR level-2`.
`[ [ level-1, monster ] ]` - returns all assets that are tagged by `level-1 AND monster`. Notice extra brackets.
`[ [ level-1, monster ], [ level-2, monster ] ]` - returns all assets that are tagged by `(level-1 AND monster) OR (level-2 AND monster)`.

## ドラッグ＆ドロップ

アセットは、メインパネルからフォルダ階層内のフォルダにドラッグして別のフォルダに移動することができます。アセットは複数選択に対応しています。CTRL+ Aで、現在選択されているフォルダ内のすべてのアセットを選択します。

アセットパネルから、[Inspector][2]でハイライトされたスロットにアセットをドラッグすることもできます。Inspectorのスロットは、コンポーネントのアセット属性またはアセットタイプのスクリプト属性のどちらかになります。

モデル、素材、キューブマップなどのアセットを直接 [ビューポート][3]にドラッグすることもできます。

* If you drag a model asset into the Viewport, a new entity will be created with a model component with the model asset assigned. The viewport camera will automatically zoom to the newly created entity.
* If you drag a material over a particular mesh instance in the Viewport, its material will be switched (as a preview) to the material being dragged. To make the material change stick, simply drop the material.
* If you drag a cubemap over the background of a scene in the Viewport, the cubemap will be assigned as the skybox cubemap of the scene. This property can also be set from the [Scene Settings][4].

## 参照の確認

特定のシーン内でアセットが使用されている(または参照されている)場所を知ることが有用な場合もあります。Editorがアセットの参照を検出できない場合、サムネイルに小さい点が表示されます：

![参照されていないアセット][5]

<div class="alert alert-info">
Note that the Editor cannot detect references to assets that are made in code. So think carefully before you delete an asset based on this indicator!
</div>

アセットに参照がある場合は、Referencesコンテンツメニュー項目を使用して参照することができます。

![アセットの参照][6]

参照を選択するとInspectorパネルに読み込まれます。

[1]: /images/user-manual/editor/assets-panel.png
[2]: /user-manual/designer/inspector
[3]: /user-manual/designer/viewport
[4]: /user-manual/designer/settings
[5]: /images/user-manual/editor/assets-panel/unreferenced-asset.png
[6]: /images/user-manual/editor/assets-panel/asset-references.png
[7]: /api/pc.AssetRegistry.html#findByTag

