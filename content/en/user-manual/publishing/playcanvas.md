---
title: PlayCanvas
template: page.tmpl.html
position: 1
---

The fastest, easiest, most convenient way to publish your game is to publish it to playcanvas.com.

Publishing to PlayCanvas consists of two simple steps:

1. Publish a new **Build**
2. Set the build as the **Primary App**

To publish you will need to have at least one scene in your project.

## Publishing a new Build

![Publish][1]

* In your project dashboard, select the 'PUBLISH' tab.
* Click the PUBLISH button
* Enter a name for this build. Set it to some useful like "version 1" or "With highscore table".
* Select the Packs you want to include in your app from the list. Notice that the Primary Pack (the one with the blue banner icon), is always included in your app and it will be the first pack loaded when your app is launched.
* Click 'PUBLISH NOW'
* You will see a new app created in the PUBLISH tab. Wait until it finishes processing.
* Your build is now live.

Builds are given permanent link in the form `http://playcanv.as/b/BUILD_ID`. This link will be valid until you delete the build, if you over-write the build the contents at this URL will change. If you want to share a link to your game, you should probably use the published project link explained below.

## Set the Primary App

It's useful to have a single link that will always refer to the latest version of your game. That way you don't have to worry about broken links when you delete old builds. This is why we each project has a Primary App link. This will always be in the form `http://playcanv.as/p/PROJECT_ID`

<div class="alert alert-info">
If you are sharing a link to your game you should use the Primary App link. That means you know it won't change when you re-publish.
</div>

The first time you publish a build it will automatically become the Primary App. For subsequent builds you can choose when to assigned the Primary App. This means you can publish builds and test them before finally setting them as the Primary App.

To set the Primary App for your project, click the Primary marker to the left of build. This will be the app that users play when they click on the PLAY button in the Dashboard Header.

[1]: /images/platform/dashboard_publish.png
