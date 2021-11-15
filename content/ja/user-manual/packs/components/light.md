---
title: Light
template: usermanual-page.tmpl.html
position: 10
---

Lightコンポーネントはエンティティに動的ライトソースを添付します。Typeプロパティは添付されるライトの種類や利用可能な他のプロパティを定めます。

Lightコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効にした場合、ライトはシーンを照らします。

#### 指向性
![Light コンポーネント (指向性)][1]
#### Point
![Light コンポーネント(ポイント)][2]
#### Spot
![Light コンポーネント (スポット)][3]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Type</td><td>次に設定できます:
        <ul>
            <li>Directional: 一定の方向を射すライト</li>
            <li>Point: 1点の周りのすべての方向を射すライト</li>
            <li>Spot:円錐の頂点から射すライト</li>
        </ul>
    </td></tr>
    <tr><td>Lightmap</td><td>このライトからライトマップベーキングを有効にします</td></tr>
    <tr><td>Affect</td><td>このライトで照らされるオブジェクトの種類を決定します。いかなる組み合わせの動的に照らされたオブジェクトまたはライトマップされたオブジェクトを使用できます。</td></tr>
    <tr><td>Color</td><td>放射されるライトの色。</td></tr>
    <tr><td>Intensity</td><td>ライトの強度。ライトの色のスカラー値となる。値は1以上でも良い。</td></tr>
    <tr><td>Range</td><td>ポイントとスポットのみ。その効果が0になる、スポットライトのソースからの距離。</td></tr>
    <tr><td>Falloff Mode</td><td>ポイントとスポットのみ。光がその位置から減衰する速度を制御します。</td></tr>
    <tr><td>Cone Angles</td><td>スポットのみ。ライトが最高値から0に下がる、スポットライトの方向から測定されるコーンの内側及び外側の角度。</td></tr>
    <tr><td>Shadows</td><td>有効にすると、影をキャストするモデルはライトにより影を落とし始めます。</td></tr>
    <tr><td>Update Mode</td><td>このライトのシャドウマップが更新されるタイミングを定義します。次に設定することができます：
        <ul>
            <li>Once（一度）: 一度のみ生成される。影を落とす側、受ける側が静的な場合に有用。</li>
            <li>Realtime（リアルタイム）: 毎フレーム更新される。</li>
        </ul>
    </td></tr>
    <tr><td>Resolution</td><td>このライトソースで生成されるシャドーマップの解像度。このプロパティはCast Shadowsにチェックが入っている場合のみ使用されます。高い値はより正確な影を生みますが、パフォーマンスの負担は上がります。</td></tr>
    <tr><td>Distance</td><td>指向性ライトのみ。Distanceは指向性ライトにより作られる影が表示されない、カメラからの最高距離です。値を小さくすると、より詳細な影が作られます。限度が近いほど、シャドーマップにマッピングや代表するべき影データの量が減ります。シャドーマップのピクセルは空間的にマップされるので、シャドーマップがカバーする距離が短い分ピクセル数は減り影の解像度が上がります。</td></tr>
    <tr><td>Shadow Type</td><td>使用するシャドウマッピングアルゴリズム。影の外観とパフォーマンスに影響します。次に設定することができます：
        <ul>
            <li>Shadow Map: PCF (Percentage Closer Filtering) シャドウマップ。</li>
            <li>Variance Shadow Map (8bit): 低精度のシャドウマップ。VSMは、PCFシャドウよりも基本的に軟質です。</li>
            <li>Variance Shadow Map (16bit): 中精密のシャドウマップ。8 bit VSMの二倍のVRAMを使用します。</li>
            <li>Variance Shadow Map (32bit): 高精度のシャドウマップ。16 bit VSMの二倍のVRAMを使用します。</li>
        </ul>
    </td></tr>
    <tr><td>Bias</td><td>Bias値は、アーティファクトのレンダリング（つまりshadow acneとpeter-panning）を除外するために、影を調整できるようにします。</td></tr>
    <tr><td>Cookie</td><td>ポイントとスポットのみ。ライトから投射されるテクスチャアセット。</td></tr>
    <tr><td>Intensity</td><td>ポイントとスポットのみ。cookieテクスチャの強度を定義。</td></tr>
    <tr><td>Falloff</td><td>スポットのみ。スポットライトのフォールオフを無効にします。</td></tr>
</table>

## スクリプティングインターフェイス

[スクリプトコンポーネント][4]を使用してLightコンポーネントのプロパティをコントロールできます。Lightコンポーネントのスクリプティングインターフェイスは[こちら][5]。

[1]: /images/user-manual/scenes/components/component-light-directional.png
[2]: /images/user-manual/scenes/components/component-light-point.png
[3]: /images/user-manual/scenes/components/component-light-spot.png
[4]: /user-manual/packs/components/script
[5]: /engine/api/stable/symbols/pc.LightComponent.html

