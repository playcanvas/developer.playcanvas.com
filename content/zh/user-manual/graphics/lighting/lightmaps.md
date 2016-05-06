---
title: Lightmaps
template: usermanual-page.tmpl.html
position: 3
---

![Sponza][10]
*All the lighting in this scene is provided by lightmap textures*

Lightmap generation is the process of pre-calculating lighting information for a static scene and storing it in textures which are then applied to materials. This is an efficient way of lighting a scene if much of the light sources and geometry are static or environmental.

PlayCanvas offers two ways to use lightmaps in your scene.

## External lightmap generation

Many 3D content tools have ways to generate lightmap textures. For example, 3DS Max, Maya and Blender all have ways to bake lightmaps into textures. The advantages of using an offline tool for lightmap generation is that you can use very sophisticated lighting calculations like Global Illumination for bounce lighting, soft shadows, etc. The major disadvantage is that you have to have a complete representation of your scene inside the 3D tool. So if your PlayCanvas scene is made up of lots of instances positioned in the Editor, you need to re-create this inside your lightmapping tool.

Once you have created lightmaps using an external tool you simply upload them as regular texture assets and they can be added to your materials using the lightmap slot in the standard Physical Material.

![Lightmap slot][1]

## PlayCanvas Runtime Lightmap Generation

PlayCanvas offers a very convenient solution to generating lightmaps. Using the standard light components in the Editor you choose which lights are used to bake lightmaps and which are used to dynamically light the scene at runtime. Lights that are set to bake are then used when the application starts to generate lightmaps which are used to light the scene.

The advantanges are so:

* Lighting is not performed at runtime
* It is possible to use hundreds of static lights to light your scene
* Rendering lightmaps at runtime is, in many cases, faster than downloading many lightmap textures
* It is possible to mix static and dynamic lights in the Editor
* Rebaking can be performed at runtime
* Lightmaps are HDR

The disadvantage of using runtime lightmap generation is that currently we do not support baking global illumination, ambient occulusion or some of the other advanced features of a specialized baking tool.

### Setting up lights for baking

Each Light Component contains settings for enabling lightmap baking. By default a new light is set to Dynamic.

![Dynamic Light][2]

By enabling the **Lightmap: Bake** setting the light will bake lightmaps for any lightmapped model that is in range.

There are two other options that modify the lights behaviour. These decide which models the light will affect at runtime. If either of these are true, then the light is operating at runtime and is therefore incurring the runtime cost.

 If the **Affect Dynamic** box is true, then this light will affect any model that is **not** lightmapped. If the **Affect Lightmapped** box is true, then this light will also affect any model that **is** lightmapped.

Note, that a light cannot have **Lightmap** true and **Affect Lightmapped** true, as this would mean that a lightmap is generated for a model and the light will add the same lighting at runtime, i.e. doing the same work twice.

![Shadows][3]

The shadows setting for lightmap lights is the same as for dynamic lights, except in this case the shadow calculations are done once when generating the lightmaps so it is much cheaper to enable shadows on lightmap lights. See the section on [Shadows][4].

### Setting up models for baking

Each Model Component has to have lightmapping enabled on it for it to receive lightmaps. Lightmapping is enabled in the properties of the Model Component by checking the **Lightmapped** option.

![Model Component][5]

The **Shadows: Cast Lightmap** option determines if the model is casting shadows in the lightmap. In addition you can see the resolution of the lightmap texture generated and there is an option to apply a multiplier to this size. Lightmap size multipliers are discussed below.

### Common Light Settings

As you see there several combinations of light settings that can be used. These combinations all have a use-case and by using lights with different combinations you can balance high-quality visuals with performance.

<table>
<tr>
    <th>Lightmap</th><th>Affect Dynamic</th><th>Affect Lightmapped</th><th style="width: 50%;">Description</th>
</tr>
<tr>
    <td class="centered">false</td><td class="centered">true</td><td class="centered">false</td><td>This is the default dynamic light. Affects all non-lightmapped models.</td>
</tr>
<tr>
    <td class="centered">true</td><td class="centered">false</td><td class="centered">false</td><td>This light generates lightmaps for lightmapped models and is cheap to use at runtime. Most environmental lights would use this setting.</td>
</tr>
<tr>
    <td class="centered">true</td><td class="centered">true</td><td class="centered">false</td><td>This light generates lightmaps but also affects non-lightmapped models. It is useful if you have dynamic/moving entities that need to be lit with this light. For example, a prominent environment light that also should affect the player character.</td>
</tr>
<tr>
    <td class="centered">false</td><td class="centered">true</td><td class="centered">true</td><td>This light is a dynamic light which will affect both lightmapped and non-lightmapped models. For example, a flashlight would use this setting.</td>
</tr>
</table>

### Lightmap Size Multipliers

PlayCanvas will automatically decide what resolution lightmaps are required for a model. It calculates this value based on the size and geometry of the model. You can influence this calculation by modifiying the size multipler field in the Model Component.

![Global Settings][6]

There is also a global lightmap size multipler which affects all Model Components. You can also set the limit the maximum resolution for the generated lightmaps in order to conserve memory.

### Auto-unwrapping and UV1 generation

Lightmaps are always applied using the second set of UV co-ordinates (UV1) on the model asset. For best results we recommend that you add a second UV set in your 3D content tool to your model before you upload it to PlayCanvas.

For convenience, if your model hasn't got a UV1 set the PlayCanvas Editor can automatically unwrap and generate UV1 co-ordinates for the model.

![UV1 Missing][7]

If a model is missing a UV1 map you will see a warning in the model component when you enable lightmapping.

![Auto Unwrap][8]

To fix the warning select the model asset and open the **Pipeline** section. Click the **Auto-unwrap** button and wait for the progress bar to complete. Running auto-unwrap edits the model asset, so if you re-import the model from the source (e.g. upload a new FBX) the UV1's will be deleted and you will need to unwrap the model again.

The **padding** section determines the space between sections when the unwrapping occurs. If you see *"light bleeding"*, where light appears in the lightmaps that shouldn't be there, you can increase the padding to reduce the bleeding.

[1]: /images/user-manual/material-inspector/lightmap.jpg
[2]: /images/user-manual/lighting/lightmaps/spot-dynamic.jpg
[3]: /images/user-manual/lighting/lightmaps/shadows.jpg
[4]: /user-manual/graphics/lighting/shadows
[5]: /images/user-manual/lighting/lightmaps/model-settings.jpg
[6]: /images/user-manual/lighting/lightmaps/global-lightmap-settings.jpg
[7]: /images/user-manual/lighting/lightmaps/uv1-missing.jpg
[8]: /images/user-manual/lighting/lightmaps/auto-unwrap.jpg
[10]: /images/user-manual/lighting/lightmaps/sponza.jpg

