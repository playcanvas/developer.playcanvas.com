---
title: 音频源
template: usermanual-page.tmpl.html
position: 3
---

<br/>
<div class="alert alert-info">音频源组件已经是过时的组件，请使用新的[音响组件][4]来替代它</div>
<br/>

音频源组件控制音频样本的播放。

音频源组件可以通过组件面板右上角的开关来打开或关闭。如果在启用状态下，组件将会播放指定的音频资源。

![音频源组件][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>参数</th><th>描述</th></tr>
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

## 编程接口

可以通过[脚本组建][2]来对音频资源进行控制。音频资源组建的脚本接口在[这里][3]。

[1]: /images/user-manual/scenes/components/component-audio-source.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[4]: /user-manual/packs/components/sound

