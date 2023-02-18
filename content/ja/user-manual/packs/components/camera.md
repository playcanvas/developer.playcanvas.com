---
title: カメラ
layout: usermanual-page.hbs
position: 5
---

カメラコンポーネントは、エンティティが特定の視点からシーンをレンダリングすることを可能にします。

カメラコンポーネントはコンポーネントパネルの右上のチェックボックスで有効と無効を切り替えることができます。有効になった場合、カメラはシーンを毎フレームレンダリングします。

![カメラコンポーネント][1]

## Properties

| Property        | 説明 |
|-----------------|-------------|
| Clear Buffers   | Controls how the camera's render target is cleared before rendering each frame. The camera maintains two types of buffer: the color buffer which stores the visible image and a depth buffer that stores information about the distance of a rendered pixel in relation to the position of the camera. The buffers can be cleared independently: <ul><li>Color: If selected, the camera will explicitly clear its render target to the chosen clear color before rendering the scene.</li><li>Depth: If selected, the camera will explicitly clear the depth buffer of its render target before rendering the scene.</li></ul> |
| Clear Color（クリアカラー）     | The color used to clear the camera's render target.  This property is only displayed if 'Clear Color Buffer' is selected. |
| Projection      | The projection type of the camera. Options are: <ul><li>Perspective</li><li>Orthographic</li></ul> |
| Frustum Culling | If selected, the camera will only render mesh instances whose axis-aligned bounding boxes intersect with the camera's view frustum. Otherwise, the entire scene will be rendered regardless of visibility. |
| Field of View   | The angle between top and bottom clip planes of a perspective camera. This property is only displayed if 'Projection' is set to 'Perspective'. |
| Ortho Height    | The distance in world units between the top and bottom clip planes of an orthographic camera. This property is only displayed if 'Projection' is set to 'Orthographic'. |
| Near Clip       | The distance in camera space from the camera's eye point to the near clip plane. |
| Far Clip        | The distance in camera space from the camera's eye point to the far clip plane. |
| Priority        | A number that defines the order in which camera views are rendered by the engine. Smaller numbers are rendered first. |
| ビューポート        | A rectangle that specifies the viewport onto the camera's attached render target. This allows you to implement features like split-screen or picture-in-picture. It is defined by normalized coordinates (0 to 1) in the following format: <ul><li>x: The lower left x coordinate</li><li>y: The lower left y coordinate</li><li>w: The width of the rectangle</li><li>h: The height of the rectangle</li></ul> |

## Scripting Interface

[スクリプトコンポーネント][2]を使用して、カメラのコンポーネントのプロパティを制御することができます。カメラコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-camera.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.CameraComponent.html
