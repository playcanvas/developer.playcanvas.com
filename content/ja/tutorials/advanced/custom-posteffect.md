---
title: カスタムポストエフェクト
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/posteffects?overlay=false" ></iframe>

*このチュートリアルでは、GLSL内でエフェクトを作成するための、カスタムぽポストエフェクトを使う手順を説明します。*

## 概要

JavascriptやGLSLを使って、PlayCanvas上でポストエフェクトを作成することができます。ポストエフェクトはカメラから2Dでレンダリングされたイメージを扱うシェーダーです。画像に複数のポストエフェクトを適用することができますし、それぞれのエフェクトは前のエフェクトの結果を元に、エフェクトをかけることができます。

次のパラグラフで、ポストエフェクトを作る方法を説明します。[こちら][1]からポストエフェクトのいくつかをダウンロードすることができます。

## スクリプト

最初に、新しくスクリプトを作成する必要があります。このスクリプトは、ポストエフェクトのための [Shader Definition][2] 、そしてカメラへのポストエフェクトを追加するコードが含まれています。なお、このスクリプトには、[Camera component][3]のエンティティをアタッチする必要があります。以下をposteffect_example.jsとして、説明します。

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

## エフェクト

次にポストエフェクトのための新しいクラスを作成する必要があります。このクラスは[pc.posteffect.PostEffect][4]から引き継がれます。posteffect_example.js 内の定義の前部分で、そのクラスの定義を行います。

~~~javascript~~~
pc.extend(pc.posteffect, function () {
    // コンストラクター - ポストエフェクトのインスタンスを作成する
    var ExamplePostEffect = function (graphicsDevice) {
        // エフェクトを定義するためのシェーダーについて
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

    // このエフェクトはpc.posteffect.PostEffectから引き継がれなければならない
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.posteffect.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // シェーダーへレンダリングするターゲットをセットする。カメラからイメージがレンダリングされます。
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

## まとめ

ポストエフェクトに必要なコンポーネントが用意できました。次にすることは、さきほど定義したExamplePostEffect のインスタンスにカメラの [ポストエフェクトキュー][5]を追加することです。

~~~javascript~~~
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
        // エフェクト内にインスタンスを作成する
        this.effect = new pc.posteffect.ExamplePostEffect(app.graphicsDevice);
    };

    Posteffect_example.prototype = {
        onEnable: function () {
            // スクリプトが実行可能になったとき、カメラのポストエフェクトキューへエフェクトを追加する
            this.entity.camera.postEffects.addEffect(this.effect, false);
        },

        onDisable: function () {
            // スクリプトが実行不可になったとき、カメラのポストエフェクトキューからエフェクトを削除する
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return Posteffect_example;

});
~~~

これですべての説明が完了です。以下スクリプト全文となります。

~~~javascript~~~
//--------------- ポストエフェクトの定義------------------------//
pc.extend(pc.posteffect, function () {
    // コンストラクター　ポストエフェクトのインスタンスの作成
    var ExamplePostEffect = function (graphicsDevice) {
        // シェーダーエフェクトを定義します。
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

//--------------- スクリプトの定義------------------------//
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
        // エフェクト内にインスタンスを作成する
        this.effect = new pc.posteffect.ExamplePostEffect(app.graphicsDevice);
    };

    Posteffect_example.prototype = {
        onEnable: function () {
            //スクリプトが実行可能になったとき、カメラのポストエフェクトキューへエフェクトを追加する
            this.entity.camera.postEffects.addEffect(this.effect, false);
        },

        onDisable: function () {
            // スクリプトが実行不可になったとき、カメラのポストエフェクトキューからエフェクトを削除する
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return Posteffect_example;

});
~~~

カスタムシェーダーのより詳しいチュートリアルは [こちら][6]。

[カスタムポストエフェクトパック][7] はこちらから確認できます。

[2]: /engine/api/stable/symbols/pc.Shader.html
[4]: /engine/api/stable/symbols/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[1]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[6]: /tutorials/advanced/custom-shaders
[5]: /engine/api/stable/symbols/pc.CameraComponent.html#postEffects
[7]: http://playcanvas.com/designer/186/scene/338140

