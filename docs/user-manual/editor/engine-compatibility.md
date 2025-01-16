---
title: Engine Compatibility
sidebar_position: 12
---

## Introduction

The Editor supports two major release streams of the engine:

- The latest release of engine v1.x.x (**Engine V1**)
    - This provides support for WebGL1 and WebGL2, but does not receive any new features, and only critical bug fixes.
- The latest release of engine v2.x.x (**Engine V2**)
    - This has no support for WebGL1 and supports WebGL2 and WebGPU for rendering, and receives new features and fixes.

You are free to switch between these at any time.

### Switching projects between Engine V1 and V2

This process will involve migration and updating of scripts given differences in our Engine API between Engine V1 and V2. All details regarding the engine changes can be found [here](/user-manual/engine/migrations)

To initiate this navigate to the settings panel and click the `SWITCH TO ENGINE V2` button to convert your project to using Engine V2 (This will require a confirmation before converting). If you wish to switch back, there is a `SWITCH TO ENGINE V1` button in the same location for Project V2.

> **Note:** Once the switch has been confirmed **all users** in the current project will be reloaded.

<img src='/img/user-manual/editor/editor-v2/switch-engine.png' width='400' />

#### Scripting

Given the changes in API for the engine you may wish to test your project in the launcher with Engine V1 or V2. You can do this by enabling the Force Engine V2 or Force Engine V1 checkboxes in the launcher options:

<img src='/img/user-manual/editor/editor-v2/launcher-options.png' width='600' />

Additionally conditionally checking the Engine version at runtime will allow your script to be made compatible with both versions of the engine, during the transition time.

<img src='/img/user-manual/editor/editor-v2/scripting-engine.png' width='300' />

#### Gamma and Tonemap

These settings were previously found under the rendering section of the settings panel. However in Engine V2 these have been moved to be set per camera. Each camera component will now have these additional fields:

<img src='/img/user-manual/editor/editor-v2/gamma-tonemap.png' width='400' />

The viewport settings are now located inside the editor section of the settings panel:

<img src='/img/user-manual/editor/editor-v2/viewport-camera.png' width='400' />

> **Note:** If you change the settings per camera and switch back to Project V1 your per camera settings will be lost.

#### sRGB Textures

<img src='/img/user-manual/editor/editor-v2/srgb-texture.png' width='400' />

For Engine V2 textures are required to be set or not set as sRGB depending on their use case. This is found under the texture asset panel as shown above. These will be automatically set however if there are conflicts the console will display them:

<img src='/img/user-manual/editor/editor-v2/console-texture.png' width='600' />

Click on the console message to open up the conflicting reference. If you wish to use the same texture for both sRGB and not, it is advised to duplicate your texture to cover both cases.
