---
title: Using Lights V1
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/adamraz/lightingtutorial/ControllingLights3?overlay=false"></iframe>


In this tutorial we will show you how to use lights in PlayCanvas and to change light color and intensity. Note that there are many more controllable light features and properties. See the [API listing here][lights] for more details.

##Activating Light properties
Some light properites, such as intensity work automatically, but others, such as color settings, require the explicit use of the `refresh Properties()` function (which will recompile shaders, applying material properties). Just remember that if you are not seeing an updated light - try calling the `refreshProperties()` function!

***List of functions needing refresh?***

It is also important to be aware of the different limits for differing light properites, for example red, green and blue values are values between 0 and 1, but intensity reaches from 0 up to 10. ***Inputting values beyond these limits can create possibly undesireable behaviour, such as a negative intensity light that darkens the scene***.

##General setup
We added a spot light (attached to an assembly of cylinders that form a torch model), a point light attached to a sphere model and a sphere with a material that has its emissive color set to white, to the default directional light that is created for every new Pack. Individual scripts were created and attached to each light's entity. The [full Designer scene and scripts can be accessed here][light tutorial].



##The Lighting commands

The main lighting commands to access the light component of an entity and affect values are:

~~~javascript~~~
this.entity.light.color.r = 0.5;

var x = this.activeLight.light.color;
x.set(0, 1, 0, 1)
this.activeLight.light.color = x;

var c = new pc.Color(1,1,1);
this.activeLight.color = c;

this.entity.light.intensity = 9.5;

this.entity.light.enabled = true;

this.entity.light.refreshProperties();
~~~

In order, the lines of code above: change the red component of the light, change R,G,B and alpha values in one call, set the intensity, turn the light component of the entity on, and forces a refresh of the lighting. ***Note that these functions must be called as shown to impact the lighting properties, assigning any of first four lines will simply create a stand-alone copy of the value and not impact the original light properties.***

In this case the entity attached to the script is accessed but, as shown below, the `findByName('name')` method can be used to access other entities.


The full code used for the above Playcanvas app is as follows. For the directional light (and near-identically for the spot light):
~~~javascript~~~
pc.script.create('dirLight', function (context) {
    // Creates a new DirLight instance
    var DirLight = function (entity) {
        this.entity = entity;
    };

    DirLight.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.frame = 0;
            this.switch1 = 1;
            this.switch2 = 1;
            this.switch3 = 1;
            this.switch4 = 1;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.frame += 1;
            if (this.frame >= 6) {    
                this.entity.light.color.r += 0.01*this.switch1;
                this.entity.light.color.g += 0.015*this.switch2;
                this.entity.light.color.b += 0.020*this.switch3;
                this.entity.light.intensity += 0.05*this.switch4;
                
               
                if(this.entity.light.color.r > 0.99){ this.switch1 = -1 } 
                if(this.entity.light.color.g > 0.99){ this.switch2 = -1 }
                if(this.entity.light.color.b > 0.99){ this.switch3 = -1 }
                if(this.entity.light.intensity > 4.99){ this.switch4 = -1 }
                
                if(this.entity.light.color.r < 0.09){ this.switch1 = 1 } 
                if(this.entity.light.color.g < 0.09){ this.switch2 = 1 }
                if(this.entity.light.color.b < 0.09){ this.switch3 = 1 }
                if(this.entity.light.intensity < 0.99){ this.switch4 = 1 }
                
                this.entity.light.refreshProperties(); 
                this.frame = 0;
            }
        }
    };

    return DirLight;
});
~~~


The spheres are simply translated back and forth using `translateLocal(x, y, z)`




[lights]: /engine/api/stable/symbols/pc.fw.LightComponent.html
[light tutorial]:  