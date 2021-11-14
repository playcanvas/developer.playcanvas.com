---
title: Collision
template: usermanual-page.tmpl.html
position: 6
---

コリジョンコンポーネントはエンティティにコリジョンボリュームを割り当てます。コンポーネントインターフェイスはType属性に基づいて動的に様々な属性を表示させます。 

Collisionコンポーネントはコンポーネントパネルの右上のトグルで有効・無効を切り替えることができます。有効にした場合、また、コンポーネントがトリガーボリュームの場合(兄弟rigidbodyコンポーネントを持っていないため)、トリガーボリュームが有効になります。同様に、コンポーネントに兄弟rigidbodyコンポーネントがある場合、rigidbodyが有効になります。

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

エンティティがrigidbodyコンポーネントを持つ場合、コリジョンコンポーネントはリジッドボディの形を定めます。Rigidbodyコンポーネントが存在する場合、コリジョンコンポーネントはトリガーボリュームとして扱われます。トリガーボリュームはシーン内の他のリジッドボディのシミュレーションに影響を与えることができません。かわりに、スクリプトコンポーネントを追加してトリガーイベントに反応するスクリプトを添付することができます。例えば、rigidbodyコンポーネントを持つ他のエンティティがトリガーに出入りする際に、スクリプトに通知が行くように設定できます。

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of collision primitive. Can be:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul></td></tr>
    <tr><td>Half Extents</td><td>Box only. The half-extents of the collision box. This is a 3-dimensional vector: local space half-width, half-height, and half-depth.</td></tr>
    <tr><td>Axis</td><td>Capsule only. Aligns the capsule with the local-space X, Y or Z axis of the entity.</td></tr>
    <tr><td>Height</td><td>Capsule only. The tip-to-tip height of the capsule.</td></tr>
    <tr><td>Radius</td><td>Sphere and Capsule only. The radius of the sphere or capsule body.</td></tr>
    <tr><td>Asset</td><td>Mesh only. The model asset that will be used as a source for the triangle-based collision mesh.</td></tr>
</table>

## スクリプティングインターフェイス

You can control a Collision component's properties using a [script component][8]. The Collision component's scripting interface is [here][9].

[1]: /images/user-manual/scenes/components/component-collision-box.png
[2]: /images/user-manual/scenes/components/component-collision-capsule.png
[3]: /images/user-manual/scenes/components/component-collision-compound.png
[4]: /images/user-manual/scenes/components/component-collision-cone.png
[5]: /images/user-manual/scenes/components/component-collision-cylinder.png
[6]: /images/user-manual/scenes/components/component-collision-mesh.png
[7]: /images/user-manual/scenes/components/component-collision-sphere.png
[8]: /user-manual/packs/components/script
[9]: /engine/api/stable/symbols/pc.CollisionComponent.html

