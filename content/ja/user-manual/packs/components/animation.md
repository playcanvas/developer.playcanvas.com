---
title: アニメーション
layout: usermanual-page.hbs
position: 2
---

Animationコンポーネントを使用すれば、エンティティはModelコンポーネントに割り当てられているモデルに適用することのできるアニメーションを指定できます。

Animationコンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、コンポーネント指定されたアニメーションを再生します。

![アニメーションコンポーネント][1]

## Properties

| Property | Description |
|----------|-------------|
| アセット   | The animation assets that can be utilized by this entity. Multiple animations can be assigned via the picker control. |
| Speed    | A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset. |
| Activate | If checked, the component will start playing the animation on load. |
| Loop     | If checked, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame. |

## Scripting Interface

アニメーションコンポーネントのプロパティは[スクリプトコンポーネント][2]を使用して制御することができます。アニメーションコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.AnimationComponent.html
