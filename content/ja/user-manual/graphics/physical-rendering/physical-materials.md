---
title: 物理素材
layout: usermanual-page.hbs
position: 1
---

物理ベースのレンダリングをPlayCanvasで使うためには、物理的マテリアルをどのように設定するか、そして様々なプロパティを変更することによってどのような効果があるかを理解する必要があります。

このセクションでは、マテリアルに設定できる効果的なプロパティについて説明します。また、プロパティを変更する事によってどのような影響があるかを、実際に動作するデモで確認します。

ではまず最初に、キューブマップとワークフローについて説明します。

## イメージベースの照明

Editorに入り素材を作成しても、素材が下のサンプルと異なる理由を説明するために[IBL][6]から始めます。**HDRでプレフィルタリングされたCubeMapを使用した物理的素材は素晴らしいです！**

## Metalness and Specular Workflow

![Workflows][4]

物理ベースのレンダリングはアセット作成の方法が大きく分けて二種類あります。二つの方法は等価で、結果は同じものになります。最終的にはどちらの方法が好みかというところで選択することになります。PlayCanvasでは金属質を使った方法を使うことが多いです。というのも、金属質マップはより簡単に作ることができ、さらにシングルチャネルですので、一般的に効率がよりよいためです。

**金属質**を使った方法では、金属質値あるいはマテリアルのどの部分が金属質であるかどうかを決める金属質マップを設定します。通常は非金属であれば0、金属であれば1を設定するという単純な二択です。1と0の間の値を取るケースはそれほど多くありません。

**スペキュラ**を使った方法では、スペキュラ値あるいはマテリアルによって反射された光の強さと色を決めるスペキュラマップを設定します。

[Marmoset Toolbag blog][5]にこの二つの方法の違いがわかりやすく説明されています。

それではマテリアル設定に進んでいきましょう。

# Material Properties and Maps

## Diffuse

拡散色はマテリアルの下地の色で、RGB色の値を取ります。なめらかで純粋な物質(金属やプラスチックなど)の場合はひとつの値だけを取ることができますが、拡散マップテクスチャとして与えることもできます。拡散マップを使う場合には、照明の影響(影やハイライトなど)を含めないようにしてください。これらの効果は別のマップで適応することができるためです。

拡散色は**アルベド**や**ベースカラー**と呼ばれることもあります。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?color" title="Physical Materials - Diffuse"></iframe>

You can often find the charts of recorded values for diffuse/albedo values on the internet.

![Metals][3]

| Material | RGB                                      |
|----------|------------------------------------------|
| Gold     | (1.000, 0.766, 0.336) or [255, 195, 86]  |
| Silver   | (0.972, 0.960, 0.915) or [248, 245, 233] |
| Copper   | (0.955, 0.637, 0.538) or [244, 162, 137] |

## Metalness

The metalness value is part of the **metalness** workflow. Metalness is a single value between 0-1 which determines if a material is metal (1) or non-metal (0).

<div class="alert-info">
The metalness value should almost always be 0 or 1. It is rare that you will need a value somewhere between these two.
</div>

You can also supply a metalness map which lets you define specific areas of your material as metal or non-metal.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?metal" title="Physical Materials - Metalness"></iframe>

## Glossiness

光沢度は**金属質*と**スペキュラ**を使う方法の両方で使われ、マテリアルの表面がどのくらいなめらかかを定義します。光沢度はマテリアルの表面で反射する光がぼやけるか鋭いか、あるいはスペキュラハイライトが広いか狭いかに影響します。光沢度は0から100の間の値か、あるいは光沢度マップとして与えることができます。

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/?gloss" title="Physical Materials - Glossiness"></iframe>

Some PBR systems use **Roughness** instead of Glossiness. The roughness is the inverse of the glossiness. If you need to convert a roughness map to a glossiness map, simply invert it.

Sometimes glossiness and roughness are referred to as the **microsurface** value.

## All together

These three properties **diffuse**, **metalness** and **glossiness** are the core of the physical material system. You can try different combinations in the live demo below.

There are many other additional properties to investigate that can be used to make great materials such as Ambient Occlusion, Emissive, Opacity, Normal and Height maps.

<iframe loading="lazy" src="https://playcanv.as/p/Q28EwTwQ/" title="Physical Materials - All"></iframe>

[1]: https://store.playcanvas.com
[2]: /user-manual/glossary#high-dynamic-range
[3]: /images/user-manual/graphics/physical-rendering/metals.jpg
[4]: /images/user-manual/graphics/physical-rendering/workflows.jpg
[5]: https://marmoset.co/posts/pbr-texture-conversion/
[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
