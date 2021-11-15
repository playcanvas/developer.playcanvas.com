---
title: Sound
template: usermanual-page.tmpl.html
position: 19
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

## 插槽属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Name</td><td>插槽的名称。这个名称将在代码中被用来引用这个插槽。</td></tr>
    <tr><td>Asset</td><td>用以播放的音频资源。</td></tr>
    <tr><td>Range Start</td><td>在音频资源中声音的起始点，用秒计算。你可以通过这项功能播放部分音频而不是整个音频文件。</td></tr>
    <tr><td>Range Duration</td><td>声音开始播放的持续时间范围，以秒计算。比如，你可能会有一个多声源的音频资源，这个插槽你可以定义开始时间以及范围。</td></tr>
    <tr><td>Auto Play</td><td>选项启用，这个插槽将会先加载并播放。选项未开启，插槽需要通过脚本进行播放。</td></tr>
    <tr><td>Overlap</td><td>项启用, 这个被插槽播放的音乐将不会停止。循环音频只有用于需要被重复播放的单一音频。当实体被破坏时，音频循环也不会停止，只有当循环结束或者在脚本中手动停止音频才会停止循环。</td></tr>
    <tr><td>Loop</td><td>选项启用，插槽将会不停的循环播放。否则，只会播放一次就停止。</td></tr>
    <tr><td>Volume</td><td>通过插槽播放的音频的音量。</td></tr>
    <tr><td>Pitch</td><td>当音频回放时的音调。当值为1时意味着回访音频的音调为初始音调。</td></tr>
</table>

## 脚本接口

可以通过[脚本组件][2]来修改音频组件的属性。 音频组件的脚本接口在 [这里][3].

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.SoundComponent.html

