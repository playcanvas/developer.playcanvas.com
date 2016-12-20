---
title: Image Based Lighting
template: usermanual-page.tmpl.html
position: 0
---

To get best results with Physically Based Rendering in PlayCanvas you can use the technique called Image Based Lighting or IBL, it allows to use pre-rendered image data as source information for ambient and refliection light.

This technique relies on [CubeMap][3] - the environment map that is made of 6 texture (faces) forming a cube to have full surround texture coverage.

## HDR

Image data can be stored in LDR or HDR (High Dynamic Range) color space, which allows to store more than 0.0 to 1.0 (256 gradations) in single channel. HDR allows to store values above 1.0 (what is considered "white"), with combination of many factors of environment such as gamma correction, tonemapping and exposure  it allows to contain more light details and provide much better control over light quality and desirable results to artists.

HDR brings depth and dynamics to imagery, and IBL is no exception.

## Energy Conservation

The concept is derived from the fact that the diffuse light and the reflected light all come from the light hitting the material, the sum of diffuse and reflected light can not be more than the total light hitting the material. In practise this means that if a surface is highly reflective it will show very little diffuse color. And the opposite, if a material has a bright diffuse color, it can not reflect much.

In order to allow an artist to regulate glossiness of the surface with IBL, CubeMap should be sampled accordingly. To enable this, we have to Prefilter CubeMap - the process of generating lower resolution cubemaps that do respect energy conservation concept, so bright areas would dominate darker ones.

**Prefilter** button is available on CubeMap asset in the Inspector, it is mandatory to enable IBL on physical materials using a CubeMap.

## Authoring Environment Maps

Environment Maps comes in different projections: equirectangular, cubemap (face list), azimuthal and many others. WebGL and GPU works with face list - set of 6 textures representing sides of a cube - CubeMap. So environment map should be converted into 6 textures if it comes in any other projection.

In order to convert between projections you can use various tools, one of them is cross-platform open-source cubemap filtering tool: [cmftStudio][0].

CubeMaps can be CGI rendered or assembled from photography, and there are websites to download/buy HDR environment maps. One of good sources for experimenting can be [sIBL Archive][6], their evniromnent maps come in equirectangular projection and convertable by cmftStudio mentioned above.

## Rendering CubeMap

In order to render CubeMap you can use popular 3D modeling tools, or photography and 360 Imagery software. They should be rendered in linear gamma space and without color corrections that is described in [Lightmapping Gamma Correction section][1].

One of the plugins for 3D Studio Max such as [this][2] can be used to render VRay CubeMap Faces, ready to be uploaded into PlayCanvas Editor.

## Applying IBL

This can be done using two methods:
1. Use CubeMap as Skybox in Scene Settings.
2. Use CubeMap as environment map on the Material directly.

## Box Projection Mapping

This technique changes the projection of environment map which allows to specify box within the space so CubeMap corresponds to its bounds. The most common use is to simulate reflections on surfaces within room scale environment.

![Material CubeMap Box Projection][4]

Here is an example of the scene using CubeMap Box Projection, notice the reflection on the wooden floor of the windows and sattle reflection on the ceiling, as well as reflection of the room on the metal PlayCanvas logo on the wall on the right. This is a dynamic effect, and can provide very realistic reflections and control to artist of how surfaces reflect the room environment.

![Environment Box Projection Mapping][5]

[0]: https://github.com/dariomanesku/cmftStudio
[1]: /user-manual/graphics/lighting/lightmapping/#gamma-correction
[2]: http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity
[3]: /user-manual/assets/cubemaps/
[4]: /images/user-manual/graphics/physical-rendering/cubemap-box-projection.png
[5]: /images/user-manual/lighting/lightmaps/playcanvas-lightmapping-scene.jpg
[6]: http://www.hdrlabs.com/sibl/archive.html
