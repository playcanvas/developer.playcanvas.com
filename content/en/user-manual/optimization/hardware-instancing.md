---
title: Hardware Instancing
template: usermanual-page.tmpl.html
position: 3
---

Hardware instancing is a rendering technique which allows GPU to render multiple identical meshes in a small number of draw call. Each instance of the mesh can have different limited amount of state (for example position, or color). It's a technique suitable to drawing objects such as trees, bullets and similar.

For its support on a device, check pc.GraphicsDevice.extInstancing. In general, it is supported on all WebGL2 devices, and also on majority of WebGL1 devices using ANGLE_instanced_arrays extension.

## How to use instancing

Enable instancing on a StandardMaterial you use for rendering.

```javascript 
var material = new pc.StandardMaterial();
material.onUpdateShader = function(options) {
    options.useInstancing = true;
    return options;
};
material.update();
```

Create VertexBuffer which stores per-instance state. In following example we use pc.VertexFormat.defaultInstancingFormat which allows us to store per-instance Mat4 matrix. Then we enable instancing on a MeshInstance, which contains mesh geometry we want to instance.

```javascript
var instanceCount = 10;
var vertexBuffer = new pc.VertexBuffer(this.app.graphicsDevice, pc.VertexFormat.defaultInstancingFormat,
                                        instanceCount, pc.BUFFER_STATIC);
meshInst.setInstancing(vertexBuffer);
```

And then we populate vertex buffer with per instance matricies to provide their world matrices for rendering.

```javascript
matrices = [ ];
var matrix = new pc.Mat4();
for (var i = 0; i < instanceCount; i++) {
    matrix.setTRS(pos, pc.Vec3.ZERO, pc.Vec3.ONE);

    // copy matrix elements into array of floats
    for (var m = 0; m < 16; m++)
        matrices.push(matrix.data[m]);
}

// assign matrices to vertex buffer
meshInst.instancingVertexData = matrices;
```

## Custom shader

When you write custom shader to be used by instancing, you need to read and use per-instance state from attributes.
In following example we read mat4 using attributes.

```shader
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;

mat4 getModelMatrix() {
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}
```