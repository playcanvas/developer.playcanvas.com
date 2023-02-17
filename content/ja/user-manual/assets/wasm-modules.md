---
title: Wasm Module
layout: usermanual-page.hbs
position: 17
---

wasmモジュール（WebAssemblyモジュールとしても知られています）は、ウェブ用のコンパイル済み実行可能コードを含んでいます。

A Wasm module comprises three parts:
* the binary executable file
* the JavaScript glue code file
* an optional fallback asm.js

これらのファイルをプロジェクトに追加するには、アセットパネルにファイルをドラッグアンドドロップするか、またはアセットパネルのコンテキストメニューで'Upload'を選択します。

Please note that PlayCanvas Editor currently supports [Emscripten][2] compiled Wasm Modules only.

## Wasm Module Properties

ファイルがプロジェクトに追加されたら、wasmモジュールを選択してインスペクターパネルにプロパティを表示します：
![Wasm Module Properties][1]

### Name

名前は、グルーおよびフォールバックスクリプトで定義されたモジュール名と合致する必要があります。この名前はロード時にモジュールをインスタンス化するのに使用されます。

### Glue script

これは、Wasmコードの実行に必要なJavaScriptグルーコードです。

### Fallback script

これは、WebAssemblyがサポートされていない際に使用する、オプションのフォールバックasm.js スクリプトです。

[1]: /images/user-manual/assets/wasm-module.png
[2]: https://emscripten.org/