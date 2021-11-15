---
title: 视频纹理
template: tutorial-page.tmpl.html
tags: video, textures
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg
---

<iframe src="https://playcanv.as/p/6wt5T87E/"></iframe>

在[教学项目][1]中尝试一下。

这个项目创建一个可在运行时改变的纹理，下载了可播放的视频文件，并渲染视频到纹理中。 然后将该纹理应用于模型并在场景中使用。

该脚本执行以下功能：

*创建新的纹理
*创建一个HTML视频元素并播放视频短片
*将新纹理应用于电视模型上的材质
*每帧更新带有视频数据的纹理

```javascript
var VideoTexture = pc.createScript('videoTexture');

VideoTexture.attributes.add('video', {
    title: 'Video',
    description: 'MP4 video asset to play back on this video texture.',
    type: 'asset'
});
VideoTexture.attributes.add('playEvent', {
    title: 'Play Event',
    description: 'Event that is fired as soon as the video texture is ready to play.',
    type: 'string',
    default: ''
});

// initialize code called once per entity
VideoTexture.prototype.initialize = function() {
    var app = this.app;

    // Create HTML Video Element to play the video
    var video = document.createElement('video');
    video.loop = true;

    // muted attribute is required for videos to autoplay
    video.muted = true;

    // critical for iOS or the video won't initially play, and will go fullscreen when playing
    video.playsInline = true;

    // needed because the video is being hosted on a different server url
    video.crossOrigin = "anonymous";

    // iOS video texture playback requires that you add the video to the DOMParser
    // with at least 1x1 as the video's dimensions
    var style = video.style;
    style.width = '1px';
    style.height = '1px';
    style.position = 'absolute';
    style.opacity = '0';
    style.zIndex = '-1000';
    style.pointerEvents = 'none';

    document.body.appendChild(video);

    // Create a texture to hold the video frame data
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

    // set video source
    video.src = this.video ? this.video.getFileUrl() : this.videoUrl;

    document.body.appendChild(video);
    video.load();
};

// update code called every frame
VideoTexture.prototype.update = function(dt) {
    // Transfer the latest video frame to the video texture
    this.videoTexture.upload();
};
```

[1]: https://playcanvas.com/project/405850

