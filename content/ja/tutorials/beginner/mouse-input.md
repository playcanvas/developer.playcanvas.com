---
title: 基本的なマウス入力
template: tutorial-page.tmpl.html
position: 2
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_mouse?overlay=false"></iframe>

*マウスを動かすとキューブが動きます。マウスのボタンを押すとキューブの色が変わります。*

PlayCanvasエンジンでの処理マウスは`pc.Mouse`オブジェクトによって提供されます。マウスオブジェクトは、マウスが移動したときや、マウスボタンが押されたことを検出するための簡単なインターフェースを提供します。また、マウス座標の処理におけるクロスブラウザの不一致を一部改善します。

[チュートリアルプロジェクト][1]の'Mouse Input'シーンをご確認ください。mouse.jsのコードが次の通りです：

~~~javascript~~~
pc.script.attribute("materials", "asset", [], {type: "material"});

pc.script.create("mouse", function (app) {
    var MouseHandler = function (entity) {
        this.entity = entity;
        this.pos = new pc.Vec3();

        // appメニューを無効にするとページを右クリックした際に
        // ブラウザでメニューが表示されなくなります
        app.mouse.disableContextMenu();

        // on()メソッドを使用してイベントハンドラを添付
        // マウスオブジェクトはマウスの動き、上下ボタン、スクロール
        // のイベントに対応しています
        app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    };

    MouseHandler.prototype = {
        initialize: function () {
            this.redMaterial = app.assets.getAssetByResourceId(this.materials[0]).resource;
            this.greenMaterial = app.assets.getAssetByResourceId(this.materials[1]).resource;
            this.blueMaterial = app.assets.getAssetByResourceId(this.materials[2]).resource;
        },

        onMouseMove: function (event) {
            // カメラコンポーネントのscreenToWorld機能を使用して
            // マウスの位置を3D空間の位置に変換
            var depth = 10;
            var cameraEntity = app.root.findByName('Camera');
            cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

            // 最後に、キューブのワールド空間位置を更新します
            this.entity.setPosition(this.pos);
        },

        onMouseDown: function (event) {
            // マウスの左ボタンを押すとキューブの色が赤に変わります
            if (event.button === pc.MOUSEBUTTON_LEFT) {
                this.entity.model.model.meshInstances[0].material = this.redMaterial;
            }

            // マウスの左ボタンを押すとキューブの色が緑に変わります
            if (event.button === pc.MOUSEBUTTON_MIDDLE) {
                this.entity.model.model.meshInstances[0].material = this.greenMaterial;
            }

            // マウスの左ボタンを押すとキューブの色が青に変わります
            if (event.button === pc.MOUSEBUTTON_RIGHT) {
                this.entity.model.model.meshInstances[0].material = this.blueMaterial;
            }
        }
    };

    return MouseHandler;
});


~~~

### マウスにアクセス

マウスコントロールは`pc.Mouse`オブジェクトによって管理されます。  [フレームワーク][2]は、[アプリケーションapp][3]でこのインスタンスを提供します。これは次のように全てのスクリプトオブジェクトで利用可能です：

~~~javascript~~~
app.mouse
~~~

### 右クリックメニューを無効化

スクリプトオブジェクトのコンストラクタでは、右クリックメニューを無効にしているので、マウスの右ボタンをクリックしてもポップアップメニューは表示されません。

~~~javascript~~~
app.mouse.disableContextMenu();
~~~

### イベントにバインド

`pc.Mouse`オブジェクトから、マウス操作に対応したさまざまなイベントを聞くことができます。チュートリアルでは、moveイベントに`onMouseMove`メソッドを、ボタンダウンイベントに`onMouseDown`をバインドします。

イベントへのバインドのために`this` をon()メソッドに渡します。この3番目の引数は、イベントコールバックで`this`として使用されるオブジェクトです。

~~~javascript~~~
app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
~~~

`pc.Mouse`で利用可能なイベント：

* `pc.EVENT_MOUSEUP` - マウスボタンが開放されると発動
* `pc.EVENT_MOUSEDOWN` - マウスボタンが押されると発動
* `pc.EVENT_MOUSEMOVE` - マウスが動かされると発動
* `pc.EVENT_MOUSEWHEEL` - マウスホイールが動かされると発動

ブラウザでのマウス入力は通常、ページのDOMの要素の[DOM][4]のイベントをリッスンすることで実装されます。問題は、異なるブラウザはそれぞれ少しずつ異なるイベントを実装し、別の値を提供していることです。書くコードをシンプルにするために、PlayCanvasエンジンはイベントハンドラを直接DOM要素にバインドするのではなく、PlayCanvasマウスハンドラにバインドすることを可能にします。エンジンはイベント発生時に、すべてのブラウザで一貫性がある`pc.MouseEvent`オブジェクトを提供します。オリジナルのDOMイベントが必要な場合は`pc.MouseEvent`の`event`プロパティとして利用可能です。

### マウスを動かす

最初のイベントハンドラは`onMouseMove`です。これは、マウスが移動するたびに発動します。`EVENT_MOUSEMOVE`イベントの場合、` MouseEvent`オブジェクトには、現在のマウスの位置を`x`と`y`、最後のイベント以来の位置の変化を`dx`と`dy`で示します。チュートリアルでは、マウスの現在位置を使用して、カーソル位置にキューブを移動します。

### マウスボタン

二つ目のイベントハンドラは`onMouseDown`です。3つのマウスボタンのいずれかがクリックされると発動します。`EVENT_MOUSEDOWN`と` EVENT_MOUSEUP`イベントでは、`MouseEvent`オブジェクトに押下／開放されたボタンを含む` button`プロパティがあります。これは、次の値のいずれかになります：

* `pc.MOUSEBUTTON_NONE`
* `pc.MOUSEBUTTON_LEFT`
* `pc.MOUSEBUTTON_MIDDLE`
* `pc.MOUSEBUTTON_RIGHT`

チュートリアルでは、押されたマウスボタンに応じてキューブの色を変更します。

### 試してみよう

フルスクリーンでのチュートリアルはページ上部または[こちらから] [5]お試しください。マウスの移動でキューブを動かし、左、中、右マウスボタンをクリックしてキューブの色を変更します。

[1]: https://playcanvas.com/project/186/overview/tutorials
[2]: /user-manual/glossary#framework
[3]: /user-manual/glossary#app
[4]: /user-manual/glossary#dom
[5]: http://apps.playcanvas.com/playcanvas/tutorials/input_mouse

