---
title: Cube Maps
template: usermanual-page.tmpl.html
position: 4
---

Cube maps are a special type of texture asset. They are formed from 6 texture assets where each texture represents the face of a cube. They typically have two uses:

1. A cube map can define your scene's sky box. A sky box contains imagery of the distant visuals of your scene such as hills, mountains, the sky and so on.
2. A cube map can add reflections to any material. Imagine a shiny, chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, you would normally set the scene's sky box cube map as the cube map on a reflective object's materials.

<iframe width="640" height="480" src="http://playcanv.as/b/xp7v1oFB" allowfullscreen></iframe>

## Importing Cube Map Textures

A cube map is an asset that requires six texture assets as input. Therefore, in order to fully configure a new cube map asset, you must first import 6 images into your project. To do this, simply drag 6 images from your file system into your browser tab running PlayCanvas Editor. Once uploaded and processed, the images will appear in the Asset Explorer where they are now ready to be assigned to a cube map asset.

## Creating New Cube Map

You can create new cube map assets directly from the PlayCanvas Editor interface. Use the Create Asset menu in the Asset panel.

<img src="/images/user-manual/create-asset-menu.jpg" style="width: 300px" />

This creates a new cube map Asset and opens up the Cube Map Editor on the right-hand side of the screen.

## Selecting a Cube Map

To select a cube map in order to edit it, select it in the Asset Panel. The easiest way to do this is to select the cube map filter to narrow down the options for selection. Cube maps are identified by a 3D cube icon.

When a cube map is selected, the Editor panel on the right of the Editor will show the Cube Map Editor.

## Editing a Cube Map

<img src="/images/user-manual/cubemap-inspector.jpg" style="width: 300px; float: left; padding: 20px; padding-top: 0px;" />

Once you have a cube map selected, you can edit its properties.

### Min Filter
This setting determines how the pixels of the cube maps are interpolated as they are minified. Minification is when the texel to screen pixel ratio is greater than one. Linear gives the best results visually, followed by Nearest.

### Mip Filter
This setting controls additional controls to improve the quality of a cube map as it is minified. Linear gives the best results visually, followed by Nearest and then None.

### Mag Filter
This setting determines how the pixels of the cube maps are interpolated as they are magnified. Magnification is when the texel to screen pixel ratio is less than one. Linear gives the best results visually, followed by Nearest.

### Anisotropy
Anisotropy is a value between 1 and 16 that gives control over the quality of texture sampling as the camera's view vector becomes more closely aligned with the plane of a textured surface.

### Texture Slots
The six texture assets that correspond to the faces of a cube. The cube map preview panel at the top of the editor if your guide, helping you to connect faces together correctly. Think of the preview as a box unfolded to a flat plane.

### Prefilter

The cube map inspector has a Prefilter button which generates a set of low-resolution filtered textures which are used in the environment map of the Physical material. Prefiltering the cube map is essential for using the Physical material.

## Assigning Cube Maps to Materials

The default Phong and Physical material types both have reflection properties. If you expand the Environment property section, you see the following:

<img src="/images/user-manual/material-environment.jpg" style="width: 300px;"/>

You can click the Empty slot to select a cube map or drag and drop a cube map asset from the asset panel into the cube map slot.

Note: a Physical material will use the scene's skybox as a default environment map if it is assigned and  prefiltered.
