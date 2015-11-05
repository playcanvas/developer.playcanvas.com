---
title: Пользовательские пост-эффекты
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/posteffects?overlay=false" ></iframe>

*Этот урок использует пользовательские пост-эффекты для создания эффектов в GLSL*

## Обзор

Вы можете создавать свои эффекты постобработки в PlayCanvas, с небольшим количеством Javascript и GLSL. Эти пост-эффекты - шейдеры, которые оперируют готовым 2D изображением с камеры. Вы можете применить несколько эффектов к Вашему изображению - каждый пост-эффект использует в качестве исходного изображения выходное изображение предыдущего эффекта.

В следующих параграфах мы продемонстрируем как создавать свои собственные пост-эффекты. Вы можете посмотреть уже существующие эффекты [здесь] [1].

## Сценарий

Во-первых, мы должны создать новый сценарий. Он будет содержать [объявление шейдера][2] для нашего пост-эффекта а также код, который будет добавлен к камере. Сценарий должен быть прикреплён к сущности с [компонентом камеры][3]. Мы назовём сценарий posteffect_example.js: 

~~~javascript~~~
pc.script.create('posteffect_example', function (app) {
    var Posteffect_example = function (entity) {
        this.entity = entity;
    };

    Posteffect_example.prototype = {
        initialize: function () {
        }
    };

    return Posteffect_example;
});
~~~

## Эффект

Теперь мы должны создать новый класс для нашего пост-эффекта. Этот класс должен происходить от [pc.posteffect.PostEffect][4]. Мы определим этот класс внутри нашего posteffect_example.js непосредственно перед определением сценария:

~~~javascript~~~
pc.extend(pc.posteffect, function () {
    // Constructor - Creates an instance of our post effect
    var ExamplePostEffect = function (graphicsDevice) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            // Our vertex shader will pass the vertex position
            // to the fragment shader. And it will make the uv's
            // range from [0,0] for the bottom left corner to [1,1]
            // for the top right corner
            vshader: [
                "attribute vec2 aPosition;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = vec4(aPosition, 0.0, 1.0);",
                "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
                "}"
            ].join("\n"),
            // The fragment shader transforms the green channel of our image
            // to be a function of the x,y coordinates. This is just an example
            // you can imagine doing more complicated calculations here depending on
            // the effect you want to create
            fshader: [
                "precision " + graphicsDevice.precision + " float;",
                "",
                "uniform sampler2D uColorBuffer;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main() {",
                    "vec4 texel = texture2D(uColorBuffer, vUv0);",
                    " texel.g = vUv0.x * vUv0.x / vUv0.y;",
                    "gl_FragColor = vec4(texel.rgb, texel.a);",
                "}"
            ].join("\n")
        });
    }

    // Our effect must derive from pc.posteffect.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.posteffect.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Set the input render target to the shader. This is the image rendered from our camera
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Draw a full screen quad on the output target.
            // In this case the output target is the screen.
            // Drawing a full screen quad will run the shader that we defined above
            pc.posteffect.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());
~~~

## Wrap up

We now have all the required components for our post effect. All we need to do is add an instance of the ExamplePostEffect that we defined above to our camera's [post effect queue][5]:

~~~javascript~~~
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
        // create an instance of our effect
        this.effect = new pc.posteffect.ExamplePostEffect(app.graphicsDevice);
    };

    Posteffect_example.prototype = {
        onEnable: function () {
            // when the script is enabled add our effect to the camera's postEffects queue
            this.entity.camera.postEffects.addEffect(this.effect, false);
        },

        onDisable: function () {
            // when the script is disabled remove our effect from the camera's postEffects queue
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return Posteffect_example;

});
~~~

And that's it! Here is the full script:

~~~javascript~~~
//--------------- POST EFFECT DEFINITION------------------------//
pc.extend(pc.posteffect, function () {
    // Constructor - Creates an instance of our post effect
    var ExamplePostEffect = function (graphicsDevice) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: [
                "attribute vec2 aPosition;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = vec4(aPosition, 0.0, 1.0);",
                "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
                "}"
            ].join("\n"),
            fshader: [
                "precision " + graphicsDevice.precision + " float;",
                "",
                "uniform sampler2D uColorBuffer;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main() {",
                    "vec4 texel = texture2D(uColorBuffer, vUv0);",
                    " texel.g = vUv0.x * vUv0.x / vUv0.y;",
                    "gl_FragColor = vec4(texel.rgb, texel.a);",
                "}"
            ].join("\n")
        });
    }

    // Our effect must derive from pc.posteffect.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.posteffect.PostEffect);

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
            pc.posteffect.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());

//--------------- SCRIPT DEFINITION------------------------//
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
        // create an instance of our effect
        this.effect = new pc.posteffect.ExamplePostEffect(app.graphicsDevice);
    };

    Posteffect_example.prototype = {
        onEnable: function () {
            // when the script is enabled add our effect to the camera's postEffects queue
            this.entity.camera.postEffects.addEffect(this.effect, false);
        },

        onDisable: function () {
            // when the script is disabled remove our effect from the camera's postEffects queue
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return Posteffect_example;

});
~~~

Больше уроков по пользовательским шейдерам [тут][6].

Смотрите сцену с пользовательскими эффектами [здесь][7].

[2]: /engine/api/stable/symbols/pc.Shader.html
[4]: /engine/api/stable/symbols/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[1]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[6]: /tutorials/advanced/custom-shaders
[5]: /engine/api/stable/symbols/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/editor/scene/338140

