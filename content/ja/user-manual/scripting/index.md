---
title: Scripting
template: usermanual-page.tmpl.html
position: 11
---

ゲームをインタラクティブにするにはスクリプトを使います。スクリプトは**JavaScript**で書きます。これはあらゆるウェブページで使用されているプログラミング言語です。

You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which are often specific to your application or re-usable chunks that provide useful behaviors.

基本的に、エンジンコードはアプリケーションに含まれる単一のJavaScriptファイルなので、気にかける必要はありません。エンジンの一部を書き換える場合、スクリプティングに関するこの導入は必要ないです。

ここでは簡単なスクリプトの例です。これは、「rotate」と呼ばれ、取り付けられているエンティティを毎秒10度回転させます。

```javascript
var Rotate = pc.createScript("rotate");

Rotate.prototype.update = function (dt) {
    this.entity.rotate(0, 10*dt, 0);
};
```

スクリプトは作成されたときに指定された名前によって定義され、Editorまたはコードでエンティティにスクリプトコンポーネントを追加することで[スクリプトコンポーネント][1]に添付されます。

## 用語

いくつかの用語を定義しましょう。

* ***Script*** A script is a Javascript file that contains one or more definitions of Script Objects.
* ***Script Component*** The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object.
* ***ScriptType*** A ScriptType is a JavaScript object created using the `pc.createScript` function. It is essentially a new class which will be instantiated when it is added to an Entity.
* ***Script Instance*** A script instance is an instance of a ScriptType. One script instance is created for every Entity that has a ScriptType attached to a script component.

[1]: /user-manual/packs/components/script/

