---
title: Scripting
sidebar_position: 11
---

### Making your projects interactive

Scripts are re-usable pieces of code that interactivity to your project. Conceptually they're attached to an entity and define a specific behavior or operation.

For example, this `Rotate` script rotates an entity by 10° every second.

```javascript
import { Script } from 'playcanvas';

export class Rotate extends Script {
    update(dt) {
        this.entity.rotate(0, 10 * dt, 0);
    }
}
```

In the example above, the  `update()` method is called every frame. This is one of the [life-cycle](./anatomy.md) methods a script can define. It allows your script to hook into various changes in your application.

:::tip
A **Script** is a re-usable piece of logic attached to an **Entity** within a scene.
:::

Scripts can be attached to multiple entities within a scene. The simply define a set of behavior without necessarily specifying the entities it should apply to. This separation allows you to create re-usable behaviors across your project.

Find out how to [create a new script](./creating-new.md) and attach it to an entity.
