---
title: 制作一个简单的游戏 - Part 4
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*你可以在这里找到[完整项目] [6]。 如果你没有看过[第1部分] [1]，[第2部分] [2]和[第3部分] [3]请先阅读它们。

## 足球

足球是我们玩Keepy Up游戏时的注意中心。 它响应玩家的输入，它受到环境因素(重力)响应，它能够发出声音。 这可能是这个游戏里最复杂的部分。 幸运的是，我们将尽我们所能向您解释所有的部分。

## ball.js

```javascript
var Ball = pc.createScript('ball');

Ball.attributes.add('gravity', {
    type: 'number',
    default: -9.8,
    description: 'The value of gravity to use'
});

Ball.attributes.add('defaultTap', {
    type: 'number',
    default: 5,
    description: 'Speed to set the ball to when it is tapped'
});

Ball.attributes.add('impactEffect', {
    type: 'entity',
    description: 'The particle effect to trigger when the ball is tapped'
});

Ball.attributes.add('ballMinimum', {
    type: 'number',
    default: -6,
    description: 'When ball goes below minimum y value game over is triggered'
});

Ball.attributes.add('speedMult', {
    type: 'number',
    default: 4,
    description: 'Multiplier to apply to X speed when tap is off center'
});

Ball.attributes.add('angMult', {
    type: 'number',
    default: -6,
    description: 'Multiplier to apply to angular speed when tap is off center'
});

Ball.tmp = new pc.Vec3();

// initialize code called once per entity
Ball.prototype.initialize = function() {
    this.paused = true;

    // Get the "Game" Entity and start listening for events
    this.game = this.app.root.findByName("Game");

    this.app.on("game:start", this.unpause, this);
    this.app.on("game:gameover", this.pause, this);
    this.app.on("game:reset", this.reset, this);

    // Initialize properties
    this._vel = new pc.Vec3(0, 0, 0);
    this._acc = new pc.Vec3(0, this.gravity, 0);
    this._angSpeed = 0;

    // Store the initial position and rotation for reseting
    this._origin = this.entity.getLocalPosition().clone();
    this._rotation = this.entity.getLocalRotation().clone();
};

// update code called every frame
Ball.prototype.update = function(dt) {
    // Don't update when paused
    if (this.paused) {
        this.entity.rotate(0, 30*dt, 0);
        return;
    }

    var p = this.entity.getLocalPosition();
    var tmp = Ball.tmp;

    // integrate the velocity in a temporary variable
    tmp.copy(this._acc).scale(dt);
    this._vel.add(tmp);

    // integrate the position in a temporary variable
    tmp.copy(this._vel).scale(dt);
    p.add(tmp);

    // update position
    this.entity.setLocalPosition(p);

    // rotate by angular speed
    this.entity.rotate(0, 0, this._angSpeed);

    // check for game over condition
    if (p.y < this.ballMinimum) {
        this.game.script.game.gameOver();
    }
};

/*
 * Called by the input handler to tap the ball up in the air
 * dx is the tap distance from centre of ball in x
 * dy is the tap distance from centre of ball in y
 */
Ball.prototype.tap = function (dx, dy) {
    // Update velocity and spin based on position of tap
    this._vel.set(this.speedMult * dx, this.defaultTap, 0);
    this._angSpeed += this.angMult * dx;

    // calculate the position of the tap in world space
    var tmp = Ball.tmp;
    tmp.copy(this.entity.getLocalPosition());
    tmp.x -= dx;
    tmp.y -= dy;

    // trigger particle effect to tap position, facing away from the center of the ball
    this.impactEffect.setLocalPosition(tmp);
    this.impactEffect.particlesystem.reset();
    this.impactEffect.particlesystem.play();
    this.impactEffect.lookAt(this.entity.getPosition());

    // play audio
    this.entity.sound.play("bounce");

    // increment the score by 1
    this.game.script.game.addScore(1);
};

// Pause the ball update when not playing the game
Ball.prototype.unpause = function () {
    this.paused = false;

    // start game with a tap
    this.tap(0, 0);
};

// Resume ball updating
Ball.prototype.pause = function () {
    this.paused = true;
};

// Reset the ball to initial values
Ball.prototype.reset = function () {
    this.entity.setLocalPosition(this._origin);
    this.entity.setLocalRotation(this._rotation);
    this._vel.set(0,0,0);
    this._acc.set(0, this.gravity, 0);
    this._angSpeed = 0;
};
```

### 脚本属性

首先你会注意到在脚本的顶部是我们定义的一组脚本属性。 通过定义脚本属性，可以将脚本中的值公开到编辑器中。 有三个非常好的理由这样做。

![脚本属性][5]

首先，它允许您对具有不同值的许多不同实体使用相同的脚本。 例如，您可以具有设置颜色的脚本属性，并且在编辑器中通过修改脚本属性来创建红色，蓝色和绿色版本的实体。

其次，您可以快速轻松地调整脚本的行为。 当您修改脚本属性(或者来自编辑器的任何属性)时，系统会对从编辑器启动的对应游戏实例立即进行更改。 因此举个例子，对我们所定义的 `ballMinimum` 属性，你可以启动游戏，并直接测试 `ballMinimum` 为了达到允许球从屏幕的底部掉落的合适的值，而不必重新加载 游戏。 测试游戏，修改值，测试游戏。

这被称为“迭代速度”。 你修改和测试你的游戏的速度越快，你就可以使它越快被开发出来！

对于球，我们定义了一些能够影响游戏表现的脚本属性，如重力，和当轻击球时施加的脉冲。 这些属性能够让我们根据我们的喜好很快地调整游戏。

第三，添加脚本属性是将脚本链接到场景中的实体或资源的好方法。 例如，球脚本需要在轻敲时触发粒子特效。 粒子特效在我们场景中的另一个实体上。 我们定义一个名为`impactEffect`的类型为`entity`的脚本属性，在编辑器中我们将它链接到带有粒子效果的实体。 我们的脚本现在有一个对实体的引用，我们可以在不破坏我们的代码的情况下自由修改这个实体或改变其链接到另一个实体。

### 物理模拟

对于有一些基本的矢量数学知识的你，一定能够轻松理解球的`update()` 循环。但对于其他人，我们对如何模拟一个视频游戏中的球解释得更多一点。

在视频游戏中模拟某物的一种简单方法是给该物体加速度，速度和位置。 每一步(或帧)的加速度(变化速率的速率)改变物体的速度，速度(它是位置的变化率)改变其位置。 然后你在新的位置上绘制你的对象。

您可以通过三种方式之一改变对象的位置。

* **改变加速度**，这对于在一段时间内施加力是有用的，比如球上的重力
* **更改速度**，这是瞬时变化。 就像一个球撞击地板弹跳
* **改变位置**，像传送，这并不是一个现实现象的模拟！

在我们的模拟中，由于重力我们的球有一个恒定的加速度，当你点击球时球的速度被进行了瞬间变化，当你重置游戏，我们传送球回到它的起始位置。

#### 模拟

我们的循环部分做了这些事:

>_(速率改变) = (加速度) \* (自上一帧以来的时间)_

>_(新的速度) = (旧的速度) + (速率的改变)_

>_(位置上的改变量) = (新的速度) \* (自上一帧以来的时间)_

>_(新的位置) = (旧的位置) + (位置上的改变量)_

在代码中这些看起来是这样的:

```javascript
var p = this.entity.getLocalPosition();

// integrate the velocity in a temporary variable
tmp.copy(this._acc).scale(dt);
this._vel.add(tmp);

// integrate the position in a temporary variable
tmp.copy(this._vel).scale(dt);
p.add(tmp);

// update position
this.entity.setLocalPosition(p);
```

你会注意到，我们使用临时向量`tmp`来存储中间值。 不要在每帧中创建一个新的向量是很重要的。 还要注意，我们必须调用`setLocalPosition`来设置更新的位置。

最后，为了获得更好的效果我们通过使用 `entity.rotate()`改变角速度为球添加一个旋转的效果。在物理上这不需要很精确，但能够让画面变得好看。

#### 响应输入

你可能还记得在[第2部分] [2]中的`input.js'脚本检查了一个输入是否已经击中了球，如果击中了，则调用`tap()` 方法。 上面定义的`tap()` 方法直接改变了球的速度和角速度。 我们定义了几个我们的脚本属性`this.speedMult`和`this.angMult`来复制接收新的速度和角速度，以符合我们对游戏效果的期望。

我们还使用tap方法在撞击点触发颗粒尘云并播放声音效果。 我们将在[第4部分] [4]中讨论粒子和声音。

## 小结

球的脚本运行了一些简单的物理模拟效果以使球在重力影响下下坠并响应点击的效果。它还监听游戏事件从而知道何时暂停和重置。 最后，它还与一些其他系统进行交互以显示粒子效果和播放声音。

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[5]: /images/tutorials/beginner/keepyup-part-four/ball-script-attributes.jpg
[6]: https://playcanvas.com/project/406050

