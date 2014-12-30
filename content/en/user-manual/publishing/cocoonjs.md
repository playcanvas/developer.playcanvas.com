---
title: Ludei CocoonJS
template: page.tmpl.html
skip: true
---

[CocoonJS][cocoonjs] from [Ludei][ludei] can wrap your PlayCanvas game as a native application which can then be submitted to either Google Play or the Apple App Store.

## Testing your PlayCanvas Game in CocoonJS

Before you generate a native build of your PlayCanvas game, you will want to test it in CocoonJS and see how it performs. Ludei have created an awesome app called the CocoonJS Launcher that can pull your PlayCanvas game directly from playcanvas.com and run it on the device. Just give the launcher your game's URL and it will happily run in the launcher.

Let's step through the process to illustrate how easy it is:

1. Create an account on [ludei.com][ludei].
2. Install the CocoonJS Launcher for [Android][android_launcher] or [iOS][ios_launcher].
3. Start the Launcher on your mobile device.<br><br><img alt="CocoonJS Launcher" width="320" src="/images/publishing/cocoonjs/launcher.png"></img><p>
4. Select 'Your App' and log in.<br><br><img alt="CocoonJS Launcher" width="320" src="/images/publishing/cocoonjs/signin.png"></img><p>
5. Select URL and enter the URL to your PlayCanvas game.<br><br><img alt="CocoonJS Launcher" width="320" src="/images/publishing/cocoonjs/applist.png"></img><br><br>Ordinarily, the URL would be of the form 'http://apps.playcanvas.com/username/projectname/gamename'. However, this page is actually a wrapper page for your game, with your game contained within an iframe. The URL referenced by the iframe is what you need to pass to the launcher. To get this URL, view source of your published game and search for 'iframe'. You will find a URL of the form 'http://apps.playcanvas.com.s3-website-eu-west-1.amazonaws.com/username/projectname/gamename/'. Type this into the URL edit box in the Launcher and hit 'CANVAS+'!

<p class="alert alert-warning">
Note that if the trailing forward slash on the URL is not present, CocoonJS will fail to load your game.
</p>

## Generating the Native Build of your Game

Now that you have tested your game on your mobile device via the CocoonJS Launcher app, you are ready to build a native version. Once again, Ludei makes this really easy for you. Just follow these simple steps:

1. Log in to the [Ludei Dev Portal][ludei_dev].
2. Hit the 'New Project' button.
3. Fill in the Project Information form.
4. Select iOS configuration from the left.
5. Select the link to load default assets from the web. This will set default images for icons and loading screen. You can change these at any point to your own images.
7. Select Compilation -> Compile Project.
6. Download your game from PlayCanvas as explained in the [self-hosting][self_hosting] guide.
8. Select the downloaded ZIP file.
9. Check the platforms your want to publish to.
10. Accept the conditions.
11. Hit 'Compile Project' and you're done.

[cocoonjs]: https://www.ludei.com/cocoonjs/
[ludei]: https://ludei.com/
[android_launcher]: https://play.google.com/store/apps/details?id=com.ideateca.cocoonjslauncher&hl=en_GB
[ios_launcher]: https://itunes.apple.com/gb/app/cocoonjs-by-ludei/id519623307?mt=8
[ludei_dev]: https://sso.ludei.com/login?client=cloud
[self_hosting]: /user-manual/publishing/self-hosting/
