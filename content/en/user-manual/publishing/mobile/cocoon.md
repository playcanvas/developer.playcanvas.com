---
title: Cocoon
template: usermanual-page.tmpl.html
position: 1
---

[Cocoon][1] from [Ludei][2] is a cloud service that can wrap your PlayCanvas game as a native application which can then be submitted to either Google Play, Amazon App Store or the Apple App Store.

## Testing your PlayCanvas Game in Cocoon

Before you generate a native build of your PlayCanvas game, you will want to test it in Cocoon.io and see how it performs. Ludei has created an awesome app called the Developer App that can pull your PlayCanvas game directly from playcanvas.com and run it on the device. Just give the Developer App your game's URL and it will happily run in the Developer App.

So, how can you get a Developer App? Let's step through the process to illustrate how easy it is:

1. Create an account on [Cocoon.io][1] and log in.
2. Create a new project. The fastest way is to drag and drop a zip file with the content of your PlayCanvas game on a empty project card: <br><br><img alt="Cocoon.io - Create project" width="320" src="/images/publishing/cocoon/create-project-cocoon.png"></img><p><br><br>Download your game from PlayCanvas as explained in the [self-hosting][5] guide.<br><br>The project will be created automatically. There are more ways of creating a project, you can have a look at them at this [Cocoon.io documentation section][3].

3. Open the project settings clicking on the name of the project.

4. Cocoon.io is a cordova based cloud compiler. If your project requires any plugin, it is the right time to install them in the project using the plugins tab:<br><br><img alt="Cocoon.io - Add plugins" width="320" src="/images/publishing/cocoon/plugins-wizard-cocoon.png"></img><p><br><br>This is important because the Developer App will be generated using the same configuration your project has. Important: if your target webview engine is Canvas+, remember to uninstall the white-list plugin.

5. Just under the project settings, you will see the Developer App section. Click the blue button to start compiling the Developer App:<br><br><img alt="Cocoon.io - Compile the Developer App" width="320" src="/images/publishing/cocoon/compile-devapp-cocoon.png"></img><p><br><br>When the OS icons at the top of the card stop flickering, you will be able to download the Developer App and install it on your device.For more information about the Developer App, you can visit this [Cocoon.io documentation section][4].

6. Open the Developer App. Select URL and enter the URL to your embeddable link (see below) for your PlayCanvas game.<br><br><img alt="Cocoon.io - Developer App" width="320" src="/images/publishing/cocoon/devapp-urls-cocoon.png"></img><br><br>Type this into the URL edit box in the Launcher and hit 'CANVAS+' or 'WEBVIEW+'!

## Embeddable link

Your game can be accessed by one of two links. The build link or the project link.

* `http://playcanv.as/b/BUILD_ID` - links to a specific build
* `http://playcanv.as/p/PROJECT_ID` - links to the project's Primary App

To get the embeddable version of either link, add `/e/` after the host. e.g.

* `http://playcanv.as/e/b/BUILD_ID`
* `http://playcanv.as/e/p/PROJECT_ID`

## Generating the Native Build of your Game

Now that you have tested your game on your mobile device via the Cocoon.io Developer App, you are ready to build a native version. Once again, Cocoon.io makes this really easy for you. Just follow these simple steps:

1. Back to the project configuration, click on the settings tab and configure your project according to your needs. If you want, you can edit the config.xml file directly on the editor from the config.xml tab.

2. In the icons tab, you can add custom icons to your game. If you leave this configuration empty, Cocoon.io default ones will be used.

3. Optionally, you can add a signing key in the signing section, so your project will be signed during the compilation.

4. Hit 'Compile' button (the hammer icon under the creation and last compilation dates) and you're done.

When the OS icons at the top of the card stop flickering, you will be able to download your final app and install it on your device.

[1]: http://cocoon.io/
[2]: https://ludei.com/
[3]: https://cocoon.io/doc/cloud_compiler#create-a-project
[4]: https://cocoon.io/doc/developer_app
[5]: /user-manual/publishing/web/self-hosting/
