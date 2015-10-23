---
title: Video Textures
template: tutorial-page.tmpl.html
position: 5
---

<iframe src="http://playcanv.as/p/NQ2f87MT"></iframe>

Try it from the Editor in the [tutorial project.][1]

This project creates a texture and runtime, downloads and plays a video file and renders the video into the texture. This texture is then applied to a model and used in the scene.

This script performs the following functions:

* Create new Texture
* Create an HTML Video element and play the video
* Apply the new texture to the material on the TV model
* Update the texture with video data every frame

~~~javascript~~~
pc.script.attribute('materials', 'asset', [], {
    type: 'material'
});
pc.script.attribute('videoUrl', 'string', "");

pc.script.create('videotexture', function (app) {
    // Creates a new Videotexture instance
    var Videotexture = function (entity) {
        this.entity = entity;
    };

    Videotexture.prototype = {
        initialize: function () {
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
                var material = app.assets.get(this.materials[i]).resource;
                material.emissiveMap = videoTexture;
                material.update();
            }

            this.videoTexture = videoTexture;

            this.upload = true;
        },

        update: function (dt) {
            // Upload the video data to the texture every frame
            this.upload = !this.upload;
            if (this.upload) {
                this.videoTexture.upload();
            }
        }
    };

    return Videotexture;
});
~~~

[1]: https://playcanvas.com/project/362226/overview/tutorial-video-textures
