---
title: Shader
template: usermanual-page.tmpl.html
position: 12
---

A shader asset contains GLSL code. You can create a new Shader asset by clicking New Shader in the Asset Panel in the Editor or by uploading a file with an extension of ```.vert```, ```.frag``` or ```.glsl```.

To edit a Shader asset, right click on it in the Editor and select Edit. Here's an example on using Shader assets to create a custom material.

```javascript
var vertexShader = this.app.assets.find('my_vertex_shader');
var fragmentShader = this.app.assets.find('my_fragment_shader');
var shaderDefinition = {
    attributes: {
        aPosition: pc.SEMANTIC_POSITION,
        aUv0: pc.SEMANTIC_TEXCOORD0
    },
    vshader: vertexShader.resource
    fshader: fragmentShader.resource
};

var shader = new pc.Shader(this.app.graphicsDevice, shaderDefinition);
var material = new pc.Material();
material.setShader(shader);
```
