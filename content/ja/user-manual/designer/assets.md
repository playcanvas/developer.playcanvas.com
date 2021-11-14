---
title: Assets
template: usermanual-page.tmpl.html
position: 5
---

アセットパネルは、プロジェクトで利用可能なすべてのアセットを管理します。ここから、アセットの作成、アップロード、削除、検査が行えます。

![アセットパネル][1]

## フォルダ階層

フォルダパネルから、フォルダのツリーにアセットを整理することができます。

新しいフォルダを作成するには、Add Asset (+) ボタンをクリック、Folderを選択します。また、新しいフォルダを作成する場所を右クリックして、New Asset> Folderを選択します。

フォルダの名前を変更するには、階層パネルでそれをダブルクリックして、InspectorのName フィールドを編集します。

フォルダを削除するには、階層でそれをダブルクリックしてdeleteを押します。また、削除したいフォルダを右クリックして、コンテキストメニューからDeleteを選択します。

Folders can be drag and dropped into each other if you want to reorganize your folder structure.

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

**ID** - Specific asset can be found by its unique ID, by simply typing ID in search field it will recognize exact match and only show one asset with that ID.

**RegExp** - 正規表現を使用して検索することもできます。検索フィールドの先頭に `*` を追加し、後ろにregexpクエリを入力してください。すべてのアセットを検索するには `*.`(任意の文字の)正規表現クエリを使用します。

**Tags** - To search by tags and their combinations type tags in square brackets `[ ]`. Simple query operators: AND, OR are allowed by expressing query as array of strings or other arrays with strings. Logic of query is same as for [`findByTag`][7] from `AssetsRegistry`.
Here are some examples:

`[ level-1 ]` - returns all assets that are tagged by `level-1`.
`[ level-1, level-2 ]` - returns all assets that are tagged by `level-1 OR level-2`.
`[ [ level-1, monster ] ]` - returns all assets that are tagged by `level-1 AND monster`. Notice extra brackets.
`[ [ level-1, monster ], [ level-2, monster ] ]` - returns all assets that are tagged by `(level-1 AND monster) OR (level-2 AND monster)`.

## ドラッグ＆ドロップ

アセットは、メインパネルからフォルダ階層内のフォルダにドラッグして別のフォルダに移動することができます。アセットは複数選択に対応しています。CTRL+ Aで、現在選択されているフォルダ内のすべてのアセットを選択します。

You can also drag Assets from the Asset Panel to highlighted slots in the [Inspector][2]. Slots in the Inspector will either be asset attributes of components or asset-type script attributes.

モデル、素材、キューブマップなどのアセットを直接 [ビューポート][3]にドラッグすることもできます。

* If you drag a model asset into the Viewport, a new entity will be created with a model component with the model asset assigned. The viewport camera will automatically zoom to the newly created entity.
* If you drag a material over a particular mesh instance in the Viewport, its material will be switched (as a preview) to the material being dragged. To make the material change stick, simply drop the material.
* If you drag a cubemap over the background of a scene in the Viewport, the cubemap will be assigned as the skybox cubemap of the scene. This property can also be set from the [Scene Settings][4].

## Copy and Paste between Projects

To copy an asset or a selection of assets between projects, select the asset(s) and right-click to bring up the context menu to select 'Copy'. You can also use the hotkey Ctrl/Cmd + C instead if the context menu is not available due to being a read-only project.

<img src="/images/user-manual/editor/assets-panel/right-click-copy.png" alt="Right click copy menu" width="500"/>

In the project that you want to copy the asset(s) to, right click in the assets panel and select 'Paste'. Ctrl/Cmd + V hotkey can be used instead.

<img src="/images/user-manual/editor/assets-panel/right-click-paste.png" alt="Right click paste menu" width="500"/>

Copy and pasting an asset will also copy its asset dependencies too. For example, here we have a model which references two materials and they reference a set of textures.

<img src="/images/user-manual/editor/assets-panel/copy-and-paste-model-with-dependencies.png" alt="Model example" width="100%"/>

If you copy and paste just the model asset into a different project, those asset dependencies are copied too.

<img src="/images/user-manual/editor/assets-panel/pasted-reference-assets.png" alt="Pasted referenced assets" width="100%"/>

By default, it is pasted as a flat hierarchy. If you want keep the folder structure, hold Shift when the context menu is opened and an option will appear called 'Paste (keep folders)'. This will attempt to keep the folder structure using the folder you are pasting into as the root folder.

<img src="/images/user-manual/editor/assets-panel/right-click-paste-keep-folders.png" alt="Right click paste (keep folders) menu" width="500"/>

Will result in the following where the folder structure is preserved:

<img src="/images/user-manual/editor/assets-panel/pasted-assets-keep-folders.png" alt="Pasted referenced assets with folders" width="100%"/>

We generally recommend that if you will be using this feature for reusable libraries and assets, to keep it contained to a root level folder that can be easily copied and pasted to other projects. This will keep the folder structure of projects simpler and cleaner.

<div class="alert alert-info">
Note that copy and pasting assets does not overwrite existing assets with the same name and will create a new asset.
</div>

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

