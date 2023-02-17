---
title: 声音
layout: usermanual-page.hbs
position: 19
---

音频组件控制音频样本的播放。

![音频组件][1]

每个音频组件包含了插槽用以负责音频播放。每个插槽可以指定不同的音频源，每个音频源可以从不同的插槽被单独播放。

可以通过点击“ADD SLOT”来添加新的插槽。同样你也可以通过点击位于插槽顶部的删除标志来移除插槽。

使用音频面板右上角的切换键可以开启或关闭音频。在启用的状态下，组件将会播放被标记为自动播放的插槽。剩余的插槽将可以通过脚本进行播放。


## Component Properties

| Property        | Description |
|-----------------|-------------|
| Positional      | If checked, the component will play back audio assets as if played from the location of the entity in 3D space. |
| Volume          | The volume that will be multiplied with the volume of each Slot when playing an audio asset. |
| Pitch           | The pitch that will be multiplied with the pitch of each Slot when playing an audio asset. A value of 1 means the audio is played back at the original pitch. |
| Ref Distance    | The reference distance for reducing volume as the sound source moves further from the listener. |
| Max Distance    | The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not necessarily 0 after this distance, but just doesn't fall off anymore. |
| Distance Model  | Determines which algorithm to use to reduce the volume of the sound as it moves away from the listener. Can be one of Linear, Inverse or Exponential. |
| Roll-off Factor | The rate at which volume fall-off occurs. |

## Slot Properties

| Property        | Description |
|-----------------|-------------|
| Name            | The name of the Slot. This is the name that you will use to refer to this Slot in code. |
| Asset           | The audio asset to play. |
| Range Start     | The starting point of the sound in the audio asset, in seconds. You can use this if you don't want to play the entire audio asset but just a portion of it instead. |
| Range Duration  | The duration of the sound to play starting from Range Start, in seconds. E.g. you might have an audio asset with multiple sounds in it. To make this Slot play such a sound you can define its Start time and its Duration. |
| Auto Play       | If checked, the Slot will be played on load. Otherwise, the Slot will need to be played using script. |
| Overlap         | If checked, this Slot will play its sound without stopping first. Overlap should be used for one-shot sounds that need to be played repeatedly. Overlapping sounds do not stop when the Entity is destroyed, but only when they finish or when you manually stop them in script. |
| Loop            | If checked, the Slot will loop continuously. Otherwise, it will be played once to completion. |
| Volume          | The volume of the audio asset played back by the slot. |
| Pitch           | The pitch at which the audio is played. A value of 1 means the audio is played back at the original pitch. |

## Scripting Interface

可以通过[脚本组件][2]来修改音频组件的属性。 音频组件的脚本接口在 [这里][3].

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.SoundComponent.html
