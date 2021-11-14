---
title: Image Based Lighting
template: usermanual-page.tmpl.html
position: 2
---

PlayCanvasで物理ベースレンダリングを使用する際に最良の結果を得るには、イメージベースライティングまたはIBLというテクニックを使用します。事前レンダリングされたイメージデータをアンビエントおよび反射光のソース情報として使用できます。

このテクニックは、キューブを構成する6つのテクスチャ(面)で構成され、完全なサラウンドテクスチャカバレッジを持つ環境マップである[CubeMap][3]に依存しています。

## HDR

Image data can be stored in LDR or HDR (High Dynamic Range) color space, which allows to store more than 0.0 to 1.0 (256 gradations) in single channel. HDR allows to store values above 1.0 (what is considered "white"), with combination of many factors of environment such as gamma correction, tone mapping and exposure  it allows to contain more light details and provide much better control over light quality and desirable results to artists.

![HDR vs LDR CubeMap for Image Based Rendering][9]
*Notice how bright parts in texture are clamped using LDR*

## エネルギーの保全

The concept is derived from the fact that the diffuse light and the reflected light all come from the light hitting the material, the sum of diffuse and reflected light can not be more than the total light hitting the material. In practice this means that if a surface is highly reflective it will show very little diffuse color. And the opposite, if a material has a bright diffuse color, it can not reflect much.

In nature, smoother surfaces have sharper reflections and rougher surfaces have blurrier. The reason for that is basically that rougher surfaces have larger, more prominent microfacets, reflecting light in many directions, while smooth surfaces tend to reflect it mostly in one direction. When light coming from different directions is averaged inside a tiny visible point, the result looks blurry to us, and also less bright, thanks to energy conservation. PlayCanvas simulates this behavior with the glossiness parameter, which works automatically for lights, however, for IBL we must precalculate the correct blurred response in advance. This is what the Prefilter button does.

**Prefilter**ボタンはインスペクターのCubeMapアセットで使用できますが、CubeMapを使用して物理的マテリアルでIBLを有効にする必要があります。

## 環境マップのオーサリング

環境地図には、等角投影、CubeMap(面のリスト)、方位角など多くの異なる投影があります。WebGLとGPUは面のリストで動作します - キューブ - CubeMapの側面を表す6つのテクスチャのセット。環境マップが他の投影法の場合、6つのテクスチャに変換する必要があります。

投影間で変換するには、さまざまなツールを使用できます。その1つは、クロスプラットフォームのオープンソースのCubeMapフィルタリングツール[cmftStudio][0]です。

CubeMapsはCGIでレンダリングしたり、写真から組み立てたり、HDR環境マップをウェブサイトからダウンロード/購入することもできます。実験のための良い情報源には：[sIBL Archive][6]、[No Emotion HDR's][10]、[Open Footage][11]、[Paul Debevec][12]などがあります。環境マップは、上述のcmftStudioによって等角投影法とコンバーチブル法が可能です。

## CubeMapのレンダリング

CubeMap is made of 6 faces, each representing square side of a cube, simply put: it can be rendered using square viewport camera, by rotating it in different 90 degrees directions with 90 degrees field of view.

![CubeMapの面][13]

一般的な3Dモデリングツール、または写真と360 画像ソフトウェアを使用できます。これは線形ガンマ空間でレンダリングされるべきであり、[Lightmapping ガンマ補正セクション][1]で説明されている色補正を行うべきではありません。

[このような][2]3D Studio Maxのプラグインの１つを使って、VRay CubeMapの面をレンダリングして、PlayCanvas Editorにアップロードすることができます。

## IBLの適用

This can be done using two methods:
1. Use CubeMap as Skybox in Scene Settings.
2. Use CubeMap as environment map on the Material directly.

## ボックスのプロジェクションマッピング

この技術は、環境マップの投影を変更して、CubeMapがその境界に対応するように空間内でボックスを指定できるようにします。最も一般的な用途は、ルームスケール環境内の表面上の反射をシミュレートすることです。

![素材CubeMapボックスプロジェクション][4]

## 例

Here is an [example][7] and [project][8] of the scene using CubeMap Box Projection. Notice the reflection on the wooden floor from the windows and the subtle reflection on the ceiling, as well as the reflection of the room on the metal PlayCanvas logo on the wall on the right. This is a dynamic effect and can provide very realistic reflections and control to the artist of how surfaces reflect the room environment.

[![Environment Box Projection Mapping][5]][7]
*The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)*

[0]: https://github.com/dariomanesku/cmftStudio
[1]: /user-manual/graphics/lighting/lightmapping/#gamma-correction
[2]: http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity
[3]: /user-manual/assets/cubemaps/
[4]: /images/user-manual/graphics/physical-rendering/cubemap-box-projection.png
[5]: /images/user-manual/lighting/lightmaps/playcanvas-lightmapping-scene.jpg
[6]: http://www.hdrlabs.com/sibl/archive.html
[7]: https://playcanv.as/p/zdkARz26/
[8]: https://playcanvas.com/project/446587/overview/archviz-example
[9]: /images/user-manual/graphics/physical-rendering/ibl-hdr-ldr.jpg
[10]: http://noemotionhdrs.net/
[11]: http://www.openfootage.net/?tag=hdri
[12]: http://www.pauldebevec.com/Probes/
[13]: /images/user-manual/graphics/physical-rendering/cubemap-faces.jpg

