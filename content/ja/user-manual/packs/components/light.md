---
title: ライト
layout: usermanual-page.hbs
position: 10
---

Lightコンポーネントはエンティティに動的ライトソースを添付します。Typeプロパティは添付されるライトの種類や利用可能な他のプロパティを定めます。

Lightコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効にした場合、ライトはシーンを照らします。

#### Directional

![Light コンポーネント (指向性)][1]

#### Omni

![Light コンポーネント(ポイント)][2]

#### Spot

![Light コンポーネント (スポット)][3]

## プロパティ

| プロパティ           | 説明 |
|--------------------|-------------|
| Type               | 次に設定できます:<ul><li>Directional: 一定の方向を射すライト</li><li>Omni: 1点の周りのすべての方向を射すライト</li><li>Spot:円錐の頂点から射すライト</li></ul> |
| Color              | 放射されるライトの色。 |
| Intensity          | ライトの強度。ライトの色のスカラー値となる。値は1以上でも良い。 |
| Range              | ポイントとスポットのみ。その効果が0になる、スポットライトのソースからの距離。 |
| Falloff Mode       | ポイントとスポットのみ。光がその位置から減衰する速度を制御します。 |
| Cone Angle         | スポットのみ。ライトが最高値から0に下がる、スポットライトの方向から測定されるコーンの内側及び外側の角度。 |
| Bake Lightmap      | このライトからライトマップベーキングを有効にします |
| Affect             | このライトで照らされるオブジェクトの種類を決定します。いかなる組み合わせの動的に照らされたオブジェクトまたはライトマップされたオブジェクトを使用できます。 |
| Cast Shadows       | 有効にすると、影をキャストするモデルはライトにより影を落とし始めます。 |
| Shadow Update Mode | このライトのシャドウマップが更新されるタイミングを定義します。次に設定することができます：<ul><li>Once（一度）: 一度のみ生成される。影を落とす側、受ける側が静的な場合に有用。</li><li>Realtime（リアルタイム）: 毎フレーム更新される。</li></ul> |
| Resolution         | このライトソースで生成されるシャドーマップの解像度。このプロパティはCast Shadowsにチェックが入っている場合のみ使用されます。高い値はより正確な影を生みますが、パフォーマンスの負担は上がります。 |
| Distance           | 指向性ライトのみ。Distanceは指向性ライトにより作られる影が表示されない、カメラからの最高距離です。値を小さくすると、より詳細な影が作られます。限度が近いほど、シャドーマップにマッピングや代表するべき影データの量が減ります。シャドーマップのピクセルは空間的にマップされるので、シャドーマップがカバーする距離が短い分ピクセル数は減り影の解像度が上がります。 |
| Shadow Type        | 使用するシャドウマッピングアルゴリズム。影の外観とパフォーマンスに影響します。次に設定することができます：<ul><li>Shadow Map: PCF (Percentage Closer Filtering) シャドウマップ。</li><li>Variance Shadow Map (8bit): 低精度のシャドウマップ。VSMは、PCFシャドウよりも基本的に軟質です。</li><li>Variance Shadow Map (16bit): 中精密のシャドウマップ。8 bit VSMの二倍のVRAMを使用します。</li><li>Variance Shadow Map (32bit): 高精度のシャドウマップ。16 bit VSMの二倍のVRAMを使用します。</li></ul> |
| シャドウバイアス - Shadow Bias        | Bias値は、アーティファクトのレンダリング（つまりshadow acneとpeter-panning）を除外するために、影を調整できるようにします。 |
| Cookie             | ポイントとスポットのみ。ライトから投射されるテクスチャアセット。 |
| Cookie Intensity   | ポイントとスポットのみ。cookieテクスチャの強度を定義。 |
| Cookie Falloff     | スポットのみ。スポットライトのフォールオフを無効にします。 |

## スクリプトのインターフェース

[スクリプトコンポーネント][4]を使用してLightコンポーネントのプロパティをコントロールできます。Lightコンポーネントのスクリプティングインターフェイスは[こちら][5]。

[1]: /images/user-manual/scenes/components/component-light-directional.png
[2]: /images/user-manual/scenes/components/component-light-point.png
[3]: /images/user-manual/scenes/components/component-light-spot.png
[4]: /user-manual/packs/components/script
[5]: /api/pc.LightComponent.html
