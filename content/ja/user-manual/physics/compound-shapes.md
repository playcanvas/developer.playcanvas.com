---
title: Compound
layout: usermanual-page.hbs
position: 4
---

複合形状 (Compound) とは、複数のプリミティブ形状（[形状のリストはこちら][primitive-shapes-list]）から作られたカスタムコリジョン形状です。これにより、カスタムメッシュモデルを使用せずに、より複雑なコリジョン形状を作成できます。

最大の利点は、メッシュコリジョン形状では不可能な動的なRigidBodyのコリジョンをコンパウンド間で行えることです(下記のように表示)。

<iframe loading="lazy" src="https://playcanv.as/e/p/KXZ5Lsda/" title="Compound Physic Shapes"></iframe>

[PlayCanvas プロジェクトリンク][compound-shapes-project]

複合形状オブジェクトの形状は、子オブジェクトのコリジョン形状によって定義されます。

[![コンパウンドの設定][compound-shapes-chair-setup-png]][compound-shapes-chair-setup-png]

![コンパウンドの椅子][compound-shapes-chair-gif]

親のエンティティであるChairはタイプが "Compound" の [Collisionコンポーネント][collision-component] を持ちます。

Collisionコンポーネントが子エンティティで、プリミティブ形状のタイプが設定されている場合、その形状は物理オブジェクトの形状を形成し、親に対する相対位置に配置されます。


親も物理オブジェクトの重心であり、通常はオブジェクトの形状の範囲内（通常は中心）にあることをお勧めします。そうでない場合、力やトルクが加わったときに、オブジェクトが不思議な挙動を示す可能性があります。



[primitive-shapes-list]: /user-manual/physics/physics-basics/#rigid-bodies
[compound-shapes-project]: https://playcanvas.com/project/688146/overview/compound-physics-shapes
[compound-shapes-chair-gif]: /images/user-manual/physics/compound-shape-chair.gif
[compound-shapes-chair-setup-png]: /images/user-manual/physics/compound-shape-chair-setup.png
[collision-component]: /user-manual/packs/components/collision/
