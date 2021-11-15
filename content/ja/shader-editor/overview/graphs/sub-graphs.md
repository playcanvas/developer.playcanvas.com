---
title: Sub Graphs
template: shader-editor-page.tmpl.html
position: 2
---

The second type of graph in Shader Editor are Sub Graphs.

Sub Graphs don't directly define a material, but instead encapsulate some useful functionality which can then be used elsewhere.

Sub Graphs don't contain Material Nodes, but instead pass data in and out using Input and Output Nodes. Sub Graphs can be used either in other Sub Graphs or directly in Material Graphs.

Note that it is not valid (or possible) to connect Sub Graphs together in way that would introduce cyclic references. For example if graph A references graph B which in turn references graph C, then graph C can not reference back to A or B.

#### 例

For example, this is a simple Sub Graph which adds two floats together:

![Sub Graph Example][1]

If this Sub Graph were named "adder" it would appear in the Assets Pane as follows:

![Sub Graph Icon][2]

The adder Sub Graph can then be placed as a node itself in another graph:

![Place Sub Graph][3]

For more information on how to edit graphs see the [Graph Editor][1] documentation.

[1]: /images/shader-editor/overview-graph-sub-graph.png
[2]: /images/shader-editor/overview-graph-sub-graph-icon.png
[3]: /images/shader-editor/overview-graph-place-sub-graph.gif

