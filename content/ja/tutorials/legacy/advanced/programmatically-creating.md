---
title: プログラムでエンティティを作成
template: tutorial-page-legacy.tmpl.html
position: 2
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/creating_entities?overlay=false" ></iframe>

基本的に、エンティティはPlayCanvas Editorで作成され、ゲームを作成するためのコンポーネントやスクリプトを構築します。しかし、スクリプトからエンティティを作成する方が便利な場合もあります。このチュートリアルではその方法を説明します。

## エンティティの作成

~~~js
var entity = new pc.Entity(); // エンティティを作成

// エンティティ階層に追加
app.root.addChild(entity);
~~~

まずはエンティティを作成する必要があります。これは簡単ですが、メインのエンティティ階層にエンティティを追加することが重要です。変換、コンポーネント、スクリプトが更新されるのは階層内のエンティティのみです。スクリプトにパスインされるApplicationオブジェクトからエンティティ階層のルートにアクセスできます。規定により、これは通常appと名付けられ、階層ルートはapp.rootとなります。

## コンポーネントの追加

~~~js~~~
// 新しいエンティティを作成
var entity = new pc.Entity();

// デフォルト値の新しいカメラコンポーネントを追加
entity.addComponent("camera");

// 新しいモデルコンポーネントを追加してエンティティに追加
entity.addComponent("model", {
    type: 'box',
});

// エンティティ階層に追加
app.root.addChild(entity);
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

// デフォルト値の新しいカメラコンポーネントを作成
entity.addComponent("camera");

// 新しいモデルコンポーネントを作成してエンティティに追加
entity.addComponent("model", {
    type: 'box',
});

// エンティティ階層に追加
app.root.addChild(entity);

// エンティティを削除して階層から除去
entity.destroy();
~~~

エンティティの使用が完了したら、エンティティのdestroyメソッドを呼ぶことができます。これで、全てのコンポーネントは削除され階層からエンティティが削除されます。同じように、全ての子エンティティも削除されます。

## 作動中

~~~js~~~
pc.script.attribute("materials", "asset", [], {type: "material"});

pc.script.create('entity_creator', function (app) {

    var MAX_X = 10;
    var MIN_X = -10;
    var MAX_Y = 10;
    var MIN_Y = -10;
    var MAX_Z = 10;
    var MIN_Z = -10;

    var NUM_CUBES = 10;

    var MAX_DURATION = 5;

    var EntityCreator = function (entity) {
        this.entity = entity;
        this.entities = [];
    };

    EntityCreator.prototype = {
        initialize: function () {
        },

        update: function (dt) {
            // NUM_CUBESより少ない場合、新しいキューブをスポーン
            while (this.entities.length < NUM_CUBES) {
                this.spawnCube();
            }

            // エンティティをループするーして時間が切れたら削除
            for (i = 0; i < this.entities.length; i++) {
                this.entities[i].timer -= dt;
                if (this.entities[i].timer < 0) {
                    // entity.destroy() は全てのコンポーネントを削除して階層からエンティティを除去
                    this.entities[i].entity.destroy();

                    // ローカルリストから除去
                    this.entities.splice(i, 1);
                }
            }
        },

        spawnCube: function () {
            var entity = new pc.Entity();

            // 新しいモデルコンポーネントを追加してエンティティに追加
            entity.addComponent("model", {
                type: 'box'
            });
            var red = app.assets.getAssetByResourceId(this.materials[0]).resource;
            entity.model.model.meshInstances[0].material = red;

            // ランダムな位置に移動
            entity.setLocalPosition(
                pc.math.random(MIN_X, MAX_X),
                pc.math.random(MIN_Y, MAX_Y),
                pc.math.random(MIN_Z, MAX_Z)
            );

            // 階層に追加
            app.root.addChild(entity);

            // 削除する前にランダムな期間リストに保管する
            this.entities.push({
                entity: entity,
                timer: pc.math.random(0, MAX_DURATION)
            });
        }
    };

    return EntityCreator;
});
~~~

これはチュートリアルの初めに作動している状態を確認できる、完全なエンティティスクリプトです。添付されたモデルコンポーネントを使用して、新規エンティティを繰り返し作成および削除します。

[フルシーンはこちらから][2].

[1]: /user-manual/packs/components/
[2]: https://playcanvas.com/editor/scene/329669

