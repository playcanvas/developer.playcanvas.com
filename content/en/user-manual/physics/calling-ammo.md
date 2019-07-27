---
title: Calling the ammo.js API
template: usermanual-page.tmpl.html
position: 4
---

The PlayCanvas integration with ammo.js does not expose the full capability of the ammo.js API. However, it is possible to call the ammo.js API directly from your PlayCanvas scripts.

PlayCanvas currently uses [this build][1] of ammo.js. The API exposed by this build can be found [here][2].

## Implementing Constraints

There are currently no PlayCanvas components which implement physics constraints (sometimes known as physics joints). However, it is easy to leverage the ammo.js API to create scripts that implement constraints.

Here is the script for a point-to-point constraint:

```javascript
var PointToPointConstraint = pc.createScript('pointToPointConstraint');

PointToPointConstraint.attributes.add('pivotA', {
    title: 'Pivot',
    description: 'Position of the constraint in the local space of this entity.',
    type: 'vec3',
    default: [0, 0, 0]
});
PointToPointConstraint.attributes.add('entityB', {
    title: 'Connected Entity',
    description: 'Optional second entity',
    type: 'entity'
});
PointToPointConstraint.attributes.add('pivotB', {
    title: 'Connected Pivot',
    description: 'Position of the constraint in the local space of entity B (if specified).',
    type: 'vec3',
    default: [0, 0, 0]
});
PointToPointConstraint.attributes.add('breakingThreshold', {
    title: 'Break Threshold',
    description: 'Maximum breaking impulse threshold required to break the constraint.',
    type: 'number',
    default: 3.4e+38
});
PointToPointConstraint.attributes.add('enableCollision', {
    title: 'Enable Collision',
    description: 'Enable collision between linked rigid bodies.',
    type: 'boolean',
    default: true
});
PointToPointConstraint.attributes.add('debugRender', {
    title: 'Debug Render',
    description: 'Enable to render a representation of the constraint.',
    type: 'boolean',
    default: false
});
PointToPointConstraint.attributes.add('debugColor', {
    title: 'Debug Color',
    description: 'The color of the debug rendering of the constraint.',
    type: 'rgb',
    default: [1, 0, 0]
});

// initialize code called once per entity
PointToPointConstraint.prototype.initialize = function() {
    this.createConstraint();

    this.on('attr', function(name, value, prev) {
        // If any constraint properties change, recreate the constraint
        if (name === 'pivotA' || name === 'entityB' || name === 'pivotB') {
            this.createConstraint();
        } else if (name === 'breakingThreshold') {
            this.constraint.setBreakingImpulseThreshold(this.breakingThreshold);
            this.activate();
        }
    });
    this.on('enable', function () {
        this.createConstraint();
    });
    this.on('disable', function () {
        this.destroyConstraint();
    });
    this.on('destroy', function () {
        this.destroyConstraint();
    });
};

PointToPointConstraint.prototype.createConstraint = function() {
    if (this.constraint) {
        this.destroyConstraint();
    }

    var bodyA = this.entity.rigidbody.body;
    var pivotA = new Ammo.btVector3(this.pivotA.x, this.pivotA.y, this.pivotA.z);
    if (this.entityB && this.entityB.rigidbody) {
        var bodyB = this.entityB.rigidbody.body;
        var pivotB = new Ammo.btVector3(this.pivotB.x, this.pivotB.y, this.pivotB.z);
        this.constraint = new Ammo.btPoint2PointConstraint(bodyA, bodyB, pivotA, pivotB);
    } else {
        this.constraint = new Ammo.btPoint2PointConstraint(bodyA, pivotA);
    }

    var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
    dynamicsWorld.addConstraint(this.constraint, !this.enableCollision);
    
    this.activate();
};

PointToPointConstraint.prototype.destroyConstraint = function() {
    if (this.constraint) {
        var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
        dynamicsWorld.removeConstraint(this.constraint);
        Ammo.destroy(this.constraint);
        this.constraint = null;
    }
};

PointToPointConstraint.prototype.activate = function() {
    this.entity.rigidbody.activate();
    if (this.entityB) {
        this.entityB.rigidbody.activate();
    }
};

// update code called every frame
PointToPointConstraint.prototype.update = function(dt) {
    if (this.debugRender) {
        // Note that it's generally bad to allocate new objects in an update function
        // but this is just for debug rendering and will normally be disabled
        var tempVecA = new pc.Vec3();
        this.entity.getWorldTransform().transformPoint(this.pivotA, tempVecA);
        this.app.renderLine(this.entity.getPosition(), tempVecA, this.debugColor);
        if (this.entityB) {
            this.app.renderLine(this.entityB.getPosition(), tempVecA, this.debugColor);
        }
    }
};
```

You can find a project that implements all of the constraint types from ammo.js [here][3].

You can access the ammo.js API to implement additional things like:

* Compound collision shapes
* Soft body simulation
* Vehicles

[1]: https://github.com/kripken/ammo.js/commit/dcab07bf0e7f2b4b64c01dc45da846344c8f50be
[2]: https://github.com/kripken/ammo.js/blob/dcab07bf0e7f2b4b64c01dc45da846344c8f50be/ammo.idl
[3]: https://playcanvas.com/project/618829/overview/physics-constraints