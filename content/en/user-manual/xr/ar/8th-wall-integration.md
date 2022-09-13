---
title: 8th Wall Integration
layout: usermanual-page.hbs
position: 2
---

## 8th Wall Integration

[8th Wall][1] is a platform that offers tools to create interactive augmented reality experiences through the web. It has a reach of over 3.5B users, and supports World tracking, Image tracking and Face tracking. In 2018, it added full integration with PlayCanvas.

8th Wall’s documentation provides a [Getting Started with PlayCanvas][2] page, and they also provide a number of [Starter Projects][3] to help new users get started.

## Getting started with 8th Wall

To add 8th Wall integration to your project, first head to **Settings -> External Scripts.**

![External Scripts][4]

Once there, add two URLs to your External Scripts array:
- https://cdn.8thwall.com/web/xrextras/xrextras.js
- Your personal app key link, available in the 8th Wall Console.

Afterwards, head to **Settings -> Rendering**.
- Uncheck ‘Prefer WebGL 2.0’
- Check Transparent Canvas

After these steps, you should be able to use 8th Wall’s library without issue. To begin tracking an AR camera in your scene, simply call:

```javascript
XR8.PlayCanvas.runXr( {camera, app}, config )
```

For further information, refer to 8th Wall’s [Getting Started with PlayCanvas][2] section.

[1]: https://www.8thwall.com/
[2]: https://www.8thwall.com/docs/web/#xr8playcanvas
[3]: https://playcanvas.com/user/the8thwall
[4]: /images/user-manual/xr/ar/8th-wall-external-scripts.png