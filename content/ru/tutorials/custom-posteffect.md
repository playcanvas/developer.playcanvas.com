---
title: Пользовательские пост-эффекты
layout: tutorial-page.hbs
tags: posteffects
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406045/11D659-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/3je0YP0q/" title="Custom Post Effects"></iframe>

*В этом учебнике используется пользовательский пост-эффект для создания эффекта в GLSL*

## Обзор

Вы можете создавать собственные пост-эффекты в PlayCanvas с помощью немного Javascript и GLSL. Пост-эффекты - это шейдеры, которые работают с 2D отрендеренным изображением из камеры. Вы можете применять несколько пост-эффектов к вашему изображению - каждый эффект использует выход предыдущего эффекта в качестве своего входа.

В следующих абзацах мы продемонстрируем, как создать собственные пост-эффекты. Вы можете увидеть примеры существующих пост-эффектов [здесь][1].

## Скрипт

Сначала нам нужно создать новый скрипт. В этом скрипте будет содержаться [определение шейдера][2] для нашего пост-эффекта, а также код, который добавит пост-эффект к камере. Этот скрипт должен быть прикреплен к объекту Entity с [компонентом камеры][3]. Мы назовем этот скрипт posteffect_example.js:

## Эффект

Теперь нам нужно создать новый класс для нашего пост-эффекта. Этот класс будет наследоваться от [pc.posteffect.PostEffect][4]. Мы определим этот класс внутри нашего скрипта posteffect_example.js прямо перед определением скрипта:

```javascript
pc.extend(pc, function () {
    // Конструктор - создает экземпляр нашего пост-эффекта
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // это определение шейдера для нашего эффекта
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Наш эффект должен наследоваться от pc.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Каждый пост-эффект должен реализовывать метод render, который
        // устанавливает любые параметры, которые могут потребоваться шейдеру, и
        // также отображает эффект на экране
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Установите входную цель рендеринга для шейдера. Это изображение, отображаемое с нашей камеры
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Нарисуйте полноэкранный квадрат на выходной цели. В данном случае выходная цель - экран.
            // Рисование полноэкранного квадрата запустит шейдер, который мы определили выше
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());
```

## Завершение

Теперь у нас есть все необходимые компоненты для нашего пост-эффекта. Все, что нам нужно сделать, это добавить экземпляр ExamplePostEffect, который мы определили выше, в [очередь пост-эффектов][5] нашей камеры. Вот полный список:

```javascript
//--------------- ОПРЕДЕЛЕНИЕ POST EFFECT ------------------------//
pc.extend(pc, function () {
    // Конструктор - создает экземпляр нашего пост-эффекта
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // это определение шейдера для нашего эффекта
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Наш эффект должен наследоваться от pc.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Каждый пост-эффект должен реализовывать метод render, который
        // устанавливает любые параметры, которые могут потребоваться шейдеру, и
        // также отображает эффект на экране
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Устанавливаем входной рендер-таргет для шейдера. Это изображение, отрендеренное нашей камерой
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Рисуем полноэкранный квадрат на выходном таргете. В данном случае выходной таргет - это экран.
            // Рисование полноэкранного квадрата запустит шейдер, который мы определили выше
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

// инициализация кода, вызываемого один раз для каждой сущности
PosteffectExample.prototype.initialize = function() {
    var effect = new pc.ExamplePostEffect(this.app.graphicsDevice, this.vs.resource, this.fs.resource);

    // добавляем эффект в очередь postEffects камеры
    var queue = this.entity.camera.postEffects;
    queue.addEffect(effect);

    // когда скрипт включен, добавляем наш эффект в очередь postEffects камеры
    this.on('enable', function () {
        queue.addEffect(effect, false);
    });

    // когда скрипт отключен, удаляем наш эффект из очереди postEffects камеры
    this.on('disable', function () {
        queue.removeEffect(effect);
    });


};
```

Для большего количества учебников по пользовательским шейдерам смотрите [здесь][6].

Посмотрите [проект Custom Post Effects здесь][7].

[1]: https://github.com/playcanvas/engine/tree/master/scripts/posteffects
[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[6]: /tutorials/custom-shaders/
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/406045
