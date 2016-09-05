---
title: Collision
template: usermanual-page.tmpl.html
position: 4
---

The Collision component assigns a collision volume to the entity. The component interface dynamically displays different attributes based on the 'Type' attribute.

The Collision component can be enabled or disabled using the toggle in the top right of the component panel. If enabled and if the component is a trigger volume (because it has no sibling rigidbody component), the trigger volume will be enabled. Likewise, if the component does have a sibling rigidbody component, the rigidbody will be enabled.

#### Box
![Collision component (Box)][1]
#### Sphere
![Collision component (Sphere)][2]
#### Capsule
![Collision component (Capsule)][3]
#### Cylinder
![Collision component (Cylinder)][4]
#### Mesh
![Collision component (Mesh)][5]

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

You can control a Collision component's properties using a [script component][6]. The Collision component's scripting interface is [here][7].

[1]: /images/user-manual/scenes/components/component-collision-box.png
[2]: /images/user-manual/scenes/components/component-collision-sphere.png
[3]: /images/user-manual/scenes/components/component-collision-capsule.png
[4]: /images/user-manual/scenes/components/component-collision-cylinder.png
[5]: /images/user-manual/scenes/components/component-collision-mesh.png
[6]: /user-manual/packs/components/script
[7]: /engine/api/stable/symbols/pc.CollisionComponent.html

