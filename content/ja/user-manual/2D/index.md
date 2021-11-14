---
title: 2D
template: usermanual-page.tmpl.html
position: 17
---

PlayCanvas Engineは3Dゲームやアプリケーションをスピーディに簡単に作成できるよう設計されています。それだけでなく、2Dゲーム作成のための多くの優れた機能もサポートしています。PlayCanvasの２D機能では強力な3Dエンジンを、２Dゲーム用に使用できます。

# 基本の機能

## スプライト

![スプライト][5]

2Dグラフィックは、しばしば **スプライト** として知られています。PlayCanvasでは[スプライトアセット][0]と[スプライトコンポーネント][1]を生成できます。スプライトコンポーネントはエンティティにアタッチされており、シーンに２Dグラフィックが表示されるようにしています。PlayCanvasでのスプライトアセットは、シーケンス内のテクスチャアトラスから複数の画像を保存します。つまり、スプライトアセットを使用して、ゲーム内にパラパラ漫画形式のアニメーショングラフィックを作成することができるのです。

## テクスチャアトラス

![テクスチャアトラス][6]

[テクスチャアトラス][2]は、通常の [テクスチャ][3]アセットの拡張版です。通常のテクスチャ機能に加えて、テクスチャアトラスには一連の「フレーム」の定義が含まれています。各フレームはスプライトアセット内で参照されるテクスチャのリージョンです。

## スプライトエディタ

![スプライトエディタ[7]

 [スプライトエディタ][4]はテクスチャアトラスフレームやスプライトアセットを生成するのに使用するツールです。 スプライトエディタは、テクスチャアトラスもしくはスプライトアセットをダブルクリックすることで開くことができます。[詳細はこちらをご確認ください。][4]

*[PixelBoy](https://twitter.com/2pblog1)による作品*

[0]: /user-manual/assets/sprites
[1]: /user-manual/packs/components/sprite
[2]: /user-manual/assets/texture-atlas
[3]: /user-manual/assets/textures
[4]: /user-manual/2D/sprite-editor

[5]: /images/user-manual/2D/sprite.jpg
[6]: /images/user-manual/2D/texture-atlas.jpg
[7]: /images/user-manual/2D/sprite-editor.jpg

