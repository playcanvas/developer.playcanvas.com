---
title: フォルダ形式
template: usermanual-page.tmpl.html
position: 7
---

基本的には、ファイル形式の構造が分からなくてもモデルをシリアル化することができます。しかし、このセクションでは、独自のファイルコンバータを書く場合の形式について説明します。

PlayCanvasにモデルを取りこむには、FBXファイル(またはOBJ、DAE、DXJ、3DS)をアップロードする必要があります。サーバでは、このファイルはJSON形式に変換されます。この形式はテキストです。2つの三角形を有する平面の簡単な例を見てみましょう：

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

上記のJSONオブジェクトに表示される異なるプロパティの参照です：

<table>
  <tr><th>プロパティ</th><th>説明</th></tr>
  <tr><td>model</td><td>このJSONオブジェクトがPlayCanvasモデルであることを示します。</td></tr>
  <tr><td>version</td><td>JSONオブジェクトのバージョン。現在の最新バージョンは2です。</td></tr>
  <tr><td>nodes</td><td>シーンの階層を構成するノードの配列。配列は平坦ですが、親の配列はシーンのノード間の親子関係を指定します。</td></tr>
  <tr><td>name</td><td>ノードの名前(通常はアーティストによって割り当てられる)。</td></tr>
  <tr><td>position</td><td>ノードの親に相対する3つのコンポーネントの位置(XYZ)。</td></tr>
  <tr><td>rotation</td><td>ノードの親に相対する3つのコンポーネントのオイラー角回転(XYZ)。単位は度です。</td></tr>
  <tr><td>scale</td><td>ノードの親に相対する3つのコンポーネントの尺度(XYZ)。</td></tr>
  <tr><td>parents</td><td>親ノードのインデックスの配列。ルートノードの親は-1です。上記の例では、「Plane」ノードの親は「RootNode」です。</td></tr>
  <tr><td>skins</td><td>現時点ではデータのスキンに関するドキュメントはありません。</td></tr>
  <tr>
    <td>vertices</td>
    <td>
      頂点情報を含むオブジェクトの配列。各オブジェクトには複数の頂点プロパティがあります。次に設定できます；
      <ul>
        <li>position: 頂点の位置</li>
        <li>normal: 頂点の法線</li>
        <li>texCoord0: 最初のテクスチャの座標セット</li>
        <li>texCoord1: 二つ目のテクスチャの座標セット</li>
        <li>skinWeights: 頂点のスキンウェイト</li>
        <li>skinIndices: 頂点のスキンインデックス</li>
        <li>color: 頂点の色</li>
      </ul>
      各プロパティにはタイプ(float32, uint8, uint16, uint64)といくつかのコンポーネント(1-4)があります。
    </td>
  </tr>
  <tr><td>meshes</td><td>メッシュオブジェクトの配列。メッシュは頂点情報のレンダリング方法を判断するために使用されます。</td></tr>
  <tr><td>aabb</td><td>メッシュのローカル空間の軸整列された外接枠。</td></tr>
  <tr><td>min</td><td>メッシュの軸整列された外接枠の 最小座標値。</td></tr>
  <tr><td>max</td><td>メッシュの軸整列された外接枠の 最高座標値。</td></tr>
  <tr><td>vertices</td><td>このメッシュによって参照される頂点情報オブジェクトのインデックス。</td></tr>
  <tr><td>indices</td><td>メッシュが表すプリミティブの点を定義するインデックスの配列。</td></tr>
  <tr><td>type</td>
    <td>このメッシュのプリミティブのタイプ。次に設定できます：
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
  <tr><td>base</td><td>このメッシュが使用する最初のインデックス。</td></tr>
  <tr><td>count</td><td>このメッシュによって使用されるインデックスの数。</td></tr>
  <tr><td>meshInstances</td><td>メッシュのインスタンスを表すオブジェクトの配列。ひとつのメッシュを複数のメッシュのインスタンス間で共有することができます。そうすることで実行時にメモリを節約することができます。</td></tr>
  <tr><td>node</td><td>このメッシュインスタンスが参照するノードのインデックス。</td></tr>
  <tr><td>mesh</td><td>このメッシュインスタンスが参照するメッシュのインデックス。</td></tr>
</table>

