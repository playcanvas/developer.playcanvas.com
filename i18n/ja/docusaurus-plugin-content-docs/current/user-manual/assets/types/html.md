---
title: HTML
---

HTMLアセットにはHTMLコードが含まれます。コードは完全なHTMLページまたは部分的なHTMLである場合があります。新しいHTMLアセットをエディタで作成するか、拡張子が.htmlのファイルをアップロードして作成できます。

HTMLアセットを編集するには、エディタで右クリックしてEditを選択します。

読み込まれたHTMLアセットは単なる文字列です。その文字列を好きなように使用できます。ドキュメントにHTMLを追加する一般的な方法は以下のとおりです。

```javascript
// IDでレジストリからアセットを取得
var asset = app.assets.get(32);

// 要素を作成する
var div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);

// アセットリソースのロード/変更時に、要素のHTMLを更新する
asset.on('load', function() {
    div.innerHTML = asset.resource;
});

// アセットがロードされるようにする
app.assets.load(asset);
```
