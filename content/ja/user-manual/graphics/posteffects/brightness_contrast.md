---
title: 明るさ-コントラスト エフェクト
layout: usermanual-page.hbs
position: 2
---

輝度とコントラストエフェクトは、レンダリング後の画像の輝度とコントラストを調整します。

エフェクトをかけていない画像:

![Image without effect][1]

これがエフェクトをかけて輝度とコントラストを調整した画像です:

![Image with effect][2]

ビルトインの輝度とコントラストエフェクトは以下の様な属性値が設定されています:

* **輝度**: 画像の輝度です。-1から1の範囲の値をとります。(-1は黒で塗りつぶされた状態、0は変化なし、1は白で塗りつぶされた状態となります)
* **コントラスト**: 画像のコントラストです。-1から1の範囲の値をとります。(-1は灰色で塗りつぶした状態、0は変化なし、1は最大のコントラストとなります)

Find the post-processing effect script on [GitHub][3].

[1]: /images/platform/posteffects/without_effects.png
[2]: /images/platform/posteffects/with_brightness_contrast.png
[3]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-brightnesscontrast.js
