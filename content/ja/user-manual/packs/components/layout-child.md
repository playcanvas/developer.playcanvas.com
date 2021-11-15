---
title: Layout Child
template: usermanual-page.tmpl.html
position: 8
---

LayoutChildコンポーネントを使用すると、LayoutGroupコンポーネントによって制御される要素が、レイアウトグループのデフォルトの動作をオーバーライドできるようになります。

詳細は [Layout グループ][0] をご確認ください。

![LayoutChild コンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>最小幅</td><td>要素をレンダリングできる最小幅を設定</td></tr>
    <tr><td>最小高</td><td>要素をレンダリングできる最小の高さを設定</td></tr>
    <tr>最大幅</td><td>要素をレンダリングできる最大幅を設定</td></tr>
    <tr><td>最大高</td><td>要素をレンダリングできる最大幅を設定</td></tr>
    <tr><td>固定幅の比率</td><td></td>レイアウトグループが伸縮するように設定されている場合に要素が占める追加のスペースの比率</tr>
    <tr><td>固定高の比率</td><td>レイアウトグループが伸縮するように設定されている場合に要素が占める追加のスペースの比率</td></tr>
    <tr><td>レイアウトから除外</td><td>レイアウトを計算するとき、この要素を完全に無視します。</td></tr>
</table>

## スクリプトインターフェイス

[スクリプトコンポーネント][2]を使用してLayoutChildコンポーネントのプロパティを制御できます。LayoutChildコンポーネントのスクリプトインターフェイスは[こちら][3]です。

[0]: /user-manual/user-interface/layout-groups
[1]: /images/user-manual/scenes/components/component-layoutchild.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.LayoutChildComponent.html

