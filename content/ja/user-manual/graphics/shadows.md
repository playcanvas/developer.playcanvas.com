---
title: 影
template: usermanual-page.tmpl.html
position: 3
---

影はゲームにリアリティを与える重要な要素です。

![Characters with shadow casting][1]

PlayCanvasにはシャドウマッピングという影を生成するアルゴリズムが実装されています。プラットフォーム間の互換性があり、モバイル端末とデスクトップ両方で動作することが保証されています。さらに、影の機能は無料で誰でも使うことができます。ゲームの見栄えをよくするためにProアカウントを作る必要はありません。

## 影をつける

<img src="/images/user-manual/scenes/components/component-light-directional.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

By default, shadow casting is disabled in PlayCanvas. You have to explicitly enable it yourself. Fortunately, enabling shadows is easy. First of all, indentify which lights in your scene you want to cast shadows. Select the lights in the Hierarchy to edit their properties in the Inspector panel. Every light has a 'Cast Shadows' option. Simply check this option for the light to generate shadows for shadow casting graphical objects in your scene.

<img src="/images/user-manual/scenes/components/component-model.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

Now you need to specify which graphical objects in your scene cast and receive shadows. By default, all model components receive shadows but do not cast them. Therefore, in order to see an entity cast shadows, select it in the Hierarchy, locate the model component in the Inspector and check the 'Cast Shadows' option.

Shadows should now be visible in the Editor's Viewport.

## 影のチューニング

The shadow mapping technique used by PlayCanvas has only finite resolution. Therefore, you may need to tune some values to make them look as good as possible. The following properties can be found in the [Light Component][2] UI.

### 投影距離のチューニング

The shadow distance is the distance from the viewpoint beyond which directional light shadows are no longer rendered. The smaller this value, the crisper your shadows will be. The problem is that the viewer will be able to see the shadows suddenly appear as the viewpoint moves around the scene. Therefore, you should balance this value based on how far the player can see into the distance and generally what looks good.

### 影野解像度

すべての光源はシャドウマップを使用して影を投影します。シャドウマップは256x256, 512x512, 1024x1024, 2048x2048のいずれかの解像度を設定できます。この値はlightコンポーネントのインタフェースにも設定できます。この解像度が高ければ高いほど、影は鮮明になります。ただし、高い解像度の影はレンダリングに時間がかかるため、パフォーマンスの影のクオリティのバランスを考えて設定してください。

### 影のバイアス

シャドウマッピングは非常に目立つ不自然な描画をする場合があります。もし影の帯や斑点状のノイズを見つけたら、影のバイアスを調整することで解決する場合があります。

### 法線方向のオフセットバイアス

'影の斑点'と呼ばれる不自然な表示は目立つ問題ですが、シャドウバイアスを調整して対処することができます。ただし、この調整をすると’ピーターパン現象'が発生し、影によって多少物体が浮いているように見えてしまうことがあります。

法線方向のオフセットバイアスによってこの問題に対処することができます。深さ方向のバイアスに加えて、シャドウマップの参照時に使われるUVマッピングをわずかに調整することで、影の斑点とピーターパン現象の二つを同時に避けることができます。フラグメントの位置を法線方向にずらす"法線方向のオフセット"はシャドウバイアスだけで問題に対処するよりも、大幅に見た目を改善します。

## Soft Shadows vs Hard Shadows

The outline of a shadow is called the penumbra. This is a transition from dark to light which gives shadows a soft edge. Softening shadow edges is the default in PlayCanvas but you can change this setting if you wish to achieve hard edged shadows. See below for a comparison of soft and hard edged shadows:

![Hard vs soft shadows][3]

Soft shadows are achieved by performing more samples of the shadow map on the GPU. The algorithm used is called Percentage Closest Filtering or PCF for short. This algorithm reads 9 localized samples (a 3 by 3 matrix) from the shadow map instead of just one as is used for hard shadows.

The shadow sampling type is specified per material and so the option can be found in the Material Editor in the Other section.

## Performance Considerations

Enabling shadows has performance implications:

* For each shadow casting directional or spot light, the scene must be rendered once into a shadow map every frame. Point light shadows are far more expensive since the scene is rendered six times per light (the shadow map is stored as a 6-sided cube map). Rendering the scene into shadow maps places load on both the CPU and the GPU.
* Using a greater shadow map resolution with generate crisper shadows but the GPU must fill more shadow map pixels and therefore this may affect frame rate.
* Selecting soft shadows (PCF3x3) for the shadow sample type on a shadow receiving material is more expensive on the GPU versus the hard shadows option.

[1]: /images/user-manual/graphics/shadows/doom3_shadows.jpg
[2]: /user-manual/packs/components/light
[3]: /images/user-manual/graphics/shadows/hard_vs_soft.jpg

