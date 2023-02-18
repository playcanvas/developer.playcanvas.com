---
title: Layout Group
layout: usermanual-page.hbs
position: 9
---

LayoutGroupコンポーネントを使用すると、エンティティは子要素コンポーネントのサイズと位置を指定できます。

詳細は [Layout グループ][0] をご確認ください。

![LayoutGroup コンポーネント][1]

## Properties

| Property       | 説明 |
|----------------|-------------|
| 方向付け    | Whether the layout should run horizontally or vertically. |
| ReverseX       | Reverses the order of children along the x axis. |
| ReverseY       | Reverses the order of children along the y axis. |
| Alignment      | Specifies the horizontal and vertical alignment of child elements. Values range from 0 to 1 where [0, 0] is the bottom left and [1, 1] is the top right. |
| Padding        | Padding to be applied inside the container before positioning any children. Specified as left, bottom, right and top values. |
| Spacing        | Spacing to be applied between each child element. |
| Width Fitting  | Fitting logic to be applied when positioning and scaling child elements. |
| Height Fitting | Fitting logic to be applied when positioning and scaling child elements. |
| Wrap           | Whether or not to wrap children onto a new row/column when the size of the container is exceeded. |

## Scripting Interface

[スクリプトコンポーネント][2]を使用して、LayoutGroupコンポーネントのプロパティを制御できます。LayoutGroupコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutgroup.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutGroupComponent.html
