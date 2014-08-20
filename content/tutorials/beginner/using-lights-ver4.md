---
title: Using Lights V4
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/adamraz/lightingtutorial/ControllingLights4?overlay=false"></iframe>
*Press 1, 2 or 3 to enable/disable each of the three lights.*

In this tutorial we will show you how to use lights in PlayCanvas and to change light color and intensity. Note that there are many more controllable light features and properties. See the [API listing here][lights] for more details.

It is also important to be aware of the different limits for differing light properties, for example red, green and blue values are set between 0 and 1, but intensity reaches from 0 up to 10. ***Inputting values beyond these limits can create possibly undesirable behaviour, such as a negative intensity light that darkens the scene***.

##General setup
We added a spot light (attached to an assembly of a basic torch model), a point light attached to a sphere model and a sphere with a material that has its emissive color set to white, all in addition to the default directional light that is created for every new Pack. The controlling script was attached to the root entity. The sphere and torch were made children of a blank entity residing in the centre of the scene to enable easy rotation. The [full Designer scene and scripts can be accessed here][light tutorial].

##The Key Code
The key coding elements are as follows:

~~~javascript~~~
if (context.keyboard.wasPressed(pc.input.KEY_1)) { this.spot.light.enabled = !this.spot.light.enabled; }
~~~
This line enables/disables the light component of the 'spot' entity.

~~~javascript~~~
this.pivot1.rotate(0,dt*40,0);
~~~
Entity 'pivot1' is rotated.

~~~javascript~~~
this.c1 = new pc.Color(1,1,1,1);
~~~
A new color array is declared
~~~javascript~~~
this.frame1 += dt/2;
            var s = (Math.abs(Math.sin(this.frame1)/2));
            var r = 1-s;
            var g = s;
            var b = 0.55-s;
            this.c1.set(r, g, b);
            this.spot.light.color = this.c1;
            this.spot.light.intensity = 6*(1-s);
~~~
These lines assign values to r, g and b variables based on a sine wave and then assign these values to the previously declared color array via `c1.set(x, y, z)` and then onto the light property.


##Activating Light properties
The light properties, require assignment of a new value directly to the color and intensity property references as shown, in particular `light.color` requires the creation and use of a `pc.Color` array. Using `entity.light.color.r` to access and change the red value of a light's color will not register updates. Assigning the color or intensity to a new variable (e.g. ` c = this.spot.light.color`) and executing `c.r = 0.5` will only change a copy of the initial red color value now stored in c, leaving `this.spot.light.color.r` unchanged.

The full code used for the above PlayCanvas app is as follows.
~~~javascript~~~
pc.script.create('LightControl', function (context) {
    // Creates a new LightControl instance
    var LightControl = function (entity) {
        this.entity = entity;
    };

    LightControl.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.spot = context.root.findByName("SpotLight");
            this.point = context.root.findByName("PointLight");
            this.directional = context.root.findByName("DirectionalLight");
            this.pivot1 = context.root.findByName("Pivot1");
            this.pivot2 = context.root.findByName("Pivot2");
            this.pivot3 = context.root.findByName("Pivot3");
            this.frame1 = 0.5;
            this.c1 = new pc.Color(1,1,1,1);
            this.frame2 = 0;
            this.c2 = new pc.Color(1,1,1,1);
            this.frame3 = 0;
            this.c3 = new pc.Color(1,1,1,1);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (context.keyboard.wasPressed(pc.input.KEY_1)) { this.spot.light.enabled = !this.spot.light.enabled; }
            if (context.keyboard.wasPressed(pc.input.KEY_2)) { this.point.light.enabled = !this.point.light.enabled; }
            if (context.keyboard.wasPressed(pc.input.KEY_3)) { this.directional.light.enabled = !this.directional.light.enabled; }
           
            this.pivot1.rotate(0,dt*40,0);
            this.pivot2.rotate(0,-dt*60,0);
            this.pivot3.rotate(0,-dt*30,0);
            
            this.frame1 += dt/2;
            var s = (Math.abs(Math.sin(this.frame1)/2));
            var r = 1-s;
            var g = s;
            var b = 0.55-s;
            this.c1.set(r, g, b);
            this.spot.light.color = this.c1;
            this.spot.light.intensity = 6*(1-s);
            
            this.frame2 += dt/2;
            s = (Math.abs(Math.sin(this.frame2)/2));
            r = 0.55-s;
            g = 0.45+s;
            b = 1.0-s;
            this.c2.set(r, g, b);
            this.point.light.color = this.c2;
            this.point.light.intensity = 6*(1-s);
            
            this.frame3 += dt/4;
            s = (Math.abs(Math.sin(this.frame3)/2));
            r = 1.0-s;
            g = 0.75-s;
            b = 1.0-s;
            this.c3.set(r, g, b);
            this.directional.light.color = this.c3;
            this.directional.light.intensity = 6*s;
        }
    };

    return LightControl;
});
~~~

[lights]: /engine/api/stable/symbols/pc.fw.LightComponent.html
[light tutorial]:  https://playcanvas.com/adamraz/lightingtutorial