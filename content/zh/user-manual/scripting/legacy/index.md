---
title: 遗留脚本
template: usermanual-page.tmpl.html
position: 10
---

这是一份遗留脚本系统的文档。无论是新的项目还是旧的项目都是使用遗留脚本系统。当你创建一个新的项目的时候，会有一个选项供你选择使用哪一个脚本系统。

通常，我们会推荐你使用新的脚本系统。但是，对于有些使用案例来说，这个遗留脚本系统仍然是必需的。如果你需要以下功能，你可以使用遗留脚本系统：

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

