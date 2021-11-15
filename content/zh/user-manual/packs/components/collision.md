---
title: Collision
template: usermanual-page.tmpl.html
position: 6
---

碰撞体组件指定了对于实体的碰撞体体积。组件接口动态地显示了基于”Type”属性的不同属性。

在启动状态下以及组件为触发容器（因为碰撞体没有同源刚体组件），容器触发器将会被开启。如果组件有一个同源刚体组件，同源将会被开启。

#### Box
![Collision component (Box)][1]
#### Capsule
![Collision component (Capsule)][2]
#### Compound
![Collision component (Compound)][3]
#### Cone
![Collision component (Cone)][4]
#### Cylinder
![Collision component (Cylinder)][5]
#### Mesh
![Collision component (Mesh)][6]
#### Sphere
![Collision component (Sphere)][7]

如果一个实体同样拥有刚体组件，刚体的模型将会由碰撞体组件定义。如果实体没有包含刚体组件，那么碰撞体组件将会被视作为一个触发器。触发器将不会影响在场景中的其他刚体的模拟进程。相反，你可以添加一个脚本组件以及附加一个响应触发器事件的脚本。

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Type</td><td>原型碰撞器的类型。可以为：<ul><li>立方体</li><li>球体</li><li>胶囊</li><li>网格</li></ul></td></tr>
    <tr><td>Half Extents</td><td>立方体限定。 这是一个3D向量：原始空间宽度，高度，深度的一半</td></tr>
    <tr><td>Axis</td><td>胶囊限定. 将胶囊与实体的局部空间X,Y或Z轴对齐。</td></tr>
    <tr><td>Height</td><td>胶囊限定. 胶囊两端顶部之间的距离。</td></tr>
    <tr><td>Radius</td><td>球体和胶囊限定。球体或者胶囊体的半径。</td></tr>
    <tr><td>Asset</td><td>网格限定。模型将被用作于三角形为基础的碰撞网格的来源。</td></tr>
</table>

## 脚本接口

可以通过[脚本组件][8]来修改碰撞体组件的属性。碰撞体组件的脚本接口在[这里][9]。

[1]: /images/user-manual/scenes/components/component-collision-box.png
[2]: /images/user-manual/scenes/components/component-collision-capsule.png
[3]: /images/user-manual/scenes/components/component-collision-compound.png
[4]: /images/user-manual/scenes/components/component-collision-cone.png
[5]: /images/user-manual/scenes/components/component-collision-cylinder.png
[6]: /images/user-manual/scenes/components/component-collision-mesh.png
[7]: /images/user-manual/scenes/components/component-collision-sphere.png
[8]: /user-manual/packs/components/script
[9]: /engine/api/stable/symbols/pc.CollisionComponent.html

