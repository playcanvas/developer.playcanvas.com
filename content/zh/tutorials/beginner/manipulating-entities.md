---
title: 操纵实体
template: tutorial-page.tmpl.html
---

在这个教程中，我们会向你展示如何改变一个实体的位置，面对方向和体积大小。

大多数应用程序的基本实体均使用PlayCanvas框架构建而成。 一个实体可以代表任何东西，比如玩家角色，子弹，敌人或只是简单的一个在空间中的点。

实体是图形节点的一种特殊表现形式，他们从`pc.GraphNode`继承了很多行为。  我们在下面应用的所有操作也可以应用于图形节点。

您需要在实体上执行的最常见操作之一是更改其变换矩阵。 实体的局部变换属性决定了实体的位置，方向和比例，并能够影响所有子实体。 学习如何操作变换对于创建有趣和交互式应用程序至关重要。

### 自身坐标系和世界坐标系

理解如何移动和变换实体的很重要的一步是理解自身坐标系和世界坐标系系统。世界坐标系系统被向所有实体公开，并有着固定不变的原点`(0,0,0)`和固定的轴向，即 `(0,1,0)` 表示垂直向上。自身坐标系是依赖于实体自身的。因此自身坐标系原点即实体所处的位置，并且自身坐标系的轴向遵循实体当前的面向。

<img src="/images/tutorials/world.jpg" style="float:left;" alt="World co-ordinates"/>
<img src="/images/tutorials/local.jpg" style="float:right;" alt="Local co-ordinates"/>
<div style="clear:both" />
*世界坐标系和自身坐标系*
<br />

### 层级树

实体系统要理解的一个重要部分是实体图即层级树。 因为实体是一种图形节点，所以它们被一起收集在父图和子图的图或层级中。 每个实体可以有单个父级和多个子级。 子实体从它们的父母继承转换信息。 实体的世界变换矩阵将局部变换乘以父实体的世界变换。 因此，例如，如果子实体具有自身位置为`(1,0,0)`，并且其父类的自身位置为`(0,1,0)`，则子类的世界位置将是 `(1,1,0)`

## 位置点

获取实体的位置是直截了当的

~~~js~~~
// Get the entity's position relative to the coordinate system of the entity's parent
var lp = entity.getLocalPosition();

// Get the entity's position in world space
var wp = entity.getPosition();
~~~

这些方法均返回一个`pc.Vec3` (数组形式[x,y,z]的向量)值。

设置实体的位置也同样简单。

~~~js~~~
// Set the entity's position relative to the coordinate system of the entity's parent
entity.setLocalPosition(x, y, z);

// Set the entity's position in world space
entity.setPosition(x, y, z);
~~~

### 移动实体

要移动实体，您可以直接把位置信息灌入实体，或者可以使用帮助函数translate和translateLocal进行操作。

~~~js~~~
// Translate the entity 1 unit down the positive x axis of world space
entity.translate(1, 0, 0);

// Translate the entity 1 unit down the entity's local z axis
entity.translateLocal(0, 0, 1);
~~~

## 方向

你可以通过设置绝对的旋转量, 或者应用一个旋转增量来改变实体的方向。

设置绝对旋转可以使用[欧拉角] [1]或[四元数] [2]。 维基百科对这两个数学表示的旋转的解释有点难以理解，但这个理念的基础很容易理解。 以下是重要的部分:

** 欧拉角 **

*欧拉角是以*坐标系*的X，Y和Z轴为中心的三个以度为单位的旋转量组成的
*如果俯视坐标系轴，正欧拉角将导致围绕该轴的逆时针旋转
*欧拉角很容易理解，因为你可以在脑中想象他们所产生的影响。

** 四元数**

*四元数被存储为4个数字，并能够表示3D空间中的任何方向
*它们难以直接设置，但可以从欧拉角，旋转矩阵或轴角度转换成
*虽然它们难以可视化，但它们非常有用，因为它们的功能是强大的，并可以快速进行插值(当进行动态旋转时)。

当使用脚本操作一个实体时，你更可能愿意通过欧拉角来设置实体的方向。举个例子：

~~~js~~~
// Rotate 30 degrees anticlockwise around the x axis of the parent entity's coordinate
// system and then 45 degrees around its y axis and lastly 60 degrees around its z axis
entity.setLocalEulerAngles(30, 45, 60);

// Rotate 30 degrees anticlockwise around the world space x axis and then 45 degrees
// around the world space y axis and lastly 60 degrees around the world space z axis
entity.setEulerAngles(30, 45, 60);
~~~
另一方面，如果您想要以四元数形式设置实体的旋转，则可以使用以下函数：

~~~js~~~
// Create an identity rotation
var q = new pc.Quat();
// Set the entity to have the same rotation as its parent - equivalent to
// entity.setLocalEulerAngles(0, 0, 0)
entity.setLocalRotation(q);

// Set the entity to have no rotation with respect to the world space coordinate
// system  - equivalent to entity.setEulerAngles(0, 0, 0)
entity.setRotation(q);
~~~

要以增量方式旋转实体，可以使用rotate相对于世界空间轴旋转实体，或者使用rotateLocal以相对于实体的当前轴旋转。

举个例子，要使一个实体围绕世界坐标的向上轴旋转180°，可以这样做:

~~~js~~~
entity.rotate(0, 180, 0);
~~~

或者将实体围绕其自身坐标系的x轴旋转90度：

~~~js~~~
entity.rotateLocal(90, 0, 0);
~~~

## 缩放

为了使一个实体缩放，你会需要调用到以下函数:

~~~js~~~
// Scale the entity by a factor of 2 in the local Y axis
entity.setLocalScale(1, 2, 1);
~~~

以及这里是一些轻量的有趣的例子:

~~~js~~~
// Scale the entity using a sine function over time
this.timer += deltaTime;
var s = Math.sin(this.timer) + 1;
entity.setLocalScale(s, s, s);
~~~

请注意，您目前无法在世界空间中设置实体的缩放比例。

[1]: http://en.wikipedia.org/wiki/Euler_angles
[2]: http://en.wikipedia.org/wiki/Quaternion

