---
title: Shadows
template: page.tmpl.html
position: 8
---

Shadows are a great way to add realism to your games.

<img alt="Characters with shadow casting" width="640" src="/images/shadows/doom3_shadows.png"></img>

The PlayCanvas engine implements a shadowing algorithm called shadow mapping. It is completely cross-platform and so is guaranteed to work on both mobile and the desktop. Furthermore, shadows are free for everybody to use - you don't need a Pro account to make your game look great.

## Enabling Shadows

Enabling shadows is easy. First of all, indentify which lights in your scene you want to cast shadows. Note that only directional and spot lights can cast shadows. PlayCanvas does not support shadow casting from point lights.

Select the lights in the Pack Explorer and check the 'Cast Shadows' option:

<img alt="Enabling light shadow casting" src="/images/shadows/light_enable_shadows.png"></img>

Now you need to specify which graphical objects in your scene cast and receive shadows. By default, all model components receive shadows but do not cast them. Therefore, in order to see an entity cast shadows, select it in the Pack Explorer, locate the model component and check the 'Cast Shadows' option:

<img alt="Enabling model shadow casting" src="/images/shadows/model_enable_shadows.png"></img>

Shadows should now be visible in the Designer's 3D view.

## Tuning Shadows

The shadow mapping technique used by PlayCanvas has only finite resolution. Therefore, you may need to tune some values to make them look as good as possible.

### Shadow Distance

The shadow distance is the distance from the viewpoint beyond which shadows are no longer rendered. The smaller this value, the crisper your shadows will be. The problem is that the viewer will be able to see the shadows suddenly appear as the viewpoint moves around the scene. Therefore, you should balance this value based on how far the player can see into the distance and generally what looks good.

You can set the Shadow Distance for your scene in the Scene Settings panel.

### Shadow Resolution

Every light casts shadows via a shadow map. This shadow map can have a resolution of 256x256, 512x512, 1024x1024 or 2048x2048 and this value is also set in the light component's interface. The higher the resolution, the crisper the shadows. However, higher resolution shadows are more expensive to render so be sure to balance performance against quality.

### Shadow Bias

Shadow mapping can be prone to rendering artifacts that can look very ugly. If you notice bands of shadow or speckled patches where you do not expect, you should try tuning the shadow bias to resolve the problem. The shadow bias is not yet exposed via Designer's interface and so, currently, you have to set this value in a script. Here is an example showing how this can be done:

~~~javascript~~~
// Expose the light's shadow bias to Designer. Don't forget to select
// the 'Refresh Script Attributes' option from the Entity menu
pc.script.attribute('shadowBias', 'number', -0.0005, {
    displayName: 'Shadow Bias',
    decimalPrecision: 5
});

pc.script.create('light', function (context) {
    // Creates a new Light instance
    var Light = function (entity) {
        this.entity = entity;
        this.light = null;
    };

    Light.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.light = this.entity.light.model.lights[0];
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.light.setShadowBias(this.shadowBias);
        }
    };

    return Light;
});
~~~

To use this script:

* Add a script component to your light
* Create a script called light.js
* Open the script in the PlayCanvas Script Editor and copy the code above into it
* Save and close the code editor
* Select 'Refresh Script Attributes' from Designer's Entity menu

Now you should be able to see a 'Shadow Bias' property exposed for your light entity. Try tweaking the value and observe the effect on your shadows.