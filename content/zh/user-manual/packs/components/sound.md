---
title: Sound
template: usermanual-page.tmpl.html
position: 10
---

音频组件控制音频样本的播放。

![音频组件][1]

每个音频组件包含了插槽用以负责音频播放。每个插槽可以指定不同的音频源，每个音频源可以从不同的插槽被单独播放。

可以通过点击“ADD SLOT”来添加新的插槽。同样你也可以通过点击位于插槽顶部的删除标志来移除插槽。

使用音频面板右上角的切换键可以开启或关闭音频。在启用的状态下，组件将会播放被标记为自动播放的插槽。剩余的插槽将可以通过脚本进行播放。

## 组件属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Positional</td><td>选中之后，组件将会以实体在3D场景中的位置模拟播放后台音乐文件。</td></tr>
    <tr><td>Volume</td><td>当播放一个音频资源时，各个插槽的音量将会使得音频的音量增加。 </td></tr>
    <tr><td>Pitch</td><td>在播放一个音频资源时，各个插槽的音调将会使得音频的音调上升。当值为1时意味着播放的是原始音调。</td></tr>
    <tr><td>Ref Distance</td><td>当音源远离侦听器时，参考距离将会显示降低的音量。</td></tr>
    <tr><td>Max Distance</td><td>T最大距离为从音频侦听器开始到音频衰减停止。当超出最大距离时音量不再衰减，且没有必要标为0。</td></tr>
    <tr><td>Distance Model</td><td>当声源远离侦听器时选择一种算法以计算减少的音量。可以为线性，逆向，指数型。</td></tr>
    <tr><td>Roll-off Factor</td><td>音量衰减的发生率。</td></tr>
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

## 脚本接口

可以通过[脚本组件][2]来修改音频组件的属性。 音频组件的脚本接口在 [这里][3].

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.SoundComponent.html

