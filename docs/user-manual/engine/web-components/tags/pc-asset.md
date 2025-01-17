---
title: <pc-asset>
---

The `<pc-asset>` tag is used to define an asset.

:::note

* It must be a direct child of [`<pc-app>`](../pc-app).

:::

## Attributes

| Attribute | Description |
| --- | --- |
| `id` | The ID of the asset. This is used by other tags (such as [`<pc-sky>`](../pc-sky)) to reference this asset. |
| `src` | The path to the asset. |
| `preload` | Valueless attribute. If present, the asset is loaded immediately. |
| `type` | The type of asset. If not specified, the type is inferred from the file extension. Can be: `audio`, `binary`, `css`, `container`, `gsplat`, `html`, `json`, `script`, `shader`, `text`, `texture`. |

## Example

```html
<pc-app>
    <pc-asset id="checkerboard" src="assets/textures/checkerboard.png" preload></pc-asset>
</pc-app>
```

## JavaScript Interface

You can programmatically create and manipulate `<pc-asset>` elements using the [AssetElement API](https://api.playcanvas.com/classes/EngineWebComponents.AssetElement.html).
