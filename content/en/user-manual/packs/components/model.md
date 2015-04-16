---
title: Model
template: page.tmpl.html
position: 7
---

The 'model' component enables an entity to render a primitive shape or a model asset.

<img src="/images/user-manual/components/component-model.jpg" style="width: 300px" />

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If checked, the model will be added to the scene and rendered.</td></tr>
    <tr><td>Type</td><td>The type of the model to be rendered. Can be:<ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Sphere</li><li>Cylinder</li><li>Cone</li></ul></td></tr>
    <tr><td>Asset</td><td>The model asset rendered by this model component. Only applies to models of type 'asset'. Only a single model can be rendered per model component.</td></tr>
    <tr><td>Cast Shadows</td><td>If enabled, the model rendered by this component will cast shadows onto other models in the scene.</td></tr>
    <tr><td>Receive Shadows</td><td>If enabled, the model rendered by this component will receive shadows cast by other models in the scene.</td></tr>
</table>

## Scripting Interface

You can control a model component's properties using a [script component][2]. The model component's scripting interface is [here][3].

[1]: /images/platform/component_model.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ScriptComponent.html
