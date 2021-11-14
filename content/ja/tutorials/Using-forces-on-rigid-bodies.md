---
title: Forces and Impulses
template: tutorial-page.tmpl.html
tags: physics, collision
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg
---

<iframe src="https://playcanv.as/p/8LTSuf4F/"></iframe>

*Use the cursor keys to apply impulses, the WASD keys to apply torques and rotate the cube. Press and hold F to apply a constant upward force to cancel gravity effects.*
*Press R to reset the cube.*

*Try to get the cube to balance and spin on one of its corners!*
*The full code used is shown at the bottom of this page.*

このチュートリアルでは、力を使用して動的なリジッドボディを制御し、上に示したデモを生成する方法を説明します。力、衝動、トルクの利用とリジッドボディコンポーネントUIを使用して動作をカスタマイズする方法を簡単に説明します。

## 力のスクリプティング

### 一定の力を適用

```javascript
if (app.keyboard.isPressed(pc.KEY_F) ) {
    this.entity.rigidbody.applyForce(0, 9.8, 0);
}
```

Here a force along the global y-axis is applied to the accessed entity when the user presses the F key via [`applyForce(x, y, z)`][1]. The point of application of the force vector can also be set.

### 衝動

```javascript
if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
    this.entity.rigidbody.applyImpulse(-1, 0, 0);
}
```

The cube is given an x-axis impulse to impart an instant change of velocity via [`applyImpulse(x, y, z)`][2].

### トルク

```javascript
if (app.keyboard.isPressed(pc.KEY_W) ) {
    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
}
```

[Torques](https://en.wikipedia.org/wiki/Torque) (rotational forces) are applied to the entity via [`applyTorque(x, y, z)`][3].

### TorqueImpulses

```javascript
this.entity.rigidbody.applyTorqueImpulse(x, y, z)
```

Instantaneous changes in angular velocity are applied via [`applyTorqueImpulse(x, y, z)`][4]. This was not used in the code for the above demo.

## 動的なリジッドボディの移動

リジッドボディを移動させるためには、上記の方法でリニア力および回転力(トルク)を適用します。シミュレーションが上書きされ、オブジェクトが衝突する際などに不自然な効果をもたらすことを避けるため、通常はこのようにリジッドボディの位置や速度を直接変更することは避けるべきです。

However, if you need to, you can override the velocity by assigning a new '[pc.Vec3][5]' set of values directly to `entity.rigidbody.linearVelocity` or `entity.rigidbody.angularVelocity`.

For more information on rigidbody types, see [the collision API page][6], [the pc namespace page][7], [the fps-controller tutorial][8] and [the collision tutorial][9].

## 一般的な設定

We set up a basic scene with a spotlight, a cube (entity with model, rigidbody, collision and script components) and a floor (with model, rigidbody and collision components). The cube's rigidbody was set to dynamic while the floor's rigidbody was set to static. We created some materials for each box and changed the diffuse colors just to make it easier on the eye. We have also activated the 'cast shadows' option on both the SpotLight and DynamicBody entities. The full 'usingForces' Scene and code for [this PlayCanvas app can be found here][10].

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

    this.on('destroy', function() {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }, this);
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
[2]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyImpulse
[3]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyTorque
[4]: /engine/api/stable/symbols/pc.RigidBodyComponent.html#applyTorqueImpulse
[5]: /engine/api/stable/symbols/pc.Vec3.html
[6]: /engine/api/stable/symbols/pc.CollisionComponent.html
[7]: /engine/api/stable/symbols/pc.html
[8]: /tutorials/first-person-movement/
[9]: /tutorials/collision-and-triggers/
[10]: https://playcanvas.com/project/405828/overview/tutorial-forces--impulses

