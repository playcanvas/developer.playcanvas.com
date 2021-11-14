---
title: Animated Textures
template: tutorial-page.tmpl.html
tags: animation, textures
thumb: http://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg
---

<iframe src="https://playcanv.as/p/BM93v05L/"></iframe>

*See the [full project][1].*

It can be very useful to animate a material that has been applied to a surface. The example shown here is scrolling a texture to simulate some movement.

## 使用贴图偏移量滚动一个材质

在该示例中的正方形平面使用脚本`scrolling-texture.js` 来不断地每帧移动UV偏移量。 举个例子，这可以用于模拟流动的水。 更新循环如下所示。

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

这是一个简单直接的修改材料的偏移和滚动纹理的方式。 它有一个缺点是这个代码修改的是实际材料的属性。 所以如果你在一个场景中有多个相同材质的模型，它们都会受到影响。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

