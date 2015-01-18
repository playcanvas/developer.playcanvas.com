---
title: Materials
template: page.tmpl.html
position: 5
---

Every surface on a 3D model is rendered using a material. The material defines the properties of that surface, such as its color, shininess, bumpiness.

In PlayCanvas, a material is an Asset type which collects all these properties together. By default, it represents a Phong material. This exposes the fundamental properties that can be used to create many different types for visual effects, from smooth plastic, to rough wood, or scratched metal.

## Importing Materials

Materials are imported automatically when you upload a source model (e.g. FBX or COLLADA) file into PlayCanvas. Materials will be generated with the same properties as they exist in your 3D modelling tool. If you upload using embedded media (FBX only) all the relevant texture maps will be automatically set up for you.

## Creating New Materials

You can create new materials directly from the PlayCanvas Designer interface. Bring up the Asset Explorer (Press A or select Toggle Asset Explorer from the View menu) and press the + button next to the materials filter.

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
![material_editor_ambient](/images/content_creation/material_editor_ambient.png)
Ambient color determines how the material appears in ambient light.

### Diffuse
![material_editor_diffuse](/images/content_creation/material_editor_diffuse.png)
Diffuse properties define the base color of the material. The diffuse texture is where you set your color texture.

### Specular
![material_editor_specular](/images/content_creation/material_editor_specular.png)
Specular properties defines the color of the specular highlights. I.e. the shininess

### Emissive
![material_editor_emissive](/images/content_creation/material_editor_emissive.png)
Emissive materials are unlit by lights and glow.

### Opacity
![material_editor_opacity](/images/content_creation/material_editor_opacity.png)
Opacity sets the transparency level.

### Normals
![material_editor_normals](/images/content_creation/material_editor_normals.png)
Use this to specify normal maps (these determine bumpiness - note you have to use normal maps in PlayCanvas, not height maps).

### Parallax
![material_editor_parallax](/images/content_creation/material_editor_parallax.png)
A parallax map gives further realism to a normal map by giving the illusion of depth to a surface.

### Reflectivity
![material_editor_reflectivity](/images/content_creation/material_editor_reflectivity.png)
You can set a reflection texture on your material.

### Light Map
![material_editor_lightmap](/images/content_creation/material_editor_lightmap.png)
Light maps are blended over the top of the diffuse color to "bake in" lighting.

### Render States
![material_editor_renderstates](/images/content_creation/material_editor_renderstates.png)
Modify the render states of the Material. From here you can enable or disable the Depth Test and Depth Write. You can choose to cull front or back faces; and choose the blend mode of:
* None (for no blending).
* Normal (which uses materials' alpha values to display typical transparency/translucency).
* Additive (to form a material that, the less transparent it is, the more of its color is added to the material behind it - used for halo lighting effects etc.).
