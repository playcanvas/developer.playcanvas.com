---
title: Textures
template: usermanual-page.tmpl.html
position: 4
---

A texture is an image that can be assigned to a [material][1] and then applied to a graphical primitive.

## Importing Textures

There are 3 ways you can import texture assets into PlayCanvas:

1. Drag and drop images into the Assets panel.
2. Select 'Upload' from the context menu in the Assets panel and select an image using the file browser.
3. Import an FBX file that embeds textures.

Supported image formats are:

* JPG
* PNG
* GIF
* TGA
* BMP
* TIF
* HDR
* EXR

Imported JPG and PNG files remain in their original format. 

GIF, TGA, BMP and TIF image types will be converted to JPG or PNG on import. If the imported image has transparency, it will be converted to PNG. Otherwise, it will be converted to JPG.

HDR and EXR are [high dynamic range formats][2] formats. Images of these types are converted to PNG on import and marked as being stored in RGBM format. RGBM essentially stores a multiplier for RGB values in the PNG's alpha channel, enabling the compression of an HDR format into a low dynamic range format.

By default, imported images will be resized to the nearest power of two. For example, an image that is 323x414 will be resized to 256x512 on import. This is done because the graphics engine cannot utilize mipmapping with non-power of two textures. However, this behavior can be overridden by disabling the 'Textures POT' setting in the Asset Tasks panel before importing a non-power of two texture.

## Texture Properties

Selecting a texture's thumbnail in the Assets panel will load it into the Inspector panel. Note that you can multi-select textures and edit the whole selection simultaneously in the Inspector.

A texture shares the standard set of asset properties (ID, name, tags and so on). But it's also has some texture-specific properties.

![Texture Properties][3]

### Texture Filtering

Texture filtering gives control over how the color of a texture mapped pixel is calculated. 'Point' applied no filtering whereas 'Linear' will interpolate the color of a texel with those of its neighbours. This produces better visual results, particularly as a texture is minimized (where the texture occupies fewer pixels on the screen than it has texels).

### Anisotropy

When textures are viewed on surfaces at an oblique angle, quality can suffer and they can appear blurred. To fix this problem, you can set a value for anisotropy. See how different anisotropy values can affect the appearance of a texture:

![Anisotropy][4]

Note that as anisotropy increases, the cost of sampling the texture on the GPU also increases.

### Texture Addressing

The texture addressing properties give you control over how a texture is sampled for texture coordinates outside the range 0 to 1. See how the different modes affect the sprite below:

![Addressing][5]

## Texture Compression

Texture data is stored in a device's video memory (or VRAM). It is important to ensure that your application does not exhaust VRAM as this can cause undesirable things like browser tab crashes.

The Editor has the ability to apply lossy compression schemes to your textures to dramatically reduce the amount of VRAM used. These schemes are:

* DXT: Typically supported by desktop devices.
* PVR: Typically supported by iOS devices.
* ETC: Typically supported by Android devices.

Consider this texture asset:

<img src="/images/user-manual/assets/textures/brick.jpg" alt="Brick Texture" style="width: 256px; height: 256px;"/>

It's a 512x512 JPG that is 202KB in size. However, JPG is a compressed format and when passed to the graphics engine, it is expanded to an uncompressed RGB8 format that occupies 1.05MB of VRAM (including mipmap levels).

Enabling all compression schemes achieves the following results:

![Compression Results][6]

The compression has achieved a 6 times reduction in VRAM usage. Furthermore, in this case, compression has also reduced download size from 202KB to as little as 116KB.

[1]: /user-manual/assets/materials
[2]: https://en.wikipedia.org/wiki/High-dynamic-range_imaging
[3]: /images/user-manual/assets/textures/texture-properties.png
[4]: /images/user-manual/assets/textures/anisotropy.png
[5]: /images/user-manual/assets/textures/texture-address.png
[6]: /images/user-manual/assets/textures/compression-results.png

