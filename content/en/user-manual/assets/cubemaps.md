---
title: Cube Maps
template: page.tmpl.html
position: 4
---

Cube maps are a special type of texture asset. They are formed from 6 texture assets where each texture represents the face of a cube. They typically have two uses:

1. A cube map can define your scene's sky box. A sky box contains imagery of the distant visuals of your scene such as hills, mountains, the sky and so on.
2. A cube map can add reflections to any material. Imagine a shiny, chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, you would normally set the scene's sky box cube map as the cube map on a reflective object's materials.

<iframe width="640" height="480" src="http://apps.playcanvas.com.s3-website-eu-west-1.amazonaws.com/will/cubemap/bunny/"></iframe>

## Importing Cube Map Textures

A cube map is an asset that requires six texture assets as input. Therefore, in order to fully configure a new cube map asset, you must first import 6 images into your project. To do this, simply drag 6 images from your file system into your browser tab running PlayCanvas Editor. Once uploaded and processed, the images will appear in the Asset Explorer where they are now ready to be assigned to a cube map asset.

## Creating New Cube Map

You can create new cube map assets directly from the PlayCanvas Editor interface. First, ensure that the Asset Explorer is shown (Press A or select Toggle Asset Explorer from the View menu). Then press the + button next to the Cube Maps filter.

![add_cubemap](/images/content_creation/add_cubemap.png)

This creates a new cube map Asset and opens up the Cube Map Editor on the right-hand side of the screen.

## Selecting a Cube Map

To select a cube map in order to edit it, select it in the Asset Explorer. The easiest way to do this is to select the Cube Map filter to narrow down the options for selection. Cube maps are identified by a 3D cube icon.

When a cube map is selected, the Editor panel on the right of the Editor will show the Cube Map Editor.

## Editing a Cube Map

![material_editor](/images/content_creation/cubemap_editor.png)

Once you have a cube map selected, you can edit its properties.

### Right/Left/Top/Bottom/Front/Back
The six texture assets that correspond to the faces of a cube. The cube map preview panel at the top of the editor if your guide, helping you to connect faces together correctly. Think of the preview as a box unfolded to a flat plane.

### Min Filter
This setting determines how the pixels of the cubemaps are interpolated as they are minified. Minification is when the texel to screen pixel ratio is greater than one. Linear gives the best results visually, followed by Nearest.

### Mip Filter
This setting controls additional controls to improve the quality of a cube map as it is minified. Linear gives the best results visually, followed by Nearest and then None.

### Mag Filter
This setting determines how the pixels of the cubemaps are interpolated as they are magnified. Magnification is when the texel to screen pixel ratio is less than one. Linear gives the best results visually, followed by Nearest.

### Anisotropy
Anisotropy is a value between 1 and 16 that gives control over the quality of texture sampling as the camera's view vector becomes more closely aligned with the plane of a textured surface.

## Assigning Cube Maps to Materials

The default Phong and Physical material types both have reflection properties. If you expand the Reflection property section, you see the following:

![assign_material](/images/content_creation/assign_cubemap.png)

Click the + button of the Cube Map asset slot to assign an existing cube map. This will bring up the selection dialog of all available cube maps in your project. Click to select the cube map you wish to assign.

You can also drag and drop cube map Assets from the Asset Explorer onto the Cube Map slot on the material.
