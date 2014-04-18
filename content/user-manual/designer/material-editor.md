---
title: Material Editor
template: page.tmpl.html
position: 8
---

Every surface on a 3D model is rendered using a material. The material defines the properties of that surface, such as it's color, shininess, bumpiness.

In PlayCanvas, a material is an Asset type which collects all these properties together. By default, it represents a Phong material. This exposes the fundamental properties that can use to create many different types for visual effects, from smooth plastic, to rough wood, or scratched metal.

## Importing Materials

Materials are imported automatically when you upload a source model (e.g. FBX or COLLADA) file into PlayCanvas. Materials will be generated with the same properties as they existing in your 3D modelling tool. If you upload using embedded media (FBX only) all the relevant texture maps will be automatically set up for you.

## Creating New Materials

You can create new material directly from the PlayCanvas Designer interface. Bring up the Asset Explorer (Press A or select Toggle Asset Explorer from the View menu) and press the + button next to the materials filter.

![add_material](/images/content_creation/add_material.png)

This creates a new material Asset and opens up the material Editor on the right-hand side of the screen.

Alternatively you can create a material from the Material Editor panel if you have a mesh instance selected.

![assign_material](/images/content_creation/assign_material.png)

## Selecting a Mesh Instance or Material

To select a material to edit or to apply a new material to a mesh, first select the Entity with the model component. You can do this by clicking on the Entity in the 3D view or in the Pack Explorer.

Once the model is selected, then you can select a specific material by clicking again in the 3D view, this time on the material you wish to select.

When a material is selected the Editor panel on the right of the Designer will show the Material Editor. The Material Editor is used to assign materials to mesh instances and to modify material properties.

## Assigning Materials

![assign_material_filled](/images/content_creation/assign_material_filled.png)

To assign a new material, first remove any existing material by clicking the x button.

![assign_material](/images/content_creation/assign_material.png)

When the material slot is empty click the + button to assign a new material. This will bring up the selection dialog of all available materials. Click to select the material you wish to assign.

You can also drag and drop material Assets from the Asset Explorer onto the material slot.

## Editing a Material

![material_editor](/images/content_creation/material_editor.png)

Once you have a material selected you can edit it's properties. Click on each heading to fold out the specific properties. Changes are saved automatically.

### Ambient
Ambient color determines how the material appears in ambient light.

### Diffuse
Diffuse properties define the color of the material. The diffuse texture is where you set your color texture.

### Specular
Specular properties defines the color of the specular highlights. I.e. the shininess

### Emissive
Emissive materials are unlit by lights and glow.

### Opacity
Opacity sets the transparency level.

### Normals
Use this to specify normal maps (bumpiness).

### Reflectivity
You can set a reflection texture on your material.

### Light Map
Light maps are blended over the top of the diffuse color to "bake in" lighting.

### Render States
Modify the render states of the Material. From here you can enable or disable the Depth Test and Depth Write. You can choose to cull front or back faces; and choose the blend mode of Normal or Additive.
