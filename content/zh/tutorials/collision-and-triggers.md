---
title: 碰撞体和触发器
template: tutorial-page.tmpl.html
tags: collision, physics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405871/0D7E2F-image-75.jpg
---

<iframe src="https://playcanv.as/p/1Hj5fX2I/"></iframe>

*刚体彼此碰撞，碰撞时发出声音，触发器可重置形状。*

本教程介绍刚体物理，碰撞检测和触发器的基础。 请看[教学项目] [1]。

## 碰撞器组件

*collision*组件定义了一个形状，如果另一个实体进入或退出它，它可以用于触发事件 - 这样我们称之为触发器 - 再者还可以，把你的游戏中的实体的物理属性与* rigidbody *组件一起使用 - 比如一个弹跳球或一个重箱子。

一个*collision* 组建的最重要的属性是它的**Type**，这决决定了将会用到的触发器的形状。这里有四种选项:

* **Box** 一个基本的立方体
* **Sphere** 一个基本的球体
* **Capsule** 丸形胶囊。 常用于角色上，因为它可以被定成又高又瘦的形状，并保留一个很好的圆底与单个的接触点。
* **Mesh** 用任意网格体的形状作为触发器形状。
 **Note** 使用网格碰撞有一些限制，特别是当它与* rigidbody *组件一起使用时，它们必须是** Static **的。

### 触发器

要创建触发器，我们需要做的是向实体添加一个* collision *组件。 在本教程中，我们在斜坡下添加了一个大的盒形触发器，以捕捉下降的身体并重置其位置。

![碰撞体& 触发器][3]

您可以看到斜坡下方的触发器显示为蓝色的轮廓。

### 刚体

刚体是在你的游戏世界中的物理存在。 您可以使用真实的物理属性，如质量和摩擦，来设置它; 它将与其他刚体碰撞并以真实的方式做出表现。

要在场景中创建刚体，请选择一个实体，并添加* rigidbody *组件和* collision *组件。 默认情况下，您将创建一个**静态立方体**。 * rigidbody *组件有很多选项，您可以使用它们来调整对象的属性。

![刚体组件][4]

有关每个属性的详细信息，请参阅[* rigidbody *文档] [5]。

对于此案例，最重要的属性是**类型**。 您可以选择以下三个选项之一：

* **静态**这个实体永远不会移动
* **动态**此实体将在重力和您应用于它的任何其他力量下移动
* **运动**这个实体不会响应力，但如果你直接设置它的位置或速度会使它移动。

## 设置背景

在本教程中，我们需要设置的第一个实体是形成地面的绿色块。

![地面实体][6]

你可以在属性面板中看到它有* model *，* collision *和* rigidbody *组件。 我们已经增加了Entity和* collision * 的box框属性，使它变得又大又漂亮。 我们还大大提高了摩擦和恢复性能。 这意味着表面比默认值稍微粗糙和凹凸。

## 设置触发器

紧接着我们需要一个触发器实体。

![触发器实体][7]

在这个实体上我们能取到*碰撞体*组件但取不到*刚体*组件，因此它可以被用作为一个触发器。触发器实体也有一个挂载了一些代码的*脚本*组建。触发器只在某些事情发生时被触发时有用，因此我们需要添加一些代码来发送和监听触发器活动时的事件。

~~~javascript~~~
var Trigger = pc.createScript('trigger');

// initialize code called once per entity
Trigger.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

Trigger.prototype.onTriggerEnter = function(entity) {
    entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
    // Reset back to roughly the position the entity started in.
    var position = entity.getPosition();
    entity.rigidbody.teleport(position.x, 10, 0);
};
~~~

上面的代码有两个重要的部分。

首先在``` 初始化``` 方法中我们开始监听** triggerenter **事件。当一个刚体进入触发体积时这一事件触发一次(在触发器是一个实体，具有碰撞组件，但没有刚体组件的位置)。伴随事件有** triggerleave **，一旦有刚体离开触发器范围时它被触发。

~~~javascript~~~
this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
~~~

注意，第三个参数 ```this```，这是在事件侦听器中使用的“范围”。通常情况下，您将要添加当前脚本对象作为第三个参数，这样事件侦听器中的 ```this```的值才会是对应的脚本对象。

这段代码的第二部分是处理事件 ```onTriggerEnter```的函数。当触发器被进入时，调用这个函数并传递进入触发器范围的[```Entity``] [8]对象。

在这种情况下，当触发器触发时，我们将穿透实体重置回其开始的位置，并重置其速度。

## 刚体

我们将地面设置为** 静态**的，现在我们将创建下落的对象，并确保它们是**动态**的。

![立方体实体][9]

这是立方体的*刚体*组件和*碰撞体*组件，球体和胶囊体的设置方式是同样的。

## 关联事件

在*碰撞体*组件上有三个事件是被响应的:

* **接触** - 当两个刚体接触时的每帧触发。
* **碰撞开始** - 当两个刚体刚刚接触时触发。
* **碰撞结束** - 当两个刚体分开时触发。

**contact** 和 **collisionstart ** 的区别比较微妙但很重要。 想象一个立方体在一个平面上以一个角度着陆。 当立方体的边缘碰到表面时，立方体的两个角将在同一时刻产生撞击。 三个事件将触发，立方体的两个角的**接触**事件，和一个** 碰撞开始**事件。 然后立方体将旋转并继续下降，直到它被摆平，同时保持与表面接触。 当它保持平面状态时，两个**接触**事件将被激发，因为立方体的边缘与表面相接触。 由于立方体此后所有时间内都保持与表面接触，没有更多** collisionstart **事件被触发。

这两个事件都很有用，但在这个演示中，我们将使用** collision start **事件来触发当对象撞到地面时播放的声音效果。 这里是代码：

~~~javascript~~~
var Collider = pc.createScript('collider');

// initialize code called once per entity
Collider.prototype.initialize = function () {
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
};

Collider.prototype.onCollisionStart = function (result) {
    if (result.other.rigidbody) {
        this.entity.sound.play("hit");
    }
};
~~~

在```initialize```方法中，我们设置事件监听器，然后在事件处理程序中检查其他实体是否有一个** rigidbody **组件(这是为了避免在我们进入时播放声音 一个触发音量)，然后我们播放“命中”的声音效果。 所以现在每个具有碰撞脚本附件的实体与另一个刚体碰撞，它都将发出命中的声音。

这就是在PlayCanvas中处理碰撞和触发的所有步骤。

[1]: https://playcanvas.com/project/405871
[3]: /images/tutorials/collision/collision_and_triggers.jpg
[4]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[5]: /user-manual/packs/components/rigidbody/
[6]: /images/tutorials/collision/ground_setup.jpg
[7]: /images/tutorials/collision/trigger_setup.jpg
[8]: /engine/api/stable/symbols/pc.Entity.html
[9]: /images/tutorials/collision/box_setup.jpg

