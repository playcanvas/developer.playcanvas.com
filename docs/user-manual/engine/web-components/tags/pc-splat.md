---
title: pc-splat
---

The `pc-splat` tag is used to define a splat component.

:::note

* It must be a direct child of a [`pc-entity`](pc-entity.md).

:::

| Attribute | Description |
| --- | --- |
| `asset` | A string that should match the `id` of a [`pc-asset`](pc-asset.md) tag that has a type of `gsplat`. |
| `enabled` | Enabled state of the splat component. If not specified, `true` is used. |

## Example

```html
<pc-entity>
    <pc-splat asset="splat"></pc-splat>
</pc-entity>
```

## JavaScript Interface

You can programmatically create and manipulate `pc-splat` elements using the [GSplatComponentElement API](https://api.playcanvas.com/classes/EngineWebComponents.GSplatComponentElement.html).
