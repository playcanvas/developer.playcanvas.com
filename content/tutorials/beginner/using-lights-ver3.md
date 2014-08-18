---
title: Using Lights V3
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/adamraz/tutorials/ControllingLights?overlay=false"></iframe>

*Use 1 and 2 to select between the spot lights and 3 to select the directional light.*
*Use the R,G,B keys to cycle through the amount of red, green and blue light.*
*Use the E key to enable/disable a light and the I key to cycle through light intensity values.*
*The full code used is shown at the bottom of this page.*


In this tutorial we will show you how to use lights in PlayCanvas and to change light color and intensity. Note that there are many more controllable light features and properties. See the [API listing here][lights] for more details.

##Activating Light properties
Some light properites, such as intensity work automatically, but others, such as color settings, require the explicit use of the `refresh Properties()` function (which will recompile shaders, applying material properties). Just remember that if you are not seeing an updated light - try calling the `refreshProperties()` function!

***List of functions needing refresh?***

It is also important to be aware of the different limits for differing light properites, for example red, green and blue values are values between 0 and 1, but intensity reaches from 0 up to 10. ***Inputting values beyond these limits can create possibly undesireable behaviour, such as a negative intensity light that darkens the scene***.

##General setup
We simply added two spot lights to the default directional light that is created for every new Pack. The script was attached to an empty Entity and the second spot light's light component was disabled. The [full Designer scene and scripts can be accessed here][light tutorial]. 



##The Lighting commands

The main lighting commands simply access the light component of the relevant entity and affect values in the following ways:

~~~javascript~~~
this.entity.light.color.r = 0.5;

this.activeCamera.light.color.set(0, 1, 0, 1)

this.entity.light.intensity = 9.5;

this.entity.light.enabled = true;

this.entity.light.refreshProperties();
~~~

In order, the lines of code above: change the red component of the light, change R,G,B and alpha values in one call, set the intensity, turn the light component of the entity on, and forces a refresh of the lighting. ***Note that these functions must be called as shown to impact the lighting properties, assigning any of first four lines will simply create a stand-alone copy of the value and not impact the original light properties.***

In this case the entity attached to the script is accessed but, as shown below, the `findByName('name')` method can be used to access other entities.


The full code used for the above Playcanvas app is as follows:

~~~javascript~~~
pc.script.create('lightHandler', function (context) {
    // Creates a new LightHandler instance
    var LightHandler = function (entity) {
        this.entity = entity;
    };

    LightHandler.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.spot1 = context.root.findByName("SpotLight1");
            this.spot2 = context.root.findByName("SpotLight2");
            this.directional = context.root.findByName("DirectionalLight");
            this.activeCamera = this.spot1;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (context.keyboard.wasPressed(pc.input.KEY_R)) {
                if (this.activeCamera.light.color.r > 0.91){
                    this.activeCamera.light.color.r = 0.1;
                } else {
                    this.activeCamera.light.color.r += 0.1;
                }
                this.activeCamera.light.refreshProperties();
            }
            if (context.keyboard.wasPressed(pc.input.KEY_G)) {
                if (this.activeCamera.light.color.g > 0.91){
                    this.activeCamera.light.color.g = 0.1;
                } else {
                    this.activeCamera.light.color.g += 0.1;
                }
                this.activeCamera.light.refreshProperties();
            }
            if (context.keyboard.wasPressed(pc.input.KEY_B)) {
                if (this.activeCamera.light.color.b > 0.91){
                    this.activeCamera.light.color.b = 0.1;
                } else {
                    this.activeCamera.light.color.b += 0.1;
                }
                this.activeCamera.light.refreshProperties();
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_E)) {
                if (this.activeCamera.enabled === true){
                    this.activeCamera.enabled = false;
                } else {
                    this.activeCamera.enabled = true;
                }
            }
            if (context.keyboard.wasPressed(pc.input.KEY_I)) {
                //note that some properties, such as intensity, do not require refreshProperties()
                if (this.activeCamera.light.intensity >= 9.5){
                    this.activeCamera.light.intensity = 0.5;
                } else {
                    this.activeCamera.light.intensity += 0.5;
                }
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_1)) {
                this.activeCamera = this.spot1;
            }
            if (context.keyboard.wasPressed(pc.input.KEY_2)) {
               this.activeCamera = this.spot2;
            }
            if (context.keyboard.wasPressed(pc.input.KEY_3)) {
                this.activeCamera = this.directional;
            }
        },
        
        
    };

    return LightHandler;
});
~~~

[lights]: /engine/api/stable/symbols/pc.fw.LightComponent.html
[light tutorial]:  