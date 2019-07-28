---
title: Alternatives to ammo.js
template: usermanual-page.tmpl.html
position: 6
---

ammo.js is perhaps the most popular and well known JavaScript physics engine. It is highly versatile and can generate high fidelity simulations. But it has quite high performance and memory requirements. Therefore, you should investigate whether it is indeed the best choice for your application. For example, if you are making a 2D game, a 2D physics engine might be more appropriate.

As it happens, there are several alternatives to ammo.js:

<table class="table table-striped table-bordered">
    <tr style="text-align:center"><th style="text-align:center">Physics Engine</th><th style="text-align:center">JS</th><th style="text-align:center">WASM</th><th style="text-align:center">2D</th><th style="text-align:center">3D</th><th style="text-align:center">PlayCanvas Integration</th></tr>
    <tr><td style="text-align:center"><a href="https://github.com/kripken/box2d.js">box2d.js</a></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td></td><td></td></tr>
    <tr><td style="text-align:center"><a href="https://github.com/liabru/matter-js">Matter.js</a></td><td style="text-align:center">&#x2713;</td><td></td><td style="text-align:center">&#x2713;</td><td></td><td></td></tr>
    <tr><td style="text-align:center"><a href="https://github.com/schteppe/p2.js">p2.js</a></td><td style="text-align:center">&#x2713;</td><td></td><td style="text-align:center">&#x2713;</td><td></td><td style="text-align:center"><a href="https://github.com/playcanvas/playcanvas-p2.js">Yes</a></td></tr>
    <tr><td style="text-align:center"><a href="https://github.com/schteppe/cannon.js">cannon.js</a></td><td style="text-align:center">&#x2713;</td><td></td><td></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"><td></td></tr>
    <tr><td style="text-align:center"><a href="https://github.com/lo-th/Oimo.js">Oimo.js</a></td><td style="text-align:center">&#x2713;</td><td></td><td></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"><td></td></tr>
</table>

While there is currently only one existing PlayCanvas integration for the p2.js engine, it should be straighforward to create additional integrations for the other engines listed using a similar approach.

In December 2018, Nvidia open sourced the [PhysX][1] physics engine. While there is no JS/WASM port of PhysX yet, it is perhaps the most competitive physics runtime compared to Bullet/ammo.js. When a web port becomes available, it will be added to the table above.

[1]: https://github.com/NVIDIAGameWorks/PhysX

