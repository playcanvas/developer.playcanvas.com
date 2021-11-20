---
title: Wasm Module
template: usermanual-page.tmpl.html
position: 17
---

Wasm Modules (also known was WebAssembly Modules) contain compiled executable code for the web.

A Wasm module comprises three parts:
* the binary executable file
* the JavaScript glue code file
* an optional fallback asm.js

These files can be added to the project either by dragging and dropping the files into the Assets Panel or by selecting 'Upload' from the Assets Panel context menu.

## Wasm Module Properties

Once the files have been added to the project, select the Wasm Module to display its properties in the Inspector Panel:
![Wasm Module Properties][1]

### Name

Name must match the module name defined in the glue and fallback script. This name is used to instantiate the module at load time.

### Glue script

This is the JavaScript glue code required to execute Wasm code.

### Fallback script

This is the optional fallback asm.js script to use when WebAssembly is not supported.

[1]: /images/user-manual/assets/wasm-module.png

