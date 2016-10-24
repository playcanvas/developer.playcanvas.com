---
title: コリジョン
template: usermanual-page.tmpl.html
position: 4
---

コリジョンコンポーネントはエンティティにコリジョンボリュームを割り当てます。コンポーネントインターフェイスはType属性に基づいて動的に様々な属性を表示させます。 

Collisionコンポーネントはコンポーネントパネルの右上のトグルで有効・無効を切り替えることができます。有効にした場合、また、コンポーネントがトリガーボリュームの場合(兄弟rigidbodyコンポーネントを持っていないため)、トリガーボリュームが有効になります。同様に、コンポーネントに兄弟rigidbodyコンポーネントがある場合、rigidbodyが有効になります。

#### Box
![コリジョンコンポーネント(Box)][1]
#### Sphere
![コリジョンコンポーネント (Sphere)][2]
#### Capsule
![コリジョンコンポーネント (Capsule)][3]
#### Cylinder
![コリジョンコンポーネント (Cylinder)][4]
#### Mesh
![コリジョンコンポーネント (Mesh)][5]

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

Collisionコンポーネントのプロパティは[スクリプトコンポーネント][6]を使ってコントロールできます。Collisionコンポーネントのスクリプティングインターフェイスは[こちら][7]。

[1]: /images/user-manual/scenes/components/component-collision-box.png
[2]: /images/user-manual/scenes/components/component-collision-sphere.png
[3]: /images/user-manual/scenes/components/component-collision-capsule.png
[4]: /images/user-manual/scenes/components/component-collision-cylinder.png
[5]: /images/user-manual/scenes/components/component-collision-mesh.png
[6]: /user-manual/packs/components/script
[7]: /engine/api/stable/symbols/pc.CollisionComponent.html

