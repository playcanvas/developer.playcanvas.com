---
title: 模型
template: usermanual-page.tmpl.html
position: 6
---

模型组件允许一个实体渲染图元或者模型元件。

使用模型模版右上角的切换键可以开启或关闭模型组件。在启用状态下，模型将会被添加到场景并且进行渲染。

![模型组件][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr>
        <td>类型</td>
        <td>默认的模型类型可以是:
            <ul>
                <li>资源</li>
                <li>立方体</li>
                <li>胶囊体</li>
                <li>圆锥体</li>
                <li>圆柱体</li>
                <li>平面</li>
                <li>球体</li>
            </ul>
        </td>
    </tr>
    <tr><td>资源</td><td>模型资源可被这种类型的模型组建显示。仅适用于“资源”型的模型。每个模型组件只可呈现一个模型。</td></tr>
    <tr><td>投射阴影</td><td>如果启用，此组件呈现的模型会在其它模型上呈现阴影。</td></tr>
    <tr><td>光照贴图阴影</td><td>如果启用， 此组件呈现的模型的贴图上会渲染光照影响。</td></tr>
    <tr><td>接受阴影</td><td>如果启用，此组件呈现的模型上能够呈现其它模型在它上面投射的阴影。</td></tr>
    <tr><td>静态</td><td>如果模型永远不会产生位移，选中此复选框以提示引擎做出一定的优化。</td></tr>
    <tr><td>光照贴图</td><td>如果启用，此模型不再接收场景光的影响。作为代替，它会显示从光照贴图处创建出的反光。</td></tr>
</table>

## 脚本接口

可以通过[脚本组件][2]来修改模型组件的属性。模型组件的脚本接口在[这里][3]。

## 制作材质

学习如果制作一个模型的材质 点击 [这里][4].

[1]: /images/user-manual/scenes/components/component-model.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ModelComponent.html
[4]: /user-manual/assets/materials/#assigning-materials

