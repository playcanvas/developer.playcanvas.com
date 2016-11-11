---
title: リジッドボディ
template: usermanual-page.tmpl.html
position: 8
---

Rigid Bodyコンポーネントはエンティティがシーンの物理シミュレーションに参加できるようにします。これにより、エンティティの動きを写実的にシミュレーションできます。コンポーネントインターフェイスは、Type属性に基づいて動的に異なる属性を表示します。

Rigid Body コンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、また、コンポーネントに兄弟コリジョンコンポーネントがある場合、Rigid Bodyは物理シミュレーションに含まれます。

#### Static
![Rigid Body コンポーネント (Static)][1]
#### Dynamic (およびKinematic)
![Rigid Body コンポーネント (Dynamic)][2]
#### Kinematic
![Rigid Body コンポーネント (Kinematic)][3]

Rigid bodyの形を定義するには、同じエンティティに[コリジョンコンポーネント][4]を追加する必要があります。追加しないと、rigidbodyコンポーネントには効果がなく、物理シミュレーションに参加しません。

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Type</td><td>ボディの種類：<br><ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul></td></tr>
    <tr><td>Mass</td><td>ボディの大きさ。シーンのワールド単位がメートルなら、massの単位はキログラムです。</td></tr>
    <tr><td>Linear Damping</td><td>毎秒ボディが失う線速度の割合。</td></tr>
    <tr><td>Angular Damping</td><td>毎秒ボディが失う角運動速度.の割合。</td></tr>
    <tr><td>Linear Factor</td><td>各ワールド軸内でのボディの直線運動の乗数。如何なる軸に対して0に設定されていると、その軸で動作は発生しません。2Dゲームや1D/2D動作に便利です。</td></tr>
    <tr><td>Angular Factor</td><td>各ワールド軸内でのボディの角運動(回転)の乗数。如何なる軸に対して0に設定されていると、その軸近辺で回転動作は発生しません。</td></tr>
    <tr><td>Friction</td><td>ボディが他のボディと接触した際の速度の減少を制御。</td></tr>
    <tr><td>Restitution</td><td>ボディの跳ね返りの度合いを0 から 1で設定。注意：1に設定すると動いているボディが止まらずに動き続けます(restitutionが1以下の他のボディと接触する場合や停止スクリプトが設定されている場合を除く)。</td></tr>
</table>

## スクリプティングインターフェイス

Rigidbodyコンポーネントのプロパティは[スクリプトコンポーネント][5]を使用して制御できます。Rigidbodyコンポーネントのスクリプティングインターフェイスは[こちら][6]です。

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /engine/api/stable/symbols/pc.RigidBodyComponent.html

