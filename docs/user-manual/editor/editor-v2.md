---
title: Editor V2
sidebar_position: 12
---

# Introduction to Editor V2

This page is to outline all the changes regarding the update of the Editor to support Engine V2. This process consists of two parts:

- Updating the Editor internally from running Engine V1 to Engine V2
- Migrating projects over from using Engine V1 to Engine V2 (This will be referred to as **Project V1** and **Project V2**)

Both Project V1 and Project V2 will support the latest major and previous minor of these respective versions and you are free to switch between these as required. If your project requires WebGL 1.0 then you will need to remain on Project V1. Otherwise updating to Project V2 is highly recommended as all new features will be added to Engine V2 only.

## Editor changes

This Editor has been updated to now use Engine V2 internally. This change may cause some small visual changes for some projects. We have collated a list of the most common issues and how to fix them.

### Cubemap edge filtering

<img src='/img/user-manual/editor/editor-v2/edge-filter.png' width='600' />

If your cubemap skybox has pronounced edges such as this example above, navigate to your cubemap asset and delete and regenerate the prefiltered data to remove them.

<img src='/img/user-manual/editor/editor-v2/prefiltered-data.png' width='400' />

### Gamma Correction

<img src='/img/user-manual/editor/editor-v2/gamma-compare.png' />

If you have a project with a gamma correction set to 1.0 your scene may appear more saturated such as the example above (New editor on the right). Under the rendering settings change your gamma correction to 2.2 to achieve a similar effect as before.

> **Note:** Your scene will be rendered with more correct linear workflow however there will be slight visual changes related to lighting and alpha blending.

<img src='/img/user-manual/editor/editor-v2/gamma-tonemap-settings.png' width='400' />

## Project V1 to V2

This process will involve migration and updating of scripts given differences in our Engine API between Engine V1 and V2. All details regarding the engine changes can be found here [LINK].

To initiate this navigate to the settings panel and click the `SWITCH TO ENGINE V2` button to convert your project to using Engine V2 (This will require a confirmation before converting). If you wish to switch back, there is a `SWITCH TO ENGINE V1` button in the same location for Project V2.

> **Note:** Once the switch has been confirmed **all users** in the current project will be reloaded.

<img src='/img/user-manual/editor/editor-v2/switch-engine.png' width='400' />

### Scripting

Given the changes in API for the engine you may wish to test your project in the launcher with Engine V1 or V2. You can do this by enabling the Force Engine V2 or Force Engine V1 checkboxes in the launcher options:

<img src='/img/user-manual/editor/editor-v2/launcher-options.png' width='600' />

Additionally conditionally checking the Engine version at runtime will allow your script to be made compatible with both versions of the engine, during the transition time.

<img src='/img/user-manual/editor/editor-v2/scripting-engine.png' width='300' />

### Gamma and Tonemap

These settings were previously found under the rendering section of the settings panel. However in Engine V2 these have been moved to be set per camera. Each camera component will now have these additional fields:

<img src='/img/user-manual/editor/editor-v2/gamma-tonemap.png' width='400' />

The viewport settings are now located inside the editor section of the settings panel:

<img src='/img/user-manual/editor/editor-v2/viewport-camera.png' width='400' />

> **Note:** If you change the settings per camera and switch back to Project V1 your per camera settings will be lost.

### sRGB Textures

<img src='/img/user-manual/editor/editor-v2/srgb-texture.png' width='400' />

For Engine V2 textures are required to be set or not set as sRGB depending on their use case. This is found under the texture asset panel as shown above. These will be automatically set however if there are conflicts the console will display them:

<img src='/img/user-manual/editor/editor-v2/console-texture.png' width='600' />

Click on the console message to open up the conflicting reference. If you wish to use the same texture for both sRGB and not, it is advised to duplicate your texture to cover both cases.
