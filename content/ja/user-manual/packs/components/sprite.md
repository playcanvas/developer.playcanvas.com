---
title: Sprite
layout: usermanual-page.hbs
position: 20
---

スプライトコンポーネントは[スプライトアセット][1]をシーンにレンダリングおよびアニメーション化します。

スプライトには、シンプルとアニメーションの2種類があります。

## Simple Sprites

シンプルなスプライトコンポーネントは、アトラスから単一のフレームを表示します。

![シンプルスプライト][2]

## Simple Sprite Component Properties

| Property    | Description |
|-------------|-------------|
| Type        | Simple or Animated. |
| Sprite      | The Sprite Asset to display. |
| Frame       | The frame index of the Sprite to display. |
| Color       | A color to apply as a tint to the sprite. |
| Opacity     | The transparency of the sprite. |
| Flip X      | Flip the rendered sprite horizontally. |
| Flip Y      | Flip the rendered sprite vertically. |
| Layers      | The Layers in which to render the sprite. |
| Draw Order  | The order in which this sprite is rendered. Lower numbers are rendered first. |
| Batch Group | The Batch Group that this model belongs to. More on Batching [here][6]. |

## Animated Sprites

アニメーションスプライトコンポーネントには、異なるスプライトアセットを再生できる複数のスプライトアニメーションクリップが添付されています。

![アニメーションスプライト][3]

## Animated Sprite Component Properties

| Property   | Description |
|------------|-------------|
| Type       | Simple or Animated. |
| Frame      | The frame index of the Sprite to display. |
| Color      | A color to apply as a tint to the sprite. |
| Opacity    | The transparency of the sprite. |
| Flip X     | Flip the rendered sprite horizontally. |
| Flip Y     | Flip the rendered sprite vertically. |
| Speed      | Multiplier applied to the speed at which sprite animation clips on this sprite component are animated. |
| Layers     | The Layers in which to render the sprite. |
| Draw Order | The order in which this sprite is rendered. Lower numbers are rendered first. |
| オートプレイ  | The name of a sprite animation clip to play when the sprite is enabled. |

## Sprite Animation Clip Properties

| Property | Description |
|----------|-------------|
| Name     | The name of the Sprite Animation Clip. Used to reference an individual clip. |
| ループ     | If true the animation clip will loop back to the start when it reaches the end. |
| FPS      | The speed at which the clip is played in Frames Per Second. |
| Sprite   | The Sprite Asset which is used to play this clip. |

## Scripting Interface

[スクリプトコンポーネント][4]を使用して、スプライトコンポーネントのプロパティを制御できます。スプライトコンポーネントのスクリプトインターフェイスは[こちら][5]です。


[1]: /user-manual/assets/sprites
[2]: /images/user-manual/scenes/components/component-sprite-simple.png
[3]: /images/user-manual/scenes/components/component-sprite-animated.png
[4]: /user-manual/packs/components/script
[5]: /api/pc.SpriteComponent.html
[6]: /user-manual/optimization/batching
