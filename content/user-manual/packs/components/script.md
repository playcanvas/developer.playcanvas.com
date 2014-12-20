---
title: Script
template: page.tmpl.html
position: 10
---

The 'script' component enables an entity to run user-supplied scripts. In this way, the user can write script (using the JavaScript language) that runs when the entity is instantiated and updated on a per-frame basis.

![Component Interface](/images/platform/component_script.png)

To assign a script, type its name into the URL box. For example, if you want to create a script called car.js, type car.js into the box and hit ENTER. This will create a script block below. If you click the hyperlinked script name, it will open in the PlayCanvas Code Editor. If you type a name of an existing script, autocomplete should activate and again, just press ENTER to add the script to the component.

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If checked, all of the assigned scripts will have their update functions called every frame.</td></tr>
</table>

## Scripting Interface

The script component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.ScriptComponent.html
