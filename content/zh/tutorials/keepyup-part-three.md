---
title: 制作一个简单的游戏 - Part 3
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*你可以在这里找到[完整项目] [4]。 如果你还没有看过[第1部分] [1]和[第2部分] [2]请先阅读它们。*

## 游戏的脚本 & 输入

这两个脚本`game.js`和`input.js`被附加在场景中的根实体上，称为“游戏”。 脚本通常按照它们在层次结构中遇到的顺序执行，因此在第一个节点的实体上附加任何非实体需求的脚本最容易。 您还可以在编辑器的“设置”面板中管理脚本的加载顺序，以在不将其附加到实体的情况下让其首先加载脚本。

## game.js

```javascript
var Game = pc.createScript('game');

Game.attributes.add('uiMenu', {type: 'entity'});
Game.attributes.add('uiInGame', {type: 'entity'});
Game.attributes.add('uiGameOver', {type: 'entity'});
Game.attributes.add('audio', {type: 'entity'});

Game.STATE_MENU = 'menu';
Game.STATE_INGAME = 'ingame';
Game.STATE_GAMEOVER = 'gameover';

// initialize code called once per entity
Game.prototype.initialize = function() {
    this._state = Game.STATE_MENU;
    this._score = 0;

    this.setResolution();

    window.addEventListener("resize", this.setResolution.bind(this));

    // listen to events from the UI
    this.app.on("ui:start", this.start, this);
    this.app.on("ui:reset", this.reset, this);
};

Game.prototype.setResolution = function () {
    // if the screen width is less than 640
    // fill the whole window
    // otherwise
    // use the default setting

    var w = window.screen.width;
    var h = window.screen.height;

    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};

// Call this to move from MENU to INGAME
Game.prototype.start = function () {
    this._state = Game.STATE_INGAME;
    this.app.fire("game:start");
    this.uiMenu.enabled = false;
    this.uiInGame.enabled = true;

    this.audio.sound.play("music");
};

// Call this to move from INGAME to GAMEOVER
Game.prototype.gameOver = function () {
    this._state = Game.STATE_GAMEOVER;
    this.app.fire("game:gameover");
    this.uiInGame.enabled = false;
    this.uiGameOver.enabled = true;

    this.audio.sound.stop();
    this.audio.sound.play("gameover");
};

// Call this to move from GAMEOVER to MENU
Game.prototype.reset = function () {
    this.app.fire("game:reset");
    this.resetScore();
    this._state = Game.STATE_MENU;
    this.uiGameOver.enabled = false;
    this.uiMenu.enabled = true;

    this.audio.sound.stop();
};

// return the current score
Game.prototype.getScore = function () {
    return this._score;
};

// add a value to the score
Game.prototype.addScore = function (v) {
    this._score += v;
    this.app.fire("game:score", this._score);
};

// reset the score
Game.prototype.resetScore = function () {
    this._score = 0;
    this.app.fire("game:score", this._score);
};
```

### 游戏状态

游戏脚本管理游戏的整体状态，其公开了一些以改变游戏状态并且触发事件以警告其他代码游戏状态已经改变的方法。

我们将游戏分为三个主要状态：菜单，游戏和游戏结束。 游戏脚本提供了在每个状态 `start()`，`gameOver()` 和`reset()`之间转换的方法。 每个脚本都通过设置`_state`变量来记住我们在哪个状态; 触发应用程序事件以警告其他脚本进行状态更改; 切换用户界面元素; 并管理音乐或游戏的声音效果的状态。

当适当的触发事件发生时，将从其他脚本调用这些状态更改方法。 例如，当球从屏幕底部离开时，`gameOver()` 方法被`ball.js`调用。

### 应用事件

让我们暂停一下，看看游戏脚本是如何触发应用程序上的事件的。

```javascript
this.app.fire("game:start")
```

事件是一个脚本与许多其他脚本之间互相通信的非常有用的方式。 事件的工作方式是一个对象(在这种情况下为`this.app`)选择“触发”一个事件。 任何其他有权访问该对象的代码都可以选择监听该对象上的一个或多个事件，当事件被触发时，代码将被通知。

其中一个问题是代码需要访问对象才能开始侦听事件。 这就是为什么应用程序事件是如此有用。 PlayCanvas中的每个脚本都可以访问`this.app`。 这使其能够在任何其他脚本之间充当中心通信中心。

我们选择采用命名空间模式来使事件更清晰，避免冲突。 从上面收听 `game:start` 事件。 您将使用此代码:

```javascript
this.app.on("game:start", function () {
    console.log("game:start event was fired");
}, this)
```

### 记分

游戏脚本还管理当前分数。 它公开了用于修改分数的方法，并且触发事件以让其他代码知道分数已更改。

### 分辨率

最后，游戏脚本处理分辨率为引擎的初始选择，以确保主画布在移动和桌面上都是正确的大小。 在移动设备上(由640像素小于宽的屏幕定义)，游戏只需填充整个屏幕。 在桌面上，我们使用在项目设置中设置的预置分辨率。

## input.js

输入脚本监听来自鼠标或触摸屏的输入，将来自两者的输入归一化为通用目的“点击”，并与应用程序的其余部分通信传送已发生敲击信息。

```javascript
var Input = pc.createScript('input');

Input.attributes.add('ball', {type: 'entity'});
Input.attributes.add('camera', {type: 'entity'});
Input.attributes.add('ballRadius', {type: 'number', default: 0.5});

Input.worldPos = new pc.Vec3();

// initialize code called once per entity
Input.prototype.initialize = function() {

    var self = this;

    this._paused = true;

    // Listen for game events so we know whether to respond to input
    this.app.on("game:start", function () {
        self._paused = false;
    });
    this.app.on("game:gameover", function () {
        self._paused = true;
    });

    // set up touch events if available
    if (this.app.touch) {
        this.app.touch.on("touchstart", this._onTouchStart, this);
    }

    // set up mouse events
    this.app.mouse.on("mousedown", this._onMouseDown, this);
};

Input.prototype._onTap = function (x, y) {
    var p = this.ball.getPosition();
    var camPos = this.camera.getPosition();
    var worldPos = Input.worldPos;

    // Get the position in the 3D world of the touch or click
    // Store the in worldPos variable.
    // This position is at the same distance away from the camera as the ball
    this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);

    // get the distance of the touch/click to the ball
    var dx = (p.x - worldPos.x);
    var dy = (p.y - worldPos.y);

    // If the click is inside the ball, tap the ball
    var lenSqr = dx*dx + dy*dy;
    if (lenSqr < this.ballRadius*this.ballRadius) {
        this.ball.script.ball.tap(dx, dy);
    }
};

Input.prototype._onTouchStart = function (e) {
    if (this._paused) {
        return;
    }

    // respond to event
    var touch = e.changedTouches[0];
    this._onTap(touch.x, touch.y);

    // stop mouse events firing as well
    e.event.preventDefault();
};

Input.prototype._onMouseDown = function (e) {
    if (this._paused) {
        return;
    }

    // respond to event
    this._onTap(e.x, e.y);
};
```

首先，在初始化中我们设置事件监听。 我们监听应用程序事件，以确定游戏是否处于暂停状态(即在菜单或游戏结束状态)。 如果状态为暂停，我们不响应tap。 接下来我们监听touch事件(注意，你必须检查`this.app.touch`是否可用)和鼠标事件。

### 触摸事件

对于触摸事件，我们首先触摸并通过屏幕坐标。 我们也在浏览器事件上调用`preventDefault()` 生成一个`click`事件，除非浏览器停止工作它才不会调用。

### 鼠标事件

在“mousedown”事件中，我们将屏幕坐标传递到敲击代码中。 注意，PlayCanvas确保触摸和鼠标事件具有相同的坐标系。 这与一般的浏览器事件的情况不一样！

### 敲击

`_onTap()`获取屏幕坐标(x, y) ，如果此时已经“击中”球，它会告诉球的代码它已经被点击。

```javascript
this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);
```

详细地，该函数采用屏幕坐标 (x, y) ，并要求相机将它们转换成屏幕上该点下的3D空间中的位置。 为了做到这一点，我们需要提供一个深度，就像你想要的3D点距离屏幕有多远。 本案例中，我们需要得到一个与球的深度相同的3D点。

我们还传入一个向量`Input.worldPos`。 在PlayCanvas应用程序中，避免创建新对象是很重要的，例如在更新循环中调用`new pc.Vec3()` 创建一个新向量。 你这样做的次数越多内存分配就越多(通过调用`new`)，浏览器就需要做更多的垃圾收集来清除你的分配。 垃圾收集是一个(比较慢)的操作，这将导致您的游戏或应用程序经常发生卡顿。

在大多数情况下，PlayCanvas将提供一个传入向量或类似的选项，以便您可以预分配和重新使用对象。

```javascript
// get the distance of the touch/click to the ball
var dx = (p.x - worldPos.x);
var dy = (p.y - worldPos.y);

// If the click is inside the ball, tap the ball
var lenSqr = dx*dx + dy*dy;
if (lenSqr < this.ballRadius*this.ballRadius) {
    this.ball.script.ball.tap(dx, dy);
}
```

一旦我们获得了我们刚刚点击的3D点，我们测试看它是否与球重叠。 你会看到在这里我们正在测试的敲击点与球的半径平方之间的距离。 这样可以避免我们每次测试时进行速度较慢的平方根操作。

如果点击动作击中了球，我们调用球的代码中的 `tap(dx, dy)` 方法并传入我们的点击点到球之间的距离。 我们将在[第4部分] [3]中使用。

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-four
[4]: https://playcanvas.com/project/406050

