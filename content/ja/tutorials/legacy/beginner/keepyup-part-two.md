---
title: シンプルなゲームを作る - その2
template: tutorial-page-legacy.tmpl.html
position: 11
---

<iframe src="http://playcanv.as/p/1gDqCWa8"></iframe>

*You can find the [full project here][16]. If you haven't seen [Part 1][1] read it first.*

## マテリアルの設定

このゲームのグラフィクスは非常に単純なものですので、たくさんの設定をしなければいけないということはありません。ボール、背景とオーバーレイについて設定を行います。

### マテリアルとは？

マテリアルとはPlayCanvasでのアセットのひとつで、3Dモデルがスクリーン上に描画される時、それがどのように見えるべきかを決めるものです。マテリアルは物体表面の色を決め、また同時に物体表面が光にどのように反応するかも決めます。例えば、マテリアルの設定によっては物体は金属のように滑らかになったり、ゴムのようにざらざらとしたものになります。PlayCanvasは物理的マテリアルという組み込みの機能をもっており、マテリアルの用途の9割ほどをカバーします。あなたが上級者になったら、自分のマテリアルを、GLSLシェーダ言語を用いて自分で書くこともできます。

### キューブマップ

マテリアルについて話し始める前に、キューブマップの設定をします。キューブマップとは、立方体のそれぞれの面に貼られた6枚のテクスチャからなるアセットです。これはシーンの遠方にある背景として処理されます。PlayCanvasの物理的マテリアルは、キューブマップを画像ベースのライティングに使用することができます。このライティングは、キューブマップの色をシーン内のマテリアルを照らす明かりとして使います。例えば、このゲームのシーンでは、キューブマップは青い空と緑の草の地面です。そのため、ゲーム内のぼーるは上からは青い光で、下からは緑の光で照らされます。[詳しくはドキュメントを参照してください][7]。

![キューブマップ][8]

キューブマップを設定するには、まずキューブマップアセットをNew Assetメニューから作成し、キューブマップの面に6枚のテクスチャを割り当てます。キューブマップの6面全てにテクスチャを割り当てたら、"Prefilter"ボタンをクリックしてください。**プレフィルタリングはキューブマップを正しく動作させるために必要な準備です。**

## Footballマテリアル

![サッカーボール][3]

サッカーボールは[PlayCanvasアセットライブラリ][2]からインポートした3Dモデルです。footballマテリアルはすでに設定済みですが、いくつか単純な調整が必要になるかもしれません。サッカーボールに使われているそれぞれのテクスチャを確認してみましょう。

#### 拡散マップ

![拡散マップ][4]

拡散マップは表面の色を決めます。このゲームでは黒と白のサッカーボールのパターンになっています。

#### 環境マップ

![環境マップ][9]

スペキュラマップの効果を説明するために必要なため、環境マップの説明を簡単にここでしておきます。環境マップの設定をしたい場合は、キューブマップをマテリアルのスロットにドラッグしてください。

#### スペキュラマップ

![スペキュラマップ][5]

The specular section determines how the material interacts with lights. There are two "workflows" for specular, the "Metalness workflow" and the "Specular workflow", you can find more information in our [documentation][6]. For the football we are using Metalness, so be sure to check the "Use Metalness" box. Our football is not made of metal, so we slide the metalness slider all the way down to 0. Then we use the glossiness slider to set our rough/smooth the material should be. We've set this to about halfway which gives a nice shine to the ball, but not completely smooth.

#### Normal

![Normal][10]

The final texture map we apply is the normal map. The normal map is used to add details to the model. In this case, the separate patches of the football are not modelled in the geometry (which is smooth sphere) but they are in the normal map. This means the ball will be correctly lit as if the patches were there, but without the overhead of lots of extra polygons.

## Backdrop Material

![Backdrop][11]

The backdrop material is much simpler, we have only one texture map.

#### Emissive

![Emissive][12]

The emissive map sets the color at the surface as if it was emitting light of that color. This means that lights in the scene don't effect how bright an emmissive surface is. Note, an emissive material doesn't affect any other objects in your scene, there is no light actually emitted.

In this case, we don't want the background to be lit, it is just a static scene. So we use the emissive map to do that.

## Overlay Material

![Overlay][13]

The overlay material is even simpler than the backdrop. In this case all we are doing is setting the color off the emissive property

![Emissive][14]

Continue on to [Part 3][15].

[1]: /tutorials/beginner/keepyup-part-one
[2]: http://store.playcanvas.com/
[3]: /images/tutorials/beginner/keepyup-part-two/ball-material.jpg
[4]: /images/tutorials/beginner/keepyup-part-two/ball-diffuse.jpg
[5]: /images/tutorials/beginner/keepyup-part-two/ball-spec.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/
[7]: /user-manual/assets/cubemaps/
[8]: /images/tutorials/beginner/keepyup-part-two/cubemap-preview.jpg
[9]: /images/tutorials/beginner/keepyup-part-two/ball-env.jpg
[10]: /images/tutorials/beginner/keepyup-part-two/ball-normal.jpg
[11]: /images/tutorials/beginner/keepyup-part-two/backdrop-material.jpg
[12]: /images/tutorials/beginner/keepyup-part-two/backdrop-emissive.jpg
[13]: /images/tutorials/beginner/keepyup-part-two/overlay-material.jpg
[14]: /images/tutorials/beginner/keepyup-part-two/overlay-emissive.jpg
[15]: /tutorials/beginner/keepyup-part-three
[16]: https://playcanvas.com/project/362703/overview/sample-game-keepy-up

