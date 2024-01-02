---
title: Types of VR experiences
sidebar_position: 2
---

Different styles of VR experience might have different reference spaces, in which position and rotation of virtual objects relate to the real world. Refer to [pc.XRSPACE_*][1] for more information.

## Seated VR

Seated VR includes devices such as Google Cardboard, Samsung Gear VR and Oculus Rift. These experiences are based around the user remaining roughly stationary. In some cases there is no positional data available (e.g. Google Cardboard) and only the orientation of the headset is used.

Suitable reference spaces: `pc.XRSPACE_LOCAL`, `pc.XRSPACE_LOCALFLOOR`.

## Room Scale VR

Room Scale VR includes devices such as the Oculus Quest, HTC Vive and many others. Room scale experiences are designed to allow a small or large amount of movement away from the origin position of the scene.

Suitable reference spaces: `pc.XRSPACE_LOCALFLOOR`, `pc.XRSPACE_BOUNDEDFLOOR`, `pc.XRSPACE_UNBOUNDED`.

[1]: /api/pc.html#XRSPACE_VIEWER
