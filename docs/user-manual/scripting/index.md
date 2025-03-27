---
title: Scripting
sidebar_position: 9
---

### Making your projects interactive

Scripts are re-usable pieces of code that interactivity to your project. Conceptually they're attached to an entity and define a specific behavior or operation.

Scripts can be created using [ES Modules](./esm-scripts.md) or using the older [classic](./classic/script-attributes.md) scripts.

For example, this `Rotate` script rotates an entity by 10° every second.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="esm" groupId='script-code'>
<TabItem value="esm" label="ESM">

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
var Rotate = pc.createScript('Rotate');

Rotate.prototype.update = function(dt) {
    this.entity.rotate(0, 10 * dt, 0);
}
```

</TabItem>
</Tabs>

In the example above, the  `update()` method is called every frame. This is one of the [life-cycle](./anatomy.md) methods a script can define. It allows your script to hook into various changes in your application.

:::tip
A **Script** is a re-usable piece of logic attached to an **Entity** within a scene.
:::

Scripts can be attached to multiple entities within a scene. They simply define a set of behavior without necessarily specifying the entities it should apply to. This separation allows you to create re-usable behaviors across your project.

Find out how to [create a new script](./creating-new.md) and attach it to an entity.
