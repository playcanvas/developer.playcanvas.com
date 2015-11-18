---
title: 動画テクスチャー
template: tutorial-page.tmpl.html
position: 5
---

<iframe src="http://playcanv.as/p/NQ2f87MT"></iframe>

[チュートリアルプロジェクト][1]のEditorからお試しください。

このプロジェクトは、テクスチャとランタイムを作成し、動画ファイルをダウンロード及び再生し、テクスチャーに動画をレンダリングします。このテクスチャはモデルに適用され、シーンで使用されます。

スクリプトは次の機能を行います：

* 新しいテクスチャーを作成
* HTML動画要素を作成して動画を再生
* TVモデルの素材に新しいテクスチャーを適用
* 毎フレームにて動画データでテクスチャーを更新

~~~javascript~~~
pc.script.attribute('materials', 'asset', [], {
    type: 'material'
});
pc.script.attribute('videoUrl', 'string', "");

pc.script.create('videotexture', function (app) {
    // 新規のVideotextureインスタンスを作成
    var Videotexture = function (entity) {
        this.entity = entity;
    };

    Videotexture.prototype = {
        initialize: function () {
            // 動画フレームデータを保管するテクスチャーを作成
            var videoTexture = new pc.Texture(app.graphicsDevice, {
                format: pc.PIXELFORMAT_R5_G6_B5,
                autoMipmap: false
            });
            videoTexture.minFilter = pc.FILTER_LINEAR;
            videoTexture.magFilter = pc.FILTER_LINEAR;
            videoTexture.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
            videoTexture.addressV = pc.ADDRESS_CLAMP_TO_EDGE;

            // 動画を再生するHTML 動画要素を作成
            var video = document.createElement('video');
            video.addEventListener('canplay', function (e) {
                videoTexture.setSource(video);
            });
            video.src = this.videoUrl;
            video.crossOrigin = 'anonymous';
            video.loop = true;
            video.play();

            // 動画を再生させたい素材を取り、新しい動画テクスチャーを
            // 割り当てる
            for (var i = 0; i < this.materials.length; i++) {
                var material = app.assets.get(this.materials[i]).resource;
                material.emissiveMap = videoTexture;
                material.update();
            }

            this.videoTexture = videoTexture;

            this.upload = true;
        },

        update: function (dt) {
            // ひとつおきのフレームのテクスチャーに動画データをアップロード
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

