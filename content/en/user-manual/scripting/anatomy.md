---
title: Anatomy of a script
template: usermanual-page.tmpl.html
position: 3
---

Here is a basic script. We can learn about the structure of a PlayCanvas script from it.


```javascript
var Rotate = pc.createScript('rotate');

Rotate.attributes.add("speed", {type: "number", default: 10});

// initialize code called once per entity
Rotate.prototype.initialize = function() {
    this.local = false; // choose local rotation or world rotation
};

// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, tihs.speed*dt, 0);
    } else {
        this.entity.rotate(0, this.speed*dt, 0);
    }

};

// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

We'll break down each section of the script

# Script Methods

## Declaration of Script Type

```javascript
var Rotate = pc.createScript('rotate');
```

This line creates a new ScriptType called 'rotate'. The name of the script is used to identify the script in script components. Each ScriptType that is declared in a project must have a unique name. The returned object `Rotate` is a javascript object which is ready to have it's prototype extended with a standard set of methods. Somewhat like class inheritance.

## Script Attributes

```javascript
Rotate.attributes.add("speed", {type: "number", default: 10});
```

This line declares a script attribute. A script attribute is a property of the script instance and it is exposed into the Editor. Allowing you to customize individual entities in the Editor. In this case the attribute is called 'speed' and would be accessible in the script code as `this.speed`. It is a number and by default is initialized to 10.

## Initialize

```javascript
// initialize code called once per entity
Rotate.prototype.initialize = function() {
    // local rotation or world rotation
    this.local = false;
};
```

The `initialize` method is called on each entity that has the script attached to it. It is called after application loading is complete and the entity hierarchy has been constructed but before the first update loop or frame is rendered. The `initialize` method is only ever called once for each entity. You can use it to define and initalize member variables of the script instance. If an entity or script is disabled when the application starts the initialize method is called the first time the entity is enabled.

If a script component has multiple scripts attached to it, `initialize` is called in the order of the scripts on the component.

## Update

```javascript
// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, tihs.speed*dt, 0);
    } else {
        this.entity.rotate(0, this.speed*dt, 0);
    }

};
```

The update method is called for each entity every frame while the entity, the script component and the script instance are enabled. Each frame `update` is passed the time in seconds since the last frame.

If a script component has multiple scripts attached to it, `update` is called in the order of the scripts on the component.

## Swap

```javascript
// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

The `swap` method is called when ever a script is changed at runtime from the editor. This method allows you to support "hot reloading" of code whilst you continue to run your application. It is extremely useful if you wish to iterate on code that takes a while to reach while running your app. You can make changes and see them without having to reload and run through lots of set up.

The `swap` method is passed the old script instance as an argument and you can use this to copy the state from the old instance into the new one. You should also ensure that events are unsubscribed and re-subscribed to.

If you do not wish to support hot-swapping of code you can delete the swap method and the engine will not attempt to refresh the script.

## Additional Methods: postInitialize and postUpdate

There are two more methods that are called by the engine on scripts if they are present. `postInitialize` is called on all scripts that implement it after all scripts have been initialized. Use this method to perform functions that can assume all scripts are initialized. `postUpdate` is an update method that is called after all scripts have been updated. Use this to perform functions that can assume that all scripts have been updated. For example, a camera that is tracking another entity should update its position in `postUpdate` so that the other entity has completed its motion for the frame.

# Events

Script instances fire a number of events that can be used to respond to specific circumstances.

## state, enable, disable

The `state` event is fired when the script instance changes state from enabled to disabled or vice versa. The script instance state can be changed by enabling/disabling the script itself, the component the script is a member of, or the entity that the script component is attached to. The `enable` event fires only when the state changes from disabled to enabled, and the `disable` event fires only when the state changes from enabled to disabled.

```javascript
Rotate.prototype.initialize = function () {
    this.on("state", function (enabled) {
        // play a sound effect when the entity is enabled or disabled
        if (enabled) {
            this.entity.sound.play("bell");
        } else {
            this.entity.sound.play("horn");
        }
    });
};
```

or the equivalent using `enable` and `disable`

```javascript
Rotate.prototype.initialize = function () {
    this.on("enable", function () {
        this.entity.sound.play("bell");
    });

    this.on("disable", function () {
        this.entity.sound.play("horn");
    });
};
```

## destroy

The `destroy` event is fired when the script instance is destroyed. This could be because the script was removed from the component by calling the `destroy()` method or because the Entity it was attached to was destroyed.

```javascript
Rotate.prototype.initialize = function () {
    this.on("destroy", function () {
        // remove a DOM event listener when the entity is destroyed
        window.removeEventListener("resize", this._onResize);
    });
};
```

## attr & attr:[name]

The `attr` and `attr:[name]` events are fired when a declared script attribute value is changed. This could be in the course of running the application or it could be when changes are made to the value via the Editor. The `attr` is fired for every attribute changed. The `attr:[name]` is fired only for a specific attribute e.g. if you have an attribute called 'speed' the event `attr:speed` would be fired when the speed is changed.

```javascript
Rotate.prototype.initialize = function () {
    this.on("attr:speed", function (value, prev) {
        // speed attribute has changed
    });
};
```
