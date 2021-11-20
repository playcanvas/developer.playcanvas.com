---
title: Wasmモジュール
template: usermanual-page.tmpl.html
position: 17
---

wasmモジュール（WebAssemblyモジュールとしても知られています）は、ウェブ用のコンパイル済み実行可能コードを含んでいます。

Wasmモジュールは、3つの部分から成ります：
* バイナリ実行可能ファイル
* JavaScriptグルーコードファイル
* オプションのフォールバックasm.js

これらのファイルをプロジェクトに追加するには、アセットパネルにファイルをドラッグアンドドロップするか、またはアセットパネルのコンテキストメニューで'Upload'を選択します。

## wasmモジュールのプロパティ

ファイルがプロジェクトに追加されたら、wasmモジュールを選択してインスペクターパネルにプロパティを表示します：
![Wasm Module Properties][1]

### 名前

名前は、グルーおよびフォールバックスクリプトで定義されたモジュール名と合致する必要があります。この名前はロード時にモジュールをインスタンス化するのに使用されます。

### Glue script

これは、Wasmコードの実行に必要なJavaScriptグルーコードです。

### Fallback script

これは、WebAssemblyがサポートされていない際に使用する、オプションのフォールバックasm.js スクリプトです。

[1]: /images/user-manual/assets/wasm-module.png

