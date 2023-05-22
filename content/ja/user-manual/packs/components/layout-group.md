---
title: レイアウトグループ
layout: usermanual-page.hbs
position: 9
---

LayoutGroupコンポーネントは、エンティティが子要素のElementコンポーネントのサイズと位置を指定できるようにします。

詳細については[レイアウトグループ][0]のセクションを参照してください。

![LayoutGroupコンポーネント][1]

## プロパティ

| プロパティ名       | 説明 |
|----------------|-------------|
| Orientation    | レイアウトを水平または垂直に実行するかどうかを指定します。 |
| ReverseX       | x軸に沿って子要素の順序を反転します。 |
| ReverseY       | y軸に沿って子要素の順序を反転します。 |
| Alignment      | 子要素の水平および垂直配置を指定します。値は0から1までで、[0、0]が左下で[1、1]が右上です。 |
| Padding        | 子要素の配置の前にコンテナ内に適用されるパディング。左、下、右、上の値で指定します。 |
| Spacing        | 各子要素間に適用されるスペーシングです。 |
| Width Fitting  | 子要素のレイアウトを実行するときに適用されるフィッティングロジックです。 |
| Height Fitting | 子要素のレイアウトを実行するときに適用されるフィッティングロジックです。 |
| Wrap           | コンテナのサイズが超過された場合、子要素を新しい行/列にラップするかどうかを指定します。 |

## スクリプトインタフェース

[Scriptコンポーネント][2]を使用してLayoutGroupコンポーネントのプロパティを制御できます。 LayoutGroupコンポーネントのスクリプトインターフェイスは[こちら][3]にあります。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutgroup.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutGroupComponent.html
