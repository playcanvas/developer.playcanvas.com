---
title: Collision
template: page.tmpl.html
position: 5
---

The 'collision' component assigns a collision volume to the entity. The component interface dynamically displays different attributes based on the 'Type' attribute.

#### Box
![Component Interface][1]
#### Sphere
![Component Interface][2]
#### Capsule
![Component Interface][3]
#### Cylinder
![Component Interface][4]
#### Mesh
![Component Interface][5]

If the entity also has a rigidbody component, the collision component determines the shape of the rigid body. If no rigidbody component is present, the collision component is treated as a trigger volume. The trigger volume cannot affect the simulation of other rigid bodies in the scene. Instead, you can add a script component and attach a script which responds to trigger events. For example, if another entity that has a rigidbody component enters or exits the trigger, your script can be notified.

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If selected and if the component is a trigger volume (because it has no sibling rigidbody component), the trigger volume will be enabled. Likewise, if the component does have a sibling rigidbody component, the rigidbody will be enabled.</td></tr>
    <tr><td>Type</td><td>The type of collision primitive. Can be:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul></td></tr>
    <tr><td>Half Extents</td><td>Box only. The half-extents of the collision box. This is a 3-dimensional vector: local space half-width, half-height, and half-depth.</td></tr>
    <tr><td>Axis</td><td>Capsule only. Aligns the capsule with the local-space X, Y or Z axis of the entity.</td></tr>
    <tr><td>Height</td><td>Capsule only. The tip-to-tip height of the capsule.</td></tr>
    <tr><td>Radius</td><td>Sphere and Capsule only. The radius of the sphere or capsule body.</td></tr>
    <tr><td>Asset</td><td>Mesh only. The model asset that will be used as a source for the triangle-based collision mesh.</td></tr>
</table>

## Scripting Interface

You can control a collision component's properties using a [script component][6]. The collision component's scripting interface is [here][7].

[6]: /user-manual/packs/entities/components/script
[7]: /engine/api/stable/symbols/pc.CollisionComponent.html

[1]: /images/platform/component_collisionbox.png
[2]: /images/platform/component_collisionsphere.png
[3]: /images/platform/component_collisioncapsule.png
[4]: /images/platform/component_collisioncylinder.png
[5]: /images/platform/component_collisionmesh.png
