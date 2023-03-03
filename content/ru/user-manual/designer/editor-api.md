---
title: Editor API
layout: usermanual-page.hbs
position: 10
---

<div class="alert alert-info">
Editor API является функцией бета-версии. Пожалуйста, будьте осторожны при использовании на рабочих проектах.
</div>

Редактор имеет API, который доступен для пользователя и в настоящее время находится в бета-версии, который можно использовать для автоматизации и расширения базовой функциональности.

API еще не считается стабильным и может измениться в будущем в процессе разработки. Однако маловероятно, что API изменится сильно относительно его текущего состояния.

Полная документация по API может быть найдена на [GitHub][github-api].

## Пример автоматизации

API может быть получен через консоль инструментов разработчика браузера, позволяя автоматизировать повторяющиеся задачи. В приведенном ниже примере мы используем редактор, чтобы найти все сущности, которые имеют тег 'red', и отключаем их, выполняя код в консоли браузера.

![][disable-red-boxes-gif]

Код API редактора:

```javascript
(function(){
    const entities = editor.entities.root.listByTag('red');
    for (const entity of entities) {
        entity.set('enabled', false);
    }
})();
```

## Расширение функциональности редактора

Возможно добавить дополнительную функциональность в редактор и создать пользовательские интерфейсы, такие как добавление кнопок. Это можно сделать несколькими способами, такими как расширения браузера или [пользовательские скрипты][user-scripts].

Пользовательские скрипты являются более доступным из двух вариантов, что позволяет запускать пользовательский код поверх редактора.

Ниже приведен пример, где кнопка была добавлена в [Viewport][viewport], чтобы генерировать и случайным образом размещать коробки в сцене.

![][generate-boxes-gif]

Команда PlayCanvas в настоящее время использует расширение браузера с открытым исходным кодом [Violentmonkey][violentmonkey], чтобы управлять пользовательскими скриптами.

После установки расширения браузера добавление собственного или скрипта другого разработчика очень просто. Шаги можно найти в [документации Violentmonkey][violentmonkey-docs].

Код для вышеуказанного пользовательского скрипта:

```javascript
// ==UserScript==
// @name        Example Script
// @namespace   Violentmonkey Scripts
// @match       https://playcanvas.com/editor/scene/*
// @grant       none
// @version     1.0
// @author      -
// @description 20/10/2021, 11:40:21
// ==/UserScript==

(function() {
    async function generateBoxes(count, position, radius) {
        // create box entity
        const box = editor.entities.create({ parent: editor.entities.root });
        // find box material asset
        const boxMaterial = editor.assets.findOne(asset => asset.get('name') === 'boxMaterial');
        // add render component
        box.addComponent('render', {
            type: 'box',
            materialAssets: [boxMaterial.get('id')]
        });

        // add a number of boxes around a point in the scene
        let offset = new pc.Vec3();
        let rotation = new pc.Quat();
        const result = [];

        for (let i = 0; i < count; i++) {
            const boxCopy = await box.duplicate();
            boxCopy.set('name', 'Box ' + (i + 1));
            offset.set(1, 0, 0);
            rotation.setFromEulerAngles(0, pc.math.random(-360, 360), 0);
            offset = rotation.transformVector(offset);
            offset.scale(pc.math.random(-radius, radius));
            boxCopy.set('position', [position.x + offset.x, position.y + offset.y, position.z + offset.z]);

            result.push(boxCopy);
        }

        // delete original box
        box.delete();

        return result;
    }

    function createButton() {
        const btn = new pcui.Button({ text: 'Generate Boxes' });
        btn.style.position = 'absolute';
        btn.style.bottom = '10px';
        btn.style.right = '10px';
        editor.call('layout.viewport').append(btn);

        let boxes;

        btn.on('click', () => {
            // delete existing boxes
            if (boxes) {
                editor.entities.delete(boxes);
                boxes = null;
            }

            generateBoxes(10, new pc.Vec3(), 10).then(result => {
                boxes = result;
            });
        });
    }

    // Wait until the Editor is available before adding the button
    editor.once('load', () => createButton());
})();
```

Давайте разберем важные области скрипта:

Вверху находится информационный заголовок о скрипте, если вы решите поделиться скриптом с другими пользователями. Важная строка - это атрибут `@match`, который контролирует, на каких URL-адресах загружается скрипт. В данном случае он установлен для загрузки на любую сцену PlayCanvas. Более подробную информацию о том, как изменить это, можно найти в [документации Violentmonkey][violentmonkey-matching].

```javascript
// ==UserScript==
// @name        Example Script
// @namespace   Violentmonkey Scripts
// @match       https://playcanvas.com/editor/scene/*
// @grant       none
// @version     1.0
// @author      -
// @description 20/10/2021, 11:40:21
// ==/UserScript==
```

Это private API редактора, которое ожидает события, когда редактор полностью загружен. Использование события гарантирует, что API редактора будет доступно до запуска кода для расширения функций редактора.

```javascript
    // Wait until the Editor is available before adding the button
    editor.once('load', () => createButton());
```

Кнопка создается из библиотеки [PCUI][pcui], которую также использует редактор. Опять же, используется некоторое частное API, чтобы получить DOM-элемент Viewport для прикрепления кнопки.

```javascript
    function createButton() {
        const btn = new pcui.Button({ text: 'Generate Boxes' });
        btn.style.position = 'absolute';
        btn.style.bottom = '10px';
        btn.style.right = '10px';
        editor.call('layout.viewport').append(btn);

        let boxes;

        btn.on('click', () => {
            // delete existing boxes
            if (boxes) {
                editor.entities.delete(boxes);
                boxes = null;
            }

            generateBoxes(10, new pc.Vec3(), 10).then(result => {
                boxes = result;
            });
        });
    }
```

[disable-red-boxes-gif]: /images/user-manual/editor/editor-api/disable-red-boxes.gif
[github-api]: https://github.com/playcanvas/editor-api/blob/master/docs/modules.md#playcanvas-editor-api
[user-scripts]: https://en.wikipedia.org/wiki/Userscript
[viewport]: /user-manual/designer/viewport
[violentmonkey]: https://violentmonkey.github.io/
[violentmonkey-docs]: https://violentmonkey.github.io/guide/creating-a-userscript/
[violentmonkey-matching]: https://violentmonkey.github.io/api/matching/
[generate-boxes-gif]: /images/user-manual/editor/editor-api/generate-random-boxes.gif
[pcui]: https://github.com/playcanvas/pcui
