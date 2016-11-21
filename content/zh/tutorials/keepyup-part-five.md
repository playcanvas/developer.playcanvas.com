---
title: 制作一个简单的游戏 - Part 5
template: tutorial-page.tmpl.html
tags: games
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*你可以找到[完整项目在这里] [9]。 如果你没有看过[第1部分] [1]，[第2部分] [2]，[第3部分] [3]和[第4部分] [4]请先阅读它们。*

## 音频& 粒子系统

### 音频

音频是你的游戏的一个关键部分。 它将向玩家提供有价值的反馈，比如他们的输入所具有的效果，此外它还可以改变心情和氛围。

Keepy Up游戏中有3个音频效果:背景音乐轨道，当你击球时的敲击声和当你输了时的悲伤长号蜇。 他们的处理互相略有不同。

#### 音乐& 蛰音

音乐和蛰音以相似的方式处理。 主要区别是音乐被设置为循环。 我们有一个`game.js'脚本，它包含了链接到游戏实体中的声音组建的属性，我们只需控制正确的音频插槽播放和停止。

```javascript
this.audio.sound.stop(); // stop current sound playing
this.audio.sound.play("gameover") // play the 'gameover' slot
```

#### 球点击

球的触击声直接附着在球实体上。 这是一个短且非循环的声音。 所以我们每次点击球时才让它播放。

```javascript
this.entity.sound.play("bounce");
```

### 粒子

![粒子][7]

我们在Keepy Up游戏中需要有一个粒子效应。 这是一个尘云，每当球被点击时触发。 尘云是一种非循环效应，需要定位和旋转，以使云在运行时的扩散方向是远离球的。

```javascript
this.impactEffect.setLocalPosition(tmp);
this.impactEffect.particlesystem.reset();
this.impactEffect.particlesystem.play();
this.impactEffect.lookAt(this.entity.getPosition());
```

在这段代码中，我们通过调用`reset()` 和`play()` 重新启动一次粒子效果，同时我们定位和旋转它，使它指向球的中心。

![曲线][8]

使用“粒子效果”编辑器中的“局部速度”图，粒子效果被设置为远离其面向的方向并且粒子沿正z轴移动。

在[第 6 部分][6]继续。

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[6]: /tutorials/beginner/keepyup-part-six
[7]: /images/tutorials/beginner/keepyup-part-five/particle-bounce.gif
[8]: /images/tutorials/beginner/keepyup-part-five/particle-velocity-curves.jpg
[9]: https://playcanvas.com/project/406050

