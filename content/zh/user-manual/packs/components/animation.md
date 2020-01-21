---
title: Animation
template: usermanual-page.tmpl.html
position: 1
---

动画组件将会对实体上模型组件所指定的模型加入特定的动画。

动画组件可以被启用或关闭。通过组件面板右上角的开关来控制。在打开的情况下，组件将会播放指定的动画。

![动画组件][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Assets</td><td>The animation assets that can be utilized by this entity. Multiple animations can be assigned via the picker control.</td></tr>
    <tr><td>Speed</td><td>A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset.</td></tr>
    <tr><td>Activate</td><td>If checked, the component will start playing the animation on load.</td></tr>
    <tr><td>Loop</td><td>If checked, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame.</td></tr>
</table>

## 编程接口

可以通过[脚本组件][2]来修改动画组件的属性。动画组件的脚本接口在[这里][3]。

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.AnimationComponent.html

