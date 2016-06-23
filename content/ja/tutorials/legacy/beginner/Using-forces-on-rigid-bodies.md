---
title: ForceとImpulse
template: tutorial-page-legacy.tmpl.html

---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/usingForces?overlay=false"></iframe>

*インパルスを適用するにはカーソルキーを使用します。トルクを適用してキューブを回転させるには、WASDキーを使用します。Fを長押しすると一定の力を上向きに適用して重力の効果をキャンセルします。*
* Rキーを押しすとキューブをリセットします。*

*キューブを角で立たせ回転させてみましょう！*
*使用されている完全なコードはこのページの下部に表示されています。*

In this tutorial we will show you how to use forces to control a dynamic rigidbody and produce the demo shown above. We will briefly show the use of forces, impulses, torques and the use of rigidbody component UI to customize behavior.

## Scripting Forces

### Applying a Constant Force

~~~javascript~~~
if (app.keyboard.isPressed(pc.KEY_F) ) {
    this.entity.rigidbody.applyForce(0, 9.8, 0);
}
~~~

Here a force along the global y-axis is applied to the accessed entity when the user presses the F key via [`applyForce(x, y, z)`][1]. The point of application of the force vector can also be set. [See this documentation][2] for more details.

### Impulses

~~~javascript~~~
if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
    this.entity.rigidbody.applyImpulse(-1, 0, 0);
}
~~~

The cube is given an x-axis impulse to impart an instant change of velocity via [`applyImpulse(x, y, z)`][3].

### Torques

~~~javascript~~~
if (app.keyboard.isPressed(pc.KEY_W) ) {
    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
}
~~~

[Torques](https://en.wikipedia.org/wiki/Torque) (rotational forces) are applied to the entity via [`applyTorque(x, y, z)`][4].

### TorqueImpulses

~~~javascript~~~
this.entity.rigidbody.applyTorqueImpulse(x, y, z)
~~~

Instantaneous changes in angular velocity are applied via [`applyTorqueImpulse(x, y, z)`][5]. This was not used in the code for the above demo.

## Moving dynamic rigidbodies

リジッドボディを移動させるためには、上記の方法でリニア力および回転力(トルク)を適用します。シミュレーションが上書きされ、オブジェクトが衝突する際などに不自然な効果をもたらすことを避けるため、通常はこのようにリジッドボディの位置や速度を直接変更することは避けるべきです。

However, if you need to, you can override the velocity by assigning a new '[pc.Vec3][6]' set of values directly to `entity.rigidbody.linearVelocity` or `entity.rigidbody.angularVelocity`.

For more information on rigidbody types, see [the collision API page][8], [the pc namespace page][9], [the fps-controller tutorial][11] and [the collision tutorial][10].

## General setup

スポットライト、キューブ(モデル、リジッドボディ、衝突、スクリプトコンポーネントを持つエンティティ)、床(モデル、リジッドボディ、衝突コンポーネントを持つ)を含む基本的なシーンを設定しました。キューブのリジッドボディは動的に設定され、床のリジッドボディは静的に設定されています。各ボックスの素材を作成し、目に優しくするために拡散色を変更しました。また、SpotLightとDynamicBodyエンティティの'cast shadows'オプションを有効にしてました。完全な'usingForces'シーンと、このPlayCanvasのアプリのコードは[こちら][12]。

## Limiting and control

アンバランスな力が適用され続けることを防ぐため(つまり、ボディが加速し続け制御不能になることを防ぐため)、いくつかの設定をEditorで行いました。キューブの属性エディタで角度減衰を有効にしました。また、キューブと床の両方で、摩擦を可能にしました。リニア減衰はここでは使用されていませんが、空気抵抗やシミュレートするために使用することができます。また、減速はコードで適用することができます。

<img src="/images/tutorials/forces/rigidbody_settings.jpg" alt="rigidbody_settings"/>

## Teleporting a Body

To instantly teleport a body to a new position, you can't use the setPosition function from the pc.Entity API. This is because the physics engine would still think the body is in the old location. Instead, you have to use the rigidbody component's teleport function:

~~~js~~~
//code within the update function
this.playerPos = this.entity.getLocalPosition();

// Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.
if (this.playerPos.x < -9.0) {
    this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);
}
if (this.playerPos.x > 9.0) {
    this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);
}
~~~

If the cube moves beyond the viewable area in the x-direction, the teleport function is called and the cube entity is teleported across the screen. The entity is teleported to a less extreme left/right position so as not to continuously activate the `if()` statement.

## Reset cube code

~~~javascript~~~
if (app.keyboard.wasPressed(pc.KEY_R)) {
    this.reset();
}
~~~
~~~javascript~~~
reset: function () {
    this.entity.rigidbody.teleport(0, 2, 0);
    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
}
~~~

We include a reset function that brings the cube to its original position and, as mentioned above, synchronizes the rigidbody's location to that of the teleported entity. The final two lines in the reset function reset the body's linear and angular velocities to zero. The object's orientation could also be reset, but is not carried out in this code.

## Full code listing

~~~javascript~~~
pc.script.create('DynamicBody', function (app) {
    // Creates a new MrDynamic instance
    var DynamicBody = function (entity) {
        this.entity = entity;
    };

    DynamicBody.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.torque = 7;
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {

            //update player's position
            this.playerPos = this.entity.getLocalPosition();

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
        },

        onKeyDown: function (event) {
            event.event.preventDefault();
        },

        // reset function to move cube back to starting position.
        reset: function () {
            this.entity.rigidbody.teleport(0, 2, 0);
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

