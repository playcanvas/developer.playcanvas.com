---
title: Runtime Lightmaps
template: usermanual-page.tmpl.html
position: 5
---

![Sponza][10]
*All the lighting in this scene is provided by lightmap textures*

Lightmap generation is the process of pre-calculating lighting information for a static scene and storing it in textures which are then applied on materials. This is an efficient way of lighting a scene if much of the light sources and geometry are static or environmental. And produces realistic results.

## Runtime LightMap Generation

PlayCanvas offers a very convenient solution to generating lightmaps. Using the standard light components in the Editor you choose which lights are used to bake lightmaps and which are used to dynamically light the scene at runtime. Lights that are set to bake are then used when the application starts to generate lightmaps which are used to light the scene.

The advantages are so:

* Lighting is not performed at **runtime**
* It is possible to use hundreds of static lights to light your scene
* Rendering lightmaps at runtime is, in many cases, faster than downloading many lightmap textures
* It is possible to mix static and dynamic lights in the Editor
* Rebaking can be performed at runtime
* Lightmaps are **HDR**
* Not only **Color** but **Direction** data can be baked as well, enabling some specularity on baked surfaces.

The disadvantage of using runtime lightmap generation is that currently we do not support baking global illumination, ambient occlusion or some of the other advanced features of a specialized baking tools.

<div class="alert-info">
    The use of <a href="/user-manual/optimization/batching">batching</a> is not compatible with the runtime lightmaps due to each lightmapped object requiring its own unique lightmap texture.
</div>

## Setting up lights for baking

Each Light Component contains settings for enabling lightmap baking. By default a new light is set to Dynamic.

![Light Component Settings][2]

By enabling the **Lightmap: Bake** setting the light will bake lightmaps for any lightmapped model that is in range.

**Direction** option specifies if light contribute to light direction information baking. This affects the specularity results if **Color and Direction** Lightmapping Mode is chosen in Scene Setting.

There are two other options that modify the lights behavior. These decide which models the light will affect at runtime. If either of these are true, then the light is operating at runtime and is therefore incurring the runtime cost.

If the **Affect Non-Baked** box is true, then this light will affect any model that is **not** lightmapped. If the **Affect Baked** box is true, then this light will also affect any model that **is** lightmapped.

Note, that a light cannot have **Lightmap** true and **Affect Baked** true, as this would mean that a lightmap is generated for a model and the light will add the same lighting at runtime, i.e. doing the same work twice.

![Light Component Shadow Settings][3]

The shadows setting for lightmap lights is the same as for dynamic lights, except in this case the shadow calculations are done once when generating the lightmaps so it is much cheaper to enable shadows on lightmap lights. See the section on [Shadows][4].

## Setting up models for baking

Each Model Component has to have lightmapping enabled on it for it to receive lightmaps. Lightmapping is enabled in the properties of the Model Component by checking the **Lightmapped** option.

![Model Component Settings][5]

The **Shadows: Cast Lightmap** option determines if the model is casting shadows in the lightmap. In addition you can see the resolution of the lightmap texture generated and there is an option to apply a multiplier to area of UV1 to affect its size. Lightmap size multipliers are discussed below.

## Common Light Settings

As you see there several combinations of light settings that can be used. These combinations all have a use-case and by using lights with different combinations you can balance high-quality visuals with performance.

<table>
<tr>
    <th>Bake</th><th>Affect Non-Baked</th><th>Affect Baked</th><th style="width: 50%;">Description</th>
</tr>
<tr>
    <td class="centered">false</td><td class="centered">true</td><td class="centered">false</td><td>This is the default dynamic light. Affects all non-lightmapped models.</td>
</tr>
<tr>
    <td class="centered">true</td><td class="centered">false</td><td class="centered">false</td><td>This light generates lightmaps for lightmapped models and has no cost at runtime. Most static environmental lights could use this setting.</td>
</tr>
<tr>
    <td class="centered">true</td><td class="centered">true</td><td class="centered">false</td><td>This light generates lightmaps but also affects non-lightmapped models. It is useful if you have dynamic/moving entities that need to be lit with this light. For example, a prominent environment light that also should affect the player character.</td>
</tr>
<tr>
    <td class="centered">false</td><td class="centered">true</td><td class="centered">true</td><td>This light is a dynamic light which will affect both lightmapped and non-lightmapped models.</td>
</tr>
</table>

## Lightmapping Settings

**Size Multiplier** affects all Model Components. PlayCanvas will automatically decide what resolution lightmaps are required for a model. It calculates this value based on the scale and geometry area size of the model. You can influence this calculation by modifying the size multiplier field in the Model Component and Global Settings.

On example of plane which is 1x1 unit (meter) in size. If Global Size Multiplier is 16 and multiplier on Model Component is 2, then it will generate 32x32 Lightmap Texture size (1sq/m * 16 * 2), means you will get 32x32 pixels on one square meter, which is about 3cm a pixel size.

**Max Resolution** sets the limit to maximum resolution for the generated lightmaps in order to conserve memory.

**Mode** allows to specify what data should be baked, only diffuse Color or Direction from pixel to light as well. Direction data is used to simulate simplistic specularity. Only single direction can be baked which leads to complexity when multiple lights overlap. Direction baking can be then set on individual lights as well.

![Global Lightmapping Settings][6]

## Auto-unwrapping and UV1 generation

Lightmaps are always applied using the second set of UV co-ordinates (UV1) on the model asset. For best results we recommend that you add a second UV set in your 3D content tool to your model before you upload it to PlayCanvas. You can [read on some recommendations for lightmap friendly UV's][9].

For convenience, if your model hasn't got a UV1 set the PlayCanvas Editor can automatically unwrap and generate UV1 co-ordinates for the model.

![Model Component: UV1 Missing][7]

If a model is missing a UV1 map you will see a warning in the model component when you enable lightmapping.

![Model Asset: Auto Unwrap Pipeline][8]

To fix the warning select the model asset and open the **Pipeline** section. Click the **Auto-unwrap** button and wait for the progress bar to complete. Running auto-unwrap edits the model asset, so if you re-import the model from the source (e.g. upload a new FBX) the precomputed UV1's will be lost, and if uploaded model has no UV1's, then you will need to auto-unwrap model again.

The **padding** section determines the space between sections when the unwrapping occurs. If you see *"light bleeding"*, where light appears in the lightmaps that shouldn't be there, you can increase the padding to reduce the bleeding.

[1]: /images/user-manual/material-inspector/lightmap.jpg
[2]: /images/user-manual/graphics/lighting/lightmapping/editor-lightmap-bake.png
[3]: /images/user-manual/graphics/lighting/lightmapping/editor-light-shadows.png
[4]: /user-manual/graphics/lighting/shadows
[5]: /images/user-manual/graphics/lighting/lightmapping/model-settings.png
[6]: /images/user-manual/graphics/lighting/lightmapping/lightmapping-settings.png
[7]: /images/user-manual/graphics/lighting/lightmapping/model-uv1-missing.png
[8]: /images/user-manual/graphics/lighting/lightmapping/auto-unwrap.jpg
[9]: /user-manual/graphics/lighting/lightmapping/#uv-mapping
[10]: /images/user-manual/graphics/lighting/lightmapping/sponza.jpg
[11]: /user-manual/optimization/batching
