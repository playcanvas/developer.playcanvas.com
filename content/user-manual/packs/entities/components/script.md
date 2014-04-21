---
title: Script Component
template: page.tmpl.html
skip: true
---

The 'script' component enables an entity to run user-supplied scripts. In this way, the user can write script (using the JavaScript language) that runs when the entity is instantiated and updated on a per-frame basis.

![Component Interface](/images/platform/component_script.png)

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>URLs</td><td>The scripts that are executed for this entity. A .js extension is enforced. Absolute URLs are used for scripts hosted on servers other than playcanvas.com, otherwise, relative URLs are used.</td></tr>
</table>

## Scripting Interface

The script component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.ScriptComponent.html
