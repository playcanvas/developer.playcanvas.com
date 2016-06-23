---
title: Cardboard VR
template: tutorial-page.tmpl.html
---

<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="http://playcanv.as/e/p/ktssxBWc" ></iframe>

PlayCanvas makes it very easy to add support for Mobile VR demos like you would need to support Google Cardboard. We've created a [plugin library][1] that you can drop into your scene to enable VR support.

Here's how to add VR support

## Step One: Add HMD Input library

The PlayCanvas WebVR library includes a file called `input_hmd.js`. This adds support for getting input information from Head-mounted displays (HMDs). This is library code meaning that it doesn't need to be added to an entity, but should be loaded up front before the application starts. To do this we add it to the Script Priorities list. In the PlayCanvas menu select Script Priorities.

![Script Priorities][2]

## Step Two: Add the VR Camera script

The WebVR library also includes a file called `vr_camera.js`. This should be attached to an Entity that will behave as your camera. This Entity could already have a camera component attached (though that is not required). The VrCamera script will create a pair of cameras (one for each eye!) when VR mode is activated and disable the existing camera component.

![VR Camera][3]

## Step Three: That's it!

That's the minimum you need to do to get a VR camera up and running. If you launch your scene now on mobile and tap the screen the view will split into two and you can place your device into a Cardboard VR headset.

See the full source code for this tutorial in the [project][4].

[1]: http://github.com/playcanvas/webvr
[2]: /images/tutorials/beginner/cardboard-vr/script-priorities.jpg
[3]: /images/tutorials/beginner/cardboard-vr/script-component.jpg
[4]: https://playcanvas.com/project/389453/overview/tutorial-cardboard-vr
