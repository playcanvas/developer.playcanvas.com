---
title: Collision
---

Collisionコンポーネントは、エンティティにコリジョンを割り当てます。 'Type'属性に基づいてコンポーネントのインターフェースは動的に異なる属性を表示します。

Collisionコンポーネントは、コンポーネントパネルの右上にあるトグルを使用して有効または無効にできます。有効で、かつコンポーネントがトリガー体積である場合(姉妹のRigidBodyコンポーネントを持たないため)、トリガー体積が有効になります。同様に、コンポーネントに姉妹のRigidBodyコンポーネントがある場合、rigidbodyが有効になります。

#### Box
![Collision component (Box)][1]
#### Capsule
![Collision component (Capsule)][2]
#### Compound
![Collision component (Compound)][3]
#### Cone
![Collision component (Cone)][4]
#### Cylinder
![Collision component (Cylinder)][5]
#### Mesh
![Collision component (Mesh)][6]
#### Sphere
![Collision component (Sphere)][7]

エンティティにRigidBodyコンポーネントがある場合、Collisionコンポーネントはrigidbodyの形状を決定します。RigidBodyコンポーネントが存在しない場合、Collisionコンポーネントはトリガー体積として扱われます。トリガー体積は、シーン内の他のRigidBodyに影響を与えることはできません。代わりに、Scriptコンポーネントを追加し、トリガーイベントに応答するスクリプトをアタッチできます。たとえば、RigidBodyコンポーネントを持つ別のエンティティがトリガーに入るか出ると、スクリプトに通知できます。

## Properties

| プロパティ名     | 説明 |
|--------------|-------------|
| タイプ         | プリミティブのタイプ。次のいずれかができます:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul> |
| Half Extents | Boxのみ。コリジョンボックスの半径。これは3次元ベクトルで、ローカルスペースの半幅、半高度、および半深度です。 |
| Axis         | Capsuleのみ。カプセルをエンティティのローカルスペースのX、Y、またはZ軸に整列させます。 |
| Height       | Capsuleのみ。カプセルの先端から先端までの高さです。 |
| Radius       | SphereとCapsuleのみ。球体またはカプセルの体の半径です。 |
| アセット (Asset)        | Meshのみ。三角形ベースのコリジョンメッシュのソースとして使用されるModelアセット。 |

## スクリプトインターフェース

[Scriptコンポーネント][8]を使用してCollisionコンポーネントのプロパティを制御できます。Collisionコンポーネントのスクリプティングインターフェイスは[こちら][9]です。

[1]: /images/user-manual/scenes/components/component-collision-box.png
[2]: /images/user-manual/scenes/components/component-collision-capsule.png
[3]: /images/user-manual/scenes/components/component-collision-compound.png
[4]: /images/user-manual/scenes/components/component-collision-cone.png
[5]: /images/user-manual/scenes/components/component-collision-cylinder.png
[6]: /images/user-manual/scenes/components/component-collision-mesh.png
[7]: /images/user-manual/scenes/components/component-collision-sphere.png
[8]: /user-manual/scenes/components/script
[9]: https://api.playcanvas.com/classes/Engine.CollisionComponent.html
