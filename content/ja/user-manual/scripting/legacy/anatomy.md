---
title: スクリプトの構成
template: usermanual-page.tmpl.html
position: 2
---

~~~js~~~
pc.script.create("script_name", function (app) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    };

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {

        }
    };

    return ScriptObject;
});
~~~
*A skeleton script*

スクリプトのスケルトンを用意しました。機能するスクリプトを作るための最低限のコードを示します。

<div class="alert alert-info"> 実際は、スクリプトから`initialize`と`update`メソッドを除外することもできます。しかし、ほとんどのスクリプトは動作するためにupdateメソッドを必要とします。initializeメソッドも、ゲームの開始前に値を設定するのに便利です。 </div>

項目毎にこのスクリプトの各箇所を分解します。

## 宣言とアプリケーション

~~~js~~~
pc.script.create("script_name", function(app) {
    //...
});
~~~

スクリプト全体を囲むのがpc.script.create`への呼び出しです。最初の引数は、スクリプト名です。これは、インスタンス間での通信を希望する場合に後でこのスクリプトを識別するために使用されます。二つ目の引数は、スクリプトの挙動を提供するクラスを定義するために使用する関数です。

定義関数は単一の引数を使用します。それは、[`Application`][1]インスタンスです。

`ScriptObject`はClosureなので、` app`変数はスクリプトオブジェクト全体で使用できます。これには種々の有用なプロパティが含まれています。

* `systems` 全てのコンポーネントシステムのコンテナ。例： `app.systems.model` はモデルコンポーネントシステム
* `root` エクスポート階層のルートノード。
* `keyboard` `pc.Keyboard`のインスタンス
* `mouse` `pc.Mouse`のインスタンス
* `scene` `pc.Scene`のインスタンス
* `assets` アセットを読み込みアクセスするための、`pc.AssetRegistry` のインスタンス

pc.Applicationオブジェクトの詳細は[API Reference][2]から確認してください。

## スクリプトオブジェクトの定義

~~~js~~~
pc.script.create("script_name", function (app) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    }

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {

        }
    };

    return ScriptObject;
})
~~~

二つ目の引数の関数の目的は、スクリプトオブジェクトを定義し、エンジンが各エンティティに新しいインスタンスをインスタンス化することができるように、その定義を返すことです。

ここでは基本的な設定を確認できます。変数`ScriptObject`は、それが添付されているエンティティを唯一の引数とするコンストラクタ関数として宣言されます。通常、後で使用するためにこのエンティティをインスタンスに保管すると便利です。したがって、行は`this.entity = entity;`となります。オブジェクトのメンバー変数もここで作成する場合が多いです。

次に、初期化および更新機能を定義します。 `initialize()`は各スクリプトインスタンスに1度呼び出されます。それは全てのエンティティが読み込まれた後 (`app.root`のエンティティ階層が有効であるように) 、`update()`メソッドが呼ばれる前に呼ばれます。 `update()` スクリプトの更新ループです。スクリプトコンポーネントシステムは、変数 `dt`の最後の更新からの経過時間（秒）で、フレーム毎に更新関数を呼び出します。どちらの機能も任意であり、使用されない場合は除外するべきです。

最後に、`ScriptObject`変数を返します。

## 完成された例

これは完全なスクリプトです。ファイルに保存し、パックでエンティティに添付してください。

~~~js~~~
///
// This script moves the entity backwards and forwards on the x-axis.
// You can pause the oscillation by pressing the space bar.
///
pc.script.create('oscillator', function (app) {

    // define the constructor
    var Oscillator = function (entity) {
        this.entity = entity;

        this.paused = false; // paused state
        this.amplitude = 10; // The amount to oscillate
        this.time = 0; // The time value for the oscillation
    };

    // define the update function
    Oscillator.prototype = {
        update: function (dt) {

            // Use the keyboard handler from the Application
            // to pause/unpause
            if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
                this.paused = !this.paused; // toggle paused state
            }

            if (!this.paused) {
                // increment the time value by the frametime
                this.time += dt;

                // Calculate the new value
                var x = this.amplitude * Math.sin(this.time);

                // Update the x position of the Entity
                this.entity.setLocalPosition(x, 0, 0);
            }
        }
    };

    // return the class definition
    return Oscillator;
});
~~~

## ビルトインのスクリプトメソッド

それらが存在する場合にエンジンに呼び出されるスクリプトのすべてのメソッドのリストです。呼び出された順に示します。

`initialize()`

これは、すべてのエンティティが読み込まれた後にスクリプトで呼び出される最初のメソッドです。一度だけ呼び出されます。初期化に使用します。

`onEnable()`

このスクリプトが添付されるスクリプトコンポーネントまたはそのエンティティが有効になるたびに呼び出されます。`initialize`メソッドの直後にも呼び出されます。スクリプトコンポーネントまたはエンティティが有効になるたびに発生するべきことのために使用します。

`postInitialize()`

`onEnable`の後に1回だけ呼び出されます。異なるスクリプトの初期化に順番を与える場合などに使用します。たとえば、別のスクリプトを初期化した後に特定のスクリプトを初期化したい場合などです。

`update(dt)`

変数 `dt`の最後の更新から経過した時間を秒単位でフレームごとに呼び出します。オブジェクトを動かしたり、力を加えたり、入力をチェックする場合等の、継続的に実行する必要があるものにこれを使用します。更新メソッドが必要ない場合は、パフォーマンスを向上させるために削除してください。

`postUpdate(dt)`

` update`メソッドと同じ `dt`を持つ`update`メソッドの後、すべてのフレームで呼び出します。これを使用して`update`ステップの後に必要なアクションを実行します。例えば、エンティティを追跡するカメラスクリプトは、` update`で移動したエンティティを追跡している可能性があるため `postUpdate`で移動する必要があります。

`onDisable()`

このスクリプトが添付されるスクリプトコンポーネントまたはそのエンティティが無効になったときに呼び出されます。また、`destroy`メソッドの直前にも呼ばれます。これは、スクリプトコンポーネントまたはエンティティが無効になるたびに発生する必要があることに使用します。

`destroy()`

このスクリプトが添付されているスクリプトコンポーネントまたはそのエンティティが破棄されると呼び出されます。 これを使用してクリーンアップします。

`onAttributeChanged(name, oldValue, newValue)`

[Script Attribute] [3]の値がEditorから変更されたときに呼び出されます。属性の名前と古い値と新しい値がメソッドに渡されます。属性を変更した場合、これを使用してスクリプトを更新します。

[1]: /user-manual/glossary#application
[2]: /engine/api/stable/symbols/pc.Application.html
[3]: /user-manual/scripting/script-attributes/

