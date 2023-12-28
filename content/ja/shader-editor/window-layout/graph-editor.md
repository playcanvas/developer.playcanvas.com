---
title: グラフエディター
layout: shader-editor-page.hbs
position: 5
---

グラフエディターは、現在選択されているグラフを表示します。ノードの作成、配置、接続、削除がここで行われます。

![グラフエディター][1]

| 使い方 | |
|---|---|
| ノードの新規作成 | Drag an entry from the [Nodes Pane][2] and drop it on the Graph Editor work area.<br />Drag a sub-graph from the [Assets Pane][3] onto the Graph Editor work area. |
| ノードの選択 | ノードを左クリックします。 |
| ノードの削除 | ノードを選択し、deleteキーを押すか、ノードコンテキストメニューの「削除」オプションを使用します。 |
| ノードの移動 | ノードを左クリックしてドラッグします。 |
| ノードの変更 | ノードを選択し、[インスペクターペイン][4]でそのプロパティを変更します。 |
| 2つのノードを接続 | ソースノードの出力ポートを左クリックし、ターゲットノードの入力ポートにドラッグしてドロップします。 |

[1]: /images/shader-editor/graph-editor.png
[2]: /shader-editor/window-layout/nodes-pane
[3]: /shader-editor/window-layout/assets-pane
[4]: /shader-editor/window-layout/inspector-pane
