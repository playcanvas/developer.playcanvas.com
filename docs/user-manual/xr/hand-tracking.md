---
title: Hand Tracking
sidebar_position: 6
---

If the platform supports [WebXR Hand Input][1], then an input source can have associated hand data, which is exposed as an [XrHand][2], and its data in the form of [XrFinger][3]s and [XrJoint][4]s for an application developer to use, such as wrist, fingers, joints, tips and events for detecting when hands lose/restore tracking.

## Model

Creating a basic hand model:

```javascript
const joints = [ ];
const hand = inputSource.hand;

if (hand) {
    for(let i = 0; i < hand.joints.length; i++) {
        const entity = new pc.Entity();
        entity.joint = hand.joints[i];
        entity.addComponent('render', { type: 'box' });
        parent.addChild(entity);
        joints.push(entity);
    }
}
```

## Updates

Every frame joint data can change position, rotation, and other details.

```javascript
for(let i = 0; i < joints.length; i++) {
    const entity = joints[i];
    const joint = entity.joint;
    const radius = joint.radius * 2;
    entity.setLocalScale(radius, radius, radius);
    entity.setPosition(joint.getPosition());
    entity.setRotation(joint.getRotation());
}
```

## Tracking

The tracking is a subject of reliability and how sophisticated underlying systems tracking is. But there might be still cases when tracking is not possible due to obstructions between cameras and hands, or when hands interlock in a complex way. While Computer Vision techniques are improving, when designing content with hands as an input source, their shortcomings should be taken into mind.

[1]: https://immersive-web.github.io/webxr-hand-input/
[2]: https://api.playcanvas.com/classes/Engine.XrHand.html
[3]: https://api.playcanvas.com/classes/Engine.XrFinger.html
[4]: https://api.playcanvas.com/classes/Engine.XrJoint.html
