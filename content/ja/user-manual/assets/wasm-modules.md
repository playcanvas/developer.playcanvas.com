---
title: Wasm Module
template: usermanual-page.tmpl.html
position: 17
---

wasmモジュール（WebAssemblyモジュールとしても知られています）は、ウェブ用のコンパイル済み実行可能コードを含んでいます。

A Wasm module comprises three parts:
* the binary executable file
* the JavaScript glue code file
* an optional fallback asm.js

これらのファイルをプロジェクトに追加するには、アセットパネルにファイルをドラッグアンドドロップするか、またはアセットパネルのコンテキストメニューで'Upload'を選択します。

## wasmモジュールのプロパティ

Once the files have been added to the project, select the Wasm Module to display its properties in the Inspector Panel:
![Wasm Module Properties][1]

### Name
Name must match the module name defined in the glue and fallback script. This name is used to instantiate the module at load time.

### Glue script
This is the JavaScript glue code required to execute Wasm code.

### Fallback script
This is the optional fallback asm.js script to use when WebAssembly is not supported.

[1]: /images/user-manual/assets/wasm-module.png

