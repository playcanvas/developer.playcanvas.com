---
title: Scripting
sidebar_position: 11
---

Scripts are how you make your PlayCanvas application interactive. They are written in regular **JavaScript** the same programming language that is used to program web pages.

You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which are often specific to your application or re-usable chunks that provide useful behaviors.

Generally you won't have to worry about the engine code, it's a single JavaScript file included into your application. If you're rewriting parts of the engine you probably don't need this introduction to scripting.

Here is an example of a simple script. It is called "rotate" and it rotates the entity that it is attached to by 10° every second.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Rotate extends Script {
    update(dt) {
        this.entity.rotate(0, 10 * dt, 0);
    }
}
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
var Rotate = pc.createScript("rotate");

Rotate.prototype.update = function (dt) {
    this.entity.rotate(0, 10*dt, 0);
};
```

</TabItem>
</Tabs>

Scripts are defined by the name given when they are created and they are attached to [Script Component][1] via the Editor or by adding a script component to an Entity in your code.

## Terminology

Lets define a few pieces of terminology.

* ***Script*** A script is a Javascript file that contains one or more definitions of Script Objects.
* ***Script Component*** The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object.
* ***Script*** A Script is a class whose lifecycle methods are called when attached to an entity. It's instantiated when it is added to an Entity.
* ***Script Instance*** A script instance is an instance of a Script. One script instance is created for every Entity that has a Script attached to a script component.

[1]: /user-manual/scenes/components/script/
