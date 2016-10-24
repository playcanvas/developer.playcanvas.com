---
title: モデル
template: usermanual-page.tmpl.html
position: 6
---

モデルコンポーネントは、エンティティがプリミティブな形状やモデルのアセットをレンダリングすることを可能にします。

Modelコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効にした場合、Modelはシーンに追加されレンダリングされます。

![モデルコンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr>
        <td>Type</td>
        <td>レンダリングされるモデルのタイプ。次が可能です：
            <ul>
                <li>Asset</li>
                <li>Box</li>
                <li>Capsule</li>
                <li>Cone</li>
                <li>Cylinder</li>
                <li>Plane</li>
                <li>Sphere</li>
            </ul>
        </td>
    </tr>
    <tr><td>Asset</td><td>このモデルコンポーネントによってレンダリングされるモデルのアセット。「asset」タイプのモデルにのみ適用されます。モデルコンポーネントごとにレンダリングすることができるのは単一のモデルのみです。</td></tr>
    <tr><td>Cast Shadows</td><td>有効にした場合、このコンポーネントによってレンダリングされたモデルは、シーン内の他のモデルに影を落とします。</td></tr>
    <tr><td>Cast Lightmap Shadows</td><td>有効にした場合、このコンポーネントによってレンダリングされたモデルは、ライトマップに影を落とします。</td></tr>
    <tr><td>Receive Shadows</td><td>有効にした場合、このコンポーネントによってレンダリングされたモデルは、シーン内の他のモデルによって影を落とされることになります。</td></tr>
    <tr><td>Static</td><td>モデルが決して動かない場合、このチェックボックスをオンにして、特定の最適化を行うことをエンジンにヒントとして示します。</td></tr>
    <tr><td>Lightmapped</td><td>有効にした場合、このモデルは、動的ライトから照明を受けません。代わりに、ライトマップライトによって生成された照明を受けます。</td></tr>
</table>

## スクリプティングインターフェイス

[スクリプトコンポーネント][2]を使用して、Modelコンポーネントのプロパティを制御することができます。Modelコンポーネントのスクリプトインターフェイスは[こちら][3]です。

## 素材のカスタマイズ

モデルのマテリアルをカスタマイズする方法については、[こちら][4]を参照してください。

[1]: /images/user-manual/scenes/components/component-model.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ModelComponent.html
[4]: /user-manual/assets/materials/#assigning-materials

