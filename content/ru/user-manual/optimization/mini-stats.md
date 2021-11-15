---
title: Mini Stats
template: usermanual-page.tmpl.html
position: 3
---

Mini stats is a lightweight graphical display of an application's key performance statistics. It shows draw call count, frame time, CPU load and (where supported) GPU load.

Editor users can enable the mini-stats panel via the Launch button menu:

<img alt="Launch Menu" width="600" src="/images/user-manual/optimization/mini-stats/launch-menu-mini-stats.png" />

Clicking on the mini-stats will cycle through three supported sizes:

<img alt="Mini Stats" width="411" src="/images/user-manual/optimization/mini-stats/mini-stats.gif" />

The information displayed is as follows:

* **DrawCalls** - The number of rendered objects dispatched every frame. Each draw call has a cost on the CPU and GPU, so minimizing this number is sensible.
* **Frame** - The total time in milliseconds for the browser to process each frame.
* **GPU** - Shows the time in milliseconds to render each frame by the GPU. This stat is only shown if the underlying WebGL implementation supports the extension `EXT_disjoint_timer_query` (WebGL 1.0) or `EXT_disjoint_timer_query_webgl2` (WebGL 2.0). You can confirm whether your browser supports either of these extensions by visiting [WebGL Report][1].
* **CPU** - Shows the time in milliseconds to render each frame by the CPU.

The CPU and GPU graphs display a breakdown of the update and render portion of the frame using red and green respectively.

## Using Mini-Stats Outside of the Editor

While the mini-stats panel is incorporated into the Editor's Launch page, you can also use it independent of the Editor. The source code can be found [here][2]. Simply build `playcanvas-extras.js`, include it in your project and call:

~~~javascript
    const miniStats = new pcx.MiniStats(app);
~~~

The ['Engine-only' examples][3] all do this.

[1]: https://webglreport.com/
[2]: https://github.com/playcanvas/engine/tree/master/extras/mini-stats
[3]: https://playcanvas.github.io/

