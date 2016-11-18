---
title: Making a Simple Game - Part 6
template: tutorial-page.tmpl.html
tags: games
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*You can find the [full project here][11]. If you haven't see [Part 1][1], [Part 2][2], [Part 3][3], [Part 4][4] and [Part 5][5] read them first.*

## User Interface

The user interface of a game is the first thing you see and often it's the last thing people think about when making a game. But a good user interface will not only give your game a great style. It can activaly affect the number of people who can play your game.

There are several ways to build a user interface in a PlayCanvas application. You can use HTML and CSS assets or you can use WebGL geometry rendered in your main scene. We're going to use the second method. Using the [Sprite library][6] and the [Font library][7] that are available from the PlayCanvas Github pages.

### User Interface Entities

![Hierarchy][9]

We have divided our user interface up into the three game states: Menu, In Game and Game Over. Each state has an parent Entity that contains the graphics for that interface screen. There is also a script for each interface screen which handles the user interaction and any other game events.

### Sprite Setup

![Sprites][10]

To add a script we have add `sprite.js` from the Sprite library above to our project and we're adding script component. The Sprite code exposes attributes which we use to render a sprite in 2D in our scene. The Sprite script attributes are documented on the [Github page][6]

### User Interface script

Let's take a look at the script for the main menu.

```javascript
var UiMenu = pc.createScript('uiMenu');

// initialize code called once per entity
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // Listen for clicks on the play button
    this.app.mouse.on("mouseup", this.start, this);
    if (this.app.touch) {
        this.app.touch.on("touchend", this.start, this);
    }
};

UiMenu.prototype.onDisable = function () {
    // Stop listening to events
    this.app.mouse.off("mouseup", this.start, this);
    if (this.app.touch) {
        this.app.touch.off("touchend", this.start, this);
    }
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // prevent touch and mouse events
    e.event.preventDefault();
};
```

When the Entity is enabled we start listening for mouse and touch events, when the Entity is disabled we stop listening to the events. When an event is triggered we fire a "ui:start" event which the main game script is listening for and that triggers a change of game state.

We repeat similar behaviour in the other two UI scripts where we listen for game events and fire ui events.

## Game Complete

Congratulations on reaching the end of the series! We hope you've learn a lot about how you can structure and build a game using PlayCanvas. If you have any feedback on the tutorial, please get in touch on our [forum][8].

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[5]: /tutorials/beginner/keepyup-part-five
[6]: https://github.com/playcanvas/sprites
[7]: https://github.com/playcanvas/fonts
[8]: http://forum.playcanvas.com
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050
