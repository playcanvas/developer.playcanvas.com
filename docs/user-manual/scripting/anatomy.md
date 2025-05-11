---
title: Script Anatomy
sidebar_position: 1
---

Scripts provide powerful features for adding interactivity to your project. To learn more about the anatomy of a Script we've provided a simple `Rotate` script below. Let's break down what this means.

:::note

Scripts can be defined as either **[ES Modules](esm-scripts.md)**, or **[Classic Scripts](../classic)**.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Rotate extends Script {

    /** @attribute */
    speed = 10;

    initialize() {
        this.local = false; // choose local rotation or world rotation
    }

    update(dt) {
        if (this.local) {
            this.entity.rotateLocal(0, this.speed * dt, 0);
        } else {
            this.entity.rotate(0, this.speed * dt, 0);
        }
    }

    swap(old) {
        this.local = old.local;
    }
}
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
var Rotate = pc.createScript('rotate');

Rotate.attributes.add('speed', { type: 'number', default: 10 });

// initialize code called once per entity
Rotate.prototype.initialize = function() {
    this.local = false; // choose local rotation or world rotation
};

// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

</TabItem>
</Tabs>

## Declaring a Script

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Rotate extends Script {

}
```

You declare a script by **exporting a class that extends `Script`**. The class name is used to identify the script. Each script in a project must have a unique name.

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
var Rotate = pc.createScript('rotate');
```

This line creates a new Script called 'rotate'. The name of the script is used to identify the script in script components. Each Script that is declared in a project must have a unique name. The returned function `Rotate` is a javascript function which is ready to have its prototype extended with a standard set of methods. Somewhat like class inheritance.

</TabItem>
</Tabs>

## Attributes

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem value="esm" label="ESM">

```javascript
/** @attribute */
speed = 10
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
Rotate.attributes.add('speed', { type: 'number', default: 10 });
```

</TabItem>
</Tabs>

This exposes a Script member as an attribute. [Attributes](./script-attributes.md) are a powerful feature that allow you to expose parameters of your script to the editor, and manually set these at author time.

Learn more about [Script Attributes](./script-attributes.md)

## Life-Cycle Methods

The lifecycle hooks are optional methods called at various stages in the application. They allow scripts to initialize and react to frame updates and more. For convenience, they're listed below in the order of execution.

If an entity has multiple scripts attached to it, the methods are called in the order specified in the component.

### Initialize()

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem value="esm" label="ESM">

```javascript
// initialize code called once per entity
initialize() {
    // local rotation or world rotation
    this.local = false;
}
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
// initialize code called once per entity
Rotate.prototype.initialize = function() {
    // local rotation or world rotation
    this.local = false;
};
```

</TabItem>
</Tabs>

The `initialize()` method is called before any other life-cycle method. It's useful for setting up event listeners or any other data needed by the Script. It will only ever be called once when the script and it's entity are enabled.

More formally, `initialize` is called after the application has loaded and the entity hierarchy has been constructed but before the first update loop or frame is rendered. If an entity or script is disabled when the application starts, the initialize method will be called the first time the entity is enabled.

When an entity is cloned using the `entity.clone` method, the `initialize` method on the script is only called when the cloned entity is added to the scene hierarchy; as long as both the entity and script are enabled as well.

:::tip
`postInitialize()` is an additional life-cycle hook invoked after `initialize()` has been called on all scripts in the scene. This can be particularly useful when you need to perform setup actions that depend on the results of other scripts' `initialize()` methods.
:::

### Update()

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem value="esm" label="ESM">

```javascript
// update code called every frame
update(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
}
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
};
```

</TabItem>
</Tabs>

The `update()` method is called every frame whilst enabled. It's useful for animating things or handling anything that needs to happen every frame. It's called with the `dt` argument which specifies the time, in seconds, since the last frame.

:::tip
The **`postUpdate()`** method is an additional life-cycle hook invoked after **`update()`** has been called on all scripts in the scene. This can be particularly useful when you need to perform actions that depend on the results of other scripts' **`update()`** methods.
:::

### Swap()

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem value="esm" label="ESM">

```javascript
// swap method called for script hot-reloading
// inherit your script state here
swap(old) {
    this.local = old.local;
}
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

</TabItem>
</Tabs>

The `swap()` method is used to enable [hot-reloading](./hot-reloading.md) of scripts. In practice this means you can update code at author-time, and use the `swap()` method to copy state over from the previous script instance, to the new one. This is extremely useful if you wish to iterate on code without refreshing your project.

The `swap` method is passed the old script instance as an argument. You should use this to copy any state from the old instance into the new one. You should also ensure that events are unsubscribed and re-subscribed to.

If you do not wish to support hot-swapping of code, you can delete the swap method and the engine will not attempt to refresh the script.

## Events

Script instances fire a number of events that can be used to respond to specific circumstances.

### state

The `state` event is fired when the script instance changes running state from enabled to disabled or vice versa. The script instance state can be changed by enabling/disabling the script itself, the component the script is a member of, or the entity that the script component is attached to.

```javascript
this.on("state", (enabled) => {
    // play a sound effect when the entity is enabled or disabled
    this.entity.sound.play(enabled ? "bell" : "horn");
});
```

### enable/disable

The `enable` event fires only when the state changes from disabled to enabled, and the `disable` event fires only when the state changes from enabled to disabled.

```javascript
this.on("enable", () => this.entity.sound.play("bell"));
this.on("disable", () => this.entity.sound.play("horn"));
```

### destroy

The `destroy` event is fired when the script instance is destroyed. This could be because the script was removed from the component by calling the `destroy()` method, or script component been removed from Entity, or because the Entity it was attached to was destroyed.

```javascript
this.on("destroy", () => {
    // remove a DOM event listener when the entity is destroyed
    window.removeEventListener("resize", this._onResize);
});
```

<!--
### attr and attr:[name]

The `attr` and `attr:[name]` events are fired when a declared script attribute value is changed. This could be in the course of running the application or it could be when changes are made to the value via the Editor. The `attr` is fired for every attribute changed. The `attr:[name]` is fired only for a specific attribute e.g. if you have an attribute called 'speed' the event `attr:speed` would be fired when the speed is changed.

```javascript
Rotate.prototype.initialize = function () {
    this.on("attr:speed", function (value, prev) {
        // speed attribute has changed
    });
};
```
-->
