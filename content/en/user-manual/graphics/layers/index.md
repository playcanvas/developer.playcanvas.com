---
title: Layers
template: usermanual-page.tmpl.html
position: 4.5
---

## Layers Overview

Layers allow you to customize the render loop for your application. Using layers you can implement some advanced rendering features. For example:

* modify the order in which your meshes are rendered
* set cameras to render only some meshes
* set which lights affect which meshes

A PlayCanvas application is created with a default set of layers which are always present. You can create your own layers and re-order them to suit your particular requirements.

At a fundamental level a layer is list of meshes to render. Each layer is divided into two sub-layers: Opaque and Transparent. When a mesh is added to a layer the layer stores it in one of the two sub-layers, depending on whether the material on the mesh needs to render transparently or not. This is because transparent sub-layers are often sorted differently than opaque sub-layers.

## Rendering Order

There are two factors that determine the order in which meshes are rendered.

### Layer Composition

First is order of layers in the application. Each application contains a `pc.LayerComposition` object which is available in your application as `this.app.scene.layers`. The layer composition determines the order of all sub-layers. The ordering is based on the sub-layer not on the layer so that you can, for example, render all the opaque sub-layers first, then all the transparent sub-layers afterwards.

**Note**: Putting a model component inside a layer that is rendered after the world layer **will not** make the model render on top of everything in the world layer! The Standard Material used to render models has a property called `depthTest`. When this is true (the default) before each pixel of the model is rendered the GPU will test to see if there is something else in front if this pixel. Even if that pixel was drawn in an earlier layer depth test ensures that only visible pixels are drawn. If you wish to ignore the distance from the camera when rendering a mesh, disable `depthTest` in your material.

### Sort Modes

Each sub-layer has a sort mode. Every frame the meshes in a sub-layer are sorted according to its sort mode. This determines the order that the meshes are rendered in when the sub-layer is rendered.

* **Material / Mesh** (`pc.SORTMODE_MATERIALMESH`) - This is the default mode for opaque sub-layers. Mesh instances are sorted to minimize switching between materials and meshes to improve rendering performance.
* **Back-to-front** (`pc.SORTMODE_BACK2FRONT`) - This is the default mode for transparent sub-layers. Mesh instances are sorted back to front. This is the way to properly render many semi-transparent objects on different depth, one is blended on top of another.
* **Front-to-back** (`pc.SORTMODE_FRONT2BACK`) - Mesh instances are sorted front to back. Depending on GPU and the scene, this option may give better performance than `pc.SORTMODE_MATERIALMESH` due to reduced overdraw.
* **Manual** (`pc.SORTMODE_MANUAL`) - This is the default mode for UI or 2D layers. Mesh instances are sorted based on `drawOrder` property. The Element Component and Sprite Component should be placed in layers with this sort mode.
* **None** (`pc.SORTMODE_NONE`) - No sorting is applied. Mesh instances are rendered in the same order they were added to a layer.

## Default Layers

PlayCanvas applications are created with a set of default layers. You should leave these layers in place as some engine features will not function correctly if they are not present. They default order is below:

![Default Layers][1]

1. **World (Opaque)** - Used to render components that are not transparent and most opaque component meshes.
1. **Depth (Opaque)** - The depth layer is for advanced users only.
1. **Skybox (Opaque)** - Used to render the skybox. It is rendered after the World (Opaque) to reduce overdraw.
1. **World (Transparent)** - Used to render components that are transparent and other transparent component meshes.
1. **Immediate (Opaque)** - Used to render immediate mode meshes. e.g. `app.renderLine()`.
1. **Immediate (Transparent)** - Used to render immediate mode meshes. e.g. `app.renderLine()`.
1. **UI (Transparent)** - Used to render Element components. All Element components are transparent, so the Opaque sub-layer is not used.

## Using Custom Layers

The default layers are great for implementing the existing engine features but the real power comes from creating your own layers to customize the order in which your content is rendered.

### Create a layer

Layers are controlled from the **LAYERS** panel in the **Settings** section of the Editor.

![Creating a layer][2]

In the Layers section, type in the name of the layer that you wish to create and click **Add Layer**. Your new layer will appear in the list of available layers below the button.

### Setting the sort mode

![Edit a layer][3]

You can choose the sort mode for each sub-layer in the layer list. Expand your layer and choose the sort mode from the dropdown menu.

### Choosing the layer order

![Add layer][4]

Add a sub-layer to the layer composition by selecting **ADD SUBLAYER** and choosing which sub-layer you wish to add. Once your layer is in the Render Order list you can re-arrange the order by dragging each sub-layer up and down.

### Rendering entities in layers

Components that render meshes all have a `layers` property which is used to determine which layer and sub-layer the mesh should be added to. These components include: Model, Element, Sprite, Particle System. The Camera and Light components also have a `layers` property to determine which layers they render and light respectively.

![Layer Components][5]

*Note:* The model is assigned to the Test Layer. In order for it to be rendered, the camera must include Test Layer in it's layer list. In order for it to be lit, the light must include Test Layer in it's layer list too.

[1]: /images/user-manual/graphics/layers/default-layers.jpg
[2]: /images/user-manual/graphics/layers/new-layer.jpg
[3]: /images/user-manual/graphics/layers/edit-layer.jpg
[4]: /images/user-manual/graphics/layers/add-sub-layer.jpg
[5]: /images/user-manual/graphics/layers/test-layer-components.jpg
