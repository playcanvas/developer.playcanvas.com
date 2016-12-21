---
title: Ambient Occlusion
template: usermanual-page.tmpl.html
position: 4
---

Ambient Occlusion is a technique to approximate how much light gets onto the surface based on its occlusion by the environment.

![Ambient Occlusion comparison: without/with][4]
*Left: without AO; Right: with Global AO*

There are generally two distinct AO representations:

**Local AO** - this texture matches diffuse and other micro-surface maps, and highlights small relief details within the surface. It usually uses the same UV channel (UV0) as the diffuse, gloss and/or normal maps.

**Global AO** - this texture respects geometry and surrounding environment and highlights largely affected details. For example corners in a room would get less light than a wall in the middle of the room. It usually uses the same UV channel (UV1) as lightmaps.

## Rendering Global AO

Rendering AO can be done using popular 3D modelling and archviz tools. It is practically same as rendering lightmaps which is described in the [Lightmapping Section][0] with few small differences. A special material is applied on all geometry that will paint it so it looks like AO and some different settings during rendering into texture.

In 3ds Max with VRay it is done by creating a material of **VRayDirt** type and **Ambient Occlusion** mode, where **radius** can be changed to get the desired result.

![3ds Max: Ambient Occlusion VRay Material][1]

This material should be applied on all static geometry that have to be in ambient occlusion map. In 3ds Max this can be done either by manually applying it on individual objects or by using VRay Render Settings using the **Override mtl** property. This way individual materials are preserved and it makes life easier.

![3ds Max VRay Render Settings: Override mtl][2]

Then we need to get this data out into the texture. In 3ds Max this is done by using [Render To Texture][3], in the same way as during Lightmapping rendering except the **output** option should be using **VRayCompleteMap**.

The AO Texture does not need to store very detailed information and visually does not suffer from texture compression artifacts so JPEG compression is an economical and suitable format for it.

## Upload to Editor

Simply upload texture to the Editor and apply it on Ambient Occlusion slot on materials.

![Editor Ambient Occlusion Map][5]

## Example

You can [explore example][6] that uses global Ambient Occlusion described above and it's [project][7].

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
