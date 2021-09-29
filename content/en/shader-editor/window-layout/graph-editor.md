---
title: Graph Editor
template: shader-editor-page.tmpl.html
position: 4
---

The Graph Editor displays the currently selected graph. This is where nodes are created, arranged, connected and deleted.

![Graph Editor][1]

| How To | |
|---|---|
| Create a node | Drag an entry from the [Nodes Pane][2] and drop it on the Graph Editor work area.<br>Drag a sub-graph from the [Assets Pane][3] onto the Graph Editor work area. |
| Select a node | Left click the node. |
| Delete a node | Select the node and either press delete key or use the node context menu 'Delete' option. |
| Move a node | Left click and drag the node. |
| Modify a node | Select the node and modify its properties in the [Inspector Pane][4]. |
| Connect two nodes | Left click the output port of the source node, drag and drop on the input port of the target node. |

## Nodes

Nodes form a central part of Shader Editor and have the following anatomy:

![Graph Editor Node][5]

| Part | |
|---|---|
| 1 | Node type. For a full reference of node types see the [Reference][6]. |
| 2 | Input Ports |
| 3 | Output Ports |

[1]: /images/shader-editor/graph-editor.png
[2]: /shader-editor/window-layout/nodes-pane
[3]: /shader-editor/window-layout/assets-pane
[4]: /shader-editor/window-layout/inspector-pane
[5]: /images/shader-editor/graph-editor-node.png
[6]: /shader-editor/reference