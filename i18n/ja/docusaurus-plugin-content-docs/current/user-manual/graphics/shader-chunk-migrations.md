---
title: Shader Chunk Migrations
sidebar_position: 6
---

## イントロダクション

PlayCanvas エンジンのマテリアルシェーダチャンクシステムは、より柔軟なマテリアルシステムをサポートするために、大幅な変更が加えられています。詳細については、[このページ][1]を参照してください。

このページでは、既存のカスタム シェーダー チャンクの移行を支援するために、チャンクに加えられた変更点をエンジン リリース別(v1.51 以降)にリストアップしています。

## チャンク API バージョン

エンジンのデバッグバージョンは、オーバーライドされたチャンクを検出すると、ランタイムコンソールに API の変更を報告します。例えば

![Console output](/img/user-manual/graphics/shader-chunk-migrations/console-warning.png)

アプリケーションのチャンクが最新の API に更新されたら、そのようにフラグを立てる必要があります。例えば、マテリアルのカスタムチャンクを最新のエンジンリリース (例えば v1.55) に更新した後、次のようにチャンクオブジェクトで指定します。

```javascript
material.chunks.diffusePS = '...';
material.chunks.APIVersion = pc.CHUNKAPI_1_55;
```

このようにすることで、コンソールに警告メッセージが表示されなくなります。

## チャンクの変更

次の表は、Engine リリースごとのチャンクの変更点をまとめたものです。

### *Engine v1.65*

In 1.62, global variables used to pass the values between the front end back end chunks were grouped into structures LitShaderArguments, IridescenceArgs, ClearcoatArgs and SheenArgs. Those were causing multiple compatibility issues on Android devices, and so in 1.65, these are being converted back to global variables. For example `litShaderArgs.albedo` is now `litArgs_albedo`.

These are the new global variables:

```glsl
// Surface albedo absorbance
vec3 litArgs_albedo;

// Transparency
float litArgs_opacity;

// Emission color
vec3 litArgs_emission;

// Normal direction in world space
vec3 litArgs_worldNormal;

// Ambient occlusion amount, range [0..1]
float litArgs_ao;

// Light map color
vec3 litArgs_lightmap;

// Light map direction
vec3 litArgs_lightmapDir;

// Surface metalness factor, range [0..1]
float litArgs_metalness;

// The f0 specularity factor
vec3 litArgs_specularity;

// Specularity intensity factor, range [0..1]
float litArgs_specularityFactor;

// The microfacet glossiness factor, range [0..1]
float litArgs_gloss;

// Glossiness of the sheen layer, range [0..1]
float litArgs_sheen_gloss;

// The color of the f0 specularity factor for the sheen layer
vec3 litArgs_sheen_specularity;

// Transmission factor (refraction), range [0..1]
float litArgs_transmission;

// Uniform thickness of medium, used by transmission, range [0..inf]
float litArgs_thickness;

// Index of refraction
float litArgs_ior;

// Iridescence effect intensity, range [0..1]
float litArgs_iridescence_intensity;

// Thickness of the iridescent microfilm layer, value is in nanometers, range [0..1000]
float litArgs_iridescence_thickness;

// The normal used for the clearcoat layer
vec3 litArgs_clearcoat_worldNormal;

// Intensity of the clearcoat layer, range [0..1]
float litArgs_clearcoat_specularity;

// Glossiness of clearcoat layer, range [0..1]
float litArgs_clearcoat_gloss;
```

These are the chunk that had their signature changed to accept individual members, instead of the whole structures:

- endPS
- metalnessModulatePS
- outputAlphaPS
- outputAlphaPremulPS
- fresnelSchlickPS
- iridescenceDiffractionPS
- lightmapAddPS
- lightmapDirAddPS
- refractionCubePS
- refractionDynamicPS

### *Engine v1.62*

In PlayCanvas, we have two sets of shader chunks, one set we refer to as the shader frontend, which provide values for the arguments passed to our lighting algorithm, also called the shader backend.

With 1.62, we are creating a clearer distinction between these two, such that the values passed to the backend are well defined and known in advance, not automatically generated. This allows for writing a fully custom shader that can interface with our lighting code just like how our native materials do.

As a result of that, almost all backend chunks have been changed to accommodate for the split. This means that any custom backend shader chunks must move away from using globals to using the arguments passed to them by the lighting backend.

この変更により、クリアコートの特定のチャンクなど、いくつかのチャンクは不要になりました。これらの機能は、グローバル値に依存しなくなったため再利用できるようになりました。

### Changes

このリリースでは、ほとんどのライト/フラグメント・チャンクが変更されています。これらのチャンクのほとんどは、グローバル変数に依存する代わりに、必要な各種の値を受け入れるようにシグネチャが変更されました。ただし、ほとんどのグローバル変数はシェーダー内で設定されています。この変更の例を示します。

```glsl
vec3 combineColor() {
    vec3 ret = vec3(0);
    ret = dAlbedo * dDiffuseLight;
    ...
}
```

Is now expressed:

```glsl
vec3 combineColor(vec3 albedo, vec3 sheenSpecularity, float clearcoatSpecularity) {
    vec3 ret = vec3(0);
    ret = albedo * dDiffuseLight;
    ...
}
```

1.62では、以前グローバル変数だったものが構造体にパックされ、これらの構造体が主要なLitShaderArgsに定義されます。LitShaderArgsは次のように定義されます。

```glsl
struct LitShaderArguments
{
    // Transparency
    float opacity;

    // Normal direction in world space
    vec3 worldNormal;

    // Surface albedo absorbance
    vec3 albedo;

    // Transmission factor (refraction), range [0..1]
    float transmission;

    // Uniform thickness of medium, used by transmission, range [0..inf]
    float thickness;

    // The f0 specularity factor
    vec3 specularity;

    // The microfacet glossiness factor, range [0..1]
    float gloss;

    // Surface metalness factor, range [0..1]
    float metalness;

    // Specularity intensity factor, range [0..1]
    float specularityFactor;

    // Ambient occlusion amount, range [0..1]
    float ao;

    // Emission color
    vec3 emission;

    // Light map color
    vec3 lightmap;

    // Light map direction
    vec3 lightmapDir;

    // Iridescence extension arguments
    IridescenceArgs iridescence;

    // Clearcoat extension arguments
    ClearcoatArgs clearcoat;

    // Sheen extension arguments
    SheenArgs sheen;
};
```

最後の3つの引数が私たちのシェーディングの拡張機能です。IridescenceArgsは次のように定義されます。

```glsl
struct IridescenceArgs
{
    // Iridescence effect intensity, range [0..1]
    float intensity;

    // Thickness of the iridescent microfilm layer, value is in nanometers, range [0..1000]
    float thickness;
};
```

ClearcoatArgs:

```glsl
struct ClearcoatArgs
{
    // Intensity of the clearcoat layer, range [0..1]
    float specularity;

    // Glossiness of clearcoat layer, range [0..1]
    float gloss;

    // The normal used for the clearcoat layer
    vec3 worldNormal;
};
```

SheenArgs:

```glsl
struct SheenArgs
{
    // Glossiness of the sheen layer, range [0..1]
    float gloss;

    // The color of the f0 specularity factor for the sheen layer
    vec3 specularity;
};
```

| Chunk | Changes |
| --- | --- |
| `ambient(Constant/Env/SH)` | <ul><li> `dNormalW` を使用する代わりに、ワールド法線のvec3を受け入れます。</li></ul> |
| `aoDiffuseOcc` | <ul><li> `dAO` を使用する代わりに、AOのfloat値を受け入れます。</li></ul> |
| `aoSpec(Occ/OccConst/OccConstSimple/OccSimple)` | <ul><li> `dGlossiness` 、 `dAo` 、 `dNormalW` 、 `dViewDirW` を使用する代わりに、float形式のグロス（光沢度）、float形式のAO、vec3形式のワールド法線、およびvec3形式の視点方向を受け入れます。</li></ul> |
| `combine` | <ul><li> `dAlbedo` 、 `sSpecularity` 、 `ccSpecularity` を使用する代わりに、vec3形式のアルベド、シーンのスペキュラリティ（鏡面反射）、およびクリアコートのスペキュラリティ（鏡面反射）のfloat値を受け入れます。</li></ul> |
| `clusteredLight` | <ul><li>Reliance on globals have been reduced to only `dLightPosW`, `dLightDirW`, `dLightDirNormW` and `dShadowCoord` which is initialized per light</li></ul> |
| `clusteredLightShadow` | <ul><li>For omni lights, generates a local variable instead of relying on `dShadowCoord`. For spot lights, accepts the shadow coordinate instead of using `dShadowCoord` as before</li></ul> |
| `combine` | <ul><li> `dAlbedo` 、 `sSpecularity` 、 `ccSpecularity` を使用する代わりに、vec3形式のアルベド、vec3形式のシーンのスペキュラリティ（鏡面反射）、およびfloat形式のクリアコートのスペキュラリティ（鏡面反射）を受け入れます。</li></ul> |
| `end` | <ul><li>アルベド、シーンのスペキュラリティ（鏡面反射）、クリアコートのスペキュラリティ（鏡面反射）を `litShaderArgs` を使用して結合し、`dEmission` に依存する代わりに `litShaderArgs.emission` を使用します。</li></ul> |
| `fallOff(InvSquared/Linear)` | <ul><li> `dLightDirW` を使用する代わりに、光の半径の float 値と光の方向の vec3 を受け入れます。</li></ul> |
| `fresnelSchlick` | <ul><li>`dGlossiness` 、 `dIridescenceFresnel` 、 `dIridescence` に依存する代わりに、グロス（光沢度）と `IridescenceArgs`（虹彩効果引数）を受け入れます。</li></ul> |
| `iridescenceDiffraction` | <ul><li> `dIridescenceThickness` を使用する代わりに、虹彩効果の厚さの float 値を受け入れます。</li></ul> |
| `lightDiffuseLambert` | <ul><li>Accepts vec3 world normal, a vec3 view direction, a vec3 light direction and a vec3 normalized light direction instead of using `dNormalW`, `dViewDirW`, `dLightDirW` and `dLightDirNormW`</li></ul> |
| `lightSheen` | <ul><li>Accepts a vec3 half vector, a vec3 world normal, a vec3 view direction, a vec3 normalized light direction and a float gloss instead of relying on `dNormalW`, `dViewDirW`, `dLightDirNormW` and `dGlossiness`</li></ul> |
| `lightSpecular(AnisoGGX/Blinn/Phong)` | <ul><li> `dReflDirW` 、 `dNormalW` 、 `dViewDirW` 、 `dGlossiness/ccGlossiness` 、 `dTBN`  に依存する代わりに、vec3 形式のリフレクション（反射）のためのハーフベクトル、Phong のみに使用される vec3 形式のリフレクション（反射）方向、vec3 形式のワールド法線、vec3 形式の視点方向、float 形式のグロス値（光沢度）、および TBN のための 3x3 マトリクスを引数として受け入れます。 </li></ul> |
| `lightmap(DirAdd/Add)` | <ul><li>Accepts a vec3 lightmap value, a vec3 lightmap direction, a vec3 world normal, a vec3 view direction, float gloss, vec3 specularity, a read-write vec3 normalized light direction, a vec3 geometric normal and IridescenceArgs instead of relying on `dLightMap`, `dLightmapDir`, `dNormalW`, `dViewDirW`, `dGlossiness`, `dVertexNormalW` and `dSpecularity`</li></ul> |
| `ltc` | <ul><li>もはや `dViewDirW` 、 `dNormalW` 、 `dGlossiness` 、 `dSpecularity` 、 `ccGlossiness` 、 `ccSpecularity` 、そして `dLightDirW` を使用せず、代わりにそれらの値が引数として渡されることに依存します。</li></ul> |
| `metalnessModulate` | <ul><li>チャンクによって更新される `LitShaderArguments` 構造体を受け入れます。 `dSpecularity` 、 `dMetalness` 、そして `dAlbedo` への依存を削除します。</li></ul> |
| `output(Alpha/AlphaPremul)` | <ul><li>`dAlpha` の代わりに、 `litShaderArgs.opacity` を使用します。</li></ul> |
| `reflDir(Aniso)` | <ul><li> `dGlossiness` 、`dViewDirW` 、`dNormalW` 、`dTBN` の代わりに、vec3形式のワールド法線、視点の方向、グロス値（光沢度）の浮動小数点値、そしてTBNの3x3マトリクスを引数として受け入れます。 </li></ul> |
| `reflection(CC/Cube/Env/EnvHQ/Sphere/SphereLow)` | <ul><li> `dReflDirW` / `ccReflDirW` や `dGlossiness` の代わりに、vec3形式のリフレクション（反射）方向と浮動小数点のグロス値（光沢度）を引数として受け入れます。</li></ul> |
| `reflectionSheen` | <ul><li> `dNormalW` 、`dViewDirW` 、`sGlossiness` の代わりに、vec3形式のワールド法線、視点の方向、浮動小数点の光沢度を引数として受け入れます。</li></ul> |
| `refraction(Cube/Dynamic)` | <ul><li> `dNormalW` 、`dAlbedo` 、 `dTransmission` 、 `dThickness` 、 `dGlossiness` 、`dSpecularity` の代わりに、vec3形式のワールド法線、浮動小数点の厚さと光沢度、vec3形式の反射率とアルベド、浮動小数点の透過率、そして `IridescenceArgs` を引数として受け入れます。また、虹彩効果の引数はフレネル関数へ渡されます。</li></ul> |
| `shadow(Common/Coord/CoordPerspZBuffer` | <ul><li> `dLightDirW` 、 `dLightPosW` 、 `dLightDirNormW` 、`dVertexNormalW` を使用する代わりに、vec3 形式の光の方向、光の位置、正規化された光の方向、および幾何学的な法線の順列を引数として受け入れます。この順列は、異なるシャドウ座標関数の要件によって異なります。</li></ul> |
| `shadow(EVSM/EVSMn/Standard/StandardGL2/VSM8)` | <ul><li>`dShadowCoord`を使用する代わりに、vec3シャドウサンプル座標を受け入れます</li></ul> |
| `spot` | <ul><li>Accepts a vec3 normalized light direction instead of using `dLightDirNormW`</li></ul> |
| `TBN(-/ObjectSpace/derivative/fast)` | <ul><li>`dTangentW`、`dBinormalW`、`dNormalW`を使用する代わりに、vec3接線、双接線、および法線を受け入れます。</li></ul> |
---

### Engine v1.60

| Chunk | Changes |
| ---   | ---     |
| `clearCoatGlossPS` | <ul><li>uniformの `material_clearCoatGlossiness` を `material_clearCoatGloss` に改名しました。</li></ul> |
| `glossPS`          | <ul><li>uniformの `material_glossiness` を `material_gloss` に改名しました。</li></ul> |
| `sheenGlossPS`     | <ul><li>uniformの `material_sheenGlossiness` を `material_sheenGloss` に改名しました。</li></ul> |

---

### Engine v1.57

1.57 では、ほぼすべてのフロントエンドチャンクが、シェーダによって使用されるサンプラー の量を最小限に抑えるように変更されました。これはオプションの機能ですが、シェーダーが使用するサンプラーの量を減らすために、同じコーディングスタイルに従うことが推奨されます。以下のチャンクがその影響を受けます。

| Chunk  |
| --- |
| `aoPS` |
| `clearCoatPS` |
| `clearCoatGlossPS` |
| `clearCoatNormalPS` |
| `diffusePS` |
| `diffuseDetailMapPS` |
| `emissivePS` |
| `metalnessPS` |
| `normalMapPS` |
| `normalDetailMapPS` |
| `opacityPS` |
| `parallaxPS` |
| `sheenPS` |
| `sheenGlossPS` |
| `specularPS` |
| `specularityFactorPS` |
| `thicknessPS` |
| `transmissionPS` |

これは、カスタムフロントエンドチャンクでもサポートされており、チャンクが既存のマテリアルサンプラーをピギーバックしていることが前提です。あなたのチャンクでこの方法をサポートするために必要なことは、以下の通りです。

- チャンクからサンプラーユニフォーム宣言を削除してください。
- サンプラー名を `$SAMPLER` マクロで置き換えます。

以下に例を示します。

```glsl
uniform sampler2D texture_aoMap;
void getAO() {
    dAo = 1.0;

    #ifdef MAPTEXTURE
    dAo *= texture2DBias(texture_aoMap, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAo *= saturate(vVertexColor.$VC);
    #endif
}
```

に変換されるでしょう。

```glsl
void getAO() {
    dAo = 1.0;

    #ifdef MAPTEXTURE
    dAo *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAo *= saturate(vVertexColor.$VC);
    #endif
}
```

This allows the engine to automatically pick the sampler uniform to use, thus potentially reducing the total number of samplers. But note, this is only supported for front-end chunks.

---

### Engine v1.56

| Chunk | Changes |
| ---   | ---     |
| `combineXXXX` | <ul><li>combinePS を除くすべての combine チャンクが削除されました。</li><li>その代わり、 `combinePS ` は少数のプリプロセッサ定義で制御されます。</li></ul> |
| `refractionPS` | <ul><li>2つの新しいチャンク、 `refractionCubePS` と `refractionDynamicPS` に分割されました。</li></ul> |
| `refractionCubePS` | <ul><li>以前の`refractionPS`は、屈折にキューブマップを使用することを前提としたものです。</li></ul> |
| `refractionDynamicPS` | <ul><li>新しいチャンクで、グラブパスを使用して動的な屈折をサポートし、カメラに`requestSceneColorMap(true);`を設定する必要があります。</li></ul> |
| `sheenPS` | <ul><li>布 (Fabric) のシーンを提供するための新しいチャンクです。</li></ul> |
| `sheenGlossPS` | <ul><li>布 (Fabric) の光沢度を提供するための新しいチャンクです。</li></ul> |
| `reflectionEnvHQPS` | <ul><li>高品質のスペキュラ環境マップを反射(Reflections)と屈折(Refractions)に提供するための新しいチャンクです。</li></ul> |
| `thicknessPS` | <ul><li>透明または屈折性 (Transmissive) として透明 (Transparent) /屈折性 (Refractive) のマテリアルの減衰色を変更する厚み (Thickness) を提供する新しいチャンクです。</li></ul> |
| `bakeDirLmEndPs` | <ul><li>`chunks-lightmapper.js`に移動しました（未使用）。</li></ul> |
| `bakeLmEndPS` | <ul><li>`chunks-lightmapper.js`に移動しました（未使用）。</li></ul> |

---

### Engine v1.55

| Chunk | Changes |
| --- | --- |
| `clearCoatNormalPS` | <ul><li>バックエンドでのworld CC reflectionの生成を控え、代わりに行います。</li><li>最終的なワールドスペース法線を正規化します。</li></ul> |
| `clusteredLightPS` | <ul><li>不要なコードを削除します。</li><li>`CLUSTER_XXX` マクロは `LIT_XXX` に名称変更されました。</li><li>各ライトがフレネルを計算します。</li></ul> |
| `combinePS` | <ul><li>他の組み合わせチャンクを置き換えるための新しいチャンクです。</li></ul> |
| `combineXXXX` | <ul><li>combineチャンクのバリエーションは非推奨となり、単一のチャンクに置き換えられました。</li></ul> |
| `diffusePS` | <ul><li>アルベドディテールに対するガンマ処理の修正</li></ul> |
| `diffuseDetailMapPS` | <ul><li>ベースアルベドと組み合わせる前にディテールマップをガンマ補正します。</li></ul> |
| `endPS` | <ul><li> `getEmission()` の呼び出しではなく、 `dEmissive` と組み合わせるようにエミッシブを統合します。</li><li> `CLEARCOAT` マクロは `LIT_CLEARCOAT` になりました。</li></ul> |
| `emissivePS` | <ul><li>set `dEmission` global instead of returning the value in order to bring it in line with the other frontend components</li></ul> |
| `fresnelSchlickPS` | <ul><li>フレネル効果が屈折率に反応するようになりました。</li><li>スペキュラリティのグローバル変更は行われず、ライトごとと環境に使用する値が返されるようになりました。</li></ul> |
| `lightmapSingleVert.js` | <ul><li>削除されました（未使用）。</li></ul> |
| `lightmapDirPS`, `lightmapSinglePS`| <ul><li>ライトマップ関数の名称を  `addLightMap() ` ではなく  `getLightMap()` に変更しました。</li><li>  `dDiffuseLight` と `dSpecularLight` を直接更新する代わりに、 `dLightmap` と  `dLightmapDir` をグローバルに書き込むように実装を変更しました。</li><li>バックエンドはライトマップの統合を `lightmapAddPS` と `lightmapDirAddPS` で処理するようになりました。</li></ul>  |
| `lightmapAddPS`, `lightmapDirAddPS` | <ul><li>バックエンドから渡されるライトマップの値を追加するための新しいチャンクです。</li><li> `CLEARCOAT` マクロは `LIT_CLEARCOAT` に置き換えられました。</li></ul> |
| `lightSpecularAnisoGGXPS` | <ul><li> `CLEARCOAT` 定義が `LIT_CLEARCOAT` に置き換えられました。</li></ul> |
| `lightSpecularBlinnPS`, `lightSpecularPhongPS` | <ul><li>クリアコート用の`#define`を追加し、`antiAliasGlossiness()`の呼び出しを削除しました</li></ul> |
| `ltcPS` | <ul><li>`CLEARCOAT` マクロを `LIT_CLEARCOAT` に置き換えました。</li></ul> |
| `normalMapFastPS` | <ul><li>削除されました</li></ul> |
| `normalMapPS` | <ul><li>他のチャンクと同様に `MAPTEXTURE` #define を追加しました</li><li>最終的な法線を正規化しました</li><li>法線テクスチャが定義されていない場合、ジオメトリの法線から法線を計算します</li></ul> |
| `normalDetailMapPS` | <ul><li>`normalize` の2つの(ほとんど)不要な呼び出しを削除しました - 代わりに最終的な法線が正規化されます</li></ul> |
| `normalVertexPS` | <ul><li>チャンクを削除し、機能を `normalMapPS` フロントエンドチャンクに移動しました</li></ul> |
| `metalnessPS` | <ul><li>現在、フロントエンドでメタルネスを制御し、 `specularPS` の排他的な使用はありません。</li></ul> |
| `metalnessModulatePS` | <ul><li>メタルネスに関連してスペキュラーカラーとアルベドに基づいてスペキュラーカラーがどのように変調されるかを制御する新しいチャンク。 </li></ul> |
| `reflectionCC` | <ul><li>`CLEARCOAT` define を `LIT_CLEARCOAT` に置き換えました。</li></ul> |
| `specularAaNonePS`, `specularAaToksvigPS`, `specularAaToksvigFastPS` | <ul><li>削除されました</li></ul> |
| `startPS` | <ul><li>グローバル宣言を削除し、代わりに要求に応じて生成します</li><li>`CLEARCOAT` マクロを `LIT_CLEARCOAT` に置き換えました。</li></ul> |
| `specularPS` | <ul><li>スペキュラーカラーのみを提供し、メタルネスの変調は現在バックエンドで行われます。</li></ul> |
| `specularityFactorPS` | <ul><li>メタルネスワークフローのためのスペキュラー強度を制御する新しいチャンク。</li></ul> |

[1]: https://github.com/playcanvas/engine/issues/4250
