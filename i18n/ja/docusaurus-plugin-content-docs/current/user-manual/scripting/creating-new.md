---
title: 新しいスクリプトの作成
sidebar_position: 1
---

新しいスクリプトを作成するにはアセットパネルを使用してNew Scriptを選択します。当たらしスクリプトファイルに名前を入力するよう促されます。

![New Script](/img/user-manual/scripting/new-script.png)

パネルでスクリプトアセットをダブルクリックしてコードエディターで開く。

![Code Editor](/img/user-manual/scripting/code-editor-new-script.png)

## スクリプトコンポーネントにアタッチ (Attach)

スクリプトコンポーネントは他のコンポーネントと同じように作成します。スクリプトコンポーネントを作成したらアセットリストからスクリプトを選択します。

![Select Script](/img/user-manual/scripting/select-script.png)

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

[3]: https://api.playcanvas.com/classes/Engine.AssetRegistry.html#load
