---
title: Script Attributes [Legacy]
tags: 
    - Legacy
    - Scripting
---
:::warning
**This documentation is for the legacy scripting system.**

See [**Script Attributes**](../script-attributes.md) for the latest documentation.
:::

Script Attributes are a powerful feature that lets you expose values from your script files so that they appear in the PlayCanvas Editor. This means you can write code once, and then tweak values on different instances of an Entity to give them different properties. This is perfect for exposing properties for artists, designers or other non-programmer team members so that they are able to adjust and modify values without writing code.

## Declaring Script Attributes

Script Attributes are declared at the top of your script file using this format:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class MyScript extends Script {
    static attributes = {
        speed: { type: 'number', default: 80 }
    }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', {
    type: 'number',
    default: 80
});
```

</TabItem>
</Tabs>

In this example, we're declaring a property called `speed` which is a `number` and has a default value of `80`:

If you need an array of attributes set `array: true` like so:

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class MyScript extends Script {
    static attributes = {
        names: { type: 'string', array: true }
    }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('names', {
    type: 'string',
    array: true
});
```

</TabItem>
</Tabs>

## Getting Attributes into Editor

![Script Attributes](/img/user-manual/scripting/script-attributes.png)

Once you've declared your attributes the Editor needs to parse the code in order to expose the script attributes. If attributes have been changed, you need to manually refresh the attributes you can click the parse button.

![Parse Button](/img/user-manual/scripting/script-parse-button.png)

## Accessing attributes in your code

When you declare an attribute in your script it will be available as a member variable on your script instance. For example, the `speed` property declared above is available as `this.speed`.

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
update(dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.prototype.update = function (dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

</TabItem>
</Tabs>

## Updating attributes

When you modify an attribute in the editor the changes are sent to any copies of the application launched from the editor. This means you can live edit your attributes without reloading your application. If you need to apply special behavior when an attribute changes. Use the `attr` and `attr:[name]` events to respond to changes

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
initialize () {
    // fires only for `speed` attribute
    this.on('attr:speed', (value, prev) => {
        // new value for speed
    });

    // fires for all attribute changes
    this.on('attr', (name, value, prev) => {
        // new attribute value
    });
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.prototype.initialize = function () {
    // fires only for `speed` attribute
    this.on('attr:speed', function (value, prev) {
        // new value for speed
    });

    // fires for all attribute changes
    this.on('attr', function(name, value, prev) {
        // new attribute value
    });
}
```

</TabItem>
</Tabs>

## Attribute types

When you declare an attribute you also declare the type of the attribute. This allows the editor to show the relevant controls for you to edit the attribute. Most types are self-explanatory, for example, 'boolean', 'number' or 'string'. But some require some further explanation in the below examples. See the [full attribute reference][3] for more details.

### Entity attribute

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    target: { type: 'entity' }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('target', { type: 'entity' })
```

</TabItem>
</Tabs>

The Entity type lets your reference another entity in your hierarchy. A great way to link two entities together.

### Asset attribute

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    textures: { type: 'asset', assetType: 'texture', array: true })
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });
```

</TabItem>
</Tabs>

The Asset attribute let's you reference a project asset in your script. The asset attribute also supports the `assetType` property which limits the attribute to assets of a particular type, e.g. 'texture', 'material', 'model'.

The runtime type of an Asset attribute is `pc.Asset`. You can reference the resource of an Asset attribute at runtime like so:

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    textures: { type: 'asset', assetType: 'texture' })
}

initialize() {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('texture', {type: 'asset', assetType: 'texture'});

MyScript.prototype.initialize = function () {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
};
```

</TabItem>
</Tabs>

### Color attribute

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    color: { type: 'rgba' }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('color', { type: 'rgba' });
```

</TabItem>
</Tabs>

The color attribute shows a color picker when exposed in the editor. There are two options `rgb` and `rgba` depending on whether you wish to expose the alpha channel as well.

### Curve attribute

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    wave: { type: 'curve' }, // one curve
    wave: { type: 'curve', curves: [ 'x', 'y', 'z' ] }, // three curves: x, y, z
    wave: { type: 'curve', color: 'r' }, // one curve for red channel
    wave: { type: 'curve', color: 'rgba' } // four curves for full color including alpha
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('wave', { type: 'curve' }); // one curve
MyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // three curves: x, y, z
MyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // one curve for red channel
MyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // four curves for full color including alpha
```

</TabItem>
</Tabs>

The curve attribute is used to express a value that changes over a time period. All curves are defined over the period 0.0 - 1.0. You can define multiple curves, for example if you wish to have a 3D position from a curve defined three curves for x,y,z using the `curves` property. There is also a special curve editor for modifying colors using the `color` property.

### Enumeration attribute

The Enumeration attribute allows you to choose one of the available options:

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    value: {
        type: 'number',
        enum: [
            { 'valueOne': 1 },
            { 'valueTwo': 2 },
            { 'valueThree': 3 }
        ]
    }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('value', {
    type: 'number',
    enum: [
        { 'valueOne': 1 },
        { 'valueTwo': 2 },
        { 'valueThree': 3 }
    ]
});
```

</TabItem>
</Tabs>

Use the enum property to declare the list of possible values for your enumeration. Property is an array of objects where each object is an option where `key` is a title of an option and `value` is a value for attribute. This property can be used for various attribute types, e.g. `number`, `string`.

### JSON attribute

The JSON attribute allows you to create nested attributes of the other attribute types. For every JSON attribute you must specify a schema to describe its properties. The schema contains other regular script attribute definitions like above. For example:

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
static attributes = {
    gameConfig: {
        type: 'json',
        schema: [{
            name: 'numEnemies',
            type: 'number',
            default: 10
        }, {
            name: 'enemyModels',
            type: 'asset',
            assetType: 'model',
            array: true
        }, {
            name: 'godMode',
            type: 'boolean',
            default: false
        }]
    }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.attributes.add('gameConfig', {
    type: 'json',
    schema: [{
        name: 'numEnemies',
        type: 'number',
        default: 10
    }, {
        name: 'enemyModels',
        type: 'asset',
        assetType: 'model',
        array: true
    }, {
        name: 'godMode',
        type: 'boolean',
        default: false
    }]
});
```

</TabItem>
</Tabs>

You can also declare arrays of JSON attributes so that you can create arrays of editable objects. Just add `array: true` when defining the JSON attribute like you do for other attribute types.

Here's an example of accessing the above attributes in a script:

<Tabs defaultValue="legacy" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
update (dt) {
    if (this.gameConfig.godMode) {
        for (var i = 0; i < this.gameConfig.numEnemies; i++) {
            // ...
        }
    }
}
```

</TabItem>
<TabItem value="legacy" label="Legacy">

```javascript
MyScript.prototype.update = function (dt) {
    if (this.gameConfig.godMode) {
        for (var i = 0; i < this.gameConfig.numEnemies; i++) {
            // ...
        }
    }
};
```

</TabItem>
</Tabs>

:::note

We currently do not support defining JSON attributes as children of other JSON attributes. You can only go 1 level deep when defining a JSON attribute.

:::

[3]: https://api.playcanvas.com/classes/Engine.ScriptAttributes.html
