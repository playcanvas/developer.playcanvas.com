---
title: Bloom Effect
template: page.tmpl.html
position: 1
---

Bloom is a post-processing effect used to reproduce an imaging artifact of real-world cameras. The effect produces fringes (or feathers) of light extending from the borders of bright areas in an image, contributing to the illusion of an extremely bright light overwhelming the camera captuting the scene. (from [Wikipedia][wikipedia]).

Here is an image without bloom:

<img alt="Image without effect" src="/images/platform/posteffects/without_effects.png"></img>

and the same image with bloom applied:

<img alt="Image with effect" src="/images/platform/posteffects/with_bloom.png"></img>

The built-in bloom effect has the following attributes:
* **bloomIntensity**: The intensity of the effect
* **bloomThreshold**: Only pixels brighter than this threshold will be processed. Ranges from 0 to 1.
* **blurAmount**: Controls the amount of blurring.

[wikipedia]: http://en.wikipedia.org/wiki/Bloom_(shader_effect)