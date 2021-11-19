---
title: ブルームエフェクト
template: usermanual-page.tmpl.html
position: 1
---

ブルームは現実世界のカメラが現実には存在しないものを写しだしてしまうアーティファクトを再現するために使うポストプロセスエフェクトです。このエフェクトは画像の明るい領域のエッジから漏れ広がる光のふちを描画し、非常に明るい光がそのシーンを撮影しているカメラの露出限界を超えている様子を表現します。<small>([Wikipedia][1]より)</small>

下の画像がブルームエフェクトなしの画像です:

<img alt="Image without effect" src="/images/platform/posteffects/without_effects.png"></img>

そして下の画像がブルームエフェクトを適応した画像です:

<img alt="Image with effect" src="/images/platform/posteffects/with_bloom.png"></img>

ビルトインのブルームエフェクトは以下のパラメータを持ちます:
* **Bloom Intensity**: エフェクトの強度
* **Bloom Threshold**: この閾値より明るいピクセルのみがエフェクトの対象となります。0から1の間の値を取ります。
* **Blur Amount**: ぼかしの量を設定します。

[1]: https://en.wikipedia.org/wiki/Bloom_(shader_effect)

