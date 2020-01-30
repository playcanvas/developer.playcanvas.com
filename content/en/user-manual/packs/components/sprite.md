---
title: Sprite
template: usermanual-page.tmpl.html
position: 16
---

The Sprite Component renders and animates [Sprite Assets][1] into the scene.

There are two types of sprite Simple and Animated.

## Simple Sprites

Simple Sprite Components display a single frame from an atlas

![Simple Sprite][2]

## Simple Sprite Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th></th><th>Description</th></tr>
    <tr><th>Type</th><th>Simple or Animated</th></tr>
    <tr><td>Sprite</td><td>The Sprite Asset to display</td></tr>
    <tr><td>Frame</td><td>The frame index of the Sprite to display.</td></tr>
    <tr><td>Color</td><td>A color to apply as a tint to the sprite.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the sprite.</td></tr>
    <tr><td>Flip X</td><td>Flip the rendered sprite horizontally.</td></tr>
    <tr><td>Flip Y</td><td>Flip the rendered sprite vertically.</td></tr>
    <tr><td>Layers</td><td>The Layers in which to render the sprite.</td></tr>
    <tr><td>Draw Order</td><td>The order in which this sprite is rendered. Lower numbers are rendered first.</td></tr>
    <tr><td>Batch Group</td><td>The Batch Group that this model belongs to. More on Batching [here][6].</td></tr>
</table>

## Animated Sprites

Animated Sprite Components have multiple Sprite Animation Clips attached which can play back a different Sprite Asset.

![Animated Sprite][3]

## Animated Sprite Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><th>Type</th><th>Simple or Animated</th></tr>
    <tr><td>Frame</td><td>The frame index of the Sprite to display.</td></tr>
    <tr><td>Color</td><td>A color to apply as a tint to the sprite.</td></tr>
    <tr><td>Opacity</td><td>The transparency of the sprite.</td></tr>
    <tr><td>Flip X</td><td>Flip the rendered sprite horizontally.</td></tr>
    <tr><td>Flip Y</td><td>Flip the rendered sprite vertically.</td></tr>
    <tr><td>Speed</td><td>Multiplier applied to the speed at which sprite animation clips on this sprite component are animated.</td></tr>
    <tr><td>Layers</td><td>The Layers in which to render the sprite.</td></tr>
    <tr><td>Draw Order</td><td>The order in which this sprite is rendered. Lower numbers are rendered first.</td></tr>
    <tr><td>Auto Play</td><td>The name of a sprite animation clip to play when the sprite is enabled.</td></tr>
</table>

## Sprite Animation Clip Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><th>Name</th><th>The name of the Sprite Animation Clip. Used to reference an individual clip.</th></tr>
    <tr><td>Loop</td><td>If true the animation clip will loop back to the start when it reaches the end.</td></tr>
    <tr><td>FPS</td><td>The speed at which the clip is played in Frames Per Second.</td></tr>
    <tr><td>Sprite</td><td>The Sprite Asset which is used to play this clip.</td></tr>
</table>

## Scripting Interface

You can control the properties of a Sprite component using a [script component][4]. The scripting interface for the Sprite component is [here][5].


[1]: /user-manual/assets/sprites
[2]: /images/user-manual/scenes/components/component-sprite-simple.jpg
[3]: /images/user-manual/scenes/components/component-sprite-animated.jpg
[4]: /user-manual/packs/components/script
[5]: /engine/api/pc.SpriteComponent.html
[6]: /user-manual/optimization/batching
