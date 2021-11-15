---
title: アセット
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

**Tags** - タグとその組み合わせから検索するには、大括弧`[ ]`にタグを入力します。単純なクエリ演算子：AND, ORはクエリを文字列の配列、または文字列を持つ他の配列として表現することによって可能になります。クエリのロジックは、 `AssetsRegistry`の[`findByTag`][7]と同じです。
いくつかの例を示します：

`[ level-1 ]` - `level-1`によってタグ付けされたすべてのアセットを返します。
`[ level-1, level-2 ]` -  `level-1 OR level-2`によってタグ付けされたすべてのアセットを返します。
`[ [ level-1, monster ] ]` - `level-1 AND monster`によってタグ付けされたすべてのアセットを返します。 角括弧の数に注意してください。
`[ [ level-1, monster ], [ level-2, monster ] ]` -  `(level-1 AND monster) OR (level-2 AND monster)`によってタグ付けされたすべてのアセットを返します。

## ドラッグ＆ドロップ

アセットは、メインパネルからフォルダ階層内のフォルダにドラッグして別のフォルダに移動することができます。アセットは複数選択に対応しています。CTRL+ Aで、現在選択されているフォルダ内のすべてのアセットを選択します。

アセットパネルから、[Inspector][2]でハイライトされたスロットにアセットをドラッグすることもできます。Inspectorのスロットは、コンポーネントのアセット属性またはアセットタイプのスクリプト属性のどちらかになります。

モデル、素材、キューブマップなどのアセットを直接 [ビューポート][3]にドラッグすることもできます。

* ビューポートにモデルアセットをドラッグすると、モデルアセットが割り当てられたモデルコンポーネントを有する新しいエンティティが作成されます。ビューポートのカメラは自動的に新しく作成されたエンティティにズームします。
* ビューポート内の特定のメッシュインスタンスの上に素材をドラッグすると、素材は(プレビューとして)ドラッグされる素材に切り替えられます。素材の変更を保持するには、素材をドロップします。
* ビューポートでシーンの背景の上にキューブマップをドラッグすると、キューブマップはシーンのスカイボックスのキューブマップとして割り当てられます。プロパティは[Scene Settings][4]からも設定することができます。

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
Editorはコードで作成されたアセットの参照を検出できません。アセットを削除する際は注意が必要です。
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

