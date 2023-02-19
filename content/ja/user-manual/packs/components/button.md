---
title: Button
layout: usermanual-page.hbs
position: 4
---

ボタンコンポーネントは、[スクリーン][1] コンポーネントと [エレメント][2] コンポーネントで使用するユーザーインターフェースボタンを作成する、便利なショートカットです。

ボタンコンポーネントは、2つのトランジションモードで使用できます。すなわち*Sprite Swap*と*Tint*です。*Sprite Swap*はそれぞれのボタンごとに異なるスプライトまたはフレームを使用し、 *Tint*は1つのスプライトをそれぞれの状態ごとに異なる色に着色します。

## 共通プロパティ

| プロパティ        | 説明 |
|-----------------|-------------|
| Active          | When enabled the button will respond to and fire event. When disabled the button is set to the Inactive State. |
| Image           | The Image Element Entity that is used to detect input events. |
| Hit Padding     | Additional space around the Image Element that will be included when testing for input events. |
| Transition Mode | The type of effect to use when transitioning between states. Either Sprite Swap or Tint. |


## スプライトスワップ・プロパティ

![Sprite Swap Button][3]

| プロパティ        | 説明 |
|-----------------|-------------|
| Hover Sprite    | The Sprite Asset used when the button is in the Hover State. |
| Hover Frame     | The Sprite Frame to display when the button is in the Hover State. |
| Pressed Sprite  | The Sprite Asset used when the button is in the Pressed State. |
| Pressed Frame   | The Sprite Frame to display when the button is in the Pressed State. |
| Inactive Sprite | The Sprite Asset used when the button is not active. |
| Inactive Frame  | The Sprite Frame used when the button is not active. |

## ティントプロパティ

![Tint Button][4]

| プロパティ      | 説明 |
|---------------|-------------|
| Hover Tint    | The color to tint the Image Element with when the button is in the Hover State. |
| Pressed Tint  | The color to tint the Image Element with when the button is in the Pressed State. |
| Inactive Tint | The color to tint the Image Element with when the button is in the Inactive State. |
| Fade Duration | The time in milliseconds to blend between the different state colors. |

## スクリプトのインターフェース

You can control the properties of a Button component using a [script component][5]. The scripting interface for the Button component is [here][6].

[1]: /user-manual/packs/components/screen
[2]: /user-manual/packs/components/element
[3]: /images/user-manual/scenes/components/component-button-sprite-change.png
[4]: /images/user-manual/scenes/components/component-button-tint.png
[5]: /user-manual/packs/components/script
[6]: /api/pc.ButtonComponent.html
