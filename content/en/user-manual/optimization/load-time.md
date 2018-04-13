---
title: Optimizing Load Time
template: usermanual-page.tmpl.html
position: 5
---

Optimizing isn't just related to improving frame rate. Fast load times are also critical. The faster your app loads, the more likely your users will stick around to experience it. Here are some tips to achieve super-fast load times:

* In general, prefer JPG format for textures over PNG. Exceptions are when you require an alpha channel or when JPG compression produces noticeable artifacts (with normal maps or gloss maps, for example).
* Look for opportunities to downsample certain texture images. For example, a 2048x2048 texture that is used on a small graphical object may look almost exactly the same at 1024x1024 or even 512x512.
* Don't preload assets which can be loaded asynchronously. For example, it may not be necessary for your game music to play immediately at game start, so consider unchecking the Preload option for that asset in the Inspector panel.
* If you have a prefiltered cubemap and are not displaying the top-level mipmap for the skybox, you can uncheck preload for all the 6 face images.
* Ensure that imported models only have the vertex attributes that you need. For example, if your model has a second set of UVs but doesn't use them or if it has all-white vertex colors, go back to the modelling application and delete those attributes.
* Use the Networking panel in Chrome Dev Tools (or the equivalent in other browsers) to sort loaded assets by size and look for anything that stands out. Look for assets that are not used and could be deleted. Look for assets that are essentially duplicates and delete them.
* Using PlayCanvas' built-in physics engine incurs an additional download cost of 379KB. If you are using the physics engine to solve very simple problems, consider rolling an alternative solution that doesn't incur the download penalty.
* If you self-host your PlayCanvas app, be sure to configure your web server to serve files with GZIP compression. In particular, JSON and JS files.
