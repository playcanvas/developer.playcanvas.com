---
title: Lights
template: usermanual-page.tmpl.html
position: 1
---

In the real world, the environment around you is lit from many sources. The Sun, street lights, TV screens and so on. In a PlayCanvas scene, you have the ability to set up a number of different types of light sources and the shape of the light source to approximate the different types of light we find in reality. 

Descriptions of each light type and light source shape are below and examples of different combinations of light types and given in [table](#use-cases) below.

## Light Types

There are three types of light in PlayCanvas:

* Directional lights
* Omni lights
* Spot lights

### Directional Lights

The most familiar light source to us is the Sun. Because the Sun is so far from Earth, light that hits the surface of our planet can be approximated as travelling in a single direction. In PlayCanvas, this type of light source is called a Directional light.

When unselected, a directional light is represented by the following icon in the Editor's 3D view:

![Directional light icon][1]

Click this icon to select the light in the Hierarchy and Inspector panels.

A directional light lights an object like this:

![Directional light][2]

### Omni Lights

Omni lights are light sources that emit light in all directions. An example of this type of light source is a candle and other examples can be seen in the [table](#use-cases) below.

When unselected, a omni light is represented by the following icon in the Editor's 3D view:

![Omni light icon][3]

Click this icon to select the light in the Hierarchy and Inspector panels.

An omni light lights an object like this:

![Omni light][4]

### Spot Lights

Spot lights, like omni lights, emit light in all directions. However, the light from the spot light is constrained to a cone shape.

When unselected, a spot light is represented by the following icon in the Editor's 3D view:

![Spot light icon][5]

Click this icon to select the light in the Hierarchy and Inspector panels.

A spot light lights an object like this:

![Spot light][6]

## Light Shapes

There are four light source shapes:

* Punctual
* Rectangle
* Disk
* Sphere

### Punctual

The punctual light source shape is an infinitesimally small point. This is the default light source shape and is a less physically correct, but relatively low cost approximation of a light source. The other light source shapes are more costly to render but will give more correct lighting and specular reflections.

### Rectangle

The rectangle light source shape is a flat 4 sided shape with a specified width and height.

### Disk

The disk light source shape is a round and flat light shape with a specified radius. 

### Sphere

The sphere light source shape is ball shaped with a specified radius.

![Shapes][7]

## Use Cases

Below is a table of some common use cases each light source shape and light type:

| Shape/Type    | Punctual      | Rectangle               | Disk                  | Sphere              |
| ------------- |---------------| ------------------------| ----------------------| --------------------|
| Directional   | sun           | x                       | sun or moon           | sun or moon         |
| Omni          | unshaded bulb | x                       | x                     | unshaded round bulb |
| Spot          | torch         | tv screen               | shaded bulb           | shaded round bulb   |

x = no common use cases - but still can be used for application/game specific lighting effects.

## Performance Considerations

Light sources with Rectangle, Disk and Sphere shapes do cost more to render than Punctual lights, so use Punctual light source shapes if you have relatively small light sources or do not have reflective surfaces where Punctual lights would appear visibly incorrect.

[1]: /images/user-manual/graphics/lights/directional_icon.jpg
[2]: /images/user-manual/graphics/lights/directional.jpg
[3]: /images/user-manual/graphics/lights/point_icon.jpg
[4]: /images/user-manual/graphics/lights/point.jpg
[5]: /images/user-manual/graphics/lights/spot_icon.jpg
[6]: /images/user-manual/graphics/lights/spot.jpg
[7]: /images/user-manual/graphics/lights/shapes.jpg
