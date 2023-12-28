---
title: VR体験の種類
layout: usermanual-page.hbs
position: 2
---

異なるスタイルのVR体験はそれぞれ特有の基準空間を持つ可能性があります。この基準空間は、仮想オブジェクトの位置や回転が現実世界とどのように関連づけられるかを定義します。詳細は[pc.XRSPACE_*][1]を参照してください。

## 座った状態でのVR (Seated VR)

座った状態でのVRは、Google Cardboard、Samsung Gear VR、Oculus Riftなどのデバイスが含まれます。これらの体験は、ユーザーが大体静止した状態で行うことを前提としています。場合によっては、位置情報が利用できない（例えばGoogle Cardboard）ケースもあり、ヘッドセットの向きのみが使用されます。


適切なリファレンススペース: `pc.XRSPACE_LOCAL`, `pc.XRSPACE_LOCALFLOOR`.

## ルームスケールVR

ルームスケールVRには、Oculus Quest、HTC Viveなどのデバイスが含まれます。ルームスケールの体験は、シーンの原点から少し、あるいは大幅に動くことを許容するように設計されています。

適切なリファレンススペース: `pc.XRSPACE_LOCALFLOOR`, `pc.XRSPACE_BOUNDEDFLOOR`, `pc.XRSPACE_UNBOUNDED`.

[1]: /api/pc.html#XRSPACE_VIEWER
