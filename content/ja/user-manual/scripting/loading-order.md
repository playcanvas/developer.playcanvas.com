---
title: Loading Order
template: usermanual-page.tmpl.html
position: 6
---

基本的に、すべてのスクリプトは、アプリケーションの開始時に読み込まれます。読み込みの順番は、メインのEditorメニューやScene Settingsシからアクセスすることができる、プロジェクト内の設定によって決定されます。

![読み込みの順番][1]

読み込み順のパネルには`preload` としてマークされる全てのスクリプトと、それらが実行される読み込みの順番が表示されます。

![読み込み順のリスト][2]

個別のスクリプトの順番をドラッグして移動することができます。

スクリプトが最初に読み込まれると、それらはすぐに実行され、スクリプトは最初にそれらが読み込まれた順番で実行されることを意味します。しかし、スクリプトの読み込み順は、スクリプトコンポーネント内でのスクリプトメソッドの順番実行には影響しません。 例：同じエンティティ上のスクリプトの初期化方法は、読み込み順ではなく、それらがエンティティでリストされている順序で呼び出されます。

## プレロード

Like other assets in PlayCanvas by default a script asset is marked as `preload`. This means that it will be loaded before the application starts. If you disable preloading on a script it will not be loaded under normal circumstances. This way you can include a script in your project but prevent it from loading by unchecking `preload`. You can trigger a non-preloading script to load dynamically by using the regular asset API. e.g. `this.app.assets.load(asset);`  
It is possible to subscribe to dynamic changes to script registry:
```javascript
this.app.scripts.on('add', function(name, scriptType) {
    console.log('script', name, 'has been loaded');
});
```

## 連結

デフォルトで、アプリケーションを公開したり、エクスポートすると、すべてのプリロードされたスクリプトは、ひとつのスクリプトファイルに連結されます。これは、すべてのスクリプトを読み込むために必要とされるリクエストの数を減らすことで読み込みを最適化します。

[1]: /images/user-manual/scripting/script-loading-order.jpg
[2]: /images/user-manual/scripting/loading-order-list.jpg

