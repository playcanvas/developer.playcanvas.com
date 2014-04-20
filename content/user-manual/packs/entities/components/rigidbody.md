---
title: Rigid Body Component
template: page.tmpl.html
skip: true
---

The 'rigidbody' component enables an entity to participate in the scene's physics simulation. This allows the movement of an entity to be simulated realistically.

![Component Interface](/images/platform/component_rigidbody.png)

Note that you must add a [collision component](/tools/designer/components/collision.html) in order to define the shape of the rigid body. Otherwise, the rigidbody component has no effect and will not participate in the physics simulation.

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of the body:<br><ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul></td></tr>
    <tr><td>Mass</td><td>The mass of the body. If world units in your scene are meters, units for mass is kilograms.</td></tr>
    <tr><td>Linear Damping</td><td>Specifies the proportion of linear velocity is that lost by the body every second.</td></tr>
    <tr><td>Angular Damping</td><td>Specifies the proportion of angular velocity is that lost by the body every second.</td></tr>
    <tr><td>Linear Factor</td><td>Multiplier for a body's linear movement in each world axis.</td></tr>
    <tr><td>Angular Factor</td><td>Multiplier for a body's angular movement in each world axis.</td></tr>
    <tr><td>Friction</td><td>Controls how a body loses velocity when in contact with other bodies.</td></tr>
    <tr><td>Restitution</td><td>A measure of the bounciness of a body between 0 and 1.</td></tr>
</table>

## Scripting Interface

You can control a rigidbody component's properties using a [script component][script_component]. The rigidbody component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.RigidBodyComponent.html
