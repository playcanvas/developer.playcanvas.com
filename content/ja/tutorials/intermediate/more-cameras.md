---
title: その他のカメラ
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="https://playcanv.as/p/5yUf1fvg" ></iframe>

*クリックでフォーカス、`space`でズームイン及びアウト、`左arrow`と `右arrow`で左右のカメラに切り替えるます*

[基本的なカメラ] [1]チュートリアルでは、カメラのエンティティを作成してシーンに追加する手順を説明します。単一の静止カメラの場合、スクリプトは必要ありません。しかし、より動的でインタラクティブなカメラやより高度な利用のためには、スクリプトコンポーネントを追加してカメラの動作を自分でプログラムする必要があります。

## 属性の変更

実行時にカメラを変更する最初の方法は、カメラのコンポーネントの属性の値を変更することです。これは他のコンポーネントの属性を設定するのと同じように
ComponentSystemの`set()` と `get()`メソッドを使用して行います。

~~~javascript~~~
var Zoom = pc.createScript('zoom');

// initialize code called once per entity
Zoom.prototype.initialize = function() {
    this.targetFov = 45;
};

// update code called every frame
Zoom.prototype.update = function(dt) {

    if (this.app.keyboard.wasPressed(pc.KEY_SPACE) ) {
        if (this.targetFov == 10) {
            this.targetFov = 45;
        } else {
            this.targetFov = 10;
        }
    }

    var fov = this.entity.camera.fov;
    if (fov < this.targetFov) {
        fov += (10 * dt);
        if (fov > this.targetFov) {
            fov = this.targetFov;
        }
    }

    if (fov > this.targetFov) {
        fov -= (10 * dt);
        if (fov < this.targetFov) {
            fov = this.targetFov;
        }
    }
    this.entity.camera.fov = fov;
};

~~~

このサンプルでは、スペースバーを押すと視野の変化をトリガーします。`var fov = this.entity.camera.fov`行では、スクリプトが追加されているエンティティのカメラコンポーネントの`fov`の値を`get()`します。

With `this.app.keyboard.wasPressed()` we detect the keypress and toggle between the value of the target fov.

ネストされた最後の二つの`if(){}`コンストラクトで徐々にfov値を変更してズームイン／ズームアウト効果を作成します。

新しい行`this.entity.camera.fov= fov`でfovカメラ属性を新しい値に `set()`します。

ズームアウトされている時、上部と下部のキューブが画面の端にあります。これは[PlayCanvas Editorシーン][3]でカメラ[視野円錐][2]の上下端の横にキューブが
置かれている位置と一致しています。

## 現在のカメラ

カメラでインタラクティビティを作成する一つの方法は、複数のカメラを切り替えることです。シーンに複数のカメラエンティティを追加することで実現することができます。一つのみがアクティベートされるようにして、スクリプト内で、実行時のカメラを変更します。

~~~javascript~~~
var CameraManager = pc.createScript('cameraManager');

// initialize code called once per entity
CameraManager.prototype.initialize = function() {
    this.activeCamera = this.entity.findByName('Center');
    this.app.keyboard.on(pc.input.EVENT_KEYDOWN, this.onKeyDown, this);
};

//prevents default browser actions, such as scrolling when pressing cursor keys
CameraManager.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
};

CameraManager.prototype.setCamera = function (cameraName) {
    // Disable the currently active camera
    this.activeCamera.enabled = false;

    // Enable the newly specified camera
    this.activeCamera = this.entity.findByName(cameraName);
    this.activeCamera.enabled = true;
};

// update code called every frame
CameraManager.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.wasPressed(pc.input.KEY_SPACE) ) {
        this.setCamera('Center');
    } else if (app.keyboard.wasPressed(pc.input.KEY_LEFT)) {
        this.setCamera('Left');
    } else if (app.keyboard.wasPressed(pc.input.KEY_RIGHT)) {
        this.setCamera('Right');
    }
};
~~~

このサンプルでは、矢印キーを押すと、左または右のカメラエンティティ(現在読み込まれているシーン内か)を現在のカメラに設定して、スペースキーが中央カメラを起動します。

We initially  create a function to find the camera entity we want by name - with the `findByName()` function applied to the parent entity of this script (given that the cameras are located there, there is no need to use `this.app.root.findByName()` to search through all the entities in the Scene).

矢印とスペースキーに対応するカメラエンティティの名前を含むオブジェクトを設定しました [(Editorシーンを参照)][3]。

次に、キーをループして、そのうちの一つが押されるとエンティティを名前から探し、以前にスクリプトで定義した、現在のアクティブなカメラを無効にして有効にする次のカメラを探す`setCamera()` 関数を使用して現在のカメラに設定します。

[1]: /tutorials/beginner/basic-cameras/
[2]: https://en.wikipedia.org/wiki/Frustum
[3]: https://playcanvas.com/editor/scene/440116

