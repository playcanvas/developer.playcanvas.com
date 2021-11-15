---
title: Animation
template: usermanual-page.tmpl.html
position: 2
---

动画组件将会对实体上模型组件所指定的模型加入特定的动画。

动画组件可以被启用或关闭。通过组件面板右上角的开关来控制。在打开的情况下，组件将会播放指定的动画。

![动画组件][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Assets</td><td>可以被实体利用的动画资源。可以使用拾取工具选取复数个动画资源。</td></tr>
    <tr><td>Speed</td><td>动画回放速度的倍增系数。0表示动画静止，1表示动画的标准回放速度。</td></tr>
    <tr><td>Activate</td><td>如果选中，组件会在动画加载后自动播放动画。</td></tr>
    <tr><td>Loop</td><td>如果选中，动画将会自动在播放后回到开头。否则动画将会停止在最后一帧位置。</td></tr>
</table>

## 编程接口

可以通过[脚本组件][2]来修改动画组件的属性。动画组件的脚本接口在[这里][3]。

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.AnimationComponent.html

