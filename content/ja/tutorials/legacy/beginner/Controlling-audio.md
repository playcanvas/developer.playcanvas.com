---
title: オーディオの操作
template: tutorial-page-legacy.tmpl.html

---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/controllingAudio?overlay=false"></iframe>

*左右のカーソルキーを使用して音声を再生（右）または停止（左） *
*上下のカーソルキーで音声を一時停止（下）または再開（上）*
*使用されているフルコードはこのページの最下部からご確認ください。*

このチュートリアルでは、PlayCanvasで音声を再生および制御する方法を説明します。より制御しやすい機能やプロパティが存在します(ピッチコントロールなど)。詳細は[audio API リスト][1]からご確認ください。

##オーディオコマンド

エンティティのaudiosourceコンポーネントにアクセスするため、また、値に影響を与えるメイン音声コマンド：

~~~javascript~~~
this.entity.audiosource.play("swooop_theme");

this.entity.audiosource.pause();

this.entity.audiosource.unpause();

this.entity.audiosource.stop();
~~~
上記コードの順番：Editorのaudiosourceコンポーネントに添付されている音声ファイルをひとつ再生、エンティティから再生されている音声ファイルを一時停止、エンティティから再生されている音声ファイルを再開して音声プレイバックを停止。

<div class="alert alert-warning">
ひとつの音声ファイルに一度に添付できるaudiosourceコンポーネントは一つです(つまり一つのエンティティ)。階層全体を利用して、必要に応じて3D空間内にエンティティを構築し、一つのオブジェクトから複数の音声を再生して正しい3D音声を再現してください。例えば、親である「人間」エンティティと、広い範囲の子エンティティ：声を再現するため、キャラクターの口元にひとつのエンティティとaudiosourceコンポーネントを設置。足音を再現するため、キャラクターの足元にひとつのエンティティとaudiosourceコンポーネントを設置。
</div>

##一般的な設定
音声ファイルを.mp3 形式でアップロード (.ogg ファイルも使えます)。球体が作成され、audiosourceコンポーネントが添付される。音声ファイルがaudiosource設定内のアセットリストに追加された。audiosource設定のアクティベートオプションが無効になったので、読み込みと同時にファイルが再生されなくなった。デフォルトカメラにaudiolistenerコンポーネントが追加された。controllingAudioシーンの[完全なEditorシーンやスクリプトにアクセス][2]。

<img src="/images/tutorials/audio/audiosource-settings.jpg" />

PlayCanvas appで使用される完全なコードは次の通り：

~~~javascript~~~
pc.script.create('audioHandler', function (app) {
    // Creates a new AudioHandler instance
    var AudioHandler = function (entity) {
        this.entity = entity;
    };

    AudioHandler.prototype = {
        // 最初の更新の前に、全てのリソースが読み込まれた後に呼ばれる
        initialize: function () {
            this.audio = app.root.findByName('AudioSphere');
            this.playing = false;
            this.paused = false;
            //this sets up an event listener
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        },

        // 毎フレーム呼ばれる。dtは秒単位の最後の更新からの時間。
        update: function (dt) {

             if (app.keyboard.wasPressed(pc.KEY_UP) && this.paused === true) {
                this.audio.audiosource.unpause();
                this.audio.setLocalScale(4, 4, 4);
                this.playing = true;
                this.paused = false;
            }

            if (app.keyboard.wasPressed(pc.KEY_DOWN) && this.playing === true) {
                this.audio.audiosource.pause();
                this.audio.setLocalScale(2, 2, 2);
                this.playing = false;
                this.paused = true;
            }

            if (app.keyboard.wasPressed(pc.KEY_RIGHT) && this.playing === false) {
                this.audio.audiosource.play("swooop_theme");
                this.audio.setLocalScale(4, 4, 4);
                this.playing = true;
            }

            if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                this.audio.audiosource.stop();
                this.audio.setLocalScale(2, 2, 2);
                this.playing = false;
                this.paused = false;
            }
        },
        // カーソルキーを押しながらのスクロールなどの、デフォルトのブラウザ動作を防ぐための機能
        onKeyDown: function (event) {
            event.event.preventDefault();
        }
    };

    return AudioHandler;
});
~~~

[1]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[2]: https://playcanvas.com/project/186/overview/tutorials

