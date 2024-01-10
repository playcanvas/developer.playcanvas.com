---
title: Phongマテリアル
layout: usermanual-page.hbs
sidebar_position: 2
---

Phongマテリアルは、レガシーなシェーディングモデルです。特別な理由がない限り、Physical Shadingモデルを使用することをお勧めします。

### Offset & Tiling

<img loading="lazy" src="/images/user-manual/material-inspector/offset-tiling.jpg" width="300" />

| プロパティ          | 説明 |
|-------------------|-------------|
| Apply to all Maps | オフセットとタイリングの値を個々のマップに適用するには、これをチェックを外します。 |
| Offset            | このマテリアルのマップで参照される最初のUVチャネルに適用するUとVのオフセットです。 |
| Tiling            | このマテリアルのマップで参照される最初のUVチャネルに適用するUとVのスケールです。 |

### Ambient

Ambientプロパティは、マテリアルが周囲光でどのように表示されるかを決定します。

<img loading="lazy" src="/images/user-manual/material-inspector/ambient.jpg" width="300" />

| プロパティ   | 説明 |
|------------|-------------|
| Tint       | マテリアルカラーとシーンのグローバルのAmbientカラーを掛け合わせるには、これをチェックします。 |
| Color      | シーンのグローバルのAmbientカラーを乗算するtintカラーです。 |
| AO Texture | プリベイクされたAmbient Occlusionを含むAmbient Occlusionマップです。 |

### Diffuse

Diffuseプロパティは、マテリアルがシーン内の動的な光源から放射される拡散光をどのように反射するかを定義します。

<img loading="lazy" src="/images/user-manual/material-inspector/diffuse.jpg" width="300" />

| プロパティ   | 説明 |
|------------|-------------|
| Texture    | ピクセルごとのDiffuseマテリアルカラーを指定するDiffuseマップです。Diffuseマップが設定されていない場合、Diffuseカラーが代わりに使用されます。 |
| Tint       | チェックを入れると、マテリアルのDiffuseマップをDiffuseカラーで調節できます。 |
| Color      | Diffuseマップが設定されていない場合、これがマテリアルのDiffuseカラーとなります。Diffuseマップが設定されており、tintが有効になっている場合には、この設定された色でマテリアルのDiffuseマップを調整できます。 |

### Specular

Specularプロパティは、Specularハイライト（光沢）の色を定義します。

<img loading="lazy" src="/images/user-manual/material-inspector/specular.jpg" width="300" />

| プロパティ     | 説明 |
|--------------|-------------|
| Specularマップ | ピクセルごとのSpecularカラーを指定するSpecularマップです。Specularマップが設定されていない場合、Specularカラーが代わりに使用されます。 |
| Tint         | チェックを入れると、マテリアルのSpecularマップをSpecularカラーで調節できます。 |
| Color        | Specularマップが設定されていない場合、これがマテリアルのSpecularカラーです。Specularマップが設定され、tintが有効になっている場合、この色はマテリアルのSpecularマップを調節します。 |
| Gloss Map    | ピクセルごとの光沢度値を指定するGlossマップです。GlossマップはShininessプロパティによって調節します。 |
| Glossiness   | 表面の滑らかさを決定する値です。値が小さいほど、表面は荒く、Specularハイライトは広くなります。光沢度値が大きいほど、表面は滑らかで、表面が磨かれて光沢があるSpecularハイライトを示します。 |

### Emissive

Emissiveプロパティは、マテリアルの発光を制御します。（反射する光とは異なります）

<img loading="lazy" src="/images/user-manual/material-inspector/emissive.jpg" width="300" />

| プロパティ   | 説明 |
|------------|-------------|
| Texture    | ピクセルごとのEmissiveカラーを指定するEmissiveマップです。Emissiveマップが設定されていない場合、Emissiveカラーが代わりに使用されます。 |
| Tint       | チェックを入れると、マテリアルのEmissiveマップをEmissiveカラーで調節できます。 |
| Color      | Emissiveマップが設定されていない場合、これはマテリアルのEmissiveカラーとなります。Emissiveマップが設定され、tintが有効になっている場合、この設定された色でマテリアルのEmissiveマップを調整できます。 |
| Intensity  | 特に明るいEmissiveマテリアルに対してさらに明るい効果を加えることができるEmissiveカラーの乗数です。 |

### Opacity

Opacityは、透明度のレベルを設定します。

<img loading="lazy" src="/images/user-manual/material-inspector/opacity.jpg" width="300" />

| プロパティ   | 説明 |
|------------|-------------|
| Texture    | ピクセルごとの不透明度を指定するOpacityマップです。Opacityマップは、'Amount'プロパティによって調整できます。 |
| Intensity  | マテリアルの不透明度です。これは 0（完全に透明）から 1（完全に不透明）の値です。デフォルトは1です。 |

### Normals

Normalマップを指定するためにこれを使用します（これらは凹凸性を決定します - PlayCanvasでは、HeightマップではなくNormalマップを使用する必要があります）。

<img loading="lazy" src="/images/user-manual/material-inspector/normals.jpg" width="300" />

| プロパティ   | 説明 |
|------------|-------------|
| Bumpiness  | 適用されるNormalマップの強度です。これは 0（Normalマップの影響がない）から 2（Normalマップは大きく影響）の値です。デフォルトは1です。 |
| Texture    | ピクセルごとの表面のNormalを指定するNormalマップです。Normalマップは 'Bumpiness' プロパティで調整できます。 |

### Parallax

Parallaxマップは、表面に視差を与えることでNormalマップにさらなるリアルな感覚を加えます。Parallaxオプションは、マテリアルにNormalマップを設定した場合にのみ有効になります。

<img loading="lazy" src="/images/user-manual/material-inspector/parallax.jpg" width="300" />

| プロパティ    | 説明 |
|-------------|-------------|
| Height Map  | ピクセルごとのParallax効果を指定するHeightマップ。白は最高の高さで、黒はゼロです。  |
| Strength    | Parallax効果の強度（0から2の間の値、デフォルトは1） |

### Environment

Environmentプロパティは、マテリアルが環境をどのように反射するかを決定します。

<img loading="lazy" src="/images/user-manual/material-inspector/environment.jpg" width="300" />

| プロパティ            | 説明 |
|---------------------|-------------|
| Sphere Map          | 環境反射を近似するSphere Mapテクスチャアセット。Sphere Mapが設定されている場合、Cube Mapプロパティは非表示になります（これらのプロパティは相互に排他的です）。 |
| Cube Map            | 環境反射を近似するCube Mapテクスチャアセット（Sphereマップよりも高い精度）です。Cube Mapが設定されている場合、Sphere Mapプロパティは非表示になります（これらのプロパティは相互に排他的だからです）。 |
| Reflectivity        | マテリアルから反射される光の部分を決定する要素。この値はデフォルトで1（全反射）になります。 |
| Refraction          | マテリアルを通過する光の部分を決定する要素。 |
| Index of Refraction | マテリアルを通過する光の歪みの量を決定します。 |

### Light Map

Light Mapには事前にベイクされたDiffuse Lightingが含まれています。Light Mapの使用は、実行時に行われる動的なライトの計算を事前に計算できるため、最適化と考えられます。

<img loading="lazy" src="/images/user-manual/material-inspector/lightmap.jpg" width="300" />

| プロパティ   | 説明 |
|------------|-------------|
| Texture    | プリベイクされたDiffuse Lightingを含むLight Mapテクスチャです。Light Mapを使用するには、2つのUVセットを持つメッシュにマテリアルを適用する必要があります。Light Mapは2番目のUVセットを使用します。 |

### その他のレンダリング状態

その他のレンダリング状態を使用して、マテリアルでメッシュをレンダリングする方法を追加で制御できます。

<img loading="lazy" src="/images/user-manual/material-inspector/other.jpg" width="300" />

| プロパティ        | 説明 |
|-----------------|-------------|
| Depth Test      | チェックされている場合、マテリアルを持つメッシュがレンダリングされるとき、ピクセルごとにチェックが行われ、ピクセルがエンジンのDepth Testに合格するかどうかが決定されます。デフォルトでは、ピクセルは既にDepthバッファにあるものと同じかそれ以下のz深度を持たなければなりません。つまり、メッシュはそれが前に何もない場合にのみ表示されます。チェックが外されている場合、メッシュはDepthバッファにすでにあるものに関係なくレンダリングされます。デフォルトではオンです。 |
| Depth Write     | チェックされた場合、マテリアルを含むメッシュがレンダリングされると、その深度情報はDepthバッファーに書き込まれます。これにより、後続のメッシュがレンダリングされると、このマテリアルでレンダリングされたメッシュに対してDepthテストされます。デフォルトはオンです。 |
| Cull            | オプションは次のとおりです。<ul> <li>None: 前面と背面の両方がレンダリングされます。</li> <li>Front Faces: 前面がレンダリングされ、背面はレンダリングされません。</li> <li>Back Faces: 背面がレンダリングされ、前面はレンダリングされません。これがデフォルトです。</li> </ul> PlayCanvasでは、反時計回りの頂点の巻き方が前面の三角形を指定すると規定しています。背面のカリングは、背面のピクセルが頻繁に上書きされる（凸メッシュの場合）ため、パフォーマンス向上に役立つことが多いです。 |
| Blend Type      | オプションは次のとおりです。<ul> <li>None: メッシュは不透明です。これがデフォルトです。</li> <li>Normal: メッシュは透明で、ステンドグラスのようです。</li> <li>Additive: メッシュの色がフレームバッファにすでにレンダリングされているものに加えられます。</li> <li>Pre-multiply: Normal'ブレンドと同様ですが、このマテリアルでレンダリングされるメッシュの色がすでにそのアルファ値で調整されていると想定されます。</li><li>Multiply: レンダリング時に、メッシュの色がフレームバッファにすでにレンダリングされたものと乗算されます。</li></ul> |
| Shadow Sampling | オプションは: <ul><li>Hard</li><li>PCF 3x3</li></ul>  |
