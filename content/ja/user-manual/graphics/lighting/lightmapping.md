---
title: ライトマッピング
layout: usermanual-page.hbs
position: 3
---

[![PlayCanvas Lightmapping][1]][13]
*このシーンのライティングはライトマップとAOテクスチャとBox投影IBL(反射)を使用して実装されています*

上の画像の結果を得るためにこれらのテクニックを使用する[最終シーン][13]と[プロジェクト][14]へのリンクです：外部HDRライトマップ(このページで説明します)、[アンビエントオクルージョン][12]、HDR Cubemapは、[Image Based Lighting][11]技法を使用したBox Projectionで適用され、現実的な反射を実現します。

## 概要

ライトマップ生成は静的シーンの照明情報を事前に計算し、多くの場合素材に適用されるテクスチャに格納する処理です。これはライトソースや形状の多くが静的または環境に使用されている場合にシーンを照らす効率的な方法です。 

PlayCanvasでは、シーン内でライトマップを使用する２つの方法を提供しています：サードパーティツールを使用した**外部ライトマップ生成**と、アプリケーションが実行している間または読み込み中にエンジンによって自動的に生成される[**ランタイムライトマッピング**][0]です。

このページでは、外部ツールからライトマップをレンダリングする際の詳細とベストプラクティスについて説明します。

## External Lightmap Generation

多くの3Dコンテンツツールには、ライトマップテクスチャを生成するための方法があります。たとえば、3DS Max、Maya、Blender、また、他のツールにはすべて、テクスチャにライトマップをベイクする方法があります。ライトマップ生成にオフラインツールを使用する利点は、グローバルイルミネーション、バウンスライティング、ソフトシャドウ、アンビエントオクルージョンなどの洗練された照明の計算ができるということです。主要な欠点は、3Dツール内でシーンを完全に描写する必要があるということです。PlayCanvasシーンがエディタ内に沢山のインスタンスを配置している場合、ライトマップツールの中にこれを再作成する必要があります。 

外部ツールを使用してライトマップを作成したら、通常のテクスチャアセットとしてアップロードをして標準のPhysical Materialのライトマップスロットを使用して素材に添加することができます。 

## Tools

このページでは、3ds MaxとVRayを使用してライトマップを生成しますが、他の同様のモデリングツールでも同じ機能を実現できます。

## ガンマの調整

ライトマップまたはキューブマップをレンダリングするときは、カラーカーブが２度ガンマ補正の影響を受けないように、線形スペースでレンダリングする必要があります。PlayCanvas Engineはリアルタイムレンダリング中にガンマ補正を適用します。

3ds Maxでは、このオプション(ガンマ/ LUT補正を有効にする)を無効にする必要があります。これは、環境設定(カスタマイズ > 環境設定)で確認できます：

![3ds Max > 環境設定 > 線形スペース][2]

次に、カラーマッピングが更新されていることを確認します。レンダリング設定(F10、またはレンダリングからテクスチャウィンドウ)にあります。出力はクランプや後処理されるべきではありません(Modeオプション)。Linear Multiplyは線形色空間に使用します。
以下は、どのオプションをどの値に設定するかのスクリーンショットです。Defaultボタンをクリックして設定をExpertに展開します。

![3D's Max > レンダー設定][3]

## UV Mapping

ジオメトリにライトマップテクスチャを適用するには、最初にアンラップする必要があります。 ライトマップに適したUVを得るのに役立ついくつかのプラクティスがあります。

### **Simple Geometry**
A smaller area of geomtry is better. Try to minimize the area of triangles and eliminate non-visible triangles. A larger area will reduce lightmap detail, require larger textures and sometimes multiple assets.

![ライトマッピングのヒント：シンプルなジオメトリ][4]

### **Consistent Texel Size**
Keep texels in UV unstretched and consistent in size with other texels within same geometry. This is to ensure that level of detail in lightmap texture is consistent within the scene. Some variations of texel size could be applied when geometry will be seen from up close or in the far distance as required by artistic and optimization decisions.

![ライトマッピングのヒント：一貫したUVのテクセルサイズ][5]

### **Non-overlapping UV**
Triangles in UV should not overlap to ensure each pixel has a unique position in 3D space on geometry so it can store its own illumination information appropriately. UV space for lightmaps is clamped, meaning that UV will be contained between 0.0 and 1.0 and will not tile outside.

![ライトマッピングのヒント：重ならないUV][6]

## Other Tips

ライトマップの良い結果を得るには、レンダリング時にレンダリングがカメラの視点ではなく、光の伝播に関連するデータのみに基づいていることを確認してください。

1. **Disable normal maps** on materials - micro surface details are too tiny to be relevant in lightmap textures.
2. Set **Reflection to 0** and **Disable Gloss Maps** on materials - reflection can lead to caustics and complications for renderers, leading to visual artifacts. Generally lightmaps should contain only diffuse lighting and reflectivity should be implemented using some runtime technique.
4. **Very dark materials won't produce good results** as they do not reflect light much and so will not assist Global Illumination.
5. In the Render To Texture window (see below) set **Padding** to larger value.
6. **Light can leak** from behind the geometry, add blocking geometry to prevent light.

![ライトマッピング 光のリーク][8]

## Render To Texture

モデリングツールから照明データを取得するには、ライトデータをテクスチャにレンダリングします。 解像度とフォーマットを指定することができます。

3ds Maxでは、これはRender To Textureウィンドウを使用して行います。Paddingをより大きな値に設定する必要がある場合、2番目のUVチャンネルを選択、レンダラに応じて出力プロファイル。 以下のスクリーンショットでは`VRayRawTotalLightingMap`を使用します。

![テクスチャにレンダリング：PlayCanvasライトマッピング][7]

## Noise

状況によってはレンダリングの品質と時間に応じて、出力の照明データが完全ではなく、ノイズに悩まされる可能性があります。これは、テクスチャの端をぼかすことなく面の部分を滑らかにするよう、ぼかしを画像に適用することで簡単に解決できます。Photoshopでは、これはSurface Blurフィルタを使用して行います。

![ライトマッピング：Photoshop >表面のぼかし][9]

## Upload to Editor

これで２つ目のUVチャンネル(UV1)とHDRライトマップテクスチャを使用したジオメトリができたので、それらをPlayCanvasシーンにアップロードして素材を設定します。これは、ファイルをドラッグアンドドロップするか、アセットパネルのアップロードボタンを使用して行います。ジオメトリをアップロードすると、自動的に素材が生成されます。ライトマップがレンダリングされる各素材に、ライトマップテクスチャを設定する必要があります。必要なすべての素材を選択し、ドラッグアンドドロップをするか、Lightmapスロットのライトマップテクスチャを選択します。

![PlayCanvasエディタ：素材ライトマップのテクスチャスロット][10]

## Final remarks

ガンマ補正、トーンマッピング、露出 は、シーンに必要な特徴と色を加えることのできる良い設定です。

上記のテクニックを使った[例][13]や、[プロジェクト][14]を使うことができます。

[0]: /user-manual/graphics/lighting/runtime-lightmaps/
[1]: /images/user-manual/graphics/lighting/lightmapping/playcanvas-lightmapping-scene.jpg
[2]: /images/user-manual/graphics/lighting/lightmapping/3ds-max-preferences.png
[3]: /images/user-manual/graphics/lighting/lightmapping/3ds-max-render-settings-color-mapping.png
[4]: /images/user-manual/graphics/lighting/lightmapping/uv-geometry.jpg
[5]: /images/user-manual/graphics/lighting/lightmapping/uv-consistency.jpg
[6]: /images/user-manual/graphics/lighting/lightmapping/uv-overlapping.jpg
[7]: /images/user-manual/graphics/lighting/lightmapping/3ds-max-render-to-texture-window.png
[8]: /images/user-manual/graphics/lighting/lightmapping/lightmapping-light-leak.jpg
[9]: /images/user-manual/graphics/lighting/lightmapping/lightmapping-surface-blur.jpg
[10]: /images/user-manual/graphics/lighting/lightmapping/lightmapping-material-slot.png
[11]: /user-manual/graphics/physical-rendering/image-based-lighting/
[12]: /user-manual/graphics/lighting/ambient-occlusion/
[13]: https://playcanv.as/p/zdkARz26/
[14]: https://playcanvas.com/project/446587/overview/archviz-example
