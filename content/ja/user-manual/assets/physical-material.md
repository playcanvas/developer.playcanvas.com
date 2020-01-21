---
title: Physical Material
template: usermanual-page.tmpl.html
position: 7
---

Physical Material（物理素材）はPlayCanvasで利用可能な最も先進的でクオリティの高いシェーディングモデルを表しています。物理的なシェーディングモデルを使用することを推奨します。

### オフセット & タイリング

<img src="/images/user-manual/material-inspector/offset-tiling.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><td>Apply to all Maps</td><td>Uncheck this to apply offset and tiling values to individual maps.</td></tr>
    <tr><td>Offset</td><td>The offset in U and V to apply to the first UV channel referenced by maps in this material.</td></tr>
    <tr><td>Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by maps in this material.</td></tr>
</table>

### アンビエント

アンビエントプロパティは、素材が周囲光の中でどのように表示されるかを決定します。

<img src="/images/user-manual/material-inspector/ambient.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Tint</td><td>Check this to multiply the scene's global ambient color with a material specific color.</td></tr>
    <tr><td>Color</td><td>The tint color to multiply the scene's global ambient color.</td></tr>
    <tr><td>AO Texture</td><td>An ambient occlusion map containing pre-baked ambient occlusion.</td></tr>
</table>

### 拡散

拡散プロパティは、シーン内の動的ライトソースによって発せられた拡散光を、素材がどのように反映するかを定義します。

<img src="/images/user-manual/material-inspector/diffuse.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The diffuse map that specifies the per-pixel diffuse material color. If no diffuse map is set, the diffuse color is used instead.</td></tr>
    <tr><td>Tint</td><td>Check this to modulate the material's diffuse map with a material specific diffuse color.</td></tr>
    <tr><td>Color</td><td>If no diffuse map is set, this is the diffuse color of the material. If a diffuse map is set and tint is enabled, this color modulates the material's diffuse map.</td></tr>
</table>

### スペキュラ

スペキュラのプロパティは、スペキュラハイライトのカラーを定義します。例：光沢

<img src="/images/user-manual/material-inspector/specular.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Use Metalness</td><td>Toggle between specular and metalness workflow.</td></tr>
    <tr><td>Specular Map</td><td>The specular map that specifies the per-pixel specular color. If no specular map is set, the specular color is used instead.</td></tr>
    <tr><td>Tint</td><td>Check this to modulate the material's specular map with a material specific specular color.</td></tr>
    <tr><td>Color</td><td>If no specular map is set, this is the specular color of the material. If a specular map is set and tint is enabled, this color modulates the material's specular map.</td></tr>
    <tr><td>Metalness Map</td><td>[Only when using metalness] This map specifies per-pixel metalness values. A value of 1 is metal and a value of 0 is non-metal.</td></tr>
    <tr><td>Gloss Map</td><td>The gloss map that specifies a per-pixel shininess value. The gloss map is modulated by the shininess property.</td></tr>
    <tr><td>Glossiness</td><td>A value determining the smoothness of a surface. For smaller shininess values, a surface is rougher and specular highlights will be broader. For larger shininess values, a surface is smoother and will exhibit more concentrated specular highlights (as is the surace is polished and shiny).</td></tr>
</table>

### Emissive（発光）

発光プロパティは、素材が発光する方法を制御します(光反射とは対照的に)。

<img src="/images/user-manual/material-inspector/emissive.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The emissive map that specifies the per-pixel emissive color. If no emissive map is set, the emissive color is used instead.</td></tr>
    <tr><td>Tint</td><td>Check this to modulate the material's emissive map with a material specific emissive color.</td></tr>
    <tr><td>Color</td><td>If no emissive map is set, this is the emissive color of the material. If an emissive map is set and tint is enabled, this color modulates the material's emissive map.</td></tr>
    <tr><td>Intensity</td><td>A multiplier for emissive color that can achieve overbright effects for exceptionally bright emissive materials.</td></tr>
</table>

### Opacity

Opacityは、透明度のレベルを設定します。

<img src="/images/user-manual/material-inspector/opacity.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The opacity map that specifies the per-pixel opacity. The opacity map is modulated by the 'Amount' property.</td></tr>
    <tr><td>Intensity</td><td>The opacity of the material. This is a value between 0 (completely transparent) and 1 (complately opaque. It defaults to 1.</td></tr>
</table>

### Normal

法線マップを指定するために使用します(これらはがたつきを定義。PlayCanvasではハイトマップではなく法線マップを使用する必要があります)。

<img src="/images/user-manual/material-inspector/normals.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Bumpiness</td><td>The strength of the applied normal map. This is a value between 0 (the normal map has no effect) and 2 (the effect of the normal map is exagerrated). It defaults to 1.</td></tr>
    <tr><td>Texture</td><td>The normal map that specifies the per-pixel surface normals. The normal map is modulated by the 'Bumpiness' property.</td></tr>
</table>

### Parallax

視差マップは、表面に深さの錯覚を与えることによって、法線マップにさらにリアルな感覚を加えます。視差のオプションは素材に法線マップを設定している場合のみ有効です。

<img src="/images/user-manual/material-inspector/parallax.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Height Map</td><td>The height map that specifies the per-pixel strength of the parallax effect. White is full height and black is zero height.</td></tr>
    <tr><td>Strength</td><td>The strength of a parallax effect (a value between 0 and 2, defaulting to 1).</td></tr>
</table>

### 環境

環境プロパティは、素材がどのように環境を反映するかを定義します。

<img src="/images/user-manual/material-inspector/environment.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Sphere Map</td><td>A sphere map texture asset that approximates environment reflection. If a sphere map is set, the Cube Map property will be hidden (since these properties are mutually exclusive).</td></tr>
    <tr><td>Cube Map</td><td>A cube map texture asset that approximates environment reflection (with greater accuracy than is possible with a sphere map). If a cube map is set, the Sphere Map property will be hidden (since these properties are mutually exclusive).</td></tr>
    <tr><td>Reflectivity</td><td>A factor to determin what portion of light is reflected from the material. This value defaults to 1 (full reflectivity).</td></tr>
    <tr><td>Refraction</td><td>A factor to determine what portion of light passes through the material</td></tr>
    <tr><td>Index of refraction</td><td>Determines the amount of distortion of light passing through the material.</td></tr>
</table>

### ライトマップ

ライトマップは、プリベークされた拡散ライトを含みます。ライトマップの使用は、実行時に行われる動的なライトの計算を事前に計算できる最適化と考えられています。

<img src="/images/user-manual/material-inspector/lightmap.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The lightmap texture that contains pre-baked diffuse lighting. The lightmap requires the material to be applied to a mesh that has two UV sets. The lightmap uses the second set of UVs.</td></tr>
</table>

### その他のレンダリング状態

その他のレンダリング状態を使用して、指定された素材にメッシュをレンダリングする方法を追加で制御できます。

<img src="/images/user-manual/material-inspector/other.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Depth Test</td><td>If checked, when a mesh with the material is rendered, a per pixel check is performed to determine if the pixel passes the engine's depth test. By default, the test is that the pixel must have a z depth less than or equal to whatever is already in the depth buffer. In other words, the mesh is only visible if nothing is in front of it. If unchecked, the mesh is rendered regardless of what is already in the depth buffer. Defaults to on.</td></tr>
    <tr><td>Depth Write</td><td>If checked, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. Defaults to on.</td></tr>
    <tr><td>Cull</td>
        <td>Options are:
            <ul>
                <li>None: Both front faces and back faces are rendered.</li>
                <li>Front Faces: front faces are rendered and back faces are not.</li>
                <li>Back Faces: back faces are rendered and front faces are not. This is the default.</li>
            </ul>
        PlayCanvas dictates that a counter-clockwise vertex winding specifies a front face triangle. Note that backface culling is often good for performance because backface pixels are often overwritten (for convex meshes) which can result in redundant filling of pixels.
        </td>
    </tr>
    <tr><td>Blend Type</td>
        <td>Options are:
            <ul>
                <li>None: The mesh is opaque. This is the default.</li>
                <li>Normal: The mesh is transparent, like stained glass.</li>
                <li>Additive: The mesh color is added to whatever has already been rendered to the frame buffer.</li>
                <li>Pre-multiply: Like 'Normal' blending except it is assumed that the color of the mesh being rendered with this material has already been modulated by its alpha value.</li>
                <li>Multiply: When rendered, the mesh color is multiplied by whatever has already been rendered to the frame buffer.</li>
            </ul>
        </td>
    </tr>
    <tr><td>Shadow Sampling</td>
        <td>Options are:
            <ul>
                <li>Hard</li>
                <li>PCF 3x3</li>
            </ul>
        </td>
    </tr>
</table>

