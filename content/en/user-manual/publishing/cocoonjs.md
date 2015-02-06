---
title: Ludei CocoonJS
template: page.tmpl.html
skip: true
---

[CocoonJS][1] from [Ludei][2] can wrap your PlayCanvas game as a native application which can then be submitted to either Google Play or the Apple App Store.

## Testing your PlayCanvas Game in CocoonJS

Before you generate a native build of your PlayCanvas game, you will want to test it in CocoonJS and see how it performs. Ludei have created an awesome app called the CocoonJS Launcher that can pull your PlayCanvas game directly from playcanvas.com and run it on the device. Just give the launcher your game's URL and it will happily run in the launcher.

Let's step through the process to illustrate how easy it is:

1. Create an account on [ludei.com][2].
2. Install the CocoonJS Launcher for [Android][3] or [iOS][4].
3. Start the Launcher on your mobile device.<br><br><img alt="CocoonJS Launcher" width="320" src="/images/publishing/cocoonjs/launcher.png"></img><p>
4. Select 'Your App' and log in.<br><br><img alt="CocoonJS Launcher" width="320" src="/images/publishing/cocoonjs/signin.png"></img><p>
5. Select URL and enter the URL to your embeddable link (see below) for your PlayCanvas game.<br><br><img alt="CocoonJS Launcher" width="320" src="/images/publishing/cocoonjs/applist.png"></img><br><br>Type this into the URL edit box in the Launcher and hit 'CANVAS+' or 'WEBVIEW+'!

## Embeddable link

Your game can be accessed by one of two links. The build link or the project link.

* `http://playcanv.as/b/BUILD_ID` - links to a specific build
* `http://playcanv.as/p/PROJECT_ID` - links to the project's Primary App

To get the embeddable version of either link, add `/e/` after the host. e.g.

* `http://playcanv.as/e/b/BUILD_ID`
* `http://playcanv.as/e/p/PROJECT_ID`

## Generating the Native Build of your Game

Now that you have tested your game on your mobile device via the CocoonJS Launcher app, you are ready to build a native version. Once again, Ludei makes this really easy for you. Just follow these simple steps:

1. Log in to the [Ludei Dev Portal][5].
2. Hit the 'New Project' button.
3. Fill in the Project Information form.
4. Select iOS configuration from the left.
5. Select the link to load default assets from the web. This will set default images for icons and loading screen. You can change these at any point to your own images.
7. Select Compilation -> Compile Project.
6. Download your game from PlayCanvas as explained in the [self-hosting][6] guide.
8. Select the downloaded ZIP file.
9. Check the platforms your want to publish to.
10. Accept the conditions.
11. Hit 'Compile Project' and you're done.

[1]: https://www.ludei.com/cocoonjs/
[2]: https://ludei.com/
[3]: https://play.google.com/store/apps/details?id=com.ideateca.cocoonjslauncher&hl=en_GB
[4]: https://itunes.apple.com/gb/app/cocoonjs-by-ludei/id519623307?mt=8
[5]: https://sso.ludei.com/login?client=cloud
[6]: /user-manual/publishing/self-hosting/
