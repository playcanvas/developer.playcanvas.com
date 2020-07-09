---
title: 文件格式
template: usermanual-page.tmpl.html
position: 7
---

一般来说，你不需要知道用于载入你的模型的文件格式的结构。然而，本节为那些对写出自己的文件转换器的人们介绍了这些格式的结构。

为了在PlayCanvas内部获得模型，你需要上传一个 FBX (或 OBJ, DAE, DXJ, 3DS) 格式的文件。在服务器中，这个文件会被转换为JSON格式。这是一个文本格式。让我们来看看一个很简单的由两个三角形组成的平面的例子：

```javascript
{
  "model": {
    "version": 2,
    "nodes": [
      {
        "name": "RootNode",
        "position": [ 0, 0, 0 ],
        "rotation": [ 0, 0, 0 ],
        "scale": [ 1, 1, 1 ]
      },
      {
        "name": "Plane",
        "position": [ 0, 0, 0 ],
        "rotation": [ 0, 0, 0 ],
        "scale": [ 1, 1, 1 ]
      }
    ],
    "parents": [ -1, 0 ],
    "skins": [],
    "vertices": [
      {
        "position": {
          "type": "float32",
          "components": 3,
          "data": [ 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0 ]
        },
        "normal": {
          "type": "float32",
          "components": 3,
          "data": [ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ]
        }
      }
    ],
    "meshes": [
      {
        "aabb": {
          "min": [ -1, -1, 0 ],
          "max": [ 1, 1, 0 ]
        },
        "vertices": 0,
        "indices": [ 0, 1, 2, 0, 2, 3 ],
        "type": "triangles",
        "base": 0,
        "count": 6
      }
    ],
    "meshInstances": [
      {
        "node": 1,
        "mesh": 0
      }
    ]
  }
}
```

以下是出现在JSON对象中的不同属性的引用：

<table>
  <tr><th>Property</th><th>Description</th></tr>
  <tr><td>model</td><td>表示该JSON对象是一个PlayCanvas模型。</td></tr>
  <tr><td>version</td><td>JSON对象的版本。当前最新版本是2。</td></tr>
  <tr><td>nodes</td><td>构成场景树节点的数组。该阵列是扁平的，但“父母”数组指定了场景节点之间的父子关系。</td></tr>
  <tr><td>name</td><td>该节点的名称 (常常由艺术家来设置)。</td></tr>
  <tr><td>position</td><td>相对于父节点在3个分方向(XYZ)的位置分量。</td></tr>
  <tr><td>rotation</td><td>相对于父节点在3个分方向(XYZ)的角度分量。 单位是度。</td></tr>
  <tr><td>scale</td><td>相对于父节点在3个分方向(XYZ)的缩放分量</td></tr>
  <tr><td>parents</td><td>父节点数组索引。根节点具有被设置为-1的节点。在上面的例子中，节点'平面'具有'根节点'的父对象。</td></tr>
  <tr><td>skins</td><td>蒙皮数据现在已经被去除了。</td></tr>
  <tr>
    <td>vertices</td>
    <td>
      包含顶点信息对象的数组。每个对象有若干顶点属性。这些可以是：
      <ul>
        <li>position: 定点位置</li>
        <li>normal: 顶点法线</li>
        <li>texCoord0: 第一个纹理坐标集</li>
        <li>texCoord1: 第二个纹理坐标集</li>
        <li>skinWeights: 顶点蒙皮权重</li>
        <li>skinIndices: 顶点皮肤指数</li>
        <li>color: 定点颜色</li>
      </ul>
      每个属性都有一个类型 (float32, uint8, uint16, uint64) 以及一个组建的数量(1-4)。
    </td>
  </tr>
  <tr><td>meshes</td><td>网格对象的数组。网用于解释信息如何在顶点被渲染。</td></tr>
  <tr><td>aabb</td><td>网状的轴线对齐的局部空间的边界框。</td></tr>
  <tr><td>min</td><td>网状的轴对齐包围盒的最小坐标。</td></tr>
  <tr><td>max</td><td>网状的轴对齐包围盒的最大坐标。</td></tr>
  <tr><td>vertices</td><td>该网所引用的顶点信息对象的索引。</td></tr>
  <tr><td>indices</td><td>索引的阵列，它定义表示网格的原始的点。</td></tr>
  <tr><td>type</td>
    <td>原始类型的网格。 可以是：
      <ul>
        <li>points</li>
        <li>lines</li>
        <li>lineloop</li>
        <li>linestrip</li>
        <li>triangles</li>
        <li>trianglestrip</li>
        <li>trianglefan</li>
      </ul>
    </td>
  </tr>
  <tr><td>base</td><td>该网格使用的第一个索引。</td></tr>
  <tr><td>count</td><td>该网格使用的索引数量。</td></tr>
  <tr><td>meshInstances</td><td>代表网格的实例对象的数组。单目网格可以被多个网格实例之间共享。这是一个在运行时可以节省存储器的优化。</td></tr>
  <tr><td>node</td><td>通过此网格实例引用的节点的索引。</td></tr>
  <tr><td>mesh</td><td>通过此网格实例引用的网格的索引。</td></tr>
</table>

