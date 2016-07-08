---
title: プログラムでエンティティを作成
template: tutorial-page.tmpl.html
position: 2
---

<iframe src="https://playcanv.as/p/1VjdIY7v/" ></iframe>

基本的に、エンティティはPlayCanvas Editorで作成され、ゲームを作成するためのコンポーネントやスクリプトを構築します。しかし、スクリプトからエンティティを作成する方が便利な場合もあります。このチュートリアルではその方法を説明します。

## エンティティの作成

~~~js
var entity = new pc.Entity(); // Create an Entity

// Add it to the Entity hierarchy
this.app.root.addChild(entity);
~~~

First you need to create an Entity. This is straightforward, but it is important to add the Entity to the main Entity hierarchy. Only Entities in the hierarchy will have their transforms, Components and scripts updated. In your scripts you can access the root of the Entity hierarchy from the `Application` object which is passed into your script. By convention this is usually named `app` and the hierarchy root is available as `this.app.root`.

## コンポーネントの追加

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

エンティティはそのままの状態では機能しないので、コンポーネントを追加して機能を加えます。エンティティのaddComponentメソッドを使用して新規コンポーネントを作成し、エンティティに追加します。

各コンポーネントタイプにはデータオブジェクトでパスインできる異なるプロパティがあります。利用可能なプロパティの詳細は[コンポーネントドキュメント][1]からご確認ください。data引数を空にするとデフォルト値が使用されます。

## コンポーネントの削除

~~~js~~~
var entity = new pc.Entity();

// デフォルト値のカメラコンポーネントを添付
entity.addComponent("camera");

// カメラコンポーネントの削除
entity.removeComponent("camera");
~~~

エンティティでremoveComponentメソッドを呼ぶことで、エンティティから個別にコンポーネントを削除することができます。

## エンティティの削除

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

エンティティの使用が完了したら、エンティティのdestroyメソッドを呼ぶことができます。これで、全てのコンポーネントは削除され階層からエンティティが削除されます。同じように、全ての子エンティティも削除されます。

## 作動中

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

これはチュートリアルの初めに作動している状態を確認できる、完全なエンティティスクリプトです。添付されたモデルコンポーネントを使用して、新規エンティティを繰り返し作成および削除します。

[フルシーンはこちらから][2].

[1]: /user-manual/packs/components/
[2]: https://playcanvas.com/editor/scene/440341

