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
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Type</td><td>コリジョンプリミティブの種類。次を使用可能：<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul></td></tr>
    <tr><td>Half Extents</td><td>Boxのみ。コリジョンボックスの長さの半分。これは3次元のベクターです：ローカルスペースの幅の半分、高さの半分、奥行きの半分。</td></tr>
    <tr><td>Axis</td><td>Capsuleのみ。CapsuleをエンティティのローカルスペースのX, Y または Z 軸に整列する。</td></tr>
    <tr><td>Height</td><td>Capsuleのみ。Capsuleの先端から頂点までの高さ。</td></tr>
    <tr><td>Radius</td><td>SphereとCapsuleのみ。SphereまたはCapsuleボディの半径。</td></tr>
    <tr><td>Asset</td><td>Meshのみ。三角ベースのコリジョンメッシュのソースとして使用されるモデルアセット。</td></tr>
</table>

## スクリプティングインターフェイス

Collisionコンポーネントのプロパティは[スクリプトコンポーネント][8]を使ってコントロールできます。Collisionコンポーネントのスクリプティングインターフェイスは[こちら][9]。

[1]: /images/user-manual/scenes/components/component-collision-box.png
[2]: /images/user-manual/scenes/components/component-collision-capsule.png
[3]: /images/user-manual/scenes/components/component-collision-compound.png
[4]: /images/user-manual/scenes/components/component-collision-cone.png
[5]: /images/user-manual/scenes/components/component-collision-cylinder.png
[6]: /images/user-manual/scenes/components/component-collision-mesh.png
[7]: /images/user-manual/scenes/components/component-collision-sphere.png
[8]: /user-manual/packs/components/script
[9]: /api/pc.CollisionComponent.html

