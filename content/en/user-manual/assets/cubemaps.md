---
title: Cubemaps
template: usermanual-page.tmpl.html
position: 5
---

Cubemaps are a special type of texture asset. They are formed from 6 texture assets where each texture represents the face of a cube. They typically have two uses:

1. A cubemap can define your scene's sky box. A sky box contains imagery of the distant visuals of your scene such as hills, mountains, the sky and so on.
2. A cubemap can add reflections to any material. Imagine a shiny, chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, you would normally set the scene's sky box cubemap as the cubemap on a reflective object's materials.

<iframe width="640" height="480" src="http://playcanv.as/b/xp7v1oFB" allowfullscreen></iframe>

## Importing Cubemap Textures

A cubemap is an asset that requires six texture assets as input. Therefore, in order to fully configure a new cubemap asset, you must first import 6 images into your project. To do this, simply drag 6 images from your file system into the Assets panel (or select the Asset panel's Upload option). Once uploaded and processed, the images will appear in the Assets panel where they are now ready to be assigned to a cubemap asset.

## Creating Cubemaps

You can create new cubemap assets directly from the PlayCanvas Editor interface. Use the Create Asset menu in the Asset panel.

![Cubemap Creation][1]

This creates a new cubemap Asset and opens up the Cubemap Editor on the right-hand side of the screen.

## Selecting Cubemaps

To select a cubemap in order to edit it, select it in the Asset Panel. The easiest way to do this is to select the cubemap filter to narrow down the options for selection. Cubemaps are identified by cross-shaped thumbnails:

![Cubemap Thumbnails][2]

When a cubemap is selected, it will be loaded into the Inspector panel on the right of the Editor.

## Cubemap Properties

Once you have a cubemap selected, you can edit its properties.

![Cubemap Properties][3]

### Filtering
This setting determines how the pixels of the cubemaps are interpolated as they are magnified. Magnification is when the texel to screen pixel ratio is less than one. Linear gives the best results visually, followed by Nearest.

### Anisotropy
Anisotropy is a value between 1 and 16 that gives control over the quality of texture sampling as the camera's view vector becomes more closely aligned with the plane of a textured surface.

## Assigning Textures to Cubemaps

![Cubemap Preview][4]

The cubemap Preview panel displays the six faces of a cubemap flattened into the shape of a cross. Imagine a cardboard box that has been unfolded to lay flat. To construct a cubemap, simply drag texture assets from the Assets panel to the face slots in the Preview panel. You can also select a cubemap face slot and then select a texture asset from the Assets panel.

Cubemap faces must be:

* Square (the same resultion in width and height)
* Power of two in dimension (1x1, 2x2, 4x4, 8x8, 16x16, 32x32 and so on)
* All faces must be the same resolution

To assist you, the Editor attempts to figure out how to auto-assign textures to faces intelligently. It does this when you drag the first face to a slot by trying to match commonly used naming conventions for cubemap faces, such as:

* negx, posx, negy, posy, negz, posz
* left, right, top|up, bottom|down, front|forward, back|backward
* 0-5|1-6

An example of a texture set that would match is:

* face_posx.jpg
* face_negx.jpg
* face_posy.jpg
* face_negy.jpg
* face_posz.jpg
* face_negz.jpg

## Prefiltering Cubemaps

The cubemap inspector has a Prefilter button which generates a set of low-resolution filtered textures which are used in the environment map of the Physical material. Prefiltering the cubemap is essential for using the Physical material.

## Assigning Cubemaps to Materials

The default Phong and Physical material types both have reflection properties. If you expand the Environment property section, you see the following:

![Cubemap Material][5]

You can click the Empty slot to select a cubemap or drag and drop a cubemap asset from the asset panel into the cubemap slot.

Note: a Physical material will use the scene's skybox as a default environment map if it is assigned and  prefiltered.

[1]: /images/user-manual/assets/cubemaps/cubemap-create.png
[2]: /images/user-manual/assets/cubemaps/cubemap-thumbnails.png
[3]: /images/user-manual/assets/cubemaps/cubemap-properties.png
[4]: /images/user-manual/assets/cubemaps/cubemap-preview.png
[5]: /images/user-manual/assets/cubemaps/cubemap-material.png