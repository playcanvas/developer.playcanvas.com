---
title: Optimizing WebXR applications
template: usermanual-page.tmpl.html
position: 3
---

## Introduction

A high and consistent framerate is critical for making and enjoyable XR experience. When creating VR/AR content it is more important than ever to test and optimize early in development and maintain the target framerate throughout development.

Rendering WebXR is expensive due to the fact that the scene must be rendered once for each view (eye). PlayCanvas engine contains many optimizations to ensure that VR rendering doesn't not duplicate too much effort, but stereo rendering is still more expensive that mono rendering. In addition, devices like the Oculus Rift and HTC Vive demand higher frame rates like, 75Hz or 90Hz, which means there is even less time to render a frame. Mobile VR, whilst it doesn't have the high frame rates, may have another issue which is the lack of native support for the distortion rendering means that this post-process stage is done in Javascript and WebGL adding additional overhead.

But, all is not lost. PlayCanvas includes a number of features specifically designed to let your application do more in less time.

### Runtime lightmap generation

Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modelling tool or you can use PlayCanvas's built in Runtime Lightmap Generation.

Read more about using [runtime lightmap generation][1].

### Cautious use of real time shadows

For similar reasons to dynamic lights, dynamic shadows also have a per-frame runtime cost. Point lights, in particular, have to render the scene 6 times to generate shadows. You should avoid having many lights casting dynamic shadows.

### Watch your fill rate and overdraw

Fill rate refers to the number of shader operations that are applied to each pixel on the screen. If you have expensive fragment shader calculations (e.g. lots of lights and complicated materials) and a high resolution (e.g. a mobile phone with a high device pixel ratio) then your application will spend too much time rendering the scene to maintain a high frame rate.

Overdraw refers to how many pixels are overwritten by drawing geometry that is obscured by other geometry closer to the camera. Too much overdraw shows that you are wasting GPU processing trying to draw pixels that are not visible.

Using an extension like [WebGL Insight][2] can help you visualize overdraw

### Garbage collection stalls

Web browsers feature automatic garbage collection of unused Javascript objects. The PlayCanvas engine is designed to minimize runtime allocations and you should try to do the same in your code. Pre-allocate vectors and other objects and re-use them so that there are not lots of objects created and discarded every frame.

### Profiling Tools

PlayCanvas comes with a built in profiler tool. In the Editor use the Launch Profiler button to run your application with profiling active. [Read more about the profiler][3]

### General optimization tips

[Many more optimization guidelines][4] are available.

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://chrome.google.com/webstore/detail/webgl-insight/djdcbmfacaaocoomokenoalbomllhnko
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/
