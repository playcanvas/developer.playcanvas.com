---
title: Collision Component
template: page.tmpl.html
skip: true
---

The 'collision' component assigns a collision volume to the entity. The component interface dynamically displays different attributes based on the 'Type' attribute.

#### Box
![Component Interface](/images/platform/component_collisionbox.png)
#### Sphere
![Component Interface](/images/platform/component_collisionsphere.png)
#### Capsule
![Component Interface](/images/platform/component_collisioncapsule.png)
#### Mesh
![Component Interface](/images/platform/component_collisionmesh.png)

If the entity also has a rigidbody component, the collision component determines the shape of the rigid body. If no rigidbody component is present, the collision component is treated as a trigger volume. The trigger volume cannot affect the simulation of other rigid bodies in the scene. Instead, you can add a script component and attach a script which responds to trigger events. For example, if another entity that has a rigidbody component enters or exits the trigger, your script can be notified.

## Properties

<table class="table">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of collision primitive. Can be:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul></td></tr>
    <tr><td>Half Extents</td><td>Box only. The half-extents of the collision box. This is a 3-dimensional vector: local space half-width, half-height, and half-depth.</td></tr>
    <tr><td>Axis</td><td>Capsule only. Aligns the capsule with the local-space X, Y or Z axis of the entity.</td></tr>
    <tr><td>Height</td><td>Capsule only. The tip-to-tip height of the capsule.</td></tr>
    <tr><td>Radius</td><td>Sphere and Capsule only. The radius of the sphere or capsule body.</td></tr>
    <tr><td>Asset</td><td>Mesh only. The model asset that will be used as a source for the triangle-based collision mesh.</td></tr>
</table>

## Scripting Interface

You can control a collision component's properties using a [script component](/tools/designer/components/script.html). The collision component's scripting interface is [here](/engine/api/stable/symbols/pc.fw.CollisionComponent.html).
