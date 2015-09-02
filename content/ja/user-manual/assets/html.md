---
title: HTML
template: page.tmpl.html
position: 9
---

An HTML asset contains HTML code. The code can either be a full HTML page or just partial HTML. You can create a new HTML asset in the Editor or by uploading a file with an .html extension.

To edit an HTML asset, right click on it in the Editor and select Edit.

The loaded HTML asset is just a string. You can use that string as you like - a common way to add HTML to the document is the following

```
var asset = app.assets.find('my_html_asset');
asset.ready(function (asset) {
    var div = document.createElement('div');
    div.innerHTML = asset.resource;
    document.body.appendChild(div);
});
asset.load();
```

