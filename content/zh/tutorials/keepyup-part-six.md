---
title: 制作一个简单的游戏 - Part 6
template: tutorial-page.tmpl.html
tags: games
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*你可以在这里找到[完整项目] [11]。 如果你没有看过[第1部分] [1]，[第2部分] [2]，[第3部分] [3]，[第4部分] [4]和[第5部分] [5]请先阅读它们。*

## 用户界面

游戏的用户界面是你第一个能在游戏中看到的东西，通常情况下它会是游戏开发者制作游戏时最后才会想到的部分。然而一个优秀的用户界面不仅仅可以给予你的游戏一个好的样式。它可以即刻地影响你的游戏的潜在玩家人数。

在PlayCanvas应用程序中构建用户界面有好几种方法。 您可以使用HTML和CSS资源，也可以使用在主场景中呈现的WebGL几何。 在这里我们将使用第二种方法。 使用可从PlayCanvas Github页面获得的[精灵库] [6]和[字库] [7]。

### 用户界面实体

![层级树][9]

我们已经将我们的用户界面按照游戏状态分为三个部分: 菜单，游戏中和游戏结束。 每个状态都有一个父实体，其中包含该界面在屏幕中显示的图形。 还存在每个界面屏幕的用于处理用户交互和任何其他游戏事件的脚本。

### 精灵设置

![精灵][10]

要添加脚本，我们从Sprite库中添加`sprite.js`到我们的项目，并添加脚本组件。 Sprite代码暴露了用来在我们的场景中以2D渲染精灵的属性。 Sprite脚本属性在[Github页面] [6]有详细说明

### 用户界面脚本

让我们来看看主界面的脚本。

```javascript
var UiMenu = pc.createScript('uiMenu');

// initialize code called once per entity
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // Listen for clicks on the play button
    this.app.mouse.on("mouseup", this.start, this);
    if (this.app.touch) {
        this.app.touch.on("touchend", this.start, this);
    }
};

UiMenu.prototype.onDisable = function () {
    // Stop listening to events
    this.app.mouse.off("mouseup", this.start, this);
    if (this.app.touch) {
        this.app.touch.off("touchend", this.start, this);
    }
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // prevent touch and mouse events
    e.event.preventDefault();
};
```

当实体启用时，我们开始监听鼠标和触摸事件，当实体被禁用时，我们停止监听事件。 当触发事件时，我们触发主游戏脚本的监听事件"ui:start" ，从而触发游戏状态的改变。

我们在另外两个UI界面的脚本中重复近似的工作，即我们监听游戏事件并发送ui的事件。

## 游戏结束

恭喜您到达系列的结束！ 我们希望您已经了解了如何使用PlayCanvas构建和创建游戏。 如果您对本教程有任何反馈，请联系我们的[论坛] [8]。

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[5]: /tutorials/beginner/keepyup-part-five
[6]: https://github.com/playcanvas/sprites
[7]: https://github.com/playcanvas/fonts
[8]: http://forum.playcanvas.com
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050

