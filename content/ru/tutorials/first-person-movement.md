---
title: Движение от первого лица
layout: tutorial-page.hbs
tags: input, camera
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405842/JLWRE0-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/HzOzlZOC/" title="First Person Movement"></iframe>

Это приложение, которое реализует движение персонажа от первого лица.

Настройка сцены для этого контроллера важна, так как ваш персонаж должен иметь компоненты жесткого тела и столкновения, а также прикрепленный скрипт. Кроме того, скрипт поддерживает добавление камеры в качестве дочернего объекта игрока и ручную настройку в инспекторе. Если камера отсутствует, создается новая сущность.

Посмотрите полную настройку сцены в [Tutorial Project][1].

Скрипт ниже выполняет следующие функции:

* Слушать ввод с мыши и клавиатуры
* Обновление камеры от ввода с мыши
* Применение сил для перемещения игрока по сцене

Обратите внимание, что скорость игрока никогда не устанавливается напрямую, но он перемещается путем применения сил через функцию API жесткого тела [`applyForce`][3].

На компоненте жесткого тела мы также установили следующие значения в редакторе инспектора:
* Чтобы ограничить максимальную скорость, мы применили линейное затухание, которое останавливает игрока от скольжения после того, как игрок отпустил клавиши ввода.
* Чтобы остановить игрока от переворачивания, мы также уменьшили фактор углового движения до 0 по всем осям.

![Rigidbody Attributes][2]

```javascript
var FirstPersonMovement = pc.createScript('firstPersonMovement');

FirstPersonMovement.attributes.add('camera', {
    type: 'entity',
    description: 'Необязательно, назначьте сущность камеры, в противном случае будет создана новая'
});

FirstPersonMovement.attributes.add('power', {
    type: 'number',
    default: 2500,
    description: 'Регулирует скорость движения игрока'
});

FirstPersonMovement.attributes.add('lookSpeed', {
    type: 'number',
    default: 0.25,
    description: 'Регулирует чувствительность просмотра'
});

// инициализация кода, вызываемого один раз для каждой сущности
FirstPersonMovement.prototype.initialize = function() {
    this.force = new pc.Vec3();
    this.eulers = new pc.Vec3();

    var app = this.app;

    // Слушаем события движения мыши
    app.mouse.on("mousemove", this._onMouseMove, this);

    // когда мышь нажата, скрываем курсор
    app.mouse.on("mousedown", function () {
        app.mouse.enablePointerLock();
    }, this);

    // Проверка наличия необходимых компонентов
    if (!this.entity.collision) {
        console.error("Скрипт движения от первого лица должен иметь компонент 'collision'");
    }

    if (!this.entity.rigidbody || this.entity.rigidbody.type !== pc.BODYTYPE_DYNAMIC) {
        console.error("Скрипт движения от первого лица должен иметь ДИНАМИЧЕСКИЙ компонент 'rigidbody'");
    }
};

// код обновления, вызываемый каждый кадр
FirstPersonMovement.prototype.update = function(dt) {
    // Если камера не назначена из редактора, создайте одну
    if (!this.camera) {
        this._createCamera();
    }

    var force = this.force;
    var app = this.app;

    // Получить направления камеры для определения направлений движения
    var forward = this.camera.forward;
    var right = this.camera.right;


    // движение
    var x = 0;
    var z = 0;

    // Используйте клавиши W-A-S-D для перемещения игрока
    // Проверка нажатия клавиш
    if (app.keyboard.isPressed(pc.KEY_A) || app.keyboard.isPressed(pc.KEY_Q)) {
        x -= right.x;
        z -= right.z;
    }

    if (app.keyboard.isPressed(pc.KEY_D)) {
        x += right.x;
        z += right.z;
    }

    if (app.keyboard.isPressed(pc.KEY_W)) {
        x += forward.x;
        z += forward.z;
    }

    if (app.keyboard.isPressed(pc.KEY_S)) {
        x -= forward.x;
        z -= forward.z;
    }

    // использовать направление от нажатия клавиш для применения силы к персонажу
    if (x !== 0 || z !== 0) {
        force.set(x, 0, z).normalize().scale(this.power);
        this.entity.rigidbody.applyForce(force);
    }

    // обновить угол камеры из событий движения мыши
    this.camera.setLocalEulerAngles(this.eulers.y, this.eulers.x, 0);
};

FirstPersonMovement.prototype._onMouseMove = function (e) {
    // Если указатель отключен
    // Если нажата левая кнопка мыши, обновите камеру с помощью движения мыши
    if (pc.Mouse.isPointerLocked() || e.buttons[0]) {
        this.eulers.x -= this.lookSpeed * e.dx;
        this.eulers.y -= this.lookSpeed * e.dy;
    }
};

FirstPersonMovement.prototype._createCamera = function () {
    // Если пользователь не назначил камеру, создайте новую
    this.camera = new pc.Entity();
    this.camera.setName("Камера от первого лица");
    this.camera.addComponent("camera");
    this.entity.addChild(this.camera);
    this.camera.translateLocal(0, 0.5, 0);
};
```

[1]: https://playcanvas.com/project/405842
[2]: /images/tutorials/beginner/first_person_movement/rigidbody_attributes.jpg
[3]: /api/pc.RigidBodyComponent.html#applyForce

# Создание движения от первого лица

В этом уроке мы рассмотрим, как создать движение от первого лица с использованием физического движка PlayCanvas.

## Настройка проекта

Сначала создайте новый проект PlayCanvas. В этом уроке мы будем использовать [этот проект][1] в качестве отправной точки.

![Tutorial Thumbnail][2]

## Настройка Entity игрока

Создайте новую Entity и назовите ее "Player". Затем добавьте компоненты "Camera" и "RigidBody" к этой Entity. В компоненте "RigidBody" установите следующие значения:

- Тип: "Dynamic"
- Масса: 75
- Линейное замедление: 5
- Угловое замедление: 5
- Заморозить вращение: отметьте все три оси

![RigidBody Attributes][2]

Теперь добавьте компонент "Collision" к Entity "Player" и установите следующие значения:

- Тип: "Capsule"
- Высота: 2
- Радиус: 0.5
- Ось: "Y"

## Создание скрипта движения

Создайте новый скрипт и назовите его "firstPersonMovement". Затем добавьте следующий код:

```javascript
var FirstPersonMovement = pc.createScript('firstPersonMovement');

// Инициализация
FirstPersonMovement.prototype.initialize = function() {
    this.force = new pc.Vec3();
};

// Обновление
FirstPersonMovement.prototype.update = function(dt) {
    var forceX = 0;
    var forceZ = 0;

    // Вычисление силы движения
    if (this.app.keyboard.isPressed(pc.KEY_W)) {
        forceZ = -1;
    } else if (this.app.keyboard.isPressed(pc.KEY_S)) {
        forceZ = 1;
    }

    if (this.app.keyboard.isPressed(pc.KEY_A)) {
        forceX = -1;
    } else if (this.app.keyboard.isPressed(pc.KEY_D)) {
        forceX = 1;
    }

    // Применение силы к RigidBody
    if (forceX !== 0 || forceZ !== 0) {
        this.force.set(forceX, 0, forceZ).normalize().scale(10);
        this.entity.rigidbody.applyForce(this.force);
    }
};
```

Этот код создает простую систему движения, которая позволяет игроку двигаться вперед, назад, влево и вправо с использованием клавиш W, A, S и D. Сила движения применяется к компоненту "RigidBody" игрока, что позволяет ему двигаться в указанном направлении.

Добавьте скрипт "firstPersonMovement" к Entity "Player".

## Тестирование движения

Запустите проект и проверьте, что движение работает правильно. Вы должны иметь возможность двигаться вперед, назад, влево и вправо с использованием клавиш W, A, S и D.

## Заключение

Теперь вы знаете, как создать простую систему движения от первого лица с использованием физического движка PlayCanvas. Вы можете использовать этот подход в своих проектах и дополнить его другими функциями, такими как прыжки, взаимодействие с объектами и т. д.