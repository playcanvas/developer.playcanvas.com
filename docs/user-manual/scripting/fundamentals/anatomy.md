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

