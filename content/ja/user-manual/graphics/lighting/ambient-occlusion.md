---
title: Ambient Occlusion
template: usermanual-page.tmpl.html
position: 4
---

アンビエントオクルージョンは、環境によるオクルージョンに基づいて、どれくらいの光が表面に到達するかを予測する技法です。

PlayCanvasでは、アンビエントライティングは拡散とスペキュラの両方のAOマップで乗算されます。

![Ambient Occlusion comparison: without/with][4]
*Left: without AO; Right: with Global AO*

AOマップは、異なるスケールの場合があります。例えば、モデルの異なる部分の大きなシャドーイング効果を伴う表面の裂け目またはワールドスケールのAOを示すテクスチャ詳細AO。スケールの大きいAOは、より多くのエフェクトをもたらし、通常はUV1のライトマップと一致し、より重要です。

##レンダリンググローバルAO

AOのレンダリングは、一般的な3Dモデリングとarchvizツールを使用して行うことができます。 [Lightmapping Section][0]に記述されているLightmapのレンダリングと事実上同じです。

僅かな違いは、すべてのジオメトリに特殊素材が適用されAOに見えるようにペイントされていることや、テクスチャにレンダリングする際の異なる設定です。

VRayを使用した3D's Maxでは、**VRayDirt**タイプと**Ambient Occlusion**モードの素材を作成することで行います。ここで**radius**は望ましい結果を得るために変更できます。

![3D's Max: アンビエントオクルージョンVRay素材][1]

この素材は、アンビエントオクルージョンマップ内にあるすべての静的ジオメトリに適用する必要があります。3D's Maxでは個々のオブジェクトに手動で適用するか、**Override mtl**プロパティを使用してVRay Render Settingsを使用して行うことができます。このようにして、個々の素材は保存され便利です。

![3D's Max VRayレンダリング設定: Override mtl][2]

次に、このデータをテクスチャに取り込む必要があります。3D's Maxでは、[Render To Texture][3]を使用して行います。ライトマッピングレンダリング時と同じですが、**出力**オプションは**VRayCompleteMap**を使用する必要があります。

AO Textureは非常に詳細な情報を格納する必要はなく、視覚的にはテクスチャ圧縮アーティファクトの悪影響はあまりありません。そのため、JPEGは経済的で適切な形式です。

## Editorにアップロード

Simply upload texture in Editor and apply it on Ambient Occlusion slot on materials.

![Editorのアンビエントオクルージョンマップ][5]

## 例

You can [explore example][6] that uses global Ambient Occlusion described above and its [project][7].

[![PlayCanvas Lightmapping][8]][6]
*The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)*

[0]: /user-manual/graphics/lighting/lightmapping/
[1]: /images/user-manual/lighting/lightmaps/3ds-max-ao-rendering.png
[2]: /images/user-manual/lighting/lightmaps/3ds-max-vray-override-mtl.png
[3]: /user-manual/graphics/lighting/lightmapping#render-to-texture
[4]: /images/user-manual/lighting/lightmaps/model-ao-comparison.jpg
[5]: /images/user-manual/lighting/lightmaps/editor-ao-map.png
[6]: https://playcanv.as/p/zdkARz26/
[7]: https://playcanvas.com/project/446587/overview/archviz-example
[8]: /images/user-manual/lighting/lightmaps/playcanvas-lightmapping-scene.jpg

