---
title: Controlling Audio 2
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/adamraz/tutorials/ControllingAudio2?overlay=false"></iframe>

*Use Right and Left cursor keys to play and stop the sounds respectively.*
*Use the Down and Up cursor keys to pause and unpause a sound respectively.*
*The full code used is shown at the bottom of this page.*

In this tutorial we will show you how to play and control audio files in PlayCanvas. Note that there are more controllable features and properties (such as pitch control). See the [audio API listing here][audio] for more details.

##The audio commands

The main audio commands to access the audiosource component of an entity and affect values are:

~~~javascript~~~
this.entity.audiosource.play("Evil_Laugh_Male_6");

this.entity.audiosource.pause();

this.entity.audiosource.unpause();

this.entity.audiosource.stop();
~~~
In order, the lines of code above: play an audio file that has been attached to the audiosource component from the Designer, pause all audio files that are playing from the entity, unpause all audio files attached to the entity and stop audio playback.

##General setup
The audio files were uploaded in .ogg format (.mp3 files are also usable). Two spheres were created with an audiosource component attached to each. The audio files were then added to the assets list within the audiosource settings. The activate option in the audiosource settings was disabled so as not to play the file immediately on loading. An audiolistener component was added to the default camera. The [full Designer scene and scripts can be accessed here][audio tutorial]. 

<img src="/images/tutorials/audio/audiosource-settings.png" />

The full code used for the above PlayCanvas app is as follows:

~~~javascript~~~
pc.script.create('audioHandler', function (context) {
    // Creates a new AudioHandler instance
    var AudioHandler = function (entity) {
        this.entity = entity;
    };

    AudioHandler.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.audioLeft = context.root.findByName('AudioL');
            this.audioRight = context.root.findByName('AudioR');
            this.playing = false;
            this.paused = false;
            //this sets up an event listener
            context.keyboard.on(pc.input.EVENT_KEYDOWN, this.onKeyDown, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            
             if (context.keyboard.wasPressed(pc.input.KEY_UP) && this.paused === true) {
                this.audioRight.audiosource.unpause();
                this.audioLeft.audiosource.unpause();
                this.audioLeft.setLocalScale(4,4,4);
                this.audioRight.setLocalScale(4,4,4);
                this.playing = true;
                this.paused = false;
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_DOWN) && this.playing === true) {
                this.audioRight.audiosource.pause();
                this.audioLeft.audiosource.pause();
                this.audioLeft.setLocalScale(2,2,2);
                this.audioRight.setLocalScale(2,2,2);
                this.playing = false;
                this.paused = true;
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_RIGHT) && this.playing === false) {
                this.audioRight.audiosource.play("Evil_Laugh_Male_6");
                this.audioLeft.audiosource.play("thunder_sound_FX");
                this.audioLeft.setLocalScale(4,4,4);
                this.audioRight.setLocalScale(4,4,4);
                this.playing = true;
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_LEFT)) {
                this.audioRight.audiosource.stop();
                this.audioLeft.audiosource.stop();
                this.audioLeft.setLocalScale(2,2,2);
                this.audioRight.setLocalScale(2,2,2);
                this.playing = false;
                this.paused = false;
            }
        },
        
        // This function is simply to prevent default browser actions such as scrolling when cursor keys are pressed
        onKeyDown: function (event) {
            event.event.preventDefault();
        }
    };

    return AudioHandler;
});
~~~

Note: for sound file attributions see script file 'Attributions' [here][sounds]
    
[audio]: /engine/api/stable/symbols/pc.fw.AudioSourceComponent.html
[audio tutorial]: https://playcanvas.com/adamraz/tutorials 
[sounds]: https://playcanvas.com/adamraz/tutorials/editor/attributions.js