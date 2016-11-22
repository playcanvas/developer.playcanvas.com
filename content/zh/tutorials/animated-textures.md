---
title: 动画纹理
template: tutorial-page.tmpl.html
tags: animation, texture
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/1C968A-image-75.jpg
---

<iframe src="http://playcanv.as/p/qFDE1q2H"></iframe>

*两种类型的纹理动画。 平面是简单的滚动材料，其他是动画帧。 参见[完整项目] [1]。*

对已经应用了的材质进行动画操作可能非常有用。 本教程中显示了两个常见的用例。 第一个是滚动纹理来模拟一些运动。 第二个是使用精灵表来回放动画帧。

## 使用贴图偏移量滚动一个材质

在该示例中的正方形平面使用脚本`scrolling-texture.js` 来不断地每帧移动UV偏移量。 举个例子，这可以用于模拟流动的水。 更新循环如下所示。

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var tmp = ScrollingTexture.tmp;

    // Calculate how much to offset the texture
    // Speed * dt
    tmp.set(this.speed.x, this.speed.y);
    tmp.scale(dt);

    // Update the diffuse and normal map offset values
    this.material.diffuseMapOffset.add(tmp);
    this.material.normalMapOffset.add(tmp);
    this.material.update();
};
```

我们计算一个临时向量“tmp”中的偏移量。 这很简单：`speed * timeStep`。 然后，我们通过修改diffuseMapOffset和normalMapOffset属性，将这个偏移量添加到diffuse map和normal map的offset属性中。 这些值是`pc.Vec2`类型的，它们移动用于将纹理映射到表面的UV坐标。 如果您使用其他忒土(例如自发光)，您还需要更新这些偏移属性。 最后，我们调用 `material.update()`将更改传播到着色器中。

这是一个简单直接的修改材料的偏移和滚动纹理的方式。 它有一个缺点是这个代码修改的是实际材料的属性。 所以如果你在一个场景中有多个相同材质的模型，它们都会受到影响。

## 使用贴图偏移量为材质设置动画

如果你想有很多实体动画化纹理独立更新，我们需要修改MeshInstance而不是材质上的属性。 当渲染该网格实例时，材质属性将被来自网格实例的参数覆盖。 例如，这允许我们让多个精灵对象使用不同的动画帧但是共享相同的材质。 代码是在项目文件`animated-texture.js`中

在我们的代码示例中，硬币和数字计数器都会被复制，我们设置硬币使用不同的帧速率，数字使用不同的动画帧。

```javascript
AnimatedTexture.prototype.update = function(dt) {
    // calculate when to animate to next frame
    this.timer -= dt;
    if (this.timer < 0) {
        // move to next frame
        this.frame++;
        if (this.frame >= (this.numFrames + this.startFrame)) {
            this.frame = this.startFrame;
        }

        this.updateMaterial(this.frame);

        // reset the timer
        this.timer = 1/this.frameRate;
    }
};

AnimatedTexture.prototype.updateMaterial = function (frame) {
    // calculate how much to change UV to go to next frame
    var dx = 1 / this.width;
    var dy = 1 / this.height;

    // Convert frame number into UV co-ordinate
    var x = frame % this.width;
    var y = Math.floor(frame / this.width);

    var meshes = this.entity.model.meshInstances;

    // create the transform vector (tilingx, tilingy, offsetx, offsety)
    // and override the material properties for this mesh
    // This allows us to use different settings for different Entities, but share the same material
    this.transform.set(dx, dy, x * dx, (1 - dy) - (y * dy));
    meshes[0].setParameter("texture_diffuseMapTransform", this.transform.data);
    meshes[0].setParameter("texture_emissiveMapTransform", this.transform.data);
    meshes[0].setParameter("texture_opacityMapTransform", this.transform.data);
};
```

在这个例子中，我们使用精灵面片来示例这个旋转的硬币。

![硬币][2]

我们设置了脚本属性，让我们通过指定图像的宽度和高度来指定每个动画帧的大小;开始帧编号和在动画中播放的帧数。 这意味着我们可以从多个动画的页面中选择一个单独的动画。 最后，我们开始帧速率播放动画。

在我们的代码中，我们使用计时器倒计时，当我们推进帧时将帧号转换为纹理上的UV坐标。 注意，对于V坐标，0是纹理的底部。 而在精灵面片中通常从上到下运行动画。 因此，当我们设置偏移变换时，要从 `(1 - dy)` 中减去V坐标。

与上一个滚动示例的主要区别。 是我们使用 `pc.MeshInstance.setParameter` 在着色器中设置一个特定的值。 `setParameter` 是比上面修改材质更低级别的代码。 为了使用它，我们需要知道PlayCanvas着色器用来修改地图变换的确切的统一变量名称。 在这种情况下， `texture_diffuseMapTransform`是一个4值数组，表示平铺和偏移量。

<div class="alert-info">
`setParameter` 目前是PlayCanvas引擎中未记录的API。 这是一个非常有用的功能，但依赖于着色器中的确切变量名称。 因为引擎代码可能会在它变成公共API之前有改变，因此请谨慎使用它。
</div>

正如你在我们的例子中可以看到的，两个硬币有不同的帧速率，一组数字只使用3帧的动画。 这个方法是非常有用的，如果你想制作基于精灵的2D动画，脚本`animated-texture.js`是一个很好的起点。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

