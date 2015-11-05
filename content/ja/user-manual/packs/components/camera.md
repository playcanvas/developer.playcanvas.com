---
title: Camera
template: usermanual-page.tmpl.html
position: 4
---

カメラコンポーネントを使用すれば、エンティティは特定のビューポイントからシーンをレンダリングできます。

The camera component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the camera will render the scene every frame.

![Camera component][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Clear Buffers</td><td>Controls how the camera's render target is cleared before rendering each frame. The camera maintains two types of buffer: the color buffer which stores the visible image and a depth buffer that stores information about the distance of a rendered pixel in relation to the position of the camera. The buffers can be cleared independently:
        <ul>
            <li>Color: If selected, the camera will explicitly clear its render target to the chosen clear color before rendering the scene.</li>
            <li>Depth: If selected, the camera will explicitly clear the depth buffer of its render target before rendering the scene.</li>
        </ul>
    </td></tr>
    <tr><td>Clear Color</td><td>The color used to clear the camera's render target.  This property is only displayed if 'Clear Color Buffer' is selected.</td></tr>
    <tr><td>Projection</td><td>The projection type of the camera. Options are:
        <ul>
            <li>Perspective</li>
            <li>Orthographic</li>
        </ul>
    </td></tr>
    <tr><td>Frustum Culling</td><td>If selected, the camera will only render mesh instances whose axis-aligned bounding boxes intersect with the camera's view frustum. Otherwise, the entire scene will be rendered regardless of visibility.</td></tr>
    <tr><td>Field of View</td><td>The angle between top and bottom clip planes of a perspective camera. This property is only displayed if 'Projection' is set to 'Perspective'.</td></tr>
    <tr><td>Ortho Height</td><td>The distance in world units between the top and bottom clip planes of an orthographic camera. This property is only displayed if 'Projection' is set to 'Orthographic'.</td></tr>
    <tr><td>Near Clip</td><td>The distance in camera space from the camera's eye point to the near clip plane.</td></tr>
    <tr><td>Far Clip</td><td>The distance in camera space from the camera's eye point to the far clip plane.</td></tr>
    <tr><td>Priority</td><td>A number that defines the order in which camera views are rendered by the engine. Smaller numbers are rendered first.</td></tr>
    <tr><td>Viewport</td><td>A rectangle that specifies the viewport onto the camera's attached render target. This allows you to implement features like split-screen or picture-in-picture. It is defined by normalised coordinates (0 to 1) in the following format:
        <ul>
            <li>x: The lower left x coordinate</li>
            <li>y: The lower left y coordinate</li>
            <li>w: The width of the rectangle</li>
            <li>h: The height of the rectangle</li>
        </ul>
    </td></tr>
</table>

## スクリプティングインターフェイス

You can control a camera component's properties using a [script component][2]. The camera component's scripting interface is [here][3].

[1]: /images/user-manual/components/component-camera.png
[2]: /user-manual/packs/components/script
[3]: /en/api/pc.CameraComponent.html

