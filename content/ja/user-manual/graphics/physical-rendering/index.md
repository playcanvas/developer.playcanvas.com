---
title: Physically Based Rendering
template: usermanual-page.tmpl.html
position: 3
---

![Star-Lord][1]
*Star-Lord Model by [Joachim Coppens][2]*

物理ベースレンダリング(PBR)では、一貫性のあるグラフィクスレンダリングが、アーティストによる素材作成、計測された物理的プロパティとマテリアルシェーダの組み合わせによって実現されます。光源と物体表面との関係をあらわす物理原則を適応することで、どのような照明環境でも特別な処理をすることなく自然な描画を行うことができます。

# 基礎となる原理

ここでは、物理ベースのシェーダが実行するライティングの計算の基礎となる原則を説明します。次のセクションでは物理ベースのレンダリングをどのようにPlayCanvas上で使用するかを詳しく説明します。

## 拡散(Diffuse)とスペキュラ(Specular)

Diffuse and Specular (or reflected) light are the two terms that describe two main types of interaction between light and a material. Specular light refers to light which has bounced off the surface. On a smooth surface this light will reflect all the in same direction and the surface will appear mirror-like. Diffuse light is light that has been absorbed, scattered in the material and re-emerged. This light tends to be uniform in direction unlike specular light. During this absorbing and re-emerging some light wavelengths will be absorbed. The wavelengths that are not absorbed give the material its color. For example, if all blue and green wavelengths are absorbed, the material will appear red. In rendering terms, diffuse color is sometimes known as "albedo" or "base color".

## エネルギーの保存

![Energy Conservation][3]
*Smooth surfaces have small bright patches, rough surfaces have large dim patches*

One of the key features of physically correct rendering is that of Energy Conservation. Derived from the fact that the diffuse light and the reflected light all come from the light hitting the material, the sum of diffuse and reflected light can not be more than the total light hitting the material. In practice this means that if a surface is highly reflective it will show very little diffuse color. And the opposite, if a material has a bright diffuse color, it can not reflect much.

物理ベースのレンダリングの利点は、このエネルギー保存則がシェーダに内包されているということです。アーティストは法則を考えなくても物理ベースのレンダリングを行うことができます。

## 金属と非金属

![Metals & Non-metals][4]
*Metals and Non-metals*

One thing that's new with PBR versus older shading models is thinking about what a material is made of in order to determine its behavior. The main thing we consider here is whether the material is a conductor (usually a metal) or an insulator (a non-metal).

この要素はマテリアルがどのように光に反応するかということの多くを決定する重要なものです。例えば、金属は一般的に光を反射します。(60%から90%ほど) 一方で非金属は光をあまり反射しません。(0%から20%ほど) つぎに、非金属の反射光は通常白色光ですが、金属の反射光は拡散光と同じ色になります。

この違いのため、物理ベースのレンダリングの設定手順の一つでは、そのマテリアルが金属か非金属かを決定する**金属質(metalness)**プロパティを使用します。金属質を使った設定手順は後ほど詳しく説明します。

## フレネル

フレネルはPlayCanvasで物理ベースのレンダリングを使う上で理解しなければいけない要素ではありません。ただ、この要素を理解することで、物体が光に対してどのように振る舞うかをより深く知ることができます。

フレネルは、物体を見る視線とその物体表面の角度によって、その物体の反射光成分がどのように影響を受けるかということを表現します。もし物体表面が視線とほとんど平行なら、その表面はほとんど完全に光を反射します。

## 微細表面

最後に微細表面について説明します。3Dアーティストにとって親しみやすいこの概念の表現は法線マップでしょう。このテクスチャを与えると、その表面の方向を変えることができます。光沢度や粗さとも呼ばれる微細表面は、これと同じ概念を非常に小さなスケールで表現します。微細表面はその物体表面が粗いのかなめらかなのかをあらわします。ガラス(光沢度が高く、粗さは低い)とサンドペーパー(光沢度が低く、粗さは高い)を比べてみてください。この方法では、表面がどちらを向いているかは表現せず、単に表面が粗いかなめらかかということだけを表現します。

いくつかの物理ベースのレンダリングシステムは粗さという表現を使い、いくつかは光沢度という表現を使いますが、それらは同じものです。粗さを反転すると光沢度になり、その逆も行うことができます。もし変換を行いたい場合には、単純にテクスチャの値を反転してください。

[物理的マテリアルに続く][6]

*さらに詳しい説明は、Marmoset Toolbagの[PBR Theory][5]という素晴らしい記事を参照してください。*

[1]: /images/user-manual/graphics/physical-rendering/star-lord.jpg
[2]: http://joachimcoppens.com/
[3]: /images/user-manual/graphics/physical-rendering/energy-conservation.jpg
[4]: /images/user-manual/graphics/physical-rendering/materials.jpg
[5]: https://www.marmoset.co/toolbag/learn/pbr-theory
[6]: /user-manual/graphics/physical-rendering/physical-materials

