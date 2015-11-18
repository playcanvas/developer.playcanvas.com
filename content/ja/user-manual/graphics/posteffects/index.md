---
title: ポストエフェクト
template: usermanual-page.tmpl.html
position: 6
---

PlayCanvasには後処理エフェクトのビルドイン対応があります。後処理エフェクトはレンダリングされた最終的な画像を修正して、アプリケーションのビジュアルに変更を加えます。

後処理エフェクトはエフェクトに追加でき、[Camera][1] コンポーネントが添付された外部スクリプトして実装されています。カメラにビルドインの後処理エフェクトを簡単に追加するには、階層にあるカメラエフェクトを右クリックして次のリストから任意の後処理エフェクトを選択します：

<img alt="Adding built-in post effects" src="/images/platform/builtin_posteffects.jpg"></img>

自身で後処理エフェクトを作成することもできます。[GitHub][2]のビルドインエフェクトにいくつかの例があります。

ビルドインのポストエフェクトは次を含む：

* [Bloom][3]
* [明るさ-コントラスト][4]
* [色相-彩度][5]
* [FXAA][6]
* [セピア][7]
* [ビネット][8]

[1]: /user-manual/packs/components/camera
[2]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[3]: /user-manual/graphics/posteffects/bloom
[4]: /user-manual/graphics/posteffects/brightness_contrast
[5]: /user-manual/graphics/posteffects/hue_saturation
[6]: /user-manual/graphics/posteffects/fxaa
[7]: /user-manual/graphics/posteffects/sepia
[8]: /user-manual/graphics/posteffects/vignette

