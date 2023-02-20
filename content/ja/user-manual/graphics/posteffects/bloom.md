---
title: Bloom エフェクト
layout: usermanual-page.hbs
position: 1
---

[ブルーム][1]は現実世界のカメラが現実には存在しないものを写しだしてしまうアーティファクトを再現するために使うポストプロセスエフェクトです。このエフェクトは画像の明るい領域のエッジから漏れ広がる光のふちを描画し、非常に明るい光がそのシーンを撮影しているカメラの露出限界を超えている様子を表現します。

下の画像がブルームエフェクトなしの画像です:

![Image without effect][2]

そして下の画像がブルームエフェクトを適応した画像です:

![Image with effect][3]

ビルトインのブルームエフェクトは以下のパラメータを持ちます:

* **Bloom Intensity**: エフェクトの強度
* **Bloom Threshold**: この閾値より明るいピクセルのみがエフェクトの対象となります。0から1の間の値を取ります。
* **Blur Amount**: ぼかしの量を設定します。

Find the post-processing effect script on [GitHub][4].

[1]: https://en.wikipedia.org/wiki/Bloom_(shader_effect)
[2]: /images/platform/posteffects/without_effects.png
[3]: /images/platform/posteffects/with_bloom.png
[4]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-bloom.js
