---
title: Sprite
layout: usermanual-page.hbs
position: 20
---

スプライトコンポーネントは[スプライトアセット][1]をシーンにレンダリングおよびアニメーション化します。

スプライトには、シンプルとアニメーションの2種類があります。

## シンプルスプライト

シンプルなスプライトコンポーネントは、アトラスから単一のフレームを表示します。

![シンプルスプライト][2]

## シンプルスプライトコンポーネントのプロパティ

| プロパティ    | 説明 |
|-------------|-------------|
| Type        | 説明 |
| Sprite      | The Sprite Asset to display. |
| Frame       | The frame index of the Sprite to display. |
| 色       | スプライトの色合いとして適用する色 |
| Opacity (不透明度)     | The transparency of the sprite. |
| Flip X      | Flip the rendered sprite horizontally. |
| Flip Y      | Flip the rendered sprite vertically. |
| Layers      | The Layers in which to render the sprite. |
| 描画の順序  | The order in which this sprite is rendered. Lower numbers are rendered first. |
| Batch Group | The Batch Group that this model belongs to. More on Batching [here][6]. |

## アニメーションスプライト

アニメーションスプライトコンポーネントには、異なるスプライトアセットを再生できる複数のスプライトアニメーションクリップが添付されています。

![アニメーションスプライト][3]

## アニメーションスプライトコンポーネントのプロパティ

| プロパティ   | 説明 |
|------------|-------------|
| Type       | シンプルまたはアニメーション |
| Frame      | 表示するスプライトのフレームインデックス |
| Color      | スプライトの色合いとして適用する色 |
| Opacity    | スプライトの透明度 |
| Flip X     | レンダリングされたスプライトを水平に反転 |
| Flip Y     | レンダリングされたスプライトを垂直に反転 |
| Speed      | このスプライトコンポーネントのスプライトアニメーションクリップがアニメーション化される速度に適用される乗数 |
| Layers     | スプライトをレンダリングするレイヤー |
| Draw Order | このスプライトがレンダリングされる順序。 小さい数字が最初にレンダリングされます。 |
| Auto Play  | スプライトが有効なときに再生するスプライトアニメーションクリップの名前 |

## スプライトアニメーションクリップのプロパティ

| プロパティ | 説明 |
|----------|-------------|
| Name     | スプライトアニメーションクリップの名前。 個々のクリップを参照するために使用されます。 |
| Loop     | trueの場合、アニメーションクリップは最後まで再生すると、最初にループバックします |
| FPS      | クリップが1秒あたりのフレーム数で再生される速度 |
| Sprite   | このクリップの再生に使用されるスプライトアセット |

## スクリプトのインターフェース

[スクリプトコンポーネント][4]を使用して、スプライトコンポーネントのプロパティを制御できます。スプライトコンポーネントのスクリプトインターフェイスは[こちら][5]です。


[1]: /user-manual/assets/sprites
[2]: /images/user-manual/scenes/components/component-sprite-simple.png
[3]: /images/user-manual/scenes/components/component-sprite-animated.png
[4]: /user-manual/packs/components/script
[5]: /api/pc.SpriteComponent.html
[6]: /user-manual/optimization/batching
