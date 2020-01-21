---
title: File Format
template: usermanual-page.tmpl.html
position: 7
---

一般来说，你不需要知道用于载入你的模型的文件格式的结构。然而，本节为那些对写出自己的文件转换器的人们介绍了这些格式的结构。

为了在PlayCanvas内部获得模型，你需要上传一个 FBX (或 OBJ, DAE, DXJ, 3DS) 格式的文件。在服务器中，这个文件会被转换为JSON格式。这是一个文本格式。让我们来看看一个很简单的由两个三角形组成的平面的例子：

~~~javascript~~~
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
~~~

以下是出现在JSON对象中的不同属性的引用：

<table>
  <tr><th>Property</th><th>Description</th></tr>
  <tr><td>model</td><td>Denotes that this JSON object is a PlayCanvas model.</td></tr>
  <tr><td>version</td><td>The version of the JSON object. Current head version is 2.</td></tr>
  <tr><td>nodes</td><td>An array of nodes that constitute the scene hierarchy. The array is flat but the 'parents' array specifies the parent-child relationships between scene nodes.</td></tr>
  <tr><td>name</td><td>The node's name (usually assigned by an artist).</td></tr>
  <tr><td>position</td><td>3-component position (XYZ) relative to the node's parent.</td></tr>
  <tr><td>rotation</td><td>3-component Euler angle rotation (XYZ) relative to the node's parent. Units are degrees.</td></tr>
  <tr><td>scale</td><td>3-component scale (XYZ) relative to the node's parent.</td></tr>
  <tr><td>parents</td><td>Array of parent node indices. The root node has a parent of -1. In the example above, the node 'Plane' has 'RootNode' for a parent.</td></tr>
  <tr><td>skins</td><td>Skinning data is left undocumented for now.</td></tr>
  <tr>
    <td>vertices</td>
    <td>
      An array of objects containing vertex information. Each object has a number of vertex properties. These can be:
      <ul>
        <li>position: vertex positions</li>
        <li>normal: vertex normals</li>
        <li>texCoord0: first texture coordinate set</li>
        <li>texCoord1: second texture coordinate set</li>
        <li>skinWeights: vertex skin weights</li>
        <li>skinIndices: vertex skin indices</li>
        <li>color: vertex colors</li>
      </ul>
      Each property has a type (float32, uint8, uint16, uint64) and a number of components (1-4).
    </td>
  </tr>
  <tr><td>meshes</td><td>An array of mesh objects. Mesh are used to interpret how vertex information is rendered.</td></tr>
  <tr><td>aabb</td><td>The axis-aligned local space bounding box of a mesh.</td></tr>
  <tr><td>min</td><td>The minimum coordinate of the mesh's axis-aligned bounding box.</td></tr>
  <tr><td>max</td><td>The maximum coordinate of the mesh's axis-aligned bounding box.</td></tr>
  <tr><td>vertices</td><td>The index of the vertex information object referenced by this mesh.</td></tr>
  <tr><td>indices</td><td>An array of indices that defines the points of the primitive represented by the mesh.</td></tr>
  <tr><td>type</td>
    <td>The type of the primitive of this mesh. Can be:
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
  <tr><td>base</td><td>The first index used by this mesh.</td></tr>
  <tr><td>count</td><td>The number of indices used by this mesh.</td></tr>
  <tr><td>meshInstances</td><td>An array of objects representing instances of meshes. A single mesh can be shared between multiple mesh instances. This is an optimization that saves memory at runtime.</td></tr>
  <tr><td>node</td><td>The index of the node referenced by this mesh instance.</td></tr>
  <tr><td>mesh</td><td>The index of the mesh referenced by this mesh instance.</td></tr>
</table>

