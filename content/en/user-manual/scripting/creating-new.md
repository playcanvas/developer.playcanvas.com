---
title: Creating and attaching scripts
template: usermanual-page.tmpl.html
position: 1
---

## Creating a new script

To create a new script use the Asset Panel and select New Script

![New Script][0]

## Attaching a script to an Entity

<img src="/images/user-manual/scenes/components/component-script.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

Script Components are attached to Entities in the same way as all other Components using the *Add Component* button in the Entity inspector.

Once you have added a Script Component you can specify which javascript files to load. Use the Add Script button to pick scripts from your asset panel. Or drag and drop a script from the asset panel onto the component.

If you are using the PlayCanvas code repository to store your code, you can edit code in the PlayCanvas code editor, click a script's name below the URL input box.

<div class="alert alert-info">
If you are using Github or Bitbucket you can not edit you scripts in PlayCanvas, you must make your commits through your source control system.
</div>

A script component can load multiple script files, just add multiple scripts to the component. The order in which you add your scripts on a Script Component is the order in which the scripts are going to be initialized and updated. If you want to change the order of a script, click on the Up - Down arrows next to the Script's title. To remove a script click on the X button.

## Using Script Priorities

The second way to use a script in your application is to add them to the script priority list. This will load your script up front, before the rest of your application. See the [Script Priorities][4] page.

[0]: /images/user-manual/new_script.jpg
[2]: /user-manual/scripting/workflow
[3]: /images/platform/component_script.png "Add urls of scripts to the script component"
[4]: /user-manual/scripting/script-priorities
