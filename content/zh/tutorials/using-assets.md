---
title: 使用资源注册表
template: tutorial-page.tmpl.html
tags: loading, assets
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg
---

<iframe src="https://playcanv.as/p/QwDM4qaF/"></iframe>

*Click to focus, hold and release SPACEBAR to switch between two A and B models. Press 'L' to load the C model. Hold 'C' to display the C model.*

对于简单的游戏和产品而言，您将在编辑器中设置所有的资源，它们需要在应用程序启动之前预先加载，您的应用程序才能工作。

对于更高级的产品，您可能希望通过代码访问您的资源，更改引用，修改属性以及流式传输数据，以便应用程序可以更快地加载。 以及仅在需要时加载资源。 要做到这一点，你可以使用[`资源注册表`][1]。

In this tutorial, we'll build a small scene which lets you swap the model on a render component by pressing a key. We'll also dynamically load a third model that is not preloaded. You can see the completed [project here][3].

## 设置

*该项目设置如下*

* Three model assets are uploaded: **A** is a model of the letter A, **B** is a model of the letter B and **C** is a model of the letter C.
* The **C** render asset is set up *not* to be preloaded.
* A render Entity is added to the scene and the model **A** is assigned to the render component.
* A script component is added to the render Entity and a new script is created called `update_asset.js`.

下载[A模型][5]，[B模型][6]和[C模型][7]并将它们上传到你的项目。 确保文件名为A.dae，B.dae和C.dae，因为这将影响资源名称。

## 资源注册表

[`pc.AssetRegistry`][1]在所有脚本中都被用作为`this.app.assets`。 注册表将填充添加到项目中的所有运行时资产的详细信息，无论它们是否已加载。 使用资产注册表在应用程序中查找到你所需的资源。

在这种情况下，我们声明了三个脚本属性“a”，“b”和“c”，它们在编辑器中被分配给对应资源。 然后它们会自动在我们的脚本中变为可用的。

## 使用预加载的资源

```javascript
    if (app.keyboard.isPressed(pc.KEY_SPACE)) {
        if (this.entity.render.asset !== this.b.id) {
            // update the render component to the new Render Asset
            console.log('Changed to B Render Asset');
            this.entity.render.asset = this.b;
        }
    } else {
        // ...
            if (this.entity.render.asset !== this.a.id) {
                // restore original Render Asset
                console.log('Changed to A Render Asset');
                this.entity.render.asset = this.a;
            }
        // ...
    }
```

The **A** and **B** assets are marked as **preload** in this project. This means that during the loading screen, these assets are downloaded. They will be ready to use as soon as your application starts. When an asset is loaded, the loaded resource is available as `asset.resource` and we can assign the asset to the [render component asset property][8]. If `asset.loaded` is `false`, then the asset isn't loaded.

<img src='/images/tutorials/using_assets/using-assets-a-preload.png' width=360px>

So, the `A` and `B` models are preloaded, which means we know they will be ready when we are running the application. This code checks if the space bar is pressed, and if so we change the render asset on the render component to be the resource property of the asset. In this case `asset.resource` will be a `pc.Render` object. For each different asset type (audio, texture, etc), the `asset.resource` property will be the relevant type.

## 运行过程中加载资源

```javascript
if (app.keyboard.isPressed(pc.KEY_C)) {
    if (this.c.loaded) {
        if (this.entity.render.asset !== this.c.id) {
            console.log('Changed to C Render Asset');
            this.entity.render.asset = this.c;
        }
    }
} else {
    if (this.entity.render.asset !== this.a.id) {
        // restore original Render Asset
        console.log('Changed to A Render Asset');
        this.entity.render.asset = this.a;
    }
}
```

The **C** render asset is not marked as *preload*, so in the code above, you can see that we check if the resource is loaded before we use it. if `asset.loaded` is false, then the resource isn't loaded and we can't change the render component. If the **C** render asset is loaded then `this.c.resource` will be the `pc.Render` property and `asset.loaded` will be true, we'll be then able to assign it.

<img src='/images/tutorials/using_assets/using-assets-c-preload.png' width=360px>

```javascript
if (this.app.keyboard.isPressed(pc.KEY_L)) {
    this.app.assets.load(this.c);
}
```

当你按下`L`键时，我们加载** C **模型。 为此，我们将卸载的资源传递给`this.app.assets.load()`。 如果资源已加载，此方法将不会执行任何操作。

Once the asset is loaded `asset.resource` will be a `pc.Render` instance and we can assign the asset to the render component by pressing the `C` key.

## 完整的代码

```javascript
var UpdateAsset = pc.createScript('updateAsset');

UpdateAsset.attributes.add('a', {
    type: 'asset',
    assetType: 'render'
});

UpdateAsset.attributes.add('b', {
    type: 'asset',
    assetType: 'render'
});

UpdateAsset.attributes.add('c', {
    type: 'asset',
    assetType: 'render'
});

// initialize code called once per entity
UpdateAsset.prototype.initialize = function() {
    this.app.keyboard.preventDefault = true;
};

// update code called every frame
UpdateAsset.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.isPressed(pc.KEY_SPACE)) {
        if (this.entity.render.asset !== this.b.id) {
            // update the render component to the new Render Asset
            console.log('Changed to B Render Asset');
            this.entity.render.asset = this.b;
        }
    } else {
        if (app.keyboard.isPressed(pc.KEY_C)) {
            if (this.c.loaded) {
                if (this.entity.render.asset !== this.c.id) {
                    console.log('Changed to C Render Asset');
                    this.entity.render.asset = this.c;
                }
            }
        } else {
            if (this.entity.render.asset !== this.a.id) {
                // restore original Render Asset
                console.log('Changed to A Render Asset');
                this.entity.render.asset = this.a;
            }
        }
    }

    if (app.keyboard.isPressed(pc.KEY_L)) {
        app.assets.load(this.c);
    }
};
```

## 资源注册表事件

我们在这个例子中没有展示的一件事是如何知道何时加载资产。 为此，我们使用`pc.AssetRegistry` 事件，如 `"load"` 事件。 以下是一些示例代码：

```javascript
// find the asset by name in the registry
var asset = this.app.assets.find("A");
// set up a one-off event listener for the load event
this.app.assets.once("load", function (asset) {
    // asset.resource is now ready
}, this);
```

 `"load"`事件的定义相当广泛。 它会为每个被加载的资产被触发，因此如果资源在其他地方加载，您将不不能得知这是您的资源。 相反，您可以使用 `"load:id"` 事件来简化你自己需要的事件。

```javascript
// find the asset in the registry
var asset = this.app.assets.find("A");
// set up a one-off event listener for the load event
this.app.assets.once("load:" + asset.id, function (asset) {
    // asset.resource is now ready
}, this);
```

上述事件只会针对该特定资源触发。 更有用。

最后，有一个特定的编码模式，经常发生。 所以经常，事实上，我们提供了一个方便的方法来为你做。

```javascript
var asset = this.app.assets.find("A");
if (!asset.loaded) {
    this.app.assets.once("load:" + asset.id, function (asset) {
        // do something with asset.resource
    });
    this.app.assets.load(asset);
} else {
    // do something with asset.resource
}
```

此代码在需要时加载资源，但它有些垄长。 所以，你可以使用 `asset.ready()` 方法来作替代。 此代码执行与上述相同的功能。

```javascript
var asset = this.app.assets.find("A");
asset.ready(function (asset) {
    // do something with asset.resource
});
this.app.assets.load(asset);
```

`asset.ready()` 方法将在资源加载后立即调用它的回调函数，如果它被使用时资源已经加载，则它会立即调用回调函数。如果资源已经加载，则 `app.assets.load()` 什么也不做。

[1]: /api/pc.AssetRegistry.html
[3]: https://playcanvas.com/project/406036
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /downloads/tutorials/C.dae
[8]: /api/pc.RenderComponent.html#asset

