---
title: Script Attributes
template: usermanual-page.tmpl.html
position: 6
---

Script Attributes are a powerful feature that lets you expose values from your script files so that they appear in the PlayCanvas Editor. This means you can write code once, and then tweak values on different instances of an Entity to give them different properties.

## Declaring Script Attributes

Script Attributes are declared at the top of your script file using this format:

```javascript
pc.script.attribute(attributeName, attributeType, defaultValue, options);
```

In this example, we're declaring a property called `speed` which is a `number` and has a default value of `80`:

```javascript
pc.script.attribute('speed', 'number', 80);
```


## Getting Attributes into Editor

<img src="/images/user-manual/scenes/components/component-script-attributes.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

Once you've declared your attributes they must be available for the server to analyze. If you are using PlayCanvas to write your code then you don't need to do anything. If you are using an external code repository like Github or Bitbucket then you will need to make sure that the latest version of your [code is synced][1].

Once your code is on the PlayCanvas server then open the Editor and click the <img src="/images/user-manual/refresh-script-attributes.jpg" style="display: inline; vertical-align: middle;" /> button.

Refreshing attributes loads all your scripts and parses out any attributes that were declared. Then they are inserted into the script components that reference that script (and as such are accessible in your scripts as `this.attribute_name`) and are also exposed into the Editor.

In the Editor each script with attributes gets its own attribute block in the Attribute Editor, just like a Component.

## Types

A number of different types are supported, they are detailed below. Options are passed in a javascript object.

### Number

The value is an number.

#### Example

```javascript
pc.script.attribute('speed', 'number', 80, {
    min: 0,
    max: 100
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
    <tr>
        <td>description</td><td>The description to show in the Editor when the user hovers over the script attribute.</td>
    </tr>
    <tr>
        <td>min</td><td>The minimum value that is valid.</td>
    </tr>
    <tr>
        <td>max</td><td>The maximum value that is valid.</td>
    </tr>
    <tr>
        <td>step</td><td>The amount to increment the number by when clicking up/down in the Editor.</td>
    </tr>
    <tr>
        <td>decimalPrecision</td><td>The number of decimal places that are supported.</td>
    </tr>
</table>

### String

The value is a string

#### Example

```javascript
pc.script.attribute('title', 'string', 'Untitled', {
    displayName: "Title"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
</table>

### Boolean

The value is true or false.

#### Example

```javascript
pc.script.attribute('on', 'boolean', false, {
    displayName: "On"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
</table>

### Asset

The value is a reference to a list of Assets in the Project.

#### Example

```javascript
pc.script.attribute('sound', 'asset', [], {
    displayName: "Sound Asset"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
    <tr>
        <td>type</td><td>Limit the asset selection to a single Asset type.</td>
    </tr>
</table>

### Entity

The value is an Entity in the Hierarchy.

#### Example

```javascript
pc.script.attribute('myEntity', 'entity', null, {
    displayName: "Entity"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
</table>

### RGB Color

The value is a color with no alpha (transparency).

#### Example

```javascript
pc.script.attribute('color', 'rgb', [1,1,1], {
    displayName: "Color"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
</table>


### RGBA Color

The value is a color with alpha (transparency).

#### Example

```javascript
pc.script.attribute('color', 'rgba', [1,1,1,0.5], {
    displayName: "Color"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
</table>

### Vec2, Vec3, Vec4

The value is a Vector, an array of 2, 3 or 4 numbers.

#### Example

```javascript
pc.script.attribute('direction', 'vec2', [0,1], {
    displayName: "Vector 2"
});

pc.script.attribute('direction', 'vec3', [0,1,0], {
    displayName: "Vector 3"
});

pc.script.attribute('transform', 'vec4', [0,1,0,1], {
    displayName: "Vector 4"
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
</table>


### Enumeration

The value is one of a possible set of values. This will expose a dropdown list of items in the Editor. You can only choose one of the predefined choices.

#### Example

```javascript
pc.script.attribute('pet', 'enumeration', 0, {
    displayName: "Pet",
    enumerations: [{
       name: "Cat",
       value: 0
    }, {
       name: "Dog",
       value: 1
    }]
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr>
        <td>displayName</td><td>The name to show in the Editor.</td>
    </tr>
    <tr>
        <td>enumerations</td><td>This list of possible enumerations. Supplied as a list of objects with a `name` and a `value` property.</td>
    </tr>
</table>

### Curve

The value is a [pc.Curve][4] or a [pc.CurveSet][5] if there are multiple curves.

#### Example

```javascript
pc.script.attribute('speed', 'curve', null, {
    min: 0,
    max: 5
});
pc.script.attribute('position', 'curve', null, {
    curves: ['x', 'y', 'z']
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr><td>displayName</td><td>The name to show in the Editor.</td></tr>
    <tr><td>min</td><td>The minimum value for a curve.</td></tr>
    <tr><td>max</td><td>The maximum value for a curve.</td></tr>
    <tr><td>curves</td><td>An array of strings that define the number and name of each channel in a curve. This can take up to 4 strings.</td></tr>
</table>

### Color Curve

The value is a [pc.Curve][4] or a [pc.CurveSet][5] if there are multiple color channels.

#### Example

```javascript
pc.script.attribute('color', 'colorcurve', null, {
    type: 'rgba'
});
```

#### Options

<table class="table table-striped">
    <tr><th>Option</th><th>Description</th></tr>
    <tr><td>displayName</td><td>The name to show in the Editor.</td></tr>
    <tr><td>type</td><td>The type of the color curve. Can be one of 'r', 'g', 'b', 'rgb' or 'rgba'.</td></tr>
</table>

[1]: /user-manual/scripting/workflow
[2]: /images/scripting/refresh_attributes.png
[3]: /images/scripting/script_component_attribute.png
[4]: /engine/api/stable/symbols/pc.Curve.html
[5]: /engine/api/stable/symbols/pc.CurveSet.html
