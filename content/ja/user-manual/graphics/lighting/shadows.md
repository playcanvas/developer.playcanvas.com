---
title: 影
layout: usermanual-page.hbs
position: 2
---

影を使用すればゲームにリアリティを加えることができます。しかし、動的な(リアルタイムな)影は、実行時のパフォーマンスに大きな負荷を加えてしまいます。パフォーマンスへの影響を少なく、シーンに静的な影を追加する方法については[Lightmaps][4]を参照してください。

![Characters with shadow casting][1]

PlayCanvasエンジンはシャドウマッピングと呼ばれる影生成アルゴリズムを実装しています。これは完全なクロスプラットフォームな実装で、モバイルとデスクトップ両方で動くことが保証されています。

## 影を有効にする

![指向性ライト][5]

PlayCanvasでは、デフォルトで影の生成は無効になっています。ですので、明示的に影生成を有効にする必要があります。影生成を有効にするのは簡単です。まず、シーンの中のどの光源で影を生成したいかを指定します。光源をツリー表示から選択し、インスペクタパネルからプロパティを編集してください。光源には'Cast Shadows'オプションがありますので、それをチェックすればその光源はシーンに存在するオブジェクトに対して影を生成するようになります。

![モデルコンポーネント][6]

Now you need to specify which graphical objects in your scene cast and receive shadows. By default, all render and model components cast and receive shadows. To modify these properties, select the entity in the Hierarchy, locate the render or model component in the Inspector and uncheck the 'Cast Shadows' or 'Receive Shadows' option as required.

## Shadow Cascades

When a directional shadow is used over a large area, it often exhibits aliasing, where a shadow near the camera has a low resolution. Capturing the shadow in a single shadow map requires very high and impractical resolution to improve this.

Shadow cascades help to fix this problem by splitting the camera view frustum along the viewing direction, and a separate shadow map is used for each split. This gives nearby objects one shadow map, and another shadow map captures everything in the distance, and optionally additional shadow maps in between.

Note that the number of shadow cascades has an effect on performance, as each shadow casting mesh might need to be rendered into more than a single shadow map.

The following properties can be used to set up shadow cascades.

### Number of cascades

Number of cascades represents the number of view frustum subdivisions, and can be 1, 2, 3 or 4. The default value of 1 represents a single shadow map.

A screenshot showing a single shadow cascade.

![One cascade][7]

A screenshot showing four shadow cascades.

![Four cascades][8]

### Distribution of cascades

The distribution of subdivision of the camera frustum for individual shadow cascades. A value in the range of 0 to 1 can be specified. A value of 0 represents a linear distribution and a value of 1 represents a logarithmic distribution. Visually, a higher value distributes more shadow map resolution to foreground objects, while a lower value distributes it to more distant objects.

## 影のチューニング

PlayCanvasで使用されている車道マッピングアルゴリズムは有限の解像度を持ちます。ですので、影の見た目をできるだけよくするためにプロパティをチューニングする必要が出るかもしれません。以下のプロパティが[Light Component][2] UIの中にあります.

### シャドウディスタンス - Shadow Distance

シャドウディスタンスは視点からどれだけ離れると指向性光源からの影がレンダリングされなくなるかという距離です。この値が小さければ、影がきれいに表示されます。一方で、この値が小さいとビューポートを移動すると突然影が現れるように見えてしまうという問題があります。そのため、プレイヤーがどのくらい遠くを見ることができるかという要素と、どの程度きれいに影を表示したいかのバランスを考えてください。

### 影の解像度 - Shadow Resolution

すべての光源はシャドウマップを使用して影を生成します。このシャドウマップは256x256, 512x512, 1024x1024, 2048x2048いずれかの解像度を持つことができます。この値は光源コンポーネントのインタフェースから設定できます。解像度が高くなればなるほど、影がきれいに表示されます。しかし、高い解像度を設定すると描画が重くなります。ですのでパフォーマンスとクオリティのバランスに気を付けてください。

### シャドウバイアス - Shadow Bias

シャドウマッピングは見た目の悪いノイズを描画してしまうことがあります。そのような帯状の影や斑点状の影が描画された場合には、シャドウバイアスの値を調整して問題の解決を試してみてください。

### 法線オフセットバイアス Normal Offset Bias

'Shadow acne'と呼ばれるノイズ状の表示がされることがありますが、これはシャドウバイアスを調整することで効果的に取り除くことができます。しかしこれによって常に'Peter Panning'と呼ばれるオブジェクトが空中に浮いているように見える現象が発生してしまいます。

法線オフセットバイアスはこの問題を解決することができます。デプスバイアスに加えて、シャドウマップの参照に使われるUV座標にちょっとした調整を加えることで、shadow acneとPeter Panningの両方を避けることができます。フラグメントの一はジオメトリの法線方向にオフセットがかけられます。この法線オフセットと呼ばれるテクニックは、定数のシャドウバイアスのみを使う場合に比べて大幅によい結果を得ることができます。

## ソフトシャドウとハードシャドウ

影の外周のことをpenumbra - 半影と呼びます。これは暗い領域から明るい領域へ変化する領域で、影にソフトな境界線を与えます。影のエッジはPlayCanvasではデフォルトでソフトなものになりますが、設定を変更してハードエッジの影を描画することもできます。以下でソフトエッジの影とハードエッジの影を比べてみます。

![Hard vs soft shadows][3]

ソフトシャドウはシャドウマップ上のサンプルをより多くGPUで取ることによって実現されています。使用されているアルゴリズムはPercentage Closest FilteringあるいはPCFと省略されて呼ばれています。このアルゴリズムはシャドウマップ内の一つのサンプルだけを読むのではなく、(3x3のマトリクスで)9個のサンプルを読み込んで使用します。

The shadow sampling type is specified per light and so the option can be found in the Light Inspector.

## パフォーマンスについて

影を使用すると、パフォーマンスに以下のような影響があります:

* 指向性またはスポットライトを落とすそれぞれの影のために、すべてのフレームで一度シーンをシャドウマップにレンダリングする必要があります。ポイントライトの場合はシーンがライトごとに6回レンダリングされるので(シャドウマップが6面のキューブマップとして保存される)、負荷が大きくなります。シャドウマップの中にシーンをレンダリングすると、CPUとGPUの両方に負荷を加えます。
* シャドウマップの解像度を上げるとより鮮明な影を生成しますが、GPUはより多くのシャドウマップピクセルを埋める必要があり、フレームレートに影響を与える可能性があります。
* 影を受ける素材のシャドウサンプルタイプとしてソフトシャドウ(PCF3x3)を選択すると、ハードシャドウのオプションを使用した場合よりも、GPUに負荷がかかります。
* 影が環境の静的な部分から発生している場合は、[ライトマップ][4]を使用してテクスチャに影をbakeすることを検討してください。

[1]: /images/user-manual/graphics/lighting/shadows/doom3_shadows.jpg
[2]: /user-manual/packs/components/light
[3]: /images/user-manual/graphics/lighting/shadows/hard_vs_soft.jpg
[4]: /user-manual/graphics/lighting/lightmapping
[5]: /images/user-manual/scenes/components/component-light-directional.png
[6]: /images/user-manual/scenes/components/component-model.png
[7]: /images/user-manual/graphics/lighting/shadows/shadow_cascades_1.jpg
[8]: /images/user-manual/graphics/lighting/shadows/shadow_cascades_4.jpg
