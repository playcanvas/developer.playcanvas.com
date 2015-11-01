---
title: Lights
template: usermanual-page.tmpl.html
position: 2
---

In the real world, the environment around you is lit from many sources. The Sun, street lights, TV screens and so on. In a PlayCanvas scene, you have the ability to set up a number of different types of light sources that approximate the different types of light we find in reality.

There are three types of light in PlayCanvas:

* Directional lights
* Point lights
* Spot lights

## Directional Lights

The most familiar light source to us is the Sun. Because the Sun is so far from Earth, light that hits the surface of our planet can be approximated as travelling in a single direction. In PlayCanvas, this type of light source is called a Directional light.

When unselected, a directional light is represented by the following icon in the Editor's 3D view:

![Directional light icon][1]

Click this icon to select the light in the Hierarchy and Inspector panels. 

A directional light lights an object like this:

![Directional light][2]

Directional lights are the fastest to process by the engine in terms of performance.

## Point Lights

Point lights are light sources that emit light from a single point in all directions. Examples of this type of light are an unshaded light bulb or candlelight.

When unselected, a point light is represented by the following icon in the Editor's 3D view:

![Point light icon][3]

Click this icon to select the light in the Hierarchy and Inspector panels. 

A point light lights an object like this:

![Point light][4]

Point lights are more costly than directional lights but faster to process than spot lights.

## Spot Lights

Spot lights, like point lights, emit light from a single point in space. However, the light from the spot light is constrained to a cone shape. Examples of a spot light would be a torch or the light from a lighthouse.

When unselected, a spot light is represented by the following icon in the Editor's 3D view:

![Spot light icon][5]

Click this icon to select the light in the Hierarchy and Inspector panels. 

A spot light lights an object like this:

![Spot light][6]

Spot lights are the most costly type of light so use them sparingly.

[1]: /images/user-manual/graphics/lights/directional_icon.jpg
[2]: /images/user-manual/graphics/lights/directional.jpg
[3]: /images/user-manual/graphics/lights/point_icon.jpg
[4]: /images/user-manual/graphics/lights/point.jpg
[5]: /images/user-manual/graphics/lights/spot_icon.jpg
[6]: /images/user-manual/graphics/lights/spot.jpg
