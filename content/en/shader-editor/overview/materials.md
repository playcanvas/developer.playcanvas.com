---
title: Materials
template: shader-editor-page.tmpl.html
position: 3
---

Materials combine Material Graph's with the parameter values and render states.

This makes it possible to create multiple variations of a Material Graph, all sharing the same underlying shader program.

For example, given the following Material Shader:
![Material Graph][1]

Multiple materials can be created, each with a different setting for the Vec3 Parameters:
![Material Previews][2]

[1]: /images/shader-editor/overview-materials-graph.png
[2]: /images/shader-editor/overview-materials-previews.png