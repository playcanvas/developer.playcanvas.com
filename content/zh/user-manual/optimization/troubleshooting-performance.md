---
title: 性能故障排除
template: usermanual-page.tmpl.html
position: 8
---

这里有一些技巧可以帮助你排查常见的性能问题。

## PlayCanvas 和其他的 WebGL 应用在 IE 11 中运行十分缓慢

在某些计算机中，硬件的Internet Explorer 11无法使用GPU(图形处理器)做图形加速。在这种情况下，它会使用软件渲染器CPU渲染WebGL的内容。这将明显比使用GPU时减慢运行速度。不幸的是，这是硬件问题，没有变通的方式。唯一的解决方案是更新问题机上的图形驱动程序或硬件。

请访问 [http://webglreport.com][1] 以确认你正在使用图形渲染软件。如果IE 11正在使用渲染组件你将会看到 **主要性能警告 **这行的设置为**Yes**。

## PlayCanvas 和其他的 WebGL 应用在Google Chrome浏览器中运行缓慢

Chrome包含一个黑名单的GPU(图形处理器)和显卡驱动程序，它会阻止运行WebGL内容。 在这种情况下，Chrome将还原为使用软件渲染器渲染WebGL内容。 这将显着慢于使用GPU。 升级显卡驱动程序可能会提高性能。

你可以在这里查看黑名单卡片: [https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists][2]

要确认是否使用软件渲染器运行，请访问 [http://webglreport.com][1] 。 如果Chrome使用软件渲染器，您将看到“取消屏蔽渲染器”报告** SwiftShader **的行。

## PlayCanvas和其他WebGL应用程序不会在Firefox中加载

Firefox包含一个黑名单的GPU(图形处理器)和显卡驱动程序，它会阻止运行WebGL内容。 在这些情况下，Firefox不允许应用程序创建WebGL上下文，并且PlayCanvas应用程序无法启动。 有可能升级显卡驱动程序将使应用程序运行。

你可以在这里查看黑名单卡片: [https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists][2]

## PlayCanvas和其他WebGL应用程序在Windows上使用Nvidia显卡的性能不如预期

许多Windows PC包含两个显卡，一个“集成”图形卡，一个低功耗的GPU内置在计算机的主板和一个额外的显卡。 Nvidia卡配有一个控制面板，让PC所有者选择使用哪个显卡运行哪个应用程序。 默认情况下，许多PC设置为使用低功耗集成显卡运行Web浏览器，如谷歌浏览器。 为了在WebGL应用程序中获得最佳性能，重要的是确保使用更强大的图形卡加速Web浏览器。

[1]: http://webglreport.com
[2]: https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists

