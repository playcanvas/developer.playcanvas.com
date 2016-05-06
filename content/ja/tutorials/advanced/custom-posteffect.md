---
title: カスタムポストエフェクト
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="https://playcanv.as/p/vQBffMnK" ></iframe>

*このチュートリアルでは、GLSL内でエフェクトを作成するための、カスタムぽポストエフェクトを使う手順を説明します。*

## 概要

JavascriptやGLSLを使って、PlayCanvas上でポストエフェクトを作成することができます。ポストエフェクトはカメラから2Dでレンダリングされたイメージを扱うシェーダーです。画像に複数のポストエフェクトを適用することができますし、それぞれのエフェクトは前のエフェクトの結果を元に、エフェクトをかけることができます。

次のパラグラフで、ポストエフェクトを作る方法を説明します。[こちら][1]からポストエフェクトのいくつかをダウンロードすることができます。

## スクリプト

最初に、新しくスクリプトを作成する必要があります。このスクリプトは、ポストエフェクトのための [Shader Definition][2] 、そしてカメラへのポストエフェクトを追加するコードが含まれています。なお、このスクリプトには、[Camera component][3]のエンティティをアタッチする必要があります。以下をposteffect_example.jsとして、説明します。

```javascript
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
```

## エフェクト

次にポストエフェクトのための新しいクラスを作成する必要があります。このクラスは[pc.posteffect.PostEffect][4]から引き継がれます。posteffect_example.js 内の定義の前部分で、そのクラスの定義を行います。

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

## まとめ

ポストエフェクトに必要なコンポーネントが用意できました。次にすることは、さきほど定義したExamplePostEffect のインスタンスにカメラの [ポストエフェクトキュー][5]を追加することです。

```javascript
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
    };

    Posteffect_example.prototype = {
        initialize: function () {
            // create an instance of our effect
            var vert = app.assets.get(this.vertexShaderAssetId);
            var frag = app.assets.get(this.fragShaderAssetId);
            this.effect = new pc.ExamplePostEffect(app.graphicsDevice, vert.resource, frag.resource);
        },

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
```

これですべての説明が完了です。以下スクリプト全文となります。

```javascript
pc.script.attribute("vertexShaderAssetId", "asset", null, {type: "shader", max: 1, displayName: "Vertex Shader"});
pc.script.attribute("fragShaderAssetId", "asset", null, {type: "shader", max: 1, displayName: "Fragment Shader"});

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
```

カスタムシェーダーのより詳しいチュートリアルは [こちら][6]。

See the [Custom Post Effects project here][7].

[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[1]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[6]: /tutorials/advanced/custom-shaders
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/388378/overview/tutorial-custom-post-effect

