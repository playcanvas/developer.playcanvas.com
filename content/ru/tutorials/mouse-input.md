---
title: Основной ввод мыши
layout: tutorial-page.hbs
tags: mouse, input
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/MHIdZgaj/?overlay=false" title="Основной ввод мыши"></iframe>

*Двигайте мышью, чтобы передвигать куб, нажимайте кнопки мыши, чтобы изменить цвет куба*

Обработка мыши в движке PlayCanvas предоставляется объектом `pc.Mouse`. Объект Mouse предоставляет простой интерфейс для определения перемещения мыши или нажатия кнопок мыши. Он также устраняет некоторые несоответствия между браузерами при обработке координат мыши.

Посмотрите на [проект учебника][1]. Вот код из mouse.js:

```javascript
var Mouse = pc.createScript('mouse');

Mouse.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

Mouse.attributes.add('greenMaterial', {
    type: 'asset',
    assetType: 'material'
});

Mouse.attributes.add('blueMaterial', {
    type: 'asset',
    assetType: 'material'
});

// инициализация кода, вызываемая один раз для каждой сущности
Mouse.prototype.initialize = function() {
    this.pos = new pc.Vec3();

    // Отключение контекстного меню останавливает отображение меню браузером
    // при щелчке правой кнопкой мыши на странице
    this.app.mouse.disableContextMenu();

    // Используйте метод on() для привязки обработчиков событий.
    // Объект mouse поддерживает события при перемещении, нажатии кнопки
    // и прокрутке колесика мыши.
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

Mouse.prototype.onMouseMove = function (event) {
    // Используйте функцию screenToWorld компонента камеры для преобразования
    // позиции мыши в позицию в 3D-пространстве
    var depth = 10;
    var cameraEntity = this.app.root.findByName('Camera');
    cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

    // Наконец, обновите позицию куба в мировом пространстве
    this.entity.setPosition(this.pos);
};

Mouse.prototype.onMouseDown = function (event) {
    // Если нажата левая кнопка мыши, измените цвет куба на красный
    if (event.button === pc.MOUSEBUTTON_LEFT) {
        this.entity.render.meshInstances[0].material = this.redMaterial.resource;
    }

    // Если нажата средняя кнопка мыши, измените цвет куба на зеленый
    if (event.button === pc.MOUSEBUTTON_MIDDLE) {
        this.entity.render.meshInstances[0].material = this.greenMaterial.resource;
    }

    // Если нажата правая кнопка мыши, измените цвет куба на синий
    if (event.button === pc.MOUSEBUTTON_RIGHT) {
        this.entity.render.meshInstances[0].material = this.blueMaterial.resource;
    }
};
```

### Доступ к мыши

Управление мышью осуществляется с помощью объекта `pc.Mouse`. [Фреймворк][2] предоставляет экземпляр этого объекта в [приложении app][3], который доступен всем объектам сценариев:

```javascript
this.app.mouse
```

### Отключение контекстного меню правой кнопкой мыши

В конструкторе нашего объекта скрипта мы отключаем контекстное меню правой кнопкой мыши, чтобы оно не появлялось при нажатии правой кнопки мыши.

```javascript
this.app.mouse.disableContextMenu();
```

### Привязка к событиям

Объект `pc.Mouse` позволяет вам прослушивать различные события, соответствующие действиям мыши. В учебнике мы привязываем метод `onMouseMove` к событию перемещения и `onMouseDown` к событию нажатия кнопки.

Обратите внимание, как мы также передаем `this` в метод on() для привязки к событиям. Этот третий аргумент является объектом, который используется как `this` в обратном вызове события.

```javascript
this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
```

Доступные события на `pc.Mouse`:

* `pc.EVENT_MOUSEUP` - срабатывает при отпускании кнопки мыши
* `pc.EVENT_MOUSEDOWN` - срабатывает при нажатии кнопки мыши
* `pc.EVENT_MOUSEMOVE` - срабатывает при перемещении мыши
* `pc.EVENT_MOUSEWHEEL` - срабатывает при вращении колесика мыши.

Ввод с помощью мыши в браузерах обычно реализуется путем прослушивания [DOM][4] событий на элементах DOM вашей страницы. Проблема в том, что разные браузеры реализуют события немного по-разному и предоставляют разные значения. Чтобы упростить код, который вы пишете, движок PlayCanvas позволяет связывать обработчики событий с обработчиком мыши PlayCanvas, а не с DOM-элементом. Движок предоставляет объект `pc.MouseEvent` при срабатывании события, который является одинаковым для всех браузеров. Если вам нужно оригинальное событие DOM, оно доступно как свойство `event` в `pc.MouseEvent`.

### Перемещение мыши

Первый обработчик событий - `onMouseMove`. Он срабатывает при перемещении мыши. Для события `EVENT_MOUSEMOVE` объект `MouseEvent` будет иметь текущую позицию мыши `x` и `y`, а также изменение позиции с момента последнего события в `dx` и `dy`. В нашем учебнике мы используем текущую позицию мыши и перемещаем куб на позицию курсора.

### Кнопки мыши

Второй обработчик событий - `onMouseDown`. Он срабатывает при нажатии одной из трех кнопок мыши. В событиях `EVENT_MOUSEDOWN` и `EVENT_MOUSEUP` объект `MouseEvent` будет иметь свойство `button`, которое содержит нажатую/отпущенную кнопку. Оно может иметь одно из следующих значений:

* `pc.MOUSEBUTTON_NONE`
* `pc.MOUSEBUTTON_LEFT`
* `pc.MOUSEBUTTON_MIDDLE`
* `pc.MOUSEBUTTON_RIGHT`

В нашем учебнике мы меняем цвет куба в зависимости от того, какая кнопка мыши была нажата.

### Попробуйте сами

Попробуйте учебник в полноэкранном режиме [здесь][5] или в верхней части страницы. Перемещайте мышь, чтобы перемещать куб, и щелкайте левой, средней и правой кнопкой мыши, чтобы изменить цвет куба.

[1]: https://playcanvas.com/project/405819/overview/tutorial-basic-mouse-input
[2]: /user-manual/glossary#framework
[3]: /user-manual/glossary#app
[4]: /user-manual/glossary#dom
[5]: https://playcanv.as/p/MHIdZgaj/
