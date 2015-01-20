---
title: Audio Source
template: page.tmpl.html
position: 3
---

The 'audiosource' component specifies the listener's position in 3D space. All 3D audio playback will be relative to this position.

![Component Interface][3]

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If checked, the component will play assigned audio assets.</td></tr>
    <tr><td>Assets</td><td>The audio assets that can be played from this audio source. Multiple audio assets can be specified by the picker control.</td></tr>
    <tr><td>Volume</td><td>The volume of the audio assets played back by the component.</td></tr>
    <tr><td>Pitch</td><td>The pitch to playback the audio at. A value of 1 means the audio is played back at the original pitch.</td></tr>
    <tr><td>Loop</td><td>If checked, the component will loop played audio assets continuously. Otherwise, audio assets are played once to completion.</td></tr>
    <tr><td>Activate</td><td>If checked, the first audio asset specified by the Assets property will be played on load. Otherwise, audio assets will need to be played using script.</td></tr>
    <tr><td>3d</td><td>If checked, the component will play back audio assets as if played from the location of the entity in 3D space.</td></tr>
    <tr><td>Min Distance</td><td>The distance at which the volume of playback begins to fall from its maximum.</td></tr>
    <tr><td>Max Distance</td><td>The distance at which the volume of playback falls to zero.</td></tr>
    <tr><td>Roll-off Factor</td><td>The rate at which volume fall-off occurs.</td></tr>
</table>

## Scripting Interface

You can control an audiosource component's properties using a [script component][1]. The audiosource component's scripting interface is [here][2].

[1]: /user-manual/packs/entities/components/script
[2]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[3]: /images/platform/component_audiosource.png
