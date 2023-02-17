---
title: プレロード及びストリーミング
layout: usermanual-page.hbs
position: 3
---

ウェブ上では、ページをロードした後にできる限り早くアプリケーションを起動することが重要です。ローディングバーを表示して、ユーザを待たせてしまうとアプリケーションが始まる前にユーザが離れてしまう可能性があります。PlayCanvasアセットシステムに実装されている機能を使用すれば、ロードプロセスを合理化し速くアプリケーションを起動することができます。

## Preload

![アセットプロパティ][1]

プロジェクト内のすべてのアセットには`preload`というプロパティがあります。デフォルトでは、これはtrueに設定されています。アセットがプリロードとしてマークされている場合は、アプリケーションの初期化フェーズが始まる前にダウンロードおよび作成されます。

プリロードを使用してアプリケーションの開始時に必要とする全てのアセットがあることを確認します。これは、アプリケーションが開始した後にアセットが入ってくることを防ぎます。

## Streaming

![ストリーミング][2]

シーンのエンティティがアセットを参照している場合、エンティティが有効になるとロード要求が開始されます。シーンでエンティティが有効になっている場合、この要求はアプリケーションが起動すると同時に作られます。

すべてのコンポーネントは動的なアセットのロードを処理して、アセットがロードされると、通常通り動作を開始します。このように動的にアセットをストリーミングする場合、多くの場合、「ポップアップ」が表示されます。素材やテクスチャが無くても、ロードされるとすぐにモデルが表示されます。

## When are assets loaded?

特定のアセットがいつ読み込まれるかを確認するには、これらのルールに従ってください。

* If `preload = true` the asset will be loaded before the application starts. Otherwise:
* If the asset is referenced by a component that is enabled on an entity that is enabled and in the scene hierarchy then it will be loaded. The asset is loaded at the time the entity or component is enabled or when the asset is assigned to the component. For entities that are enabled in the Editor, this will occur as soon as the application starts just after preloading has finished. A component is defined as enabled if it is enabled and all entities in the hierarchy above it are enabled.
* If the asset is referenced by another asset that is loaded then it will be loaded. e.g. If a model is loaded and references a material, the material will be loaded, if the material references a texture the texture will be loaded.

## Asset Tags

ロードされると同時にアセットを「ポップアップ」させたくない場合があります。アセットのセットをロードして、それらを表示させることが好ましいです。これを行うには、アセットタグを利用してアセットのグループを作成します。それらを使用する前に、特定のタグを持つすべてのアセットを読み込むことができます。

タグを利用してアセットのセットを読み込む方法を説明するjavascriptの例です。

```javascript
var assets = this.app.assets.findByTag("level-1");
var count = 0;

for (var i = 0; i < assets.length; i++) {
    assets[i].once("load", function () {
        count++;
        if (count === assets.length) {
            // asset loading complete
        }
    });
    this.app.assets.load(assets[i]);
}
```

[1]: /images/user-manual/assets/preloading-and-streaming/asset-properties.jpg
[2]: /images/user-manual/assets/preloading-and-streaming/streaming.gif
