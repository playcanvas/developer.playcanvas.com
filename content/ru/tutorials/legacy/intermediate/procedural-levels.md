---
title: Procedural Levels
template: tutorial-page-legacy.tmpl.html
position: 5
---

<iframe src="http://playcanv.as/p/1Q3MMsLj"></iframe>

This project uses [clone()][1] function on the Entity to randomly generate a level from Entities that have been created in the Editor.

Try it from the Editor in the [tutorial project.][2]

This script below is a very simple level generation program. It takes two Entities that have been setup in the Editor: 'Grass' and 'House' and uses them as tiles for a grid based level. The level is created by randomly choosing one of the tiles, cloning the tile to create a new Entity, then placing the new Entity at the correct grid position.

~~~javascript~~~
pc.script.attribute('numTilesX', 'number', 10);
pc.script.attribute('numTilesY', 'number', 10);

pc.script.create('generate', function (app) {
    // Creates a new Generate instance
    var Generate = function (entity) {
        this.entity = entity;
    };

    Generate.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            // We've created a couple of templates that are our world tiles
            // In the Editor hierarchy, we have disabled the templates because
            // we don't want them to be visible. We just want our generated
            // world to be visible
            var templates = app.root.findByName('Templates');
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
                    app.root.addChild(e);
                }
            }
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Generate;
});
~~~

[1]: http://developer.playcanvas.com/en/api/pc.Entity.html#clone
[2]: https://playcanvas.com/project/362225/overview/tutorial-procedural-levels

