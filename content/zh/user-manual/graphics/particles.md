---
title: 粒子
template: usermanual-page.tmpl.html
position: 5
---

PlayCanvas为创建和编辑粒子系统提供了全面的支持。

## 什么是粒子系统?

粒子系统是管理多个独立运动的粒子的模拟器。 它们可以被用作于制作与雨，雪，烟雾，火焰等类似的效果。

请注意，粒子并不是按物理效果被模拟的。它们不会互相影响和碰撞。且粒子们会直接穿过你场景中的面。

## 创建一个粒子系统

在编辑器的3D视图中，一个没有设置过的粒子系统通过下列按钮创建:

![粒子系统图标][1]

创建一个新的粒子系统，需要先创建一个新的实例，并添加一个粒子系统组件到它上面。为了方便操作，编辑器菜单中就已经有一个用于实现这一步骤的选项:

![粒子系统创建][2]

A newly created particle system with the default settings looks like this:

![默认粒子系统][3]

要通过粒子系统组建的面板配置粒子系统，可以参考 [这里][4].

## 通过脚本来传递一个粒子系统

有些情况下，你可能想让让一个粒子系统再某些特定的事件触发时或是特定的时间段里播放。举个例子，一个爆炸效果应该在导弹触碰到它的目标时播放。为了达成它，请确认你已经为你的粒子系统禁用了自动播放选项。然后，添加一个脚本组件到您的粒子系统的实体上。下面两行代码可以启动(或重新播放)粒子系统:

```javascript
this.entity.particlesystem.reset();
this.entity.particlesystem.play();
```

[1]: /images/user-manual/graphics/particles/particle_system_icon.png
[2]: /images/user-manual/graphics/particles/particle_system_create.png
[3]: /images/user-manual/graphics/particles/particle_system_default.gif
[4]: /user-manual/packs/components/particlesystem

