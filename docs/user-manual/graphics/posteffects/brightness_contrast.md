---
title: Brightness-Contrast Effect
sidebar_position: 2
---

The brightness-contrast effect allows you to modify the brightness and contrast of the rendered image.

Here is an image without the effect:

![Image without effect][1]

And the same image with the effect applied and changes to brightness and contrast:

![Image with effect][2]

The built-in brightness-contrast effect has the following attributes:

* **Brightness**: The brightness of the image. Ranges from -1 to 1 (-1 is solid black, 0 no change, 1 solid white).
* **Contrast**: The contrast of the image. Ranges from -1 to 1 (-1 is solid gray, 0 no change, 1 maximum contrast).

Find the post-processing effect script on [GitHub][3].

[1]: /images/platform/posteffects/without_effects.png
[2]: /images/platform/posteffects/with_brightness_contrast.png
[3]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-brightnesscontrast.js
