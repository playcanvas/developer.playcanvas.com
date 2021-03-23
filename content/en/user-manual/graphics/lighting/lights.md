---
title: Lights
template: usermanual-page.tmpl.html
position: 1
---

In the real world, the environment around you is lit from many sources. The Sun, street lights, TV screens and so on. In a PlayCanvas scene, you have the ability to set up a number of different types of light sources that approximate the different types of light we find in reality.

There are three types of light in PlayCanvas:

* Directional lights
* Omni lights
* Spot lights

## Directional Lights

The most familiar light source to us is the Sun. Because the Sun is so far from Earth, light that hits the surface of our planet can be approximated as travelling in a single direction. In PlayCanvas, this type of light source is called a Directional light.

When unselected, a directional light is represented by the following icon in the Editor's 3D view:

![Directional light icon][1]

Click this icon to select the light in the Hierarchy and Inspector panels.

A directional light lights an object like this:

![Directional light][2]

Directional lights are the fastest to process by the engine in terms of performance.

## Omni Lights

Omni lights are light sources that emit light in all directions. Examples of this type of light are an unshaded light bulb or candlelight.

When unselected, a omni light is represented by the following icon in the Editor's 3D view:

![Omni light icon][3]

Click this icon to select the light in the Hierarchy and Inspector panels.

An omni light lights an object like this:

![Omni light][4]

Omni lights are more costly than directional lights but faster to process than spot lights.

## Spot Lights

Spot lights, like point lights, emit light from a single point in space. However, the light from the spot light is constrained to a cone shape. Examples of a spot light would be a torch or the light from a lighthouse.

When unselected, a spot light is represented by the following icon in the Editor's 3D view:

![Spot light icon][5]

Click this icon to select the light in the Hierarchy and Inspector panels.

A spot light lights an object like this:

![Spot light][6]

Spot lights are the most costly type of light so use them sparingly.

There are four light source shapes:

* Punctual
* Rectangle
* Disk
* Sphere

## Punctual

The punctual light source shape is an intefissiemmally small point. This is the default light source shape.

## Rectangle

The rectangle light source shape is a flat 4 sided shape with a specified width and height. Examples of a rectangle shape light would be a TV screen.

## Disk

The disk light source shape is a round and flat light shape with a specified radius. Examples of a disk shape light would be a moon or sun.

## Sphere

The sphere light source shape is ball shaped with a specified radius. Examples of a sphere shape light would be a light bulb.

![Shapes][7]

[1]: /images/user-manual/graphics/lights/directional_icon.jpg
[2]: /images/user-manual/graphics/lights/directional.jpg
[3]: /images/user-manual/graphics/lights/point_icon.jpg
[4]: /images/user-manual/graphics/lights/point.jpg
[5]: /images/user-manual/graphics/lights/spot_icon.jpg
[6]: /images/user-manual/graphics/lights/spot.jpg
[7]: /images/user-manual/graphics/lights/shapes.jpg
