---
title: Chrome Web Store
template: usermanual-page.tmpl.html
position: 3
---

## Publishing to the Chrome Web Store

If you're building HTML5 games, chances are that you want as many people to play your game as possible and, in an ideal world, you'll make some money in the process. Monetization on the web is harder than it is on mobile app stores, where payment processing is standardised and credit card details are stored. But there are still a number of options. One great platform you should consider for your game is the <a href="https://chrome.google.com/webstore" target="_blank">Chrome Web Store</a>.

![Chrome Web Store][1]

It's a carefully curated app store for the desktop version of Chrome (available on Win, Mac, Linux and Chrome OS). Publishing your game here will expose it to a wider audience and offer you a simple mechanism for taking payments. Let's step through the process for publishing a free game.

Google lets you publish your game in two forms: as a hosted app or a packaged app.

## Creating a Hosted App

Hosted apps are essentially vanilla websites with a little extra metadata. Why are hosted apps good?

* Your game will be discoverable by Chrome Web Store users.
* Chrome Web Store users can install your hosted app to their Apps page in Chrome which is really just a beefed up bookmark for your game. This will be synched across the different devices on which you use Chrome (if you're signed in).

So this sounds great. More people will be installing and playing your game.

To get started, hit the cog icon at the top right of the landing page for the Chrome Web Store and select Developer Dashboard. Sign in and click the button labelled 'Add New Item'.

Here's a little checklist of things that you'll need to publish a hosted app:

* A zip file containing a manifest and a 128×128 icon for your game. Google supplies a reference for the manifest file format and guidelines for creating icons (and other images related to your submission).
* A description for your game. Make it fun and exciting! Remember, you're trying to persuade somebody to install your game so make it sound amazing.
* A number of screenshots and YouTube links to give potential users an idea of what your game is like to play.
* A number of images that Google can use to promote your game in the Web Store. Depending on how successful your game becomes, it may be displayed in a small, medium or large (marquee) tile. Spend time ensuring that you provide all of these images. A great game can be let down by uninspiring promotional images!
* Verification that you own the URL of your hosted app. You should do this using Google's WebMaster Tools.

There are a few other options that cover Google Analytics, game category, regions where your game will be listed and so on. When you're done, hit 'Publish'. Note that Google spends a little time (no longer than 60 minutes but should be much faster) to scan your upload before it is made live in the store.

## Creating a Packaged App

So hosted apps are great, but they have some problems:

* Users may think you've been lazy! 'Hey! This is just a link to their web-site! Grrr!'. Users expect a little more from something that is being installed to their browser.
* Hosted apps won't run offline (unless you make clever use of the browser's local storage).
* Hosted apps are just web pages and don't feel like applications.
* If your game consists of a large quantity of data and doesn't do any caching, load times can be long.

Enter packaged apps! These are essentially apps that are fully installed to Chrome, can run offline and launch in there own window minus Chrome's browser decoration (although this can be added if you wish). And because they're loaded from local storage, they start up extremely quickly.

PlayCanvas has also published an example of a packaged app in the Chrome Web Store. It's a game called SWOOOP:

<img alt="SWOOOP" src="/images/publishing/swooop.png">

Check it out for yourself <a href="https://chrome.google.com/webstore/detail/swooop/jblimahfbhdcengjfbdpdngcfcghladf" target="_blank">here</a>.

Generating a packaged app from a PlayCanvas game takes a little more effort than a hosted app. Here's a run down of the steps required to package and publish a game like SWOOOP:

* Download an export of your game from the Publish tab of the Project Dashboard.
* Unzip the contents.
* Create a manifest.json file . For SWOOOP, it looks like this:

~~~javascript~~~
{
  "name": "SWOOOP",
  "description": "Loop and swoop your bi-plane around the magical island. What's your highscore?",
  "version": "1.0",
  "app": {
    "background": {
      "scripts": ["background.js"]
    }
  },
  "icons": { "16": "swooop16.png", "48": "swooop48.png", "128": "swooop128.png" }
}
~~~

* Create background.js that contains the following to configure how the game is launched:

~~~javascript~~~
chrome.app.runtime.onLaunched.addListener(function() {
 chrome.app.window.create('index.html', {
   'bounds': {
     'width': 1280,
     'height': 720
   }
 });
});
~~~

* Create the icons referenced from the manifest and place them in the same folder as the index.html.
* Transfer any script tag blocks of JavaScript in index.html into externally referenced JS files (there are two). This is because Chrome treats this as a security threat.
* Check to see if your game uses the LocalStorage HTML5 API. Packaged apps can't use this API, although they can use a Chrome specific alternative.

We're done! Zip up the game's files again and upload to your new item in the CWS Developer Dashboard. Fill out the rest of the form as you would for a hosted app (although you now don't need to show ownership for a hosted app URL since there isn't one any more).

So hopefully this gives some insight into how simple it is to publish your game to the Chrome Web Store. Whether you choose to publish a hosted or packaged app is up to you and, as we've shown, both have their advantages and disadvantages. Our recommendation to you is to experiment. It's an awesome publishing platform that anyone can start to use today, so try it out for yourself!

[1]: /images/publishing/web/chromewebstore.png
