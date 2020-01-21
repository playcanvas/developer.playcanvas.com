---
title: Programmatically Creating Entities
template: tutorial-page.tmpl.html
tags: procedural, basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406042/4479BC-image-75.jpg
---

<iframe src="https://playcanv.as/p/1VjdIY7v/" ></iframe>

Обычно, вы создавали сущности через редактор PlayCanvas, собирая коллекции компонентов и скриптов для созданий разных частей вашей игры. Однако, в некоторых случаях, вам необходимо создавать сущности в скрипте. В этом уроке узнаете, как это делать.

## Создание сущности

~~~js
var entity = new pc.Entity(); // Create an Entity

// Add it to the Entity hierarchy
this.app.root.addChild(entity);
~~~

Сперва вам нужно создать сущность. Это просто, но важно не забыть добавить сущность к главной иерархии сущностей. Только сущности в иерархии могут быть трансформированы, иметь компоненты и скрипты. В ваших скриптах вы можете обратиться к корню иерархии сущностей из объекта класса Application, который передан в ваш скрипт. Условно, он обычно называется "app" и иерархия доступна через "this.app.root".

## Добавление компонентов

~~~js~~~
// Create a new Entity
var entity = new pc.Entity();

// Add a new Camera Component with default values
entity.addComponent("camera");

// Add a new Model Component and add it to the Entity.
entity.addComponent("model", {
    type: 'box',
});

// Add it to the Entity hierarchy
this.app.root.addChild(entity);
~~~

Сущность, как она есть, не имеет смысла, поэтому вам необходимо добавить компоненты, чтобы добиться результата. Вы можете использовать метод `Добавить компонент` сущности чтобы создать и добавить компонент.

Каждый тип компонентов имеет разные свойства, которые могут быть переданы в одном объекте, смотрите  [Документацию по компонентам][1] чтобы узнать о том, какими свойствами обладает данный тип. Аргумент `data` может быть пропущен и тогда компонент получит стандартные значения.

## Удаление компонентов

~~~js~~~
var entity = new pc.Entity();

// Attach Camera Component with default values
entity.addComponent("camera");

// Delete the Camera Component
entity.removeComponent("camera");
~~~

Компоненты сущности могут быть удалены по отдельности, по средством метода `removeComponent`.

## Удаление сущностей

~~~js~~~
// Create a new Entity
var entity = new pc.Entity();

// Create a new Camera Component with default values
entity.addComponent("camera");

// Create a new Model Component and add it to the Entity.
entity.addComponent("model", {
    type: 'box',
});

// Add it to the Entity hierarchy
this.app.root.addChild(entity);

// Delete the Entity and remove it from the hierarchy
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

// initialize code called once per entity
EntityCreator.prototype.initialize = function() {
    this.entities = [];
};

// update code called every frame
EntityCreator.prototype.update = function(dt) {
    // Spawn new cubes if there are less than maxCubes
    while (this.entities.length < this.maxCubes) {
        this.spawnCube();
    }

    // Loop through Entities and delete them when their time is up
    for (i = 0; i < this.entities.length; i++) {
        this.entities[i].timer -= dt;
        if (this.entities[i].timer < 0) {
            // entity.destroy() deletes all components and removes Entity from the hierarchy
            this.entities[i].entity.destroy();

            // Remove from the local list
            this.entities.splice(i, 1);
        }
    }
};

EntityCreator.prototype.spawnCube = function () {
    var entity = new pc.Entity();

    // Add a new Model Component and add it to the Entity.
    entity.addComponent("model", {
        type: 'box'
    });

    // set material
    entity.model.material = this.material.resource;

    // Move to a random position
    entity.setLocalPosition(
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions)
    );

    // Add to the Hierarchy
    this.app.root.addChild(entity);

    // Store in a list for some random duration before deleting
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

