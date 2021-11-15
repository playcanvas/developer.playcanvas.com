---
title: Sprite
template: usermanual-page.tmpl.html
position: 13
---

Spriteは、Sceneにレンダリングできる2Dグラフィックです。Sprite Assetは[Texture Atlas][1]へのリファレンスかつ、ここからのフレームのシーケンスです。つまり、スプライトは単一の画像（アトラスから抜き出したもの）も、パラパラ漫画形式のアニメーション（アトラスからの複数のフレーム）も描写することができます。

## プロパティ

![Sprites][3]

### ユニットごとのピクセル

PlayCanvasのシーンで、1Unitにマッピングするスプライト画像の中のピクセル数。例：`pixelsPerUnit` が1でスプライトが32x32の場合、ピクセルはシーンでのレンダリング時に縦横32ユニットとなります。デフォルトでは *シンプル* レンダリングモードのあるスプライトは`pixelsPerUnit`を100に設定することで生成されます。つまり、100x100のスプライトは、シーン内で1ユニットの幅・高さになるということです。

*スライス* スプライトの生成は、デフォルトでは `pixelsPerUnit` 値の1で行われます。この理由は、通常スライススプライトが使用されるのがユーザーインターフェースをビルドするためのScreen Componentの一部としてだからです。1スプライトピクセルは、1スクリーンピクセルにマッピングしてください。

### レンダリングモード

* Simple - the sprite does not use the border values
* Sliced - the sprite uses the border values to perform [9-sliced][2] rendering by stretching.
* Tiled - the sprite uses the border values to perform [9-sliced][2] rendering by tiling.

### テクスチャ アトラス

スプライトが参照するTexture Atlas

[1]: /user-manual/assets/texture-atlas
[2]: /user-manual/2D/9-slicing
[3]: /images/user-manual/assets/sprites/sprites.jpg

