---
title: Phong素材
layout: usermanual-page.hbs
position: 2
---

フォン素材は、受け継がれてきたシェーディングモデルです。特定の理由がない限り、Physical Shadingモデルを使用することを推奨します。

### Offset & Tiling

<img loading="lazy" src="/images/user-manual/material-inspector/offset-tiling.jpg" width="300">

| プロパティ          | 説明 |
|-------------------|-------------|
| Apply to all Maps | Uncheck this to apply offset and tiling values to individual maps. |
| Offset            | The offset in U and V to apply to the first UV channel referenced by maps in this material. |
| Tiling            | The scale in U and V to apply to the first UV channel referenced by maps in this material. |

### Ambient

アンビエントプロパティは、素材が周囲光の中でどのように表示されるかを決定します。

<img loading="lazy" src="/images/user-manual/material-inspector/ambient.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| Tint       | Check this to multiply the scene's global ambient color with a material specific color. |
| 色      | The tint color to multiply the scene's global ambient color. |
| AO Texture | An ambient occlusion map containing pre-baked ambient occlusion. |

### 拡散マップ

拡散プロパティは、シーン内の動的ライトソースによって発せられた拡散光を、素材がどのように反映するかを定義します。

<img loading="lazy" src="/images/user-manual/material-inspector/diffuse.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | The diffuse map that specifies the per-pixel diffuse material color. If no diffuse map is set, the diffuse color is used instead. |
| Tint       | Check this to modulate the material's diffuse map with a material specific diffuse color. |
| 色      | If no diffuse map is set, this is the diffuse color of the material. If a diffuse map is set and tint is enabled, this color modulates the material's diffuse map. |

### スペキュラマップ

スペキュラのプロパティは、スペキュラハイライトのカラーを定義します。例：光沢

<img loading="lazy" src="/images/user-manual/material-inspector/specular.jpg" width="300">

| プロパティ     | 説明 |
|--------------|-------------|
| Specular Map | The specular map that specifies the per-pixel specular color. If no specular map is set, the specular color is used instead. |
| Tint         | Check this to modulate the material's specular map with a material specific specular color. |
| 色        | If no specular map is set, this is the specular color of the material. If a specular map is set and tint is enabled, this color modulates the material's specular map. |
| Gloss Map    | The gloss map that specifies a per-pixel shininess value. The gloss map is modulated by the shininess property. |
| Glossiness   | A value determining the smoothness of a surface. For smaller shininess values, a surface is rougher and specular highlights will be broader. For larger shininess values, a surface is smoother and will exhibit more concentrated specular highlights (as the surface is polished and shiny). |

### Emissive（発光）

発光プロパティは、素材が発光する方法を制御します(光反射とは対照的に)。

<img loading="lazy" src="/images/user-manual/material-inspector/emissive.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | The emissive map that specifies the per-pixel emissive color. If no emissive map is set, the emissive color is used instead. |
| Tint       | Check this to modulate the material's emissive map with a material specific emissive color. |
| 色      | If no emissive map is set, this is the emissive color of the material. If an emissive map is set and tint is enabled, this color modulates the material's emissive map. |
| 強度  | A multiplier for emissive color that can achieve overbright effects for exceptionally bright emissive materials. |

### Opacity

Opacityは、透明度のレベルを設定します。

<img loading="lazy" src="/images/user-manual/material-inspector/opacity.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | The opacity map that specifies the per-pixel opacity. The opacity map is modulated by the 'Amount' property. |
| 強度  | The opacity of the material. This is a value between 0 (completely transparent) and 1 (completely opaque. It defaults to 1. |

### Normals

法線マップを指定するために使用します(これらはがたつきを定義。PlayCanvasでは高さマップではなく法線マップを使用する必要があります)。

<img loading="lazy" src="/images/user-manual/material-inspector/normals.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| Bumpiness  | The strength of the applied normal map. This is a value between 0 (the normal map has no effect) and 2 (the effect of the normal map is exaggerated). It defaults to 1. |
| テクスチャ    | The normal map that specifies the per-pixel surface normals. The normal map is modulated by the 'Bumpiness' property. |

### Parallax

視差マップは、表面に深さの錯覚を与えることによって、法線マップにさらにリアルな感覚を加えます。視差のオプションは素材に法線マップを設定している場合のみ有効です。

<img loading="lazy" src="/images/user-manual/material-inspector/parallax.jpg" width="300">

| プロパティ    | 説明 |
|-------------|-------------|
| Height Map  | The height map that specifies the per-pixel strength of the parallax effect. White is full height and black is zero height. |
| Strength    | The strength of a parallax effect (a value between 0 and 2, defaulting to 1). |

### 環境マップ

環境プロパティは、素材がどのように環境を反映するかを定義します。

<img loading="lazy" src="/images/user-manual/material-inspector/environment.jpg" width="300">

| プロパティ            | 説明 |
|---------------------|-------------|
| Sphere Map          | A sphere map texture asset that approximates environment reflection. If a sphere map is set, the Cube Map property will be hidden (since these properties are mutually exclusive). |
| Cube Map            | A cube map texture asset that approximates environment reflection (with greater accuracy than is possible with a sphere map). If a cube map is set, the Sphere Map property will be hidden (since these properties are mutually exclusive). |
| Reflectivity        | A factor to determine what portion of light is reflected from the material. This value defaults to 1 (full reflectivity). |
| Refraction          | A factor to determine what portion of light passes through the material. |
| Index of Refraction | Determines the amount of distortion of light passing through the material. |

### Light Map

ライトマップは、プリベークされた拡散ライトを含みます。ライトマップの使用は、実行時に行われる動的なライトの計算を事前に計算できる最適化と考えられています。

<img loading="lazy" src="/images/user-manual/material-inspector/lightmap.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | The lightmap texture that contains pre-baked diffuse lighting. The lightmap requires the material to be applied to a mesh that has two UV sets. The lightmap uses the second set of UVs. |

### Other Render States

その他のレンダリング状態を使用して、指定された素材にメッシュをレンダリングする方法を追加で制御できます。

<img loading="lazy" src="/images/user-manual/material-inspector/other.jpg" width="300">

| プロパティ        | 説明 |
|-----------------|-------------|
| Depth Test      | If checked, when a mesh with the material is rendered, a per pixel check is performed to determine if the pixel passes the engine's depth test. By default, the test is that the pixel must have a z depth less than or equal to whatever is already in the depth buffer. In other words, the mesh is only visible if nothing is in front of it. If unchecked, the mesh is rendered regardless of what is already in the depth buffer. Defaults to on. |
| Depth Write     | If checked, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. Defaults to on. |
| Cull            | Options are: <ul><li>None: Both front faces and back faces are rendered.</li><li>Front Faces: front faces are rendered and back faces are not.</li><li>Back Faces: back faces are rendered and front faces are not. This is the default.</li></ul> PlayCanvas dictates that a counter-clockwise vertex winding specifies a front face triangle. Note that backface culling is often good for performance because backface pixels are often overwritten (for convex meshes) which can result in redundant filling of pixels. |
| Blend Type      | Options are: <ul><li>None: The mesh is opaque. This is the default.</li><li>Normal: The mesh is transparent, like stained glass.</li><li>Additive: The mesh color is added to whatever has already been rendered to the frame buffer.</li><li>Pre-multiply: Like 'Normal' blending except it is assumed that the color of the mesh being rendered with this material has already been modulated by its alpha value.</li><li>Multiply: When rendered, the mesh color is multiplied by whatever has already been rendered to the frame buffer.</li></ul> |
| Shadow Sampling | Options are: <ul><li>Hard</li><li>PCF 3x3</li></ul> |
