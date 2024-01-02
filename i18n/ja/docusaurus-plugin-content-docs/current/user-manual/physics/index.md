---
title: 物理演算
layout: usermanual-page.hbs
position: 16
---

これまで遊んできたビデオゲームの多くには、何らかのかたちで物理が使われているかと思います。プレイヤーは、オブジェクトが重力の影響を受けて落下すると予想しています。オブジェクト同士、お互いをすり抜けるのではなくぶつかり合い、ぶつかったときには衝突音がでることなどが期待されます。

物理エンジンは、自然界の常識を人工的なゲームの世界で再現しようとしています。オブジェクトを現実にあるべき姿で動かせるように試みています。

![Physics Constraints][1]

PlayCanvasは非常に強力な物理エンジンを提供しており、様々なエフェクトを実現するために使用することができます。このセクションでは、RigidBody、衝突、力、インパルス、レイキャストなどの概念を紹介します。

[1]: /images/user-manual/physics/physics-constraints.gif