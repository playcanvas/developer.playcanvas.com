---
title: Custom Post Effects
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="https://playcanv.as/p/3je0YP0q/" ></iframe>

*This tutorial uses a custom post effect to create an effect in GLSL*

## Overview

You can create your own post effects in PlayCanvas, with a bit of Javascript and GLSL. Post effects are shaders that operate on the 2D rendered image from a camera. You can apply multiple post effects to your image - each effect uses the output of the previous effect as its input.

In the next paragraphs we will demonstrate how to create your own post effects. You can see examples of existing post effects [here][1].

## The script

First we need to create a new script. This script will contain the [Shader Definition][2] for our post effect and also code that will add the post effect to the camera. This script needs to be attached to an Entity with a [Camera component][3]. We'll call this script posteffect_example.js:

## The effect

Now we need to create a new class for our post effect. This class will derive from [pc.posteffect.PostEffect][4]. We will define this class inside our posteffect_example.js script just before the script definition:

```javascript
pc.extend(pc, function () {
    // Constructor - Creates an instance of our post effect
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Our effect must derive from pc.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Set the input render target to the shader. This is the image rendered from our camera
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Draw a full screen quad on the output target. In this case the output target is the screen.
            // Drawing a full screen quad will run the shader that we defined above
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());
```

## Wrap up

We now have all the required components for our post effect. All we need to do is add an instance of the ExamplePostEffect that we defined above to our camera's [post effect queue][5]. Here's the full listing:

```javascript
//--------------- POST EFFECT DEFINITION------------------------//
pc.extend(pc, function () {
    // Constructor - Creates an instance of our post effect
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Our effect must derive from pc.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Set the input render target to the shader. This is the image rendered from our camera
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Draw a full screen quad on the output target. In this case the output target is the screen.
            // Drawing a full screen quad will run the shader that we defined above
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());

//--------------- SCRIPT DEFINITION------------------------//
var PosteffectExample = pc.createScript('posteffectExample');

PosteffectExample.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

PosteffectExample.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

// initialize code called once per entity
PosteffectExample.prototype.initialize = function() {
    var effect = new pc.ExamplePostEffect(this.app.graphicsDevice, this.vs.resource, this.fs.resource);

    // add the effect to the camera's postEffects queue
    var queue = this.entity.camera.postEffects;
    queue.addEffect(effect);

    // when the script is enabled add our effect to the camera's postEffects queue
    this.on('enable', function () {
        queue.addEffect(effect, false);
    });

    // when the script is disabled remove our effect from the camera's postEffects queue
    this.on('disable', function () {
        queue.removeEffect(effect);
    });


};
```

For more tutorials on custom shaders look [here][6].

See the [Custom Post Effects project here][7].

[1]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[6]: /tutorials/advanced/custom-shaders
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/406045

