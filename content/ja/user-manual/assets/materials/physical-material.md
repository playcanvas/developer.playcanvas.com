---
title: 物理的な素材
layout: usermanual-page.hbs
position: 1
---

Physical Material（物理素材）はPlayCanvasで利用可能な最も先進的でクオリティの高いシェーディングモデルを表しています。物理的なシェーディングモデルを使用することを推奨します。

### オフセット & タイリング

<img loading="lazy" src="/images/user-manual/material-inspector/offset-tiling.jpg" width="300">

| プロパティ          | 説明 |
|-------------------|-------------|
| Apply to all Maps | 個別のマップにオフセットとタイリング値を適用するには、このチェックを外します。 |
| Offset            | この素材のマップが参照する最初のUVチャンネルに適用する、UとVのオフセット。 |
| Tiling            | この素材のマップが参照する最初のUVチャンネルに適用する、UとVのスケール。 |

### アンビエント

アンビエントプロパティは、素材が周囲光の中でどのように表示されるかを決定します。

<img loading="lazy" src="/images/user-manual/material-inspector/ambient.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| Tint       | チェックをいれると、素材特有の色と、シーンのグローバルアンビエントカラーが乗算されます。 |
| 色      | シーンのグローバルアンビエントカラーを乗算するティントカラー。 |
| AO Texture | プリベークされたアンビエントオクルージョンを含む、アンビエントオクルージョンマップ。 |

### 拡散マップ

拡散プロパティは、シーン内の動的ライトソースによって発せられた拡散光を、素材がどのように反映するかを定義します。

<img loading="lazy" src="/images/user-manual/material-inspector/diffuse.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | ピクセル単位の拡散素材の色を指定する拡散マップ。拡散マップが設定されていない場合、拡散色が代わりに使用されます。 |
| Tint       | チェックを入れると、素材の拡散マップを素材固有の拡散色で調節します。 |
| 色      | 拡散マップが設定されていない場合、これが素材の拡散色になります。拡散マップが設定されていてtintが有効になっている場合、この色が素材の拡散マップを変調します。 |

### スペキュラマップ

スペキュラのプロパティは、スペキュラハイライトのカラーを定義します。例：光沢

<img loading="lazy" src="/images/user-manual/material-inspector/specular.jpg" width="300">

| プロパティ      | 説明 |
|---------------|-------------|
| Use Metalness | スペキュラとメタル質ワークフロー間で切り替える。 |
| Specular Map  | ピクセル単位のスペキュラ色を指定するスペキュラマップ。スペキュラマップが設定されていない場合は、スペキュラ色が代わりに使用されます。 |
| Tint          | チェックすると、素材固有のスペキュラ色で素材のスペキュラマップを調節します。 |
| 色         | スペキュラマップが設定されていない場合、素材のスペキュラ色になります。スペキュラマップが設定されていてtintが有効になっている場合、この色が素材のスペキュラマップを調節します。 |
| Metalness Map | [メタル質を使用している場合のみ]このマップは、ピクセル単位のメタル質値を指定します。 1の値はメタル（金属）であり、0の値はノンメタル（非金属）です。 |
| Gloss Map     | ピクセル単位の光沢値を指定するグロスマップ。グロスマップは光沢プロパティで変調されます。 |
| Glossiness    | 表面の平滑性を決定する値。小さい光沢値にすると、表面はより粗く、スペキュラハイライトはより広範になります。 大きな光沢値にすると、表面はより滑らかで、スペキュラハイライトはより濃縮されます(表面が磨かれて光っているように)。 |

### Emissive（発光）

発光プロパティは、素材が発光する方法を制御します(光反射とは対照的に)。

<img loading="lazy" src="/images/user-manual/material-inspector/emissive.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | ピクセル単位の発光色を指定する発光マップ。発光マップが設定されていない場合、発光色が代わりに使用されます。 |
| Tint       | チェックをすると、素材の発光マップを素材固有の発光色で変調します。 |
| 色      | 発光マップが設定されていない場合、素材の発光色となります。発光マップが設定されていてtintが有効になっている場合、この色は素材の発光マップを調節します。 |
| 強度  | 非常に明るい発光素材に過剰に明るい効果を加えることができる発光色の乗数。 |

### Opacity (不透明度)

Opacityは、透明度のレベルを設定します。

<img loading="lazy" src="/images/user-manual/material-inspector/opacity.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | ピクセルごとの不透明度を指定する不透明度マップ。不透明度マップは、'Amount'プロパティによって変調されます。 |
| 強度  | 素材の不透明度。これは、0(完全に透明)から1(完全に不透明）の間の値である。デフォルトは1です。 |

### Normals

法線マップを指定するために使用します(これらはがたつきを定義。PlayCanvasでは高さマップではなく法線マップを使用する必要があります)。

<img loading="lazy" src="/images/user-manual/material-inspector/normals.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| Bumpiness  | 適用される法線マップの強さ。0(法線マップは影響を与えません)と2(法線マップは大きく影響)の間の値です。デフォルトは1です。 |
| テクスチャ    | ピクセルごとの表面の法線を指定する法線マップ。法線マップは 'Bumpiness' プロパティによって変調します。 |

### Parallax

視差マップは、表面に深さの錯覚を与えることによって、法線マップにさらにリアルな感覚を加えます。視差のオプションは素材に法線マップを設定している場合のみ有効です。

<img loading="lazy" src="/images/user-manual/material-inspector/parallax.jpg" width="300">

| プロパティ    | 説明 |
|-------------|-------------|
| Height Map  | 視差効果のピクセルごとの強度を指定する高さマップ。白は最高の高さで、黒は高さゼロです。 |
| Strength    | 視差効果の強さ（0と2の間の値、デフォルト設定は1）。 |

### 環境マップ

環境プロパティは、素材がどのように環境を反映するかを定義します。

<img loading="lazy" src="/images/user-manual/material-inspector/environment.jpg" width="300">

| プロパティ            | 説明 |
|---------------------|-------------|
| Sphere Map          | 環境反射を近似するスフィアマップテクスチャアセット。スフィアマップが設定されている場合、キューブマッププロパティが非表示になります(これらのプロパティは相互に独占的であるため)。 |
| Cube Map            | 環境反射を近似するキューブマップテクスチャアセット(スフィアマップよりも正確)。キューブマップが設定されている場合、スフィアマッププロパティが非表示になります(これらのプロパティは相互に独占的であるため)。 |
| Reflectivity        | 素材からライトのどの部分が反射されるかを決定する要因。この値のデフォルトは1(完全に反射)です。 |
| Refraction          | 光のどの部分が素材を通過するかを決定する要因。 |
| Index of Refraction | 素材を通過する光の歪みの量を決定。 |

### Light Map

ライトマップは、プリベークされた拡散ライトを含みます。ライトマップの使用は、実行時に行われる動的なライトの計算を事前に計算できる最適化と考えられています。

<img loading="lazy" src="/images/user-manual/material-inspector/lightmap.jpg" width="300">

| プロパティ   | 説明 |
|------------|-------------|
| テクスチャ    | プリベークされた拡散ライトを含むライトマップテクスチャ。ライトマップは、2つのUVセットを持つメッシュに素材が適用されていることを必須とします。ライトマップは、第2つ目のセットのUVを使用します。 |

### Other Render States

その他のレンダリング状態を使用して、指定された素材にメッシュをレンダリングする方法を追加で制御できます。

<img loading="lazy" src="/images/user-manual/material-inspector/other.jpg" width="300">

| プロパティ        | 説明 |
|-----------------|-------------|
| Depth Test      | チェックすると、素材とメッシュがレンダリングされるときに、ピクセルごとのチェックが行われ、エンジンのデプステストにピクセルが合格するかどうかを判断します。デフォルトでは、ピクセルが深度バッファに既にあるZ深度以下であることをテストで確認します。つまり、メッシュはその前に何もない場合にのみ表示されます。オフにした場合、深度バッファに何が入っていても、メッシュはレンダリングされます。デフォルトはオンです。 |
| Depth Write     | If checked, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. Defaults to on. |
| Cull            | Options are: <ul><li>None: Both front faces and back faces are rendered.</li><li>Front Faces: front faces are rendered and back faces are not.</li><li>Back Faces: back faces are rendered and front faces are not. This is the default.</li></ul> PlayCanvas dictates that a counter-clockwise vertex winding specifies a front face triangle. Note that backface culling is often good for performance because backface pixels are often overwritten (for convex meshes) which can result in redundant filling of pixels. |
| Blend Type      | Options are: <ul><li>None: The mesh is opaque. This is the default.</li><li>Normal: The mesh is transparent, like stained glass.</li><li>Additive: The mesh color is added to whatever has already been rendered to the frame buffer.</li><li>Pre-multiply: Like 'Normal' blending except it is assumed that the color of the mesh being rendered with this material has already been modulated by its alpha value.</li><li>Multiply: When rendered, the mesh color is multiplied by whatever has already been rendered to the frame buffer.</li></ul> |
| Shadow Sampling | Options are: <ul><li>Hard</li><li>PCF 3x3</li></ul> |
