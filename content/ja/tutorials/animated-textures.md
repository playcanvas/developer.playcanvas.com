---
title: アニメ化されたテクスチャー
template: tutorial-page.tmpl.html
tags: animation, textures
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/1C968A-image-75.jpg
---

<iframe src="https://playcanv.as/p/BM93v05L/"></iframe>

*See the [full project][1].*

It can be very useful to animate a material that has been applied to a surface. The example shown here is scrolling a texture to simulate some movement.

## マップオフセットでマテリアルをスクロール

例で示される正方形の平面は、常にフレーム毎でUVオフセットを移動するためのスクリプト `scrolling-texture.js` を使用しています。例えば、水の流れをシミュレートするために使用します。更新ループを下記に表示します。

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var velocity = ScrollingTexture.tmpVec2;
    var offset = ScrollingTexture.tmpOffset;
    
    // Calculate how much to offset the texture
    // Speed * dt
    velocity.set(this.speed.x, this.speed.y);
    velocity.scale(dt);

    // Update the diffuse and normal map offset values
    offset.copy(this.material.diffuseMapOffset);
    offset.add(velocity);
    
    this.material.diffuseMapOffset = offset;
    this.material.normalMapOffset = offset;
    this.material.update();
};
```

一時的なベクトル`tmp`に必要なオフセットを計算します。これは単に`speed * timeStep`になります。その後、`diffuseMapOffset` と`normalMapOffset`プロパティを変更して、拡散マップと通常マップの両方のオフセットプロパティにこのオフセットを追加します。これらの値は`pc.Vec2`で、表面にテクスチャをマッピングするために使用されるUV座標をシフトします。他のマップを使用している場合も(例えば発光マップ)、同様にこれらのオフセットプロパティを更新する必要があります。最後に、`material.update()`を呼んで`シェーダに変更を適用します。

これは、マテリアルのオフセットを変更しテクスチャーをスクロールする簡単でシンプルな方法です。欠点は、このコードがマテリアルの実際のプロパティを変更することです。シーン内に同じマテリアルを使用する複数のモデルが存在する場合、全てに影響してしまいます。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

