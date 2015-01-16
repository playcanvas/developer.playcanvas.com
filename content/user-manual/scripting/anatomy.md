---
title: Anatomy of a Script
template: page.tmpl.html
position: 2
---

~~~js~~~
pc.script.create("script_name", function (context) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    };

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {

        }
    };

    return ScriptObject;
});
~~~
*A skeleton script*

Here is the skeleton of a script, it shows the minimum amount of code necessary to make a functioning script.

<div class="alert alert-info">
Actually, you could leave the `initialize` and `update` methods out of a script. But most scripts will need an update method in order to actually do anything, and initialize is useful for setting up values before your game starts.
</div>

We'll break down each part of this script section by section.

## Declaration and context

~~~js~~~
pc.script.create("script_name", function(context) {
    //...
});
~~~

Enclosing the whole script is a call to `pc.script.create`. The first argument is the script name, this is used to identify this script later if you wish to communicate between script instances. The second argument is a function which is used to define the class that provides the script's behaviour.

The definition function takes a single argument `context` which is an [`ApplicationContext`][application_context] instance.

The `context` variable is available for use throughout your script object because `ScriptObject` is a Closure. It contains various useful properties.

* `systems` Container for all Component systems, e.g. `context.systems.model` is the Model Component System
* `root` The root node of the Entity hierarchy.
* `keyboard` An instance of `pc.Keyboard`
* `mouse` An instance of `pc.Mouse`
* `scene` An instance of `pc.Scene`
* `loader` An instance of `pc.resources.ResourceLoader`

See the [API Reference][context_api] for more details on the context object.

## Defining the Script object

~~~js~~~
pc.script.create("script_name", function (context) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    }

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {

        }
    };

    return ScriptObject;
})
~~~

The purpose of the function in the second argument is to define a Script object and return that definition so that the engine can instantiate a new instance for each Entity.

Here you can see the basic set up. A variable `ScriptObject` is declared as a constructor function which takes the Entity it is attached to as it's only argument. It is usually useful to store this Entity in the instance for use later on, hence the line `this.entity = entity;` You will often create member variables for your object here too.

Next we define the initialize and update functions. `initialize()` is called once for each Script Instance. It is called after all Entities are loaded (so that the Entity hierarchy in `context.root` is valid) but before any `update()` methods are called.
`update()` is the update loop for our script. The Script Component system will call the update function every frame with the time in seconds that passed since the last update in the variable `dt`. Note, that both these function are optional and should be left out if they are not being used.

Finally, we return the `ScriptObject` variable.

## A complete example

Here is a complete script, try saving it to a file and attaching it to an Entity in a pack.

~~~js~~~
///
// This script moves the entity backwards and forwards on the x-axis.
// You can pause the oscillation by pressing the space bar.
///
pc.script.create('oscillator', function (context) {

    // define the constructor
    var Oscillator = function (entity) {
        this.entity = entity;

        this.paused = false; // paused state
        this.amplitude = 10; // The amount to oscillate
        this.time = 0; // The time value for the oscillation
    };

    // define the update function
    Oscillator.prototype = {
        update: function (dt) {

            // Use the keyboard handler from the ApplicationContext
            // to pause/unpause
            if (context.keyboard.wasPressed(pc.KEY_SPACE)) {
                this.paused = !this.paused; // toggle paused state
            }

            if (!this.paused) {
                // increment the time value by the frametime
                this.time += dt;

                // Calculate the new value
                var x = this.amplitude * Math.sin(this.time);

                // Update the x position of the Entity
                this.entity.setLocalPosition(x, 0, 0);
            }
        }
    };

    // return the class definition
    return Oscillator;
});
~~~

[application_context]: /user-manual/glossary#application_context
[context_api]: /engine/api/stable/symbols/pc.ApplicationContext.html

