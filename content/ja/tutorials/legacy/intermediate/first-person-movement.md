---
title: 一人称カメラを使った操作と移動
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="http://playcanv.as/p/R0ZMNPBw"></iframe>

ここでは一人称視点でキャラクターを移動させるアプリケーションを紹介します。

キャラクターにはrigidbody(剛体)コンポーネントとcollision(衝突判定)コンポーネントを、スクリプトに加えて設定する必要があるため、このコントローラのためのシーン設定は注意して行ってください。さらに、このスクリプトはカメラエンティティが存在しない場合、新たにカメラエンティティをPlayerの子として設定します。以下が[チュートリアルプロジェクト][1] の中の全シーン設定のコードですので、参考にしてください。

下のスクリプトは次のような機能があります:

* マウスとキーボードの入力を読み取る
* カメラエンティティをマウス入力に基づいて動かす
* プレイヤーエンティティがシーン内を動き回れるよう、物理的な力を加える

プレイヤーの速度を直接設定することはなく、物理的な力を与えることでプレイヤーを動かしていることに注意してください。最高速度を制限するために、線形で速度が減衰するようrigidbodyコンポーネントに設定がしてあります。

~~~javascript~~~
pc.script.attribute("camera", "entity", null); // これは必須のアトリビューとではない。カメラエンティティが指定されなかった場合は新規にカメラを作成する
pc.script.attribute("power", "number", 5000);
pc.script.attribute("lookSpeed", "number", 0.5);

pc.script.create('first_person_movement', function (app) {
    var force = new pc.Vec3();

    var First_person_movement = function (entity) {
        this.entity = entity;

        this.camera = null;
        this.eulers = new pc.Vec3();
    };

    First_person_movement.prototype = {
        // すべてのリソースがロードされ、最初のupdateが呼び出される前に呼び出される
        initialize: function () {
            // マウス移動イベントを監視する
            app.mouse.on("mousemove", this._onMouseMove, this);

            // マウスが移動した時、カーソルを隠す
            app.mouse.on("mousedown", function () {
                app.mouse.enablePointerLock();
            }, this);

            // 必要なコンポーネントがあるか確認する
            if (!this.entity.collision) {
                console.error("First Person Movement script needs to have a 'collision' component");
            }

            if (!this.entity.rigidbody || this.entity.rigidbody.type !== pc.BODYTYPE_DYNAMIC) {
                console.error("First Person Movement script needs to have a DYNAMIC 'rigidbody' component");
            }
        },

        // 毎フレーム呼び出される。dtは前回のupdateからの経過時間を秒単位で表したもの
        update: function (dt) {
            // カメラがなければ、新しいモノを作成する
            if (!this.camera) {
                this._createCamera();
            }

            // カメラの方向を確認し、進行方向を決定する
            var forward = this.camera.forward;
            var right = this.camera.right;

            // 移動量
            var x = 0;
            var z = 0;

            // W-A-S-Dキーをプレイヤーの移動に使用する
            // キーが押されているかを判定
            if (app.keyboard.isPressed(pc.KEY_A) || app.keyboard.isPressed(pc.KEY_Q)) {
                x -= right.x;
                z -= right.z;
            }

            if (app.keyboard.isPressed(pc.KEY_D)) {
                x += right.x;
                z += right.z;
            }

            if (app.keyboard.isPressed(pc.KEY_W)) {
                x += forward.x;
                z += forward.z;
            }

            if (app.keyboard.isPressed(pc.KEY_S)) {
                x -= forward.x;
                z -= forward.z;
            }

            // キー押し下げから計算した方向を使ってキャラクタに物理的な力を加える
            if (x !== 0 && z !== 0) {
                force.set(x, 0, z).normalize().scale(this.power);
                this.entity.rigidbody.applyForce(force);
            }

            // カメラの角度をマウスイベントを元に更新する
            this.camera.setLocalEulerAngles(this.eulers.y, this.eulers.x, 0);
        },

        _onMouseMove: function (e) {
            // ポインターが無効になっているか?
            // 左マウスボタンが押されていたら、カメラをマウスの移動を元に更新する
            if (pc.Mouse.isPointerLocked() || e.buttons[0]) {
                this.eulers.x -= this.lookSpeed * e.dx;
                this.eulers.y -= this.lookSpeed * e.dy;
            }
        },

        _createCamera: function () {
            // もしユーザーがカメラを割り当てていなければ、新しいカメラを作成する
            this.camera = new pc.Entity();
            this.camera.setName("First Person Camera");
            this.camera.addComponent("camera");
            this.entity.addChild(this.camera);
            this.camera.translateLocal(0, 0.5, 0);
        }
    };

    return First_person_movement;
});
~~~

[1]: https://playcanvas.com/project/359952/overview/tutorial-first-person-movement

