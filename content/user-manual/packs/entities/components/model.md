---
title: Model Component
template: page.tmpl.html
skip: true
---

The 'model' component enables an entity to render a primitive shape or a model asset.

![Component Interface](/images/platform/component_model.png)

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of the model to be rendered. Can be:<ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Sphere</li><li>Cylinder</li><li>Cone</li></ul></td></tr>
    <tr><td>Asset</td><td>The model asset rendered by this model component. Only applies to models of type 'asset'. Only a single model can be rendered per model component.</td></tr>
    <tr><td>Cast Shadows</td><td>If enabled, the model rendered by this component will cast shadows onto other models in the scene.</td></tr>
    <tr><td>Receive Shadows</td><td>If enabled, the model rendered by this component will receive shadows cast by other models in the scene.</td></tr>
</table>

## Scripting Interface

You can control a model component's properties using a [script component][script_component]. The model component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.ScriptComponent.html
