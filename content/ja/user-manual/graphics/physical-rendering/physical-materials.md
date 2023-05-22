---
title: 物理マテリアル
layout: usermanual-page.hbs
position: 1
---

PlayCanvasの物理ベースレンダリングを使用するには、物理マテリアルの構成方法を理解し、さまざまなパラメータを変更するとどのような効果があるかを理解する必要があります。

このセクションでは、マテリアルの最も有用なプロパティについて説明し、ライブデモでそれらを変更するとマテリアルの外観がどのように変化するかを確認できます。

ではまず最初に、キューブマップのワークフローについて説明します。

## イメージベースドライティング (IBL)

Editorに入りマテリアルを作成しても、マテリアルが下のサンプルと異なる理由を説明するために [IBL] [6] から始めます。**HDRでプレフィルタリングされたCubeMapを使用した物理的マテリアルは素晴らしいです！**

## メタリック (Metalness) とスペキュラ (Specular) ワークフロー

![Workflows][4]

PBRは、アセットまたはワークフローの作成に2つの異なる方法をよく使われます。2つのワークフローは同等で同じ結果を提供します。どちらを選択するかは、好み次第です。PlayCanvasでは、通常、メタリックフローを選択します。単一チャンネルのMetalnessマップが作成しやすく、通常はより効率的であるためです。

**Metalness**ワークフローでは、メタリックか非メタリックかを決定するメタリック値またはメタリックマップを設定します。通常、これは単純なバイナリ選択で、金属は1、非金属は0です。ほとんど2つの値の間に値が必要なことはありません。

**Specular**ワークフローでは、反射光の色と強度を決定するスペキュラ値またはスペキュラマップを設定します。


[Marmoset Toolbag blog][5]にこの二つの方法の違いがわかりやすく説明されています。

それではマテリアル設定に進んでいきましょう。

# マテリアルのプロパティとマップ

## ディフューズ (Diffuse)

Diffuseカラーはマテリアルのベースとなるカラーです。これはRGBカラー値です。クリーンで純粋な（金属、プラスチック）物質では、これは定数値である場合がありますが、Diffuseマップテクスチャとして指定することもできます。注：Diffuseマップにライトの詳細（シャドウやハイライト）を含めることは通常避けるべきです。これは他のマップで適用できます。

Diffuseカラーは **アルベド** や **ベースカラー** と呼ばれることもあります。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?color" title="Physical Materials - Diffuse"></iframe>

インターネット上で、ディフューズ/アルベドの値と素材の対応表をすぐに見つけることができます。

![Metals][3]

| 素材 | RGB                                      |
|----------|------------------------------------------|
| 金     | (1.000, 0.766, 0.336) or [255, 195, 86]  |
| 銀   | (0.972, 0.960, 0.915) or [248, 245, 233] |
| 銅   | (0.955, 0.637, 0.538) or [244, 162, 137] |

## Metalness

メタルネス (Metalness) 値は**メタルネス**ワークフローの一部です。メタルネスは0から1の範囲の単一の値であり、素材が金属（1）か非金属（0）かを決定します。

<div class="alert-info">
メタルネス値はほとんどの場合、0または1であるべきです。これらの間に値が必要なケースは稀です。
</div>

メタルネスマップを提供することもできます。これにより、特定の領域を金属または非金属として定義することができます。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?metal" title="Physical Materials - Metalness"></iframe>

## 光沢度 (Glossiness)

光沢度 (Glossiness) は **Metalness** と **Specular** を使う方法の両方で使われ、マテリアルの表面がどのくらいなめらかかを定義します。光沢度はマテリアルの表面で反射する光がぼやけるか鋭いか、あるいはSpecularハイライトが広いか狭いかに影響します。光沢度は0から100の間の値か、あるいはGlossinessマップとして与えることができます。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?gloss" title="Physical Materials - Glossiness"></iframe>

いくつかの物理ベースレンダリングシステムでは、光沢度 (Glossiness) という用語の代わりに **ラフネス (Roughness)** という用語を使います。ラフネスは光沢度の反対の意味です。光沢度とラフネスを変換する際には、単純にその値を反転してください。

光沢度と粗さは、**マイクロサーフェス値**という用語で呼ばれることもあります。

## まとめ

物理的マテリアルの仕組みでは、**Diffuse**、**Metalness**、**Glossiness**が重要な役割を果たします。下のデモを使って色々な組み合わせを試してみてください。

マテリアルの見た目をさらに良くするために、Ambient Occlusion、Emissive、Opacity、NormalマップとHeightマップといった様々なプロパティを使うことができます。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/" title="Physical Materials - All"></iframe>

[1]: https://store.playcanvas.com
[2]: /user-manual/glossary#high-dynamic-range
[3]: /images/user-manual/graphics/physical-rendering/metals.jpg
[4]: /images/user-manual/graphics/physical-rendering/workflows.jpg
[5]: https://marmoset.co/posts/pbr-texture-conversion/
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
