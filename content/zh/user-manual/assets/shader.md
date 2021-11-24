---
title: 着色器
template: usermanual-page.tmpl.html
position: 12
---

 一个包含了GLSL代码的着色器资源。用户可以在编辑器的资源面板中通过点击New Shader或上传带有```.vert```, ```.frag``` or ```.glsl```后缀的文件来创建新的着色器资源。

编辑一个着色器资源，左键点击编辑器选择编辑。以下是一个例子通过使用着色器来创建一个自定义材料。

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

