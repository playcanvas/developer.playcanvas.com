---
title: Viewport
sidebar_position: 4
---

![Viewport][1]

The viewport shows your scene as currently rendered. You can freely move around the scene by manipulating the Editor's current camera.

## Cameras

Initially the Editor is set to use the **Perspective** camera. This camera is as if a movie camera was floating in your scene. You can use the camera dropdown menu to view the scene using various other cameras.

![Camera Dropdown][2]

The **orthographic** cameras: Top, Bottom, Front, Back, Left, Right, let you view a version of the scene with no perspective. Useful for fine-tuning positions.

You can also use the camera menu to select any of the camera Entities in your scene. This way you can position your in-game camera exactly as required.

## Gizmos

![Gizmos][3]

The 3-Colored Axis you can see in the screenshot above is called a [Gizmo][4]. This is used to manipulate the transform matrix of the selected Entity. There are three types of Gizmo: Translate (with arrows on the ends of the axes); Rotate (which is made up of three colored rings) and Scale (with cubes on the ends of the axes).

## Render Mode

You can modify the viewport render mode using this drop-down menu in the top-right of the viewport:

![Viewport Render Mode Menu](/images/user-manual/editor/viewport/render-mode-menu.png)

It allows you to toggle wireframe rendering:

![Viewport Wireframe](/images/user-manual/editor/viewport/wireframe.png)

You can also visualize your scene in various debug render modes. This restricts the rendered scene to just show albedo, normals, AO, emission and more.

![Viewport Render Modes](/images/user-manual/editor/viewport/render-modes.png)

[1]: /images/user-manual/editor/viewport/viewport.jpg
[2]: /images/user-manual/editor/viewport/camera-dropdown.jpg
[3]: /images/user-manual/editor/viewport/gizmos.jpg
[4]: /user-manual/glossary#gizmo
