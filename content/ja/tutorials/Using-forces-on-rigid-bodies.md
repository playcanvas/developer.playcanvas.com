---
title: ForceとImpulse
template: tutorial-page.tmpl.html
tags: physics, collision
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg
---

<iframe src="https://playcanv.as/p/8LTSuf4F"></iframe>

*インパルスを適用するにはカーソルキーを使用します。トルクを適用してキューブを回転させるには、WASDキーを使用します。Fを長押しすると一定の力を上向きに適用して重力の効果をキャンセルします。*
* Rキーを押しすとキューブをリセットします。*

*キューブを角で立たせ回転させてみましょう！*
*使用されている完全なコードはこのページの下部に表示されています。*

このチュートリアルでは、力を使用して動的なリジッドボディを制御し、上に示したデモを生成する方法を説明します。力、衝動、トルクの利用とリジッドボディコンポーネントUIを使用して動作をカスタマイズする方法を簡単に説明します。

## 力のスクリプティング

### 一定の力を適用

```javascript
if (app.keyboard.isPressed(pc.KEY_F) ) {
    this.entity.rigidbody.applyForce(0, 9.8, 0);
}
```

ユーザが[`applyForce(x, y, z)`][1]を通してFキーを押したとき、グローバルy軸に沿った力がアクセスエンティティに適用されます。力ベクトルの適用時点を設定することもできます。詳細は[こちらのドキュメント][2] 。

### 衝動

```javascript
if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
    this.entity.rigidbody.applyImpulse(-1, 0, 0);
}
```

キューブには[`applyImpulse(x, y, z)`][3]を通して速度を瞬時に変化を与えるために、x軸の衝撃が与えられています。

### トルク

```javascript
if (app.keyboard.isPressed(pc.KEY_W) ) {
    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
}
```

[トルク](https://en.wikipedia.org/wiki/Torque) (回転力) は [`applyTorque(x, y, z)`][4]からエンティティに適用されます。

### TorqueImpulses

```javascript
this.entity.rigidbody.applyTorqueImpulse(x, y, z)
```

角速度への瞬間的な変化は[`applyTorqueImpulse(x, y, z)`][5]を通して適用されます。これは、上記のデモのコードでは使用されていません。

## 動的なリジッドボディの移動

リジッドボディを移動させるためには、上記の方法でリニア力および回転力(トルク)を適用します。シミュレーションが上書きされ、オブジェクトが衝突する際などに不自然な効果をもたらすことを避けるため、通常はこのようにリジッドボディの位置や速度を直接変更することは避けるべきです。

必要に応じて、新しい'[pc.Vec3][6]'値のセットを`entity.rigidbody.linearVelocity`または`entity.rigidbody.angularVelocity`に直接割り当てることによって、速度を上書きすることができます。

リジッドボディタイプに関する商大は[コリジョン API ページ][8],  [pc namespace ページ][9], [fps-コントローラチュートリアル][11], [コリジョンチュートリアル][10]をご確認ください。

## 一般的な設定

スポットライト、キューブ(モデル、リジッドボディ、衝突、スクリプトコンポーネントを持つエンティティ)、床(モデル、リジッドボディ、衝突コンポーネントを持つ)を含む基本的なシーンを設定しました。キューブのリジッドボディは動的に設定され、床のリジッドボディは静的に設定されています。各ボックスの素材を作成し、目に優しくするために拡散色を変更しました。また、SpotLightとDynamicBodyエンティティの'cast shadows'オプションを有効にしてました。完全な'usingForces'シーンと、このPlayCanvasのアプリのコードは[こちら][12]。

## 制限と制御

アンバランスな力が適用され続けることを防ぐため(つまり、ボディが加速し続け制御不能になることを防ぐため)、いくつかの設定をEditorで行いました。キューブの属性エディタで角度減衰を有効にしました。また、キューブと床の両方で、摩擦を可能にしました。リニア減衰はここでは使用されていませんが、空気抵抗やシミュレートするために使用することができます。また、減速はコードで適用することができます。

<img src="/images/tutorials/forces/rigidbody_settings.jpg" alt="rigidbody_settings"/>

## ボディのテレポート

新しい位置にボディを即座にテレポートするためにpc.EntityのAPIからsetPosition関数を使用することはできません。物理エンジンが、まだボディが古い場所にあると認識するからです。代わりにリジッドボディコンポーネントのテレポート機能を使用する必要があります。

```javascript
//code within the update function
this.playerPos = this.entity.getLocalPosition();

// Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.
if (this.playerPos.x < -9.0) {
    this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);
}
if (this.playerPos.x > 9.0) {
    this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);
}
```

xの方向に表示領域を越えてキューブが移動した場合、テレポート機能が呼び出され、キューブエンティティが画面上をテレポートされます。`if()`宣言をアクティベートし続けないよう、エンティティは比較的極端でない右左の位置にテレポートされます。

## キューブのコードをリセット

```javascript
if (app.keyboard.wasPressed(pc.KEY_R)) {
    this.reset();
}
```
```javascript
reset: function () {
    this.entity.rigidbody.teleport(0, 2, 0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
}
```

キューブを元の位置に戻し、上記のようにテレポートされたエンティティの位置にリジッドボディを同期させるリセット機能を用意しました。リセット機能の最後の2行はボディの線速度および角速度をゼロにリセットします。オブジェクトの向きもリセットすることができますが、このコードでは行われません。

## 完全なコードのリスト

```javascript
var DynamicBody = pc.createScript('dynamicBody');

// initialize code called once per entity
DynamicBody.prototype.initialize = function() {
    this.torque = 7;
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

DynamicBody.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
};

// update code called every frame
DynamicBody.prototype.update = function(dt) {
    //update player's position
    this.playerPos = this.entity.getLocalPosition();

    var app = this.app;

    //keyboard controls and applying forces and moments.
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

    // Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.
    if (this.playerPos.x < -9.0) {
        this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);
    }
    if (this.playerPos.x > 9.0) {
        this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);
    }

    // cube reset control
    if (app.keyboard.wasPressed(pc.KEY_R) ) {
        this.reset();
    }
};

DynamicBody.prototype.reset = function () {
    this.entity.rigidbody.teleport(0, 2, 0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
};
```

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
[12]: https://playcanvas.com/project/405828/overview/tutorial-forces--impulses

