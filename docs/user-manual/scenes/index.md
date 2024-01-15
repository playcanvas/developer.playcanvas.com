---
title: Scenes
sidebar_position: 9
---

Scenes contain:

* **Scene Hierarchy** which lists the order and structure of all Entities in your scene
* **Scene Settings** which contains properties about the scene

They are edited using the PlayCanvas Editor.

![][scene-list-png]

## Scene Hierarchy

The **Scene Hierarchy** is a graph of [Entities][entities] that can have [Components][components] to give these Entities behaviors such as having a mesh to render in the world or to play sound effects. They can also be given custom behavior with [scripts][scripts].

<img loading="lazy" src="/images/user-manual/scenes/scene-hierarchy.png" width="400" />

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

<img loading="lazy" src="/images/user-manual/scenes/scene-settings.png" width="500" />

[entities]: /user-manual/scenes/entities/
[components]: /user-manual/scenes/components/
[scripts]: /user-manual/scripting/
[scene-list-png]: /images/user-manual/scenes/scene-list.png
[project-settings]: /user-manual/editor/settings/
[settings-gravity]: /user-manual/editor/settings/#gravity
[settings-ambient]: /user-manual/editor/settings/#ambient-color
[settings-skybox]: /user-manual/editor/settings/#skybox
[settings-tonemapping]: /user-manual/editor/settings/#tonemapping
[settings-exposure]: /user-manual/editor/settings/#exposure
[settings-gamma]: /user-manual/editor/settings/#gamma-correction
[settings-fog]: /user-manual/editor/settings/#fog
[settings-lightmap]: /user-manual/editor/settings/#lightmapping
