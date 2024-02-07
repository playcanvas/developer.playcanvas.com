---
title: Optimizing WebXR applications
sidebar_position: 6
---

## Introduction

A high and consistent framerate is critical for making an enjoyable XR experience. When creating VR/AR content, it is more important than ever to test and optimize early and maintain the target framerate throughout development.

For AR experiences, framerates must be managed carefully as world tracking sometimes incurs significant performance costs. This is in addition to the typically performance-constrained mobile hardware most users have access to.

For VR experiences, rendering is especially expensive due to the fact that the scene must be rendered once for each view (eye). While PlayCanvas is highly optimized to ensure VR rendering doesn't fully duplicate effort, stereo rendering remains more expensive than mono rendering.

For pass-through experiences, AR and VR requirements are combined, and the underlying system has to perform a lot of computation for positioning, image processing, and overlaying rendered images, in addition to other APIs that can be used: depth sensing, color access, image tracking, and more. And duplicate rendering for each eye.

In addition, modern HMD devices demand high frame rates, like 75Hz or 90Hz and higher, further increasing the need for highly efficient rendering.

PlayCanvas, however, includes several features specifically designed to let your application do more in less time.

### Draw Calls and Batching

Draw Calls are operations when the engine provides necessary information to the GPU for rendering an object. The more objects you have in the scene, the more draw calls it will require to render each frame. To reduce the number of draw calls it is recommended to minimize the number of objects in the frame by culling, [static batching][5] and [instancing][6].

### Runtime lightmap generation

Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modeling tool or you can use PlayCanvas's built-in Runtime Lightmap Generation.

Read more about using [runtime lightmap generation][1].

### Cautious use of real-time shadows

For similar reasons to dynamic lights, dynamic shadows also have a per-frame runtime cost. Omni lights, in particular, have to render the scene 6 times to generate shadow maps. You should avoid having many lights casting dynamic shadows.

### Watch your fill rate and overdraw

The fill rate refers to the number of shader operations that are applied to each pixel on the screen. If you have expensive fragment shader calculations (e.g. lots of lights and complicated materials) and a high resolution (e.g. a mobile phone with a high device pixel ratio) then your application will spend too much time rendering the scene to maintain a high frame rate.

Overdraw refers to how many pixels are overwritten by drawing geometry that is obscured by other geometry closer to the camera. Too much overdraw shows that you are wasting GPU processing trying to draw pixels that are not visible. This is usually caused by transparency on materials and non-opaque blending.

Using an extension like [WebGL Insight][2] can help you visualize overdraw

### Garbage collection stalls

Web browsers feature automatic garbage collection of unused Javascript objects. The PlayCanvas engine is designed to minimize runtime allocations and you should try to do the same in your code. Pre-allocate vectors and other objects and re-use them so that there are not lots of objects created and discarded every frame.

### Profiling Tools

PlayCanvas comes with a built-in profiler tool. In the Editor use the Launch Profiler button to run your application with profiling active. [Read more about the profiler][3]

### General optimization tips

[Many more optimization guidelines][4] are available.

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://github.com/3Dparallax/insight
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/
[5]: /user-manual/graphics/advanced-rendering/batching/
[6]: /user-manual/graphics/advanced-rendering/hardware-instancing/
