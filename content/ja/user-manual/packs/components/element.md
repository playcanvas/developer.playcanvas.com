---
title: Element
template: usermanual-page.tmpl.html
position: 7
---

Screenコンポーネントの祖先を持つ階層にあるElementコンポーネントは、画像やテキストなどの2Dコンポーネントで構成されるユーザインターフェイスを構築するために使用されます。Elementにはアンカーやピボットポイントなどのレイアウトプロパティが用意されています。

詳細は[ユーザインターフェイス][0]セクションを参照してください。

## グループ要素

グループ要素は、Elementコンポーネントのレイアウトプロパティのみを提供します

![グループ要素][1]

## 画像要素

画像要素はテクスチャアセットまたはソリッドカラーを使用して画像を表示します。

![画像要素][2]

## テキスト要素

テキスト要素は[フォントアセット][5]を使用してテキストの文字列をレンダリングします。

![テキスト要素][3]

## 共通のコンポーネントプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of Element: Group, Image or Text</td></tr>
    <tr><td>Preset</td><td>Choosing a layout preset will automatically set the Anchor and Pivot properties to a preset value.</td></tr>
    <tr><td>Anchor</td><td>Determine where the element calculates its position in relation to. See the <a href="/user-manual/user-interface/elements/#anchor">Elements#Anchor</a> section for more information.</td></tr>
    <tr><td>Pivot</td><td>Determine where the pivot point of the Element is. (0,0) is bottom left, (1,1) is top right. See the <a href="/user-manual/user-interface/elements/#pivot">Elements#Pivot</a> section for more information.</td></tr>
    <tr><td>Size</td><td>The width and height of the Element. This may be automatically calculated depending on other settings</td></tr>
    <tr><td>Margin</td><td>The distance from the edge of the element to the Anchor. This is only available when the Anchor is split (non-equal in one axis).</td></tr>
    <tr><td>Use Input</td><td>If enabled, this Element is added to the list of elements that check for input and fire input related events.</td></tr>
    <tr><td>Layers</td><td>The Layers to render this element into. More on Layers <a href="/user-manual/graphics/layers">here</a></td></tr>
    <tr><td>Batch Group</td><td>The Batch Group that this model belongs to. More on Batching <a href="/user-manual/optimization/batching">here</a>.</td></tr>
</table>

## 画像コンポーネントプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Rect</td><td>Define the area of the texture asset to display.</td></tr>
    <tr><td>Mask</td><td>Switch Image Element into a mask. Masks do not render into the scene, but instead limit child elements to only be rendered where this element is rendered.</td></tr>
    <tr><td>Texture</td><td>The texture asset displayed</td></tr>
    <tr><td>Color</td><td>The color to tint the element.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the element.</td></tr>
    <tr><td>Layers</td><td>The Layers to render this element into. More on Layers <a href="/user-manual/graphics/layers">here</a></td></tr>
</table>

## テキストコンポーネントプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Alignment</td><td>Determine how the text is aligned with in the element. (0,0) is bottom left, (1,1) is top right.</td></tr>
    <tr><td>Text</td><td>The text string to display.</td></tr>
    <tr><td>Font Size</td><td>The size in Screen component pixels to render the font at.</td></tr>
    <tr><td>Line Height</td><td>The size in Screen component pixels to move down for a new line.</td></tr>
    <tr><td>Spacing</td><td>A multiplier to apply to the amount advanced between each character.</td></tr>
    <tr><td>Font</td><td>The font asset.</td></tr>
    <tr><td>Color</td><td>The color to tint the font.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the element.</td></tr>
    <tr><td>Wrap Lines</td><td>Enable text wrapping. Any text that overflows the width of the text element will be wrapped to the next line.</td></tr>
    <tr><td>Layers</td><td>The Layers to render this element into. More on Layers <a href="/user-manual/graphics/layers">here</a></td></tr>
</table>

[0]: /user-manual/user-interface
[1]: /images/user-manual/scenes/components/component-element-group.png
[2]: /images/user-manual/scenes/components/component-element-image.png
[3]: /images/user-manual/scenes/components/component-element-text.png
[4]: /user-manual/user-interface/layout
[5]: /user-manual/assets/fonts/
[6]: /user-manual/optimization/batching/
[7]: /user-manual/graphics/layers
[8]: /user-manual/optimization/batching

