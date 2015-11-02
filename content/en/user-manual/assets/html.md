---
title: HTML
template: usermanual-page.tmpl.html
position: 9
---

An HTML asset contains HTML code. The code can either be a full HTML page or just partial HTML. You can create a new HTML asset in the Editor or by uploading a file with an .html extension.

To edit an HTML asset, right click on it in the Editor and select Edit.

The loaded HTML asset is just a string. You can use that string as you like - a common way to add HTML to the document is the following

```
// get asset from registry by id
var asset = app.assets.get(32);
​
// create element
var div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);
​
// when asset resource loads/changes,
// update html of element
asset.on('load', function() {
    div.innerHTML = asset.resource;
});
​
// make sure assets loads
app.assets.load(asset);
```
