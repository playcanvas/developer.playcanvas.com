---
title: 动画纹理
template: tutorial-page.tmpl.html
tags: animation, textures
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/1C968A-image-75.jpg
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

我们计算一个临时向量“tmp”中的偏移量。 这很简单：`speed * timeStep`。 然后，我们通过修改diffuseMapOffset和normalMapOffset属性，将这个偏移量添加到diffuse map和normal map的offset属性中。 这些值是`pc.Vec2`类型的，它们移动用于将纹理映射到表面的UV坐标。 如果您使用其他忒土(例如自发光)，您还需要更新这些偏移属性。 最后，我们调用 `material.update()`将更改传播到着色器中。

这是一个简单直接的修改材料的偏移和滚动纹理的方式。 它有一个缺点是这个代码修改的是实际材料的属性。 所以如果你在一个场景中有多个相同材质的模型，它们都会受到影响。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

