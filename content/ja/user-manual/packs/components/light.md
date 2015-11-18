---
title: ライト
template: usermanual-page.tmpl.html
position: 6
---

ライトコンポーネントはエンティティに動的ライトソースを添付します。Typeプロパティは添付されるライトの種類や利用可能な他のプログラムを定めます。

#### 指向性
<img src="/images/user-manual/components/component-light-directional.jpg" style="width: 300px" />
#### ポイント
<img src="/images/user-manual/components/component-light-point.jpg" style="width: 300px" />
#### スポット
<img src="/images/user-manual/components/component-light-spot.jpg" style="width: 300px" />

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>チェックされていると、ライトがシーンを照らします。</td></tr>
    <tr><td>Color</td><td>放射されるライトの色。</td></tr>
    <tr><td>Intensity</td><td>ライトの強度。ライトの色のスカラー値となる。値は1以上でも良い。</td></tr>
    <tr><td>Range</td><td>ポイントとスポットのみ。スポットライトのソースのコントリビューションが0になる距離。</td></tr>
    <tr><td>Inner Cone Angle</td><td>スポットのみ。ライトが最高値から下がりだす、スポットライトの方向からの角度。</td></tr>
    <tr><td>Outer Cone Angle</td><td>スポットのみ。ライトが0に下がる、スポットライトの方向からの角度。</td></tr>
    <tr><td>Cast Shadows</td><td>チェックされていると、投影モデルがライトにより投影するようになる。</td></tr>
    <tr><td>Shadow Distance</td><td>指向性ライトのみ。Shadow distanceは指向性ライトにより作られる影が表示されない、カメラからの最高距離です。値を小さくすると、より詳細な影が作られます。限度が近いほど、シャドーマップにマップおよび代表される影データが減ります。 シャドーマップのピクセルは空間的にマップされるので、シャドーマップがカバーする距離が短い分ピクセル数は減り影の解像度が上がります。</td></tr>
    <tr><td>Shadow Resolution</td><td>このライトソースで生成されるシャドーマップの解像度。このプロパティはCast Shadowsにチェックが入っている場合のみ使用されます。高い値はより正確な影を生みますが、パフォーマンスの負担は上がります。</td></tr>
    <tr><td>Shadow Bias</td><td>Shadow biasは、シャドーマップに適用される一定の奥行きオフセットで、レンダリングされるアーティファクト（つまりshadow acneとpeter-panning）を除去できるよう、シャドーの調整を可能にします</td></tr>
    <tr><td>Falloff Mode</td><td>ポイントとスポットのみ。ライトがその位置から弱まるレートを制御。</td></tr>
</table>

## スクリプティングインターフェイス

[スクリプトコンポーネント][4]を使用してライトコンポーネントのプロパティをコントロールできます。ライトコンポーネントのスクリプティングインターフェイスは[こちら][5]。

[4]: /user-manual/packs/components/script
[5]: /engine/api/stable/symbols/pc.LightComponent.html

[1]: /images/platform/component_directionallight.png
[2]: /images/platform/component_pointlight.png
[3]: /images/platform/component_spotlight.png

