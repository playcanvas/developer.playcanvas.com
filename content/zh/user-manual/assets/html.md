---
title: HTML
template: usermanual-page.tmpl.html
position: 10
---

HTML资源包含了HTML代码。代码可以是全HTML也可以是部分HTML。用户将可以在编辑器中或者上传一个带有.html后缀的文件来创建一个新的HTML资源。

编辑HTML资源，通过左键点击编辑器选择编辑。

加载的HTML资源实际上就是字符串。你可以任意使用这个字符串－以下是将HTML添加进入文件的常见方法

```javascript
// get asset from registry by id
var asset = app.assets.get(32);

// create element
var div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);

// when asset resource loads/changes,
// update html of element
asset.on('load', function() {
    div.innerHTML = asset.resource;
});

// make sure assets loads
app.assets.load(asset);
```

