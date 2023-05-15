---
title: 基本的なマウス入力
layout: tutorial-page.hbs
tags: mouse, input
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/MHIdZgaj/?overlay=false" title="Basic Mouse Input"></iframe>

*マウスを動かしてキューブを動かし、マウスのボタンを押してキューブの色を変えることができます*

PlayCanvasのエンジンでは、`pc.Mouse`オブジェクトが提供されており、マウスが移動したときやマウスボタンが押されたときに検出するためのシンプルなインターフェイスを提供します。また、マウス座標の処理におけるブラウザ間での一貫性の問題を解決することができます。

[tutorial project][1]を見てみましょう。次に、mouse.jsのコードを示します。

```javascript
var Mouse = pc.createScript('mouse');

Mouse.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

Mouse.attributes.add('greenMaterial', {
    type: 'asset',
    assetType: 'material'
});

Mouse.attributes.add('blueMaterial', {
    type: 'asset',
    assetType: 'material'
});

// initialize code called once per entity
Mouse.prototype.initialize = function() {
    this.pos = new pc.Vec3();

    // Disabling the context menu stops the browser displaying a menu when
    // you right-click the page
    this.app.mouse.disableContextMenu();

    // Use the on() method to attach event handlers.
    // The mouse object supports events on move, button down and
    // up, and scroll wheel.
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

Mouse.prototype.onMouseMove = function (event) {
    // Use the camera component's screenToWorld function to convert the
    // position of the mouse into a position in 3D space
    var depth = 10;
    var cameraEntity = this.app.root.findByName('Camera');
    cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

    // Finally update the cube's world-space position
    this.entity.setPosition(this.pos);
};

Mouse.prototype.onMouseDown = function (event) {
    // If the left mouse button is pressed, change the cube color to red
    if (event.button === pc.MOUSEBUTTON_LEFT) {
        this.entity.render.meshInstances[0].material = this.redMaterial.resource;
    }

    // If the middle mouse button is pressed, change the cube color to green
    if (event.button === pc.MOUSEBUTTON_MIDDLE) {
        this.entity.render.meshInstances[0].material = this.greenMaterial.resource;
    }

    // If the right mouse button is pressed, change the cube color to blue
    if (event.button === pc.MOUSEBUTTON_RIGHT) {
        this.entity.render.meshInstances[0].material = this.blueMaterial.resource;
    }
};
```

### マウスにアクセスする

マウスの制御は、`pc.Mouse`オブジェクトによって管理されます。[フレームワーク][2]は、すべてのスクリプトオブジェクトに`this.app.mouse`という名称のオブジェクトを提供します。

```javascript
this.app.mouse
```

### 右クリックメニューの無効化

スクリプトオブジェクトのコンストラクタでは、右クリックメニューを無効にすることにより、右マウスボタンをクリックしたときに表示されるポップアップを停止します。

```javascript
this.app.mouse.disableContextMenu();
```

### イベントへのバインド

`pc.Mouse`オブジェクトでは、マウスアクションに対応する異なるイベントをリッスンすることができます。チュートリアルでは、`onMouseMove`メソッドを移動イベントにバインドし、`onMouseDown`メソッドをボタンダウンイベントにバインドしています。

イベントにバインドするには、on()メソッドを使用します。`mouse`オブジェクトでは、move、button down、up、scroll wheelに対してイベントをサポートしています。

注意して欲しいのが、イベントにバインドする時にon()メソッドに`this`を渡すこともできる点です。渡された`this`は、イベントコールバックにおいて`this`として使用されます。

```javascript
this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
```

* `pc.Mouse`で利用可能なイベントは以下の通りです。
* `pc.EVENT_MOUSEUP` - マウスボタンがリリースされた時に発生する
* `pc.EVENT_MOUSEDOWN` - マウスボタンが押されたときに発生する
* `pc.EVENT_MOUSEMOVE` - マウスが動いたときに発生する

`pc.EVENT_MOUSEWHEEL` - マウスホイールが回転したときに発生する。

### ブラウザのマウス入力は、ページのDOM要素でDOMイベントをリッスンすることで通常実装されます。問題は、異なるブラウザでイベントをやや異なる方法で実装し、異なる値を提供する点です。PlayCanvasのエンジンでは、DOMエレメントではなくPlayCanvasマウスハンドラに直接イベントハンドラをバインドすることができるため、書くコードが簡素化されます。エンジンは、イベントが発生したときにコンスタントな`pc.MouseEvent`オブジェクトを提供します。もし元のDOMイベントが必要な場合は、`pc.MouseEvent`の`event`プロパティで取得することができます。

マウスを動かす

### 最初のイベントハンドラは`onMouseMove`です。マウスが動くたびに呼び出されます。`EVENT_MOUSEMOVE`イベントにおいて、`MouseEvent`オブジェクトには、現在のマウスの位置`x`と`y`、および最後のイベントからの位置の変化量`dx`と`dy`が含まれています。このチュートリアルでは、現在のマウスの位置を使用して、キューブをカーソルの位置に移動しています。

マウスボタン

* 2番目のイベントハンドラは`onMouseDown`です。3つのマウスボタンのうち1つがクリックされたときに呼び出されます。`EVENT_MOUSEDOWN`と`EVENT_MOUSEUP`イベントでは、`MouseEvent`オブジェクトに、押された/リリースされたボタンが含まれている`button`プロパティが含まれています。以下のいずれかの値である場合があります。
* `pc.MOUSEBUTTON_NONE`
* `pc.MOUSEBUTTON_LEFT`
* `pc.MOUSEBUTTON_MIDDLE`

`pc.MOUSEBUTTON_RIGHT`

### このチュートリアルでは、マウスボタンによってキューブの色を変更しています。

試してみよう

[1]: https://playcanvas.com/project/405819/overview/tutorial-basic-mouse-input
[2]: /user-manual/glossary#framework
[3]: /user-manual/glossary#app
[4]: /user-manual/glossary#dom
[5]: https://playcanv.as/p/MHIdZgaj/
