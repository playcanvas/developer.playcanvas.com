---
title: 2D
template: usermanual-page.tmpl.html
position: 17
---

The PlayCanvas Engine is designed to make creating 3D games and applications fast and simple. However, we also support a number of great features for creating 2D games. With PlayCanvas' 2D features you get all the benefits of a powerful 3D engine but for 2D games.

# Basic Features

## Sprites

![Sprite][5]

2D graphics are often known as **Sprites**. In PlayCanvas you can create [Sprite Assets][0] and [Sprite Components][1]. The Sprite Component is attached to Entities in order to display 2D graphics in your scene. Sprite Assets in PlayCanvas store multiple image frames from a Texture Atlas in sequence. So you can use a Sprite Asset to create flip-book style animated graphics in your games.

## Texture Atlases

![Texture Atlas][6]

A [Texture Atlas][2] is a enhanced version of the standard [Texture][3] asset. In addition to the regular texture features, a Texture Atlas includes the definitions of a set of "Frames". Each frame is a region of the texture which can be referenced in a Sprite Asset.

## Sprite Editor

![Sprite Editor][7]

The [Sprite Editor][4] is the tool used to generate Texture Atlas frames and Sprite Assets. You can open the Sprite Editor by double-clicking on any Texture Atlas or Sprite Asset. [Read More][4].

*Artwork created by [PixelBoy](https://twitter.com/2pblog1)*

[0]: /user-manual/assets/sprites
[1]: /user-manual/packs/components/sprite
[2]: /user-manual/assets/texture-atlas
[3]: /user-manual/assets/textures
[4]: /user-manual/2D/sprite-editor

[5]: /images/user-manual/2D/sprite.jpg
[6]: /images/user-manual/2D/texture-atlas.jpg
[7]: /images/user-manual/2D/sprite-editor.jpg

