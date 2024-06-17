---
title: Script Attributes
description: Expose dynamic script properties to the PlayCanvas Editor.
sidebar_position: 5
---

Script Attributes are a powerful feature that allow you to expose properties to the PlayCanvas editor. This means you can tweak those values at runtime via the editor to give you greater control to dynamically tweak your application as you author it. The attributes becomes accessible as UI controls within the editor, perfect for artists, designers or other non-programmer team members to adjust and modify values without writing code

## Getting Started

Let's say you have a simple script that rotates an entity around it's Y axis.


```javascript
import { Script } from 'playcanvas';

export class Rotator extends Script {
    speed = 2

    update(dt){
        this.entity.rotateLocal(0, this.speed, 0)
    }
}
```

However you're not sure what the exact value of speed should be, and more-so you might want to use this script in different places, potentially with different speeds.

Ideally there would be a way to dynamically set the value of speed on different instances in a way that could be tweaked at author-time,

### The @attribute tag

By adding an `@attribute` tag in a comment block immediately before the member, you expose it to the editor as an attribute. This creates a controller in the editor that allows you to dynamically set the value of `speed` at run time for each entity it's attached to.

:::tip
Adding an `/** @attribute */` comment before a Script member will expose it to the editor.
:::

```javascript
import { Script } from 'playcanvas';

export class Rotator extends Script {
    /** @attribute */
    speed = 2

    update(dt){
        this.entity.rotateLocal(0, this.speed, 0)
    }
}
```

This tells the editor that the `speed` member in an attribute. The editor will generate a control that allows you to change the value of `speed` dynamically in the launch page.

### Attribute constraints
Adding the `@attribute` tag creates a UI controller that matches the specific type of attribute. For example

```javascript
/** @attribute */
speed = 10
```

creates a numerical input box, allowing you to set numerical values for `speed`, however it's likely you might want to set a range of sensible values for speed. You can do this with the `@range` tag

```javascript
/** 
 * @attribute
 * @range [0, 10]
 */
speed = 10
```

This simply tells the editor that speed is an attribute and it's value should be within 0 - 10. The editor will create a numerical slider mapped to this range.

There are other numerical constraints that you can set which help the editor limit the set of possible values

```javascript
/** 
 * @attribute
 * @range [0, 10]
 * @precison 0.1
 * @step 0.05
 */
speed = 10
```

 
In this example, we're declaring a property called `speed` which is a `number` and has a default value of `2`:

If you need an array of attributes set `array: true` like so:

```javascript
import { Script } from 'playcanvas';

export class MyScript extends Script {
    static attributes = {
        names: { type: 'string', array: true }
    }
}
```

## Getting Attributes into Editor

![Script Attributes](/img/user-manual/scripting/script-attributes.png)

Once you've declared your attributes the Editor needs to parse the code in order to expose the script attributes. If attributes have been changed, you need to manually refresh the attributes you can click the parse button.

![Parse Button](/img/user-manual/scripting/script-parse-button.png)

## Accessing attributes in your code

When you declare an attribute in your script it will be available as a member variable on your script instance. For example, the `speed` property declared above is available as `this.speed`.

```javascript
update(dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

## Attribute types

When you expose a script member as an attribute, the editor will show a relevant control based on the type of attribute. If the attribute is a number, it shows a numerical input, if it's a boolean, a checkbox. 

### Supported Types
Here are the full set of supported attribute types:

- **number**
- **string**
- **boolean**
- **[Vec2](https://api.playcanvas.com/classes/Engine.Vec2.html)**
- **[Vec3](https://api.playcanvas.com/classes/Engine.Vec3.html)**
- **[Vec4](https://api.playcanvas.com/classes/Engine.Vec4.html)**
- **[Entity](https://api.playcanvas.com/classes/Engine.Entity.html)**
- **[Asset](https://api.playcanvas.com/classes/Engine.Asset.html)**
- **[Curve](https://api.playcanvas.com/classes/Engine.Curve.html)**
- **[Color](https://api.playcanvas.com/classes/Engine.Color.html)**

### The @type tag

In some situations you won't actually know an attributes initial value ahead of time. For example, if you want to define an asset attribute on a script, you won't necessarily have an initial value. In these situations, where a value isn't known ahead of time, but it's type is, you can use the jsdoc `@type` tag.

```javascript
/**
 * @attribute
 * @type {Asset}
 */
myTexture;
```

:::warning
An attribute must either be initialized with a value `speed = 10`, or have a jsdoc type `@type {number}`. If neither are present, the attribute will ignored
:::

#### Entity attribute
The Entity type lets your reference another entity in your hierarchy. A great way to link two entities together.

```javascript
/**
 * @attribute
 * @type {Entity}
 */
target
```

#### Asset attribute
The Asset attribute let's you reference a project asset in your script. The asset attribute also supports the `@resource` tag which limits the attribute to assets of a particular type, e.g. 'texture', 'material', 'model'.

The runtime type of an Asset attribute is `Asset`. You can reference the resource of an Asset attribute at runtime like so:

```javascript
/**
 * @attribute
 * @type {Asset}
 * @resource texture
 */
texture

initialize() {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
}
```

#### Color attribute

```javascript
/** @attribute */
color = new Color()
```

The color attribute shows a color picker when exposed in the editor. There are two options `rgb` and `rgba` depending on whether you wish to expose the alpha channel as well.

#### Curve attribute

```javascript
/**
 * @attribute
 * @type {Curve}
 * @color rgba
 */
wave
```

The curve attribute is used to express a value that changes over a time period. All curves are defined over the period 0.0 - 1.0. You can define multiple curves, for example if you wish to have a 3D position from a curve defined three curves for x,y,z using the `curves` property. There is also a special curve editor for modifying colors using the `color` property.


### Attribute arrays
In some cases you may want to expose a list of grouped attributes together. Let's say you have a script that generates a gradient, but rather than having a start and end point, you want to allow users to set an arbitrary amount of 'color stops' on the gradient. In this case you can an array qualifier in a `@type` tag.

```javascript
/**
 * @attribute
 * @type {Color[]}
 */
gradientStops;
```

The `Color[]` declaration uses the [jsdoc type tag](https://jsdoc.app/tags-type) to declare that `gradientStops` is an array of `Colors`. The editor will interpret in this way, creating a controller that allows you to set multiple `Color` values in a list.

In your initialize or update loop, you can iterate over `gradientStops` as an array

```javascript
initialize(){
    this.gradientStops.forEach(color => {
        console.log('This is a Color class', color)
    })
}
```

### Enumerations

Sometimes you may want to constrain an attribute to a set of possible values. In this situation you can use the `@enum` tag. This uses an enumeration as a value for the attribute making the editor display a combo box constrained to the list of possible values

```javascript

/** @enum {number} */
class Lights {
    ON: 1,
    OFF: 0,
    UNKNOWN: 0.5
}

class MyScript extends Script {
    /**
     * @attribute
     * @type {Lights}
     */
    ambient = Lights.OFF
}
```

This uses the `Lights` class as an enumeration of possible values. The `@type {Lights}` indicates that `ambient` should only have a value listed in `Lights`. At author-time the editor will generate a drop-down control using the Lights enumeration keys as labels (ON/OFF/UNKNOWN) and setting the corresponding value on `ambient`. An enumerators values can only be numbers, strings, or booleans.

## Grouping Complex Attributes

In some situations you may want attributes that have a more complex nested structure. For example lets say you have a `GameLogic` Script with an enemy with the speed and power. Rather than declare the enemies attributes separately, it makes sense to semantically group them together.

### Inline

```javascript
class GameLogic extends Script {
    /** 
     * @attribute 
     * `power` and `speed` are exposed as sub attributes
     */
    enemy = { power: 10, speed: 3 }

    initialize(){
        console.log(this.enemy.speed) // 3
        console.log(this.enemy.power) // 10
    }
}
```

This defines `enemy` as as single 'complex attribute', in that it's an object containing sub-attributes. What this means ,is the editor will expose the enemy attribute with nested controllable power and speed sub-attributes. This provides a more flexible way to group relevant attributes together.

### Interface

However what if you also want to set constraints on those same sub-attributes. For example, you may want to limit the enemies power to a more sensible range. At this point you can abstract your enemy type into it's an interface.

```javascript
/** 
 * @interface 
 * Using the `@interface` tag on a class allows it to be used to group attributes
 */
class Enemy {
    /**
     * @range [0, 11]
     */
    power = 10;
    speed = 3
}

class GameLogic extends Script {
    /**
     * @attribute 
     * @type {Enemy}
     */
    enemy
}
```

This works exactly the same as the previous example, but this time you've also specifying that power should be constrained within the _0 - 11_ range. By separating `Enemy` into it's own interface you can set individual constraints on a sub-attributes.

:::tip
Declare complex attributes with the `@interface` tag on a class. Every [supported member](./#supported-types) becomes available as a sub-attribute
:::

:::warn
An interface should not contain any methods or code. It's simply used as a way to declare nested attributes. It should not be initialized in your code and will not be instantiated at runtime.
:::


### Complex arrays
You can of course use complex attributes as array, just like regular attributes. This means that your `GameLogic` script can use an array of enemies, each with their own controllable power and speed properties.

```javascript
class GameLogic extends Script {
    /**
     * @attribute
     * @type {Enemy[]}
     */
    enemies

    update(){
        this.enemies.forEach(({ power, speed }) => {
            this.updateEnemy(power, speed)
        })
    }
}
```

:::note
We currently do not support defining JSON attributes as children of other JSON attributes. You can only go 1 level deep when defining a JSON attribute.
:::
