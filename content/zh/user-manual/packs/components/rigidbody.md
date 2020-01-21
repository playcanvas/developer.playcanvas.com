---
title: Rigid Body
template: usermanual-page.tmpl.html
position: 12
---

刚体组件决定了一个实体是否加入场景的物理模拟，这将真实地模拟一个实体的真实运动。组件接口的动态显示将基于不同“Type”类型的属性。

使用组件面板右上角的切换键可以开启或者关闭刚体组件。在启用的状态下并且组件有同源碰撞体组件，刚体将会被添加进入物理模拟。

#### Static
![Rigid Body component (Static)][1]
#### Dynamic (and Kinematic)
![Rigid Body component (Dynamic)][2]
#### Kinematic
![Rigid Body component (Kinematic)][3]

请注意必须在同一个实体中添加一个[碰撞体组件][4]以此定义刚体的外形。否则，刚体组件将不会被改变或不会加入到物理模拟。

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of the body:<br><ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul></td></tr>
    <tr><td>Mass</td><td>The mass of the body. If world units in your scene are meters, the unit for mass is kilograms.</td></tr>
    <tr><td>Linear Damping</td><td>Specifies the proportion of linear velocity that is lost by the body every second.</td></tr>
    <tr><td>Angular Damping</td><td>Specifies the proportion of angular velocity that is lost by the body every second.</td></tr>
    <tr><td>Linear Factor</td><td>Multiplier for a body's linear movement in each world axis. If set to 0 for any axis no movement will occur in this axis - useful for the creation of 2D games or 1D/2D movement.</td></tr>
    <tr><td>Angular Factor</td><td>Multiplier for a body's angular (rotational) movement about each world axis. If set to 0 for any axis, no rotation will occur around this axis.</td></tr>
    <tr><td>Friction</td><td>Controls how quickly a body loses velocity when in contact with other bodies.</td></tr>
    <tr><td>Restitution</td><td>A measure of the bounciness of a body between 0 and 1. Warning: setting to 1 means a moving body will never come to a stop (unless  colliding with other bodies with restitutions below 1, or unless a stop is scripted).</td></tr>
</table>

## 脚本接口

可以通过 [脚本接口][5]来修改刚体组件的属性。刚体组件的脚本接口在 [这里][6]。

[1]: /images/user-manual/scenes/components/component-rigid-body-static.png
[2]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[3]: /images/user-manual/scenes/components/component-rigid-body-kinematic.png
[4]: /user-manual/packs/components/collision/
[5]: /user-manual/packs/components/script
[6]: /engine/api/stable/symbols/pc.RigidBodyComponent.html

