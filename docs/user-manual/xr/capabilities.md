---
title: Capabilities
sidebar_position: 4
---

WebXR exposes various capabilities and new APIs through Modules, which are integrated into PlayCanvas Engine for ease of use. Currently supported WebXR APIs are:

* **Immersive [VR][1] and [AR][2]** session types.
* [**Anchors**][4] - create anchors in space that are reliably positioned in relation to real-world geometry.
* [**Persistent Anchors**][5] - allows to persist anchors between sessions.
* [**Camera Color**][6] - provides access to a color texture of a view.
* **Depth Sensing** - provides access to depth texture and distance querying, that can be used for virtual object occlusion with real-world geometry and reliable object placement.
* [**DOM Overlay**][7] - for monoscopic screens, allows to overlay DOM elements over an AR view.
* **Hand Tracking** - optical hand tracking that tracks each joint of a hand.
* **Hit Testing** - allows to ray cast real-world geometry using a ray, to get position and rotation of the intersection point.
* **Image Tracking** - dynamic tracking of provided images, their position, and orientation.
* [**Input Sources**][3] - various input source types such as controllers, hands, screen taps, gaze, and more.
* **Light Estimation** - estimates real-world illumination by providing dominant directional light direction, color, and intensity as well as ambient light information in the form of spherical harmonics.
* **Mesh Detection** - access to a representation of a real-world geometry in the form of a 3D mesh, with its position, orientation, and semantic labels. This can represent furniture, screens, rooms, and other types of static geometry.
* **Plane Detection** - similar to mesh detection, that provides geometry in the form of planes, their position, orientation, vertices, and semantic labels. This can represent large flat surfaces, such as floors, walls, ceilings, windows, doors, and more.

[1]: /user-manual/xr/vr/
[2]: /user-manual/xr/ar/
[3]: /user-manual/xr/input-sources/
[4]: /user-manual/xr/ar/anchors/
[5]: /user-manual/xr/ar/anchors/#persistence
[6]: /user-manual/xr/ar/camera-color/
[7]: /user-manual/xr/ar/dom-overlay/
