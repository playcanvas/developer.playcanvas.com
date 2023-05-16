---
title: Выбор Entity
layout: tutorial-page.hbs
tags: raycast,basics,physics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg
---

Выбор объекта столкновений - щелкните, чтобы выбрать форму

<iframe loading="lazy" src="https://playcanv.as/b/Ps1tTzWn/" title="Collision Picking"></iframe>

---

Выбор Frame Buffer - щелкните, чтобы выбрать серую форму. Красные формы установлены как невыбираемые.

<iframe loading="lazy" src="https://playcanv.as/b/ZQVQqgGU/" title="Frame Buffer Picking"></iframe>

---

Попробуйте из редактора в [учебном проекте.][1]

Это руководство описывает два метода выбора Entity из 3D-сцены, например, при щелчке мыши.

## Выбор столкновений

Выбор на основе столкновений использует компоненты столкновений для добавления формы к каждому Entity, которое нужно выбрать. Затем мы используем метод [raycastFirst()][2] в системе твердого тела для запуска луча от позиции щелчка мыши в экран, чтобы увидеть, сталкивается ли он с компонентом столкновения. Если это происходит, то Entity "выбрано".

```javascript
var PickerRaycast = pc.createScript('pickerRaycast');

// инициализация кода, вызываемая один раз для каждой сущности
PickerRaycast.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);

    this.on('destroy', function() {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);
    }, this);
};

PickerRaycast.prototype.onSelect = function (e) {
    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);
    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);

    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    if (result) {
        var pickedEntity = result.entity;
        pickedEntity.script.pulse.pulse();
    }
};
```

## Frame Buffer Picking

Выбор на основе буфера кадра использует класс [pc.Picker][3] для отображения сцены во внутренний буфер. При нажатии мыши цвет буфера в месте расположения мыши используется для определения выбранного экземпляра сетки. Этот метод имеет свои преимущества и недостатки по сравнению с методом на основе столкновений.

Преимущества включают:

* Возможность использовать прямоугольник для выбора нескольких элементов сцены одновременно
* Не требует включения библиотеки физики, что сокращает время предварительной загрузки.

Основной недостаток заключается в использовании метода `readPixels`, который блокирует графический конвейер. Это может серьезно сказаться на производительности рендеринга, особенно на мобильных устройствах и в приложениях с интенсивным использованием GPU.

Вы можете изменить размер буфера, чтобы улучшить производительность за счет точности. В приведенном ниже примере скрипта для этого используется атрибут `pickAreaScale`, где чем меньше число, тем быстрее и менее точным становится выбор.

Также возможно ограничить слои для выбора, что поддерживается скриптом через массив `layerNames`. Мы можем добавить имена слоев, из которых хотим выбирать, и также улучшить производительность, отображая только то, что нам нужно, во внутренний буфер.

```javascript
var PickerFramebuffer = pc.createScript('pickerFramebuffer');

PickerFramebuffer.attributes.add('pickAreaScale', {
    type: 'number',
    title: 'Масштаб области выбора',
    description: '1 - более точно, но хуже производительность. 0.01 - лучшая производительность, но наименее точно. 0.25 - значение по умолчанию.',
    default: 0.25,
    min: 0.01,
    max: 1
});

PickerFramebuffer.attributes.add('layerNames', {
    type: 'string',
    title: 'Названия слоев',
    array: true,
    description: 'Названия слоев, из которых будут выбираться объекты.',
    default: ['World']
});

// инициализация кода, вызываемая один раз для каждой сущности
PickerFramebuffer.prototype.initialize = function() {
    // Создаем frame buffer picker с масштабированным разрешением
    var canvas = this.app.graphicsDevice.canvas;
    var canvasWidth = parseInt(canvas.clientWidth, 10);
    var canvasHeight = parseInt(canvas.clientHeight, 10);

    this.picker = new pc.Picker(this.app, canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);
    this.layers = [];
    for (var i = 0; i < this.layerNames.length; ++i) {
        var layer = this.app.scene.layers.getLayerByName(this.layerNames[i]);
        if (layer) {
            this.layers.push(layer);
        }
    }

    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);

    this.on('destroy', function() {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);
    }, this);
};

PickerFramebuffer.prototype.onSelect = function (event) {
    var canvas = this.app.graphicsDevice.canvas;
    var canvasWidth = parseInt(canvas.clientWidth, 10);
    var canvasHeight = parseInt(canvas.clientHeight, 10);

    var camera = this.entity.camera.camera;
    var scene = this.app.scene;
    var picker = this.picker;

    picker.resize(canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);
    picker.prepare(camera, scene, this.layers);

    // Преобразуем координаты мыши в координаты выбора и
    // запрашиваем выбор
    var selected = picker.getSelection({
        x: Math.floor(event.x * (picker.width / canvasWidth)),
        y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
    });

    if (selected.length > 0) {
        // Получаем графический узел, используемый выбранным экземпляром сетки
        var entity = selected[0].node;

        // Поднимаемся по иерархии, пока не найдем фактическую сущность
        // которая имеет скрипт, который мы ищем
        while (entity !== null && !(entity instanceof pc.Entity) && (entity.script && entity.script.pulse)) {
            entity = entity.getParent();
        }
        if (entity) {
            entity.script.pulse.pulse();
        }
    }
};
```

[1]: https://playcanvas.com/project/405856
[2]: /api/pc.RigidBodyComponentSystem.html#raycastFirst
[3]: /api/pc.Picker.html
