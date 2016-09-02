---
title: Loading Order
template: usermanual-page.tmpl.html
position: 6
---

Generally all scripts are loaded at the beginning of your application. The loading order is determined by a setting in your project which you can access from the main Editor menu or Scene Settings

![Loading Order][1]

The loading order panel shows all your scripts that marked as `preload` and the order that they are loaded and executed in.

![Loading Order List][2]

You can drag to move individual scripts around in order.

When scripts are first loaded, they are immediately executed, that means that the scripts are first executed in the order that they are loaded. However, the loading order of the script **does not** effect the execution of order of script methods within script component. E.g. the initialize methods of scripts on the same entity are called in the order that they are listed on the Entity not the loading order.

## Preloading

Like other assets in PlayCanvas by default a script asset is marked as `preload`. This means that it will be loaded before the application starts. If you disable preloading on a script it will not be loaded under normal circumstances. This way you can include a script in your project but prevent it from loading by unchecking `preload`. You can trigger a non-preloading script to load dynamically by using the regular asset API. e.g. `this.app.assets.load(asset);`  
It is possible to subscribe to dynamic changes to script registry:
```javascript
this.app.scripts.on('add', function(name, scriptType) {
    console.log('script', name, 'has been loaded');
});
```

## Concatenation

By default when you publish or export your application all preloaded scripts are concatenated into a single script file. This optimizes the loading by reducing the number of requests that are needed to load all your scripts.

[1]: /images/user-manual/scripting/script-loading-order.jpg
[2]: /images/user-manual/scripting/loading-order-list.jpg

