---
title: Rigid Body
template: usermanual-page.tmpl.html
position: 8
---

The Rigid Body component enables an entity to participate in the scene's physics simulation. This allows the movement of an entity to be simulated realistically. The component interface dynamically displays different attributes based on the 'Type' attribute.

The Rigid Body component can be enabled or disabled using the toggle in the top right of the component panel. If enabled and if the component has a sibling collision component, the rigid body will participate in the physics simulation.

#### Static
![Rigid Body component (Static)][1]
#### Dynamic (and Kinematic)
![Rigid Body component (Dynamic)][2]
#### Kinematic
![Rigid Body component (Kinematic)][3]

Note that you must add a [collision component][4] to the same entity in order to define the shape of the rigid body. Otherwise, the rigidbody component has no effect and will not participate in the physics simulation.

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of the body:<br><ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul></td></tr>
    <tr><td>Mass</td><td>The mass of the body. If world units in your scene are meters, the unit for mass is kilograms.</td></tr>
    <tr><td>Linear Damping</td><td>Specifies the proportion of linear velocity that is lost by the body every second.</td></tr>
    <tr><td>Angular Damping</td><td>Specifies the proportion of angular velocity that is lost by the body every second.</td></tr>
    <tr><td>Linear Factor</td><td>Multiplier for a body's linear movement in each world axis. If set to 0 for any axis no movement will occur in this axis - useful for the creation of 2D games or 1D/2D movement.</td></tr>
    <tr><td>Angular Factor</td><td>Multiplier for a body's angular (rotational) movement about each world axis. If set to 0 for any axis, no rotation will occur around this axis.</td></tr>
    <tr><td>Friction</td><td>Controls how quickly a body loses velocity when in contact with other bodies.</td></tr>
    <tr><td>Restitution</td><td>A measure of the bounciness of a body between 0 and 1. Warning: setting to 1 means a moving body will never come to a stop (unless  colliding with other bodies with restitutions below 1, or unless a stop is scripted).</td></tr>
</table>

## スクリプティングインターフェイス

You can control a Rigid Body component's properties using a [script component][5]. The Rigid Body component's scripting interface is [here][6].

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /engine/api/stable/symbols/pc.RigidBodyComponent.html

