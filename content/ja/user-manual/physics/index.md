---
title: Physics
template: usermanual-page.tmpl.html
position: 9
---

PlayCanvas incorporates a physics engine. The physics engine can realistically control the motion of objects in your scene. If you think about it, a great many games rely on some form of physical simulation to enable gameplay. For example, consider the classic game Asteroids: the ship accelerates as its rockets fire, it has inertia, and asteroids will destroy it when they come into contact. Solving a simple case such as this is reasonably straighforward for a seasoned programmer, but a physics engine makes it a breeze for anybody.

## Rigid Bodies

More specifically, PlayCanvas exposes a rigid body physics engine. In other words, the engine simulates rigid bodies, where a rigid body is an idealised representation of an object that never deforms in any way. This approximation is sufficient to simulate most solid real world objects. Rigid bodies have a number of properties that influence how they move:

* Mass
* Restitution
* Friction
* Angular Factor
* Linear Factor

At any time, you can query (or even directly set) a body's velocity which takes two forms:

* Linear Velocity
* Angular Velocity

Bodies move in response to forces that are applied to them.

## Units of Measurement

By default, the PlayCanvas physics engine interprets 1 unit as 1 meter. Therefore, for objects to fall at a rate that appears to be physically accurate, you should ensure that your scenes size objects appropriately.

For example, if your game features a character that is 1.8m tall, he should be 1.8 units high in the Editor's 3D view.

## Gravity

Gravity is a constant force applied to all rigid bodies in your scene. By default, this is set to -9.81 in the world's negative Y axis (straight down, in other words). This default approximates Earth gravity. But you may want to increase or decrease this value. For example, for a game set in space, you will probably want to set gravity to zero. To edit the gravity applied to your scene, open the Scene Settings panel.

## Teleporting Rigid Bodies

By adding rigid body and collision components to an entity, you pass the responsibility for setting the position and orientation of that entity to the physics engine. This means that if you try to update the position or orientation of an entity in a script using the pc.Entity API, the functions will not have an effect. Instead, you must call the teleport function on the rigid body component which explicitly notifies the physics engine you want to momentarily update a rigid bodies position and/or orientation.

