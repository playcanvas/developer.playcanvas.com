---
title: 刚体
template: usermanual-page.tmpl.html
position: 8
---

刚体组件决定了一个实体是否加入场景的物理模拟，这将真实地模拟一个实体的真实运动。组件接口的动态显示将基于不同“Type”类型的属性。

使用组件面板右上角的切换键可以开启或者关闭刚体组件。在启用的状态下并且组件有同源碰撞体组件，刚体将会被添加进入物理模拟。

#### 静态
![Rigid Body component (Static)][1]
#### 动态 (和运动学)
![Rigid Body component (Dynamic)][2]
#### 运动学
![Rigid Body component (Kinematic)][3]

请注意必须在同一个实体中添加一个[碰撞体组件][4]以此定义刚体的外形。否则，刚体组件将不会被改变或不会加入到物理模拟。

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Type</td><td>主体类型<br><ul><li>静态</li><li>动态</li><li>运动</li></ul></td></tr>
    <tr><td>Mass</td><td>主体的重量。在场景中如果世界单位为米，那么重量的单位为千克。</td></tr>
    <tr><td>Linear Damping</td><td>这个属性定义了每秒由主体运动而失去的线性速度的比例。</td></tr>
    <tr><td>Angular Damping</td><td>这个属性定义了每秒由主体运动而失去的角速度的比例。</td></tr>
    <tr><td>Linear Factor</td><td>用于计算主体在每个世界轴的线性运动的乘式。如果将任何轴设置为0将不会在这个轴出现任何移动，这个设置对于2D游戏的创作或者1D/2D的移动很有帮助。</td></tr>
    <tr><td>Angular Factor</td><td>用于计算主体在每一个世界轴的角（旋转）运动的乘式。如果将任何轴设置为0将不会在这个轴出现任何旋转。</td></tr>
    <tr><td>Friction</td><td>这个属性控制了当主体和其它物体接触时候所消耗速度的量。</td></tr>
    <tr><td>Restitution</td><td>主体弹性的计算方式，介于0至1之间。提示：设置1意味着一个移动的主体将永远不会停止。（除非和其它resitution低于1的物体产生碰撞，或者在脚本中设置停止。）</td></tr>
</table>

## 脚本接口

可以通过 [脚本接口][5]来修改刚体组件的属性。刚体组件的脚本接口在 [这里][6]。

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /engine/api/stable/symbols/pc.RigidBodyComponent.html

