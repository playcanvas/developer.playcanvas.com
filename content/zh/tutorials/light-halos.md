---
title: 光晕
template: tutorial-page.tmpl.html
tags: lighting
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406040/2TX0AO-image-75.jpg
---

<iframe src="https://playcanv.as/p/rnIUbXws/"></iframe>

更多的细节可以参考[完整的工程][4]。

这个简单的效果在为你的场景添加气氛方面十分有用。 向光源或发光纹理添加辉光，以产生灰尘或雾气的效果，或模拟看向亮光的效果。

它的工作原理是这样的：我们创建一个具有平面原型的实体，附着上一个发光的光环材料。 我们附加一个脚本到实体，使这个平面总是面对相机(就像广告牌)。 为了增加乐趣，我们设定它模拟定向光，在面对远离镜头方向时衰减光晕。

## 资源

### 贴图

首先，你需要一个光环纹理。 在这个例子中，我们使用了一个非常简单的模糊滤镜文理，它是在像Photoshop这样的艺术程序中创建的。

![blob][1]

这种纹理将形成辉光的基础。

### 材质

![材质][2]

光晕的材料使用光线槽中的斑点纹理。 使用 **着色** 属性设置光环的颜色。 我们还在不透明度插槽中启用了混合。 这项被设置为**Additive Alpha**。**Additive** 部分意味着材料的颜色被添加到其下面的背景颜色。 这意味着光晕发光也能够影响背景。**Alpha**部分意味着它使用`不透明度'的值来设置材质的透明度。

## 实体

![实体][3]

为实体设置的辉光也很简单。 我们有一个用于光晕脚本的父实体和一个具有连接到它的发光平面的子实体。 这样做可以简化代码，以便我们可以使用`entity.lookAt`来设置辉光的方向。 由于发光平面默认面向上方，因此我们创建一个子实体，并对该子实体应用旋转，以使平面正确定位于面向相机的方向。

## 代码

这个项目的代码有两个特别有趣的特性。

首先，我们每帧更新光晕实体使其面对相机。

```javascript
// Set the glow to always face the camera
this.entity.lookAt(this.camera.getPosition());
```

第二，如果光晕被标记为“单向的”(具有我们暴露的脚本属性)，则我们修改不透明度，可以使得光晕在面向远离相机时不可见。 事实上，我们是在慢速修改不透明度，在它越远离相机时使它变得更透明。

```javascript
// If enabled, unidirectional means the glow fades off as it turns away from the camera
if (this.unidirectional) {
    // Get the dot product of the parent direction and the camera direction
    var dot = -1 * tmp.dot(this.camera.forward);
    // If the dot product is less that 0 the glow is facing away from the camera
    if (dot < 0) {
        dot = 0;
    }

    // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera
    meshes[0].setParameter("material_opacity", dot);
} else {
    // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453
    meshes[0].setParameter("material_opacity", 1);
}
```

我们在[pc.MeshInstance] [5]上使用`setParameter`方法来设置要使用的片段着色器的值。 这是引擎中目前未提供的功能(您无法在开发人员文件的连结中找到)。 这是因为它依赖于知道着色器中的统一变量的名称。 这些值是可能会更改的，并且此API可能会在将来更改。 但这点其实非常有用，因为它让你在一个着色器中为一个网格物体实例覆盖一个值。 在这种情况下，它是重要的，因为所有的发光使用相同的材料，但我们将需要每个发光的实例的不透明度值不同。

这里是完整的列表：

```javascript
var Halo = pc.createScript('halo');

Halo.attributes.add('camera', {type: 'entity'});
Halo.attributes.add('unidirectional', {type: 'boolean', default: false});

Halo.tmp = new pc.Vec3();

// initialize code called once per entity
Halo.prototype.initialize = function() {
    // Get the Entity with the plane model on it
    this.plane = this.entity.children[0];

    // Get the parent entity which is used for direction
    this.parent = this.entity.parent;
};

// update code called every frame
Halo.prototype.update = function(dt) {
    var tmp = Halo.tmp;

    // Store the vector the parent is facing (note forwards is negative z)
    tmp.copy(this.parent.forward).scale(-1);

    var meshes = this.plane.render.meshInstances;

    if (this.camera) {

        // Set the glow to always face the camera
        this.entity.lookAt(this.camera.getPosition());

        // If enabled, unidirectional means the glow fades off as it turns away from the camera
        if (this.unidirectional) {
            // Get the dot product of the parent direction and the camera direction
            var dot = -1 * tmp.dot(this.camera.forward);
            // If the dot product is less that 0 the glow is facing away from the camera
            if (dot < 0) {
                dot = 0;
            }

            // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera
            meshes[0].setParameter("material_opacity", dot);
        } else {
            // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453
            meshes[0].setParameter("material_opacity", 1);
        }
    }
};
```

这就是全部。 一个简单但漂亮的效果已经被添加到你的场景了。 有关更多信息，请参阅[工程项目] [4]。

[1]: /images/tutorials/intermediate/light-halos/blob.jpg
[2]: /images/tutorials/intermediate/light-halos/material.jpg
[3]: /images/tutorials/intermediate/light-halos/entity-setup.jpg
[4]: https://playcanvas.com/project/406040
[5]: http://developer.playcanvas.com/en/api/pc.MeshInstance.html

