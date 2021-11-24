---
title: 制作一个简单的游戏 - Part 6
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk/?overlay=false"></iframe>

*你可以在这里找到[完整项目][11]。 如果你没有看过[第1部分][1]，[第2部分][2]，[第3部分][3]，[第4部分][4]和[第5部分][5]请先阅读它们。*

## 用户界面

游戏的用户界面是你第一个能在游戏中看到的东西，通常情况下它会是游戏开发者制作游戏时最后才会想到的部分。然而一个优秀的用户界面不仅仅可以给予你的游戏一个好的样式。它可以即刻地影响你的游戏的潜在玩家人数。

User Interfaces are built in PlayCanvas using the [Screen Component][7] and the [Element Component][8]. There is more details in the [user manual][6]

### 用户界面实体

![层级树][9]

We have divided our user interface up into the three game states: Menu, In Game and Game Over. Each state has an Screen Entity which is activated when the state is entered. We also have a Screen especially for the overlay. Because the overlay displays underneath the ball in the menu, we use a 3D Screen component to render the overlay in world space behind the ball.

### Images and Text

![Image Element][12]

Images and Text are added to the user interface using the Element Component. This Component can display images in the form of a texture asset or text in the form a font asset.

![Image Attriubtes][13]

### 用户界面脚本

让我们来看看主界面的脚本。

```javascript
var UiMenu = pc.createScript('uiMenu');

UiMenu.attributes.add("overlay", {type: "entity"});

// initialize code called once per entity
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);    
    this.on('disable', this.onDisable, this);
    
    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // Listen for clicks on the background    
    
    this.overlay.enabled = true;
    this.overlay.element.on("click", this.start, this);
    
    if (this.ball) {
        this.ball.model.meshInstances[0].material.depthTest = false;
    }
};

UiMenu.prototype.onDisable = function () {
    this.overlay.enabled = false;
    // Stop listening to events
    this.overlay.element.off("click", this.start, this);
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // prevent touch and mouse events
    e.stopPropagation();
};
```
First we have set up an attribute with a reference to the overlay element. The overlay element is a full screen element which tints the screen green. We also use this to detect input as we only care about the user clicking on the full screen.

When the Entity is enabled we display the full screen overlay by enabling it and then we start listening for the click event. When the Entity is disabled we stop listening for the event and we hide the overlay. When an event is triggered we fire a "ui:start" event which the main game script is listening for and that triggers a change of game state.

我们在另外两个UI界面的脚本中重复近似的工作，即我们监听游戏事件并发送ui的事件。

## 游戏结束

恭喜您到达系列的结束！ 我们希望您已经了解了如何使用PlayCanvas构建和创建游戏。 如果您对本教程有任何反馈，请联系我们的[论坛][8]。

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-four/
[5]: /tutorials/keepyup-part-five/
[6]: /user-manual/user-interface/
[7]: /user-manual/packs/components/screen/
[8]: /user-manual/packs/components/element/
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050
[12]: /images/tutorials/beginner/keepyup-part-six/image-element.jpg
[13]: /images/tutorials/beginner/keepyup-part-six/element-attr.jpg
[14]: https://forum.playcanvas.com/

