---
title: Layout Group
layout: usermanual-page.hbs
position: 9
---

LayoutGroupコンポーネントを使用すると、エンティティは子要素コンポーネントのサイズと位置を指定できます。

詳細は [Layout グループ][0] をご確認ください。

![LayoutGroup コンポーネント][1]

## プロパティ

| プロパティ       | 説明 |
|----------------|-------------|
| Orientation    | レイアウトを水平に実行するか垂直に実行するか |
| ReverseX       | x軸に沿って子の順序を逆転させます。 |
| ReverseY       | y軸に沿って子の順序を逆転させます。 |
| Alignment      | 子要素の水平および垂直方向の配置を指定します。値の範囲は0〜1です。[0,0]は左下、[1,1]は右上です。 |
| Padding        | 子を配置する前にコンテナ内に適用されるパディング。 left、bottom、right、topの値として指定。 |
| Spacing        | 各子要素間に適用される間隔。 |
| Width Fitting  | 子要素を配置およびスケーリングするときに適用されるフィットロジック。 |
| Height Fitting | 子要素を配置およびスケーリングするときに適用されるフィットロジック。 |
| Wrap           | コンテナのサイズを超えたときに新しい行/列に子をラップするかどうか。 |

## スクリプトのインターフェース

[スクリプトコンポーネント][2]を使用して、LayoutGroupコンポーネントのプロパティを制御できます。LayoutGroupコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutgroup.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutGroupComponent.html
