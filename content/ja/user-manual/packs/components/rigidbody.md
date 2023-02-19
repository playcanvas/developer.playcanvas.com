---
title: リジッドボディ
layout: usermanual-page.hbs
position: 14
---

Rigid Bodyコンポーネントはエンティティがシーンの物理シミュレーションに参加できるようにします。これにより、エンティティの動きを写実的にシミュレーションできます。コンポーネントインターフェイスは、Type属性に基づいて動的に異なる属性を表示します。

Rigid Body コンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、また、コンポーネントに兄弟コリジョンコンポーネントがある場合、Rigid Bodyは物理シミュレーションに含まれます。

#### Static

![Rigid Body コンポーネント (Static)][1]

#### Dynamic (and Kinematic)

![Rigid Body コンポーネント (Dynamic)][2]

#### Kinematic

![Rigid Body コンポーネント (Kinematic)][3]

Rigid bodyの形を定義するには、同じエンティティに[コリジョンコンポーネント][4]を追加する必要があります。追加しないと、rigidbodyコンポーネントには効果がなく、物理シミュレーションに参加しません。

## プロパティ

| プロパティ        | 説明 |
|-----------------|-------------|
| Type            | ボディの種類：<ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul> |
| Mass            | ボディの大きさ。シーンのワールド単位がメートルなら、massの単位はキログラムです。 |
| Linear Damping  | 毎秒ボディが失う線速度の割合。 |
| Angular Damping | 毎秒ボディが失う角運動速度.の割合。 |
| Linear Factor   | 各ワールド軸内でのボディの直線運動の乗数。如何なる軸に対して0に設定されていると、その軸で動作は発生しません。2Dゲームや1D/2D動作に便利です。 |
| Angular Factor  | 各ワールド軸内でのボディの角運動(回転)の乗数。如何なる軸に対して0に設定されていると、その軸近辺で回転動作は発生しません。 |
| Friction        | ボディが他のボディと接触した際の速度の減少を制御。 |
| Restitution     | ボディの跳ね返りの度合いを0 から 1で設定。注意：1に設定すると動いているボディが止まらずに動き続けます(restitutionが1以下の他のボディと接触する場合や停止スクリプトが設定されている場合を除く)。 |

## スクリプトのインターフェース

Rigidbodyコンポーネントのプロパティは[スクリプトコンポーネント][5]を使用して制御できます。Rigidbodyコンポーネントのスクリプティングインターフェイスは[こちら][6]です。

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /api/pc.RigidBodyComponent.html
