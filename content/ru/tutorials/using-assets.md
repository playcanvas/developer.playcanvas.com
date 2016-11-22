---
title: Using the Asset Registry
template: tutorial-page.tmpl.html
tags: loading, assets
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg
---

<iframe src="https://playcanv.as/p/QwDM4qaF/"></iframe>

*Click to focus, press SPACEBAR to switch between two A and B models. Press 'L' to load the C model. Press 'C' to display the C model.*

For simple games and products you will set up all your assets in the Editor, they will be preloaded before you application starts, and your app will just work.

For more advanced products you may wish to access your assets in code, change references, modify properties and also stream data in so that your application can load more quickly. Only loading the assets as they are needed. To do this you'll use the [`AssetRegistry`][1].

In this tutorial, we'll build a small scene which lets you swap the model on a model component by pressing a key. We'll also dynamically load a third model that is not preloaded. You can see the completed [project here][3].

## Setup

*The project is set up as follows*

* Three model assets are uploaded: **A** is a model of the letter A, **B** is a model of the letter B and **C** is a model of the letter C.
* The **C** model asset is set up *not* to be preloaded.
* A model Entity is added to the scene and the model **A** is assigned to the model component.
* A script component is added to the model Entity and a new script is created called `update_asset.js`.

Download the [A model][5], [B model][6] and [C model][7] and upload them to your project. Ensure that the files are named A.dae, B.dae and C.dae as this will influence the asset names.

## The AssetRegistry

The [`pc.AssetRegistry`][1] is available in all scripts as `this.app.assets`. The registry is populated with the details of all the runtime assets added to your project whether they are loaded or not. Use the Asset Registry to find the assets you need in your application.

In this case we've declared three script attributes `a`, `b` and `c` which are assigned to assets in the Editor. Then they are automatically available in our script.

## Using preloaded assets

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

The **A** and **B** assets are marked as **preload** in this project. This means that during the loading screen, these assets are downloaded. They will be ready to use as soon as your application starts. When an asset is loaded, the loaded resource is available as `asset.resource`. If `asset.resource` is `null`, then the asset isn't loaded.

So, the `A` and `B` models are preloaded, which means we know they will be ready when we are running the application. This code checks if the space bar is pressed, and if so we change the model on the model component to be the resource property of the asset. In this case `asset.resource` will be a `pc.Model` object. For each different asset type (audio, texture, etc), the `asset.resource` property will be the relevant type.

## Loading assets at runtime

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

The **C** model is not marked as *preload*, so in the code above, you can see that we check if the resource is loaded before we use it. if `asset.resource` is empty, then the resource isn't loaded and we can't change the model component. If the **C** model is loaded then `this.c.resource` will be the `pc.Model` property and we'll be able to assign it.

```javascript
if (this.app.keyboard.isPressed(pc.KEY_L)) {
    this.app.assets.load(this.c);
}
```

When you press the `L` key we load the **C** model. To do this we pass the unloaded asset into `this.app.assets.load()`. If the asset is already loaded, this method will do nothing.

Once the asset is loaded `asset.resource` will be a `pc.Model` instance and we can assign it by pressing the `C` key.

## The complete script

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

## AssetRegistry events

One thing we don't demonstrate in this example is how to know when an asset is loaded. To do this we use `pc.AssetRegistry` events like the `"load"` event. Here's some sample code:

```javascript
// find the asset in the registry
var asset = this.app.assets.find("A");
// set up a one-off event listener for the load event
this.app.assets.once("load", function (asset) {
    // asset.resource is now ready
}, this);
```

The `"load"` event is quite broad. It is fired for every asset that is loaded, so if assets are loaded elsewhere, you won't know that this is your asset. Instead you can narrow your event down by using the `"load:id"` event.

```javascript
// find the asset in the registry
var asset = this.app.assets.find("A");
// set up a one-off event listener for the load event
this.app.assets.once("load:" + asset.id, function (asset) {
    // asset.resource is now ready
}, this);
```

The above event will only be fired for that specific asset. Much more useful.

Finally, there is one specific coding pattern, that often occurs. So often, in fact, that we've provided a convenient method to do it for you.

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

This code loads an asset when it is needed, but it's a bit long winded. So, instead, you can use the `asset.ready()` method. This code performs the same function as above

```javascript
var asset = this.app.assets.find("A");
asset.ready(function (asset) {
    // do something with asset.resource
});
this.app.assets.load(asset);
```

The `asset.ready()` method will call it's callback as soon as the asset is loaded, if the asset is already loaded, it will call it straight away. `app.assets.load()` does nothing if the asset is already loaded.

[1]: /en/api/pc.AssetRegistry.html
[3]: https://playcanvas.com/project/406036
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /downloads/tutorials/C.dae

