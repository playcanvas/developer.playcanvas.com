---
title: CSS
template: page.tmpl.html
position: 10
---

A CSS asset contains CSS code. You can create a new CSS asset in the Editor or by uploading a file with a .css extension.

To edit a CSS asset, simply select it in the Editor and click Edit in the Inspector.

The loaded CSS asset resource is just a string. You can use the string as you like. A common way to add the loaded CSS string to the document is the following:

```
var asset = app.assets.find('my_css_asset');
asset.ready(function (asset) {
    var style = pc.createStyle(asset.resource);
    document.head.appendChild(style);
});
asset.load();
```

