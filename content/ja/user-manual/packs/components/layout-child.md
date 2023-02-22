---
title: Layout Child
layout: usermanual-page.hbs
position: 8
---

LayoutChildコンポーネントを使用すると、LayoutGroupコンポーネントによって制御される要素が、レイアウトグループのデフォルトの動作をオーバーライドできるようになります。

詳細は [Layout グループ][0] をご確認ください。

![LayoutChild コンポーネント][1]

## プロパティ

| プロパティ              | 説明 |
|-----------------------|-------------|
| Min Width             | 要素をレンダリングできる最小幅を設定 |
| Min Height            | 要素をレンダリングできる最小の高さを設定 |
| Max Width             | 要素をレンダリングできる最大幅を設定 |
| Max Height            | 要素をレンダリングできる最大幅を設定 |
| Fit Width Proportion  | レイアウトグループが伸縮するように設定されている場合に要素が占める追加のスペースの比率 |
| Fit Height Proportion | レイアウトグループが伸縮するように設定されている場合に要素が占める追加のスペースの比率 |
| Exclude from Layout   | レイアウトを計算するとき、この要素を完全に無視します。 |

## スクリプトのインターフェース

[スクリプトコンポーネント][2]を使用してLayoutChildコンポーネントのプロパティを制御できます。LayoutChildコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutchild.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutChildComponent.html
