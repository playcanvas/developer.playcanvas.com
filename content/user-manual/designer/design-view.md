---
title: Design View
template: page.tmpl.html
position: 4
---

<img alt="Design View" width="640" height="480" src="/images/platform/design_view.png" />

The Design View shows you the scene rendered by your Pack. You can freely move around the scene by manipulating the Designer's current camera.

## Cameras

Initially the Designer is in single view mode, showing you the view from the *Perspective* camera. The *Perspective* camera is one of several built in cameras that you can use to view your scene. The other cameras use an *Orthographic* projection which means they don't show perspective, this is useful for judging distances and lining up objects more precisely. The other camera views are: *Orthographic*, a free camera using an orthographic projection; *Top/Bottom* cameras fixed above and below the scene; *Left/Right* cameras fixed either side and *Front/Back* camera placed/fixed ahead or behind the scene.

It is also possible to view your scene through one of the cameras in the Hierarchy. You can switch between these cameras by right-clicking with the mouse on the Design View and using the Camera context menu. Or from this dropdown:

<img alt="Cameras dropdown" src="/images/platform/cameras_dropdown.png" />

## Quad View

Using the *Toggle Quad View* command in the menu, or by pressing the spacebar you can toggle between single view and quad view. In quad view mode four cameras are display simultaneously. The *Front*, *Side*, *Top* and also the *Perspective* views. Quad view is great for aligning objects in 3D space as you can see the object from all angles at once.

## Gizmos

The 3-Colored Axis you can see in the screenshot above is called a [Gizmo][gizmo]. This is used to manipulate the transform matrix of the selected Entity. There are three types of Gizmo: Translate (with arrows on the ends of the axes); Scale (with cubes on the ends of the axes) and Rotate (which is made up of three colored rings).

## Entity Context Menu

Right clicking on an Entity in the 3D viewport will bring up the Entity context menu:

<img alt="Entity context menu" src="/images/platform/entity_context_menu.jpg" />

From here you can select one of the parents of the selected Entity or perform any other operation that is also available by right clicking on an Entity in the [Pack Explorer][pack_explorer].

[gizmo]: /user-manual/glossary#gizmo
[pack_explorer]: /user-manual/designer/pack-explorer