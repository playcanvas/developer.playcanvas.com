---
title: Animated Textures
template: tutorial-page.tmpl.html
tags: animation, textures
thumb: http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg
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

We calculate the required offset into a temporary vector `tmp`. This is simply: `speed * timeStep`. Then we add this offset to the offset property for both the diffuse map and the normal map by modifying the `diffuseMapOffset` and `normalMapOffset` properties. These values are `pc.Vec2`s which shift the UV co-ordinates used to map the texture to the surface. If you are using other maps (e.g. emissive) you will also need to update these offset properties as well. Finally we call `material.update()` to propagate the changes into the shader.

これは、マテリアルのオフセットを変更しテクスチャーをスクロールする簡単でシンプルな方法です。欠点は、このコードがマテリアルの実際のプロパティを変更することです。シーン内に同じマテリアルを使用する複数のモデルが存在する場合、全てに影響してしまいます。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

