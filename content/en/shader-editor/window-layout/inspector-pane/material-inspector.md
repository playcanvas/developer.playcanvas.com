---
title: Material Inspector
template: shader-editor-page.tmpl.html
position: 3
---

<img src="/images/shader-editor/inspector-pane-material.png" style="float: right; padding: 20px; padding-top: 0px;"></img>

The Material Inspector is where a material's settings are configured.

To access a material's inspector, select it in the [Assets Pane][1].

There are three sections: Basic, Render States and Parameters.

### Basic

- MaterialID - Internal ID assigned to the material.
- Name - Material Name.
- Desc - Material Description.

### Render States

- Blend Mode - The type of blend mode. See [here][2] for more details.
- Alpha Test - (Not yet supported). Specify the alpha test value.
- Cull Mode - Face culling mode.
- Depth Test - Enable depth testing during rendering.
- Depth Write - Write the surface depth during rendering.
- Opacity Fades Specular - (Not yet supported).
- Use Fog - (Not yet supported).

### Parameters

The parameters section lists the parameter nodes placed on the graph. The names and types are taken from the graph nodes themselves.

[1]: /shader-editor/window-layout/assets-pane
[2]: /api/pc.Material.html#blendType
[3]: /images/shader-editor/inspector-pane-material.png
