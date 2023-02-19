---
title: サウンド
layout: usermanual-page.hbs
position: 19
---

サウンドコンポーネントは、オーディオサンプルのプレイバックを制御します。

![サウンドコンポーネント][1]

各サウンドコンポーネントには、サウンドを再生するための"スロット"が含まれます。各スロットには、異なるオーディオアセットを割り当てることができ、他のスロットから独立して再生することができます。

"ADD SLOT"ボタンをクリックして、新しいスロットを追加することができます。各スロットのヘッダ内のゴミ箱アイコンをクリックすることでスロットを削除することができます。

サウンドコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効になった場合、コンポーネントはAuto Playとマークされたスロットを再生します。残りのスロットはスクリプトで再生されます。


## Component Properties

| プロパティ        | 説明 |
|-----------------|-------------|
| 位置上      | If checked, the component will play back audio assets as if played from the location of the entity in 3D space. |
| Volume          | The volume that will be multiplied with the volume of each Slot when playing an audio asset. |
| Pitch           | The pitch that will be multiplied with the pitch of each Slot when playing an audio asset. A value of 1 means the audio is played back at the original pitch. |
| Ref Distance    | The reference distance for reducing volume as the sound source moves further from the listener. |
| Max Distance    | The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not necessarily 0 after this distance, but just doesn't fall off anymore. |
| Distance Model  | Determines which algorithm to use to reduce the volume of the sound as it moves away from the listener. Can be one of Linear, Inverse or Exponential. |
| Roll-off Factor | The rate at which volume fall-off occurs. |

## Slot Properties

| プロパティ        | 説明 |
|-----------------|-------------|
| 名前            | The name of the Slot. This is the name that you will use to refer to this Slot in code. |
| アセット           | The audio asset to play. |
| Range Start     | The starting point of the sound in the audio asset, in seconds. You can use this if you don't want to play the entire audio asset but just a portion of it instead. |
| Range Duration  | The duration of the sound to play starting from Range Start, in seconds. E.g. you might have an audio asset with multiple sounds in it. To make this Slot play such a sound you can define its Start time and its Duration. |
| オートプレイ       | If checked, the Slot will be played on load. Otherwise, the Slot will need to be played using script. |
| オーバーラップ         | If checked, this Slot will play its sound without stopping first. Overlap should be used for one-shot sounds that need to be played repeatedly. Overlapping sounds do not stop when the Entity is destroyed, but only when they finish or when you manually stop them in script. |
| ループ            | If checked, the Slot will loop continuously. Otherwise, it will be played once to completion. |
| Volume          | The volume of the audio asset played back by the slot. |
| Pitch           | The pitch at which the audio is played. A value of 1 means the audio is played back at the original pitch. |

## スクリプトのインターフェース

[Script component][2]を使用して、サウンドコンポーネントのプロパティを操作できます。サウンドコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.SoundComponent.html
