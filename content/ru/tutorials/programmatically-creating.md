---
title: Программное создание Entity
layout: tutorial-page.hbs
tags: procedural, basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406042/4479BC-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/1VjdIY7v/" title="Programmatically Creating Entities"></iframe>

Обычно вы будете создавать Entity с помощью редактора PlayCanvas, создавая наборы компонентов и скриптов для создания различных частей вашей игры. Однако в некоторых случаях удобно создавать Entity в ваших скриптах. В этом уроке показано, как это сделать.

## Создание Entity

```javascript
var entity = new pc.Entity(); // Создать Entity

// Добавить его в иерархию Entity
this.app.root.addChild(entity);
```

Сначала вам нужно создать Entity. Это просто, но важно добавить Entity в основную иерархию Entity. Только Entity в иерархии будут обновлять свои трансформации, компоненты и скрипты. В своих скриптах вы можете получить доступ к корню иерархии Entity из объекта `Application`, который передается в ваш скрипт. По соглашению, это обычно называется `app`, и корень иерархии доступен как `this.app.root`.

## Добавление компонентов

```javascript
// Создать новый Entity
var entity = new pc.Entity();

// Добавить новый компонент камеры со значениями по умолчанию
entity.addComponent("camera");

// Добавить новый компонент модели и добавить его в Entity.
entity.addComponent("render", {
    type: 'box',
});

// Добавить его в иерархию Entity
this.app.root.addChild(entity);
```

Сущность (Entity) сама по себе не делает многое, поэтому вам нужно добавить компоненты, чтобы добавить функциональность вашей сущности. Вы можете использовать метод `addComponent` сущности для создания и добавления нового компонента к сущности.

У каждого типа компонента есть разные свойства, которые могут быть переданы в объекте данных, см. [документацию по компонентам][1] для более подробной информации о доступных свойствах. Аргумент `data` можно опустить, и будут использованы значения по умолчанию.

## Удаление компонентов

```javascript
var entity = new pc.Entity();

// Добавить компонент камеры со значениями по умолчанию
entity.addComponent("camera");

// Удалить компонент камеры
entity.removeComponent("camera");
```

Компоненты можно удалять по отдельности из Entity, вызвав метод `removeComponent` на Entity.

## Удаление Entities

```javascript
// Создать новый Entity
var entity = new pc.Entity();

// Создать новый компонент камеры со значениями по умолчанию
entity.addComponent("camera");

// Создать новый компонент модели и добавить его в Entity.
entity.addComponent("render", {
    type: 'box',
});

// Добавить его в иерархию Entity
this.app.root.addChild(entity);

// Удалить Entity и удалить его из иерархии
entity.destroy();
```

Когда вы закончили работу с Entity, вызовите метод `destroy` на Entity. Это удалит все компоненты и удалит Entity из иерархии. Также будут удалены все дочерние объекты Entity аналогичным образом.

## В действии

```javascript
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

// инициализация кода, вызываемая один раз для каждой сущности
EntityCreator.prototype.initialize = function() {
    this.entities = [];
};

// код обновления, вызываемый каждый кадр
EntityCreator.prototype.update = function(dt) {
    // Создаем новые кубы, если их меньше, чем maxCubes
    while (this.entities.length < this.maxCubes) {
        this.spawnCube();
    }

    // Проходимся по сущностям и удаляем их, когда их время истекает
    for (i = 0; i < this.entities.length; i++) {
        this.entities[i].timer -= dt;
        if (this.entities[i].timer < 0) {
            // entity.destroy() удаляет все компоненты и удаляет сущность из иерархии
            this.entities[i].entity.destroy();

            // Удаляем из локального списка
            this.entities.splice(i, 1);
        }
    }
};

EntityCreator.prototype.spawnCube = function () {
    var entity = new pc.Entity();

    // Добавляем новый компонент модели и добавляем его к сущности.
    entity.addComponent("render", {
        type: 'box'
    });

    // устанавливаем материал
    entity.render.material = this.material.resource;

    // Перемещаем на случайную позицию
    entity.setLocalPosition(
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions)
    );

    // Добавляем в иерархию
    this.app.root.addChild(entity);

    // Сохраняем в списке на случайную продолжительность перед удалением
    this.entities.push({
        entity: entity,
        timer: pc.math.random(0, this.lifetime)
    });
};
```

Это полный сценарий Entity, который вы можете увидеть в действии в верхней части учебника. Он постоянно создает и уничтожает новые Entity с прикрепленным компонентом Model.

Посмотрите [полную сцену здесь][2].

[1]: /user-manual/packs/components/
[2]: https://playcanvas.com/editor/scene/440341
