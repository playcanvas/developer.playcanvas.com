---
title: シンプルなゲームの作成 - パート2
layout: tutorial-page.hbs
tags: games
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="シンプルなゲームの作り方 - パート2"></iframe>

*全プロジェクトは[こちら][16]で入手可能です。[パート1][1]をまだ見ていない場合は、そちらを先に読んでください。*

## マテリアル設定

このゲームではグラフィックを非常にシンプルにしているため、セットアップはあまりありませんが、ボール、背景、およびオーバーレイに対してマテリアルアセットを設定する必要があります。

### マテリアルとは?

マテリアルは、3Dモデルをスクリーンにレンダリングする際に表面がどのように見えるかを記述するPlayCanvasの一種のアセットです。マテリアルは表面の色だけでなく、表面が光とどのように相互作用するかも決定します。たとえば、物体を滑らかな金属または粗いゴムに設定することができます。PlayCanvasには、物質の90%をカバーするデフォルトのマテリアルである物理マテリアルが組み込まれています。より高度な操作が可能になった場合は、GLSLシェーダーコードを使用して、独自のマテリアルを作成できます。

### キューブマップ

マテリアルに進む前に、キューブマップアセットを設定します。キューブマップとは、キューブの各面に6つのテクスチャがあるアセットのことを指します。シーンの遠隔環境を考えることができます。PlayCanvasの物理マテリアルは、キューブマップを使用してイメージベースのライティングを実行できます。これにより、シーン内のマテリアルがキューブマップ内の色を使用して照らされます。例えば、シーンのキューブマップには青い空と緑色の草地があります。したがって、ボールは上から青く、下から緑く照らされます。[ドキュメント][7]を参照してください。

![キューブマップ][8]

キューブマップを設定するには、最初に「New Asset」メニューからキューブマップアセットを作成し、キューブマップの各面に1つずつテクスチャを割り当てます。キューブマップの6つの面がすべて割り当てられたら、「Prefilter」ボタンを押します。**キューブマップを正しく動作させるには、事前フィルタリングが必要です!**

## フットボールマテリアル

![フットボール][3]

フットボールは、[PlayCanvasアセットライブラリ][2]からインポートされた3Dモデルです。フットボールマテリアルは大部分が設定されていますが、いくつかの単純な変更を行う必要がある場合があります。フットボールが使用する各マップを見てみましょう。

#### Diffuse

![ディフューズ][4]

ディフューズマップは、表面の色を定義します。この場合、それはフットボールの白黒のピクセルになります。

#### 環境

![環境][9]

環境セクションを素早く見てみましょう。このセクションはスペキュラーの変更効果を見るために必要です。環境を設定するには、マテリアルのキューブマップスロットにキューブマップアセットをドラッグします。

#### スペキュラー

![スペキュラー][5]

スペキュラーセクションはマテリアルが光源とどのように相互作用するかを決定します。スペキュラーには「メタルネスワークフロー」と「スペキュラーワークフロー」という2つのワークフローがあり、[ドキュメント][6]で詳細を確認できます。フットボールではMetalnessを使用しているため、「Use Metalness」ボックスを確認する必要があります。フットボールは金属製ではないため、メタリックスライダーを0まで下げます。次に、光沢スライダーを使用してマテリアルを粗く/滑らかにします。それを半分に設定したため、ボールには良い光沢がありますが、完全に滑らかではありません。

#### 法線

![法線][10]

適用する最後のテクスチャマップは法線マップです。 この場合、フットボールのパッチはジオメトリ(スムーズな球体)ではモデル化されていないため、法線マップにあります。これは、ボールがパッチがあるかのように正しく照らされることを意味しますが、余分なポリゴンを多数使用することなく管理できます。

## 背景マテリアル

![背景][11]

背景マテリアルは、テクスチャマップが1つだけの単純なマテリアルです。

#### エミッシブ

![エミッシブ][12]

エミッシブマップは、表面がその色の光を放出しているかのように表面の色を設定します。これは、シーン内のライトがエミッシブ表面の明るさに影響を与えないことを意味します。注意:エミッシブマテリアルはシーン内の他のオブジェクトに影響を与えず、実際には放出される光はありません。

この場合、背景を照らす必要はないため、エミッシブマップを使用しています。

## オーバーレイマテリアル

![オーバーレイ][13]

オーバーレイマテリアルは、背景より簡単です。この場合、エミッシブプロパティの色を設定しています。

![エミッシブ][14]

[Part 3][15]に進んでください。

[1]: /tutorials/keepyup-part-one/
[2]: https://store.playcanvas.com/
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
[15]: /tutorials/keepyup-part-three/
[16]: https://playcanvas.com/project/406050
