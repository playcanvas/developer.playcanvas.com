---
title: Image Based Lighting
template: usermanual-page.tmpl.html
position: 0
---

To get best results with Physically based rendering in PlayCanvas you can use the technique called Image Based Lighting or IBL, It allows you to use pre-rendered image data as source information for ambient and reflection light.

This technique relies on [Cubemaps][3] - an environment map that is made of 6 textures (faces) forming a cube to have a fully surrounded texture coverage.

## HDR

Image data can be stored in regular (Low Dynamic Range or LDR) or High Dynamic Range (HDR) color space. In an LDR image colors are stored as a number between 0 and 1 for each channel (red, green and blue). HDR allow you to store values greater than 1 in single channel. When combined with other features such as gamma correction, tonemapping and exposure it means color values can contain more light detail and provide much better control over light quality and desirable results to artists.

HDR brings depth and dynamics to imagery and IBL is no exception.

## Energy Conservation

This concept is derived from the fact that the diffuse light and the reflected light all come from the light hitting the material so the sum of diffuse and reflected light can not be more than the total light hitting the material. In practise this means that if a surface is highly reflective it will show very little diffuse color. And the opposite, if a material has a bright diffuse color, it can not reflect much.

When using IBL lighting information comes from the Cubemap, so to ensure energy is conserved the cubemaps must be sampled accordingly. To enable this, we have to Prefilter the Cubemap. Prefiltering generates lower resolution maps which respect energy conservation, so bright areas will dominate darker ones.

The **Prefilter** button is available on Cubemap asset in the Inspector, It is mandatory to prefilter in order to correctly use IBL on physical materials using a Cubemap.

## Authoring Environment Maps

Environment maps comes in different projections: equirectangular, Cubemap (face list), azimuthal and many others. WebGL and GPUs work with a face list - a set of 6 textures representing the sides of a cube - a Cubemap. So environment map should be converted into 6 textures if it comes in any other projection.

In order to convert between projections you can use various tools, one of them is the cross-platform open-source Cubemap filtering tool: [cmftStudio][0].

Cubemaps can be CGI rendered or assembled from photography and there are websites to download/buy HDR environment maps. One good source for experimenting can be [sIBL Archive][6], their environment maps come in equirectangular projection and are convertible by using cmftStudio mentioned above. A number of the Cubemaps from sIBL Archive are available to add to you project from the [Asset Library][9].

One solution to creating Cubemaps is render them using a 3D modelling tool. They should be rendered in linear gamma space and without color corrections as described in the [Lightmapping Gamma Correction section][1].

One of the plugins for 3ds Max such as [this][2] can be used to render VRay Cubemap faces ready to be uploaded into the PlayCanvas Editor.

## Applying IBL

This can be done using two methods:

1. Use a Cubemap as the Skybox in Scene Settings.
2. Use a Cubemap as the environment map on the Material directly.

## Box Projection Mapping

This technique changes the projection of the environment map which allows you to specify the box within a space so Cubemap corresponds to its bounds. The most common use is to simulate reflections on surfaces within room scale environment.

![Material Cubemap Box Projection][4]

## Example

Here is an [example][7] and [project][8] of the scene using a Cubemap and Box Projection, notice the reflection on the wooden floor of the windows and subtle reflection on the ceiling. As well as the reflection of the room on the metal PlayCanvas logo on the wall on the right. This is a dynamic effect, and can provide very realistic reflections and control to artist of how surfaces reflect the room environment.

[![Environment Box Projection Mapping][5]][7]
*The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)*

[0]: https://github.com/dariomanesku/cmftStudio
[1]: /user-manual/graphics/lighting/lightmapping/#gamma-correction
[2]: http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity
[3]: /user-manual/assets/cubemaps/
[4]: /images/user-manual/graphics/physical-rendering/cubemap-box-projection.png
[5]: /images/user-manual/lighting/lightmaps/playcanvas-lightmapping-scene.jpg
[6]: http://www.hdrlabs.com/sibl/archive.html
[7]: https://playcanv.as/p/zdkARz26/
[8]: https://playcanvas.com/project/446587/overview/archviz-example
[9]: https://store.playcanvas.com
