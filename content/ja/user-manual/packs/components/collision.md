---
title: コリジョン
template: usermanual-page.tmpl.html
position: 5
---

コリジョンコンポーネントはエンティティにコリジョンボリュームを割り当てます。コンポーネントインターフェイスはType属性に基づいて動的に様々な属性を表示させます。 

#### Box
<img src="/images/user-manual/components/component-collision-box.jpg" style="width: 300px" />
#### Sphere
<img src="/images/user-manual/components/component-collision-sphere.jpg" style="width: 300px" />
#### Capsule
<img src="/images/user-manual/components/component-collision-capsule.jpg" style="width: 300px" />
#### Cylinder
<img src="/images/user-manual/components/component-collision-cylinder.jpg" style="width: 300px" />
#### Mesh
<img src="/images/user-manual/components/component-collision-mesh.jpg" style="width: 300px" />

エンティティがrigidbodyコンポーネントを持つ場合、コリジョンコンポーネントはリジッドボディの形を定めます。Rigidbodyコンポーネントが存在する場合、コリジョンコンポーネントはトリガーボリュームとして扱われます。トリガーボリュームはシーン内の他のリジッドボディのシミュレーションに影響を与えることができません。かわりに、スクリプトコンポーネントを追加してトリガーイベントに反応するスクリプトを添付することができます。例えば、rigidbodyコンポーネントを持つ他のエンティティがトリガーに出入りする際に、スクリプトに通知が行くように設定できます。

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>これが選択されていて、コンポーネントがトリガーボリュームの場合(兄弟のrigidbodyコンポーネントが無いため)、トリガーボリュームが有効になります。同様に、コンポーネントに兄弟のrigidbodyコンポーネントがある場合、rigidbodyが有効になります。</td></tr>
    <tr><td>Type</td><td>コリジョンプリミティブの種類。次を使用可能：<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul></td></tr>
    <tr><td>Half Extents</td><td>Boxのみ。コリジョンボックスの長さの半分。これは3次元のベクターです：ローカルスペースの幅の半分、高さの半分、奥行きの半分。</td></tr>
    <tr><td>Axis</td><td>Capsuleのみ。CapsuleをエンティティのローカルスペースのX, Y または Z 軸に整列する。</td></tr>
    <tr><td>Height</td><td>Capsuleのみ。Capsuleの先端から頂点までの高さ。</td></tr>
    <tr><td>Radius</td><td>SphereとCapsuleのみ。SphereまたはCapsuleボディの半径。</td></tr>
    <tr><td>Asset</td><td>Meshのみ。三角ベースのコリジョンメッシュのソースとして使用されるモデルアセット。</td></tr>
</table>

## スクリプティングインターフェイス

コリジョンコンポーネントのプロパティは[スクリプトコンポーネント][6]を使ってコントロールできます。コリジョンコンポーネントのスクリプティングインターフェイスは[こちら][7]。

[6]: /user-manual/packs/components/script
[7]: /engine/api/stable/symbols/pc.CollisionComponent.html

[1]: /images/platform/component_collisionbox.png
[2]: /images/platform/component_collisionsphere.png
[3]: /images/platform/component_collisioncapsule.png
[4]: /images/platform/component_collisioncylinder.png
[5]: /images/platform/component_collisionmesh.png

