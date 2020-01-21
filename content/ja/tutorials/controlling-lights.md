---
title: Controlling Lights
template: tutorial-page.tmpl.html
tags: lighting
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405812/9D487A-image-75.jpg
---

<iframe src="https://playcanv.as/p/tiKpka9M/"></iframe>

*1, 2 または 3を押してスポット、ポイント、指向性ライトをそれぞれ有効／無効にします。*

このチュートリアルでは、PlayCanvasでライトを有効／無効にする方法と、ライトの色や強さを変更する方法を説明します。ライトの範囲など、他にも制御可能なライトの機能やプロパティはあります。詳細は[APIリスト][1] からご確認ください。

変動するライトプロパティには異なる制限があります。例えば、赤、緑、青の値は0と10に間で設定されますが強度は0から10まで上がることがあります。また、いくつかのライトには特有のプロパティがあります。例：スポットライトのコーン角度。

##ライティングコマンド

~~~javascript~~~
if (app.keyboard.wasPressed(pc.KEY_1)) {
    this.spot.light.enabled = !this.spot.light.enabled;
}
~~~
This line toggles on and off the light component of the 'spot' entity.

~~~javascript~~~
this.color1 = new pc.Color(1, 1, 1);
~~~
A new color array is declared, the first three values affect red, green and blue values respectively.
~~~javascript~~~
var s = Math.abs(Math.sin(1 + this.timer));
var r = 1-s/2;
var g = s-0.2;
var b = 0.55+s/2;
this.color1.set(r, g, b);
this.spot.light.color = this.color1;
this.spot.light.intensity = 10*s;
~~~
These lines assign values to r, g and b variables based on a sin wave and then assign these values to the previously declared color array via `color1.set(x, y, z)` and then onto the light property. The intensity is set to vary sinusoidally from the max light intensity value of 10 down to 0.

<div class="alert alert-warning">
 Using `entity.light.color.r` to access and change the red value of a light's color will not work. Only changes to the light property `color` are detected, so you must assign a complete `pc.Color` to the property e.g. `entity.light.color = new pc.Color(1, 1, 1);`.
</div>

##General setup
We added a spot light (attached to a parent assembly of a basic torch model), a point light attached to a parent sphere model, in addition to the default directional light that is created for every new Scene. The controlling script was attached to the root entity. The sphere and torch were made children of a blank entity residing in the centre of the scene to enable easy rotation. The [full Editor scene and scripts can be accessed here][2] in the 'controllingLights' Scene.

The full code used for the above PlayCanvas app is as follows.
~~~javascript~~~
var LightHandler = pc.createScript('lightHandler');

// initialize code called once per entity
LightHandler.prototype.initialize = function() {
    var app = this.app;

    this.spot = app.root.findByName("SpotLight");
    this.point = app.root.findByName("PointLight");
    this.directional = app.root.findByName("DirectionalLight");
    this.pivot1 = app.root.findByName("Pivot1");
    this.pivot2 = app.root.findByName("Pivot2");
    this.timer = 0;
    this.color1 = new pc.Color(1, 1, 1);
    this.color2 = new pc.Color(1, 1, 1);
    this.color3 = new pc.Color(1, 1, 1);
};

// update code called every frame
LightHandler.prototype.update = function(dt) {
    var app = this.app;

    this.pivot();

    if (app.keyboard.wasPressed(pc.KEY_1)) {
        this.spot.light.enabled = !this.spot.light.enabled;
    }
    if (app.keyboard.wasPressed(pc.KEY_2)) {
        this.point.light.enabled = !this.point.light.enabled;
    }
    if (app.keyboard.wasPressed(pc.KEY_3)) {
        this.directional.light.enabled = !this.directional.light.enabled;
    }

    // a counter that is used as input to sin the functions determining light properties for all lights.
    this.timer += dt;

    //these 3 code blocks assign color and intensity values that vary according to a sin function
    //all sin inputs are in radians
    var s = Math.abs(Math.sin(1 + this.timer));
    var r = 1-s/2;
    var g = s-0.2;
    var b = 0.55+s/2;
    this.color1.set(r, g, b);
    this.spot.light.color = this.color1;
    this.spot.light.intensity = 10*s;

    s = Math.abs(Math.sin(2 + this.timer));
    r = s/2;
    g = 0.25+s/2;
    b = 1.0-s;
    this.color2.set(r, g, b);
    this.point.light.color = this.color2;
    this.point.light.intensity = 10*s;

    s = Math.abs(Math.sin(3 + this.timer));
    r = 0.25+s/2;
    g = 0.75-s/2;
    b = 0.25+s/2;
    this.color3.set(r, g, b);
    this.directional.light.color = this.color3;
    this.directional.light.intensity = 3*(1-s);
};

// this function rotates all three lights about their parent entities (all at the centre of the scene) to easily create circular motion.
LightHandler.prototype.pivot = function () {
    this.pivot1.rotate(0, 2, 0);
    this.pivot2.rotate(0, -3, 0);
};
~~~

[1]: /engine/api/stable/symbols/pc.LightComponent.html
[2]: https://playcanvas.com/project/405812/overview/tutorial-controlling-lights

