---
title: 以编程方式创建实体
template: tutorial-page.tmpl.html
tags: procedural, basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406042/4479BC-image-75.jpg
---

<iframe src="https://playcanv.as/p/1VjdIY7v/" ></iframe>

通常，您将通过PlayCanvas编辑器创建实体，构建组件和脚本的集合，以创建游戏的各个部分。 但是，在某些情况下，在脚本中创建实体很方便。 本教程将向您展示如何操作。

## 创建一个实体

```javascript
var entity = new pc.Entity(); // Create an Entity

// Add it to the Entity hierarchy
this.app.root.addChild(entity);
```

首先你需要创建一个Entity。 这很简单，但将Entity添加到主Entity层次结构这一步很重要。 只有在层次结构中的实体才具有变换块，组件和脚本更新。 在脚本中，您可以从传递到脚本中的`Application`对象访问Entity层次结构的根节点。 按照惯例，这通常命名为“app”，层次结构根可以作为`this.app.root`。

## 添加组件

```javascript
// Create a new Entity
var entity = new pc.Entity();

// Add a new Camera Component with default values
entity.addComponent("camera");

// Add a new Model Component and add it to the Entity.
entity.addComponent("render", {
    type: 'box',
});

// Add it to the Entity hierarchy
this.app.root.addChild(entity);
```

一个实体本身没有太多功能，所以为了添加功能到您的实体您将需要添加组件。 您可以使用Entity的`addComponent`方法创建一个新的组件并添加到实体中。

每个组件类型都具有可以在数据对象上传递的不同属性，有关可用属性的更多详细信息，请参见[组件文档][1]。 `data`参数可以省略，并使用默认值。

## 移除组建

```javascript
var entity = new pc.Entity();

// Attach Camera Component with default values
entity.addComponent("camera");

// Delete the Camera Component
entity.removeComponent("camera");
```

组件可以通过调用Entity上的`removeComponent`方法从Entity中单独删除。

## 删除实体

```javascript
// Create a new Entity
var entity = new pc.Entity();

// Create a new Camera Component with default values
entity.addComponent("camera");

// Create a new Model Component and add it to the Entity.
entity.addComponent("render", {
    type: 'box',
});

// Add it to the Entity hierarchy
this.app.root.addChild(entity);

// Delete the Entity and remove it from the hierarchy
entity.destroy();
```

当你完成一个实体，你调用了实体上的`destroy`方法。 这将删除所有组件并从层次结构中删除实体。 它还将以相同的方式删除所有子实体。

## 所有步骤

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
    entity.addComponent("render", {
        type: 'box'
    });

    // set material
    entity.render.material = this.material.resource;

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
```

这是一个完整的实体脚本，您可以在教程顶部的操作中看到。 它持续创建和销毁附加了模型组件的新实体。

在这里查看 [完整的场景][2]。

[1]: /user-manual/packs/components/
[2]: https://playcanvas.com/editor/scene/440341

