---
title: 移行ガイド
layout: usermanual-page.hbs
position: 11
---

## レガシースクリプトプロジェクトの移行方法

2016 年 7 月、PlayCanvas は[現在のスクリプトシステム][1](Scripts 2.0 としても知られています)を採用しました。レガシー スクリプトプロジェクトは通常通り動作し続けますが、レガシー スクリプトプロジェクトのフォークや新規作成はできなくなりました。

2020 年 12 月には、レガシースクリプトプロジェクトが近い将来 read-only になることが発表されました。エディタで開くと、プロジェクトダッシュボードには次のようなメッセージが表示されます。

![Dashboard Legacy Script][2]

エディタには、次のようなメッセージが表示されます。

![Editor Legacy Script][3]

レガシースクリプトプロジェクトで作業を続けたい場合は、現在の形式に移行することをお勧めします。残念なことに、これには自動化された移行プロセスはありません。代わりに、このガイドに従って手動で移行する必要があります。

### ステップ 1 - 新しいプロジェクトを作成する

最初に、アセットとコードを転送するための新しい空のプロジェクトを作成します。シーンルートエンティティの下にデフォルトで作成される 4 つのエンティティを削除してください。

### ステップ 2 - アセットを転送する

次に、すべてのアセットを新しいプロジェクトにコピーします(レガシープロジェクトのスクリプトは*実際にはアセットではないため*、スクリプトは除外します)。右クリックのコンテキストメニューを使用して、アセットを 1 つのプロジェクトから別のプロジェクトにコピーして貼り付けることができます。

![Copy Paste Assets][4]

ただし、レガシースクリプトプロジェクトはかなり古いため、ファイル拡張子なしでアセットがインポートされ、インスペクターパネルで表示できないメタデータがある可能性があるため、ソースアセットをダウンロードして新しいプロジェクトにアップロードすることを検討する必要があります。

### ステップ 3 - スクリプトを転送する

プロジェクトダッシュボードから、レガシースクリプトプロジェクトのスクリプトをダウンロードします。

![Download Scripts][5]

レガシープロジェクトが GitHub リポジトリに接続されている場合は、そこからスクリプトをダウンロードします。

次に、レガシースクリプトを新しいプロジェクトにアップロードできます。

### ステップ 4 - スクリプトを現在の形式に更新する

新しいプロジェクトに転送されたスクリプトは、現在の形式に更新する必要があります。以下は、レガシーフォーマットを示す例です。

```javascript
pc.script.attribute('speed', 'number', 10);

pc.script.create('myScript', function (app) {
    // Creates a new MyScript instance
    var MyScript = function (entity) {
        this.entity = entity;
    };

    MyScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return MyScript;
});
```

こちらが、現在のフォーマットに相当するスクリプトです。

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', { type: 'number', default: 10 });

// initialize code called once per entity
MyScript.prototype.initialize = function() {
    var app = this.app;       // application instance is available as this.app
    var entity = this.entity; // entity property already set up
};

// update code called every frame
MyScript.prototype.update = function(dt) {
};
```

注意すべき点:
* 現在のスクリプト形式にはコンストラクタはありません。コンストラクタコードは `initialize` 関数に移動する必要があります。
* スクリプトの `pc.Application` インスタンスである `app` は `this.app` になります。
* `this.entity` は自動的に現在のフォーマットのスクリプトで使用できるようになりました。

#### スクリプトイベントの移行

レガシースクリプトでは、`enable`、`disable`、`destroy` などのイベントを次のように処理します。

```javascript
onEnable: function () {

},

onDisable: function () {

},

onDestroy: function () {

},
```

これらを現在のスクリプト形式に移行するには、スクリプトの `initialize` 関数でイベントハンドラーを登録する必要があります。

```javascript
MyScript.prototype.initialize = function() {
    this.on("enable", function () {

    });

    this.on("disable", function () {

    });

    this.on("destroy", function () {

    });
};
```

### ステップ 5 - シーンの階層を転送する

次に、レガシープロジェクトのシーン階層を転送します。PlayCanvasエディターでは、2 つの Editor インスタンス間でコピー&ペーストをサポートしています。ただし、レガシーScriptコンポーネントが選択された場合、この操作は失敗します。そのため、最初にレガシースクリプトプロジェクトからすべてのScriptコンポーネントを削除する必要があります。これを行うには、レガシーScriptコンポーネントを持つすべてのエンティティを選択します。ブラウザの JavaScript コンソールで次の JavaScript を実行します。

```javascript
var entities = editor.call('entities:list').filter(function(entity) {
    return entity.has('components.script');
});
if (entities.length) {
    editor.call('selector:set', 'entity', entities);
} else {
    editor.call('selector:clear');
}
```

以下のように表示されるはずです。

![Select Script Entities][6]

次に、インスペクターで削除ボタンをクリックします。

![Delete Script Components][7]

これで、read-only プロジェクトから新しい宛先プロジェクトにゲームの階層をコピーして貼り付けることができます。

これで完了したら、CTRL+Z(Mac の場合は CMD+Z)を押して、前のレガシーScriptコンポーネントの削除を元に戻します。

Scriptコンポーネントがあるすべてのエンティティを再選択します。それに対応する新しいプロジェクトの各エンティティにScriptコンポーネントを作成し、それらのコンポーネントに対応するスクリプトを追加します。最後に、すべてのScriptコンポーネントのすべてのスクリプトのすべてのスクリプト属性を反復処理して、その値を新しいプロジェクトにコピーします。

これで、移行が完了しました。

[1]: https://blog.playcanvas.com/playcanvas-scripts-2-0/
[2]: /images/user-manual/scripting/migration-guide/dashboard-warning.png
[3]: /images/user-manual/scripting/migration-guide/editor-warning.png
[4]: /images/user-manual/scripting/migration-guide/copy-assets.png
[5]: /images/user-manual/scripting/migration-guide/download-scripts.png
[6]: /images/user-manual/scripting/migration-guide/select-script-entities.png
[7]: /images/user-manual/scripting/migration-guide/delete-script-components.png
