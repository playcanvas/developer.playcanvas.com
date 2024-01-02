---
title: CSS
layout: usermanual-page.hbs
position: 6
---

CSSアセットはCSSコードを含みます。エディタで新しいCSSアセットを作成するか、.css拡張子を持つファイルをアップロードして作成することができます。

CSSアセットを編集するには、エディターで右クリックしてEditを選択します。

読み込まれたCSSアセットリソースは、文字列として存在します。この文字列を使いたいように利用できます。ロードされたCSS文字列をドキュメントに追加する一般的な方法は以下の通りです。

```javascript
// IDでレジストリからアセットを取得
var asset = app.assets.get(32);

// 要素を作成
var style = document.createElement('style');
style.type = "text/css";
style.textContent = asset.resource || '';
document.head.appendChild(style);

// アセットのリソースがロード/変更されたときにスタイルを更新
asset.on('load', function() {
    style.innerHTML = asset.resource;
});

// アセットがロードされるようにする
app.assets.load(asset);
```
