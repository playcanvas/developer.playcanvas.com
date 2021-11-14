---
title: More Cameras
template: tutorial-page.tmpl.html
tags: basics, camera
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405835/E7331A-image-75.jpg
---

<iframe src="https://playcanv.as/p/5yUf1fvg/"></iframe>

*クリックでフォーカス、`space`でズームイン及びアウト、`左arrow`と `右arrow`で左右のカメラに切り替えるます*

The [Basic Cameras][1] tutorial walks you through creating a camera Entity and adding it to your Scene. For a single static camera, no scripting is required. But for a more dynamic and interactive camera or for more advanced usage you might want to attach a script Component and program the camera behavior yourself.

## 属性の変更

The first way you might want to modify a camera at runtime, is to change the values of attributes on camera Component. You do this the same way that you set attributes on any other Component, by using the `set()` and `get()`
methods on the ComponentSystem.

```javascript
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

```

このサンプルでは、スペースバーを押すと視野の変化をトリガーします。`var fov = this.entity.camera.fov`行では、スクリプトが追加されているエンティティのカメラコンポーネントの`fov`の値を`get()`します。

`this.app.keyboard.wasPressed()`でキー入力を検出し、ターゲットFOVの値を切り替えます。

With the final two nested `if(){}` constructs we gradually change the fov values to create the zoom in/ zoom out effect.

新しい行`this.entity.camera.fov= fov`でfovカメラ属性を新しい値に `set()`します。

Notice that when you are zoomed out the top and bottom cubes are at the edges of the screen, this matches our expectation from the [PlayCanvas Editor scene][3] where the cubes sit next to the
top and bottom sides of the camera [frustum][2]

## 現在のカメラ

カメラでインタラクティビティを作成する一つの方法は、複数のカメラを切り替えることです。シーンに複数のカメラエンティティを追加することで実現することができます。一つのみがアクティベートされるようにして、スクリプト内で、実行時のカメラを変更します。

```javascript
var CameraManager = pc.createScript('cameraManager');

// initialize code called once per entity
CameraManager.prototype.initialize = function() {
    this.activeCamera = this.entity.findByName('Center');
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);

    this.on('destroy', function() {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }, this);
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

    if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {
        this.setCamera('Center');
    } else if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
        this.setCamera('Left');
    } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
        this.setCamera('Right');
    }
};
```

このサンプルでは、矢印キーを押すと、左または右のカメラエンティティ(現在読み込まれているシーン内か)を現在のカメラに設定して、スペースキーが中央カメラを起動します。

最初に、名前からカメラエンティティを検索するための関数を作成します。これには、このスクリプトの親エンティティに適用される`findByName()`関数を使用します(カメラがそこにあることを前提にすると、`this.app.root.findByName()` を使ってシーンの全てのエンティティを検索する必要がありません)。

矢印とスペースキーに対応するカメラエンティティの名前を含むオブジェクトを設定しました [(Editorシーンを参照)][3]。

次に、キーをループして、そのうちの一つが押されるとエンティティを名前から探し、以前にスクリプトで定義した、現在のアクティブなカメラを無効にして有効にする次のカメラを探す`setCamera()` 関数を使用して現在のカメラに設定します。

[1]: /tutorials/basic-cameras/
[2]: https://en.wikipedia.org/wiki/Frustum
[3]: https://playcanvas.com/editor/scene/440116

