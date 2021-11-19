---
title: Light
template: usermanual-page.tmpl.html
position: 10
---

灯光组件为实体增加了一个动态的光源。“Type"属性决定了附加哪种类型的灯光，以及其他可用属性。

使用灯光面板右上角的切换键可以开启或关闭灯光。在启用状态下，灯光将会照亮场景。

#### 定向光
![Light component (Directional)][1]
#### 点光灯
![Light component (Point)][2]
#### 聚光灯
![Light component (Spot)][3]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>可以为 :
        <ul>
            <li>定向光: 统一方向的灯光。</li>
            <li>点光源: 由一个点出发向所有方向的灯光。</li>
            <li>聚光灯: 由一个圆锥的顶点所发出的灯光。</li>
        </ul>
    </td></tr>
    <tr><td>Lightmap</td><td>允许这个光照贴图被灯光所照射。</td></tr>
    <tr><td>Affect</td><td>决定了何种对象类型会被灯光点亮。可以为任何动态光或者光亮贴图的对象。</td></tr>
    <tr><td>Color</td><td>光的颜色。</td></tr>
    <tr><td>Intensity</td><td>光的强度，这将作为灯光颜色的标量值，这个值可以超过1。</td></tr>
    <tr><td>Range</td><td>点光源和聚光灯限定。从光源到光源完全消失的位置的距离。</td></tr>
    <tr><td>Falloff Mode</td><td>点光源和聚光灯限定。控制了从某个位置开始光衰减的距离。</td></tr>
    <tr><td>Cone Angles</td><td>内外锥角，从光源为最大值到完全消失的方向测量。</td></tr>
    <tr><td>Shadows</td><td>If checked, the light will cause shadow casting models to cast shadows.</td></tr>
    <tr><td>Update Mode</td><td>决定了灯光的阴影贴图以何种形式被更新，可以为：
        <ul>
            <li>Once: 仅仅只生成一次阴影。</li>
            <li>Realtime: 更新所有页面。</li>
        </ul>
    </td></tr>
    <tr><td>Resolution</td><td>通过光源生成的阴影贴图的分辨率。这个属性只有当Cast Shadows被选中时才会有效。较高的数值将会产生更高精确度的阴影，但是会消耗更多性能。</td></tr>
    <tr><td>Distance</td><td>定向光限定。阴影距离为从摄像机到由定向光造成的阴影完全消失的距离最大距离。</td></tr>
    <tr><td>Shadow Type</td><td>阴影贴图的算法。选项将会影响阴影的外观与表现。可以为：<ul>
            <li>Shadow Map: PCF (Percentage Closer Filtering) 阴影贴图。</li>
            <li>Variance Shadow Map (8bit): 低精度的阴影贴图。VSM通常比PCF阴影贴图更柔和。</li>
            <li>Variance Shadow Map (16bit):中等精度的阴影贴图。使用8位VSM两倍的VRAM。</li>           
            <li>Variance Shadow Map (32bit): 高精度的阴影贴图。使用16位VSM两倍的VARM。</li>
        </ul>
    </td></tr>
    <tr><td>Bias</td><td>Bias values enable the tuning of shadows in order to eliminate rendering artifacts, namely 'shadow acne' and 'peter-panning'. The two values are a shadow bias and a normal offset bias.</td></tr>
    <tr><td>Cookie</td><td>点光源和聚光灯限定。一个纹理资源被灯光投影。</td></tr>
    <tr><td>Intensity</td><td>点光源和聚光灯限定。定义了cookie texture的长度。</td></tr>
    <tr><td>Falloff</td><td>聚光灯限定。 禁止灯光变暗。</td></tr>
</table>

## 脚本接口

可以通过[脚本组件][4]来修改灯光组件的属性。灯光组件的脚本接口在[这里][5]。

[1]: /images/user-manual/scenes/components/component-light-directional.png
[2]: /images/user-manual/scenes/components/component-light-point.png
[3]: /images/user-manual/scenes/components/component-light-spot.png
[4]: /user-manual/packs/components/script
[5]: /api/pc.LightComponent.html

