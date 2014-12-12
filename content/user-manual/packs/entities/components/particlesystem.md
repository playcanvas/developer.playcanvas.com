---
title: Particle System Component
template: page.tmpl.html
skip: true
---

The 'particlesystem' component specifies a particle emitter in 3D space.

<img alt="Component Interface" src="/images/platform/component_particlesystem.png" />

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If checked, the particle system will be added to the scene and rendered.</td></tr>
    <tr><td>Auto Play</td><td>If checked, the particle system will play immediately on creation. If this option is left unchecked, you will need to call the particle system component's play function from script.</td>
    <tr><td>Particle Count</td><td>The maximum number of particles managed by this particle system.</td></tr>
    <tr><td>Lifetime</td><td>The length of time in seconds between a particle's birth and its death.</td></tr>
    <tr><td>Emission Rate</td><td>The lower bound of the time range defining the interval between particle births. The time for the next particle emission will be chosen at random between 'Emission Rate' and 'Emission Rate 2'.</td></tr>
    <tr><td>Emission Rate 2</td><td>The upper bound of the time range defining the interval between particle births. The time for the next particle emission will be chosen at random between 'Emission Rate' and 'Emission Rate 2'.</td></tr>
    <tr><td>Start Angle</td><td>The lower bound of the initial particle rotation specified in degrees. For each particle, this angle is chosen at random between 'Start Angle' and 'Start Angle 2'.</td></tr>
    <tr><td>Start Angle 2</td><td>The upper bound of the initial particle rotation specified in degrees. For each particle, this angle is chosen at random between 'Start Angle' and 'Start Angle 2'.</td></tr>
    <tr><td>Loop</td><td>If checked, the particle system will emit indefinitely. Otherwise, it will emit the number of particles specified by the 'Particle Count' property and then stop.</td></tr>
    <tr><td>Pre Warm</td><td>If enabled, the particle system will be initialized as though it had already completed a full cycle. This option is only available for looping particle systems.</td></tr>
    <tr><td>Lighting</td><td>If checked, the particle will be lit by the directional and ambient light in the scene. In some circumstances, it may be advisable to set a normal map on the particle system in order to achieve more realistic lighting.</td></tr>
    <tr><td>Half-Lambert</td><td>Enabling Half Lambert lighting avoids particles looking too flat when lights appear to be shining towards the back sides of the particles. It is a completely non-physical lighting model but can give more pleasing visual results. This option is only available when Lighting is enabled.</td></tr>
    <tr><td>Color Intensity</td><td>Scales the color of particles to allow them to have arbitrary brightness.</td></tr>
    <tr><td>Depth Test</td><td>If checked, the particles will write depth information to the depth buffer. If unchecked, the depth buffer is left unchanged and particles will be guaranteed to overwrite one another in the order in which they are rendered.</td></tr>
    <tr><td>Depth Softening</td><td>This variable value determines how much particles fade out as they get closer to another surface. This avoids the situation where particles appear to cut into surfaces.</td></tr>
    <tr><td>Sorting Mode</td><td>Sorting mode gives you control over the order in which particles are rendered. The options are:
        <ul>
            <li>None: Particles are rendered in arbitrary order. When this option is selected, the particle system is simulated on the GPU (if the underlying hardware supports floating point textures) and it is recommended you use this setting to get the best performance.</li>
            <li>Camera Distance: Particles are sorted on the CPU and rendered in back to front order (in terms of camera z depth).</li>
            <li>Newer First: Particles are sorted on the CPU and rendered in age order, youngest first.</li>
            <li>Older First: Particles are sorted on the CPU and rendered in age order, oldest first.</li>
        </ul>
    </td></tr>
    <tr><td>Blending Mode</td><td>The blending mode determines how particles are composited when they are written to the frame buffer. Let's consider that Prgb is the RGB color of a particle's pixel, Pa is its alpha value, and Drgb is the RGB color already in the frame buffer. The blending options are:
        <ul>
            <li>Additive: Prgb + Drgb</li>
            <li>Alpha: Prgb x Pa + Drgb x (1 - Pa)</li>
            <li>Multiply: Prgb * Drgb</li>
        </ul>
    </td></tr>
    <tr><td>Stretch</td><td>A value in world units that controls the amount by which particles are stretched based on their velocity. Particles are stretched from their center towards their previous position.</td></tr>
    <tr><td>Align To Motion</td><td>Orient particle in their direction of motion.</td></tr>
    <tr><td>Spawn Bounds</td><td>The half extents of a local space bounding box within which particles are spawned at random positions.</td></tr>
    <tr><td>Wrap</td><td>Enables wrap bounds.</td></tr>
    <tr><td>Wrap Bounds</td><td>World space AABB volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side. You can use this to make environmental effects like rain by moving a wrapped emitter's owner entity.</td></tr>
    <tr><td>Color Map</td><td>The color map texture to apply to all particles in the system. If no texture asset is assigned, a default spot texture is used.</td></tr>
    <tr><td>Normal Map</td><td>The normal map texture to apply to all particles in the system. Applying a normal map can make billboard particles appear more consistent with the scenes lighting.</td></tr>
    <tr><td>Particle Mesh</td><td>A model asset. The first mesh found in the model is used to represent all particles rather than a flat billboard.</td></tr>
    <tr><td>Local Velocity</td><td>A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If two curves are specified in the curve editor, local velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Velocity</td><td>A curve defining how each particle's velocity with respect to the world coordinate system changes over time. If two curves are specified in the curve editor, velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Rotation Speed</td><td>A curve defining how each particle's angular velocity changes over time. If two curves are specified in the curve editor, the angular velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Scale</td><td>A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height. If two curves are specified in the curve editor, the scale will be a random lerp between both curves.</td></tr>
    <tr><td>Color</td><td>A curve defining how each particle's color changes over time.</td></tr>
    <tr><td>Opacity</td><td>A curve defining how each particle's opacity changes over time. If two curves are specified in the curve editor, the opacity will be a random lerp between both curves.</td></tr>
</table>

## Scripting Interface

You can control an particlesystem component's properties using a [script component][script_component]. The particlesystem component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.ParticleSystemComponent.html
