---
title: Button
template: usermanual-page.tmpl.html
position: 4
---

ボタンコンポーネントは、[スクリーン][1] コンポーネントと [エレメント][2] コンポーネントで使用するユーザーインターフェースボタンを作成する、便利なショートカットです。

ボタンコンポーネントは、2つのトランジションモードで使用できます。すなわち*Sprite Swap*と*Tint*です。*Sprite Swap*はそれぞれのボタンごとに異なるスプライトまたはフレームを使用し、 *Tint*は1つのスプライトをそれぞれの状態ごとに異なる色に着色します。

## 共通プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Active</td><td>When enabled the button will respond to and fire event. When disabled the button is set to the Inactive State.</td></tr>
    <tr><td>Image</td><td>The Image Element Entity that is used to detect input events.</td></tr>
    <tr><td>Hit Padding</td><td>Additional space around the Image Element that will be included when testing for input events.</td></tr>
    <tr><td>Transition Mode</td><td>The type of effect to use when transitioning between states. Either Sprite Swap or Tint.</td></tr>
</table>

## スプライトスワップ・プロパティ

![Sprite Swap Button][3]

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Hover Sprite</td><td>The Sprite Asset used when the button is in the Hover State.</td></tr>
    <tr><td>Hover Frame</td><td>The Sprite Frame to display when the button is in the Hover State.</td></tr>
    <tr><td>Pressed Sprite</td><td>The Sprite Asset used when the button is in the Pressed State.</td></tr>
    <tr><td>Pressed Frame</td><td>The Sprite Frame to display when the button is in the Pressed State.</td></tr>
    <tr><td>Inactive Sprite</td><td>The Sprite Asset used when the button is not active.</td></tr>
    <tr><td>Inactive Frame</td><td>The Sprite Frame used when the button is not active.</td></tr>
</table>

## ティントプロパティ

![Tint Button][4]

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Hover Tint</td><td>The color to tint the Image Element with when the button is in the Hover State.</td></tr>
    <tr><td>Pressed Tint</td><td>The color to tint the Image Element with when the button is in the Pressed State.</td></tr>
    <tr><td>Inactive Tint</td><td>The color to tint the Image Element with when the button is in the Inactive State.</td></tr>
    <tr><td>Fade Duration</td><td>The time in milliseconds to blend between the different state colors</td></tr>
</table>

## スクリプトのインターフェース

You can control the properties of a Button component using a [script component][5]. The scripting interface for the Button component is [here][6].

[1]: /user-manual/packs/components/screen
[2]: /user-manual/packs/components/element
[3]: /images/user-manual/scenes/components/component-button-sprite-change.png
[4]: /images/user-manual/scenes/components/component-button-tint.png
[5]: /user-manual/packs/components/script
[6]: /en/api/pc.ButtonComponent.html

