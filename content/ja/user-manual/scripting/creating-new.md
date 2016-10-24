---
title: 新しいスクリプトの作成
template: usermanual-page.tmpl.html
position: 1
---

新しいスクリプトを作成するにはアセットパネルを使用してNew Scriptを選択します。当たらしスクリプトファイルに名前を入力するよう促されます。

![新規スクリプト][0]

パネルでスクリプトアセットをダブルクリックしてコードエディタで開く。

![コードエディタ][1]

## スクリプトコンポーネントに添付

スクリプトコンポーネントは他のコンポーネントと同じように作成します。スクリプトコンポーネントを作成したらアセットリストからスクリプトを選択します。

![スクリプトを選択][2]

スクリプトは名前で表示され、コンポーネントに追加するためにスクリプトを選択するとスクリプトコンテンツはパースされ、宣言された属性は全てインターフェイスで露出されます。

## 実行時にスクリプトコンポーネントを追加

スクリプトコンポーネントから、アプリケーションが実行している間に動的にスクリプトを追加することができます。

```javascript
var entity = new pc.Entity();
entity.addComponent("script");
entity.script.create("rotate", {
    attributes: {
        speed: 20
    }
});
```

この時点で既にrotateスクリプトが読み込まれているはずです。Asset Registryの[load()][3]メソッドを使用してスクリプトを読み込むことができます。

コンポーネントからスクリプトを取り除くには`destroy`メソッドを使用します。

```javascript
entity.script.destroy("rotate");
```

[0]: /images/user-manual/scripting/new-script.jpg
[1]: /images/user-manual/scripting/code-editor.jpg
[2]: /images/user-manual/scripting/select-script.jpg
[3]: /api/pc.AssetRegistry.html#load

