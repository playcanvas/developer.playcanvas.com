---
title: 基本的なキーボード入力
template: tutorial-page.tmpl.html
position: 1
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_keyboard?overlay=false"></iframe>

*クリックでフォーカスして、左矢印、右矢印、空白バーを押してキューブを回転します。aキーを押して離すことで色を変更します。*

PlayCanvasエンジンのキーボード処理はpc.Keyboardオブジェクトにより提供されます。Keyboardオブジェクトは一般的なキーボード操作のシンプルなインターフェイスを提供します。また、keycodeやcharcodeの処理に伴うクロスブラウザの問題を取り除きます。

[チュートリアルプロジェクト][1]のキーボード入力シーンをご確認ください。チュートリアルのコードはこちらです：

~~~javascript~~~
pc.script.create("keyboard_handler", function (app) {

    var KeyboardHandler = function (entity) {
        this.entity = entity;
    };

    KeyboardHandler.prototype = {
        initialize: function () {
            // on()を使用してキーボードデバイスでイベントをリッスンします。
            // 引数：
            // 1) リッスンスルイベント名
            // 2) イベントが発動する際に呼ぶコールバック関数
            // 3) (任意) コールバック関数で'this'に使用する値
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
            app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);

            this.redMaterial = app.assets.find("Red", pc.asset.ASSET_MATERIAL);
            this.whiteMaterial = app.assets.find("White", pc.asset.ASSET_MATERIAL);
        },

        update: function (dt) {
            /*
             * デモでは矢印キーを押して押さえても
             * ブロックはスピンしません。wasPressed()を使って
             * 最後のフレーム以降に発生したkeypressを探知。
             * キーが押さえられていても一度しか呼ばれません。
             */
            var angle = 0;
            if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                angle = -5;
            } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
                angle = 5;
            }

            /*
             * スペースバーを押して押さえるとブロックは
             * 繰り返しスピンします。isPressed()を使用して
             * キーが押さえられているかを探知します。つまりキーが押されている限り
             * 毎フレームでtrueになります。
             */
            if (app.keyboard.isPressed(pc.KEY_SPACE)) {
                angle = 1;
            }

            // スピンするキューブを更新
            this.entity.rotateLocal(0, angle, 0);
        },

        /*
        * キーが押されるとイベントハンドラが呼ばれる
        */
        onKeyDown: function (event) {
            // event.keyを確認してどのキーが押されたかを探知
            if (event.key === pc.KEY_A) {
                this.entity.model.materialAsset = this.redMaterial;
            }

            // スペースバーが押されると画面をスクロール
            // 元のブラウザイベントでpreventDefault()を呼ぶとこれが停止
            event.event.preventDefault();
        },

        /*
        * キーが開放されるとイベントハンドラが呼ばれる
        */
        onKeyUp: function (event) {
            // event.keyを確認してどのキーが押されたかを探知
            if (event.key === pc.KEY_A) {
                this.entity.model.materialAsset = this.whiteMaterial;
            }
        },
    };

    return KeyboardHandler;
});
~~~

キーボードの入力を探知する方法は二つあります。一つ目はスクリプトの更新メソッドで行われます。isPressed()とwasPressed()を使用してキーが現在押されているか、押されたばかりかを確認します。二つ目は、イベントを使用してキーの押下や開放の実行時に反応します。

## `isPressed` vs `wasPressed`

上記デモで、isPressed()とwasPressed()の挙動の違いを確認できます。

左右どちらかのキーを押さえるとキューブは5&deg;回転しますが、回転するのは一度のみです。wasPressed()はキーが押された直後のフレームにのみtrueを返すからです。

スペースバーを押さえると、キューブはフレーム毎に繰り返し1&deg;回転します。isPressed()がキーが押される全てのフレームに対してtrueを返すためです。

### `isPressed(key)`

sPressed(key)はkeyが現在押されているかを確認して、押されている場合はtrueを返します。キーが押されている間の全てのフレームにtrueを返します。

### `wasPressed(key)`

wasPressed(key)は*最後のフレーム以来*keyが押されたかどうかを確認します。wasPressed()は一度のキー押下に対して一度のみtrueを返します。

## イベント

キーの押下を処理する二つ目の方法は、イベントへのリッスンです。Keyboardデバイスでは二つのキーボードイベントが対応されています：

* `pc.EVENT_KEYDOWN`
* `pc.EVENT_KEYUP`

[DOM][3] キーボードイベントは異なるブラウザで異なる形で実装されるので、PlayCanvas Engineは如何なる場所でも同じコードを使用できるよう、`pc.Keyboard`オブジェクトでイベントを提供します。キーボードイベントが発動すると、押下または開放されたキーのキーコードを含むpc.KeyboardEvent`オブジェクトがイベントハンドラに渡されます。

`this`またはスクリプトインスタンス自体である3つ目の引数をon()に渡しています。on()に渡す3つ目の引数はイベントコールバックの`this`として使用されるので、この中で渡さないと、正しいオブジェクトに設定されません。

## キーコード

キーコードを使用してどのキーが押されたかを識別します。これらはキーボードのキーと一致する数値です。例えば、pc.KEY_Aは`A` キー、pc.LEFTは矢印キーです。

数値を使用するのではなく、常に`pc.KEY_*`列挙を使用してください。後にこれらの不変数の実績値は変わる可能性があるからです。

## 試してみよう

[こちら][2] またはページの上部からお試しください。矢印キーやスペースバーを叩いたり押さえたりして比べて見てください。

[1]: https://playcanvas.com/project/186/overview/tutorials
[2]: http://apps.playcanvas.com/playcanvas/tutorials/input_keyboard
[3]: /user-manual/glossary#dom

