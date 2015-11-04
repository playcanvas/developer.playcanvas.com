---
title: CSS
template: usermanual-page.tmpl.html
position: 10
---

CSSアセットにはCSSコードが含まれます。新規のCSSアセットはEditorから作成することができます。また、.css拡張子を持つファイルをアップロードして作成することも可能です。

CSSアセットを編集するには、Editorでアセットを右クリックして、Editを選択します。

読み込まれたCSSアセットリソースは文字列です。文字列は自由に使用することができます。読み込まれたCSS文字列をドキュメントに追加するための一般的な方法は次の通りです：

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

