---
title: 色相-彩度 エフェクト
layout: usermanual-page.hbs
position: 4
---

色相 (Hue) 彩度 (Saturation) エフェクトは、レンダリングされたイメージの色相と彩度を変更できます。

これはエフェクトをかけていない画像です。

![Image without effect][1]

これがエフェクトをかけて色調と彩度を調整した画像です:

![Image with effect][2]

ビルトインの色調-彩度エフェクトは以下の様な属性値が設定されています:

* **Hue**: 画像の色調です。-1から1の範囲の値をとります。(-1はマイナス180度、0は変化なし、1は180度となります)
* **Saturation**: 画像の彩度です。-1から1の範囲の値をとります。(-1は灰色で塗りつぶした状態、0は変化なし、1は最大のサチュレーションとなります)

ポストエフェクトスクリプトは[GitHub][3]で入手できます。

[1]: /images/platform/posteffects/without_effects.png
[2]: /images/platform/posteffects/with_hue_saturation.png
[3]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-huesaturation.js
