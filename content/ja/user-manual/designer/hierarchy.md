---
title: 階層
template: usermanual-page.tmpl.html
position: 2
---

<img src="/images/user-manual/editor/hierarchy.png" style="float: right; padding: 20px; padding-top: 0px;"></img>

Hierarchyパネルは、エンティティの階層で構成されるシーン全体のツリービューを表示します。シーンには必ずツリーの最上にルートエンティティが含まれます。こちらの右側に表示される全てのエンティティは開発者により追加されています。

Hierarchy パネルは速やかにエンティティを探すのに便利です。シーンのエンティティは常に表示され、階層内のエンティティをクリックすることで選択できます。

## エンティティの作成と破棄

エンティティがHierarchyで選択されたら、それを削除するか、新しい子エンティティを作成することができます。これはHierarchyパネルの右上にあるボタン、または右クリックで開くコンテキストメニューから行うことができます。

## Hierarchyの整理

The order in which Entities are listed in the tree view is important. As the Scene is a hierarchy, Entities can be *children* of another Entity -- their *parent* -- and the transform matrix of a parent Entity is applied to all of its children. If you move or rotate a parent Entity, all children will move or rotate underneath the parent. This is very useful for simplifying the manipulation of many Entities.

The structure of the Hierarchy can be edited via drag and drop. Simply select and drag any Entity in the Hierarchy. In this way, you can quickly reorder or reparent Entities. When you reparent an Entity in the Editor its transform will be preserved so you won't see the Entity move or rotate after you change its parent. If you do not want that behavior hold Ctrl (or Cmd on Mac).

## Hierarchyの検索

Hierarchyパネルの上部付近にあるのは検索ボックスがあり、エンティティツリーのコンテンツを動的にフィルタリングできます。検索は、厳密ではないので検索文字列に一致していなくても、似ている名前を検索します。探しているエンティティの名前をはっきりと覚えていない場合に便利です。

## エンティティの複製

エンティティを複製するには、それらを選択してCtrl + Dキー(Macの場合はCmd + Dキー)を押すか、右クリックしてDuplicateを選択します。 各エンティティのコピーは、オリジナルのすぐ隣に作成されます。

## エンティティのコピー / ペースト

新しい親の下にエンティティをペースっとしたい場合は、それらを選択してCtrl + C(Macの場合はCmd + C)を押してコピーし、新しい親を選択してからCtrl + V(Macの場合はCmd + V) を押して選択した親の下に貼り付けます。選択したエンティティを右クリックすると、コピー＆ペーストオプションを使用することもできます。

エンティティをコピーして異なるシーンや異なるプロジェクトにペーストすることもできます。 同じ手順に従ってエンティティをコピーしてから目的のシーンに移動し、目的の親を選択してエンティティをペーストします。Editorは、ペーストされたエンティティのアセット参照を新しいプロジェクトのパスと照合しようとします。たとえば、`mymodel.fbx`というモデルアセットを参照するモデルコンポーネントを持つエンティティをコピーしてペーストする場合、エンティティを異なるプロジェクトにペーストするとEditorは`mymodel.fbx`という名前のアセットを同じフォルダ内で検索します。一致するアセッが見つからない場合は、手動で修正できるように失われたままになります。

