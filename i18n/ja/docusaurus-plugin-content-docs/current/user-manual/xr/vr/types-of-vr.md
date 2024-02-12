---
title: VR体験の種類
sidebar_position: 2
---

異なるスタイルのVR体験はそれぞれ特有の基準空間を持つ可能性があります。この基準空間は、仮想オブジェクトの位置や回転が現実世界とどのように関連づけられるかを定義します。詳細は[pc.XRSPACE_*][1]を参照してください。

## ルームスケールVR

Room Scale VR includes devices such as the Meta Quest, Apple Vision Pro, HTC Vive and many others. Room scale experiences are designed to allow a small or large amount of movement away from the origin position of the scene.

適切なリファレンススペース: `pc.XRSPACE_LOCALFLOOR`, `pc.XRSPACE_BOUNDEDFLOOR`, `pc.XRSPACE_UNBOUNDED`.

## 座った状態でのVR (Seated VR)

Seated VR or 3DoF (3 degrees of freedom) includes devices such as Google Cardboard, Samsung Gear VR and Oculus Rift. These experiences are based around the user remaining roughly stationary. In some cases there is no positional data available (e.g. Google Cardboard) and only the orientation of the headset is used.

適切なリファレンススペース: `pc.XRSPACE_LOCAL`, `pc.XRSPACE_LOCALFLOOR`.

[1]: https://api.playcanvas.com/modules/Engine.html#XRSPACE_VIEWER
