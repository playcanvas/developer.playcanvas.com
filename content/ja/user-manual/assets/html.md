---
title: HTML
template: usermanual-page.tmpl.html
position: 9
---

HTMLアセットにはHTMLコードが含まれます。コードは、完成されたHTMLページ、または一部のHTMLとすることができます。新規のHTMLアセットはEditorから作成することができます。また、.css拡張子を持つファイルをアップロードして作成することも可能です。

HTMLアセットを編集するには、Editorでアセットを右クリックして、Editを選択します。

読み込まれたHTMLアセットリソースは文字列です。文字列は自由に使用することができます。読み込まれたHTML文字列をドキュメントに追加するための一般的な方法は次の通りです：

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

