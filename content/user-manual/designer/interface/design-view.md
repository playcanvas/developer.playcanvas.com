---
title: Design View
template: page.tmpl.html
---

<img alt="Design View" width="640" height="480" src="/images/platform/design_view.png" />

The Design View shows you the scene rendered by your Pack. You can freely move around the scene by manipulating the Designer's current camera. 

Initially the Designer is in single view mode, showing you the view from the *Pespective* camera. The *Perspective* camera is one of several built in cameras that you can use to view your scene. The other cameras use an *Orthographic* projection which means they don't show perspective, this is useful for judging distances and lining up objects more precisely. The other camera views are: *Orthographic*, a free camera using an orthographic projection; *Top/Bottom* cameras fixed above and below the scene; *Left/Right* cameras fixed either side and *Front/Back* camera ahead or behind the scene. You can switch between these cameras by right-clicking with the mouse on the Design View and using Camera context menu.

Using the *Toggle Quad View* command in the menu, or by pressing the spacebar you can toggle between single view and quad view. In quad view mode four cameras are display simultaneously. The *Front*, *Side*, *Top* and also the *Perspective* views. Quad view is great for aligning objects in 3D space as you can see the object from all angles at once.

The 3-Colored Axis you can see in the screenshot above is called a [Gizmo](/glossary#gizmo). This is used to manipulate the transform matrix of the selected Entity. There are three types of Gizmo: Translate with arrows on the ends of the axes; Scale with cubes on the ends of the axes and Rotate which is made up of three colored rings.
