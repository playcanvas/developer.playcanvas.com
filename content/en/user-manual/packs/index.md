---
title: Scenes
layout: usermanual-page.hbs
position: 9
---

Scenes contain:

* **Scene Hierarchy** which lists the order and structure of all Entities in your scene
* **Scene Settings** which contains properties about the scene

They are edited using the PlayCanvas Editor.

![][scene-list-png]

## Scene Hierarchy

The **Scene Hierarchy** is a graph of [Entities][entities] that can have [Components][components] to give these Entities behaviors such as having a mesh to render in the world or to play sound effects. They can also be given custom behavior with [scripts][scripts].

<img src="/images/user-manual/scenes/scene-hierarchy.png" width="400px">

## Scene Settings
**Scene Settings** contain global rendering and physics information and properties about the scene. These can be edited in the project [settings][project-settings] within the Editor.

The full list of Scene Settings are:

* [Physics gravity][settings-gravity] (1)
* [Global ambient color][settings-ambient] (2)
* [Skybox][settings-skybox] (3)
* [Tonemapping][settings-tonemapping] (4)
* [Exposure][settings-exposure] (5)
* [Gamma Correction][settings-gamma] (6)
* [Fog][settings-fog] (7)
* [Lightmap properties][settings-lightmap] (8)

<img src="/images/user-manual/scenes/scene-settings.png" width="500px">

[entities]: /user-manual/packs/scene-hierarchy/entities/
[components]: /user-manual/packs/scene-hierarchy/components/
[scripts]: /user-manual/scripting/
[scene-list-png]: /images/user-manual/scenes/scene-list.png
[project-settings]: /user-manual/designer/settings/
[settings-gravity]: /user-manual/designer/settings/#gravity
[settings-ambient]: /user-manual/designer/settings/#ambient-color
[settings-skybox]: /user-manual/designer/settings/#skybox
[settings-tonemapping]: /user-manual/designer/settings/#tonemapping
[settings-exposure]: /user-manual/designer/settings/#exposure
[settings-gamma]: /user-manual/designer/settings/#gamma-correction
[settings-fog]: /user-manual/designer/settings/#fog
[settings-lightmap]: /user-manual/designer/settings/#lightmapping
