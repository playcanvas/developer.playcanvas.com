---
title: Пользовательские пост-эффекты
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="https://playcanv.as/p/3je0YP0q/" ></iframe>

*Этот урок использует пользовательские пост-эффекты для создания эффектов в GLSL*

## Обзор

Вы можете создавать свои эффекты постобработки в PlayCanvas, с небольшим количеством Javascript и GLSL. Эти пост-эффекты - шейдеры, которые оперируют готовым 2D изображением с камеры. Вы можете применить несколько эффектов к Вашему изображению - каждый пост-эффект использует в качестве исходного изображения выходное изображение предыдущего эффекта.

В следующих параграфах мы продемонстрируем как создавать свои собственные пост-эффекты. Вы можете посмотреть уже существующие эффекты [здесь] [1].

## Сценарий

Во-первых, мы должны создать новый сценарий. Он будет содержать [объявление шейдера][2] для нашего пост-эффекта а также код, который будет добавлен к камере. Сценарий должен быть прикреплён к сущности с [компонентом камеры][3]. Мы назовём сценарий posteffect_example.js: 

## Эффект

Теперь мы должны создать новый класс для нашего пост-эффекта. Этот класс должен происходить от [pc.posteffect.PostEffect][4]. Мы определим этот класс внутри нашего posteffect_example.js непосредственно перед определением сценария:

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

Больше уроков по пользовательским шейдерам [тут][6].

See the [Custom Post Effects project here][7].

[1]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[6]: /tutorials/advanced/custom-shaders
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/406045

