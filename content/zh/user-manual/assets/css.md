---
title: CSS
template: usermanual-page.tmpl.html
position: 11
---

CSS资源储存了CSS代码。你可以通过编译器直接创建一个新的CSS资源，或是通过上传一个带有.css后缀的css格式文件获取新的CSS资源。

编辑CSS资源的方式是，右击资源库中的CSS资源并选择编译器打开。

已被加载的CSS资源文件只是一段字符串。你可以任意编辑这段字符串。常用的引用已有CSS字符串到其他文档中的方法如下：

```javascript
// get asset from registry by id
var asset = app.assets.get(32);

// create element
var style = pc.createStyle(asset.resource || '');
document.head.appendChild(style);

// when asset resource loads/changes,
// update html of element
asset.on('load', function() {
    style.innerHTML = asset.resource;
});

// make sure assets loads
app.assets.load(asset);
```

