---
title: Layout Child
layout: usermanual-page.hbs
position: 8
---

LayoutChildコンポーネントは、LayoutGroupコンポーネントによって制御される要素が、Layout Groupのデフォルト動作を上書きすることができるようにします。

詳細については[Layout Groups][0]セクションをご覧ください。

![LayoutChild component][1]

## Properties

| Property              | Description |
|-----------------------|-------------|
| Min Width             | 要素が描画される最小幅を設定します。 |
| Min Height            | 要素が描画される最小高さを設定します。 |
| Max Width             | 要素が描画される最大幅を設定します。 |
| Max Height            | 要素が描画される最大高さを設定します。 |
| Fit Width Proportion  | レイアウトグループがストレッチまたはシュリンクに設定されている場合、要素が占有する追加スペースの割合を設定します。 |
| Fit Height Proportion | レイアウトグループがストレッチまたはシュリンクに設定されている場合、要素が占有する追加スペースの割合を設定します。 |
| Exclude from Layout   | レイアウトの計算時にこの要素を完全に無視します。 |

## Scripting Interface

[Scriptコンポーネント][2]を使用して、LayoutChildコンポーネントのプロパティを制御できます。LayoutChildコンポーネントのスクリプトインターフェースは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutchild.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutChildComponent.html
