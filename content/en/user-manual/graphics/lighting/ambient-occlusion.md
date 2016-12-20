---
title: Ambient Occlusion
template: usermanual-page.tmpl.html
position: 4
---

Ambient Occlusion is a technique to approximate how much light gets onto the surface based on its oclussion by the environment.

There are generally two distinct AO representations:

**Local AO** - this texture matches diffuse and other micro-surface maps, and highlights small relief details within the surface.

**Global AO** - this texture respects geometry and surrounding environment and highlights largely affected details. For example corners in a room would get less light than wall in the middle of the room.

## Rendering Global AO

Rendering AO can be done using popular 3D modeling and archvis tools. It is practically same as rendering Lightmap that is described in [Lightmapping Section][0].

With one difference where special material is applied on all geometry that represents lightmapping

TODO: finish this section

[0]: /user-manual/graphics/lighting/lightmapping/
