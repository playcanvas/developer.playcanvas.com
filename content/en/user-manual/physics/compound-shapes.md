---
title: Compound Shapes
layout: usermanual-page.hbs
position: 4
---

Compound shapes are custom collision shapes created out of multiple primitive shapes ([full list of shapes here][primitive-shapes-list]). This allows you to have more complex collision shapes without using a custom mesh model.

The main advantage is that you are able to have dynamic rigidbody collisions between compound shapes (shown below) which is not possible with mesh collision types.

<iframe src="https://playcanv.as/e/p/KXZ5Lsda/" title="Compound Physic Shapes"></iframe>

[PlayCanvas project link][compound-shapes-project]

The shape of a compound physics object is defined by the children's collision shapes as shown below.

[![][compound-shapes-chair-setup-png]][compound-shapes-chair-setup-png]

![][compound-shapes-chair-gif]

The Chair entity (parent) has the [collision component][collision-component] with type set to 'Compound'.

The children entities will form the shape of the physics object with collision components and the type set to a primitive shape and positioned relative to the parent.

The parent is also the center of mass of the physics object and it is recommended to have it within the bounds of the shape of the object (usually the center). If not, the object may show odd behavior when forces and torque are applied such as rotating around an invisible pivot in the world.


[primitive-shapes-list]: /user-manual/physics/physics-basics/#rigid-bodies
[compound-shapes-project]: https://playcanvas.com/project/688146/overview/compound-physics-shapes
[compound-shapes-chair-gif]: /images/user-manual/physics/compound-shape-chair.gif
[compound-shapes-chair-setup-png]: /images/user-manual/physics/compound-shape-chair-setup.png
[collision-component]: https://developer.playcanvas.com/en/user-manual/packs/components/collision/
