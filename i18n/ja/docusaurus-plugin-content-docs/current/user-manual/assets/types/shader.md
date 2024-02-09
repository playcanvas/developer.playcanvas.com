---
title: Shader
---

ShaderアセットにはGLSLコードが含まれています。エディターのアセットパネルで New Shaderをクリックするか、拡張子が ```.vert```、 ```.frag```、または ```.glsl``` のファイルをアップロードすることで、新しいShaderアセットを作成できます。

Shaderアセットを編集するには、エディターでShaderアセットを右クリックし、Editを選択します。Shaderアセットを使用してカスタムマテリアルを作成する方法の例を以下に示します。

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
