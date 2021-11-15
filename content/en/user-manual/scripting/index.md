---
title: Scripting
template: usermanual-page.tmpl.html
position: 11
---

Scripts are how you make your PlayCanvas application interactive. They are written in regular **JavaScript** the same programming language that is used to program web pages.

You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which are often specific to your application or re-usable chunks that provide useful behaviors.

Generally you won't have to worry about the engine code, it's a single JavaScript file included into your application. If you're rewriting parts of the engine you probably don't need this introduction to scripting.

Here is an example of a simple script. It is called "rotate" and it rotates the entity that it is attached to by 10° every second.

```javascript
var Rotate = pc.createScript("rotate");

Rotate.prototype.update = function (dt) {
    this.entity.rotate(0, 10*dt, 0);
};
```

Scripts are defined by the name given when they are created and they are attached to [Script Component][1] via the Editor or by adding a script component to an Entity in your code.

## Terminology

Lets define a few pieces of terminology.

* ***Script*** A script is a Javascript file that contains one or more definitions of Script Objects.
* ***Script Component*** The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object.
* ***ScriptType*** A ScriptType is a JavaScript object created using the `pc.createScript` function. It is essentially a new class which will be instantiated when it is added to an Entity.
* ***Script Instance*** A script instance is an instance of a ScriptType. One script instance is created for every Entity that has a ScriptType attached to a script component.

[1]: /user-manual/packs/components/script/
