---
title: Firefox OS
template: page.tmpl.html
position: 5
---

## Publishing to Firefox OS

[Firefox OS][firefoxos] is the new mobile operating system from Mozilla. And currently, PlayCanvas is the only 3D game engine targeting Firefox OS. If you publish your PlayCanvas game to [PlayCanvas](publish_playcanvas), you can play it quite happily via Firefox OS's bundled Firefox browser app. But what if your users want to install the game to their home screen and play offline without having to access it via the browser? Achieving this is easy with PlayCanvas and involves converting your exported game into a 'packaged app'.

## Creating a Packaged App

A packaged app is essentially a ZIP file containing all the resources that make up your game. But wait, that's exactly what PlayCanvas generates when you [export your game][publish_selfhost]. But to create a valid packaged app for Firefox OS, you will need to include some additional files:

* A manifest file
* Some icon files
* PlayCanvas resources that are externally referenced by exported PlayCanvas games

### Create the Manifest

This file must be called manifest.webapp and be created in the root folder of your extracted exported PlayCanvas game. An example manifest (taken from the [Dungeon Fury][dungeon_fury] game) is shown below:

~~~javascript~~~
{
    "name": "Dungeon Fury",
    "version": "1.0.2",
    "size": 4885341,
    "release_notes": "First release",
    "developer": {
        "name": "PlayCanvas",
        "url": "http://playcanvas.com"
    },
    "description": "Swipe your way to freedom in Dungeon Fury, the fun new 3D game from PlayCanvas that will test your reflexes to the limit! Knock down doors and counter attacks from brutish Orcs to escape!",
    "launch_path": "/game.html",
    "icons": {
        "128": "/icons/icon_128.png",
        "60": "/icons/icon_60.png"
    },
    "default_locale": "en",
    "fullscreen": true,
    "orientation": "portrait-primary"
}
~~~

A reference that fully documents this manifest format can be found on [MDN][mdn].

### Create App Icons

In the [icons description][icons] in the manifest reference, it states you must include a 128x128 icon for inclusion in the Firefox Marketplace and a 60x60 icon to represent your app on the device. Place these images somewhere in your extracted PlayCanvas app folder and set the 'icons' propetry accordingly in your webapp.manifest.

### Embed External Resources

There are potentially three files that must be copied into your app folder that are normally externally referenced by a PlayCanvas app:

#### The PlayCanvas Engine

The PlayCanvas Engine is referenced in your exported game's index.html. Search for a line of this form (bearing in mind your engine version may well be different):

~~~html~~~
    <script src="https://code.playcanvas.com/playcanvas-0.141.1.min.js"></script>
~~~

And convert it to this:

~~~html~~~
    <script src="playcanvas-0.141.1.min.js"></script>
~~~

And download the file to the root of your extracted PlayCanvas app.

#### The PlayCanvas Loading Screen Image

The PlayCanvas loading screen image is referenced in your exported game's index.html. Search for the following line:

~~~html~~~
    <a href="http://playcanvas.com" target="_blank"><img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/images/logo/PLAY_FLAT_ORANGE3.png"/></a>
~~~

And convert it to this:

~~~html~~~
    <img src="PLAY_FLAT_ORANGE3.png"/>
~~~

And download the file to the root of your extracted PlayCanvas app.

#### The PlayCanvas Physics Engine

In your extracted app folder, locate and open data.js. Search for a line of the form:

~~~javascript~~~
    "libraries": ["https://code.playcanvas.com/ammo.3c2cc63.js"]
~~~

And convert it to:

~~~javascript~~~
    "libraries": ["ammo.3c2cc63.js"]
~~~

And download the file to the root of your extracted PlayCanvas app.

### Re-zip Your Packaged App

You should now have a valid packaged app. Simply re-zip the files back into a file called package.zip and copy to a web location of your choice.

[firefoxos]: http://www.mozilla.org/en-US/firefox/os/
[publish_playcanvas]: /user-manual/publishing/playcanvas
[publish_selfhost]: /user-manual/publishing/selfhosting
[dungeon_fury]: http://apps.playcanvas.com/playcanvas/dungeonfury/dungeonfury
[mdn]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest
[icons]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest#icons
