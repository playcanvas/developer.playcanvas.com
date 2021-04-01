---
title: Sound
template: usermanual-page.tmpl.html
position: 17
---

The Sound component controls playback of audio samples.

![Sound component][1]

Each Sound component contains "Slots" that are responsible for playing sounds. Each Slot can be assigned a different audio Asset, and can be played independently from the other Slots.

You can add a new Slot by clicking on the "ADD SLOT" button. You can remove a Slot by clicking on the bin icon in the header of each slot.

The Sound component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the component will play the Slots that are marked as Auto Play. The rest of the Slots can be played by scripts.


## Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Positional</td><td>If checked, the component will play back audio assets as if played from the location of the entity in 3D space.</td></tr>
    <tr><td>Volume</td><td>The volume that will be multiplied with the volume of each Slot when playing an audio asset. </td></tr>
    <tr><td>Pitch</td><td>The pitch that will be multiplied with the pitch of each Slot when playing an audio asset. A value of 1 means the audio is played back at the original pitch.</td></tr>
    <tr><td>Ref Distance</td><td>The reference distance for reducing volume as the sound source moves further from the listener.</td></tr>
    <tr><td>Max Distance</td><td>The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not necessarily 0 after this distance, but just doesn't fall off anymore.</td></tr>
    <tr><td>Distance Model</td><td>Determines which algorithm to use to reduce the volume of the sound as it moves away from the listener. Can be one of Linear, Inverse or Exponential.</td></tr>
    <tr><td>Roll-off Factor</td><td>The rate at which volume fall-off occurs.</td></tr>
</table>

## Slot Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Name</td><td>The name of the Slot. This is the name that you will use to refer to this Slot in code.</td></tr>
    <tr><td>Asset</td><td>The audio asset to play.</td></tr>
    <tr><td>Range Start</td><td>The starting point of the sound in the audio asset, in seconds. You can use this if you don't want to play the entire audio asset but just a portion of it instead.</td></tr>
    <tr><td>Range Duration</td><td>The duration of the sound to play starting from Range Start, in seconds. E.g. you might have an audio asset with multiple sounds in it. To make this Slot play such a sound you can define its Start time and its Duration.</td></tr>
    <tr><td>Auto Play</td><td>If checked, the Slot will be played on load. Otherwise, the Slot will need to be played using script.</td></tr>
    <tr><td>Overlap</td><td>If checked, this Slot will play its sound without stopping first. Overlap should be used for one-shot sounds that need to be played repeatedly. Overlapping sounds do not stop when the Entity is destroyed, but only when they finish or when you manually stop them in script.</td></tr>
    <tr><td>Loop</td><td>If checked, the Slot will loop continuously. Otherwise, it will be played once to completion.</td></tr>
    <tr><td>Volume</td><td>The volume of the audio asset played back by the slot.</td></tr>
    <tr><td>Pitch</td><td>The pitch at which the audio is played. A value of 1 means the audio is played back at the original pitch.</td></tr>
</table>

## Scripting Interface

You can control the properties of a Sound component using a [script component][2]. The scripting interface for the Sound component is [here][3].

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.SoundComponent.html
