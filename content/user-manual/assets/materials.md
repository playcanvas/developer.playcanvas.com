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

Once you have a material selected you can edit its properties.

![material_editor](/images/content_creation/material_editor.png)

The default PlayCanvas material has a 'Shading Model' property. This defaults to 'Phong', and this page documents this shading model. Note that the alternative shading model is 'Physical' - this is the model for PlayCanvas' Physically Based Renderer (PBR). The physical shading model will be documented in the near future when the full workflow for this material type is implemented.

Material properties are grouped. Click on each group heading to fold out the specific properties.

### Ambient

Ambient properties determine how the material appears in ambient light.

![material_editor_ambient](/images/content_creation/material_editor_ambient.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Tint</td><td>Check this to multiply the scene's global ambient color with a material specific color.</td></tr>
    <tr><td>Color</td><td>The tint color to multiply the scene's global ambient color.</td></tr>
    <tr><td>AO Texture</td><td>An ambient occlusion map containing baked ambient occlusion. The map uses the first set of UVs in the mesh to which the material is assigned.</td></tr>
</table>

### Diffuse

Diffuse properties define the how a material reflects diffuse light emitted by dynamic light sources in the scene.

![material_editor_diffuse](/images/content_creation/material_editor_diffuse.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The diffuse map that specifies the per-pixel diffuse material color. If no diffuse map is set, the diffuse color is used instead.</td></tr>
    <tr><td>Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the diffuse map.</td></tr>
    <tr><td>Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the diffuse map.</td></tr>
    <tr><td>Tint</td><td>Check this to modulate the material's diffuse map with a material specific diffuse color.</td></tr>
    <tr><td>Color</td><td>If no diffuse map is set, this is the diffuse color of the material. If a diffuse map is set and tint is enabled, this color modulates the material's diffuse map.</td></tr>
</table>

### Specular

Specular properties defines the color of the specular highlights. i.e. the shininess

![material_editor_specular](/images/content_creation/material_editor_specular.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Specular Map</td><td>The specular map that specifies the per-pixel specular color. If no specular map is set, the specular color is used instead.</td></tr>
    <tr><td>Specular Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the specular map. Only available if Specular Map is set.</td></tr>
    <tr><td>Specular Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the specular map. Only available if Specular Map is set.</td></tr>
    <tr><td>Tint</td><td>Check this to modulate the material's specular map with a material specific specular color.</td></tr>
    <tr><td>Color</td><td>If no specular map is set, this is the specular color of the material. If a specular map is set and tint is enabled, this color modulates the material's specular map.</td></tr>
    <tr><td>Shininess</td><td>A value determining the smoothness of a surface. For smaller shininess values, a surface is rougher and specular highlights will be broader. For larger shininess values, a surface is smoother and will exhibit more concentrated specular highlights (as is the surace is polished and shiny).</td></tr>
    <tr><td>Gloss Map</td><td>The gloss map that specifies a per-pixel shininess value. If no gloss map is set, the Shininess property is used instead.</td></tr>
    <tr><td>Gloss Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the gloss map. Only available if Gloss Map is set.</td></tr>
    <tr><td>Gloss Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the gloss map. Only available if Gloss Map is set.</td></tr>
</table>

### Emissive

Emissive properties control how the material emits light (as opposed to reflecting light).

![material_editor_emissive](/images/content_creation/material_editor_emissive.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The emissive map that specifies the per-pixel emissive color. If no emissive map is set, the emissive color is used instead.</td></tr>
    <tr><td>Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the emissive map. Only available if Texture is set.</td></tr>
    <tr><td>Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the emissive map. Only available if Texture is set.</td></tr>
    <tr><td>Tint</td><td>Check this to modulate the material's emissive map with a material specific emissive color.</td></tr>
    <tr><td>Color</td><td>If no emissive map is set, this is the emissive color of the material. If an emissive map is set and tint is enabled, this color modulates the material's emissive map.</td></tr>
    <tr><td>Intensity</td><td>A multiplier for emissive color that can achieve overbright effects for exceptionally bright emissive materials.</td></tr>
</table>

### Opacity

Opacity sets the transparency level.

![material_editor_opacity](/images/content_creation/material_editor_opacity.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Amount</td><td>The opacity of the material. This is a value between 0 (completely transparent) and 1 (complately opaque. It defaults to 1.</td></tr>
    <tr><td>Texture</td><td>The opacity map that specifies the per-pixel opacity. The opacity map is modulated by the 'Amount' property.</td></tr>
    <tr><td>Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the opacity map. Only available if Texture is set.</td></tr>
    <tr><td>Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the opacity map. Only available if Texture is set.</td></tr>
</table>

### Normals

Use this to specify normal maps (these determine bumpiness - note you have to use normal maps in PlayCanvas, not height maps).

![material_editor_normals](/images/content_creation/material_editor_normals.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Bumpiness</td><td>The strength of the applied normal map. This is a value between 0 (the normal map has no effect) and 2 (the effect of the normal map is exagerrated). It defaults to 1.</td></tr>
    <tr><td>Texture</td><td>The opacity map that specifies the per-pixel surface normals. The normal map is modulated by the 'Bumpiness' property.</td></tr>
    <tr><td>Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the normal map. Only available if Texture is set.</td></tr>
    <tr><td>Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the normal map. Only available if Texture is set.</td></tr>
    <tr><td>Specular Anti-Aliasing</td><td>Enables Toksvig antialiasing for mipmapped normal maps with specular highlights. This produces crisper, more detailed specular highlights. Defaults to off.</td></tr>
</table>

### Parallax

A parallax map gives further realism to a normal map by giving the illusion of depth to a surface. Note that parallax options are only enabled if you have set a normal map on the material.

![material_editor_parallax](/images/content_creation/material_editor_parallax.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Height Map</td><td>The height map that specifies the per-pixel strength of the parallax effect. White is full height and black is zero height.</td></tr>
    <tr><td>Tiling</td><td>The scale in U and V to apply to the first UV channel referenced by the height map.</td></tr>
    <tr><td>Offset</td><td>The offset in U and V to apply to the first UV channel referenced by the height map.</td></tr>
    <tr><td>Strength</td><td>The strength of a parallax effect (a value between 0 and 2, defaulting to 1).</td></tr>
</table>

### Reflectivity

Reflectivity properties determine how a material reflects the environment.

![material_editor_reflectivity](/images/content_creation/material_editor_reflectivity.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Reflectivity</td><td>A factor for the applied sphere map or cube map. This value defaults to 1 (full reflectivity).</td></tr>
    <tr><td>Sphere Map</td><td>A sphere map texture asset that approximates environment reflection. If a sphere map is set, the Cube Map property will be hidden (since these properties are mutually exclusive).</td></tr>
    <tr><td>Cube Map</td><td>A cube map texture asset that approximates environment reflection (with greater accuracy than is possible with a sphere map). If a cube map is set, the Sphere Map property will be hidden (since these properties are mutually exclusive).</td></tr>
</table>

### Light Map

Light maps contain pre-baked diffuse lighting. Using light maps is considered an optimization in that runtime dynamic lighting calculations can be pre-calculated.

![material_editor_lightmap](/images/content_creation/material_editor_lightmap.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Texture</td><td>The lightmap texture that contains pre-baked diffuse lighting. The lightmap requires the material to be applied to a mesh that has two UV sets. The lightmap uses the second set of UVs.</td></tr>
</table>

### Render States

Render States gives additional controls over how a mesh is rendered with the specified material.

![material_editor_renderstates](/images/content_creation/material_editor_renderstates.png)

<table class="table table-striped table-bordered">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Depth Test</td><td>If checked, when a mesh with the material is rendered, a per pixel check is performed to determine if the pixel passes the engine's depth test. By default, the test is that the pixel must have a z depth less than or equal to whatever is already in the depth buffer. In other words, the mesh is only visible if nothing is in front of it. If unchecked, the mesh is rendered regardless of what is already in the depth buffer. Defaults to on.</td></tr>
    <tr><td>Depth Write</td><td>If checked, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. Defaults to on.</td></tr>
    <tr><td>Cull</td>
        <td>Options are:
            <ul>
                <li>None: Both front faces and back faces are rendered.</li>
                <li>Front Faces: front faces are rendered and back faces are not.</li>
                <li>Back Faces: back faces are rendered and front faces are not. This is the default.</li>
            </ul>
        PlayCanvas dictates that a counter-clockwise vertex winding specifies a front face triangle. Note that backface culling is often good for performance because backface pixels are often overwritten (for convex meshes) which can result in redundant filling of pixels.
        </td>
    </tr>
    <tr><td>Blend Type</td>
        <td>Options are:
            <ul>
                <li>None: The mesh is opaque. This is the default.</li>
                <li>Normal: The mesh is transparent, like stained glass.</li>
                <li>Additive: The mesh color is added to whatever has already been rendered to the frame buffer.</li>
                <li>Pre-multiply: Like 'Normal' blending except it is assumed that the color of the mesh being rendered with this material has already been modulated by its alpha value.</li>
                <li>Multiply: When rendered, the mesh color is multiplied by whatever has already been rendered to the frame buffer.</li>
            </ul>
        </td>
    </tr>
</table>