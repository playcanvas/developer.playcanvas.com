---
title: ユーザインターフェイス - リーダーボード
template: tutorial-page.tmpl.html
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501980/2D16F7-image-75.jpg
---

<iframe src="https://playcanv.as/p/nbMbtAGH/"></iframe>

*Elementコンポーネントを使用しているリーダーボード。[フルシーン][1]を参照してください。*

このチュートリアルでは、組み込まれた[Elements][2]を使用して簡単なリーダーボードを作成する方法を示します。リーダーボードには、JSONアセットからデータがプログラム的に埋め込まれています。

## 階層

階層内のUIは次のようになります：

![階層][4]

ご覧のように、タイトルとサブタイトルを表示する２つの要素と、リーダーボードデータの背景やパネルとして使用される２つの画像要素を持つ2D [Screen][3]があります。`あなたのスコア` の下に、リーダーボードのプレーヤーのポジションを表示し、`リーダーボード の下に残りを表示します。

`Entry Template`と呼ばれる無効なエンティティがあります。これは、テンプレートの各行に使用するテンプレートです。そのテンプレートをJSONアセットに存在する各リーダボードエントリに対して複製し、それぞれのパネルの下に各クローンを追加します。

## スクリーン設定

[スクリーン][3]は次のように設定されています：

![スクリーン][5]

2Dスクリーンなので、Screen Spaceをチェックしました。Reference Resolutionは、目標とする解像度です。この場合は1080 x 1920です。Scale ModeのBlendを選択して解像度の変更に適応し、Scale Blendを1に設定して、スクリーンが高さの変更に適応するようにします 。 

画面エンティティには、`leaderboard`スクリプトを含むスクリプトコンポーネントもあります。以下でご確認いただけます。

## パネル設定

各パネルには、その背景を示す画像要素があります。パネルの下に、エントリテンプレートのクローンをプログラム的に追加します。パネルはスクリーンの中央に固定されます。

## エントリテンプレートの設定

階層内の各リーダーボード行のテンプレートは次のようになります：

![エントリテンプレート][6]

リーダーボード上の位置、プレイヤーの名前、プレーヤーのスコア、'PTS'というラベルを表示するための４つの子テキスト要素があります。

`Entry Template`自体がグループ要素です：

![エントリテンプレート属性][7]

グループ要素には分割された水平アンカーがあります。

![アンカーを分割][8]

The horizontal anchors are not equal (they are 0 and 1) which means that the Element will expand automatically to fill the entire horizontal area if the Screen is resized. We also have a horizontal margin of 50 pixels to allow a small gap from the edges - the margin can only be set when anchors are split.

では、グループの子の残りの部分を見てみましょう。

### 位置

位置は左に固定されています：

![位置][9]

### 名前

名前は左に固定され、右に少し動かされています：

![名前][10]

### スコア

スコアは右に固定されています

![スコア][11]

### ポイント

ポイントは右に固定されています

![ポイント][12]

## スクリプト

JSONアセットを読み込みリーダーボードを塗りつぶす `leaderboard`スクリプトです：

```javascript
var Leaderboard = pc.createScript('leaderboard');

// 複製するテキスト入力テンプレート
Leaderboard.attributes.add("template", {type: "entity"});
// 個人スコアの親リーダーボード
Leaderboard.attributes.add("personal", {type: "entity"});
// 上位10位の親リーダーボード
Leaderboard.attributes.add("leaderboard", {type: "entity"});

Leaderboard.prototype.initialize = function() {
    var self = this;

    this.entries = [];

    this.load(function (data) {
        self.clear();

        // 個人用エントリを追加する
        var y = -75;
        self.addEntry(self.personal, y, data.personal.position, data.personal.name, data.personal.score);

        // トップ10を追加
        y = -60;
        for (var i = 0; i < Math.min(data.leaderboard.length, 10); i++) {
            self.addEntry(self.leaderboard, y, i+1, data.leaderboard[i].name, data.leaderboard[i].score);
            y -= 99; // offset each entry
        }
    });
};

// すべてのリーダーボードエントリをクリアする
Leaderboard.prototype.clear = function () {
    for (var i = 0; i < this.entries.length; i++) {
        this.entries[i].destroy();
    }

    this.entries = [];
};

// リーダーボードに新しいエントリを追加する
Leaderboard.prototype.addEntry = function (parent, y, position, name, score) {
    var entry = this.template.clone();
    entry.enabled = true;

    entry.findByName("Position").element.text = position.toString();
    entry.findByName("Name").element.text = name.toUpperCase();
    entry.findByName("Score").element.text = score.toString();

    this.entries.push(entry);

    parent.addChild(entry);
    entry.translateLocal(0, y, 0);
};

// リーダーボードのデータの読み込み模擬。このデモでは、プロジェクトのJSONファイルからデータを取得します
// あなたのプロジェクトでは、サーバのバックエンドからダウンロードできます
Leaderboard.prototype.load = function (callback) {
    var asset = this.app.assets.find("leaderboard-data.json");
    asset.ready(function () {
        callback(asset.resource);
    });
    this.app.assets.load(asset);
};

```

[1]: https://playcanvas.com/editor/scene/547907
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/leaderboard/hierarchy.png
[5]: /images/tutorials/ui/leaderboard/screen.png
[6]: /images/tutorials/ui/leaderboard/template.png
[7]: /images/tutorials/ui/leaderboard/group.png
[8]: /images/tutorials/ui/leaderboard/split-anchors.png
[9]: /images/tutorials/ui/leaderboard/position.png
[10]: /images/tutorials/ui/leaderboard/name.png
[11]: /images/tutorials/ui/leaderboard/score.png
[12]: /images/tutorials/ui/leaderboard/pts.png

