---
title: プログラムでエンティティを作成
template: tutorial-page.tmpl.html
tags: procedural, basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406042/4479BC-image-75.jpg
---

<iframe src="https://playcanv.as/p/1VjdIY7v/" ></iframe>

基本的に、エンティティはPlayCanvas Editorで作成され、ゲームを作成するためのコンポーネントやスクリプトを構築します。しかし、スクリプトからエンティティを作成する方が便利な場合もあります。このチュートリアルではその方法を説明します。

## エンティティの作成

~~~js
var entity = new pc.Entity(); // エンティティを作成

// エンティティ階層に追加
this.app.root.addChild(entity);
~~~

まず、エンティティを作成する必要があります。これは簡単ですが、メインのエンティティ階層にエンティティを追加することが重要です。階層内のエンティティのみ、トランスフォーム、コンポーネントおよびスクリプトが更新されます。スクリプトに渡される`Application`オブジェクトからエンティティ階層のルートにアクセスすることができます。慣例により、これは通常`app`と名付けられ、階層ルートは`this.app.root`として提供されます。

## コンポーネントの追加

~~~js~~~
// 新しいエンティティを作成
var entity = new pc.Entity();

// デフォルト値の新しいCamera Componentを追加
entity.addComponent("camera");

// 新しいModel Componentを追加してエンティティに追加
entity.addComponent("model", {
    type: 'box',
});

// エンティティ階層に追加
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
// 新しいエンティティを作成
var entity = new pc.Entity();

// デフォルト値の新しいCamera Componentを作成
entity.addComponent("camera");

// 新しいModel Componentを作成してエンティティに追加
entity.addComponent("model", {
    type: 'box',
});

// エンティティ階層に追加
this.app.root.addChild(entity);

// エンティティを削除して階層から取り除く
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

// initializeコードがエンティティ毎に一度のみ呼ばれる
EntityCreator.prototype.initialize = function() {
    this.entities = [];
};

// updateコードが毎フレーム呼ばれる
EntityCreator.prototype.update = function(dt) {
    // maxCubes以下の場合、新しいキューブをスポーンする
    while (this.entities.length < this.maxCubes) {
        this.spawnCube();
    }

    // エンティティの中をループして時間切れの際に削除する
    for (i = 0; i < this.entities.length; i++) {
        this.entities[i].timer -= dt;
        if (this.entities[i].timer < 0) {
            // entity.destroy()は全てのコンポーネントを削除してエンティティを階層から取り除く
            this.entities[i].entity.destroy();

            // ローカルリストから除外
            this.entities.splice(i, 1);
        }
    }
};

EntityCreator.prototype.spawnCube = function () {
    var entity = new pc.Entity();

    // 新しいModel Componentを追加してエンティティに追加
    entity.addComponent("model", {
        type: 'box'
    });

    // 素材を設定
    entity.model.material = this.material.resource;

    // ランダムな位置に移動
    entity.setLocalPosition(
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions),
        pc.math.random(-this.boxDimensions, this.boxDimensions)
    );

    // 階層に追加
    this.app.root.addChild(entity);

    // 削除前にランダムな期間、リストに保管
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

