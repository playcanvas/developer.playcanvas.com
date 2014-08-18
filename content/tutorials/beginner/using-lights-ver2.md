---
title: Using Lights V2
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/adamraz/tutorials/ControllingLights2?overlay=false"></iframe>

*Use 1 and 2 to select between the spot lights and 3 to select the directional light.*
*Use the R,G,B keys to select the Red, Green, Blue or Intensity properties. Use LEFt and RIGHT to change values*
*Use the E key to enable/disable a light.*
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
            this.activeLight = this.spot1;
            context.keyboard.on(pc.input.EVENT_KEYDOWN, this.onKeyDown, this);
            context.keyboard.on(pc.input.EVENT_KEYUP, this.onKeyUp, this);
            this.needRefresh = true;
            this.activeProperty = 'intensity';
            this.maxValue = 10.0;
            this.minValue = 0.5;
            this.increment = 1.0;
       },

        onKeyDown: function (event) {
            // Check event.key to detect which key has been pressed
            // note using events for keys combines wasPressed() and isPressed() in a nice way, initial press is detected once, after a short pause continued press is the registered
            if (event.key === pc.input.KEY_LEFT) {
                if (this.activeProperty === 'intensity' && this.activeLight.light.intensity > this.minValue) {
                    this.changeProperty('intensity', -this.increment);
                } else if (this.activeLight.light.color[this.activeProperty] > this.minValue ) {
                    this.changeColor(this.activeProperty, -this.increment);
                    this.activeLight.light.refreshProperties();
                }
            }
            if (event.key === pc.input.KEY_RIGHT) {
                if (this.activeProperty === 'intensity' && this.activeLight.light.intensity < this.maxValue) {
                    this.changeProperty('intensity', this.increment);
                } else if (this.activeLight.light.color[this.activeProperty] < this.maxValue ) {
                    this.changeColor(this.activeProperty, this.increment);
                    this.activeLight.light.refreshProperties();
                }
            }
            
            if (event.key === pc.input.KEY_E) { this.activeLight.enabled = !this.activeLight.enabled; }
            if (event.key === pc.input.KEY_1) { this.activeLight = this.spot1; }
            if (event.key === pc.input.KEY_2) { this.activeLight = this.spot2; }
            if (event.key === pc.input.KEY_3) { this.activeLight = this.directional; }
            if (event.key === pc.input.KEY_R) { this.activeProperty = 'r'; }
            if (event.key === pc.input.KEY_G) { this.activeProperty = 'g'; }
            if (event.key === pc.input.KEY_B) { this.activeProperty = 'b'; }
            
            if ((event.key === pc.input.KEY_R) || (event.key === pc.input.KEY_G) || (event.key === pc.input.KEY_B)) {
                this.needRefresh = true;
                this.maxValue = 1.00;
                this.minValue = 0.1;
                this.increment = 0.1;
            }
            
            if (event.key === pc.input.KEY_I) { 
                this.activeProperty = 'intensity';//some properties, such as intensity, do not require refreshProperties()
                this.maxValue = 10;
                this.minValue = 0.5;
                this.increment = 1.0;
                this.needRefresh = true;
            }
            // Calling preventDefault() prevents original browser events like scrolling from cursor keys.   
            event.event.preventDefault();
        },
        
        changeColor: function (propertyName, increment) {
            this.activeLight.light['color'][propertyName] += increment;
        },
        
        changeProperty: function (propertyName, increment) {
           this.activeLight.light[propertyName] += increment;
        }
      
    };

    return LightHandler;
});
~~~

[lights]: /engine/api/stable/symbols/pc.fw.LightComponent.html
[light tutorial]:  











p