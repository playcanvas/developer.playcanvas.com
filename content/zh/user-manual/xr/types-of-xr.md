---
title: Types of XR experiences
template: usermanual-page.tmpl.html
position: 2
---

Different styles of XR experience might have different reference spaces, in which position and rotation of virtual objects relate to the real world. Refer to [pc.XRSPACE_*][1] for more information.

## 坐式VR

Seated VR includes devices such as Google Cardboard, Samsung Gear VR and Oculus Rift. These experiences are based around the user remaining roughly stationary. In some cases there is no positional data available (e.g. Google Cardboard) and only the orientation of the headset is used.

Suitable reference spaces: `pc.XRSPACE_LOCAL`, `pc.XRSPACE_LOCALFLOOR`.

## 房间规模 VR

Room Scale VR includes devices such as the Oculus Quest, HTC Vive and many others. Room scale experiences are designed to allow a small or large amount of movement away from the origin position of the scene.

Suitable reference spaces: `pc.XRSPACE_LOCALFLOOR`, `pc.XRSPACE_BOUNDEDFLOOR`, `pc.XRSPACE_UNBOUNDED`.

## Augmented Reality

Augmented Reality allows blending the real world with virtual imagery, either by composing a rendered buffer over the camera feed or with special projection of a rendered buffer on see-through glasses. Usually it is provided with spatial tracking relative to the real world environment.

Suitable reference space: `pc.XRSPACE_VIEWER`.

[1]: /api/pc.html#XRSPACE_VIEWER

