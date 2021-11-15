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
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><th>種類</th><th>シンプルまたはアニメーション</th></tr>
    <tr><td>フレーム</td><td>表示するスプライトのフレームインデックス</td></tr>
    <tr><td>色</td><td>スプライトの色合いとして適用する色</td></tr>
    <tr><td>不透明度</td><td>スプライトの透明度</td></tr>
    <tr><td>反転 X</td><td></td>レンダリングされたスプライトを水平に反転</tr>
    <tr><td>反転 Y</td><td>レンダリングされたスプライトを垂直に反転</td></tr>
    <tr><td>速度</td><td>このスプライトコンポーネントのスプライトアニメーションクリップがアニメーション化される速度に適用される乗数</td></tr>
    <tr><td>レイヤー</td><td>スプライトをレンダリングするレイヤー</td></tr>
    <tr><td>描画順序</td><td>このスプライトがレンダリングされる順序。 小さい数字が最初にレンダリングされます。</td></tr>
    <tr><td>自動再生</td><td>スプライトが有効なときに再生するスプライトアニメーションクリップの名前</td></tr>
</table>

## スプライトアニメーションクリップのプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><th>名前</th><th>スプライトアニメーションクリップの名前。 個々のクリップを参照するために使用されます。</th></tr>
    <tr><td>ループ</td><td>trueの場合、アニメーションクリップは最後まで再生すると、最初にループバックします</td></tr>
    <tr><td>FPS</td><td>クリップが1秒あたりのフレーム数で再生される速度</td></tr>
    <tr><td>スプライト</td><td>このクリップの再生に使用されるスプライトアセット</td></tr>
</table>

## スクリプトインターフェイス

[スクリプトコンポーネント][4]を使用して、スプライトコンポーネントのプロパティを制御できます。スプライトコンポーネントのスクリプトインターフェイスは[こちら][5]です。

[1]: /user-manual/assets/sprites
[2]: /images/user-manual/scenes/components/component-sprite-simple.png
[3]: /images/user-manual/scenes/components/component-sprite-animated.png
[4]: /user-manual/packs/components/script
[5]: /en/api/pc.SpriteComponent.html
[6]: /user-manual/optimization/batching

