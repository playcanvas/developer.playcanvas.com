---
title: Animation
template: usermanual-page.tmpl.html
position: 2
---

Animationコンポーネントを使用すれば、エンティティはModelコンポーネントに割り当てられているモデルに適用することのできるアニメーションを指定できます。

Animationコンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、コンポーネント指定されたアニメーションを再生します。

![アニメーションコンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Assets</td><td>このエンティティで利用できるアニメーションアセット。ピッカーコントロールから複数のアニメーションを割り当てることが出来ます。</td></tr>
    <tr><td>Speed</td><td>アニメーションのプレイバック速度の乗数。0はアニメーションプレイバックをフリーズさせます。1はアセットの通常のプレイバック速度を意味します。</td></tr>
    <tr><td>Activate</td><td>チェックが入っていると、コンポーネントは読み込み時にアニメーションを再生します。</td></tr>
    <tr><td>Loop</td><td>チェックが入っていると、アニメーションは終了した際に最初に戻ります。チェックが入っていない場合は、アニメーションは最終フレームで停止します。</td></tr>
</table>

## スクリプティングインターフェイス

アニメーションコンポーネントのプロパティは[スクリプトコンポーネント][2]を使用して制御することができます。アニメーションコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.AnimationComponent.html

