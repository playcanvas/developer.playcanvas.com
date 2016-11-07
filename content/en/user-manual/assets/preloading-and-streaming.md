---
title: Preloading and Streaming
template: usermanual-page.tmpl.html
---

On the web it's critical to get users into your application as soon as possible after they load the page. Presenting a loading bar and asking people to wait will lead to visitors leaving the page before your application has even got started. The PlayCanvas asset system implements a number of features to help you streamline the loading process and get your application running as fast as possible.

## Preload

![Asset Properties][1]

Every asset in your project has a property called `preload`. By default this is set to true. If an asset is marked as preload it will be downloaded and created before the initialize phase of your application begins.

You should use preloading to make sure all the assets you need at the start of your application are present. This will prevent any assets from 'popping' in after the application begins.

## Streaming

![Streaming][2]

If an Entity in your scene and references an asset, then a loading request will be initiated when the Entity is enabled. If the Entity is enabled in the scene, then this request is made as soon as the application starts.

All components will gracefully handle dynamically loading assets and will start operating as normal, once the asset is loaded. When streaming assets in dynamically like this, you will often see "popup". As a model will appear as soon as it is loaded, even if it doesn't have materials or textures yet.

## Asset Tags

In many cases, you don't wish assets to "popup" as they load. It's preferable to load a set of assets and then display them. To do this, you can use Asset Tags to create groups of assets. Then you can load all assets with a particular tag before using them.

Here is some example javascript which shows you how you might load a set of assets using a tag.

```javascript
var assets = this.app.assets.findByTag("level-1");
var count = 0;

for (var i = 0; i < assets.length; i++) {
    assets[i].once("load", function () {
        count++;
        if (count === assets.length) {
            // asset loading complete
        }
    });
    this.app.assets.load(assets[i]);
}
```

[1]: /images/user-manual/assets/preloading-and-streaming/asset-properties.jpg
[2]: /images/user-manual/assets/preloading-and-streaming/streaming.gif
