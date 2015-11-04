---
title: Animation
template: usermanual-page.tmpl.html
position: 1
---

アニメーションコンポーネントを使用すれば、エンティティはモデルコンポーネントに割り当てられているモデルに適用することのできるアニメーションを指定できます。

<img src="/images/user-manual/components/component-animation.jpg" style="width: 300px" />

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>チェックが入っているとコンポーネントはアニメーションを再生します。</td></tr>
    <tr><td>Asset</td><td>こおエンティティで利用できるアニメーションアセット。ピッカーコントロールから複数のアニメーションを割り当てることが出来ます。</td></tr>
    <tr><td>Speed Factor</td><td>アニメーションのプレイバック速度の乗数。0はアニメーションプレイバックをフリーズさせます。1はアセットの通常のプレイバック速度を意味します。</td></tr>
    <tr><td>Loop</td><td>チェックが入っていると、アニメーションは終了した際に最初に戻ります。チェックが入っていない場合は、アニメーションは最終フレームで停止します。</td></tr>
    <tr><td>Activate</td><td>チェックが入っていると、コンポーネントは読み込み時にアニメーションを再生します。</td></tr>
</table>

## スクリプティングインターフェイス

アニメーションコンポーネントのプロパティは[スクリプトコンポーネント][1]を使用して制御することができます。アニメーションコンポーネントのスクリプティングインターフェイスは[こちら][2]です。

[1]: /user-manual/packs/components/script
[2]: /engine/api/stable/symbols/pc.AnimationComponent.html

