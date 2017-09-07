---
title: Element
template: usermanual-page.tmpl.html
position: 5
---

An Element component when in a hierarchy with a Screen Component ancestor is used to build user interfaces made up of 2D components such as images and text. The Element provides layout properties such as anchors and a pivot point.

See the [User Interface][0] section for more details.

## Group Element

The group element provides just the layout properties of the Element component

![Group Element][1]

## Image Element

The image element displays an image using a texture asset or a solid color.

![Image Element][2]

## Text Element

The text element renders a string of text using a [font asset][5].

![Text Element][3]

## Common Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th></th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of Element: Group, Image or Text</td></tr>
    <tr><td>Preset</td><td>Choosing a layout preset will automatically set the Anchor and Pivot properties to a preset value.</td></tr>
    <tr><td>Anchor</td><td>Determine where the element calculates its position in relation to. See the [Layout][4] section for more information.</td></tr>
    <tr><td>Pivot</td><td>Determin where the pivot point of the Element is. (0,0) is bottom left, (1,1) is top right. See the [Layout][4] section for more information.</td></tr>
    <tr><td>Size</td><td>The width and height of the Element. This may be automatically calculated depending on other settings</td></tr>
    <tr><td>Margin</td><td>The distance from the edge of the element to the Anchor. This is only available when the Anchor is split (non-equal in one axis).</td></tr>
    <tr><td>Use Input</td><td>If enabled, this Element is added to the list of elements that check for input and fire input related events.</td></tr>
</table>

## Image Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th></th><th>Description</th></tr>
    <tr><td>Rect</td><td>Define the area of the texture asset to display.</td></tr>
    <tr><td>Texture</td><td>The texture asset displayed</td></tr>
    <tr><td>Color</td><td>The color to tint the element.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the element.</td></tr>
</table>

## Text Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th></th><th>Description</th></tr>
    <tr><td>Alignment</td><td>Determine how the text is aligned with in the element. (0,0) is bottom left, (1,1) is top right.</td></tr>
    <tr><td>Text</td><td>The text string to display.</td></tr>
    <tr><td>Font Size</td><td>The size in Screen component pixels to render the font at.</td></tr>
    <tr><td>Line Height</td><td>The size in Screen component pixels to move down for a new line.</td></tr>
    <tr><td>Spacing</td><td>A multiplier to apply to the amount advanced between each character.</td></tr>
    <tr><td>Font</td><td>The font asset.</td></tr>
    <tr><td>Color</td><td>The color to tint the font.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the element.</td></tr>
</table>

[0]: /user-manual/user-interface
[1]: /images/user-manual/scenes/components/component-element-group.png
[2]: /images/user-manual/scenes/components/component-element-image.png
[3]: /images/user-manual/scenes/components/component-element-text.png
[4]: /user-manual/user-interface/layout
[5]: /user-manual/assets/fonts/
