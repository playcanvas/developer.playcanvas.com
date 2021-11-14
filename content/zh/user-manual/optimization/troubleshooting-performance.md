---
title: Troubleshooting Performance
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

## PlayCanvas and other WebGL applications does not perform as well as expected on Windows with Nvidia graphics cards

Many Windows PCs contain two graphics cards, an "Integrated" graphics card which is a lower powered GPU built onto the motherboard of the computer and an additional graphics card. Nvidia cards come with a control panel installed that lets the PC owner choose which graphics card is used to run which application. By default many PCs are set up to use the lower powered integrated graphics card to run web browsers like Google Chrome. In order to get the best performance out of WebGL applications it is important to ensure that the web browser is accelerated using the more powerful graphics card.

[1]: http://webglreport.com
[2]: https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists

