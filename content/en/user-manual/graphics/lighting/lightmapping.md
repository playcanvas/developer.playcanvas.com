---
title: Lightmapping
template: usermanual-page.tmpl.html
position: 3
---

[![PlayCanvas Lightmapping][1]][13]
*The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)*

Here is the link to [final scene][13] and [project][14] that uses these techniques to achieve results in image above: External HDR Lightmaps (described in this page blow), [Ambient Occlusion][12] and HDR CubeMap applied using Box Projection using [Image Based Lighting][11] technique to achieve realistic reflections.

## Overview

Lightmap generation is the process of pre-calculating lighting information for a static scene and storing it in textures which are then applied on materials. This is an efficient way of lighting a scene if much of the light sources and geometry are static or environmental. And produces realistic results.

PlayCanvas offers two ways to use lightmaps in your scene: **External lightmap generation** - which is discussed in this page below. And [**Runtime Lightmapping**][0] that can be generated automatically by the Engine on loading or later while application is running.

## External Lightmap Generation

Many 3D content tools have ways to generate lightmap textures. For example, 3D's Max, Maya, Blender and other tools all have ways to bake lightmaps into textures. The advantages of using an offline tool for lightmap generation is that you can use very sophisticated lighting calculations like Global Illumination for bounce lighting, soft shadows, ambient occlusion, etc. The major disadvantage is that you have to have a complete representation of your scene inside the 3D tool. So if your PlayCanvas scene is made up of lots of instances positioned in the Editor, you need to re-create this inside your lightmapping tool.

Once you have created lightmaps using an external tool you simply upload them as regular texture assets and they can be added to your materials using the lightmap slot in the standard Physical Material.

**Read further to get more details and best practices on rendering lightmaps.**

## Tools

Various 3D tools can be used to render lightmaps. In this page we will use 3D Studio Max as example, but same functionality is achievable by any other similar modeling tools.

## Gamma Correction

When rendering Lightmaps or CubeMaps they should be rendered in Linear Space, to ensure color curves are not affected by gamma correction twice. PlayCanvas Engine will apply gamma correction during real-time rendering.

In 3D's Max this option (Enable Gamma/LUT Correction) should be disabled and can be found in Preference Settings (Customize > Preferences):

![3D's Max > Preferences > Linear Space][2]

Then make sure Color Mapping is updated. It can be found in Render Settings (F10, or from Render to Texture window). Output should not be clamped, and not post-processed (Mode option), Linear Multiply should be used for linear color space.
Here is screenshot of what options should be set to what values, hit on "Default" button to expand settings to "Expert":

![3D's Max > Render Settings][3]

## UV Mapping

In order to apply a lightmap texture on geometry, we need to unwrap it first. Here are some practices that will help you to get good lightmap friendly UV's:

### **Simple Geometry**
Less geometry area - is better. Try to minimize area of triangles and eliminate not visible triangles. Too large geometry area will reduce lightmap detail, require large textures and sometimes multiple assets.

![Lighmapping Tips: Simple Geometry][4]

### **Consistent Texel Size**
Keep texels in UV not stretched and consistent in size with other texels within same geometry. This is to ensure that level of detail in lightmap texture is consistent within the scene. Some variations of texel size could be applied when geometry will be seen from up close of far distance, naturally as artistic and optimizations decision.

![Lighmapping Tips: UV Consistent Texel Size][5]

### **Non-overlapping UV**
Triangles in UV should not overlap to ensure each pixel have unique position in 3D space on geometry so it can store own illumination information appropriately. UV's space for lightmaps is clamped, meaning that UV shall be contained within its 0.0 to 1.0 space and not tile outside.

![Lighmapping Tips: Non-overlapping UV][6]

## Other Tips

To get good lightmap results, we need to ensure that rendering is based only on data that is relevant to light propagation and not point of view of camera during rendering.

1. **Disable Normal Map** on materials - micro surface details are too tiny to be relevant in lightmap textures.
2. Set **Reflection to 0** and **Disable Gloss Maps** on materials - reflection can lead to caustics and complications for renderers, leading to visual artifacts. Generally lightmaps should contain only diffuse lighting, and reflectivity implemented using some runtime technique.
4. Very **dark materials won't produce good results** as they do not reflect light much, so will not assist Global Illumination.
5. In Render To Texture window (see bellow) set **Padding** to larger value.
6. **Light can leak** from behind the geometry, add blocking geometry to prevent light.

![Lighmapping Light Leaking][8]

## Render To Texture

To get illumination data out of modeling tool, we want to render light into Texture. We can specify resolution and format for it.

In 3D's Max this is done using Render To Texture window. Where Padding need to be set to larger value; selected 2nd UV Channel; and Output profile depending on your renderer, in screenshot bellow `VRayRawTotalLightingMap` is used.

![Render To Texture: PlayCanvas Lightmapping][7]

## Noise

Depending on quality and time of rendering, in different situations illumination data on texture might be not perfect and suffer from noise. This is easily solvable by applying some blur technique that will not blur edges in textures, but will smoothen plain sections.
In Photoshop this is done using Surface Blur filter:

![Lightmapping: Photoshop > Surface Blur][9]

## Upload to Editor

At this stage you have your geometry with second UV channel (UV1) and HDR lightmap textures, and it is time to upload them in your PlayCanvas scene and setup the materials. This is done by simply drag'n'drop or upload button in assets panel. After you've uploaded your geometry it will auto-generate materials. For each material that lightmap is rendered for, you need to set lightmap texture. Simply select all required materials and drag'n'drop or pick lightmap texture for Lightmap slot.

![PlayCanvas Editor: Material Lightmap Texture Slot][10]

## Final marks

Gamma Correction, Tonemapping and Exposure - are good settings you want to play with to get desirable look and color for your scene.

You can [explore example][13] that uses techniques described above and it's [project][14].

[0]: /user-manual/graphics/lighting/runtime-lightmaps/
[1]: /images/user-manual/lighting/lightmaps/playcanvas-lightmapping-scene.jpg
[2]: /images/user-manual/lighting/lightmaps/3ds-max-preferences.png
[3]: /images/user-manual/lighting/lightmaps/3ds-max-render-settings-color-mapping.png
[4]: /images/user-manual/lighting/lightmaps/uv-geometry.jpg
[5]: /images/user-manual/lighting/lightmaps/uv-consistency.jpg
[6]: /images/user-manual/lighting/lightmaps/uv-overlapping.jpg
[7]: /images/user-manual/lighting/lightmaps/3ds-max-render-to-texture-window.png
[8]: /images/user-manual/lighting/lightmaps/lightmapping-light-leak.jpg
[9]: /images/user-manual/lighting/lightmaps/lightmapping-surface-blur.jpg
[10]: /images/user-manual/lighting/lightmaps/lightmapping-material-slot.png
[11]: /user-manual/graphics/physical-rendering/image-based-lighting/
[12]: /user-manual/graphics/lighting/ambient-occlusion/
[13]: https://playcanv.as/p/zdkARz26/
[14]: https://playcanvas.com/project/446587/overview/archviz-example
