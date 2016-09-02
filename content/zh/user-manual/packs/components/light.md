---
title: 灯光
template: usermanual-page.tmpl.html
position: 6
---

灯光组件为实体增加了一个动态的光源。“Type"属性决定了附加哪种类型的灯光，以及其他可用属性。

使用灯光面板右上角的切换键可以开启或关闭灯光。在启用状态下，灯光将会照亮场景。

#### 定向光
![Light component (Directional)][1]
#### 点光灯
![Light component (Point)][2]
#### 聚光灯
![Light component (Spot)][3]

## Properties

<table class="table table-striped">
    <tr><th>属性</th><th style="width: 75%;">描述</th></tr>
    <tr><td>Lightmap</td><td>允许光照贴图被灯光照射。</td></tr>
    <tr><td>Affect Dynamic</td><td>如果选项为“true”，在程序运行时无光照贴图模型组件将被灯光所影响。</td></tr>
    <tr><td>Affect Lightmapped</td><td>I如果选项为“true”，在程序运行时光照贴图模型组件将被灯光所影响。</td></tr>
    <tr><td>Color</td><td>光的颜色。</td></tr>
    <tr><td>Intensity</td><td>光的强度，这将作为灯光颜色的标量值，这个值可以超过1。</td></tr>
    <tr><td>Range</td><td>电光灯和聚光灯限定。从点光源到光源消失的距离。</td></tr>
    <tr><td>Inner Cone Angle</td><td>聚光灯限定。灯光照射方向到灯光开始从最大值降低的角度。</td></tr>
    <tr><td>Outer Cone Angle</td><td>聚光灯限定。灯光照射方向到灯光消失的角度。</td></tr>
    <tr><td>Cast Shadows</td><td>如果启用， 会产生阴影模型。</td></tr>
    <tr><td>Shadow Distance</td><td>Directional lights only. The shadow distance is the maximum distance from the camera beyond which shadows that come from Directional Lights are no longer visible. Smaller values produce more detailed shadows. The closer the limit the less shadow data has to be mapped to, and represented by, any shadow map; shadow map pixels are mapped spatially and so the less distance the shadow map has to cover, the smaller the pixels and so the more resolution any shadow has.</td></tr>
    <tr><td>Shadow Resolution</td><td>通过光源生成的阴影贴图的分辨率。这个属性只有当Cast Shadows被选中时才会有效。较高的数值将会产生更高精确度的阴影，但是会消耗更多性能。</td></tr>
    <tr><td>Shadow Bias</td><td>Shadow bias is a constant depth offset applied to a shadow map that enables the tuning of shadows in order to eliminate rendering artifacts, namely 'shadow acne' and 'peter-panning'.</td></tr>
    <tr><td>Falloff Mode</td><td>点光灯和聚光灯限定。 </td></tr>
</table>

## 脚本接口

可以通过[脚本组件][4]来修改灯光组件的属性。灯光组件的脚本接口在[这里][5]。

[1]: /images/user-manual/scenes/components/component-light-directional.jpg
[2]: /images/user-manual/scenes/components/component-light-point.jpg
[3]: /images/user-manual/scenes/components/component-light-spot.jpg
[4]: /user-manual/packs/components/script
[5]: /engine/api/stable/symbols/pc.LightComponent.html

