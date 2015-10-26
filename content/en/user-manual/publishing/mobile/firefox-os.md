---
title: Firefox OS
template: usermanual-page.tmpl.html
position: 3
---

## Publishing to Firefox OS

[Firefox OS][1] is the new mobile operating system from Mozilla. And currently, PlayCanvas is the only 3D game engine targeting Firefox OS. If you publish your PlayCanvas game to [PlayCanvas][2], you can play it quite happily via Firefox OS's bundled Firefox browser app. But what if your users want to install the game to their home screen and play offline without having to access it via the browser? Achieving this is easy with PlayCanvas and involves converting your exported game into a 'packaged app'.

## Creating a Packaged App

A packaged app is essentially a ZIP file containing all the resources that make up your game. But wait, that's exactly what PlayCanvas generates when you [export your game][3]. But to create a valid packaged app for Firefox OS, you will need to include some additional files:

* A manifest file
* Some icon files

### Create the Manifest

This file must be called manifest.webapp and be created in the root folder of your extracted and exported PlayCanvas game. An example manifest (taken from the [Dungeon Fury][4] game) is shown below:

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

A reference that fully documents this manifest format can be found on [MDN][5].

### Create App Icons

In the [icons description][6] in the manifest reference, it states you must include a 128x128 icon for inclusion in the Firefox Marketplace and a 60x60 icon to represent your app on the device. Place these images somewhere in your extracted PlayCanvas app folder and set the 'icons' property accordingly in your webapp.manifest.

### Re-zip Your Packaged App

You should now have a valid packaged app. Simply re-zip the files back into a file called package.zip and copy to a web location of your choice.

[1]: http://www.mozilla.org/en-US/firefox/os/
[2]: /user-manual/publishing/web/playcanvas-hosting
[3]: /user-manual/publishing/web/self-hosting
[4]: http://dungeonfury.playcanvas.com/
[5]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest
[6]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest#icons
