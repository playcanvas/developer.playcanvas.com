---
title: Runtime Lightmaps
template: usermanual-page.tmpl.html
position: 5
---

![Sponza][10]
*在场景中的所有光照贴图都需通过光照贴图纹理设置*

Lightmap generation is the process of pre-calculating lighting information for a static scene and storing it in textures which are then applied on materials. This is an efficient way of lighting a scene if much of the light sources and geometry are static or environmental. And produces realistic results.

## 运行时生成光照贴图

PlayCanvas对于生成光照贴图有着十分便利的解决方式。使用在编辑器中的标准灯光组件，选择哪种光源被用来照亮光照贴图，哪种光源用于在在场景运行时的动态灯光。

它的优点有这些：

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

每个光源组件都含有进行光照贴图烘焙的设置。默认情况下一个新的光源会被设置为动态的。

![Light Component Settings][2]

通过启用 **光照贴图: 烘焙** 选项这个光源会为在范围内的任意可接收光照贴图的模型烘焙出光照贴图。

**Direction** option specifies if light contribute to light direction information baking. This affects the specularity results if **Color and Direction** Lightmapping Mode is chosen in Scene Setting.

这里有两外两个选项用于修改光照的效果。这些决定了哪些模型会在运行时被光照影响。如果它们都没有被启用，光照会在运行时进行渲染，因此增加运行消耗。

If the **Affect Non-Baked** box is true, then this light will affect any model that is **not** lightmapped. If the **Affect Baked** box is true, then this light will also affect any model that **is** lightmapped.

Note, that a light cannot have **Lightmap** true and **Affect Baked** true, as this would mean that a lightmap is generated for a model and the light will add the same lighting at runtime, i.e. doing the same work twice.

![Light Component Shadow Settings][3]

光照贴图的光源的阴影效果的设置与动态光源相同，除了在这种情况下阴影的计算只在 产生的光照贴图时完成一次，因此启用光照贴图灯光的阴影是一种非常节约性能的做法。详情参见[阴影]部分[4]。

#### 设置模型烘焙

每个模型组建都有是否接收光照贴图影响的选项。模型组件是否接受光照贴图通过**Lightmapped** 选项进行设置。

![Model Component Settings][5]

The **Shadows: Cast Lightmap** option determines if the model is casting shadows in the lightmap. In addition you can see the resolution of the lightmap texture generated and there is an option to apply a multiplier to area of UV1 to affect its size. Lightmap size multipliers are discussed below.

## 常见的光照设置

如你所见这里列举了几个常见的可用的光照设置。这些组合均有实现案例，通过使用不同的组合你可以获得性能与高品质平衡的视觉效果。

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

## 自动解压和创建法线组UV1

Lightmaps are always applied using the second set of UV co-ordinates (UV1) on the model asset. For best results we recommend that you add a second UV set in your 3D content tool to your model before you upload it to PlayCanvas. You can [read on some recommendations for lightmap friendly UV's][9].

为了使用方便，若你的模型并没有第二层的UV1集设置，PlayCanvas引擎会为它自动解析并生成UV1坐标。

![Model Component: UV1 Missing][7]

若一个模型丢失了UV1贴图，当你启用光照贴图功能时会在模型组件上看到一个警告。

![Model Asset: Auto Unwrap Pipeline][8]

To fix the warning select the model asset and open the **Pipeline** section. Click the **Auto-unwrap** button and wait for the progress bar to complete. Running auto-unwrap edits the model asset, so if you re-import the model from the source (e.g. upload a new FBX) the precomputed UV1's will be lost, and if uploaded model has no UV1's, then you will need to auto-unwrap model again.

 **填充**选项决定了当延展发生时面之间的距离。如果你看见了*"光照渗色"*，即光照贴图上出现了本不该出现的光线，可以增加填充系数，以减少渗漏。

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

