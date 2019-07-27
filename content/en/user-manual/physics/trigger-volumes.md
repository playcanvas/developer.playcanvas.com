---
title: Trigger Volumes
template: usermanual-page.tmpl.html
position: 3
---

Trigger volumes are static collision shapes which can fire events whenever a rigid body enters or leaves their volume. They can be useful to determine when a goal has been scored in a football match or when a race car has reached the finish line.

To create a trigger volume, add a [collision component][1] to an entity and configure its shape. Do not add a rigidbody component to your trigger volume entity.

![Trigger Volume][2]

To check whether a volume has been entered or exited by a rigid body based entity, you need a simple script:

```javascript
var TriggerVolume = pc.createScript('triggerVolume');

// initialize code called once per entity
TriggerVolume.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', function (entity) {
        console.log(entity.name + ' has entered trigger volume.');
    });
    this.entity.collision.on('triggerleave', function (entity) {
        console.log(entity.name + ' has left trigger volume.');
    });
};
```

[1]: https://developer.playcanvas.com/en/user-manual/packs/components/collision/
[2]: /images/user-manual/physics/trigger-volume.png
