---
title: Введение
template: usermanual-page.tmpl.html
position: 1
---

## Что такое PlayCanvas?

PlayCanvas is a visual development platform for interactive web content. Both the tools and the web apps you build are powered by HTML5. The platform is web hosted so there's nothing to install and you can access your work from any device that runs one of the supported web browsers.

## Процесс работы в PlayCanvas

Building 3D web apps with PlayCanvas is easy. To get the best out of PlayCanvas, you will need to write some code (specifically some Javascript, the language of the web). However, the PlayCanvas toolset is designed to allow you to visually edit your project and publish it with incredible simplicity.

### Create and upload assets

![assets][4]

PlayCanvas supports a wide variety of industry standard asset formats. For example, upload images, 3D models, audio files or custom text or binary file formats.

### Construct your scene

![scene][5]

The PlayCanvas Editor is a visual building tool which is used to construct scenes. Build a hierarchy of entities using built in components like 3D models, collision, particle effects and more.

### Add interactivity

![script][6]

Using web standard Javascript attach custom behaviors to your entities. Add interactivity on any scale from a simple click handler or orbit camera to a a full massively multi-player online game.

### Publish your application

![publish][7]

When you application is ready for sharing a simple one-click publish will get your application live on the internet hosted by PlayCanvas for free. Alternatively download your application for self-hosting on your own web server.

## Key Features

### Editor

The PlayCanvas Editor is a visual editing tool that lets you build scenes, applications and games in record time. Use the Editor to manage your project assets, to add interactivity and to communicate and work with your team. The Editor is collaborative in real-time which means you can immediately see changes made by your team and you can build and test your application across all devices instantly

<iframe width="560" height="315" src="https://www.youtube.com/embed/PS4oMLPyYfI" frameborder="0" allowfullscreen></iframe>

Find out more in the [editor][8] section.

### Assets

PlayCanvas is used to create and manage all the assets you need for your interactive web application. PlayCanvas accepts all major 3D file formats, plus upload images, audio and any other asset types you need.

Find out more in the [assets][9] section.

### Publishing

PlayCanvas provides instant and trouble free hosting for your WebGL application with single click. We also support instant download of your complete project ready to host on your own web server.

Ознакомьтесь с деталями в секции [публикации][1].

## Поддерживаемые браузеры

PlayCanvas изначально задумывался так, чтобы запускаться в браузере без использования каких-либо плагинов. Программный код клиента на 100% состоит из JavaScript и построен на базе HTML5 и связанных API (таких как WebGL). Почему это было важно?

* Мобильные телефоны и планшеты не позволяют установку плагинов, а поддержка HTML5 в них все лучше и лучше.
* Веб-приложения, написанные на PlayCanvas, запускаются без необходимости установки или загрузки плагина.
* Веб-приложения, написанные на PlayCanvas, запускаются внутри стандартного [DOM][2]-элемента (canvas), так что вы можете разместить их на странице и трансформировать при помощи CSS.
* Отсутствие зависимости на стороннюю технологию плагина, которая может измениться со временем. Единственная зависимость — сам браузер.

At the time of writing, the browser requirements are currently as follows:

<table class="table table-striped table-bordered">
    <tr><th>Browser</th><th>Version</th><th>Win</th><th>MacOS X</th><th>Linux</th><th>Chrome OS</th><th>Android</th><th>iOS</th></tr>
    <tr><td style="text-align:center"><a href="https://www.google.com/chrome/">Chrome</a></td><td style="text-align:center">9.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.mozilla.org/firefox/">Firefox</a></td><td style="text-align:center">4.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/en-us/download/internet-explorer.aspx">IE</a></td><td style="text-align:center">11.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/edge">Edge</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.apple.com/safari/">Safari</a></td><td style="text-align:center">8.0+</td>
        <td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.opera.com/">Opera</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td>
    </tr>
</table>

Если вы сомневаетесь поддерживает ли ваш браузер WebGL (технология, необходимая для запуска PlayCanvas), посетите [эту страницу][3]. Если вы видите вращающийся куб — у вас все настроено!

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: https://get.webgl.org/
[4]: /images/user-manual/introduction-assets.jpg
[5]: /images/user-manual/introduction-scene.jpg
[6]: /images/user-manual/introduction-script.jpg
[7]: /images/user-manual/introduction-published.jpg
[8]: /user-manual/designer
[9]: /user-manual/assets

