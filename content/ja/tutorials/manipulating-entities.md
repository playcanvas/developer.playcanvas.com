---
title: Manipulating Entities
template: tutorial-page.tmpl.html
tags: basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg
---

このチュートリアルではエンティティの位置、方向、尺度を変更する方法を紹介します。

エンティティはPlayCanvasフレームワークを使用して構築されたほとんどのアプリケーションの基礎を形成します。エンティティは、プレイヤキャラクター、銃弾、敵、または単に空間内の点を表すことができます。

エンティティは特殊な形態のグラフノードです。`pc.GraphNode`から挙動の多くを継承します。以下で適用されるすべての操作はグラフノードにも適用することができます。

エンティティに実行する最も一般的な操作の1つは、変換行列の変更です。エンティティのローカル変換プロパティはエンティティの位置、方向及び尺度を決定し、同様にすべての子エンティティに影響を与えます。変換の操作方法を覚えるのは、インタラクティブなアプリケーションを作るために重要です。

### ローカル及びワールド座標

エンティティの移動及び操作を理解するには、ローカルとワールド座標系を理解する必要があります。ワールド座標系は全てのエンティティで共有され、固定の軸である`(0,0,0)`と、 `(0,1,0)` を上とする固定の方向があります。ローカルの座標系はエンティティ自体に比較します。つまり、ローカルの軸はエンティティの位置となり、方向はエンティティの方向に従います。

<img src="/images/tutorials/world.jpg" style="float:left;" alt="World co-ordinates"/>
<img src="/images/tutorials/local.jpg" style="float:right;" alt="Local co-ordinates"/>
<div style="clear:both" />
*World and Local co-ordinate systems*
<br />

### 階層

エンティティシステムについて理解しておくべき重要な部分は、エンティティグラフまたは階層です。エンティティはグラフノードタイプなので、グラフまたは親と子の階層に収集されています。各エンティティは、単一の親と複数の子を持つことができます。子エンティティは、親から変換情報を相続します。エンティティのワールド変換行列は、ローカルの変換を親エンティティのワールド変換と乗算します。例えば、子エンティティが`(1,0,0)`のローカル変換を持ち、その親が`(0,1,0)`のローカル変換を持つ場合、子のワールド位置は`(1,1,0)`になります。

## 位置

エンティティの位置を取得するのは簡単です

~~~js~~~
// Get the entity's position relative to the coordinate system of the entity's parent
var lp = entity.getLocalPosition();

// Get the entity's position in world space
var wp = entity.getPosition();
~~~

これらのメソッドはどちらも`pc.Vec3`(配列形式[x,y,z]のベクトル量) を返します。

エンティティの位置の設定は同じように簡単です。

~~~js~~~
// Set the entity's position relative to the coordinate system of the entity's parent
entity.setLocalPosition(x, y, z);

// Set the entity's position in world space
entity.setPosition(x, y, z);
~~~

### エンティティを動かす

エンティティを移動するには、エンティティの位置を追加するか、translate と translateLocalのヘルパー関数を使用します。

~~~js~~~
// Translate the entity 1 unit down the positive x axis of world space
entity.translate(1, 0, 0);

// Translate the entity 1 unit down the entity's local z axis
entity.translateLocal(0, 0, 1);
~~~

## 方向付け

エンティティの方向を設定するには、絶対的な回転を設定するか、インクリメンタルな回転を適用します。

絶対的な回転の設定は、 [Euler angles][1] または [quaternions][2]を使用して行うことができます。これら二つの数学的表現に対するWikipediaの説明は少し難しいですが、基本は簡単です。重要事項は次のとおりです：

** オイラー角 **

* Euler angles are three rotations in degrees about the X, Y and Z axes of a coordinate system *in that order*.
* If looking down a coordinate system axis, a positive Euler angle will result in an anti-clockwise rotation around that axis.
* Euler angles are easy to understand because you can visualize the effect they will have in your head.

** 4元数 **

* Quaternions are stored as 4 numbers and represent any orientation in 3D space.
* They are difficult to set directly, but can be set from Euler angles, rotation matrices or an axis-angle representation.
* Although they are hard to visualize, they are useful since they are robust and can be quickly interpolated (when animating rotation).

エンティティをスクリプトする場合、オイラー角を使用してエンティティの回転を設定する可能性が高いです。 例えば：

~~~js~~~
// Rotate 30 degrees anticlockwise around the x axis of the parent entity's coordinate
// system and then 45 degrees around its y axis and lastly 60 degrees around its z axis
entity.setLocalEulerAngles(30, 45, 60);

// Rotate 30 degrees anticlockwise around the world space x axis and then 45 degrees
// around the world space y axis and lastly 60 degrees around the world space z axis
entity.setEulerAngles(30, 45, 60);
~~~
However, if you do want to set an Entity's rotation in quaternion form, you can use the following functions:

~~~js~~~
// Create an identity rotation
var q = new pc.Quat();
// Set the entity to have the same rotation as its parent - equivalent to
// entity.setLocalEulerAngles(0, 0, 0)
entity.setLocalRotation(q);

// Set the entity to have no rotation with respect to the world space coordinate
// system  - equivalent to entity.setEulerAngles(0, 0, 0)
entity.setRotation(q);
~~~

インクリメンタルにエンティティを回転するには、rotateを使用してエンティティをワールド空間軸に関連させて回転させるか、rotateLocalを使用してエンティティの現在の軸に関連させて回転させます。

例えば、ワールド上軸の周りに180度エンティティを回転させるには：

~~~js~~~
entity.rotate(0, 180, 0);
~~~

または、ローカルX軸の周りにエンティティを90度回転させるには：

~~~js~~~
entity.rotateLocal(90, 0, 0);
~~~

## スケール

エンティティを拡大縮小するには次の関数を呼び出します：

~~~js~~~
// Scale the entity by a factor of 2 in the local Y axis
entity.setLocalScale(1, 2, 1);
~~~

もう少し興味深い例を紹介します：

~~~js~~~
// Scale the entity using a sine function over time
this.timer += deltaTime;
var s = Math.sin(this.timer) + 1;
entity.setLocalScale(s, s, s);
~~~

現在、ワールド空間でエンティティのスケールを設定することはできません。

[1]: http://en.wikipedia.org/wiki/Euler_angles
[2]: http://en.wikipedia.org/wiki/Quaternion

