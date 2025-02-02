---
title: Adding Behavior with Scripts
sidebar_position: 3
---

Scripts add custom behaviors to entities in your PlayCanvas Web Components app.

Let's consider a simple script that rotates an entity over time:

```javascript title="rotate-script.mjs"
export default class RotateScript {
    update(dt) {
        // Rotate the entity 90 degrees per second around the world-space Y axis
        this.entity.rotate(0, dt * 90, 0);
    }
}
```

## Loading Scripts

Scripts are loaded via the [`<pc-asset>`](../tags/pc-asset) tag:

```html
<pc-asset src="path/to/rotate-script.mjs"></pc-asset>
```

Then attach it to an entity using [`<pc-scripts>`](../tags/pc-scripts) and [`<pc-script>`](../tags/pc-script):

```html
<pc-entity name="spinning cube">
    <pc-render type="box"></pc-render>
    <pc-scripts>
        <pc-script name="rotateScript"></pc-script>
    </pc-scripts>
</pc-entity>
```

:::important

The `name` attribute of `<pc-script>` must be the class name of the script converted to camel case. Camel case is a naming convention where words are concatenated without spaces, and each word after the first starts with an uppercase letter. So `RotateScript` becomes `rotateScript` in this example.

:::

## Passing Data to Scripts with Attributes

Our rotate script is currently hardcoded to rotate at 90 degrees per second. But what if we want to rotate at a different speed? And what if we want to rotate multiple entities at different speeds? This is where script attributes come in!

Let's update our script to accept a rotation speed as an attribute:

```javascript title="rotate-script.mjs" {2-6,10}
export default class RotateScript {
    /**
     * The speed of the rotation in degrees per second
     * @attribute
     */
    speed = 90;

    update(dt) {
        // Rotate the entity `speed` degrees per second around the world-space Y axis
        this.entity.rotate(0, dt * this.speed, 0);
    }
}
```

We can now pass configuration to our script using the `attributes` attribute:

```html {4-6}
<pc-entity name="fast spinning cube">
    <pc-render type="box"></pc-render>
    <pc-scripts>
        <pc-script name="rotateScript" attributes='{
            "speed": 180
        }'></pc-script>
    </pc-scripts>
</pc-entity>
```

:::important

The `attributes` attribute takes a JSON string. Because JSON requires properties to be enclosed in double quotes, you should enclose the JSON string in single quotes.

:::

As well as standard JavaScript types, you can pass script attribute values based on PlayCanvas types:

| PlayCanvas Type | Attribute Type | Description |
| --------------- | -------------- | ----------- |
| `Asset`         | `string`       | (`asset:` concatenated with a `pc-asset`'s `id` attribute) |
| `Entity`        | `string`       | (`entity:` concatenated with a `pc-entity`'s `id` attribute) |
| `Color`         | `string`       | (`color:` concatenated with 3 or 4 comma separated numbers for RGB or RGBA respectively) |
| `Vec2`          | `string`       | (`vec2:` concatenated with 2 comma separated numbers) |
| `Vec3`          | `string`       | (`vec3:` concatenated with 3 comma separated numbers) |
| `Vec4`          | `string`       | (`vec4:` concatenated with 4 comma separated numbers) |

[Read more](/user-manual/scripting/script-attributes) about Script Attributes.

## Using Ready Made Scripts from the Engine

Before you set about writing your own scripts, check to see whether the functionality you need is already available in the PlayCanvas Engine. The Engine ships with a library of useful scripts that you can use in your app. You can find them on [GitHub](https://github.com/playcanvas/engine/tree/main/scripts/esm) and they are used heavily in the [Web Component Examples](https://playcanvas.github.io/web-components/examples/).
