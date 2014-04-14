---
title: Camera Component
template: page.tmpl.html
---

The 'camera' component enables an entity to render a scene from a certain viewpoint.

![Component Interface](/images/platform/component_camera.png)

## Properties

<table class="table">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Clear Color</td><td>The background color used to clear the screen every frame.</td></tr>
    <tr><td>Projection</td><td>The projection type of the camera. Options are:<ul><li>Perspective</li><li>Orthographic</li></ul></td></tr>
    <tr><td>Field of View</td><td>The angle between top and bottom clip planes of a perspective camera. This value has no effect for orthographic cameras.</td></tr>
    <tr><td>Ortho Height</td><td>The distance in world units between the top and bottom clip planes of an orthographic camera. This value has no effect for perspective cameras.</td></tr>
    <tr><td>Near Clip</td><td>The distance in camera space from the camera's eye point to the near clip plane.</td></tr>
    <tr><td>Far Clip</td><td>The distance in camera space from the camera's eye point to the far clip plane.</td></tr>
    <tr><td>Activate</td><td>If selected, the camera will be used as the initial target for rendering in a loaded scene.</td></tr>
</table>

## Scripting Interface

You can control a camera component's properties using a [script component](/tools/designer/components/script.html). The camera component's scripting interface is [here](/engine/api/stable/symbols/pc.fw.CameraComponent.html).