---
title: Text Elements
template: usermanual-page.tmpl.html
position: 6
---

The Text Element is used to display a string of text using a [font asset][1].

## Text

The Text Element contains a string field to enter the text that will be displayed. Use `Shift+Enter` to enter a new line character in the string field.

*Note about performance:* Text elements are rendered to the screen using a single quad for each character in the string. When you change the text property, we re-generate the mesh for the element. There is a performance implication for this, though there should be no problems changing text content for a reasonable number of Elements every frame.

## Auto-size

By default a Text Element is set to automatically adjust it's width and height to match the text string. You can disable this and specify the height and widht of the element directly in the Editor panel.

![Auto Size][2]

Note: The height of the character is determined by the largest character present in the font. It is the same for every character so as to avoid the string position changing depending on the contents of the string.

## Alignment

Text Elements have an additional tool to help with positioning which is the alignment. You will be used to how this property works from tools like Word Processes. In this case, rather than presets we expose a variable that can be altered. The alignment consists of two values `[X, Y]` each between 0 and 1. `[0,0]` is bottom left alignment, `[0.5,0.5]` is centered and `[1,1]` is top right.

![Top Left][3]

![Centered][4]

![Bottom Right][5]

## Font Size & Line Height

The font size property sets the rendered size of the font in Screen Component pixels. The line height sets the distance in Screen Component pixels to move down when the text contains a new line character.

![Font Size Line Equal][6]
**Equal Font Size and Line Height is the default**

![Font Size Line Spaced][7]
**Increase Line Height to increase line spacing**

## Spacing

The spacing property increase the distance between characters in a string. Fonts define the ideal distance to move the cursor forward for each character. The spacing property is a multiplier to this distance.

![Spacing][8]

## Tinting

The Color property allows you to tint the string to the color of your choice.

![Tinted][9]

## Tranparency

The Opacity property allows you to set the transparency of the string

![Transparent][10]

[1]: /user-manual/assets/fonts
[2]: /images/user-manual/user-interface/text-element/auto-size.png
[3]: /images/user-manual/user-interface/text-element/alignment-bottom-left.png
[4]: /images/user-manual/user-interface/text-element/alignment-centered.png
[5]: /images/user-manual/user-interface/text-element/alignment-top-right.png
[6]: /images/user-manual/user-interface/text-element/font-line-equal.png
[7]: /images/user-manual/user-interface/text-element/font-line-spaced.png
[8]: /images/user-manual/user-interface/text-element/spacing.png
[9]: /images/user-manual/user-interface/text-element/tinted.png
[10]: /images/user-manual/user-interface/text-element/transparent.png
