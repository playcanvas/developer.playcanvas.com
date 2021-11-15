---
title: Texture Atlas
template: usermanual-page.tmpl.html
position: 16
---

![Texture Atlas][1]

A Texture Atlas asset is a texture asset with additional data which describes 'Frames' inside the texture. Frames are regions defined in the texture as a rectangle with a 'pivot' point which sets the positional and rotational center of the frame.

Texture Atlases are created by right-clicking on a regular Texture Asset and selecting **Create Atlas**. Or by changing the default asset settings to enable [Create Atlases][3]

The Texture Atlas is used in combination with the [Sprite Asset][4] to render 2D graphics.

## 属性

### Frames

The Frames of a texture atlas are keyed by a unique value, usually a integer string. The format of a frame is:

```
{
    rect: [0,0,0,0],    // u,v,width,height - width and height in pixels
    pivot: [0,0],       // x,y - as a proportion 0-1
    border: [0,0,0,0]   // left, bottom, right - top in pixels
}
```

### Texture Properties

In addition to frame data the Texture Atlas contains the properties as a [texture asset][2].

[1]: /images/user-manual/assets/texture-atlas/texture-atlas.jpg
[2]: /user-manual/assets/textures
[3]: /user-manual/designer/settings#create-atlases
[4]: /user-manual/assets/sprites

