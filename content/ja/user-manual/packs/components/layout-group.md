---
title: Layout Group
template: usermanual-page.tmpl.html
position: 9
---

LayoutGroupコンポーネントを使用すると、エンティティは子要素コンポーネントのサイズと位置を指定できます。

詳細は[レイアウトグループ][0]セクションをご確認ださい。

![LayoutGroup コンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Orientation</td><td>Whether the layout should run horizontally or vertically</td></tr>
    <tr><td>ReverseX</td><td>Reverses the order of children along the x axis.</td></tr>
    <tr><td>ReverseY</td><td>Reverses the order of children along the y axis.</td></tr>
    <tr><td>Alignment</td><td>Specifies the horizontal and vertical alignment of child elements. Values range from 0 to 1 where [0,0] is the bottom left and [1,1] is the top right.</td></tr>
    <tr><td>Padding</td><td>Padding to be applied inside the container before positioning any children. Specified as left, bottom, right and top values.</td></tr>
    <tr><td>Spacing</td><td>Spacing to be applied between each child element.</td></tr>
    <tr><td>Width Fitting</td><td>Fitting logic to be applied when positioning and scaling child elements.</td></tr>
    <tr><td>Height Fitting</td><td>Fitting logic to be applied when positioning and scaling child elements.</td></tr>
    <tr><td>Wrap</td><td>Whether or not to wrap children onto a new row/column when the size of the container is exceeded</td></tr>
</table>

## スクリプトインターフェース

[スクリプトコンポーネント][2]を使用して、LayoutGroupコンポーネントのプロパティを制御できます。LayoutGroupコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutgroup.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutGroupComponent.html

