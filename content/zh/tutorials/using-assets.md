---
title: 使用资源注册表
template: tutorial-page.tmpl.html
tags: loading, assets
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg
---

<iframe src="https://playcanv.as/p/QwDM4qaF/"></iframe>

*单击以进行对焦，按空格键在两个A和B型号之间切换。 按'L'加载C模型。 按'C'显示C模型。*

对于简单的游戏和产品而言，您将在编辑器中设置所有的资源，它们需要在应用程序启动之前预先加载，您的应用程序才能工作。

对于更高级的产品，您可能希望通过代码访问您的资源，更改引用，修改属性以及流式传输数据，以便应用程序可以更快地加载。 以及仅在需要时加载资源。 要做到这一点，你可以使用[`资源注册表`] [1]。

在本教程中，我们将构建一个小型场景，您可以通过按键来交换模型组件上的模型。 我们还将动态加载未预加载的第三个模型。 你可以在这里看到[已完成的项目] [3]。

## 设置

*该项目设置如下*

*上传了三个模型资源：**A**是字母A的模型，**B**是字母B的模型，**C**是字母C的模型。
* **C**模型资产设置*不*预加载
*将模型实体添加到场景中，并将模型**A**分配给模型组件
*脚本组件被添加到模型实体，并创建一个名为`update_asset.js`的新脚本。

下载[A模型] [5]，[B模型] [6]和[C模型] [7]并将它们上传到你的项目。 确保文件名为A.dae，B.dae和C.dae，因为这将影响资源名称。

## 资源注册表

[`pc.AssetRegistry`] [1]在所有脚本中都被用作为`this.app.assets`。 注册表将填充添加到项目中的所有运行时资产的详细信息，无论它们是否已加载。 使用资产注册表在应用程序中查找到你所需的资源。

在这种情况下，我们声明了三个脚本属性“a”，“b”和“c”，它们在编辑器中被分配给对应资源。 然后它们会自动在我们的脚本中变为可用的。

## 使用预加载的资源

```javascript
if (app.keyboard.isPressed(pc.KEY_SPACE)) {
    if (this.entity.model.model !== this.b.resource) {
        // update the model component to the new model
        this.entity.model.model = this.b.resource;
    }
} else {
    if (this.entity.model.model !== this.a.resource) {
        // restore original model
        this.entity.model.model = this.a.resource;
    }
    //...
}
```

在此项目中，**A**和**B**资源被标记为** preload **。 这意味着在加载屏幕期间，这些资源被下载。 一旦您的应用程序启动，他们就可以使用。 加载资源时，加载的资源可用为`asset.resource`。 如果`asset.resource`是`null`，那么不会加载资源。

因此， `A`和`B`模型是预加载的，这意味着我们知道当我们运行应用程序时，它们将准备就绪。 此代码检查是否按下空格键，如果是，我们将模型组件上的模型更改为资源的属性。 在这种情况下，`asset.resource` 将是一个`pc.Model`对象。 对于每种不同的资源类型(音频，纹理等)，`asset.resource` 属性也会表明相关类型。

## 运行过程中加载资源

```javascript
if (this.app.keyboard.isPressed(pc.KEY_C)) {
    if (this.c.resource) {
        if (this.entity.model.model !== this.c.resource) {
            this.entity.model.model = this.c.resource;
        }
    }
} else {
    if (this.entity.model.model !== this.a.resource) {
        this.entity.model.model = this.a.resource;
    }
}
```

**C**模型未标记为* preload *，因此在上面的代码中，您可以看到我们在使用资源之前检查资源是否已加载。 如果`asset.resource`为空，那么资源不会被加载，我们不能改变模型组件。 如果加载了**C**模型，那么`this.c.resource`将是`pc.Model`的类型，我们可以赋值它。

```javascript
if (this.app.keyboard.isPressed(pc.KEY_L)) {
    this.app.assets.load(this.c);
}
```

当你按下`L`键时，我们加载**C**模型。 为此，我们将卸载的资源传递给`this.app.assets.load()`。 如果资源已加载，此方法将不会执行任何操作。

一旦资源被加载，asset.resource将是一个`pc.Model`实例，我们可以通过按下`C`键来对其进行赋值。

## 完整的代码

```javascript
var UpdateAsset = pc.createScript('updateAsset');

UpdateAsset.attributes.add('a', {
    type: 'asset',
    assetType: 'model'
});

UpdateAsset.attributes.add('b', {
    type: 'asset',
    assetType: 'model'
});

UpdateAsset.attributes.add('c', {
    type: 'asset',
    assetType: 'model'
});

// initialize code called once per entity
UpdateAsset.prototype.initialize = function() {
    this.app.keyboard.preventDefault = true;
};

// update code called every frame
UpdateAsset.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.isPressed(pc.KEY_SPACE)) {
        if (this.entity.model.model !== this.b.resource) {
            // update the model component to the new model
            this.entity.model.model = this.b.resource;
        }
    } else {
        if (this.entity.model.model !== this.a.resource) {
            // restore original model
            this.entity.model.model = this.a.resource;
        }

        if (app.keyboard.isPressed(pc.KEY_C)) {
            if (this.c.resource) {
                if (this.entity.model.model !== this.c.resource) {
                    this.entity.model.model = this.c.resource;
                }
            }
        } else {
            if (this.entity.model.model !== this.a.resource) {
                this.entity.model.model = this.a.resource;
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
// find the asset in the registry
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
if (!asset.resource) {
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

[1]: /en/api/pc.AssetRegistry.html
[3]: https://playcanvas.com/project/406036
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /downloads/tutorials/C.dae

