---
title: Scripting
template: page.tmpl.html
position: 7
---

Scripting is how you make your game interactive. Scripts are written in **Javascript**. This is the programming language used by web pages everywhere.

You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, and implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which will often be specific to your application or re-usable chunks that provide useful behaviours.

Generally you won't have to worry about the engine code, it's a single javascript file included into your application via a `<script>` tag. If you're rewriting parts of the engine you probably don't need this introduction to scripting.

Scripts are individual javascript files, which are attached to Script [Components][components] on [Entities][entities] via the PlayCanvas Designer. Generally, a script file should define a single javascript object which is instantiated once for each Entity that it is attached to.

## Terminology

First off, lets define a few pieces of terminology.

* ***Script*** A script is single javascript file which includes the correct javascript to define a script object
* ***Script Component*** The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object.
* ***Script Object*** A script object is a standard javascript object which is registered with the PlayCanvas engine and can be instantiated when a new script Component is created. There will generally only be a single script object of each type per application.
* ***Script Instance*** A script instance is script object which has been instantiated at runtime, using the `new` keyword in javascript. A script instance is created for every Entity that has the script attached.

[application_context]: /engine/api/stable
[components]: /user-manual#gizmo
[entities]: /user-manual#entities
