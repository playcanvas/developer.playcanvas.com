---
title: 物理的マテリアル
template: usermanual-page.tmpl.html
position: 1
---

Physical Material（物理素材）はPlayCanvasで利用可能な最も先進的でクオリティの高いシェーディングモデルを表しています。物理的なシェーディングモデルを使用することを推奨します。

### オフセット & タイリング

<img src="/images/user-manual/material-inspector/offset-tiling.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><td>全てのマップに適用</td><td>個別のマップにオフセットとタイリング値を適用するには、このチェックを外します。</td></tr>
    <tr><td>Offset</td><td>この素材のマップが参照する最初のUVチャンネルに適用する、UとVのオフセット。</td></tr>
    <tr><td>Tiling</td><td>この素材のマップが参照する最初のUVチャンネルに適用する、UとVのスケール。</td></tr>
</table>

### アンビエント

アンビエントプロパティは、素材が周囲光の中でどのように表示されるかを決定します。

<img src="/images/user-manual/material-inspector/ambient.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Tint</td><td>チェックをいれると、素材特有の色と、シーンのグローバルアンビエントカラーが乗算されます。</td></tr>
    <tr><td>Color</td><td>シーンのグローバルアンビエントカラーを乗算するティントカラー。</td></tr>
    <tr><td>AO Texture</td><td>プリベークされたアンビエントオクルージョンを含む、アンビエントオクルージョンマップ。</td></tr>
</table>

### 拡散

拡散プロパティは、シーン内の動的ライトソースによって発せられた拡散光を、素材がどのように反映するかを定義します。

<img src="/images/user-manual/material-inspector/diffuse.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Texture</td><td>ピクセル単位の拡散素材の色を指定する拡散マップ。拡散マップが設定されていない場合、拡散色が代わりに使用されます。</td></tr>
    <tr><td>Tint</td><td>チェックを入れると、素材の拡散マップを素材固有の拡散色で調節します。</td></tr>
    <tr><td>Color</td><td>拡散マップが設定されていない場合、これが素材の拡散色になります。拡散マップが設定されていてtintが有効になっている場合、この色が素材の拡散マップを変調します。</td></tr>
</table>

### スペキュラ

スペキュラのプロパティは、スペキュラハイライトのカラーを定義します。例：光沢

<img src="/images/user-manual/material-inspector/specular.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Use Metalness</td><td>スペキュラとメタル質ワークフロー間で切り替える。</td></tr>
    <tr><td>Specular Map</td><td>ピクセル単位のスペキュラ色を指定するスペキュラマップ。スペキュラマップが設定されていない場合はスペキュラ色が代わりに使用されます。</td></tr>
    <tr><td>Tint</td><td>素材のスペキュラマップを素材固有のスペキュラ色で調節する場合、チェックを入れます。</td></tr>
    <tr><td>Color</td><td>スペキュラマップが設定されていない場合、これは、素材のスペキュラ色になります。スペキュラマップが設定されていてtintが有効になっている場合、この色が素材のスペキュラマップを調節します。</td></tr>
    <tr><td>Metalness Map</td><td>[メタル質を使用している場合のみ]このマップは、ピクセル単位のメタル質値を指定します。 1の値はメタル（金属）であり、0の値はノンメタル（非金属）です。</td></tr>
    <tr><td>Gloss Map</td><td>ピクセル単位の光沢値を指定するグロス（光沢）マップ。グロス（光沢）マップは光沢プロパティによって変調されます。</td></tr>
    <tr><td>Glossiness</td><td>表面の平滑性を決定する値。小さい値にすると、表面が粗くなりスペキュラハイライトはより広範になります。大きな値にすると、表面は滑らかになり、より濃縮されたスペキュラハイライトを展示します （表面が研磨され光沢があるように）。</td></tr>
</table>

### Emissive（発光）

発光プロパティは、素材が発光する方法を制御します(光反射とは対照的に)。

<img src="/images/user-manual/material-inspector/emissive.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Texture</td><td>ピクセル単位の発光色を指定する発光マップ。発光マップが設定されていない場合、発光色が代わりに使用されます。</td></tr>
    <tr><td>Tint</td><td>チェックをすると、素材の発光マップを素材固有の発光色で変調します。</td></tr>
    <tr><td>Color</td><td>発光マップが設定されていない場合、素材の発光色となります。発光マップが設定されていてtintが有効になっている場合、この色は素材の発光マップを調節します。</td></tr>
    <tr><td>Intensity</td><td>非常に明るい発光素材に過剰に明るい効果を加えることができる発光色の乗数。</td></tr>
</table>

### Opacity

Opacityは、透明度のレベルを設定します。

<img src="/images/user-manual/material-inspector/opacity.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Texture</td><td>ピクセルごとの不透明度を指定する不透明度マップ。不透明度マップは、'Amount'プロパティによって変調されます。</td></tr>
    <tr><td>Intensity</td><td>素材の不透明度。これは、0(完全に透明)から1(完全に不透明）の間の値である。デフォルトは1です。</td></tr>
</table>

### Normal

法線マップを指定するために使用します(これらはがたつきを定義。PlayCanvasではハイトマップではなく法線マップを使用する必要があります)。

<img src="/images/user-manual/material-inspector/normals.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Bumpiness</td><td>適用される法線マップの強さ。0(法線マップは影響を与えません)と2(法線マップは大きく影響)の間の値です。デフォルトは1です。</td></tr>
    <tr><td>Texture</td><td>ピクセルごとの表面の法線を指定する法線マップ。法線マップは 'Bumpiness' プロパティによって変調します。</td></tr>
</table>

### Parallax

視差マップは、表面に深さの錯覚を与えることによって、法線マップにさらにリアルな感覚を加えます。視差のオプションは素材に法線マップを設定している場合のみ有効です。

<img src="/images/user-manual/material-inspector/parallax.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Height Map</td><td>視差効果のピクセルごとの強度を指定する高さマップ。白は最高の高さで、黒は高さゼロです。</td></tr>
    <tr><td>Strength</td><td>視差効果の強さ（0と2の間の値、デフォルト設定は1）。</td></tr>
</table>

### 環境

環境プロパティは、素材がどのように環境を反映するかを定義します。

<img src="/images/user-manual/material-inspector/environment.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Sphere Map</td><td>環境反射を近似するスフィアマップテクスチャアセット。スフィアマップが設定されている場合、キューブマッププロパティが非表示になります(これらのプロパティは相互に独占的であるため)。</td></tr>
    <tr><td>Cube Map</td><td>環境反射を近似するキューブマップテクスチャアセット(スフィアマップよりも正確)。キューブマップが設定されている場合、スフィアマッププロパティが非表示になります(これらのプロパティは相互に独占的であるため)。</td></tr>
    <tr><td>Reflectivity</td><td>素材からライトのどの部分が
反射されるかを決定する要因。この値のデフォルトは1(完全に反射)です。</td></tr>
    <tr><td>Refraction</td><td>光のどの部分が素材を通過するかを決定する要因。</td></tr>
    <tr><td>Index of refraction</td><td>素材を通過する光の歪みの量を決定。</td></tr>
</table>

### ライトマップ

ライトマップは、プリベークされた拡散ライトを含みます。ライトマップの使用は、実行時に行われる動的なライトの計算を事前に計算できる最適化と考えられています。

<img src="/images/user-manual/material-inspector/lightmap.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Texture</td><td>プリベークされた拡散ライトを含むライトマップテクスチャ。ライトマップは、2つのUVセットを持つメッシュに素材が適用されていることを必須とします。ライトマップは、第2つ目のセットのUVを使用します。</td></tr>
</table>

### その他のレンダリング状態

その他のレンダリング状態を使用して、指定された素材にメッシュをレンダリングする方法を追加で制御できます。

<img src="/images/user-manual/material-inspector/other.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Depth Test</td><td>チェックすると、素材とメッシュがレンダリングされるときに、ピクセルごとのチェックが行われ、エンジンのデプステストにピクセルが合格するかどうかを判断します。デフォルトでは、ピクセルが深度バッファに既にあるZ深度以下であることをテストで確認します。つまり、メッシュはその前に何もない場合にのみ表示されます。オフにした場合、深度バッファに何が入っていても、メッシュはレンダリングされます。デフォルトはオンです。
</td></tr>
    <tr><td>Depth Write</td><td>If checked, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. Defaults to on.

チェックすると、素材とメッシュがレンダリングされるときに、その深さ情報が深度バッファに書き込まれます。これにより、後続のメッシュがレンダリングされた時にこの素材にレンダリングされるメッシュに対して、正常に深度テストが行われることが保証されます。デフォルトはオンです。</td></tr>
    <tr><td>Cull</td>
        <td>オプションは次の通り：
            <ul>
                <li>None: 前面と後面の両方がレンダリングされる。</li>
                <li>Front Faces: 前面はレンダリングされ、後面はされない。</li>
                <li>Back Faces: 後面はレンダリングされ、前面はされない。これがデフォルトです。</li>
            </ul>
        PlayCanvas dictates that a counter-clockwise vertex winding specifies a front face triangle. Note that backface culling is often good for performance because backface pixels are often overwritten (for convex meshes) which can result in redundant filling of pixels.

PlayCanvasは、反時計回りの頂点巻線が正面の三角形を指定するよう指示します。背面ピクセルは上書きされ（複雑なメッシュの場合）、ピクセルの過剰な補充を招くことが多いので、バックフェースカリングはパフォーマンスの向上に繋がります。
        </td>
    </tr>
    <tr><td>Blend Type</td>
        <td>オプションは次の通り：
            <ul>
                <li>None: メッシュは不透明。これがデフォルトです。</li>
                <li>Normal: メッシュは、ステンドグラスのように透明。</li>
                <li>Additive: 既にフレームバッファにレンダリングされているものに、メッシュの色が追加される。</li>
                <li>Pre-multiply: Like 'Normal' blending except it is assumed that the color of the mesh being rendered with this material has already been modulated by its alpha value.
'Normal'ブレンドと似ているが、この素材にレンダリングされるメッシュの色がすでにそのアルファ値によって変調されている。</li>
                <li>Multiply: When rendered, the mesh color is multiplied by whatever has already been rendered to the frame buffer.レンダリングすると、メッシュの色は既にフレームバッファにレンダリングされている物と乗算される。</li>
            </ul>
        </td>
    </tr>
    <tr><td>Shadow Sampling</td>
        <td>オプションは次の通り：
            <ul>
                <li>Hard</li>
                <li>PCF 3x3</li>
            </ul>
        </td>
    </tr>
</table>

