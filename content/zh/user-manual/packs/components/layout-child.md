---
title: Layout Child
template: usermanual-page.tmpl.html
position: 8
---

The LayoutChild component enables an element that is controlled by a LayoutGroup component to override the default behavior of the Layout Group.

See the [Layout Groups][0] section for more details.

![LayoutChild component][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Min Width</td><td>Set the minimum width that the element can be rendered at.</td></tr>
    <tr><td>Min Height</td><td>Set the minimum height that the element can be rendered at.</td></tr>
    <tr><td>Max Width</td><td>Set the maximum width that the element can be rendered at.</td></tr>
    <tr><td>Max Height</td><td>Set the maximum height that the element can be rendered at.</td></tr>
    <tr><td>Fit Width Proportion</td><td>The proportion of additional space that the element will take up if the layout group is set to stretch or shrink.</td></tr>
    <tr><td>Fit Height Proportion</td><td>The proportion of additional space that the element will take up if the layout group is set to stretch or shrink.</td></tr>
    <tr><td>Exclude from layout</td><td>Completely ignore this element when calculating the layout.</td></tr>
</table>

## 脚本接口

You can control an LayoutChild component's properties using a [script component][2]. The LayoutChild component's scripting interface is [here][3].

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutchild.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutChildComponent.html

