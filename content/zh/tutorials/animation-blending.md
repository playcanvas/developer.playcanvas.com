---
title: 混合动画
template: tutorial-page.tmpl.html
tags: animation
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg
---

<iframe src="https://playcanv.as/p/HI8kniOx/" ></iframe>

*点击屏幕进行对焦，然后按'p'键变化到一个拳击动画。*

本教程介绍了动画混合的基本知识。

场景中的对象可能会被绑定动画，机器和角色是你可能想要绑定动画的很好的例子。 通常，当创建3D内容时，模型的默认动画被同时创建，并且这些动画通常被设置为周期播放(因为它们可循环)。 例如，人物角色可以具有空闲周期，步行周期，运行周期等。 作为一个PlayCanvas开发人员，你需要一个机制来控制你的动画对象播放这些动画。 此外，你不希望这些动画从一个切换为另一个时被'pop'掉。 要解决这个问题，您应该使用动画混合，实现从一个动画到另一个动画的平滑过渡。 这极大地提高了您的动画对象的视觉保真度。

让我们来看看如何通过PlayCanvas实现...

## 动画组件

要将动画应用于模型，请将动画组件添加到实体。 下面是在PlayCanvas编辑器中显示的蒙皮角色的配置。

![能动作的实体][1]

在图像中，您可以在编辑器中看到动画组件。 有2个动画资源被分配：一个“空闲”周期和一个“拳击”周期。 使用以这种方式配置的动画组件，其默认行为是播放第一个动画(空闲周期)，并且因为循环选项被设置，它将继续无限制地动画。 但是，我们想要实现一些更有趣的东西：

* 播放循环空闲动画。
* 按键时混合到一个循环拳击动画。
* 在按键释放时混合回空闲动画。

所以这种功能超出了不起眼的动画组件的能力。 我们需要一个脚本组件来管理此附加行为。 你可以在上面截图中的编辑器中看到角色实体的脚本组件，它引用了一个名为animation_blending.js的JS文件。 此文件的内容是：

~~~javascript~~~
var AnimationBlending = pc.createScript('animationBlending');

AnimationBlending.states = {
    idle: {
        animation: 'male.json'
    },
    punch: {
        animation: 'male_uppercut_jab.json'
    }
};

// initialize code called once per entity
AnimationBlending.prototype.initialize = function() {
    this.blendTime = 0.2;

    this.setState('idle');

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.keyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.keyUp, this);
};

AnimationBlending.prototype.setState = function (state) {
    var states = AnimationBlending.states;

    this.state = state;
    // Set the current animation, taking 0.2 seconds to blend from
    // the current animation state to the start of the target animation.
    this.entity.animation.play(states[state].animation, this.blendTime);
};

AnimationBlending.prototype.keyDown = function (e) {
    if ((e.key === pc.KEY_P) && (this.state !== 'punch')) {
        this.setState('punch');
    }
};

AnimationBlending.prototype.keyUp = function (e) {
    if ((e.key === pc.KEY_P) && (this.state === 'punch')) {
        this.setState('idle');
    }
};
~~~

从这一点上来说，您可以向动画组件添加越来越多的动画，并开始编写更复杂的动画状态图表。

在这里查看 [完整的场景][2]

[1]: /images/tutorials/animation_blending.jpg
[2]: https://playcanvas.com/editor/scene/440156

