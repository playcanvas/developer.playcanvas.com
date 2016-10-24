---
title: Troubleshooting Performance
template: usermanual-page.tmpl.html
position: 1
---

Here are some tips to help you uncover common performance problems

## PlayCanvas and other WebGL applications run very slowly in IE 11

On some computer hardward Internet Explorer 11 is not able to use the GPU (graphics processors) to do graphics acceleration. In these cases it will fall back to using a software renderer to render WebGL content. This will be significantly slower than using the GPU. Unfortunately, there are no work arounds to this as it is a hardware issue. The only solution to update graphics drivers or hardware on the problem machine.

To confirm if you are running using the software renderer, visit [http://webglreport.com][1]. If IE 11 is using the software renderer you will see the row for **Major Performance Caveat** is set to **Yes**.

## PlayCanvas and other WebGL applications run very slowly in Google Chrome

Chrome contains a blacklist of GPUs (graphics processors) and graphics card drivers which it will block from running WebGL content. In these cases Chrome will revert to using a software renderer to render WebGL content. This will be significantly slower than using the GPU. It is possible that upgrading graphics card drivers will improve performance.

You can view the blacklisted cards here: [https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists][2]

To confirm if you are running using the software renderer, visit [http://webglreport.com][1]. If Chrome is using the software renderer you will see the row for **Unmasked Renderer** reports **SwiftShader**.

## PlayCanvas and other WebGL applications do not load in Firefox

Firefox contains a blacklist of GPUs (graphics processors) and graphics card drivers which it will block from running WebGL content. In these cases Firefox not allow the application to create a WebGL context and the PlayCanvas application cannot start. It is possible that upgrading your graphics card drivers will enable the application to run.

You can view the blacklisted cards here: [https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists][2]

[1]: http://webglreport.com
[2]: https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists
