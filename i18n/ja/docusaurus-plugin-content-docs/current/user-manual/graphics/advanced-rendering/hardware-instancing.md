---
title: ハードウェアインスタンシング
sidebar_position: 5
---

ハードウェアインスタンシング (Hardware instancing) は、GPUに複数の同一のメッシュを少数のドローコールでレンダリングする技術です。メッシュの各インスタンスは、異なる限定的な状態（例えば、位置や色）を持つことができます。木や弾丸などのオブジェクトを描画するのに適した技術です。


デバイスでのサポート状況を確認するには、 `pc.GraphicsDevice.supportsInstancing`を確認します。一般的には、 WebGL2デバイスのすべてと、ANGLE_instanced_arrays拡張機能を使用してWebGL1デバイスの大部分でサポートされています。

また、すべてのインスタンスがレンダリング用にGPUに送信され、カメラフラスタムカリングは行われないことに注意してください。

## インスタンシングの使い方

頂点バッファにインスタンスごとの行列を埋め込んで、レンダリングのためのワールド行列を提供します。

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

以下の例では、インスタンスごとの状態を保存するVertexBufferを作成し、それを行列で初期化します。この例では、`pc.VertexFormat.defaultInstancingFormat` を使用して、インスタンスごとのMat4行列を保存することができます。その後、インスタンス化したいメッシュジオメトリを含むMeshInstanceでインスタンス化を有効にします。
 
 

```javascript
var instanceCount = 10;
var vertexBuffer = new pc.VertexBuffer(this.app.graphicsDevice, pc.VertexFormat.defaultInstancingFormat,
                                        instanceCount, pc.BUFFER_STATIC, matrices);
meshInst.setInstancing(vertexBuffer);
```

注: pc.BUFFER_DYNAMICを使用して動的な頂点バッファを作成し、フレームごとにその内容を以下のように更新することができます。

```javascript
vertexBuffer.setData(matrices);
```

## カスタムシェーダー

When you write custom shader that uses instancing, you need to read and use per-instance state from vertex attributes. In the following example, we read a `mat4` using vertex attributes.

```glsl
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;

mat4 getModelMatrix() {
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}
```
