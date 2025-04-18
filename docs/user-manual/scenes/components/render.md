---
title: Render
---

The render component enables an entity to render a primitive shape or a render asset.

The render component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the mesh instances referenced by the component will be added to the scene and rendered.

![Render component](/img/user-manual/scenes/components/component-render.png)

## Properties

| Property              | Description |
|-----------------------|-------------|
| Type                  | The type of the graphical object to be rendered. Can be: <ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Cone</li><li>Cylinder</li><li>Plane</li><li>Sphere</li></ul> |
| Asset                 | The render asset to be rendered by this render component. Only applies the type property is set to 'Asset'. Only a single render asset can be assigned to a render component. |
| Cast Shadows          | If enabled, the mesh instances rendered by this component will cast shadows onto other mesh instances in the scene. |
| Cast Lightmap Shadows | If enabled, the mesh instances rendered by this component will cast shadows into lightmaps. |
| Receive Shadows       | If enabled, the mesh instances rendered by this component will receive shadows cast by other mesh instances in the scene. |
| Static                | If the entity referencing this render component never moves, check this box as a hint to the engine to make certain optimizations. |
| Lightmapped           | If enabled, this component's mesh instances do not receive lighting from dynamic lights. Instead they receive lighting generated by lightmap-baking lights. |
| Custom AABB           | When enabled, a user provided bounding box will be used for visibility culling of the attached mesh instances. This is an optimization allowing an oversized bounding box to be specified for skinned characters in order to avoid per frame bounding box computations based on bone positions. |
| Batch Group           | The batch group that this component's mesh instances belong to. |
| Materials             | The material assets that will be used to render the mesh instances of this component. Each material corresponds to the respective mesh instance. |

## Scripting Interface

You can control a render component's properties using a [script component][2]. The render component's scripting interface is [here][3].

[2]: /user-manual/scenes/components/script
[3]: https://api.playcanvas.com/engine/classes/RenderComponent.html
