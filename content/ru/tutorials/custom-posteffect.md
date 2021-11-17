---
title: Custom Post Effects
template: tutorial-page.tmpl.html
tags: posteffects
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406045/11D659-image-75.jpg
---

<iframe src="https://playcanv.as/p/3je0YP0q/" ></iframe>

*Этот урок использует пользовательские пост-эффекты для создания эффектов в GLSL*

## Обзор

Вы можете создавать свои эффекты постобработки в PlayCanvas, с небольшим количеством Javascript и GLSL. Эти пост-эффекты - шейдеры, которые оперируют готовым 2D изображением с камеры. Вы можете применить несколько эффектов к Вашему изображению - каждый пост-эффект использует в качестве исходного изображения выходное изображение предыдущего эффекта.

В следующих параграфах мы продемонстрируем как создавать свои собственные пост-эффекты. Вы можете посмотреть уже существующие эффекты [здесь][1].

## Сценарий

Во-первых, мы должны создать новый сценарий. Он будет содержать [объявление шейдера][2] для нашего пост-эффекта а также код, который будет добавлен к камере. Сценарий должен быть прикреплён к сущности с [компонентом камеры][3]. Мы назовём сценарий posteffect_example.js: 

## Эффект

Теперь мы должны создать новый класс для нашего пост-эффекта. Этот класс должен происходить от [pc.posteffect.PostEffect][4]. Мы определим этот класс внутри нашего posteffect_example.js непосредственно перед определением сценария:

```javascript
pc.extend(pc, function () {
    // Конструктор - создает объект вашего эффекта
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // Шейдер, который определяет сам эффект
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Наш эффект находится в pc.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Каждый пост-эффект должен реализовывать метод,
        // который устанавливает любые параметры, которые могут
        // быть необходимы шейдеру и рендерит эффект на экран
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Устанавливает, куда шейдер будет рендерить. Это изображение с нашей камеры.
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Выводим полноразмерный квад в цель рендера. В данном случае, на экран.
            // Это вызовет работу шейдера, который мы определили выше
 pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());
```

## Обертка

Теперь у нас есть все необходимые компоненты для нашего пост-эффекта. Все, что нам нужно сделать, это добавить указатель на ExamplePostEffect, который мы объявили выше, к [очереди пост-эффектов][5] нашей камеры. Ниже полный код:

```javascript
//--------------- ОПРЕДЕЛЕНИЕ ПОСТ-ЭФФЕКТА------------------------//
pc.extend(pc, function () {
    // Конструктор = создает указатель на пост-эффект
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // Это - объявление шейдера для нашего эффекта
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Наш эффект должен находиться в pc.PosstEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Каждый пост-эффект должен реализовывать этот метод
        // который устанавливает любые параметры, которые могут
        // быть необходимы шейдеру и рендерит эффект на экран
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Устанавливает, куда шейдер будет рендерить. Это изображение с нашей камеры
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Выводим полнорамзерный квад в рендер. В данном случае, это наш экран.
            // Это вызовет работу шейдера, который мы определили выше
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());

//--------------- ОПРЕДЕЛЕНИЕ СКРИПТА ------------------------//
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

// Вызывает код, который относится к одной сущности
PosteffectExample.prototype.initialize = function() {
    var effect = new pc.ExamplePostEffect(this.app.graphicsDevice, this.vs.resource, this.fs.resource);

    // Добавляет эффект в очередь эффектов камеры
    var queue = this.entity.camera.postEffects;
    queue.addEffect(effect);

    // Когда скрипт включен, добавляем его к очереди 
    this.on('enable', function () {
        queue.addEffect(effect, false);
    });

    // Когда выключен, убираем из очереди эффектов камеры
    this.on('disable', function () {
        queue.removeEffect(effect);
    });


};
```

Больше уроков по пользовательским шейдерам [тут][6].

Посмотрите [проект с пользовательскими пост-эффектами здесь][7]

[1]: https://github.com/playcanvas/engine/tree/master/scripts/posteffects
[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[6]: /tutorials/custom-shaders/
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/406045

