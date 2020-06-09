---
title: 物理
template: usermanual-page.tmpl.html
position: 9
---

PlayCanvas采用了物理引擎。该物理引擎可以逼真地控制物体在场景中的运动。如果你考虑过这点，很大一部分的游戏都或多或少对物理模拟的游戏玩法有依赖。举个例子，考虑一下经典游戏爆破彗星:飞船通过给火箭点火进行加速，它具有惯性，并且当它碰到小行星时会被销毁。解决这个简单例子对经验丰富的程序员而言是非常简单的，但是一个物理引擎能让它变得对任何人而言都是简单的。

## 刚体

进一步来说，PlayCanvas公开了一个刚体物理引擎。也就是，这个引擎表示的刚体是一个永远不会以任何方式变形的理想化的对象。这种近似化足以模拟现实世界中最坚固的物体。刚体有一些可以影响他们如何移动的特性：

* Mass质量
* Restitution阻尼
* Friction摩擦系数
* Angular Factor角度因子
* Linear Factor线性因子

在任何时候，你都可以通过两种形式请求(甚至直接设置)一个物体的移动速度：

* Linear Velocity 线性速度
* Angular Velocity 角速度

## 度量单位

通常情况下，PlayCanvas的物理引擎定义一个单位为1米。因此，为了使物品按照精确的速率落到物理上，你应该确保你的场景大小与对象大小是合适的。

举个例子，如果你的游戏设置一个角色的身高位1.8m，那么他在编辑器的3D视图中应该有1.8个单位高。

## 重力

重力是一个场景中的适用于所有刚体恒力。通常情况下，它被设置为在世界坐标Y轴的负方向(换句话说，垂直向下)，值为-9.81。不过也许你想增加或减小它的属性值。举个例子，在一个设置在真空中的游戏中，你也许会想将重力设置成0。要编辑应用于场景中的重力，请打开场景设置面板。

## 通过力移动刚体

物体会受到力和冲量的影响进行移动。一个力是被施加到物体上并经过了一段时间的，而冲量则是在某一时间点施加的力。我们来看几个案例。如果你想推动一个很重的东西使它通过地面，你将会在一定量的时间里一直施加这个力:

```javascript
    update: function (dt) {
        // While the right arrow key is pressed, apply a force to the right
        if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
            this.entity.rigidbody.applyForce(10, 0, 0);
        }
    }
```

你过你想要通过炮口发射一个炮弹，你需要应用一个冲量:

```javascript
    update: function (dt) {
        // If the space bar was pressed, apply an impulse up and to the right
        if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
            this.entity.rigidbody.applyImpulse(10, 10, 0);
        }
    }
```

## 瞬移刚体

通过向实体加入刚体和碰撞检测组建，你将为了设置该实体的位置和方向从而将它们传递给物理引擎。这意味着如果你想使用 pc.Entity API更新一个实体的位置或方向，该功能将不会有效果。反之，你必须调用该刚体组件的函数对实体进行移动，此外你还要明确通知物理引擎要随时更新刚体的位置和方向。

