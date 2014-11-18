---
title: Particle System Component
template: page.tmpl.html
skip: true
---

The 'particlesystem' component specifies particle emitter in 3D space.

<img alt="Component Interface" src="/images/platform/component_audiolistener.png" />

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
    <tr><td>Pre Warm</td><td></td></tr>
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
    <tr><td>Color Map</td><td></td></tr>
    <tr><td>Normal Map</td><td></td></tr>
    <tr><td>Particle Mesh</td><td></td></tr>
    <tr><td>Local Velocity</td><td></td></tr>
    <tr><td>Velocity</td><td></td></tr>
    <tr><td>Rotation Speed</td><td></td></tr>
    <tr><td>Scale</td><td></td></tr>
    <tr><td>Color</td><td></td></tr>
    <tr><td>Opacity</td><td></td></tr>
</table>

## Scripting Interface

You can control an particlesystem component's properties using a [script component][script_component]. The particlesystem component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.ParticleSystemComponent.html
