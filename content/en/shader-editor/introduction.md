---
title: Introduction
template: shader-editor-page.tmpl.html
position: 1
---

## What is Shader Editor?

__Shader Editor__ is a web-based visual programming tool for creating shader materials and effects.

Instead of writing shader programs directly, in __Shader Editor__ you construct shader graphs. These graphs comprise a network of nodes connected together with edges. __Shader Editor__ will convert a completed graph to the equivalent shader program for use at runtime.

### Example

For example, the following effect animates multiple surface normal maps and combines them with special effect lighting:
![sample effect][1]

The effect is made up of various graphs, including the following one. This graph takes care of unpacking the normals in a normal map:
![sample graph][2]

__Shader Editor__ will convert this graph into a shader program, which is executed on a GPU at runtime:

```
void func_unpackNormal(in vec3 usr_rawNormal, out vec3 usr_unpackedNormal) {
    float var_ = float(2);
    vec3 var_0 = vec3(var_,var_,var_);
    vec3 var_1 = var_0 * usr_rawNormal;
    float var_2 = float(-1);
    vec3 var_3 = vec3(var_2,var_2,var_2);
    vec3 var_4 = var_1 + var_3;
    usr_unpackedNormal = var_4;
}
```

### Next steps

Learn more about Shader Editor in general in the [Overview][3] section.

Find out more about the window layout in the [Window Layout][4] section.

[1]: /images/shader-editor/sample-effect.gif
[2]: /images/shader-editor/sample-graph.png
[3]: /shader-editor/overview
[4]: /shader-editor/window-layout
