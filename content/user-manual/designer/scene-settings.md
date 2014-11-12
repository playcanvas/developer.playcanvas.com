---
title: Scene Settings
template: page.tmpl.html
position: 6
---

The Scene Settings panel allows you to set up global properties for your scene. The properties that are settable are:

* Render Settings
  * Ambient light
  * Fog
  * Shadow distance
  * Gamma correction
* Physics Settings
  * Gravity

The panel can be accessed by selecting 'Show Scene Settings' from Designer's View menu:

<img alt="Scene Settings Menu Option" src="/images/platform/scene_settings/scene_settings_view_menu.png" />

This will show the Scene Settings panel to the right of Designer's 3D View:

<img alt="Scene Settings Panel" src="/images/platform/scene_settings/scene_settings_panel_default.png" />

## Render Settings

Render settings affect the rendering of all model components in your scene.

### Global Ambient

The color of the scene's ambient light source. PlayCanvas allows you to create directional, point and spot lights. These lights account for direct light that falls on objects. But in reality, light actually bounces around the environment and we call this indirect light. A global ambient light is a crude approximation of this and allows you to set a light source that appears to shine from all directions. The global ambient color is multiplied with the Ambient property of a Phong Material to add a contribution to the final color of an object.

Here is a scene with Global Ambient turned off (set to black):

<img alt="No Ambient Light" src="/images/platform/scene_settings/scene_settings_ambient_off.png" />

And here's the same scene with a red ambient color:

<img alt="Red Ambient Light" src="/images/platform/scene_settings/scene_settings_ambient_on.png" />

### Fog Type

The Fog Type property can be used to control an approximation of an ambient fog in your scene. Here is an example of fog being enabled:

<img alt="Fog" src="/images/platform/scene_settings/scene_settings_fog_linear.png" />

The types available are as follows:

* None - Fog is disabled
* Linear - Fog fades in linearly between a Fog Start and Fog End distance
* Exp - Fog fades in from the view position according to an exponential function
* Exp2 - Fog fades in from the view position according to an exponential squared function

### Fog Color

The color of the fog. This color is blended with a surface's color more as the fog fades in.

### Fog Start

The distance in scene units from the viewpoint from where the fog starts to fade in.

### Fog End

The distance in scene units from the viewpoint from where the fog reaches a maximum. Any objects beyond this distance will be rendered with the fog color.

### Fog Density

The fog density controls the rate at which fog fades in for Exp and Exp2 fog types. Larger values cause fog to fade in more quickly. Fog density must be a positive number.

### Shadow Distance

The shadow distance is the maximum distance from the camera beyond which shadows that come from Directional Lights are no longer visible. Smaller values produce more detailed shadows. The closer the limit the less shadow data has to be mapped to, and represented by, any shadow map; shadow map pixels are mapped spatially and so the less distance the shadow map has to cover, the smaller the pixels and so the more resolution any shadow has. 

### Gamma Correction

Computer screens are set up to output not physically linear, but perceptually linear (sRGB) signal. However, for correct appearance when performing lighting calculations, color textures must be converted to physically linear space, and then fully the lit image must be fit again into sRGB. Rendering with gamma correction enabled reduces the number of ugly, overly saturated highlights and better preserves color after lighting, and it's generally recommended that this be enabled in your scene. The following image shows a simple scene with a sphere. On the left the scene has been gamma corrected while on the right, the scene is uncorrected.

<img alt="Gamma correction comparison" width="640" src="/images/platform/scene_settings/scene_settings_gamma_correction.png" />

To find out more about gamma correction, read [this GPU Gems chapter](http://http.developer.nvidia.com/GPUGems3/gpugems3_ch24.html).

## Physics Settings

Physics settings affect the simulation of all the rigid body components in your scene.

### Gravity

Gravity is the acceleration applied every frame to all rigid bodies in your scene. By default, it is set to -9.8 meters per second per second, which essentially approximates Earth's gravity. If you are making a game in space, you might want to set this to 0, 0, 0 (zero g).
