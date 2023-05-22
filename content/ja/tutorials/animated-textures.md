---
title: アニメーションテクスチャ
layout: tutorial-page.hbs
tags: animation, textures
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/BM93v05L/" title="Animated Textures"></iframe>

*[フルプロジェクト][1]を見てください*

サーフェスに適用されたマテリアルをアニメーション化することは非常に便利です。ここでは、移動をシミュレートするためにテクスチャをスクロールする例を示します。

## マップオフセットでマテリアルをスクロール

例で示される正方形の平面は、常にフレーム毎でUVオフセットを移動するためのスクリプト `scrolling-texture.js` を使用しています。例えば、水の流れをシミュレートするために使用します。更新ループを下記に表示します。

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var velocity = ScrollingTexture.tmpVec2;
    var offset = ScrollingTexture.tmpOffset;

    // テクスチャのオフセット量を計算する
    // Speed * dt
    velocity.set(this.speed.x, this.speed.y);
    velocity.scale(dt);

    // 現在のdiffuseおよびnormal mapのオフセット値を更新する
    offset.copy(this.material.diffuseMapOffset);
    offset.add(velocity);

    this.material.diffuseMapOffset = offset;
    this.material.normalMapOffset = offset;
    this.material.update();
};
```

一時的なベクトル `tmp` に必要なオフセットを計算します。これは単に `speed * timeStep` になります。その後、 `diffuseMapOffset` と `normalMapOffset` プロパティを変更して、拡散マップと通常マップの両方のオフセットプロパティにこのオフセットを追加します。これらの値は `pc.Vec2` で、表面にテクスチャをマッピングするために使用されるUV座標をシフトします。他のマップを使用している場合も(例えば発光マップ)、同様にこれらのオフセットプロパティを更新する必要があります。最後に、 `material.update()` を呼んでシェーダに変更を適用します。

これは、マテリアルのオフセットを変更しテクスチャーをスクロールする簡単でシンプルな方法です。欠点は、このコードがマテリアルの実際のプロパティを変更することです。シーン内に同じマテリアルを使用する複数のモデルが存在する場合、全てに影響してしまいます。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png
