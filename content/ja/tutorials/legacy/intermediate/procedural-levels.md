---
title: プロシージャルレベル
template: tutorial-page.tmpl.html
position: 5
---

<iframe src="http://playcanv.as/p/1Q3MMsLj"></iframe>

このプロジェクトは、エンティティの[clone()][1] 機能を使用してエディタで作成されたエンティティからレベルをランダムに生成します。

[チュートリアルプロジェクト][2]のEditorからお試しください。

下記のスクリプトは、非常に簡単なレベル生成プログラムです。エディタで設定された2つのエンティティ'Grass' と 'House'を、グリッドベースレベルのタイルのように使用します。ランダムにタイルを選択し、そのタイルをクローンして新しいエンティティを作成してから、正しいグリッド位置に新しいエンティティを配置することでレベルを作成します。

~~~javascript~~~
pc.script.attribute('numTilesX', 'number', 10);
pc.script.attribute('numTilesY', 'number', 10);

pc.script.create('generate', function (app) {
    // 新規の生成インスタンスを作成
    var Generate = function (entity) {
        this.entity = entity;
    };

    Generate.prototype = {
        // 全てのリソースが読み込まれた後、最初の更新の前に一度呼ばれる
        initialize: function () {
            // ワールドタイルであるいくつかのテンプレートを作成しました
            // テンプレートは表示されるべきではないので、エディタ階層で
            // 無効にしています。生成されたワールドのみ
            // 表示されるべきです。
            var templates = app.root.findByName('Templates');
            var grass = templates.findByName('Grass');
            var house = templates.findByName('House');

            for (var y = 0; y < this.numTilesY; y++) {
                for (var x = 0; x < this.numTilesX; x++) {
                    // Pick a tile at random, with grass more likely than a house
                    var tile = (Math.random() > 0.8) ? house : grass;

                    // タイルをクローン
                    var e = tile.clone();

                    // クローンしたタイルのワールド位置を設定。
                    // タイルはX,Y寸法で10x10なので位置を
                    // 10でかける必要があります。
                    e.setPosition((x - this.numTilesX / 2) * 10, 0, (y - this.numTilesX / 2) * 10);

                    // シーンの階層にタイルを追加
                    app.root.addChild(e);
                }
            }
        },

        // 毎フレーム呼ばれる。dtは最後の更新以来の秒単位の時間
        update: function (dt) {
        }
    };

    return Generate;
});
~~~

[1]: http://developer.playcanvas.com/en/api/pc.Entity.html#clone
[2]: https://playcanvas.com/project/362225/overview/tutorial-procedural-levels

