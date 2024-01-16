---
title: カスタムポストエフェクト
tags: [posteffects]
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406045/11D659-image-75.jpg"
---

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/p/3je0YP0q/" title="Custom Post Effects"></iframe>
</div>

*このチュートリアルでは、GLSLのカスタムポストエフェクトを使用してエフェクトを作成します。*

## 概要

PlayCanvasでは、JavaScriptとGLSLを使用して独自のポストエフェクトを作成できます。ポストエフェクトは、カメラからの2Dレンダリングされたイメージに対して作用するシェーダーです。イメージに複数のポストエフェクトを適用でき、それぞれのエフェクトは前のエフェクトの出力を入力として使用します。

以下の段落では、独自のポストエフェクトを作成する方法を説明します。既存のポストエフェクトの例は、[ここにあります][1]。

## スクリプト

最初に新しいスクリプトを作成する必要があります。このスクリプトには、ポストエフェクトの[シェーダー定義][2]と、ポストエフェクトをカメラに追加するコードが含まれます。このスクリプトは、[Cameraコンポーネント][3]を持つエンティティにアタッチする必要があります。スクリプト名は「posteffect_example.js」とします。

## エフェクト

次に、ポストエフェクト用の新しいクラスを作成する必要があります。このクラスは [pc.posteffect.PostEffect][4] から派生します。このクラスの定義は、スクリプトの定義の直前に posteffect_example.js スクリプト内に記述します。

```javascript
pc.extend(pc, function () {
    // コンストラクタ (Constructor) - ポストエフェクトのインスタンスを作成
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // エフェクトのシェーダ定義
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // このエフェクトはpc.PostEffectから派生しなければなりません
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // すべてのポストエフェクトはシェーダが必要とするパラメータを設定し、
        // さらに画面上でエフェクトをレンダリングするrenderメソッドを実装する必要があります
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // レンダリングされた画像であるinputTargetをシェーダに設定します
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // 全画面の四角形を描画(drawFullscreenQuad) します。出力ターゲット (outputTarget) はスクリーンです
            // 全画面の四角形を描画 (drawFullscreenQuad) すると、上で定義したシェーダが実行されます 
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());
```

## まとめ

これで、ポストエフェクトに必要なすべてのコンポーネントが揃いました。定義したExamplePostEffectのインスタンスを、カメラの[post effect queue][5]に追加するだけです。以下が完全なリストです。

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

カスタムシェーダーの詳細については[こちら][6]を参照してください。

Custom Post Effectsは[こちら][7]。

[1]: https://github.com/playcanvas/engine/tree/master/scripts/posteffects
[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/scenes/components/camera
[6]: /tutorials/custom-shaders/
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/406045
