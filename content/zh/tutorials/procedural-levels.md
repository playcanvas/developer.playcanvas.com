---
title: 程序关卡
template: tutorial-page.tmpl.html
tags: procedural
---

<iframe src="https://playcanv.as/p/smskdMrk/"></iframe>

该项目使用Entity上的[clone()][1]函数从编辑器中创建的实体中随机生成一个关卡节点。

在[教学项目][2]中尝试一下。

下面的脚本是一个非常简单的关卡生成程序。 它需要在编辑器中设置两个实体：“草”和“房子”，并将其平铺用作于基础网格的平面。 通过随机选择其中一个图块，克隆图块以创建新实体，然后将新实体放置在正确的网格位置来创建级别。

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

