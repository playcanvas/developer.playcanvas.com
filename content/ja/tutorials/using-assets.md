---
title: アセットレジストリの使用
template: tutorial-page.tmpl.html
tags: loading, assets
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg
---

<iframe src="https://playcanv.as/p/QwDM4qaF/"></iframe>

*Click to focus, hold and release SPACEBAR to switch between two A and B models. Press 'L' to load the C model. Hold 'C' to display the C model.*

簡単なゲームや製品の場合、Editor内のすべてのアセットを設定します。アプリケーションが起動する前にプリロードされ、アプリは正常に動作します。

より高度な製品の場合、コード内でアセットにアクセスし、参照を変更、プロパティを修正、データのストリーミングを行いアプリケーションをより迅速に読み込むこともできます。必要に応じてアセットを読み込みます。これを行うには[`AssetRegistry`][1]を使用します。

In this tutorial, we'll build a small scene which lets you swap the model on a render component by pressing a key. We'll also dynamically load a third model that is not preloaded. You can see the completed [project here][3].

## 設定

*プロジェクトは次のように設定されます*

* Three model assets are uploaded: **A** is a model of the letter A, **B** is a model of the letter B and **C** is a model of the letter C.
* The **C** render asset is set up *not* to be preloaded.
* A render Entity is added to the scene and the model **A** is assigned to the render component.
* A script component is added to the render Entity and a new script is created called `update_asset.js`.

 [A model][5], [B model][6], [C model][7]をダウンロードしてプロジェクトにアップロードします。ファイルがA.dae, B.dae, C.daeと命名されていることを確認します。これらはアセット名に影響します。

## AssetRegistry

 [`pc.AssetRegistry`][1] は`this.app.assets`.としてすべてのスクリプトで使用できます。レジストリには、それらが読み込まれているかどうかに関わらず、プロジェクトに追加されたすべてのランタイムアセットの詳細が入力されます。Asset Registryを使用してアプリケーションに必要なアセットを見つけてください。

このケースでは3つのスクリプトを、 `a`、`b`、`c`として定義してEditorでアセットに割り当てます。その後、スクリプトで自動的に使用可能になります。

## プレロードされたアセットを使用

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

## 実行時にアセットを読み込む

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

`L`キーを押すと、** C**モデルを読み込みます。これを行うには`this.app.assets.load()`にアンロードされたアセットを渡します。アセットがすでに読み込まれている場合、このメソッドは何も行いません。

Once the asset is loaded `asset.resource` will be a `pc.Render` instance and we can assign the asset to the render component by pressing the `C` key.

## 完全なスクリプト

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

## アセットレジストリのイベント

この例では示していないのは、アセットが読み込まれたことを知る方法です。これを行うには、"load"イベントのような`pc.AssetRegistry`イベントを使用します。サンプルコードです：

```javascript
// find the asset by name in the registry
var asset = this.app.assets.find("A");
// set up a one-off event listener for the load event
this.app.assets.once("load", function (asset) {
    // asset.resource is now ready
}, this);
```

`"load"`イベントは非常に幅広いです。読み込まれるすべてのアセットに発生するので、アセットが他の場所に読み込まれている場合、それがあなたのアセットか分かりません。代わりに、`"load:id"`イベントを使用して、イベントを絞り込むことができます。

```javascript
// find the asset in the registry
var asset = this.app.assets.find("A");
// set up a one-off event listener for the load event
this.app.assets.once("load:" + asset.id, function (asset) {
    // asset.resource is now ready
}, this);
```

上記のイベントは、その特定のアセットのためにのみ稼動します。とても便利です。

最後に、良く発生する一つの特定のコーディングパターンがあります。それを行うための便利な方法を提供しています。

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

このコードは必要とされるアセットを読み込みますが、少し長いので代わりに`asset.ready()`メソッドを使用することができます。このコードは、上記と同じ機能を実行します。

```javascript
var asset = this.app.assets.find("A");
asset.ready(function (asset) {
    // do something with asset.resource
});
this.app.assets.load(asset);
```

`asset.ready()`メソッドはアセットが読み込まれるとすぐにそのコールバックを呼びます。また、アセットがすでに読み込まれている場合、すぐにそれを呼び出します。アセットがすでに読み込まれている場合、 `app.assets.load()`は何もしません。

[1]: /api/pc.AssetRegistry.html
[3]: https://playcanvas.com/project/406036
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /downloads/tutorials/C.dae
[8]: /api/pc.RenderComponent.html#asset

