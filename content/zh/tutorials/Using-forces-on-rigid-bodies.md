---
title: 力和冲量
template: tutorial-page.tmpl.html
tags: physics, collision
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg
---

<iframe src="https://playcanv.as/p/8LTSuf4F/"></iframe>

*使用按键来表示冲量，使用WASD键应用扭矩并旋转立方体。 按住F可应用恒定的向上力以消除重力效应
*按R重置立方体*

*尝试让立方体平衡在恒定的一个角落并旋转！*
*使用到的完整代码显示在本页的底部。*

在本教程中，我们将向您展示如何使用力来控制动态刚体并生成上述演示的内容。 我们将简要地显示力，冲量，扭矩的使用和刚体组件UI的使用以定制行为。

## 力度脚本

### 施加一个恒定的力

```javascript
if (app.keyboard.isPressed(pc.KEY_F) ) {
    this.entity.rigidbody.applyForce(0, 9.8, 0);
}
```

Here a force along the global y-axis is applied to the accessed entity when the user presses the F key via [`applyForce(x, y, z)`][1]. The point of application of the force vector can also be set.

### 冲量

```javascript
if (app.keyboard.isPressed(pc.KEY_LEFT) ) {
    this.entity.rigidbody.applyImpulse(-1, 0, 0);
}
```

立方体被赋予x轴的冲量以通过[`applyImpulse(x, y, z)`][2]给出速度的瞬时变化。

### 扭矩

```javascript
if (app.keyboard.isPressed(pc.KEY_W) ) {
    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
}
```

[扭矩](https://en.wikipedia.org/wiki/Torque) (旋转力) 通过 [`applyTorque(x, y, z)`][3]施加到实体上。

### 扭矩冲量

```javascript
this.entity.rigidbody.applyTorqueImpulse(x, y, z)
```

角速度的瞬时变化通过[`applyTorqueImpulse(x, y, z)`][4]来表示。 这在上面的演示的代码中没有被使用。

## 移动动态刚体

为了移动刚体，使用上述方法应用线性力和旋转力(扭矩)。 通常你应该尽量避免直接修改刚体的位置或速度，因为这将会变得不真实，它可能导致奇怪的效果，特别是当物体之间产生碰撞时。

然而，如果你需要，你可以通过直接赋给`entity.rigidbody.linear Velocity`或`entity.rigidbody.angularVelocity`一个新的'[pc.Vec3][5]'值来更新速度。

有关刚体类型的更多信息，请参见[碰撞体API页面][6]，[pc命名空间页][7]，[fps控制器教程][8]和[碰撞教程][9]。

## 常用设置

我们使用聚光灯，立方体(具有模型，刚体，碰撞和脚本组件的实体)和地板(具有模型，刚体和碰撞组件)来设置基本场景。 立方体的刚体设置为动态，而地板的刚体设置为静态。 我们为每个盒子创建了一些材料，并改变漫反射的颜色只是为了更容易在眼睛。 我们还在SpotLight和DynamicBody实体上激活了“投射阴影”选项。 这个PlayCanvas应用程序'usesForces'的完整的场景和代码可以在[这里][10]找到。

## 限制和控制

一些编辑器设置被设置为防止不平衡力的持续应用(并且同时防止物体因不断加速而失去控制)。 我们在立方体的属性编辑器上启用了角度阻尼以及在立方体和地板上的摩擦。 这里不使用线性阻尼，但是它可以用于模拟空气阻力，当然可以根据需要通过代码应用减速。

<img src="/images/tutorials/forces/rigidbody_settings.jpg" alt="rigidbody_settings"/>

## 传送一个物体

要立即将物体传送到新位置的话，您不能使用来自pc.Entity API的setPosition函数。 这是因为物理引擎仍然会认为身体在旧的位置。 相反，你必须使用刚体组件的teleport函数：

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

如果立方体在x方向上移动超出可视区域，则调用传送功能，立方体实体在屏幕上传送。 实体被传送到离远点不太远的左/右位置，以便不连续激活`if()` 语句。

## 重置立方体的代码

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

我们采用了使立方体回到其原始位置的复位功能，并且如上所述，将刚体的位置与传送的实体的位置同步。 复位功能中的最后两行将物体的线速度和角速度也复位为零。 对象的方向也可以重置，但不在此代码中执行。

## 整段代码

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

