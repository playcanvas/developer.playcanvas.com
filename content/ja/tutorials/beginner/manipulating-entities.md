---
title: エンティティの操作
template: tutorial-page.tmpl.html
---

このチュートリアルではエンティティの位置、方向、尺度を変更する方法を紹介します。

エンティティはPlayCanvasフレームワークを使用して構築されたほとんどのアプリケーションの基礎を形成します。エンティティは、プレイヤキャラクター、銃弾、敵、または単に空間内の点を表すことができます。

エンティティは特殊な形態のグラフノードです。`pc.GraphNode`から挙動の多くを継承します。以下で適用されるすべての操作はグラフノードにも適用することができます。

エンティティに実行する最も一般的な操作の1つは、変換行列の変更です。エンティティのローカル変換プロパティはエンティティの位置、方向及び尺度を決定し、同様にすべての子エンティティに影響を与えます。変換の操作方法を覚えるのは、インタラクティブなアプリケーションを作るために重要です。

### ローカル及びワールド座標

An important part of understanding how to move and manipulate Entities is understanding local and world co-ordinate systems. The world co-ordinate systems is shared by all Entities, it has a fixed origin `(0,0,0)` and a fixed orientation - where `(0,1,0)` is up. The local co-ordinate system relative to the Entity itself. So the local origin is the Entity position, and the orientation follows the orientation of the Entity.

<img src="/images/tutorials/world.jpg" style="float:left;" alt="World co-ordinates"/>
<img src="/images/tutorials/local.jpg" style="float:right;" alt="Local co-ordinates"/>
<div style="clear:both" />
*ワールドとローカルの座標システム*
<br />

### 階層

An important part of the Entity system to understand is the Entity Graph or Hierarchy. As Entities are a type of graph node they are collected together in a graph or a hierarchy of parents and children. Each Entity can have a single parent and multiple children. Child Entities inherit transformation information from their parents. An Entity's world transformation matrix is multiplying the local transform by the world transform of the parent Entity. So, for example, if a child Entity has a local translation of `(1,0,0)` and it's parent has a local translation of `(0,1,0)`, the world position of the child will be `(1,1,0)`

## 位置

エンティティの位置を取得するのは簡単です

~~~js~~~
// エンティティの親の座標システムに関連したエンティティの位置を取得
var lp = entity.getLocalPosition();

// ワールド空間でエンティティの位置を取得
var wp = entity.getPosition();
~~~

これらのメソッドはどちらも`pc.Vec3`(配列形式[x,y,z]のベクトル量) を返します。

エンティティの位置の設定は同じように簡単です。

~~~js~~~
// エンティティの親の座標系に関連させて、エンティティの位置を設定します
entity.setLocalPosition(x, y, z);

// ワールド空間内にエンティティの位置を設定します
entity.setPosition(x, y, z);
~~~

### エンティティを動かす

エンティティを移動するには、エンティティの位置を追加するか、translate と translateLocalのヘルパー関数を使用します。

~~~js~~~
// エンティティをワールド空間の正のX軸から1単位下に移す
entity.translate(1, 0, 0);

// エンティティをエンティティのローカルz軸から1単位下に移す
entity.translateLocal(0, 0, 1);
~~~

## 方向付け

エンティティの方向を設定するには、絶対的な回転を設定するか、インクリメンタルな回転を適用します。

Setting absolute rotations can be done using either [Euler angles][1] or [quaternions][2]. The Wikipedia explanations of these two mathematical representations of rotation are a little hard to follow but the basics are easy to understand. Here are the important facts:

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
// アイデンティティ回転を作成
var q = new pc.Quat();
// エンティティが同じ回転を持つように設定。次と同じ：
// entity.setLocalEulerAngles(0, 0, 0)
entity.setLocalRotation(q);

// エンティティがワールド空間座標システムに関連する回転を
// 持たないよう設定。entity.setEulerAngles(0, 0, 0)と同じ。
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
// ローカルY軸でエンティティを2の倍数でスケール
entity.setLocalScale(1, 2, 1);
~~~

もう少し興味深い例を紹介します：

~~~js~~~
// 時間上でsine関数を使用してエンティティをスケール
this.timer += deltaTime;
var s = Math.sin(this.timer) + 1;
entity.setLocalScale(s, s, s);
~~~

現在、ワールド空間でエンティティのスケールを設定することはできません。

[1]: http://en.wikipedia.org/wiki/Euler_angles
[2]: http://en.wikipedia.org/wiki/Quaternion

