---
title: Creating new scripts
template: usermanual-page.tmpl.html
position: 1
---

To create a new script use the Asset Panel and select New Script. You will be asked to enter a name for for your new script file.

![New Script][0]

Double-click the script asset in the panel to open it in the code editor.

![Code Editor][1]

## Attaching to a script component

The script component is created in the same way as other components. Once you have a script component you can select a script from your asset list.

![Select Script][2]

Scripts are shown by their name, when you select a script to add it to a component, the script content is parsed and any attributes that have been declared are exposed in the interface.

## Adding a script component at run time

If you want to dynamically add scripts while your application is running you can do so from the script component

```javascript
var entity = new pc.Entity();
entity.addComponent("script");
entity.script.create("rotate", {
    attributes: {
        speed: 20
    }
});
```

Note, that the "rotate" script should already have been loaded at this point. You can load a script using the Asset Registry's [load()][3] method.

To remove a script from a component use the `destroy` method

```javascript
entity.script.destroy("rotate");
```

[0]: /images/user-manual/scripting/new-script.jpg
[1]: /images/user-manual/scripting/code-editor.jpg
[2]: /images/user-manual/scripting/select-script.jpg
[3]: /api/pc.AssetRegistry.html#load
