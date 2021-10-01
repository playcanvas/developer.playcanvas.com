---
title: Graphs
template: shader-editor-page.tmpl.html
position: 1
---

Graphs are a central concept in Shader Editor. They are made up of nodes that do things, and edges that connect them together.

To find out how to manage graphs see the [Graph Editor][1] documentation.

There are two distinct types of graphs in Shader Editor, namely Material Graphs and Sub Graphs.

### Material Graphs

Material Graphs define the look of a material and must contain a Material Node.

For example, this is the simplest possible Material graph along with its preview. The graph feeds a constant color into the Material Node's emissive field:

![Material Graph Example][2]

The Material Node has a number of input ports. Each port controls an aspect of the runtime lighting environment. The port details are as follows:

| Port | Type | Default | Usage |
|---|---|---|---|
| emissive | RGB | (0, 0, 0) | Color is added directly to the other lighting components of the material. |
| alpha | Number | 1 | The surface opacity. |
| albedo | RGB | (0, 0, 0) | The surface diffuse color. |
| gloss | Number | 0? | The smoothness / roughness of the surface. |
| specular | RGB | (0, 0, 0) | Tints the specular color. |
| normal | XYZ | (0, 0, 1) | The surface normal. |
| ccGloss | Number | 0? | Clear coat gloss. |
| ccSpecular | RGB | (0, 0, 0) | Clear coat specular. |
| ccNormal | XYZ | (0, 0, 1) | Clear coat normal. |

### Sub Graphs

The second type of graph, namely Sub Graphs are used to create useful functions that can then be used elsewhere.

Sub Graphs don't contain Material Nodes, but instead pass data in and out via Input and Output Nodes.

For example, this is a simple Sub Graph which adds two floats together:

![Sub Graph Example][3]

If this Sub Graph were named "adder" it would appear in the Assets Pane as follows:

![Sub Graph Icon][4]

This Sub Graph can then be placed as a regular node into other graphs.

For more information on how to edit graphs see the [Graph Editor][1] documentation.

[1]: /shader-editor/window-layout/graph-editor
[2]: /images/shader-editor/overview-graph-material.png
[3]: /images/shader-editor/overview-graph-sub-graph.png
[4]: /images/shader-editor/overview-graph-sub-graph-icon.png
