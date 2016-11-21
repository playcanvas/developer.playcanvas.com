---
title: 视频纹理
template: tutorial-page.tmpl.html
tags: video, textures
---

<iframe src="http://playcanv.as/p/6wt5T87E"></iframe>

在[教学项目][1]中尝试一下。

这个项目创建一个可在运行时改变的纹理，下载了可播放的视频文件，并渲染视频到纹理中。 然后将该纹理应用于模型并在场景中使用。

该脚本执行以下功能：

*创建新的纹理
*创建一个HTML视频元素并播放视频短片
*将新纹理应用于电视模型上的材质
*每帧更新带有视频数据的纹理

```javascript
var Videotexture = pc.createScript('videotexture');

Videotexture.attributes.add('materials', {
    type: 'asset',
    assetType: 'material',
    array: true
});

Videotexture.attributes.add('videoUrl', {
    type: 'string'
});

// initialize code called once per entity
Videotexture.prototype.initialize = function() {
    var app = this.app;

    // Create a texture to hold the video frame data
    var videoTexture = new pc.Texture(app.graphicsDevice, {
        format: pc.PIXELFORMAT_R5_G6_B5,
        autoMipmap: false
    });
    videoTexture.minFilter = pc.FILTER_LINEAR;
    videoTexture.magFilter = pc.FILTER_LINEAR;
    videoTexture.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
    videoTexture.addressV = pc.ADDRESS_CLAMP_TO_EDGE;

    // Create HTML Video Element to play the video
    var video = document.createElement('video');
    video.addEventListener('canplay', function (e) {
        videoTexture.setSource(video);
    });
    video.src = this.videoUrl;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.play();

    // Get the material that we want to play the video on and assign the new video
    // texture to it.
    for (var i = 0; i < this.materials.length; i++) {
        var material = this.materials[i].resource;
        material.emissiveMap = videoTexture;
        material.update();
    }

    this.videoTexture = videoTexture;

    this.upload = true;
};

// update code called every frame
Videotexture.prototype.update = function(dt) {
    // Upload the video data to the texture every other frame
    this.upload = !this.upload;
    if (this.upload) {
        this.videoTexture.upload();
    }
};
```

[1]: https://playcanvas.com/project/405850

