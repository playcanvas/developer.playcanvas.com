---
title: Bloom Effect
template: usermanual-page.tmpl.html
position: 1
---

ブルームは現実世界のカメラが現実には存在しないものを写しだしてしまうアーティファクトを再現するために使うポストプロセスエフェクトです。このエフェクトは画像の明るい領域のエッジから漏れ広がる光のふちを描画し、非常に明るい光がそのシーンを撮影しているカメラの露出限界を超えている様子を表現します。<small>([Wikipedia][1]より)</small>

下の画像がブルームエフェクトなしの画像です:

<img alt="Image without effect" src="/images/platform/posteffects/without_effects.png"></img>

そして下の画像がブルームエフェクトを適応した画像です:

<img alt="Image with effect" src="/images/platform/posteffects/with_bloom.png"></img>

The built-in bloom effect has the following attributes:
* **Bloom Intensity**: The intensity of the effect
* **Bloom Threshold**: Only pixels brighter than this threshold will be processed. Ranges from 0 to 1.
* **Blur Amount**: Controls the amount of blurring.

[1]: http://en.wikipedia.org/wiki/Bloom_(shader_effect)

