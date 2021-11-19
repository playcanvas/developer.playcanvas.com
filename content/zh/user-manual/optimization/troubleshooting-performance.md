---
title: 性能故障排除
template: usermanual-page.tmpl.html
position: 8
---

这里有一些技巧可以帮助你排查常见的性能问题。

## PlayCanvas 和其他的 WebGL 应用在 IE 11 中运行十分缓慢

On some computer hardware Internet Explorer 11 is not able to use the GPU (graphics processors) to do graphics acceleration. In these cases it will fall back to using a software renderer to render WebGL content. This will be significantly slower than using the GPU. Unfortunately, there are no workarounds to this as it is a hardware issue. The only solution is to update graphics drivers or hardware on the problem machine.

To confirm if you are running using the software renderer, visit [WebGL Report][1]. If IE 11 is using the software renderer you will see the row for **Major Performance Caveat** is set to **Yes**.

## PlayCanvas 和其他的 WebGL 应用在Google Chrome浏览器中运行缓慢

Chrome包含一个黑名单的GPU(图形处理器)和显卡驱动程序，它会阻止运行WebGL内容。 在这种情况下，Chrome将还原为使用软件渲染器渲染WebGL内容。 这将显着慢于使用GPU。 升级显卡驱动程序可能会提高性能。

You can view the blacklisted cards [here][2].

To confirm if you are running using the software renderer, visit [WebGL Report][1]. If Chrome is using the software renderer you will see the row for **Unmasked Renderer** reports **SwiftShader**.

## PlayCanvas和其他WebGL应用程序不会在Firefox中加载

Firefox包含一个黑名单的GPU(图形处理器)和显卡驱动程序，它会阻止运行WebGL内容。 在这些情况下，Firefox不允许应用程序创建WebGL上下文，并且PlayCanvas应用程序无法启动。 有可能升级显卡驱动程序将使应用程序运行。

You can view the blacklisted cards [here][2].

## PlayCanvas和其他WebGL应用程序在Windows上使用Nvidia显卡的性能不如预期

许多Windows PC包含两个显卡，一个“集成”图形卡，一个低功耗的GPU内置在计算机的主板和一个额外的显卡。 Nvidia卡配有一个控制面板，让PC所有者选择使用哪个显卡运行哪个应用程序。 默认情况下，许多PC设置为使用低功耗集成显卡运行Web浏览器，如谷歌浏览器。 为了在WebGL应用程序中获得最佳性能，重要的是确保使用更强大的图形卡加速Web浏览器。

[1]: https://webglreport.com/
[2]: https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists

