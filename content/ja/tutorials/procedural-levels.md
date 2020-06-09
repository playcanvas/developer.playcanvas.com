---
title: プロシージャルレベル
template: tutorial-page.tmpl.html
tags: procedural
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405864/A3MSWE-image-75.jpg
---

<iframe src="https://playcanv.as/p/smskdMrk/"></iframe>

このプロジェクトは、エンティティの[clone()][1] 機能を使用してエディタで作成されたエンティティからレベルをランダムに生成します。

[チュートリアルプロジェクト[2]のEditorからお試しください。

下記のスクリプトは、非常に簡単なレベル生成プログラムです。エディタで設定された2つのエンティティ'Grass' と 'House'を、グリッドベースレベルのタイルのように使用します。ランダムにタイルを選択し、そのタイルをクローンして新しいエンティティを作成してから、正しいグリッド位置に新しいエンティティを配置することでレベルを作成します。

```javascript
var Generate = pc.createScript('generate');

Generate.attributes.add('numTilesX', {
type: 'number',
default: 10
});

Generate.attributes.add('numTilesY', {
type: 'number',
default: 10
});

// initializeコードがエンティティ毎に一度呼ばれる
Generate.prototype.initialize = function() {
    // ワールドタイルのテンプレートをいくつか作成しました
    // テンプレートが表示されないよう、Editor階層で
    // 無効にしました。生成されたワールドのみ
    // 表示されるようにします。
    var templates = this.app.root.findByName('Templates');
    var grass = templates.findByName('Grass');
    var house = templates.findByName('House');

    for (var y = 0; y < this.numTilesY; y++) {
        for (var x = 0; x < this.numTilesX; x++) {
            // ランダムにタイルを選びます。家より草の可能性が高いです。
            var tile = (Math.random() > 0.8) ? house : grass;

            // タイルをクローンします
            var e = tile.clone();

            // クローンされたタイルのワールド位置を設定します。タイルはX,Z寸法で
            // 10x10なので、位置を10で
            // 掛けます。
            e.setPosition((x - this.numTilesX / 2) * 10, 0, (y - this.numTilesX / 2) * 10);

            // シーンの階層にタイルを追加します。
            this.app.root.addChild(e);
        }
    }
};
```

[1]: http://developer.playcanvas.com/en/api/pc.Entity.html#clone
[2]: https://playcanvas.com/project/405864

