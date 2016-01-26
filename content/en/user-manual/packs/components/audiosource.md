---
title: Audio Source
template: usermanual-page.tmpl.html
position: 3
---

<br/>
<div class="alert alert-info">The Audio Source component is going to be deprecated in favor of the new [Sound Component][4]</div>
<br/>

The Audio Source component controls playback of an audio sample.

The Audio Source component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the component will play assigned audio assets.

![Audio Source component][1]

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Assets</td><td>The audio assets that can be played from this audio source. Multiple audio assets can be specified by the picker control.</td></tr>
    <tr><td>Activate</td><td>If checked, the first audio asset specified by the Assets property will be played on load. Otherwise, audio assets will need to be played using script.</td></tr>
    <tr><td>Loop</td><td>If checked, the component will loop played audio assets continuously. Otherwise, audio assets are played once to completion.</td></tr>
    <tr><td>3d</td><td>If checked, the component will play back audio assets as if played from the location of the entity in 3D space.</td></tr>
    <tr><td>Volume</td><td>The volume of the audio assets played back by the component.</td></tr>
    <tr><td>Pitch</td><td>The pitch to playback the audio at. A value of 1 means the audio is played back at the original pitch.</td></tr>
    <tr><td>Min Distance</td><td>The distance at which the volume of playback begins to fall from its maximum.</td></tr>
    <tr><td>Max Distance</td><td>The distance at which the volume of playback falls to zero.</td></tr>
    <tr><td>Roll-off Factor</td><td>The rate at which volume fall-off occurs.</td></tr>
</table>

## Scripting Interface

You can control an Audio Source component's properties using a [script component][2]. The Audio Source component's scripting interface is [here][3].

[1]: /images/user-manual/scenes/components/component-audio-source.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[4]: /user-manual/packs/components/sound