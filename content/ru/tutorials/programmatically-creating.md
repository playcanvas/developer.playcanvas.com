---
title: Программное создание сущностей
template: tutorial-page.tmpl.html
tags: procedural, basics
---

<iframe src="https://playcanv.as/p/1VjdIY7v/" ></iframe>

Обычно, вы создавали сущности через редактор PlayCanvas, собирая коллекции компонентов и скриптов для созданий разных частей вашей игры. Однако, в некоторых случаях, вам необходимо создавать сущности в скрипте. В этом уроке узнаете, как это делать.

## Создание сущности

~~~js
var entity = new pc.Entity(); // Создание сущности

// Добавление сущности в иерархию
this.app.root.addChild(entity);
~~~

Сперва вам нужно создать сущность. Это просто, но важно не забыть добавить сущность к главной иерархии сущностей. Только сущности в иерархии могут быть трансформированы, иметь компоненты и скрипты. В ваших скриптах вы можете обратиться к корню иерархии сущностей из объекта класса Application, который передан в ваш скрипт. Условно, он обычно называется "app" и иерархия доступна через "this.app.root".

## Добавление компонентов

~~~js~~~
// Создание новой сущности
var entity = new pc.Entity();

// Добавление камеры со стандартными настройками
entity.addComponent("camera");

// Создание новой модели и добавление ее к сущности
entity.addComponent("model", {
    type: 'box',
});

// Добавляем сущность к иерархии
this.app.root.addChild(entity);
~~~

Сущность, как она есть, не имеет смысла, поэтому вам необходимо добавить компоненты, чтобы добиться результата. Вы можете использовать метод `Добавить компонент` сущности чтобы создать и добавить компонент.

Каждый тип компонентов имеет разные свойства, которые могут быть переданы в одном объекте, смотрите  [Документацию по компонентам][1] чтобы узнать о том, какими свойствами обладает данный тип. Аргумент `data` может быть пропущен и тогда компонент получит стандартные значения.

## Удаление компонентов

~~~js~~~
var entity = new pc.Entity();

// Добавляем камеру со стандартными свойствами
entity.addComponent("camera");

// Удаляем камеру
entity.removeComponent("camera");
~~~

Компоненты сущности могут быть удалены по отдельности, по средством метода `removeComponent`.

## Удаление сущностей

~~~js~~~
// Создание сущности
var entity = new pc.Entity();

// Создание камеры со стандартными значениями
entity.addComponent("camera");

// Создание модели куба и добавление его к сущности
entity.addComponent("model", {
    type: 'box',
});

// Добавление модели к иерархии
this.app.root.addChild(entity);

// Удаление сущности и удаление ее из иерархии
entity.destroy();
~~~

Когда вы закончите работу с сущностью, вы можете вызвать метод `destroy`. Это удалит все компоненты и удалит сущность из иерархии. Это также удалит и все дочерние сущности.

## В действии

~~~js~~~
var EntityCreator = pc.createScript('entityCreator');

EntityCreator.attributes.add('material', {
    type: 'asset',
    assetType: 'material'
});

EntityCreator.attributes.add('boxDimensions', {
    type: 'number',
    default: 10
});

EntityCreator.attributes.add('lifetime', {
    type: 'number',
    default: 5
});

EntityCreator.attributes.add('maxCubes', {
    type: 'number',
    default: 10
});

// Код, который вызывается единожды
EntityCreator.prototype.initialize = function() {
    this.entities = [];
};

// Обновление каждый кадр
EntityCreator.prototype.update = function(dt) {
    // Спауним кубы, если их количество меньше, чем максимальное
    while (this.entities.length < this.maxCubes) {
        this.spawnCube();
    }

    // Цикл по всем сущностям. Удаляем их, если их время вышло
    for (i = 0; i < this.entities.length; i++) {
        this.entities[i].timer -= dt;
        if (this.entities[i].timer < 0) {
            // entity.destroy() удаляет все компоненты и сущность из иерархии
            this.entities[i].entity.destroy();

            // Удаление из местного списка
            this.entities.splice(i, 1);
        }
    }
};

EntityCreator.prototype.spawnCube = function () {
    var entity = new pc.Entity();

    // Создание модели кубика и добавление ее к сущности.
    entity.addComponent("model", {
        type: 'box'
    });

    // Установка материала
    entity.model.material = this.material.resource;

    // Перемещение в случайное место
    entity.setLocalPosition(
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions)
    );

    // Добавление модели к иерархии
    this.app.root.addChild(entity);

    // Добавление в лист со случайным временем жизни
    this.entities.push({
        entity: entity,
        timer: pc.math.random(0, this.lifetime)
    });
};
~~~

Это полный скрипт, работу которого вы можете видеть в начале уроке. Это продолжает создавать и удалять новые сущности с добавленными компонентами модели.

Смотрите [полную сцену здесь][2].

[1]: /user-manual/packs/components/
[2]: https://playcanvas.com/editor/scene/440341

