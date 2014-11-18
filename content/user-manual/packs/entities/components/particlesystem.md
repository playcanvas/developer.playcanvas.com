---
title: Particle System Component
template: page.tmpl.html
skip: true
---

The 'particlesystem' component specifies particle emitter in 3D space.

<img alt="Component Interface" src="/images/platform/component_particlesystem.png" />

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If checked, the particle system will be added to the scene and rendered.</td></tr>
    <tr><td>Particle Count</td><td></td></tr>
    <tr><td>Lifetime</td><td></td></tr>
    <tr><td>Emission Rate</td><td></td></tr>
    <tr><td>Emission Rate 2</td><td></td></tr>
    <tr><td>Start Angle</td><td></td></tr>
    <tr><td>Start Angle 2</td><td></td></tr>
    <tr><td>One Shot</td><td></td></tr>
    <tr><td>Pre Warm</td><td>If enabled, the particle system will be initialized as though it had already completed a full cycle (only works if One Shot is unchecked).</td></tr>
    <tr><td>Lighting</td><td></td></tr>
    <tr><td>Half-Lambert</td><td></td></tr>
    <tr><td>Color Intensity</td><td></td></tr>
    <tr><td>Depth Test</td><td></td></tr>
    <tr><td>Depth Softening</td><td></td></tr>
    <tr><td>Sorting Mode</td><td></td></tr>
    <tr><td>Blending Mode</td><td></td></tr>
    <tr><td>Stretch</td><td></td></tr>
    <tr><td>Spawn Bounds</td><td></td></tr>
    <tr><td>Wrap</td><td></td></tr>
    <tr><td>Wrap Bounds</td><td></td></tr>
    <tr><td>Color Map</td><td>The color map texture to apply to all particles in the system. If no texture asset is assigned, a default spot texture is used.</td></tr>
    <tr><td>Normal Map</td><td>The normal map texture to apply to all particles in the system. Applying a normal map can make billboard particles appear more consistent with the scenes lighting.</td></tr>
    <tr><td>Particle Mesh</td><td>A model asset. The first mesh found in the model is used to represent all particles rather than a flat billboard.</td></tr>
    <tr><td>Local Velocity</td><td>A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If two curves are specified in the curve editor, local velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Velocity</td><td>A curve defining how each particle's velocity with respect to the world coordinate system changes over time. If two curves are specified in the curve editor, velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Rotation Speed</td><td>A curve defining how each particle's angular velocity changes over time. If two curves are specified in the curve editor, the angular velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Scale</td><td>A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height. If two curves are specified in the curve editor, the scale will be a random lerp between both curves.</td></tr>
    <tr><td>Color</td><td>A curve defining how each particle's color changes over time. If two curves are specified in the curve editor, the color will be a random lerp between both curves. Note that this color is modulated with the color texture if one is assigned.</td></tr>
    <tr><td>Opacity</td><td>A curve defining how each particle's opacity changes over time. If two curves are specified in the curve editor, the opacity will be a random lerp between both curves.</td></tr>
</table>

## Scripting Interface

You can control an particlesystem component's properties using a [script component][script_component]. The particlesystem component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.ParticleSystemComponent.html
