---
title: VR
template: usermanual-page.tmpl.html
position: 10
---

![VR View][3]

PlayCanvas lets you create Virtual Reality (VR) applications for a variety of devices based on the new WebVR API. WebVR is an experimental new browser API that provides access to virtual reality headsets.

## Platforms

On mobile PlayCanvas VR is currently on Android and iOS devices using Cardboard-style VR headsets and it is supported on the Samsung Gear VR.

On desktop PlayCanvas VR is currently supported on the Oculus Rift and HTC Vive headsets while using special builds of Chrome and Firefox. Learn more about getting WebVR support in browsers [here][1].

<div class="alert alert-info" style="text-align:left">
WebVR is an experimental browser API and is not fully supported in all browsers. For mobile browsers we provided support by using a WebVR polyfill, a library that attempts to simulate the native browser experience although with less performance than native. Native support for mobile browsers should be available by the end of 2016.

For desktop, there is no polyfill, but experimental builds of browsers allow native support for Oculus Rift and HTC Vive. See [http://webvr.info/][1] for more details.
</div>

## Getting started with WebVR

By default PlayCanvas doesn't initialize the VrManager and does not load the additional WebVR polyfill library for optimization reasons. You can enable WebVR support in your project in the Render Settings of your project, or in the New Project dialog.

![Render Settings][2]


[1]: http://webvr.info/
[2]: /images/user-manual/vr/render-settings.jpg
[3]: /images/user-manual/vr/vr-view.png
