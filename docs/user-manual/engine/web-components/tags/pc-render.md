---
title: pc-render
---

The `pc-render` tag is used to define a render component that renders a 3D primitive.

:::note

* It must be a direct child of a [`pc-entity`](pc-entity.md).

:::

| Attribute | Description |
| --- | --- |
| `type` | The type of render component. Can be `box`, `capsule`, `cone`, `cylinder`, `plane` or `sphere`. |
| `cast-shadows` | Valueless attribute. If present, the render component casts shadows. |
| `receive-shadows` | Valueless attribute. If present, the render component receives shadows. |

## Example

```html
<pc-entity>
    <pc-render type="box" cast-shadows receive-shadows></pc-render>
</pc-entity>
```

## JavaScript Interface

You can programmatically create and manipulate `pc-render` elements using the [RenderComponentElement API](https://api.playcanvas.com/classes/EngineWebComponents.RenderComponentElement.html).
