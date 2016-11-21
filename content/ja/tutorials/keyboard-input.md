---
title: 基本的なキーボード入力
template: tutorial-page.tmpl.html
tags: input
---

<iframe src="https://playcanv.as/p/rFZGQWCi?overlay=false"></iframe>

*クリックでフォーカスして、左矢印、右矢印、空白バーを押してキューブを回転します。aキーを押して離すことで色を変更します。*

PlayCanvasエンジンのキーボード処理はpc.Keyboardオブジェクトにより提供されます。Keyboardオブジェクトは一般的なキーボード操作のシンプルなインターフェイスを提供します。また、keycodeやcharcodeの処理に伴うクロスブラウザの問題を取り除きます。

[チュートリアルプロジェクト][1]のキーボード入力シーンをご確認ください。チュートリアルのコードはこちらです：

~~~javascript~~~
var KeyboardHandler = pc.createScript('keyboardHandler');

KeyboardHandler.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

KeyboardHandler.attributes.add('whiteMaterial', {
    type: 'asset',
    assetType: 'material'
});

// initialize code called once per entity
KeyboardHandler.prototype.initialize = function() {
    // Use on() to listen for events on the keyboard device.
    // Arguments are:
    // 1) The event name to listen for
    // 2) The callback function to call when the event fires
    // 3) (optional) The value to use for 'this' in the callback function

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);
};

// update code called every frame
KeyboardHandler.prototype.update = function(dt) {
    /*
     * Notice in the demo that pressing and holding the arrow keys doesn't
     * make the block spin. wasPressed() is used to detect a
     * keypress that occurred since the last frame and will only be
     * called once even if the key is held down.
     */
    var angle = 0;
    if (this.app.keyboard.wasPressed(pc.KEY_LEFT)) {
        angle = -5;
    } else if (this.app.keyboard.wasPressed(pc.KEY_RIGHT)) {
        angle = 5;
    }

    /*
     * Notice that pressing and holding the space bar makes the block
     * continuously spin. isPressed() is used to detected if a
     * key is down right now. So it will be true every frame as long as
     * the key is still pressed.
     */
    if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {
        angle = 1;
    }

    // Update the spinning cube
    this.entity.rotateLocal(0, angle, 0);
};

/*
* Event handler called when key is pressed
*/
KeyboardHandler.prototype.onKeyDown = function (event) {
    // Check event.key to detect which key has been pressed
    if (event.key === pc.KEY_A && this.redMaterial) {
        this.entity.model.meshInstances[0].material = this.redMaterial.resource;
    }

    // When the space bar is pressed this scrolls the window.
    // Calling preventDefault() on the original browser event stops this.
    event.event.preventDefault();
};

/*
* Event handler called when key is released
*/
KeyboardHandler.prototype.onKeyUp = function (event) {
    // Check event.key to detect which key has been pressed
    if (event.key === pc.KEY_A && this.whiteMaterial) {
        this.entity.model.meshInstances[0].material = this.whiteMaterial.resource;
    }
};
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

[1]: https://playcanvas.com/project/405804/overview/tutorial-basic-keyboard-input
[2]: https://playcanv.as/p/rFZGQWCi
[3]: /user-manual/glossary#dom

