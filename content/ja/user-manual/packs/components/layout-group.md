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
    <tr>プロパティ</th>説明</th></tr>
    <tr><td>オリエンテーション</td><td>レイアウトを水平に実行するか垂直に実行するか</td></tr>
    <tr><td>リバースX</td><td>x軸に沿って子の順序を逆転させます。</td></tr>
    <tr><td>リバースY</td><td>y軸に沿って子の順序を逆転させます。</td></tr>
    <tr><td>整列</td><td>子要素の水平および垂直方向の配置を指定します。値の範囲は0〜1です。[0,0]は左下、[1,1]は右上です。</td></tr>
    <tr><td>パディング</td><td>子を配置する前にコンテナ内に適用されるパディング。 left、bottom、right、topの値として指定。</td></tr>
    <tr><td>間隔</td><td>各子要素間に適用される間隔。</td></tr>
    <tr><td>固定幅</td><td>子要素を配置およびスケーリングするときに適用されるフィットロジック。</td></tr>
    <tr><td>固定の高さ</td><td>子要素を配置およびスケーリングするときに適用されるフィットロジック。</td></tr>
    <tr><td>ラップ</td><td>コンテナのサイズを超えたときに新しい行/列に子をラップするかどうか。</td></tr>
</table>

## スクリプトインターフェース

[スクリプトコンポーネント][2]を使用して、LayoutGroupコンポーネントのプロパティを制御できます。LayoutGroupコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutgroup.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutGroupComponent.html

