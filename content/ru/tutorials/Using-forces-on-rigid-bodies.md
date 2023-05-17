---
title: Силы и импульсы
layout: tutorial-page.hbs
tags: physics, collision
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/8LTSuf4F/" title="Силы и импульсы"></iframe>

*Используйте клавиши курсора для применения импульсов, клавиши WASD для применения крутящих моментов и вращения куба. Нажмите и удерживайте F, чтобы применить постоянную силу вверх и отменить эффекты гравитации.*
*Нажмите R, чтобы сбросить куб.*

*Попробуйте уравновесить куб и заставить его вращаться на одном из его углов!*
*Полный код, использованный в этом примере, показан внизу этой страницы.*

В этом уроке мы покажем вам, как использовать силы для управления динамическим твердотельным телом и создать демонстрацию, показанную выше. Мы кратко рассмотрим использование сил, импульсов, крутящих моментов и использование пользовательского интерфейса компонента твердотельного тела для настройки поведения.

## Скриптование сил

### Применение постоянной силы

```javascript
if (app.keyboard.isPressed(pc.KEY_F) ) {
    this.entity.rigidbody.applyForce(0, 9.8, 0);
}
```

Здесь сила вдоль глобальной оси Y применяется к доступной сущности, когда пользователь нажимает клавишу F с помощью [`applyForce(x, y, z)`][1]. Точка приложения вектора силы также может быть установлена.

### Импульсы

```javascript
if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
    this.entity.rigidbody.applyImpulse(-1, 0, 0);
}
```

Кубу придается импульс по оси x для мгновенного изменения скорости с помощью [`applyImpulse(x, y, z)`][2].

### Крутящие моменты

```javascript
if (app.keyboard.isPressed(pc.KEY_W) ) {
    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
}
```

[Крутящие моменты](https://en.wikipedia.org/wiki/Torque) (вращательные силы) применяются к Entity с помощью [`applyTorque(x, y, z)`][3].

### TorqueImpulses

```javascript
this.entity.rigidbody.applyTorqueImpulse(x, y, z)
```

Мгновенные изменения угловой скорости применяются через [`applyTorqueImpulse(x, y, z)`][4]. Это не использовалось в коде для демонстрации выше.

## Перемещение динамических твердых тел

Для перемещения твердых тел вы применяете линейные силы и вращательные силы (крутящий момент) с использованием приведенных выше методов. Обычно вам следует избегать прямого изменения положения или скорости твердого тела, так как это будет переопределять симуляцию, и это может привести к странным эффектам, особенно при столкновении объектов.

Однако, если вам нужно, вы можете переопределить скорость, назначив новый набор значений '[pc.Vec3][5]' напрямую на `entity.rigidbody.linearVelocity` или `entity.rigidbody.angularVelocity`.

Для получения дополнительной информации о типах твердых тел см. [страницу API столкновений][6], [страницу пространства имен pc][7], [учебник по контроллеру fps][8] и [учебник по столкновениям][9].

## Общая настройка

Мы настроили базовую сцену с прожектором, кубом (сущность с моделью, твердым телом, компонентами столкновения и сценариями) и полом (с моделью, твердым телом и компонентами столкновения). Твердое тело куба было установлено на динамическое, а твердое тело пола - на статическое. Мы создали некоторые материалы для каждого блока и изменили диффузные цвета, чтобы сделать его более приятным для глаз. Мы также активировали опцию "cast shadows" на обеих сущностях SpotLight и DynamicBody. Полная сцена "usingForces" и код для [этого приложения PlayCanvas можно найти здесь][10].

## Ограничение и контроль

Некоторые настройки редактора были установлены для предотвращения постоянного применения несбалансированных сил (и, таким образом, предотвращения непрерывного ускорения и выхода тела из-под контроля). Мы включили угловое затухание в редакторе атрибутов куба, а также трение на кубе и полу. Здесь не используется линейное затухание, однако оно может быть использовано для моделирования сопротивления воздуха, и, конечно же, замедления могут быть применены по мере необходимости через код.

<img loading="lazy" src="/images/tutorials/forces/rigidbody_settings.jpg" alt="rigidbody_settings">

## Телепортация тела

Чтобы мгновенно переместить тело в новую позицию, вы не можете использовать функцию setPosition из API pc.Entity. Это связано с тем, что физический движок все еще будет считать, что тело находится в старом месте. Вместо этого вам нужно использовать функцию телепорта компонента твердого тела:

```javascript
// код внутри функции update
this.playerPos = this.entity.getLocalPosition();

// Удержание куба на экране - куб выходит за один край экрана, а затем появляется с противоположной стороны.
if (this.playerPos.x < -9.0) {
    this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);
}
if (this.playerPos.x > 9.0) {
    this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);
}
```

Если куб перемещается за пределы видимой области в направлении x, вызывается функция телепортации, и куб Entity телепортируется через экран. Entity телепортируется в менее крайнее положение слева/справа, чтобы не активировать оператор `if()` непрерывно.

## Код сброса куба

```javascript
if (app.keyboard.wasPressed(pc.KEY_R)) {
    this.reset();
}
```
# Issue Tracker

## Новая функция: Tutorial Thumbnail

### Описание

Добавить возможность загрузки изображения-миниатюры для обучающих материалов.

### Задачи

- [ ] Разработать систему хранения изображений-миниатюр
- [ ] Создать интерфейс для загрузки изображений-миниатюр
- [ ] Интегрировать функцию в существующий процесс создания обучающих материалов

## Исправление ошибки: Entity не сохраняет Material Asset

### Описание

При сохранении Entity, Material Asset не сохраняется вместе с ним.

### Задачи

- [ ] Исправить ошибку сохранения Material Asset
- [ ] Протестировать исправление на разных платформах

## Улучшение: Material Inspector

### Описание

Улучшить Material Inspector для более удобной работы с материалами.

### Задачи

- [ ] Добавить возможность предпросмотра материала
- [ ] Улучшить навигацию по параметрам материала
- [ ] Добавить поддержку пользовательских шейдеров через Shader Editor

## Улучшение: Node Inspector

### Описание

Улучшить Node Inspector для более удобной работы с узлами графа.

### Задачи

- [ ] Добавить возможность предпросмотра текстур в Texture Inspector
- [ ] Улучшить навигацию по параметрам узла
- [ ] Добавить поддержку пользовательских графов через Graph Inspector

## Улучшение: Assets

### Описание

Улучшить систему работы с Assets для более удобного управления ресурсами.

### Задачи

- [ ] Добавить функцию поиска Assets
- [ ] Улучшить систему импорта и экспорта Assets
- [ ] Добавить поддержку пользовательских категорий Assets
```javascript
reset: function () {
    this.entity.rigidbody.teleport(0, 2, 0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
}
```

Мы включаем функцию сброса, которая возвращает куб в его исходное положение и, как упоминалось выше, синхронизирует местоположение твердого тела с местоположением телепортированной сущности. Последние две строки в функции сброса сбрасывают линейные и угловые скорости тела до нуля. Ориентация объекта также может быть сброшена, но это не выполняется в данном коде.

## Полный список кода

```javascript
var DynamicBody = pc.createScript('dynamicBody');

// инициализация кода, вызываемого один раз для каждой сущности
DynamicBody.prototype.initialize = function() {
    this.torque = 7;
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);

    this.on('destroy', function() {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }, this);
};

DynamicBody.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
};

// код обновления, вызываемый каждый кадр
DynamicBody.prototype.update = function(dt) {
    //обновление позиции игрока
    this.playerPos = this.entity.getLocalPosition();

    var app = this.app;

    //управление с клавиатуры и применение сил и моментов.
    if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
        this.entity.rigidbody.applyImpulse(-1, 0, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_RIGHT) ) {
        this.entity.rigidbody.applyImpulse(1, 0, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_UP) ) {
        this.entity.rigidbody.applyImpulse(0, 1, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_A) ) {
        this.entity.rigidbody.applyTorque(0, this.torque, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_D) ) {
        this.entity.rigidbody.applyTorque(0, -this.torque, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_W) ) {
        this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_S) ) {
        this.entity.rigidbody.applyTorque(this.torque, 0, 0);
    }
    if (app.keyboard.isPressed(pc.KEY_F) ) {
        this.entity.rigidbody.applyForce(0, 9.8, 0);
    }

    // Удержание куба на экране - куб перемещается с одного края экрана и появляется с противоположного края.
    if (this.playerPos.x < -9.0) {
        this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);
    }
    if (this.playerPos.x > 9.0) {
        this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);
    }

    // контроль сброса куба
    if (app.keyboard.wasPressed(pc.KEY_R) ) {
        this.reset();
    }
};

DynamicBody.prototype.reset = function () {
    this.entity.rigidbody.teleport(0, 2, 0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
};
```

[1]: /api/pc.RigidBodyComponent.html#applyForce
[2]: /api/pc.RigidBodyComponent.html#applyImpulse
[3]: /api/pc.RigidBodyComponent.html#applyTorque
[4]: /api/pc.RigidBodyComponent.html#applyTorqueImpulse
[5]: /api/pc.Vec3.html
[6]: /api/pc.CollisionComponent.html
[7]: /api/pc.html
[8]: /tutorials/first-person-movement/
[9]: /tutorials/collision-and-triggers/
[10]: https://playcanvas.com/project/405828/overview/tutorial-forces--impulses
