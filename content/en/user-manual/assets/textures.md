---
title: Textures
template: usermanual-page.tmpl.html
position: 3
---

Textures assets are image files which are used as part of a [material][material] to give a 3D model a realistic appearance.

We accept a wide variety of image files as the source for a texture asset. After uploading, textures will be converted to a web-friendly format. Currently the conversion process is this:

* PNG files persist as PNG files. This preserves transparency.
* All other files are converted to JPEG files. This does not preserve transparency.

The width and height of an uploaded texture should ideally be a power of two. If this is not the case, the uploaded image is automatically resized to the nearest power of two in either dimension. Note that an uploaded texture image does not have to be square (with the width equalling the height). So a valid dimension could be 64x512 or 1024x256. If the uploaded image is greater than 2048 in width or height, the image will be resized down to 2048.

[material]: /user-manual/assets/materials
