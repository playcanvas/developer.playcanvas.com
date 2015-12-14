---
title: アセットレジストリの使用
template: tutorial-page.tmpl.html
---

<iframe src="http://playcanv.as/p/abEsrnCw"></iframe>

*クリックしてフォーカス。SpaceキーでAとBの2つのモデルを切り替えることができます。'L'でCモデルを読み込みます。'C'でCモデルを表示します。

簡単なゲームや製品の場合、Editor内のすべてのアセットを設定します。アプリケーションが起動する前にプリロードされ、アプリは正常に動作します。

より高度な製品の場合、コード内でアセットにアクセスし、参照を変更、プロパティを修正、データのストリーミングを行いアプリケーションをより迅速に読み込むこともできます。必要に応じてアセットを読み込みます。これを行うには[`AssetRegistry`][1]を使用します。

このチュートリアルでは、キーを押して、モデルコンポーネントのモデルを入れ替えることのできる小さなシーンを構築します。また、プリロードされていない3つ目のモデルを動的に読み込みます。完了したプロジェクトは[ここで][3]を見ることができます。

## 設定

*プロジェクトは次のように設定されます*

*3つのモデルアセットがアップロードされています：**A**はAという文字のモデル、**B**はBという文字のモデル、**C**はCという文字のモデルです。
* ** C**モデルアセットはプリロード*されない*ように設定されています。
*モデルエンティティはシーンに追加され、モデル**A**はモデルコンポーネントに割り当てられています。
*スクリプトコンポーネントはモデルエンティティに追加され、`update_asset.js`という新たなスクリプトが作成されます。

 [A model][5], [B model][6], [C model][7]をダウンロードしてプロジェクトにアップロードします。ファイルがA.dae, B.dae, C.daeと命名されていることを確認します。これらはアセット名に影響します。

## アセットレジストリを検索

まず、必要とするアセットの`pc.AssetRegistry`を検索する初期化メソッドを見てみましょう。

```
initialize: function () {
    // get assets from the asset registry
    this.a = app.assets.find("A");
    this.b = app.assets.find("B");
    this.c = app.assets.find("C");

    // スペース押下時のページスクロールを防ぐ
    app.keyboard.preventDefault = true;
}
```

[`pc.AssetRegistry`][8]は`app.assets``としてすべてのスクリプトで使用できます。レジストリには、それらが読み込まれているかどうかに関わらず、プロジェクトに追加されたすべてのランタイムアセットの詳細が入力されます。Asset Registryを使用してアプリケーションに必要なアセットを見つけてください。このケースでは、アセット名で検索します。

## プレロードされたアセットを使用

```
if (app.keyboard.isPressed(pc.KEY_SPACE)) {
    if (this.entity.model.model !== this.b.resource) {
        // 新しいモデルにモデルコンポーネントを更新
        this.entity.model.model = this.b.resource;
    }
} else {
    if (this.entity.model.model !== this.a.resource) {
        // 元のモデルを復活
        this.entity.model.model = this.a.resource;
    }
    //...
}
```

このプロジェクトでは、**A**と**B**のアセットは**プリロード**としてマークされています。読み込み画面中に、これらのアセットがダウンロードされることを意味します。アプリケーションの起動と同時に使用できるようになります。アセットが読み込まれると、読み込まれたリソースは`asset.resource`として利用可能です。`asset.resource`が` null`の場合、アセットは読み込まれません。

'A'と'B'モデルがプリロードされるので、アプリケーション実行時に利用可能になります。このコードは、スペースバーが押されていることを確認します。押されている場合、モデルコンポーネントのモデルをアセットのリソースプロパティになるよう変更します。この場合、`asset.resource`は` pc.Model`オブジェクトになります。`asset.resource`プロパティがそれぞれの異なるアセットタイプ(オーディオ、テクスチャ、など)の関連するタイプになります。

## 実行時にアセットを読み込む

```
if (app.keyboard.isPressed(pc.KEY_C)) {
    if (this.c.resource) {
        if (this.entity.model.model !== this.c.resource) {
            this.entity.model.model = this.c.resource;
        }
    }
} else {
    if (this.entity.model.model !== this.a.resource) {
        this.entity.model.model = this.a.resource;
    }
}
```

**Cは**モデルは、*プリロード*としてマークされていないので、上記のコードでは使用する前にリソースが読み込まれていることを確認します。`asset.resource`が空の場合、リソースは読み込まれていないので、モデルコンポーネントを変更することができません。 **C**モデルが読み込まれている場合、`this.c.resource`は`pc.Model`プロパティとなり、割り当てることができます。

```
if (app.keyboard.isPressed(pc.KEY_L)) {
    app.assets.load(this.c);
}
```

'L'キーを押すと**C**モデルを読み込みます。これを行うには、アンロードされたアセットを`app.assets.load()`に渡します。アセットが既に読み込まれている場合、このメソッドは何も行いません。

アセットが読み込まれると`asset.resource`は`pc.Model`のインスタンスになり、`C`キーを押してそれを割り当てることができます。

## 完全なスクリプト

```
pc.script.create('update_asset', function (app) {
    // 新しいUpdate_assetインスタンスを作成
    var Update_asset = function (entity) {
        this.entity = entity;
    };

    Update_asset.prototype = {
        initialize: function () {
            // アセットレジストリからアセットを取得
            this.a = app.assets.find("A");
            this.b = app.assets.find("B");
            this.c = app.assets.find("C");

            app.keyboard.preventDefault = true;
        },

        update: function (dt) {
            if (app.keyboard.isPressed(pc.KEY_SPACE)) {
                if (this.entity.model.model !== this.b.resource) {
                    // 新しいモデルにモデルコンポーネントを更新
                    this.entity.model.model = this.b.resource;
                }
            } else {
                if (this.entity.model.model !== this.a.resource) {
                    // 元のモデルをリストア
                    this.entity.model.model = this.a.resource;
                }

                if (app.keyboard.isPressed(pc.KEY_C)) {
                    if (this.c.resource) {
                        if (this.entity.model.model !== this.c.resource) {
                            this.entity.model.model = this.c.resource;
                        }
                    }
                } else {
                    if (this.entity.model.model !== this.a.resource) {
                        this.entity.model.model = this.a.resource;
                    }
                }


            }


            if (app.keyboard.isPressed(pc.KEY_L)) {
                app.assets.load(this.c);
            }
        }
    };

    return Update_asset;
});
```

## アセットレジストリのイベント

この例では示していないのは、アセットが読み込まれたことを知る方法です。これを行うには、"load"イベントのような`pc.AssetRegistry`イベントを使用します。サンプルコードです：

```
// レジストリでアセットを検索
var asset = app.assets.find("A");
// 読み込みイベントのために一回限りのイベントリスナを設定
app.assets.once("load", function (asset) {
    // asset.resourceの準備ができました
}, this);
```

`"load"`イベントは非常に幅広いです。読み込まれるすべてのアセットに発生するので、アセットが他の場所に読み込まれている場合、それがあなたのアセットか分かりません。代わりに、`"load:id"`イベントを使用して、イベントを絞り込むことができます。

```
// レジストリでアセットを探す
var asset = app.assets.find("A");
// 読み込みイベントに一度きりのイベントリスナーを設定
app.assets.once("load:" + asset.id, function (asset) {
    // asset.resourceの準備ができました
}, this);
```

上記のイベントは、その特定のアセットのためにのみ稼動します。とても便利です。

最後に、良く発生する一つの特定のコーディングパターンがあります。それを行うための便利な方法を提供しています。

```
var asset = app.assets.find("A");
if (!asset.resource) {
    app.assets.once("load:" + asset.id, function (asset) {
        // asset.resourceで何かをする
    });
    app.assets.load(asset);
} else {
    // asset.resourceで何かをする
}
```

このコードは必要とされるアセットを読み込みますが、少し長いので代わりに`asset.ready()`メソッドを使用することができます。このコードは、上記と同じ機能を実行します。

```
var asset = app.assets.find("A");
asset.ready(function (asset) {
    // asset.resourceで何かをする
});
app.assets.load(asset);
```

`asset.ready()`メソッドはアセットが読み込まれるとすぐにそのコールバックを呼びます。また、アセットがすでに読み込まれている場合、すぐにそれを呼び出します。アセットがすでに読み込まれている場合、 `app.assets.load()`は何もしません。

[1]: /engine/api/stable/symbols/pc.asset.AssetRegistry.html
[3]: https://playcanvas.com/project/349519/overview/tutorial-asset-registry
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /downloads/tutorials/C.dae
[8]: /engine/api/stable/symbols/pc.AssetRegistry.html

