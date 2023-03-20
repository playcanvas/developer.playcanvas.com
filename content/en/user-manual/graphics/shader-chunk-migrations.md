---
title: Shader Chunk Migrations
layout: usermanual-page.hbs
position: 6
---

## Introduction

The PlayCanvas Engine's material shader chunk system is undergoing substantial changes in order to support a more flexible material system. Please see [this page][1] for more context.

In order to help users migrate their existing custom shader chunks, this page lists the changes made to chunks and organizes them by engine release (starting v1.51).

## Chunk API Versions

The debug version of the Engine will report any API changes to the runtime console when it detects overridden chunks. For example:

![Console output][2]

Once an application's chunks have been updated to the latest API they must be flagged as such. For example, after updating a material's custom chunks to the latest engine release (say v1.55), specify this in the chunks object as follows:

```javascript
material.chunks.diffusePS = '...';
material.chunks.APIVersion = pc.CHUNKAPI_1_55;
```

By doing this you will no longer see warning messages in the console.

## Chunk changes

The following tables break down the chunk changes by Engine release.

### *Engine v1.62*

In PlayCanvas, we have two sets of shader chunks, one set we refer to as the shader frontend, which provide values for the arguments passed to our lighting algorithm, also called the shader backend. 

With 1.62, we are creating a clearer distinction between these two, such that the values passed to the backend are well defined and known in advance, not automatically generated. This allows for writing a fully custom shader that can interface with our lighting code just like how our native materials do. 

As a result of that, almost all backend chunks have been changed to accomodate for the split. This means that any custom backend shader chunks must move away from using globals to using the arguments passed to them by the lighting backend. 

This change also makes some chunks, such as the clearcoat specific ones, redundant, as their functions have become reusable when their no longer reliant on global values.

Where we previously had globals, in 1.62 they are packed into structs, these structs are the primary LitShaderArgs which is defined as such:

```c
struct LitShaderArguments {
    float opacity;

    vec3 worldNormal;

    vec3 albedo;

    float transmission;
    float thickness;

    vec3 specularity;
    float gloss;
    float metalness;
    float specularityFactor;

    float ao;

    vec3 emission;

    vec3 lightmap;
    vec3 lightmapDir;

    IridescenceArgs iridescence;
    ClearcoatArgs clearcoat;
    SheenArgs sheen;
};
```

The last three arguments are our shading extensions. IridescenceArgs is defined as such:
```c
struct IridescenceArgs
{
    vec3 fresnel;
    float intensity;
    float thickness;
};
```

ClearcoatArgs:
```c
struct ClearcoatArgs
{
    float specularity;
    float gloss;
    vec3 worldNormal;
};
```

SheenArgs:
```c
struct SheenArgs
{
    float gloss;
    vec3 specularity;
};
```

| Chunk | Changes |
| --- | --- |
| `ambient(Constant/Env/SH)` | <ul><li>Accepts a vec3 for the world normal instead of using `dNormalW`</li></ul>
| `aoDiffuseOcc` | <ul><li>Accepts a float value for the AO, instead of using `dAO`</li></ul>
| `aoSpec(Occ/OccConst/OccConstSimple/OccSimple)` | <ul><li>Accepts float gloss, float ao and a vec3 world normal instead of using `dGlossiness`, `dAo` and `dNormalW` respectively</li></ul>
| `combine` | <ul><li>Accepts vec3 for albedo, sheen specularity and a float for clearcoat specularity instead of using `dAlbedo`, `sSpecularity` and `ccSpecularity`</li></ul>
| `clusteredLight` | <ul><li>Reliance on globals have been reduced to only use dReflDirW and ccReflDirW</li></ul>
| `end` | <ul><li>Passes albedo, sheen specularity and clearcoat specularity to combine using `litShaderArgs`, uses `litShaderArgs.emission` instead of relying on `dEmission`</li></ul>
| `fresnelSchlick` | <ul><li>Accepts gloss and `IridescenceArgs` instead of relying on `dGlossiness`, `dIridescenceFresnel` and `dIridescence`</li></ul>
| `iridescenceDiffraction` | <ul><li>Accepts a float as iridescence thickness instead of using `dIridescenceThickness`</li></ul>
| `lightDiffuseLambert` | <ul><li>Accepts vec3 world normal instead of using `dNormalW`</li></ul>
| `lightSheen` | <ul><li>Accepts vec3 world normal, float gloss instead of relying on `dNormalW`, `dGlossiness`</li></ul>
| `lightSpecular(AnisoGGX/Blinn/Phong)` | <ul><li>Accepts vec3 reflection direction, vec3 world normal and float gloss instead of relying on `dGlossiness`, `dNormalW` and `dReflDirW`</li></ul>
| `lightmap(DirAdd/Add)` | <ul><li>Accepts a vec3 lightmap direction, vec3 lightmap value, vec3 world normal, float gloss, vec3 specularity and IridescenceArgs instead of relying on `dLightMap`, `dLightmapDir`, `dNormalW` and `dSpecularity`</li></ul>
| `metalnessModulate` | <ul><li>Accepts a `LitShaderArguments` struct which is updated by the chunk. Removes the reliance on `dSpecularity`, `dMetalness` and `dAlbedo`</li></ul>
| `output(Alpha/AlphaPremul)` | <ul><li>Uses `litShaderArgs.opacity` instead of `dAlpha`</li></ul>
| `reflDir(Aniso)` | <ul><li>Accepts a vec3 world normal and a float value for gloss, instead of using `dGlossiness` and `dNormalW`</li></ul>
| `reflection(CC/Cube/Env/EnvHQ/Sphere/SphereLow)` | <ul><li>Accepts a vec3 reflection direction and a float gloss value instead of using `dReflDirW`/`ccReflDirW` and `dGlossiness`
| `reflectionSheen` | <ul><li>Accepts a vec3 world normal and a float gloss value instead of using `dNormalW` and `sGlossiness`</li></ul>
| `refraction(Cube/Dynamic)` | <ul><li>Accepts a vec3 world normal, float thickness, float gloss, vec3 specularity, vec3 albedo, float transmission and `IridescenceArgs` instead of using `dNormalW`, `dAlbedo`, `dTransmission`, `dThickness`, `dGlossiness`, `dSpecularity` and passes the iridescence arguments to the fresnel function</li></ul>


---

### Engine v1.60

| Chunk | Changes |
| ---   | ---     |
| `clearCoatGlossPS` | <ul><li>Renamed uniform `material_clearCoatGlossiness` to `material_clearCoatGloss`.</li></ul> |
| `glossPS`          | <ul><li>Renamed uniform `material_glossiness` to `material_gloss`.</li></ul> |
| `sheenGlossPS`     | <ul><li>Renamed uniform `material_sheenGlossiness` to `material_sheenGloss`.</li></ul> |

---

### Engine v1.57

In 1.57, almost all front-end chunks have been changed to minimize the amount of samplers used by the shader. This is an optional feature, however it's recommended to follow the same coding style to reduce the amount of samplers used by the shader. The following chunks are affected by it:

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

This is also supported in custom front-end chunks, given that your chunk piggybacks on the pre-existing material samplers. To support this method in your chunks, what you'd need to do is:

* Remove the sampler uniform declaration from the chunk
* Replace the sampler name with the `$SAMPLER` macro

For example:

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

Would be converted to:

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
| `combineXXXX` | <ul><li>all combine chunks except for `combinePS` have been deleted.</li><li>instead, combinePS is controlled with a handful of preprocessor defines.</li></ul> |
| `refractionPS` | <ul><li>split into two new chunks, `refractionCubePS` and `refractionDynamicPS`.</li></ul> |
| `refractionCubePS` | <ul><li>the old `refractionPS` is identical to this one, uses a cube map for refractions.</li></ul> |
| `refractionDynamicPS` | <ul><li>new chunk which supports dynamic refractions by using the grab pass, needs `requestSceneColorMap(true);` to be set on the camera to work.</li></ul> |
| `sheenPS` | <ul><li>new chunk to provide sheen (fabric) color.</li></ul> |
| `sheenGlossPS` | <ul><li>new chunk to provide sheen (fabric) glossiness.</li></ul> |
| `reflectionEnvHQPS` | <ul><li>new chunk to provide a high quality specular environment map for reflections and refractions.</li></ul> |
| `thicknessPS` | <ul><li>new chunk to provide thickness which modifies attenuation color for transmissive (transparent/refractive) materials.</li></ul> |
| `bakeDirLmEndPs` | <ul><li>moved to `chunks-lightmapper.js`.</li></ul> |
| `bakeLmEndPS` | <ul><li>moved to `chunks-lightmapper.js`.</li></ul> |

---

### Engine v1.55

| Chunk | Changes |
| --- | --- |
| `clearCoatNormalPS` | <ul><li>refrain from generating world CC reflection, now done on the backend instead</li><li>normalize final world space normal</li></ul> |
| `clusteredLightPS` | <ul><li>remove dead code.</li><li>the `CLUSTER_XXX` macros have been renamed to `LIT_XXX`.</li><li>each light calculates fresnel</li></ul> |
| `combinePS` | <ul><li>new chunk to replace all the other combine chunks.</li></ul> |
| `combineXXXX` | <ul><li>combine chunk variations have been made deprecated and replaced with a single chunk.</li></ul> |
| `diffusePS` | <ul><li>fix gamma handling relative to albedo detail</li></ul> |
| `diffuseDetailMapPS` | <ul><li>gamma correct detail map before combining with base albedo</li></ul> |
| `endPS` | <ul><li>combine emissive with `dEmissive` instead of a call to `getEmission()`</li><li>`CLEARCOAT` macro is now `LIT_CLEARCOAT`.</li></ul> |
| `emissivePS` | <ul><li>set `dEmission` global instead of returning the value in order to bring it in line with the other frontend components</li></ul> 
| `fresnelSchlickPS` | <ul><li>fresnel effect now reacts to index of refraction.</li><li>no longer changes specularity global, but returns value to be used per-light and for the environment</li></ul> |
| `lightmapSingleVert.js` | <ul><li>removed (unused)</li></ul> |
| `lightmapDirPS`, `lightmapSinglePS`| <ul><li>renamed the lightmap function to `getLightMap()` instead of `addLightMap()`</li><li>changed the implementation to write `dLightmap` and `dLightmapDir` global instead of updating `dDiffuseLight` and `dSpecularLight` directly</li><li>backend now handles combining lightmap in `lightmapAddPS` and `lightmapDirAddPS`</li></ul> |
| `lightmapAddPS`, `lightmapDirAddPS` | <ul><li>new chunks for adding the lightmap values passed in from the backend</li><li>`CLEARCOAT` macro replaced with `LIT_CLEARCOAT`.</li></ul> |
| `lightSpecularAnisoGGXPS` | <ul><li>`CLEARCOAT` define replaced with `LIT_CLEARCOAT`</li></ul> |
| `lightSpecularBlinnPS`, `lightSpecularPhongPS` | <ul><li>added clear coat `#define`, removed call to `antiAliasGlossiness()`</li></ul> |
| `ltcPS` | <ul><li>`CLEARCOAT` macro replaced with `LIT_CLEARCOAT`.</li></ul> |
| `normalMapFastPS` | <ul><li>removed</li></ul> |
| `normalMapPS` | <ul><li>added `MAPTEXTURE` #define like the other chunks</li><li>normalize final normal</li><li>when normal texture isn't defined, calculate normal from geometry normal instead</li></ul> |
| `normalDetailMapPS` | <ul><li>remove two (mostly) unnecessary calls to `normalize` - final normal is normalized instead</li></ul> |
| `normalVertexPS` | <ul><li>removed chunk, moved functionality to `normalMapPS` frontend chunk</li></ul> |
| `metalnessPS` | <ul><li>now controls metalness in front end and is not exclusive of `specularPS`</li></ul> |
| `metalnessModulatePS` | <ul><li>new chunk to control how specular color is modulated based on specular color and albedo with regards to metalness</li></ul> |
| `reflectionCC` | <ul><li>`CLEARCOAT` define replaced with `LIT_CLEARCOAT`.</li></ul> |
| `specularAaNonePS`, `specularAaToksvigPS`, `specularAaToksvigFastPS` | <ul><li>removed</li></ul> |
| `startPS` | <ul><li>removed global declarations, generate them on demand instead</li><li>`CLEARCOAT` macro replaced with `LIT_CLEARCOAT`.</li></ul> |
| `specularPS` | <ul><li>only provides specular color, metalness modulation is now done in backend.</li></ul> |
| `specularityFactorPS` | <ul><li>new chunk to control specular intensity for metalness workflow.</li></ul> |

[1]: https://github.com/playcanvas/engine/issues/4250
[2]: /images/user-manual/graphics/shader-chunk-migrations/console-warning.png
