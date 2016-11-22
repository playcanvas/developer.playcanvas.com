---
title: Video Textures
template: tutorial-page.tmpl.html
tags: video, textures
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg
---

<iframe src="http://playcanv.as/p/6wt5T87E"></iframe>

Try it from the Editor in the [tutorial project.][1]

This project creates a texture and runtime, downloads and plays a video file and renders the video into the texture. This texture is then applied to a model and used in the scene.

This script performs the following functions:

* Create new Texture
* Create an HTML Video element and play the video
* Apply the new texture to the material on the TV model
* Update the texture with video data every frame

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

