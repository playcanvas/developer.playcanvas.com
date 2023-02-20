---
title: 摄影机
layout: usermanual-page.hbs
position: 5
---

摄像机组件允许一个实体从不同的视角渲染场景

使用摄像机面板右上角的切换键可以开启或关闭摄像机。在启用的状态下，摄像机将会渲染场景中每一个帧。

![摄像机组件][1]

## Properties

| Property        | Description |
|-----------------|-------------|
| Clear Buffers   | Controls how the camera's render target is cleared before rendering each frame. The camera maintains two types of buffer: the color buffer which stores the visible image and a depth buffer that stores information about the distance of a rendered pixel in relation to the position of the camera. The buffers can be cleared independently: <ul><li>Color: If selected, the camera will explicitly clear its render target to the chosen clear color before rendering the scene.</li><li>Depth: If selected, the camera will explicitly clear the depth buffer of its render target before rendering the scene.</li></ul> |
| Clear Color     | The color used to clear the camera's render target.  This property is only displayed if 'Clear Color Buffer' is selected. |
| Projection      | The projection type of the camera. Options are: <ul><li>Perspective</li><li>Orthographic</li></ul> |
| Frustum Culling | If selected, the camera will only render mesh instances whose axis-aligned bounding boxes intersect with the camera's view frustum. Otherwise, the entire scene will be rendered regardless of visibility. |
| Field of View   | The angle between top and bottom clip planes of a perspective camera. This property is only displayed if 'Projection' is set to 'Perspective'. |
| Ortho Height    | The distance in world units between the top and bottom clip planes of an orthographic camera. This property is only displayed if 'Projection' is set to 'Orthographic'. |
| Near Clip       | The distance in camera space from the camera's eye point to the near clip plane. |
| Far Clip        | The distance in camera space from the camera's eye point to the far clip plane. |
| Priority        | A number that defines the order in which camera views are rendered by the engine. Smaller numbers are rendered first. |
| 视口        | A rectangle that specifies the viewport onto the camera's attached render target. This allows you to implement features like split-screen or picture-in-picture. It is defined by normalized coordinates (0 to 1) in the following format: <ul><li>x: The lower left x coordinate</li><li>y: The lower left y coordinate</li><li>w: The width of the rectangle</li><li>h: The height of the rectangle</li></ul> |

## Scripting Interface

可以通过[脚本组件][2]来修改摄像机组件的属性。摄像机组件的脚本接口在[这里][3].

[1]: /images/user-manual/scenes/components/component-camera.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.CameraComponent.html
