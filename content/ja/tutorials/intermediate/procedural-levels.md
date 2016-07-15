---
title: プロシージャルレベル
template: tutorial-page.tmpl.html
position: 5
---

<iframe src="https://playcanv.as/p/smskdMrk/"></iframe>

このプロジェクトは、エンティティの[clone()][1] 機能を使用してエディタで作成されたエンティティからレベルをランダムに生成します。

[チュートリアルプロジェクト][2]のEditorからお試しください。

下記のスクリプトは、非常に簡単なレベル生成プログラムです。エディタで設定された2つのエンティティ'Grass' と 'House'を、グリッドベースレベルのタイルのように使用します。ランダムにタイルを選択し、そのタイルをクローンして新しいエンティティを作成してから、正しいグリッド位置に新しいエンティティを配置することでレベルを作成します。

~~~javascript~~~
var Generate = pc.createScript('generate');

Generate.attributes.add('numTilesX', {
    type: 'number',
    default: 10
});

Generate.attributes.add('numTilesY', {
    type: 'number',
    default: 10
});

// initialize code called once per entity
Generate.prototype.initialize = function() {
    // We've created a couple of templates that are our world tiles
    // In the Editor hierarchy, we have disabled the templates because
    // we don't want them to be visible. We just want our generated
    // world to be visible
    var templates = this.app.root.findByName('Templates');
    var grass = templates.findByName('Grass');
    var house = templates.findByName('House');

    for (var y = 0; y < this.numTilesY; y++) {
        for (var x = 0; x < this.numTilesX; x++) {
            // Pick a tile at random, with grass more likely than a house
            var tile = (Math.random() > 0.8) ? house : grass;

            // Clone the tile
            var e = tile.clone();

            // Set the world position of the cloned tile. Note that because
            // our tiles are 10x10 in X,Z dimensions, we have to multiply
            // the position by 10
            e.setPosition((x - this.numTilesX / 2) * 10, 0, (y - this.numTilesX / 2) * 10);

            // Add the tile to the scene's hierarchy
            this.app.root.addChild(e);
        }
    }
};
~~~

[1]: http://developer.playcanvas.com/en/api/pc.Entity.html#clone
[2]: https://playcanvas.com/project/405864

