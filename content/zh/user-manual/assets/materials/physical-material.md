---
title: 物理学材质
layout: usermanual-page.hbs
position: 1
---

物理材质代表PlayCanvas可提供的最先进，最优质的材质模型。我们建议您使用物理着色模型。

### Offset & Tiling

<img loading="lazy" src="/images/user-manual/material-inspector/offset-tiling.jpg" width="300">

| Property          | Description |
|-------------------|-------------|
| Apply to all Maps | Uncheck this to apply offset and tiling values to individual maps. |
| Offset            | The offset in U and V to apply to the first UV channel referenced by maps in this material. |
| Tiling            | The scale in U and V to apply to the first UV channel referenced by maps in this material. |

### Ambient

环境属性决定了材质在环境光中如何被呈现。

<img loading="lazy" src="/images/user-manual/material-inspector/ambient.jpg" width="300">

| Property   | Description |
|------------|-------------|
| Tint       | Check this to multiply the scene's global ambient color with a material specific color. |
| Color      | The tint color to multiply the scene's global ambient color. |
| AO Texture | An ambient occlusion map containing pre-baked ambient occlusion. |

### Diffuse

漫反射属性决定了材质如何呈现场景中的动态光源的漫反射光。

<img loading="lazy" src="/images/user-manual/material-inspector/diffuse.jpg" width="300">

| Property   | Description |
|------------|-------------|
| Texture    | The diffuse map that specifies the per-pixel diffuse material color. If no diffuse map is set, the diffuse color is used instead. |
| Tint       | Check this to modulate the material's diffuse map with a material specific diffuse color. |
| Color      | If no diffuse map is set, this is the diffuse color of the material. If a diffuse map is set and tint is enabled, this color modulates the material's diffuse map. |

### Specular

高光属性决定了材质的高光颜色。也就是耀斑的颜色。

<img loading="lazy" src="/images/user-manual/material-inspector/specular.jpg" width="300">

| Property      | Description |
|---------------|-------------|
| Use Metalness | Toggle between specular and metalness workflow. |
| Specular Map  | The specular map that specifies the per-pixel specular color. If no specular map is set, the specular color is used instead. |
| Tint          | Check this to modulate the material's specular map with a material specific specular color. |
| Color         | If no specular map is set, this is the specular color of the material. If a specular map is set and tint is enabled, this color modulates the material's specular map. |
| Metalness Map | [Only when using metalness] This map specifies per-pixel metalness values. A value of 1 is metal and a value of 0 is non-metal. |
| Gloss Map     | The gloss map that specifies a per-pixel shininess value. The gloss map is modulated by the shininess property. |
| Glossiness    | A value determining the smoothness of a surface. For smaller shininess values, a surface is rougher and specular highlights will be broader. For larger shininess values, a surface is smoother and will exhibit more concentrated specular highlights (as the surface is polished and shiny). |

### Emissive

自发光属性可以控制材质如何发光(相对于反射光)。

<img loading="lazy" src="/images/user-manual/material-inspector/emissive.jpg" width="300">

| Property   | Description |
|------------|-------------|
| Texture    | The emissive map that specifies the per-pixel emissive color. If no emissive map is set, the emissive color is used instead. |
| Tint       | Check this to modulate the material's emissive map with a material specific emissive color. |
| Color      | If no emissive map is set, this is the emissive color of the material. If an emissive map is set and tint is enabled, this color modulates the material's emissive map. |
| Intensity  | A multiplier for emissive color that can achieve overbright effects for exceptionally bright emissive materials. |

### Opacity

不透明度属性设置了不透明度等级。

<img loading="lazy" src="/images/user-manual/material-inspector/opacity.jpg" width="300">

| Property   | Description |
|------------|-------------|
| Texture    | The opacity map that specifies the per-pixel opacity. The opacity map is modulated by the 'Amount' property. |
| Intensity  | The opacity of the material. This is a value between 0 (completely transparent) and 1 (completely opaque. It defaults to 1. |

### Normals

使用这个来指定法线贴图(本贴图决定材质的凹凸感 - 请注意，你在PlayCanvas中必须使用法线贴图，而不是高度图)

<img loading="lazy" src="/images/user-manual/material-inspector/normals.jpg" width="300">

| Property   | Description |
|------------|-------------|
| Bumpiness  | The strength of the applied normal map. This is a value between 0 (the normal map has no effect) and 2 (the effect of the normal map is exaggerated). It defaults to 1. |
| Texture    | The normal map that specifies the per-pixel surface normals. The normal map is modulated by the 'Bumpiness' property. |

### Parallax

视觉差贴图通过给予平面深度的错觉将法线贴图的映射效果进一步写实化。 请注意视觉差贴图只有在你已经设置了法线贴图到材质上时才会有效。

<img loading="lazy" src="/images/user-manual/material-inspector/parallax.jpg" width="300">

| Property    | Description |
|-------------|-------------|
| Height Map  | The height map that specifies the per-pixel strength of the parallax effect. White is full height and black is zero height. |
| Strength    | The strength of a parallax effect (a value between 0 and 2, defaulting to 1). |

### Environment

环境属性决定了这个材质将对环境产生怎样的影响

<img loading="lazy" src="/images/user-manual/material-inspector/environment.jpg" width="300">

| Property            | Description |
|---------------------|-------------|
| Sphere Map          | A sphere map texture asset that approximates environment reflection. If a sphere map is set, the Cube Map property will be hidden (since these properties are mutually exclusive). |
| Cube Map            | A cube map texture asset that approximates environment reflection (with greater accuracy than is possible with a sphere map). If a cube map is set, the Sphere Map property will be hidden (since these properties are mutually exclusive). |
| Reflectivity        | A factor to determine what portion of light is reflected from the material. This value defaults to 1 (full reflectivity). |
| Refraction          | A factor to determine what portion of light passes through the material. |
| Index of Refraction | Determines the amount of distortion of light passing through the material. |

### Light Map

光照贴图包含了预烘焙的漫反射光。使用光照贴图被认为是为了在运行时避免动态光照计算和烘焙的优化。

<img loading="lazy" src="/images/user-manual/material-inspector/lightmap.jpg" width="300">

| Property   | Description |
|------------|-------------|
| Texture    | The lightmap texture that contains pre-baked diffuse lighting. The lightmap requires the material to be applied to a mesh that has two UV sets. The lightmap uses the second set of UVs. |

### Other Render States

其他渲染状态给出了对一个网状物如何呈现指定的材料的额外的控制。

<img loading="lazy" src="/images/user-manual/material-inspector/other.jpg" width="300">

| Property        | Description |
|-----------------|-------------|
| Depth Test      | If checked, when a mesh with the material is rendered, a per pixel check is performed to determine if the pixel passes the engine's depth test. By default, the test is that the pixel must have a z depth less than or equal to whatever is already in the depth buffer. In other words, the mesh is only visible if nothing is in front of it. If unchecked, the mesh is rendered regardless of what is already in the depth buffer. Defaults to on. |
| Depth Write     | If checked, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. Defaults to on. |
| Cull            | Options are: <ul><li>None: Both front faces and back faces are rendered.</li><li>Front Faces: front faces are rendered and back faces are not.</li><li>Back Faces: back faces are rendered and front faces are not. This is the default.</li></ul> PlayCanvas dictates that a counter-clockwise vertex winding specifies a front face triangle. Note that backface culling is often good for performance because backface pixels are often overwritten (for convex meshes) which can result in redundant filling of pixels. |
| Blend Type      | Options are: <ul><li>None: The mesh is opaque. This is the default.</li><li>Normal: The mesh is transparent, like stained glass.</li><li>Additive: The mesh color is added to whatever has already been rendered to the frame buffer.</li><li>Pre-multiply: Like 'Normal' blending except it is assumed that the color of the mesh being rendered with this material has already been modulated by its alpha value.</li><li>Multiply: When rendered, the mesh color is multiplied by whatever has already been rendered to the frame buffer.</li></ul> |
| Shadow Sampling | Options are: <ul><li>Hard</li><li>PCF 3x3</li></ul> |
