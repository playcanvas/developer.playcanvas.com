---
title: Basic Audio
template: tutorial-page.tmpl.html
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/basic_audio?overlay=false" ></iframe>

*The camera moves between two audio sources playing different music*

## Sources and Listeners

In this tutorial we will place two AudioSources in the scene, and attach an AudioListener to the main camera. By moving the listener closer and further from the two sources we will hear the sound panning from left to right and getting louder and quieter as we move.

The basic audio system in PlayCanvas centres on two Component types. 

The [AudioSource][audio_source] Component plays an audio asset like a Wave, MP3 or Ogg Vorbis file. Imagine AudioSource Components like loudspeakers in the scene. There can be many active AudioSources, each playing a single sound. 

The [AudioListener][audio_listener] Component determines how an AudioSource is heard. Imagine AudioListener Components like a microphone in the scene. There can only be one active AudioListener at a time.

## Pack Setup

![Pack Explorer](/images/tutorials/basic_audio_pack.png)

You should look at the [Pack][designer] for this tutorial yourself in the Designer. The setup is quite simple, pay particular attention to the *audiosource* Components on *Source One* and *Source Two*. Also the note, that there is an *audiolistener* Component attached to the *Camera* Entity.

## Creating Sources

To create an AudioSource select the Entity you wish to add the source to and choose *New Component* from the *Entity* menu. Select *audiosource* from the list of Components and press the *Add* button.

AudioSource properties will now appear in the AttributeEditor.

![AudioSource Component](/images/tutorials/audiosource_component.png)

There are quite a few options available on the AudioSource component, but for now the only ones we need to worry about are *Assets*, *Loop*, *Activate* and *3d*.

### Assets

First you will need to upload an audio file to use in your scene. See the documentation for [importing assets][importing_assets] for details. 

<div class="pc-notice-message pc-small">
    Not all audio formats are supported across all browsers. At the moment we recommend using Wave (.wav) or Ogg Vorbis (.ogg), which are supported by Chrome, Firefox and Opera. Safari does not support Ogg Vorbis.
</div>

Once you have uploaded your assets, use the Asset Picker to select the audio asset for your source. You can add multiple assets to a single AudioSource, but only the first one will be played without scripting.

### Looping

By default, the audio sample will be played once, and then stop. If you want the audio to loop continuously, e.g. for background music, then you can check the *Loop* box.

### Activate

By default, the audio will play immediately that the scene loads up. If you wish to delay the audio and trigger it using a script. Then you should uncheck *Activate* and the sound will only play when triggered by a script.

### 3D

AudioSources with the *3d* option checked (the default) will use the current AudioListener to mimic the effect of a sound being played in a 3D space. So, for example, if the source is off to the left of the listener, then the sound will only be played through the left speaker.

If you uncheck the *3d* option, then the sound will be played without using the AudioListener.

## Creating Listeners

To create an AudioListener, select the Entity you wish to represent the listener. Often, this will be the in-game camera as this is where the players 'head' is.

That's it, the AudioListener has no options.

<div class="pc-notice-message pc-small">
    You can only have one AudioListener at a time. The last AudioListener Component that is created will be the active one.
</div>

[audio_source]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[audio_listener]: /engine/api/stable/symbols/pc.AudioListenerComponent.html
[designer]: http://playcanvas.com/playcanvas/tutorials/designer/pack/e5425adb-772d-4a1a-9dad-9bec77e55acc
[importing_assets]: /user-manual/assets/importing