---
title: Animation
template: usermanual-page.tmpl.html
position: 1
---

Animationコンポーネントを使用すれば、エンティティはModelコンポーネントに割り当てられているモデルに適用することのできるアニメーションを指定できます。

Animationコンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、コンポーネント指定されたアニメーションを再生します。

![アニメーションコンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Assets</td><td>The animation assets that can be utilized by this entity. Multiple animations can be assigned via the picker control.</td></tr>
    <tr><td>Speed</td><td>A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset.</td></tr>
    <tr><td>Activate</td><td>If checked, the component will start playing the animation on load.</td></tr>
    <tr><td>Loop</td><td>If checked, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame.</td></tr>
</table>

## スクリプティングインターフェイス

アニメーションコンポーネントのプロパティは[スクリプトコンポーネント][2]を使用して制御することができます。アニメーションコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.AnimationComponent.html

