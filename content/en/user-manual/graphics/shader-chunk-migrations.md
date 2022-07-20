---
title: Shader Chunk Migrations
layout: usermanual-page.hbs
position: 6
---

## Introduction

The PlayCanvas Engine's material shader chunk system is undergoing substantial changes in order to support a more flexible material system. Please see [this page][1] for more context.

In order to help users migrate their existing custom shader chunks, this page lists the changes made to chunks and organizes them by engine release (starting v1.51).

## Chunk API Versions

The debug version of the Engine will report any API changes to the console when it detects overridden chunks at runtime.

Once an application's chunks have been updated to the latest API they must be flagged as such. For example, after updating a material's custom chunks to the latest engine release (say v1.55), specify this in the chunks object as follows:
```javascript
material.chunks.diffusePS = '...';
material.chunks.APIVersion = pc.CHUNKAPI_1_55;
```

## Chunk changes

The following tables break down the chunk changes by Engine release.

---
#### *Engine v1.55*

| Chunk | Changes |
| --- | --- |
| `clearCoatNormalPS` | <ul><li>refrain from generating world CC reflection, now done on the backend instead</li><li>normalize final world space normal</li></ul> |
| `combineXXXX` | <ul><li>Updated all combine chunks to be more consistent between phong and blinn-phong chunks. These chunks will undergo more changes in future and may even be removed completely.</li></ul> |
| `diffusePS` | <ul><li>Fix gamma handling relative to albedo detail</li></ul> |
| `diffuseDetailMapPS` | <ul><li>Gamma correct detail map before combining with base albedo</li></ul> |
| `emissivePS` | <ul><li>set `dEmissive` global instead of returning the value in order to bring it in line with the other frontend components</li></ul> |
| `lightmapSingleVert.js` | <ul><li>removed (unused)</li></ul> |
| `lightmapDirPS`, `lightmapSinglePS`| <ul><li>renamed the lightmap function to `getLightMap()` instead of `addLightMap()`</li><li>changed the implementation to write `dLightmap` and `dLightmapDir` global instead of updating `dDiffuseLight` and `dSpecularLight` directly</li><li>backend now handles combining lightmap in `lightmapAddPS` and `lightmapDirAddPS`</li></ul> |
| `normalMapFastPS` | <ul><li>removed</li></ul> |
| `normalMapPS` | <ul><li>added `MAPTEXTURE` #define like the other chunks</li><li>normalize final normal</li><li>when normal texture isn't defined, calculate normal from geometry normal instead</li></ul> |
| `normalDetailMapPS` | <ul><li>remove two (mostly) unnecessary calls to `normalise` - final normal is normalized instead</li></ul> |
| `clusteredLightPS` | <ul><li>remove dead code</li></ul> |
| `endPS` | <ul><li>combine emissive with `dEmissive` instead of a call to `getEmission()`</li></ul> |
| `lightmapAddPS`, `lightmapDirAddPS` | <ul><li>new chunks for adding the lightmap values passed in from the backend</li></ul> |
| `lightSpecularAnisoGGXPS` | <ul><li>added clear coat `#define`</li></ul> |
| `lightSpecularBlinnPS`, `lightSpecularPhongPS` | <ul><li>added clear coat `#define`, removed call to `antiAliasGlossiness()`</li></ul> |
| `normalVertexPS` | <ul><li>removed chunk, moved functionality to `normalMapPS` frontend chunk</li></ul> |
| `specularAaNonePS`, `specularAaToksvigPS`, `specularAaToksvigFastPS` | <ul><li>removed</li></ul> |
| `startPS` | <ul><li>removed global declarations, generate them on demand instead</li></ul> |


[1]: https://github.com/playcanvas/engine/issues/4250
[2]: https://github.com/playcanvas/engine/releases/tag/v1.55.0
