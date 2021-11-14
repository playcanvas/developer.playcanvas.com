---
title: Sprite
template: usermanual-page.tmpl.html
position: 20
---

スプライトコンポーネントは[スプライトアセット][1]をシーンにレンダリングおよびアニメーション化します。

スプライトには、シンプルとアニメーションの2種類があります。

## シンプルスプライト

シンプルなスプライトコンポーネントは、アトラスから単一のフレームを表示します。

![シンプルスプライト][2]

## シンプルスプライトコンポーネントのプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th></th><th>Description</th></tr>
    <tr><th>Type</th><th>Simple or Animated</th></tr>
    <tr><td>Sprite</td><td>The Sprite Asset to display</td></tr>
    <tr><td>Frame</td><td>The frame index of the Sprite to display.</td></tr>
    <tr><td>Color</td><td>A color to apply as a tint to the sprite.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the sprite.</td></tr>
    <tr><td>Flip X</td><td>Flip the rendered sprite horizontally.</td></tr>
    <tr><td>Flip Y</td><td>Flip the rendered sprite vertically.</td></tr>
    <tr><td>Layers</td><td>The Layers in which to render the sprite.</td></tr>
    <tr><td>Draw Order</td><td>The order in which this sprite is rendered. Lower numbers are rendered first.</td></tr>
    <tr><td>Batch Group</td><td>The Batch Group that this model belongs to. More on Batching [here][6].</td></tr>
</table>

## アニメーションスプライト

アニメーションスプライトコンポーネントには、異なるスプライトアセットを再生できる複数のスプライトアニメーションクリップが添付されています。

![アニメーションスプライト][3]

## アニメーションスプライトコンポーネントのプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><th>Type</th><th>Simple or Animated</th></tr>
    <tr><td>Frame</td><td>The frame index of the Sprite to display.</td></tr>
    <tr><td>Color</td><td>A color to apply as a tint to the sprite.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the sprite.</td></tr>
    <tr><td>Flip X</td><td>Flip the rendered sprite horizontally.</td></tr>
    <tr><td>Flip Y</td><td>Flip the rendered sprite vertically.</td></tr>
    <tr><td>Speed</td><td>Multiplier applied to the speed at which sprite animation clips on this sprite component are animated.</td></tr>
    <tr><td>Layers</td><td>The Layers in which to render the sprite.</td></tr>
    <tr><td>Draw Order</td><td>The order in which this sprite is rendered. Lower numbers are rendered first.</td></tr>
    <tr><td>Auto Play</td><td>The name of a sprite animation clip to play when the sprite is enabled.</td></tr>
</table>

## スプライトアニメーションクリップのプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><th>Name</th><th>The name of the Sprite Animation Clip. Used to reference an individual clip.</th></tr>
    <tr><td>Loop</td><td>If true the animation clip will loop back to the start when it reaches the end.</td></tr>
    <tr><td>FPS</td><td>The speed at which the clip is played in Frames Per Second.</td></tr>
    <tr><td>Sprite</td><td>The Sprite Asset which is used to play this clip.</td></tr>
</table>

## スクリプトインターフェイス

[スクリプトコンポーネント][4]を使用して、スプライトコンポーネントのプロパティを制御できます。スプライトコンポーネントのスクリプトインターフェイスは[こちら][5]です。

[1]: /user-manual/assets/sprites
[2]: /images/user-manual/scenes/components/component-sprite-simple.png
[3]: /images/user-manual/scenes/components/component-sprite-animated.png
[4]: /user-manual/packs/components/script
[5]: /en/api/pc.SpriteComponent.html
[6]: /user-manual/optimization/batching

