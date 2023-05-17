---
title: Лучевое трассирование
layout: usermanual-page.hbs
position: 5
---

Движок физики PlayCanvas позволяет выполнять лучевое трассирование. Лучевое трассирование - это запрос, который определяет, пересекает ли прямая линия между двумя произвольными 3D-точками твердое тело.

Одно из применений лучевого трассирования - выбор объектов, когда пользователь может касаться/кликать по экрану и выбирать сущность. Вот скрипт, который выполняет лучевое трассирование от позиции камеры в сцену через позицию касания/клика по экрану и возвращает ближайшую выбранную сущность с включенным твердым телом:

```javascript
var Raycast = pc.createScript('raycast');

// инициализация кода, вызываемого один раз для каждой сущности
Raycast.prototype.initialize = function() {
    if (!this.entity.camera) {
        console.error('Этот скрипт должен быть применен к сущности с компонентом камеры.');
        return;
    }

    // Добавить обработчик событий нажатия кнопки мыши
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.mouseDown, this);

    // Добавить событие касания только если касание доступно
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);
    }
};

Raycast.prototype.mouseDown = function (e) {
    this.doRaycast(e.x, e.y);
};

Raycast.prototype.touchStart = function (e) {
    // Выполнить лучевую проверку только если на экране один палец
    if (e.touches.length === 1) {
        this.doRaycast(e.touches[0].x, e.touches[0].y);
    }
    e.event.preventDefault();
};

Raycast.prototype.doRaycast = function (screenX, screenY) {
    // pc.Vec3 для лучевой проверки (позиция камеры)
    var from = this.entity.getPosition();

    // pc.Vec3 для лучевой проверки (проекция позиции клика на дальнюю плоскость отсечения камеры)
    var to = this.entity.camera.screenToWorld(screenX, screenY, this.entity.camera.farClip);

    // Выполнить лучевую проверку между двумя точками и вернуть ближайший результат попадания
    var result = this.app.systems.rigidbody.raycastFirst(from, to);

    // Если было попадание, сохранить сущность
    if (result) {
        var hitEntity = result.entity;
        console.log('Вы выбрали ' + hitEntity.name);
    }
};
```

Вы можете найти проект, использующий лучевое преобразование для выбора объектов Entity [здесь][1].

Лучевое преобразование имеет и другие применения. Объект Entity может исследовать окружающую среду, отправляя лучевые преобразования. Например, чтобы определить, находится ли объект Entity на земле, он может отправить лучевое преобразование строго вниз на некоторое расстояние и проверить, пересекается ли оно с окружающей средой.

[1]: https://playcanvas.com/project/410547/overview/entity-picking-using-physics
