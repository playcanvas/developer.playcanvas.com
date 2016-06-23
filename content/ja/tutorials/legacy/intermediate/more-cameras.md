---
title: その他のカメラ
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/more_cameras?overlay=false" ></iframe>

*クリックでフォーカス、`space`でズームイン及びアウト、`左arrow`と `右arrow`で左右のカメラに切り替えるます*

[基本的なカメラ] [1]チュートリアルでは、カメラのエンティティを作成してシーンに追加する手順を説明します。単一の静止カメラの場合、スクリプトは必要ありません。しかし、より動的でインタラクティブなカメラやより高度な利用のためには、スクリプトコンポーネントを追加してカメラの動作を自分でプログラムする必要があります。

## 属性の変更

実行時にカメラを変更する最初の方法は、カメラのコンポーネントの属性の値を変更することです。これは他のコンポーネントの属性を設定するのと同じように
ComponentSystemの`set()` と `get()`メソッドを使用して行います。

~~~javascript~~~
pc.script.create('zoom', function (app) {
    // 新しいズームインスタンスを作成
    var Zoom = function (entity) {
        this.entity = entity;

        this.targetFov = 45;
    };

    Zoom.prototype = {
        // すべてのリソースがロードされた後、最初の更新の前に一度呼び出されます
        initialize: function () {
        },

        // すべてのフレームで呼ばれる。dtは前回の更新からの秒単位の時間。
        update: function (dt) {
            if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {
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
        }
    };

    return Zoom;
});
~~~

このサンプルでは、スペースバーを押すと視野の変化をトリガーします。`var fov = this.entity.camera.fov`行では、スクリプトが追加されているエンティティのカメラコンポーネントの`fov`の値を`get()`します。

`app.keyboard.wasPressed()`でキー入力を検出し、ターゲットFOVの値を切り替えます。

ネストされた最後の二つの`if(){}`コンストラクトで徐々にfov値を変更してズームイン／ズームアウト効果を作成します。

新しい行`this.entity.camera.fov= fov`でfovカメラ属性を新しい値に `set()`します。

ズームアウトされている時、上部と下部のキューブが画面の端にあります。これは[PlayCanvas Editorシーン][3]でカメラ[視野円錐][2]の上下端の横にキューブが
置かれている位置と一致しています。

## 現在のカメラ

カメラでインタラクティビティを作成する一つの方法は、複数のカメラを切り替えることです。シーンに複数のカメラエンティティを追加することで実現することができます。一つのみがアクティベートされるようにして、スクリプト内で、実行時のカメラを変更します。

~~~javascript~~~
pc.script.create('camera_manager', function (app) {
    // 新規のCameraManagerインスタンスを作成
    var CameraManager = function (entity) {
        this.entity = entity;

        this.activeCamera = null;
    };

    CameraManager.prototype = {
        setCamera: function (cameraName) {
            // 現在アクティブなカメラを無効にする
            this.activeCamera.enabled = false;

            // 新規で指定したカメラを有効にする
            this.activeCamera = this.entity.findByName(cameraName);
            this.activeCamera.enabled = true;
        },

        // 全てのリソースが読み込まれた後、最初の更新の前に一度呼ばれる
        initialize: function () {
            this.activeCamera = this.entity.findByName('Center');
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        },

        //カーソルキー押下によるスクロールなどのデフォルトのブラウザ動作を防ぐ
        onKeyDown: function (event) {
            event.event.preventDefault();
        },

        // すべてのフレームで呼ばれる。dtは前回の更新からの秒単位の時間。
        update: function (dt) {
            if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {
                this.setCamera('Center');
            } else if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                this.setCamera('Left');
            } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
                this.setCamera('Right');
            }
        }
    };

    return CameraManager;
});
~~~

このサンプルでは、矢印キーを押すと、左または右のカメラエンティティ(現在読み込まれているシーン内か)を現在のカメラに設定して、スペースキーが中央カメラを起動します。

最初に、名前からカメラエンティティを検索するための関数を作成します。これには、このスクリプトの親エンティティに適用される`findByName()`関数を使用します(カメラがそこにあることを前提にすると、`app.root.findByName()`を使ってシーンの全てのエンティティを検索する必要がありません)。

矢印とスペースキーに対応するカメラエンティティの名前を含むオブジェクトを設定しました [(Editorシーンを参照)][3]。

次に、キーをループして、そのうちの一つが押されるとエンティティを名前から探し、以前にスクリプトで定義した、現在のアクティブなカメラを無効にして有効にする次のカメラを探す`setCamera()` 関数を使用して現在のカメラに設定します。

[1]: /tutorials/beginner/basic-cameras/
[2]: https://en.wikipedia.org/wiki/Frustum
[3]: https://playcanvas.com/editor/scene/329672

