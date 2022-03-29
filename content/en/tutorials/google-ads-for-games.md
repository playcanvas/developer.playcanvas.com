---
title: Google Ads to monetize your Game
layout: tutorial-page.hbs
tags: scripts, monetization, games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/889095/DE8018-image-75.jpg
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/K2WWSnfJk4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Links for this tutorial:
- [Flappy Bird Demo][flappy-bird-ads-demo]
- [Tutorial template project][tutorial-template-start]
- [Google AdSense Documentation][google-afg-docs]

## Introduction

This tutorial will show you how to integrate Ads from Google AdSense into your games and help monetize.

The Ads come in two main forms:

Interstitial Ads that can appear between sessions of play such as going from game over back to the main menu (think of them as the ad breaks on TV shows)

In our [Flappy Bird example][flappy-bird-ads-demo], we have the ads show after the player dies and return to the main menu to play again.

![][flappy-bird-demo-interstitial-ad]

The second form are Rewarded Ads that the player can choose to play in order to get a 'reward' such as coins or being able to continue playing. These are considered to be effective as they give players the option to watch an ad rather than being forced to and they also get an immediate in-game reward.

In our example, we use rewarded ads to allow the user to continue after dying which tends to be a strong incentive for users to watch an ad.

![][flappy-bird-demo-rewarded-ad]

For the tutorial we are going to fork the [Google H5 Ad Tutorial (Start)][tutorial-template-start] and add the ad SDK library and functionality  bit by bit.

The end result will look like this where we can call the interstitial and rewarded ads via button clicks and the refresh button will be used to check if the rewarded ads can be shown (more on this later).

<iframe src="https://playcanv.as/e/p/OkynewOO/" title="Finished Tutorial"></iframe>

## Setting up

Go to the [Google H5 Ad Tutorial (Start)][tutorial-template-start] project dashboard page and click on 'fork' and let's take a look at the project.

This is a simple project where it's ready for us to add the button click callbacks to show the ads in the `ui-controller.js`

```
// ...
// initialize code called once per entity
UiController.prototype.initialize = function() {
    this.rewardedGivenPanelEntity.enabled = false;
    this.rewardedAdButtonEntity.button.active = false;

    var onRefresh = function () {

    }.bind(this);

    this.refreshButtonEntity.button.on('click', function (e) {
        onRefresh();
    }, this);

    this.interstitialAdButtonEntity.button.on('click', function(e) {

    }, this);

    this.rewardedAdButtonEntity.button.on('click', function (e) {

    }, this);

    this.okRewardButtonEntity.button.on('click', function (e) {
        this.rewardedGivenPanelEntity.enabled = false;
    }, this);
};
```

First step is to add the Google SDK integration files which we can do by copying the folder 'Adsense for Games' from the [Flappy Bird project][flappy-bird-ads-demo].

![][copy-afg-folder]

And pasting into our fork of the tutorial project.

![][paste-afg-folder]

Let's take a look inside:

[`afg-intergration.js`][afg-intergration.js] adds Google's SDK to the page and also sets the time between ads being served to the user which we can change if need be. For the tutorial, we have also enabled test mode to show placeholders instead of real ads.

```
// https://developers.google.com/ad-placement/docs/example
(function() {
    var script = document.createElement('script');
    script.setAttribute('data-ad-client', 'ca-pub-2682356268914970');

    // Comment out to disable test mode
    script.setAttribute('data-adbreak-test', 'on');

    // Ad frequency is user configuble
    // https://developers.google.com/ad-placement/docs/ad-rate
    script.setAttribute('data-ad-frequency-hint', '30s');

    // Comment in if you would like to use a specific channel for ad reporting
    // https://developers.google.com/ad-placement/docs/advanced-reporting
    // script.setAttribute('data-ad-channel', 'XXXXXX');

    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.head.appendChild(script);
})();
```

[`afg-setup.js`][afg-setup.js] is our wrapper to make working with ads a bit easier. It will configure Google's SDK and add some helper functions to use for pausing the game before an ad is shown and resuming afterwards.

This includes:
- disabling/enabling input
- muting/unmuting sound
- setting/resetting time scale
- disabling/enabling rendering

```
(function() {
    var app = pc.Application.getApplication();

    window.adsbygoogle = window.adsbygoogle || [];
    var afg = {};

    afg.adBreak = window.adConfig = function(o) {adsbygoogle.push(o);};
    afg.ready = false;

    var onReady = function() {
        afg.ready = true;
    };

    // Config the ad setup
    adConfig({
        // https://developers.google.com/ad-placement/docs/preload-ads
        preloadAdBreaks: 'on',
        // https://developers.google.com/ad-placement/docs/manual-sequence
        onReady: onReady,
    });

    // Create help functions to disable input and sound
    var _mouseTargetElement = null;
    var _keyboardTargetElement = null;
    var _touchTargetElement = null;
    var _beforeAdVolume = null;
    var _beforeAdTimeScale = null;
    var _beforeAutoRender = null;

    afg.onBeforeAd = function () {
        // Currently using private API for this. May need to be updated
        // if PlayCanvas engine is updated
        _mouseTargetElement = app.mouse._target;
        _keyboardTargetElement = app.keyboard._element;

        if (app.touch) {
            _touchTargetElement = app.touch._element;
        }

        _beforeAdVolume = app.systems.sound.volume;
        _beforeAdTimeScale = app.timeScale;
        _beforeAutoRender = app.autoRender;

        app.systems.sound.volume = 0;
        app.timeScale = 0;
        app.autoRender = false;
    };

    afg.onAfterAd = function () {
        app.mouse.attach(_mouseTargetElement);
        app.keyboard.attach(_keyboardTargetElement);

        if (app.touch) {
            app.touch.attach(_touchTargetElement);
        }

        app.systems.sound.volume = _beforeAdVolume;
        app.timeScale = _beforeAdTimeScale;
        app.autoRender = _beforeAutoRender;
    };

    window.afg = afg;
})();
```

## Adding an Interstitial Ad

Let's start with adding an interstitial ad to the project.

Add the following code to the interstitial ad button click event callback in `ui-controller.js`:

```
// ...
this.interstitialAdButtonEntity.button.on('click', function(e) {
    if (afg.ready) {
        afg.adBreak({
            type: 'start',
            name: 'test-interstitial',
            beforeAd: () => { afg.onBeforeAd(); },
            adBreakDone: () => { afg.onAfterAd(); onRefresh(); }
        });
    }
}, this);
// ...
```

Here, we check if the Google SDK is ready first before calling `adBreak` which is the function exposed by the Google SDK itself. More documentation and options can be found on [their site][adbreak-docs]. For the example, we will use:

- `type` which has to be one on these types from the Google SDK documentation
- `name` which can be any name we give and is used for reporting in AdSense
- `beforeAd` which is the callback to execute code before the ad is shown
- `adBreakDone` which is the callback that is called after the ads is shown if even if the ad didn't show for any reason

As you can see we use our helper functions `onBeforeAd` and `onAfterAd` in the callbacks to handle the common areas to 'pause' the game before the ad 'resume' afterwards as covered before. You may want to add extra custom logic here for your own game if there are specific areas in your game that you would want to handle.

Now lets see it in action

![][tutorial-interstitial-ad]

It is intended to always call `adBreak` when it is intended in the game to show an interstitial as the Google SDK controls the logic of when to show the ad itself including the ad frequency hint that we set in afg-integration.js earlier.

## Adding an Rewarded Ad

However, for rewarded ads the process is a little different. The high level logic flow is:

- Call `adBreak` to see if a rewarded ad is available
- If one is available, the function to show the ad will be given
- Show the button to the player so that they can watch the ad for a reward
- When the button is pressed, call the function given to us by the SDK to show the ad

Let's see how this is implemented in the Flappy Bird example where we allow the player to continue playing after dying in exchange for watching an ad.

```
// ...
app.on('game:gameover', function () {
    app.root.findByName('Game Screen').enabled = false;
    app.root.findByName('Game Over Screen').enabled = true;

    app.fire('pipes:stop');
    app.fire('ground:stop');
    app.fire('ui:fadeingameover');
    app.fire('ui:showscoreboard', this.score, this.bestScore);

    // Check if we have a new high score and write it to local storage
    if (this.score > this.bestScore) {
        this.bestScore = this.score;
        if (storageAvailable('localStorage')) {
            localStorage.setItem('Flappy Bird Best Score', this.score.toString());
        }
    }

    this.showAdButtonContainerEntity.enabled = false;

    // Call rewarded ad adBreak() to see if we can actually play an ad
    if (afg.ready) {
        afg.adBreak({
            type: 'reward',
            name: 'play-on',
            beforeReward: (showAdFn) => {
                this.showAdFn = showAdFn;
                this.showAdButtonContainerEntity.enabled = true;
            },
            adViewed: () => {
                afg.onAfterAd();
                app.fire('game:getready', this.score);
            },
            adDismissed: () => {
                afg.onAfterAd();
                app.fire('game:menu', true);
            },
            adBreakDone: (placementInfo) => { }
        });
    }

    setTimeout(function () {
        app.fire('game:audio', 'Swoosh');
    }, 500);
}, this);
// ...
```


When the game over event is called, we call `adBreak` with type `reward` and also have callbacks for `beforeReward`, `adViewed` and `adDismissed`.

`beforeReward` is called if an ad is available and passes the function to show the ad. We will also show the button to watch the ad.

`adViewed` is called by the SDK once the ad has finished so that the game can reward the player. In this case, we start the game again but without resetting the score to 0.

`adDismissed` is called by the SDK if the ad is stopped by the player before it has finished. The reward should not be given in this case and we return them to the main menu.

Let's now add this to our project.

We are going to use the refresh button to check if we can show a rewarded ad or not. Add the following code to the `onRefresh` function that is called when the player presses the button.

```
// ...
var onRefresh = function () {
    this.rewardedAdButtonEntity.button.active = false;

    // Check if rewarded ad is available to view
    if (afg.ready) {
        afg.adBreak({
            type: 'reward',
            name: 'test-reward',
            beforeReward: (showAdFn) => {
                this._showRewardAdFn = showAdFn;
                this.rewardedAdButtonEntity.button.active = true;
            },
            adViewed: () => {
                afg.onAfterAd();
                this.rewardedGivenPanelEntity.enabled = true;
                this.rewardedAdButtonEntity.button.active = false;
                this._showRewardAdFn = null;
            },
            adDismissed: () => {
                afg.onAfterAd();
                this.rewardedAdButtonEntity.button.active = false;
                this._showRewardAdFn = null;
            },
            adBreakDone: (placementInfo) => { }
        });
    }
}.bind(this);
// ...
```


When the refresh button is pressed, we disable the reward button entity so that it isn't shown to the player and we are in a known state.

In the `beforeReward` callback, we keep a reference to the function to show the ad and enable the reward button as we know we can show an ad to the player.

In the `adViewed` callback, we call our helper function `onAfterAd` to resume the game and show the reward to the player.

In the `adDismissed` callback, we just ensure that the reward button entity is disabled as no reward will be given.

`adBreakDone` has to have a callback but in this case, it's empty as we have no use for it in the demo. However, the [`placementInfo` object passed will have information][adbreakdone-docs] about the ad such as error messages and can be useful for debugging.

Now we need to show the ad when the reward ad button is pressed. In the callback for the button click event we add the following code:

```
// ...
this.rewardedAdButtonEntity.button.on('click', function (e) {
    if (this._showRewardAdFn) {
        afg.onBeforeAd();
        this._showRewardAdFn();
    }
}, this);
// ...
```

First we check that we have the function from the SDK to show the ad first and if we do, use our helper function `onBeforeAd()` to pause the game and call the function to show the ad.

Let's see it in action:

![][tutorial-rewarded-ad]

## Wrapping up

And that's it for the basics of integrating Google's AdSense for H5 games and apps!

You can find the [completed project here][tutorial-template-finished] and further information about Google's AdSense SDK and API on [their site][google-afg-docs].

<div class="alert alert-info">Important: For the tutorial, we used test mode so we didn't show any actual ads. When you disable test mode to use for production, please ensure that you comply with any privacy/cookies policy for the countries you release in including GDPR. This usually means implementing some form of cookie consent.</div>

[flappy-bird-demo-interstitial-ad]: /images/tutorials/google-afg/flappy-bird-demo-interstitial-ad.gif
[flappy-bird-demo-rewarded-ad]: /images/tutorials/google-afg/flappy-bird-demo-rewarded-ad.gif
[tutorial-interstitial-ad]: /images/tutorials/google-afg/tutorial-interstitial-ad.gif
[tutorial-rewarded-ad]: /images/tutorials/google-afg/tutorial-rewarded-ad.gif
[copy-afg-folder]: /images/tutorials/google-afg/copy-afg-folder.gif
[paste-afg-folder]: /images/tutorials/google-afg/paste-afg-folder.gif

[flappy-bird-ads-demo]: https://playcanvas.com/project/877568/overview/google-h5-ads-demo
[tutorial-template-start]: https://playcanvas.com/project/889095/overview/google-h5-ad-tutorial-start
[tutorial-template-finished]: https://playcanvas.com/project/889020/overview/google-h5-ad-tutorial-finished

[google-afg-docs]: https://developers.google.com/ad-placement/
[adbreak-docs]: https://developers.google.com/ad-placement/apis/adbreak
[adbreakdone-docs]: https://developers.google.com/ad-placement/apis/adbreak#adbreakdone_and_placementinfo

[afg-intergration.js]: https://playcanvas.com/editor/code/877568?tabs=67299908
[afg-setup.js]: https://playcanvas.com/editor/code/877568?tabs=67301236