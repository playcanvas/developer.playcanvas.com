---
title: Using the Asset Registry
template: tutorial-page.tmpl.html
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/using_assets?overlay=false"></iframe>

*Click to focus, press SPACEBAR to switch between two model assets*

Usually you will set up all your assets in the Designer and there is no need to access them in scripts. But for more advanced games you may need to swap assets in and out, or assign them at runtime mid-game. To do this you will need to use the [`AssetRegistry`][1] and [Script Attributes][2].

In this tutorial we'll build a small scene which lets you swap the model on a model component by pressing a key. You can see the completed [Pack, here,][3] in our [tutorials project][4].

## Setup

*The project is set up as follows*

* Two model assets are uploaded: **A** is a model of the letter A, **B** is a model of the letter B.
* A model Entity is added to the scene and the model **A** is assigned to the model component.
* A script component is added to the model Entity and a new script is created called `update_asset.js`.

Download the [A model][5] and the [B model][6] and upload them to your project. Ensure that the files are named A.dae and B.dae as this will influence the asset names.

## Handling keypresses

First of all we'll set up the boilerplate code to handle the keydown and keyup events when the space bar is pressed.

```
pc.script.create('update_asset', function (app) {
    // Creates a new Update_asset instance
    var Update_asset = function (entity) {
        this.entity = entity;
    };

    Update_asset.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            app.keyboard.on("keyup", this.onKeyUp, this);
            app.keyboard.on("keydown", this.onKeyDown, this);
        },

        onKeyUp: function (e) {
            if (e.key === pc.KEY_SPACE) {
                // do something when space is released

                e.event.preventDefault(); // prevent browser picking up key event
            }
        },

        onKeyDown: function (e) {
            if (e.key === pc.KEY_SPACE) {
                // do something when space is pressed

                e.event.preventDefault(); // prevent browser picking up key event
            }
        },
    };

    return Update_asset;
});
```

This code attaches some event listeners to the keyboard and gets ready to do something when the space bar is pressed.

## First Attempt - Find asset and assign it

So, first we'll try the obvious thing. Get the asset from the asset registry and swap the model.

Let's add a function call `changeTo()`:

```
    Update_asset.prototype = {
        //...

        changeTo: function (name) {
            var asset = app.assets.find(name);
            if (asset) {
                this.entity.model.model = asset.resource;
            } else {
                console.error("Can't find asset named: " + name);
            }
        }


        onKeyUp: function (e) {
            if (e.key === pc.KEY_SPACE) {
                this.changeTo("A");
                e.event.preventDefault(); // prevent browser picking up key event
            }
        },

        onKeyDown: function (e) {
            if (e.key === pc.KEY_SPACE) {
                this.changeTo("B");
                e.event.preventDefault(); // prevent browser picking up key event
            }
        },
    };
```

When you run this appliction and press space. You'll get this error message:

![error message][7]

Even though we've uploaded the model **B** to our project. The game can't find it in the asset registry. Why is this?

The answer is down to how we optimize projects to prevent downloading excess assets when the game is loaded.

<div class="alert alert-warning">
**Only assets that are referenced in the pack are accessible**.
</div>

So in this case, we reference the **A** model in the model component, but we don't reference the **B** model anywhere in the pack. That means it's not included in the asset registry and it's not loaded when the application starts up.

## Adding a reference

One way of ensuring that the **B** model is included in the Pack is to add a new Entity with a model component and assign the **B** model to it. This would work, but has the downside that we have an extra Entity in the scene. We'd need to make sure if was out of sight or we could just disable it.

We're going to show you another method of adding a reference to an asset, using [Script Attributes][2]. Script Attributes let you declare variables in your scripts which are then exposed to the Designer. This makes it easy to create a generic script and customize it per-instance in the Designer.

To declare a script attribute we add this code to the top of our `update_asset.js` script

```
pc.script.attribute("letters", "asset", [], {type: "model"});
```

Then in the Designer choose the Refresh Script Attributes option from the Entity menu.

![refresh_scripts][8]

<div class="alert alert-warning">
It's important to make sure you refresh the script attributes when you upload a new asset, because when if you reference a new script attribute in your code, but you have exposed it in the designer, it will be uninitialized.
</div>

Once you've refreshed the script attributes you'll see that you now have an asset picker available in your script component.

![letters_script_attributes][9]

Use this to add the two models **A** and **B** to your script. Now you have a reference to both models, which means the asset will be available at runtime.

If you now relaunch your application and press space. The model will switch between displaying A and B.

### Bonus - using the assets from the script attributes

In the example so far we've declared the script attributes but we aren't actually using the values. This is fine and works because you can get the asset by it's name, but in this case you are introducting a dependency between the name of the asset and the code. Instead, we can just use the assets that have been added in the Designer. That way, any Designer user can update the assets without having to edit the code.

So lets add a new function `changeToByIndex()` and update the keyup and keydown events.

```
Update_asset.prototype = {
    //...

    changeToByIndex: function (index) {
        var asset = app.assets.getAssetByResourceId(this.letters[index]);
        if (asset) {
            this.entity.model.model = asset.resource;
        }
    },

    onKeyUp: function (e) {
        if (e.key === pc.KEY_SPACE) {
            this.changeToByIndex(0);
            e.event.preventDefault(); // prevent browser picking up key event
        }
    },

    onKeyDown: function (e) {
        if (e.key === pc.KEY_SPACE) {
            this.changeToByIndex(1);
            e.event.preventDefault(); // prevent browser picking up key event
        }
    }
};
```

Now, instead of getting the assets by their name, we're using `this.letters` which is the script attribute we declared and we're getting the asset by the resource id that is stored from the Designer. So now, you could drop in any two assets into the `update_asset.js` script in the Designer and pressing space will switch between them.

## The complete script

```
pc.script.attribute("letters", "asset", [], {type: "model"});

pc.script.create('update_asset', function (app) {
    // Creates a new Update_asset instance
    var Update_asset = function (entity) {
        this.entity = entity;
    };

    Update_asset.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            app.keyboard.on("keyup", this.onKeyUp, this);
            app.keyboard.on("keydown", this.onKeyDown, this);
        },

        // changeTo: function (name) {
        //     var asset = app.assets.find(name)
        //     if (asset) {
        //         this.entity.model.model = asset.resource;
        //     } else {
        //         console.error("Can't find asset named: " + name);
        //     }
        // },

        changeToByIndex: function (index) {
            var asset = app.assets.getAssetByResourceId(this.letters[index]);
            if (asset) {
                this.entity.model.model = asset.resource;
            }
        },

        onKeyUp: function (e) {
            if (e.key === pc.KEY_SPACE) {
                this.changeToByIndex(0);
                e.event.preventDefault(); // prevent browser picking up key event
            }
        },

        onKeyDown: function (e) {
            if (e.key === pc.KEY_SPACE) {
                this.changeToByIndex(1);
                e.event.preventDefault(); // prevent browser picking up key event
            }
        }
    };

    return Update_asset;
});
```

[1]: /engine/api/stable/symbols/pc.asset.AssetRegistry.html
[2]: /user-manual/scripting/script-attributes/
[3]: http://playcanvas.com/designer/186/scene/338769
[4]: https://playcanvas.com/project/186/overview/tutorials
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /images/tutorials/using_assets/error.jpg
[8]: /images/scripting/refresh_attributes.png
[9]: /images/tutorials/using_assets/letters_script_attributed.jpg
