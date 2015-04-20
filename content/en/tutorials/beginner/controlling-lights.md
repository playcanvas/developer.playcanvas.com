---
title: Controlling Lights
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/controllingLights?overlay=false"></iframe>

*Press 1, 2 or 3 to enable/disable the spot, point and directional lights respectively.*

In this tutorial we will show you how to enable/disable lights in PlayCanvas and to change light color and intensity. Note that there are many more controllable light features and properties, such as the light range. See the [API listing here][1] for more details.

It is also important to be aware of the different limits for differing light properties, for example red, green and blue values are set between 0 and 1, but intensity reaches from 0 up to 10. Also some lights have properties unique to them, such as the cone angles for the spot light.

##The lighting commands

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
We added a spot light (attached to a parent assembly of a basic torch model), a point light attached to a parent sphere model, in addition to the default directional light that is created for every new Pack. The controlling script was attached to the root entity. The sphere and torch were made children of a blank entity residing in the centre of the scene to enable easy rotation. The [full Editor scene and scripts can be accessed here][2] in the 'controllingLights' pack.



The full code used for the above PlayCanvas app is as follows.
~~~javascript~~~
pc.script.create('lightHandler', function (app) {
    // Creates a new LightHandler instance
    var LightHandler = function (entity) {
        this.entity = entity;
    };

    LightHandler.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.spot = app.root.findByName("SpotLight");
            this.point = app.root.findByName("PointLight");
            this.directional = app.root.findByName("DirectionalLight");
            this.pivot1 = app.root.findByName("Pivot1");
            this.pivot2 = app.root.findByName("Pivot2");
            this.timer = 0;
            this.color1 = new pc.Color(1, 1, 1);
            this.color2 = new pc.Color(1, 1, 1);
            this.color3 = new pc.Color(1, 1, 1);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
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
        },

        // this function rotates all three lights about their parent entities (all at the centre of the scene) to easily create circular motion.
        pivot: function (){
            this.pivot1.rotate(0, 2, 0);
            this.pivot2.rotate(0, -3, 0);

        }
    };

    return LightHandler;
});
~~~

[1]: /engine/api/stable/symbols/pc.LightComponent.html
[2]:  https://playcanvas.com/project/186/overview/tutorials
