---
title: Nodes
template: shader-editor-page.tmpl.html
position: 1
---

Shader Editor supports many types of nodes, but they all have the following structure:

![Graph Editor Node][1]

| Node structure | |
|---|---|
| 1 | Node type. |
| 2 | Input Ports. |
| 3 | Output Ports. |

Certain nodes have no input ports and other have no output ports, though all nodes must at least one of either!

Based on this, we can identify three categories of nodes:
- Input nodes - these have output ports, but no input ports. These nodes are a source of data.
- Output nodes - these have input ports, but no output ports. These nodes are a target of data.
- Transform nodes - these have both input ports and output ports. These nodes transform data.

[1]: /images/shader-editor/graph-editor-node.png