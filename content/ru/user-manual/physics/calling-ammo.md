---
title: Вызов API ammo.js
layout: usermanual-page.hbs
position: 6
---

Интеграция PlayCanvas с ammo.js не раскрывает все возможности API ammo.js. Однако вы можете вызывать API ammo.js напрямую из ваших скриптов PlayCanvas.

В настоящее время PlayCanvas использует [эту сборку][1] ammo.js. API, предоставляемый этой сборкой, можно найти [здесь][2]. Хотя официальной документации для ammo.js нет, вы можете обратиться к [Руководству пользователя Bullet Physics][3] для получения дополнительной информации.

## Ограничения суставов

В настоящее время в PlayCanvas нет компонентов, которые реализуют ограничения физики (иногда называемые суставами физики). Однако легко использовать API ammo.js для создания скриптов, реализующих ограничения.

Вот скрипт для ограничения точка-точка (по сути, шарнирный сустав):

```javascript
var PointToPointConstraint = pc.createScript('pointToPointConstraint');

PointToPointConstraint.attributes.add('pivotA', {
    title: 'Пивот',
    description: 'Позиция ограничения в локальном пространстве этой сущности.',
    type: 'vec3',
    default: [0, 0, 0]
});
PointToPointConstraint.attributes.add('entityB', {
    title: 'Подключенная сущность',
    description: 'Необязательная вторая сущность',
    type: 'entity'
});
PointToPointConstraint.attributes.add('pivotB', {
    title: 'Подключенный пивот',
    description: 'Позиция ограничения в локальном пространстве сущности B (если указано).',
    type: 'vec3',
    default: [0, 0, 0]
});
PointToPointConstraint.attributes.add('breakingThreshold', {
    title: 'Порог разрушения',
    description: 'Максимальный порог разрушающего импульса, необходимый для разрушения ограничения.',
    type: 'number',
    default: 3.4e+38
});
PointToPointConstraint.attributes.add('enableCollision', {
    title: 'Включить столкновение',
    description: 'Включить столкновение между связанными твердыми телами.',
    type: 'boolean',
    default: true
});
PointToPointConstraint.attributes.add('debugRender', {
    title: 'Отладочная отрисовка',
    description: 'Включить отображение представления ограничения.',
    type: 'boolean',
    default: false
});
PointToPointConstraint.attributes.add('debugColor', {
    title: 'Цвет отладки',
    description: 'Цвет отладочной отрисовки ограничения.',
    type: 'rgb',
    default: [1, 0, 0]
});

// инициализация кода, вызываемого один раз для каждой сущности
PointToPointConstraint.prototype.initialize = function() {
    this.createConstraint();

    this.on('attr', function(name, value, prev) {
        // Если какие-либо свойства ограничения изменяются, создайте заново ограничение
        if (name === 'pivotA' || name === 'entityB' || name === 'pivotB') {
            this.createConstraint();
        } else if (name === 'breakingThreshold') {
            this.constraint.setBreakingImpulseThreshold(this.breakingThreshold);
            this.activate();
        }
    });
    this.on('enable', function () {
        this.createConstraint();
    });
    this.on('disable', function () {
        this.destroyConstraint();
    });
    this.on('destroy', function () {
        this.destroyConstraint();
    });
};

PointToPointConstraint.prototype.createConstraint = function() {
    if (this.constraint) {
        this.destroyConstraint();
    }

    var bodyA = this.entity.rigidbody.body;
    var pivotA = new Ammo.btVector3(this.pivotA.x, this.pivotA.y, this.pivotA.z);
    if (this.entityB && this.entityB.rigidbody) {
        var bodyB = this.entityB.rigidbody.body;
        var pivotB = new Ammo.btVector3(this.pivotB.x, this.pivotB.y, this.pivotB.z);
        this.constraint = new Ammo.btPoint2PointConstraint(bodyA, bodyB, pivotA, pivotB);
    } else {
        this.constraint = new Ammo.btPoint2PointConstraint(bodyA, pivotA);
    }

    var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
    dynamicsWorld.addConstraint(this.constraint, !this.enableCollision);

    this.activate();
};

PointToPointConstraint.prototype.destroyConstraint = function() {
    if (this.constraint) {
        var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
        dynamicsWorld.removeConstraint(this.constraint);
        Ammo.destroy(this.constraint);
        this.constraint = null;
    }
};

PointToPointConstraint.prototype.activate = function() {
    this.entity.rigidbody.activate();
    if (this.entityB) {
        this.entityB.rigidbody.activate();
    }
};

// код обновления, вызываемый каждый кадр
PointToPointConstraint.prototype.update = function(dt) {
    if (this.debugRender) {
        // Обратите внимание, что в целом плохо выделять новые объекты в функции обновления
        // но это только для отладочной отрисовки и обычно будет отключено
        var tempVecA = new pc.Vec3();
        this.entity.getWorldTransform().transformPoint(this.pivotA, tempVecA);
        this.app.renderLine(this.entity.getPosition(), tempVecA, this.debugColor);
        if (this.entityB) {
            this.app.renderLine(this.entityB.getPosition(), tempVecA, this.debugColor);
        }
    }
};
```

Вы можете найти проект, который реализует все типы ограничений из ammo.js [здесь][4].

## Непрерывное обнаружение столкновений

Иногда вы можете обнаружить, что быстро движущиеся твердые тела в ваших симуляциях проходят друг через друга. Чтобы преодолеть это, ammo.js предоставляет концепцию, называемую непрерывным обнаружением столкновений (или сокращенно CCD). Это позволяет проводить дополнительные проверки на столкновения, просматривая сферический объем между предыдущим и текущим положениями твердого тела и ища пересечения с объемами других тел.

Вы можете включить CCD для любого твердого тела PlayCanvas с помощью следующего скрипта:

```javascript
var Ccd = pc.createScript('ccd');

Ccd.attributes.add('motionThreshold', {
    type: 'number',
    default: 1,
    title: 'Порог движения',
    description: 'Количество метров, пройденных за один кадр, прежде чем будет включен CCD'
});

Ccd.attributes.add('sweptSphereRadius', {
    type: 'number',
    default: 0.2,
    title: 'Радиус сферы Swept',
    description: 'Это значение должно быть меньше половины размера объема столкновения. Например, для объекта размером 1 метр попробуйте 0.2'
});

// инициализация кода, вызываемого один раз для каждой сущности
Ccd.prototype.initialize = function() {
    var body; // Тип btRigidBody

    body = this.entity.rigidbody.body;
    body.setCcdMotionThreshold(this.motionThreshold);
    body.setCcdSweptSphereRadius(this.sweptSphereRadius);

    this.on('attr:motionThreshold', function(value, prev) {
        body = this.entity.rigidbody.body;
        body.setCcdMotionThreshold(value);
    });
    this.on('attr:sweptSphereRadius', function(value, prev) {
        body = this.entity.rigidbody.body;
        body.setCcdSweptSphereRadius(value);
    });
};
```

Вы можете найти проект, который реализует CCD [здесь][5].

Это всего лишь два примера использования API ammo.js напрямую. Вы также можете использовать его для реализации дополнительных вещей, таких как:

* Составные формы столкновений
* Симуляция мягкого тела
* Симуляция ткани
* Транспортные средства

[1]: https://github.com/kripken/ammo.js/commit/dcab07bf0e7f2b4b64c01dc45da846344c8f50be
[2]: https://github.com/kripken/ammo.js/blob/dcab07bf0e7f2b4b64c01dc45da846344c8f50be/ammo.idl
[3]: https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf
[4]: https://playcanvas.com/project/618829/overview/physics-constraints
[5]: https://playcanvas.com/project/447023/overview/physics-with-ccd