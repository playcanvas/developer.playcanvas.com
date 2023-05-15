---
title: 2D
layout: usermanual-page.hbs
position: 17
---

PlayCanvasエンジンは、3Dゲームやアプリを素早く簡単に作成するために設計されています。しかし、2Dゲームを作成するための多数の優れた機能もサポートしています。PlayCanvasの2D機能により、3Dエンジンの強力な利点を2Dゲームにも活用できます。

# 基本的な機能

## スプライト

![Sprite][5]

2Dグラフィックはしばしば**スプライト**として知られています。PlayCanvasでは、[スプライトアセット][0]と[Spriteコンポーネント][1]を作成できます。Spriteコンポーネントは、シーン内で2Dグラフィックを表示するためにエンティティにアタッチされます。PlayCanvasのスプライトアセットは、テクスチャアトラス内の複数の画像フレームを連続して格納します。そのため、スプライトアセットを使用して、フリップブックスタイルのアニメーショングラフィックを作成することができます。

## テクスチャアトラス

![Texture Atlas][6]

[テクスチャアトラス][2]は、標準的な[テクスチャ][3]アセットの強化版です。通常のテクスチャの機能に加えて、テクスチャアトラスには「フレーム」セットの定義が含まれます。各フレームは、スプライトアセットで参照できるテクスチャの領域です。

## スプライトエディタ

![Sprite Editor][7]

[スプライトエディタ][4]は、テクスチャアトラスフレームとスプライトアセットを生成するためのツールです。任意のテクスチャアトラスまたはスプライトアセットをダブルクリックすることで、スプライトエディタを開くことができます。[もっと読む][4]。

*アートワーク [PixelBoy](https://twitter.com/2pblog1) によって作成されました。*

[0]: /user-manual/assets/sprites
[1]: /user-manual/packs/components/sprite
[2]: /user-manual/assets/texture-atlas
[3]: /user-manual/assets/textures
[4]: /user-manual/2D/sprite-editor

[5]: /images/user-manual/2D/sprite.jpg
[6]: /images/user-manual/2D/texture-atlas.jpg
[7]: /images/user-manual/2D/sprite-editor.jpg
