---
title: Capabilities
sidebar_position: 2
---

WebXR exposes various capabilities and new APIs through Modules, which are integrated into the PlayCanvas Engine for ease of use. The currently supported WebXR APIs are:

| Feature              | 説明 |
|----------------------|-------------|
| Immersive [VR][1] and [AR][2] | Session types |
| [Anchors][4]         | Create anchors in space that are reliably positioned in relation to real-world geometry |
| [Persistent Anchors][5] | Allows to persist anchors between sessions |
| [Camera Color][6]    | Provides access to a color texture of a view |
| [Depth Sensing][8]        | Provides access to depth texture and distance querying, that can be used for virtual object occlusion with real-world geometry and reliable object placement |
| [DOM Overlay][7]     | For monoscopic screens, allows to overlay DOM elements over an AR view |
| Hand Tracking        | Optical hand tracking that tracks each joint of a hand |
| Hit Testing          | Allows to ray cast real-world geometry using a ray, to get position and rotation of the intersection point |
| 画像のトラッキング       | Dynamic tracking of provided images, their position, and orientation |
| [Input Sources][3]   | Various input source types such as controllers, hands, screen taps, gaze, and more |
| Light Estimation     | Estimates real-world illumination by providing dominant directional light direction, color, and intensity as well as ambient light information in the form of spherical harmonics |
| Mesh Detection       | Access to a representation of a real-world geometry in the form of a 3D mesh, with its position, orientation, and semantic labels. This can represent furniture, screens, rooms, and other types of static geometry |
| Plane Detection      | Similar to mesh detection, that provides geometry in the form of planes, their position, orientation, vertices, and semantic labels. This can represent large flat surfaces, such as floors, walls, ceilings, windows, doors, and more |

[1]: /user-manual/xr/vr/
[2]: /user-manual/xr/ar/
[3]: /user-manual/xr/input-sources/
[4]: /user-manual/xr/ar/anchors/
[5]: /user-manual/xr/ar/anchors/#persistence
[6]: /user-manual/xr/ar/camera-color/
[7]: /user-manual/xr/ar/dom-overlay/
[8]: /user-manual/xr/ar/depth-sensing/
