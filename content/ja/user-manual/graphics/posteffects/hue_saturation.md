---
title: 色相-彩度 エフェクト
layout: usermanual-page.hbs
position: 4
---

色調とサチュレーションエフェクトは、レンダリング後の画像の色調とサチュレーションを調整します。

エフェクトをかけていない画像:

![Image without effect][1]

これがエフェクトをかけて色調とサチュレーションを調整した画像です:

![Image with effect][2]

ビルトインの色調とサチュレーションエフェクトは以下の様な属性値が設定されています:

* **色調**: 画像の色調です。-1から1の範囲の値をとります。(-1はマイナス180度、0は変化なし、1は180度となります)
* **サチュレーション**: 画像のサチュレーションです。-1から1の範囲の値をとります。(-1は灰色で塗りつぶした状態、0は変化なし、1は最大のサチュレーションとなります)

Find the post-processing effect script on [GitHub][3].

[1]: /images/platform/posteffects/without_effects.png
[2]: /images/platform/posteffects/with_hue_saturation.png
[3]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-huesaturation.js
