---
title: 画像要素
template: usermanual-page.tmpl.html
position: 5
---

画像要素は、テクスチャまたはソリッドカラーを表示するために使用されます。画像要素は、ボタンなどの複雑なユーザインターフェイスコンポーネントの基礎として使用することができます。

## 着色

各画像要素にはカラープロパティがあります。テクスチャが適用されていない場合、画像要素は単に色のついた長方形になります。テクスチャが適用されている場合、この色はテクスチャの着色に使用されます。これにより、１つのグレースケールテクスチャだけを使ってカラーバリエーションを作成することができます。

![着色][1]

## 透明性

カラープロパティと同様に、不透明度プロパティを使用して要素の透明度レベルを設定することができます。

![透明][2]

## 上級素材

テクスチャ、カラー、不透明度のプロパティを使用しても求めている結果を得ることができない場合は、素材プロパティを使用して独自の素材を画像エレメントに割り当てることができます。正しいレンダリングを行うには、画像要素に追加された素材の*Depth Writeを無効*にする必要があります。

備考：スクリーンスペース要素では、照明は予想どおりに機能しません。スクリーンスペースで使用されている素材については、照明や影を無効にすることをお勧めします。

## Masks and Masking

Image Elements can be used to mask or hide elements that are descendants. To enable this feature set the `mask` property of an image Element to true.

If there is no texture asset assigned to an image Element used for masking the mask will be a rectangle defined by the width and height. If the image Element has a texture assigned the alpha-channel of the texture is used as the mask. Note, an image mask is 1-bit, i.e. there is no fading out of the mask using the alpha-channel of the texture.

[1]: /images/user-manual/user-interface/image-element/image-tinted.png
[2]: /images/user-manual/user-interface/image-element/image-transparent.png

