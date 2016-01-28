---
title: ForceとImpulse
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/usingForces?overlay=false"></iframe>

*インパルスを適用するにはカーソルキーを使用します。トルクを適用してキューブを回転させるには、WASDキーを使用します。Fを長押しすると一定の力を上向きに適用して重力の効果をキャンセルします。*
* Rキーを押しすとキューブをリセットします。*

*キューブを角で立たせ回転させてみましょう！*
*使用されている完全なコードはこのページの下部に表示されています。*

このチュートリアルでは、力を使用して動的なリジッドボディを制御し、上に示したデモを生成する方法を説明します。力、衝動、トルクの利用とDesigner設定を使用して動作をカスタマイズする方法を簡単に説明します。

##フォース（力）コマンド

###一定の力を適用
~~~javascript~~~
if (app.keyboard.isPressed(pc.KEY_F) ) {
    this.entity.rigidbody.applyForce(0, 9.8, 0);
}
~~~
ユーザが[`applyForce(x, y, z)`][1]を通してFキーを押したとき、グローバルy軸に沿った力がアクセスエンティティに適用されます。力ベクトルの適用時点を設定することもできます。詳細は[こちらのドキュメント][2] 。

###Impulses
~~~javascript~~~
if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
    this.entity.rigidbody.applyImpulse(-1, 0, 0);
}

~~~
キューブには[`applyImpulse(x, y, z)`][3]を通して速度を瞬時に変化を与えるために、x軸の衝撃が与えられています。

###Torques
~~~javascript~~~
if (app.keyboard.isPressed(pc.KEY_W) ) {
    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
}
~~~
 [`applyTorque(x, y, z)`][4]を通してエンティティに[Torques](https://en.wikipedia.org/wiki/Torque) (回転フォース)が適用されます。

###TorqueImpulses
~~~javascript~~~
this.entity.rigidbody.applyTorqueImpulse(x, y, z)
~~~
角速度への瞬間的な変化は[`applyTorqueImpulse(x, y, z)`][5]を通して適用されます。これは、上記のデモのコードでは使用されていません。

##動的なリジッドボディの移動

リジッドボディを移動させるためには、上記の方法でリニア力および回転力(トルク)を適用します。シミュレーションが上書きされ、オブジェクトが衝突する際などに不自然な効果をもたらすことを避けるため、通常はこのようにリジッドボディの位置や速度を直接変更することは避けるべきです。

必要に応じて、新しい'[pc.Vec3][6]'値のセットを`entity.rigidbody.linearVelocity`または`entity.rigidbody.angularVelocity`に直接割り当てることによって、速度を上書きすることができます。通常の[Entity methods][7]を使用して、位置や向きを上書きすることもできますが、その場合は、[`entity.rigidbody.syncEntityToBody()`][7]を使用してエンティティからリジッドボディのシミュレーションを更新する必要があります。

リジッドボディタイプに関する商大は[コリジョン API ページ][8], [pc.fw API ページ][9], [fps-コントローラチュートリアル][11], [コリジョンチュートリアル][10]をご確認ください。

##一般的な設定

スポットライト、キューブ(モデル、リジッドボディ、衝突、スクリプトコンポーネントを持つエンティティ)、床(モデル、リジッドボディ、衝突コンポーネントを持つ)を含む基本的なシーンを設定しました。キューブのリジッドボディは動的に設定され、床のリジッドボディは静的に設定されています。各ボックスの素材を作成し、目に優しくするために拡散色を変更しました。また、SpotLightとDynamicBodyエンティティの'cast shadows'オプションを有効にしてました。完全な'usingForces'シーンと、このPlayCanvasのアプリのコードは[こちら][12]。

##制限と制御

アンバランスな力が適用され続けることを防ぐため(つまり、ボディが加速し続け制御不能になることを防ぐため)、いくつかの設定をEditorで行いました。キューブの属性エディタで角度減衰を有効にしました。また、キューブと床の両方で、摩擦を可能にしました。リニア減衰はここでは使用されていませんが、空気抵抗やシミュレートするために使用することができます。また、減速はコードで適用することができます。

<img src="/images/tutorials/forces/rigidbody_settings.jpg" alt="rigidbody_settings"/>

##テレポートコード
~~~js~~~
//更新機能内のコード
this.playerPos = this.entity.getLocalPosition();
~~~
~~~javascript~~~
if (this.playerPos.x < -9.0) {
    this.teleport(8.8, this.playerPos.y, this.playerPos.z);
}
if (this.playerPos.x > 9.0) {
    this.teleport(-8.8, this.playerPos.y, this.playerPos.z);
}
~~~
~~~javascript~~~
// キューブを画面内にとどめる。キューブは画面の一つの端から消え、反対の端から再度現れる。
teleport: function (x, y, z) {
    this.entity.setLocalPosition(x, y, z);
    this.entity.rigidbody.syncEntityToBody();
},
~~~

x方向の表示領域を超えてキューブが移動するとテレポート機能が呼び出され、キューブエンティティは画面上をテレポートされ、エンティティの新しい位置に一致するようリジッドボディが同期されます。エンティティは、`if()`ステートメントを連続的にアクティベートしないよう、比較的極端でない左/右の位置にテレポートされます。

##Reset cube code
~~~javascript~~~
if (app.keyboard.wasPressed(pc.KEY_R)) {
    this.reset();
}
~~~
~~~javascript~~~
reset: function () {
    this.teleport(0, 2, 0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
}
~~~

キューブを元の位置に戻し、上記のようにテレポートされたエンティティの位置にリジッドボディを同期させるリセット機能を用意しました。リセット機能の最後の2行はボディの線速度および角速度をゼロにリセットします。オブジェクトの向きもリセットすることができますが、このコードでは行われません。

##完全なコードのリスト

~~~javascript~~~
pc.script.create('DynamicBody', function (app) {
    // 新しいMrDynamicインスタンスを作成
    var DynamicBody = function (entity) {
        this.entity = entity;
    };

    DynamicBody.prototype = {
        // 全てのリソースが読み込まれた後、最初の更新の前に一度だけ呼ばれる
        initialize: function () {
            this.torque = 7;
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        },

        // 毎フレーム呼ばれる。dtは最後の更新以降の秒単位の時間
        update: function (dt) {

            //プレイヤーの位置を更新
            this.playerPos = this.entity.getLocalPosition();

            //キーボードコントロールとフォースとモーメントの適用
            if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
                this.entity.rigidbody.applyImpulse(-1, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_RIGHT) ) {
                this.entity.rigidbody.applyImpulse(1, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_UP) ) {
                this.entity.rigidbody.applyImpulse(0, 1, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_A) ) {
                this.entity.rigidbody.applyTorque(0, this.torque, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_D) ) {
                this.entity.rigidbody.applyTorque(0, -this.torque, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_W) ) {
                this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_S) ) {
                this.entity.rigidbody.applyTorque(this.torque, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_F) ) {
                this.entity.rigidbody.applyForce(0, 9.8, 0);
            }

            // キューブを画面にとどめる。キューブは一つの画面の端から消え、反対の端から再び現れる。
            if (this.playerPos.x < -9.0) {
                this.teleport(8.8, this.playerPos.y, this.playerPos.z);
            }
            if (this.playerPos.x > 9.0) {
                this.teleport(-8.8, this.playerPos.y, this.playerPos.z);
            }

            // キューブリセットコントロール
            if (app.keyboard.wasPressed(pc.KEY_R) ) {
                this.reset();
            }
        },

        //エンティティを動かしてリジッドボディを親エンティティの新しい位置に同期させるテレポート機能。
        teleport: function (x, y, z) {
            this.entity.setLocalPosition(x, y, z);
            this.entity.rigidbody.syncEntityToBody();
        },

        onKeyDown: function (event) {
            event.event.preventDefault();
        },

        // キューブを開始位置に動かすリセット機能。
        reset: function () {
            this.teleport(0, 2, 0);
            this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
            this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
        }
    };
    return DynamicBody;
});
~~~

[1]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyForce
[2]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyForce
[3]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyImpulse
[4]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyTorque
[5]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyTorqueImpulse
[7]: /tutorials/beginner/manipulating-entities/
[6]: /engine/api/stable/symbols/pc.Vec3.html
[7]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#syncEntityToBody
[8]: /engine/api/stable/symbols/pc.CollisionComponent.html
[9]: /engine/api/stable/symbols/pc.html
[10]: /tutorials/intermediate/collision-and-triggers/
[11]: /tutorials/advanced/fps-controller/
[12]: https://playcanvas.com/project/186/overview/tutorials

