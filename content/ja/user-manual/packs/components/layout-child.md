---
title: Layout Child
layout: usermanual-page.hbs
position: 8
---

LayoutChildコンポーネントを使用すると、LayoutGroupコンポーネントによって制御される要素が、レイアウトグループのデフォルトの動作をオーバーライドできるようになります。

詳細は [Layout グループ][0] をご確認ください。

![LayoutChild コンポーネント][1]

## プロパティ

| Property              | 説明 |
|-----------------------|-------------|
| Min Width             | Set the minimum width that the element can be rendered at. |
| Min Height            | Set the minimum height that the element can be rendered at. |
| Max Width             | Set the maximum width that the element can be rendered at. |
| Max Height            | Set the maximum height that the element can be rendered at. |
| Fit Width Proportion  | The proportion of additional space that the element will take up if the layout group is set to stretch or shrink. |
| Fit Height Proportion | The proportion of additional space that the element will take up if the layout group is set to stretch or shrink. |
| Exclude from Layout   | Completely ignore this element when calculating the layout. |

## Scripting Interface

[スクリプトコンポーネント][2]を使用してLayoutChildコンポーネントのプロパティを制御できます。LayoutChildコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutchild.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutChildComponent.html
