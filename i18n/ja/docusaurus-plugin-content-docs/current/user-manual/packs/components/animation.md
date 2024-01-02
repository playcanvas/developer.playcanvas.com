---
title: Animation
layout: usermanual-page.hbs
sidebar_position: 2
---

Animationコンポーネントを使用すれば、エンティティはModelコンポーネントに割り当てられているモデルに適用することのできるアニメーションを指定できます。

Animationコンポーネントは、コンポーネントパネルの右上にあるトグルを使用して有効または無効にすることができます。有効にすると、コンポーネントは割り当てられたアニメーションを再生します。

![Animation component][1]

## プロパティ

| プロパティ | 説明 |
|----------|-------------|
| Assets   | このエンティティで利用可能なアニメーションアセット。複数のアニメーションをピッカーコントロールで割り当てることが可能です。 |
| Speed    | アニメーションの再生速度の乗数です。0はアニメーションの再生を停止し、1はアセットの通常の再生速度を表します。 |
| Activate | チェックを入れると、コンポーネントは読み込み時にアニメーションの再生を開始します。 |
| Loop     | チェックを入れると、アニメーションが完了すると常に開始位置に戻ります。そうでない場合、アニメーションは最終フレームで停止します。 |

## スクリプトのインターフェース

[Scriptコンポーネント][2]を使用してAnimationコンポーネントのプロパティを制御することができます。Animationコンポーネントのスクリプトインターフェースは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.AnimationComponent.html
