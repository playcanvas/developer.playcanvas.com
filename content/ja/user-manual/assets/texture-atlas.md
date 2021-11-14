---
title: Texture Atlas
template: usermanual-page.tmpl.html
position: 16
---

![Texture Atlas][1]

A Texture Atlas asset is a texture asset with additional data which describes 'Frames' inside the texture. Frames are regions defined in the texture as a rectangle with a 'pivot' point which sets the positional and rotational center of the frame.

テクスチャアトラスを作成するには、通常のテクスチャアセットで右クリックし、**Create Atlas**を選択します。またはデフォルトのアセット設定を変更し、 [Create Atlases][3]を有効化します。

2Dグラフィックをレンダリングするには、テクスチャアトラスと [スプライトアセット][4]を組み合わせて使用します。

## プロパティ

### フレーム

テクスチャアトラスのフレームには、固有の値が入力されます。通常は整数文字列です。フレームのフォーマットは以下のとおりです：

```
{
    rect: [0,0,0,0],    // u,v,width,height - width and height in pixels
    pivot: [0,0],       // x,y - as a proportion 0-1
    border: [0,0,0,0]   // left, bottom, right - top in pixels
}
```

### テクスチャプロパティ

フレームデータに加え、テクスチャアトラスには[テクスチャアセット][2]としてのプロパティが含まれます。

[1]: /images/user-manual/assets/texture-atlas/texture-atlas.jpg
[2]: /user-manual/assets/textures
[3]: /user-manual/designer/settings#create-atlases
[4]: /user-manual/assets/sprites

