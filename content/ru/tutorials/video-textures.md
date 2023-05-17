---
title: Видео текстуры
layout: tutorial-page.hbs
tags: video, textures
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/6wt5T87E/" title="Video Textures"></iframe>

Попробуйте из редактора в [учебном проекте.][1]

В этом проекте создается текстура во время выполнения, загружается и воспроизводится видеофайл, а затем видео рендерится в текстуру. Эта текстура затем применяется к модели и используется в сцене.

Этот скрипт выполняет следующие функции:

* Создание новой текстуры
* Создание элемента HTML Video и воспроизведение видео
* Применение новой текстуры к материалу на модели телевизора
* Обновление текстуры с данными видео каждый кадр

```javascript
var VideoTexture = pc.createScript('videoTexture');

VideoTexture.attributes.add('videoAsset', {
    title: 'Видео Asset',
    description: 'MP4 видео asset для воспроизведения на этой видео текстуре.',
    type: 'asset'
});

VideoTexture.attributes.add('videoUrl', {
    title: 'URL видео',
    description: 'URL для использования, если не выбран видео asset',
    type: 'string'
});

VideoTexture.attributes.add('playEvent', {
    title: 'Событие воспроизведения',
    description: 'Событие, которое срабатывает, как только видео текстура готова к воспроизведению.',
    type: 'string',
    default: ''
});

// инициализация кода, вызываемого один раз для каждой сущности
VideoTexture.prototype.initialize = function() {
    var app = this.app;

    // Создание HTML Video Element для воспроизведения видео
    var video = document.createElement('video');
    video.loop = true;

    // атрибут muted необходим для автоматического воспроизведения видео
    video.muted = true;

    // критично для iOS, иначе видео не будет воспроизводиться сразу, и будет отображаться на весь экран при воспроизведении
    video.playsInline = true;

    // необходимо, потому что видео размещается на другом сервере url
    video.crossOrigin = "anonymous";

    // автоматическое воспроизведение видео
    video.autoplay = true;

    // воспроизведение видео текстуры на iOS требует добавления видео в DOMParser
    // с размерами видео не менее 1x1
    var style = video.style;
    style.width = '1px';
    style.height = '1px';
    style.position = 'absolute';
    style.opacity = '0';
    style.zIndex = '-1000';
    style.pointerEvents = 'none';

    document.body.appendChild(video);

    // Создание текстуры для хранения данных кадров видео
    this.videoTexture = new pc.Texture(app.graphicsDevice, {
        format: pc.PIXELFORMAT_R8_G8_B8,
        minFilter: pc.FILTER_LINEAR_MIPMAP_LINEAR,
        magFilter: pc.FILTER_LINEAR,
        addressU: pc.ADDRESS_CLAMP_TO_EDGE,
        addressV: pc.ADDRESS_CLAMP_TO_EDGE,
        mipmaps: true
    });
    this.videoTexture.setSource(video);

    video.addEventListener('canplaythrough', function (e) {
        app.fire(this.playEvent, this.videoTexture);
        video.play();
    }.bind(this));

    // установка источника видео
    video.src = this.videoAsset ? this.videoAsset.getFileUrl() : this.videoUrl;

    document.body.appendChild(video);
    video.load();

    this.on('destroy', function() {
        this.videoTexture.destroy();
        video.remove();
    }, this);
};

// код обновления, вызываемый каждый кадр
VideoTexture.prototype.update = function(dt) {
    // Передача последнего видео кадра в видео текстуру
    this.videoTexture.upload();
};
```

[1]: https://playcanvas.com/project/405850

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/playcanvas/engine/issues).

# Руководства

- [Tutorial Thumbnail](https://developer.playcanvas.com/en/tutorials/thumbnail/)
- [Entity](https://developer.playcanvas.com/en/tutorials/entity/)
- [Material Asset](https://developer.playcanvas.com/en/tutorials/material-asset/)
- [Material Inspector](https://developer.playcanvas.com/en/tutorials/material-inspector/)
- [Shader Editor](https://developer.playcanvas.com/en/tutorials/shader-editor/)
- [Node Inspector](https://developer.playcanvas.com/en/tutorials/node-inspector/)
- [Texture Inspector](https://developer.playcanvas.com/en/tutorials/texture-inspector/)
- [Graph Inspector](https://developer.playcanvas.com/en/tutorials/graph-inspector/)

# Редакторы

- [Asset](https://developer.playcanvas.com/en/user-manual/assets/)
- [Graph Editor](https://developer.playcanvas.com/en/user-manual/graphs/)
- [Assets](https://developer.playcanvas.com/en/user-manual/assets/assets/)
