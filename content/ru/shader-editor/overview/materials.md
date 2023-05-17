---
title: Материалы
layout: shader-editor-page.hbs
position: 3
---

Материалы объединяют графы материалов, значения параметров и [состояния рендеринга][3].

Это позволяет создавать несколько вариантов графа материалов, все из которых используют одну и ту же программу шейдера.

Например, имея следующий шейдер материала:
![Material Graph][1]

Можно создать несколько материалов, каждый с разными значениями параметров Vec3:
![Material Previews][2]

[1]: /images/shader-editor/overview-materials-graph.png
[2]: /images/shader-editor/overview-materials-previews.png
[3]: /shader-editor/window-layout/inspector-pane/material-inspector