---
title: Legacy Scripting
template: usermanual-page.tmpl.html
position: 10
---

This is the documentation for the legacy script system. The legacy script system is still available for new and existing projects. When you create a new project you are given the choice over which script system you wish to use.

In general, we recommend you use the new script system. However, there are some use cases where the legacy script system is still required. Use the legacy script system if:

- you require the "local workflow". e.g. Editing scripts in text editor on your machine
- you require integration with a version control system like Git or Mercurial
- you have an existing project that you do not wish to recreate.


Below is the documentation for the legacy script system

---

Scripting is how you make your game interactive. Scripts are written in **JavaScript**. This is the programming language used by web pages everywhere.

You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, and implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which will often be specific to your application or re-usable chunks that provide useful behaviours.

Generally you won't have to worry about the engine code, it's a single JavaScript file included into your application via a `<script>` tag. If you're rewriting parts of the engine you probably don't need this introduction to scripting.

Scripts are individual JavaScript files, which are attached to Script [Components][1] on [Entities][2] via the PlayCanvas Editor. Generally, a script file should define a single JavaScript object which is instantiated once for each Entity that it is attached to.

**Note please make sure your scripts are not cached by the browser - otherwise you will not see the results of changes to your scripts. [See here.][3]**

## Terminology

First off, lets define a few pieces of terminology.

* ***Script*** A script is single JavaScript file which includes the correct JavaScript to define a script object
* ***Script Component*** The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object.
* ***Script Object*** A script object is a standard JavaScript object which is registered with the PlayCanvas engine and can be instantiated when a new script Component is created. There will generally only be a single script object of each type per application.
* ***Script Instance*** A script instance is script object which has been instantiated at runtime, using the `new` keyword in JavaScript. A script instance is created for every Entity that has the script attached.

[1]: /user-manual/packs/components/
[2]: /user-manual/packs/entities/
[3]: /user-manual/scripting/debugging/
