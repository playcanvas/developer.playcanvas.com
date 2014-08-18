---
title: Controlling Audio
template: tutorial-page.tmpl.html

---

<iframe src="http://apps.playcanvas.com/adamraz/tutorials/ControllingAudio?overlay=false"></iframe>

*Use Left and Right cursor keys to play the sounds from the left the right spheres.*
*Use the P and R keys to pause and unpause a sound respectively.*
*Use the S key to stop the sound.*
*The full code used is shown at the bottom of this page.*


In this tutorial we will show you how to play and control audio files in PlayCanvas. Note that there are more controllable features and properties (such as pitch control). See the [audio API listing here][audio] for more details.


##General setup
The audio files were uploaded in .ogg format (.mp3 files are also usable). Two spheres were created with an audiosource component attached to each. The audio files were then added to the assets list within the audiosource settings. The activate option in the audiosource settings was disabled so as not to play the file immediately on loading. An audiolistener component was added to the default camera. The [full Designer scene and scripts can be accessed here][audio tutorial]. 

[](/images/tutorials/audio/audiosource-settings/audiosource-settings.png)

##The audio commands

The main audio commands to access the audiosource component of an entity and affect values are:

~~~javascript~~~
this.entity.audiosource.play("thunder_sound_FX-Grant_Evans");

this.entity.audiosource.pause();

this.entity.audiosource.unpause();

this.entity.audiosource.stop();
~~~

In order, the lines of code above: play an audio file that has been attached to the audiosource component from the Deisgner, pause all audio files that are playing from the entity, unpause all audio files attached to the entity and stop audio playback. ***Note that only the `play()` function requires the audio file name.***

##General usage notes
If an action is required to execute when an audio file stops playing, a timer [(see pc.time.timer)][timer api] or a manual counter (e.g. adding `dt` every frame to a variable contained in the update function).

Pausing and unpausing can still cause an audio file to play even after the `stop()` function has been called on the audiosource entity. ***This happens if a sound has been paused, then stopped, then unpaused.***

The code used for one sphere in the above Playcanvas app is as follows:

~~~javascript~~~
pc.script.create('audioL', function (context) {
    // Creates a new AudioL instance
    var AudioL = function (entity) {
        this.entity = entity;
    };

    AudioL.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.playing = false;
            this.paused = false;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (context.keyboard.wasPressed(pc.input.KEY_LEFT)) {
                this.entity.audiosource.play("thunder_sound_FX-Grant_Evans");
                this.entity.setLocalScale(4,4,4);
                this.playing = true;
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_P) && this.playing === true) {
                this.entity.audiosource.pause();
                this.entity.setLocalScale(2,2,2);
                this.playing = false;
                this.paused = true;
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_R) && this.paused === true) {
                this.entity.audiosource.unpause();
                this.entity.setLocalScale(4,4,4);
                this.playing = true;
                this.paused = false;
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_S) && this.playing === true) {
                this.entity.audiosource.stop();
                this.entity.setLocalScale(2,2,2);
                this.playing = false;
            }
        }
    };

    return AudioL;
});
~~~
    
[audio]: /engine/api/stable/symbols/pc.fw.AudioSourceComponent.html
[audio tutorial]:  