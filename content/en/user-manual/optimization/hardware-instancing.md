---
title: Hardware Instancing
template: usermanual-page.tmpl.html
position: 3
---

Hardware instancing is a rendering technique which allows GPU to render multiple identical meshes in a small number of draw call. Each instance of the mesh can have different limited amount of state (for example position, or color). It's a technique suitable to drawing objects such as trees, bullets and similar.

For its support on a device, check pc.GraphicsDevice.extInstancing. In general, it is supported on all WebGL2 devices, and also on majority of WebGL1 devices using ANGLE_instanced_arrays extension.

Note that all instances are submitted for rendering by the GPU and no camera frustum culling taking place.

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

Populate vertex buffer with per instance matricies to provide their world matrices for rendering.

```javascript
// store matrices for individual instances into array
var matrices = new Float32Array(instanceCount * 16);
var matrix = new pc.Mat4();
var matrixIndex = 0;
for (var i = 0; i < instanceCount; i++) {
    matrix.setTRS(pos, pc.Vec3.ZERO, pc.Vec3.ONE);

 // copy matrix elements into array of floats
for (var m = 0; m < 16; m++)
    matrices[matrixIndex++] = matrix.data[m];
}
```

Create VertexBuffer which stores per-instance state and initialize it with the matrices. In following example we use pc.VertexFormat.defaultInstancingFormat which allows us to store per-instance Mat4 matrix. Then we enable instancing on a MeshInstance, which contains mesh geometry we want to instance.

```javascript
var instanceCount = 10;
var vertexBuffer = new pc.VertexBuffer(this.app.graphicsDevice, pc.VertexFormat.defaultInstancingFormat,
                                        instanceCount, pc.BUFFER_STATIC, matrices);
meshInst.setInstancing(vertexBuffer);
```

Note, that you can create dynamic vertex buffer using pc.BUFFER_DYNAMIC, and update content of it per frame like this:

```javascript
vertexBuffer.setData(matrices);
```

## Custom shader

When you write custom shader to be used by instancing, you need to read and use per-instance state from vertex attributes.
In following example we read mat4 using vertex attributes.

```shader
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;

mat4 getModelMatrix() {
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}
```