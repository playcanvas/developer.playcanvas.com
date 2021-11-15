---
title: 资源
template: usermanual-page.tmpl.html
position: 5
---

资源面板管理了所有的项目中的可用资源。从这个面板可以创建，上传，删除，查看和编辑任何资源。

![Assets Panel][1]

## 层级文件夹

文件夹面板帮助你以文件夹树的形式管理所有资源。

点击 Add Asset (+) 按钮然后选择 'Folder' 创建一个新文件夹。另外，右键点击想创建文件夹的目的地，然后选择 ‘New Asset' >  'Folder’ 也是一样的效果。

双击文件夹可以在检查器中的名称栏位中修改文件夹的名字。

在层级菜单中双击文件夹然后点击删除可以删除一个文件夹。同样也可以右键点击想删除的文件夹，然后在上下文菜单中选择 'Delete'。

文件夹可以互相拖拽，可以使用这种方式重新组织目录结构。

## 创建和上传资源

可以通过拖放本地文件到资源面板来完成新的资源创建。编辑器会自动上传和转换文件为可用资源。

一些特定的资源类型可以在 Add Asset (+) 图标中创建。

选择想要删除的资源然后点击垃圾桶按钮删除资源。

## 编辑资源

特定的基于文本的资源可以通过 PlayCanvas 的脚本编辑器来打开和编辑。譬如文本，json，shader，html，css 以及脚本资源。双击这些资源图标就可以。

## 检查资源

在资源面板中选择缩略图，检查器就会同步显示出资源的详细信息。

## 过滤

在过滤器下来菜单中筛选类型以过滤其它非相关类型的资源。

## 搜索

在搜索框中可以对工程中的资源进行全局搜索。简单的在搜索框中输入关键字，编辑器会实时进行资源搜索。

**ID** - Specific asset can be found by its unique ID, by simply typing ID in search field it will recognize exact match and only show one asset with that ID.

**RegExp** - It is possible to search using regular expressions. Add `*` at the beginning of search field and type regexp query after. To search for all assets use `*.` (any character) regexp query.

**Tags** - To search by tags and their combinations type tags in square brackets `[ ]`. Simple query operators: AND, OR are allowed by expressing query as array of strings or other arrays with strings. Logic of query is same as for [`findByTag`][7] from `AssetsRegistry`.
Here are some examples:

`[ level-1 ]` - returns all assets that are tagged by `level-1`.
`[ level-1, level-2 ]` - returns all assets that are tagged by `level-1 OR level-2`.
`[ [ level-1, monster ] ]` - returns all assets that are tagged by `level-1 AND monster`. Notice extra brackets.
`[ [ level-1, monster ], [ level-2, monster ] ]` - returns all assets that are tagged by `(level-1 AND monster) OR (level-2 AND monster)`.

## 拖放

资源可以通过从主面板拖放到文件夹的树形结构来移动。资源支持多选，按 CTRL+A 可以选中当前目录下的全部资源。

还可以通过拖放把资源从资源面板链接到[检查器][2]的高亮位置上。检查器上的高亮位置通常是组件的资源属性或者是资源类型的脚本属性。

此外还可以拖动模型，材质以及 cubemap 资源直接到[视口][3] 中进行应用。

* 如果拖动模型资源到视口中，编辑器将会创建一个新的实体并添加模型组件同时将模型资源添加至模型组件引用。视口摄影机将会自动缩放至呈现新创建实体的位置。
* 如果拖动材质至视口中的模型实体上时，材质将会实时替换掉模型上的材质 (用于预览)。如果确定需要替换材质，则松开鼠标完成拖放即可。
* 如果拖放 Cubemap 到视口中的场景背景上，Cubemap 会被做为场景的天空盒使用。在[场景设置][4]中也有对应的参数可以修改。

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

## 检查引用

有时，知道资产在特定场景中被使用(或引用)的位置是有用的。 如果编辑器无法检测到资源的任何引用，则会在其缩略图上显示一个小点：

![未引用的资源][5]

<div class="alert alert-info">
请注意，编辑器无法检测对代码中生成的资产的引用。 因此，在根据此指标删除资产之前，请仔细考虑！
</div>

如果资源被引用了，您可以通过引用内容菜单项检查它们：

![已引用资源][6]

选择参考将把它加载到检查器面板中。

[1]: /images/user-manual/editor/assets-panel.png
[2]: /user-manual/designer/inspector
[3]: /user-manual/designer/viewport
[4]: /user-manual/designer/settings
[5]: /images/user-manual/editor/assets-panel/unreferenced-asset.png
[6]: /images/user-manual/editor/assets-panel/asset-references.png
[7]: /api/pc.AssetRegistry.html#findByTag

