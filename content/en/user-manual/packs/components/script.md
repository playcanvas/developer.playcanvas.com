---
title: Script
template: usermanual-page.tmpl.html
position: 10
---

The 'script' component enables an entity to run user-supplied scripts. In this way, the user can write script (using the JavaScript language) that runs when the entity is instantiated and updated on a per-frame basis.

<img src="/images/user-manual/components/component-script.jpg"/>

To create a new script, click on the <span class="font-icon" style="font-size: 18px">&#58468;</span> button in the Assets Panel and select New Script. Then type the name of the script in the popup and hit Enter.

<img src="/images/user-manual/new_script.jpg"/>

You can then drag the new script on a script component or you can click the Add Script button in the script component Inspector and then select it from the Assets Panel.

To edit the script in the PlayCanvas Code Editor you can either click on the hyperlinked script name, or you can select the script from the Assets Panel and click Edit.

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Enabled</td><td>If checked, all of the assigned scripts will have their update functions called every frame.</td></tr>
    <tr><td>Script</td><td>Add scripts by typing in the name of a new or existing URL.</td></tr>
</table>

## Scripting Interface

The script component's scripting interface is [here][2].

[2]: /engine/api/stable/symbols/pc.ScriptComponent.html
