---
title: リジッドボディ
layout: usermanual-page.hbs
position: 14
---

Rigid Bodyコンポーネントはエンティティがシーンの物理シミュレーションに参加できるようにします。これにより、エンティティの動きを写実的にシミュレーションできます。コンポーネントインターフェイスは、Type属性に基づいて動的に異なる属性を表示します。

Rigid Body コンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、また、コンポーネントに兄弟コリジョンコンポーネントがある場合、Rigid Bodyは物理シミュレーションに含まれます。

#### Static

![Rigid Body component (Static)][1]

#### Dynamic (and Kinematic)

![Rigid Body component (Dynamic)][2]

#### Kinematic

![Rigid Body component (Kinematic)][3]

Rigid bodyの形を定義するには、同じエンティティに[コリジョンコンポーネント][4]を追加する必要があります。追加しないと、rigidbodyコンポーネントには効果がなく、物理シミュレーションに参加しません。

## プロパティ

| Property        | 説明 |
|-----------------|-------------|
| Type            | The type of the body: <ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul> |
| Mass            | The mass of the body. If world units in your scene are meters, the unit for mass is kilograms. |
| Linear Damping  | Specifies the proportion of linear velocity that is lost by the body every second. |
| Angular Damping | Specifies the proportion of angular velocity that is lost by the body every second. |
| Linear Factor   | Multiplier for a body's linear movement in each world axis. If set to 0 for any axis no movement will occur in this axis - useful for the creation of 2D games or 1D/2D movement. |
| Angular Factor  | Multiplier for a body's angular (rotational) movement about each world axis. If set to 0 for any axis, no rotation will occur around this axis. |
| Friction        | Controls how quickly a body loses velocity when in contact with other bodies. |
| Restitution     | A measure of the bounciness of a body between 0 and 1. Warning: setting to 1 means a moving body will never come to a stop (unless  colliding with other bodies with restitutions below 1, or unless a stop is scripted). |

## Scripting Interface

Rigidbodyコンポーネントのプロパティは[スクリプトコンポーネント][5]を使用して制御できます。Rigidbodyコンポーネントのスクリプティングインターフェイスは[こちら][6]です。

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /api/pc.RigidBodyComponent.html
