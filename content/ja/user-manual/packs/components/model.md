---
title: Model
template: usermanual-page.tmpl.html
position: 7
---

モデルコンポーネントを使用すれば、エンティティは基本的な形やモデルアセットをレンダリングすることができます。

<img src="/images/user-manual/components/component-model.jpg" style="width: 300px" />

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>チェックが入っていると、モデルはシーンに追加されレンダリングされます。</td></tr>
    <tr><td>Type</td><td>レンダリングされるモデルのタイプ。次が利用可能：<ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Sphere</li><li>Cylinder</li><li>Cone</li></ul></td></tr>
    <tr><td>Asset</td><td>このモデルコンポーネントにレンダリングされるモデルアセット。「アセット」タイプのモデルにのみ当てはまります。各モデルコンポーネントにレンダリングできるモデルの数は一つだけです。</td></tr>
    <tr><td>Cast Shadows</td><td>有効にすると、このコンポーネントでレンダリングされるモデルはシーン内の他のモデルに影を落とします。</td></tr>
    <tr><td>Receive Shadows</td><td>有効にすると、シーン内の他のモデルはこのコンポーネントでレンダリングされるモデルに影を落とします。</td></tr>
</table>

## スクリプティングインターフェイス

[Script component][2]を使用して、モデルコンポーネントのプロパティを操作できます。モデルコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

## Customizing Materials

You can learn how to customize the materials of your model [here][4].

[1]: /images/platform/component_model.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ScriptComponent.html
[4]: /user-manual/assets/materials/#assigning-materials

