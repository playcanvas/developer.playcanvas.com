---
title: スクリプトの構造
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

機能するスクリプトを作るための最低限のコードを示すスクリプトのスケルトンを用意しました。

<div class="alert alert-info">
実際は、スクリプトから`initialize`と`update`メソッドを除外することもできます。しかし、ほとんどのスクリプトは動作するためにupdateメソッドを必要とします。initializeメソッドも、ゲームの開始前に値を設定するのに便利です。
</div>

項目毎にこのスクリプトの各箇所を分解します。

## 宣言とアプリケーション

~~~js~~~
pc.script.create("script_name", function(app) {
    //...
});
~~~

スクリプト全体を囲むのがpc.script.create`への呼び出しです。最初の引数は、スクリプト名です。これは、インスタンス間での通信を希望する場合に後でこのスクリプトを識別するために使用されます。二つ目の引数は、スクリプトの挙動を提供するクラスを定義するために使用する関数です。

定義関数は単一の引数を取ります。それは、[`Application`][1]インスタンスです。

`ScriptObject`はClosureなので、` app`変数はスクリプトオブジェクト全体で使用できます。これには種々の有用なプロパティが含まれています。

* `systems` 全てのコンポーネントシステムのコンテナ。例： `app.systems.model` はモデルコンポーネントシステム
* `root` エクスポート階層のルートノード。
* `keyboard` `pc.Keyboard`のインスタンス
* `mouse` `pc.Mouse`のインスタンス
* `scene` `pc.Scene`のインスタンス
* `assets` アセットを読み込みアクセスするための、`pc.AssetRegistry` のインスタンス

pc.Applicationオブジェクトの詳細は[API Reference][2]から確認。

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

ここで基本的な設定を確認できます。変数`ScriptObject`は、それが添付されているエンティティを唯一の引数とするコンストラクタ関数として宣言されます。通常、後で使用するためにこのエンティティをインスタンスに保管すると便利です。　あまりにもここにあなたのオブジェクトのメンバ変数を作成します。したがって、行は`this.entity = entity;`となります。オブジェクトのメンバー変数もここで作成する場合が多いです。

次に、初期化および更新機能を定義します。 `initialize()`は各スクリプトインスタンスに1回呼び出されます。それは全てのエンティティが読み込まれた後 (`app.root`のエンティティ階層が有効であるように) 、`update()`メソッドが呼ばれる前に呼ばれます。
`update()` スクリプトの更新ループです。スクリプトコンポーネントシステムは、変数 `dt`の最後の更新からの経過時間（秒）で、フレーム毎に更新関数を呼び出します。どちらの機能も任意であり、使用されない場合は除外するべきです。

最後に、`ScriptObject`変数を返します。

## 完成された例

完全なスクリプトです。ファイルに保存し、パックでエンティティに添付してみてください。

~~~js~~~
///
// このスクリプトはx軸上で前後にエンティティを動かします。
// スペースバーを押すことで、振動を一時停止することができます。
///
pc.script.create('oscillator', function (app) {

    // コンストラクタを定義
    var Oscillator = function (entity) {
        this.entity = entity;

        this.paused = false; // paused state
        this.amplitude = 10; // The amount to oscillate
        this.time = 0; // The time value for the oscillation
    };

    // 更新関数を定義
    Oscillator.prototype = {
        update: function (dt) {

            // アプリケーションのキーボードハンドラを使用して
            // 一時停止／再開
            if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
                this.paused = !this.paused; // toggle paused state
            }

            if (!this.paused) {
                // frametimeによって時間値をインクリメント
                this.time += dt;

                // 新しい値を計算
                var x = this.amplitude * Math.sin(this.time);

                // エンティティのx位置を更新
                this.entity.setLocalPosition(x, 0, 0);
            }
        }
    };

    // クラス定義を返す
    return Oscillator;
});
~~~

[1]: /user-manual/glossary#application
[2]: /engine/api/stable/symbols/pc.Application.html

