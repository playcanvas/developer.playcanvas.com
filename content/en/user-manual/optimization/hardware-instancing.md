---
title: Hardware Instancing
template: usermanual-page.tmpl.html
position: 3
---

Hardware instancing is a rendering technique which allows the GPU to render multiple identical meshes in a small number of draw calls. Each instance of the mesh can have a different limited amount of state (for example, position or color). It's a technique suitable to drawing objects such as trees or bullets, say.

For its support on a device, check `pc.GraphicsDevice.supportsInstancing`. In general, it is supported on all WebGL2 devices and also on the majority of WebGL1 devices using the ANGLE_instanced_arrays extension.

Note that all instances are submitted for rendering by the GPU with no camera frustum culling taking place.

## How to use instancing

Enable instancing on a StandardMaterial that you use for rendering:

```javascript 
var material = new pc.StandardMaterial();
material.onUpdateShader = function(options) {
    options.useInstancing = true;
    return options;
};
material.update();
```

Populate a vertex buffer with per instance matrices to provide their world matrices for rendering.

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

Create a VertexBuffer which stores per-instance state and initialize it with the matrices. In the following example, we use `pc.VertexFormat.defaultInstancingFormat` which allows us to store a per-instance Mat4 matrix. Then we enable instancing on a MeshInstance, which contains the mesh geometry we want to instance.

```javascript
var instanceCount = 10;
var vertexBuffer = new pc.VertexBuffer(this.app.graphicsDevice, pc.VertexFormat.defaultInstancingFormat,
                                        instanceCount, pc.BUFFER_STATIC, matrices);
meshInst.setInstancing(vertexBuffer);
```

Note, that you can create a dynamic vertex buffer using pc.BUFFER_DYNAMIC, and update the contents of it per-frame like this:

```javascript
vertexBuffer.setData(matrices);
```

## Custom shader

When you write custom shader that uses instancing, you need to read and use per-instance state from vertex attributes.
In the following example, we read a mat4 using vertex attributes.

```shader
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;

mat4 getModelMatrix() {
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}
```
