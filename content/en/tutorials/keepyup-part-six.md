---
title: Making a Simple Game - Part 6
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk/?overlay=false"></iframe>

*You can find the [full project here][11]. If you haven't see [Part 1][1], [Part 2][2], [Part 3][3], [Part 4][4] and [Part 5][5] read them first.*

## User Interface

The user interface of a game is the first thing you see and often it's the last thing people think about when making a game. But a good user interface will not only give your game a great style. It can actively affect the number of people who can play your game.

User Interfaces are built in PlayCanvas using the [Screen Component][7] and the [Element Component][8]. There is more details in the [user manual][6]

### User Interface Entities

![Hierarchy][9]

We have divided our user interface up into the three game states: Menu, In Game and Game Over. Each state has an Screen Entity which is activated when the state is entered. We also have a Screen especially for the overlay. Because the overlay displays underneath the ball in the menu, we use a 3D Screen component to render the overlay in world space behind the ball.

### Images and Text

![Image Element][12]

Images and Text are added to the user interface using the Element Component. This Component can display images in the form of a texture asset or text in the form a font asset. 

![Image Attriubtes][13]

### User Interface script

Let's take a look at the script for the main menu.

```javascript
var UiMenu = pc.createScript('uiMenu');

UiMenu.attributes.add("overlay", {type: "entity"});

// initialize code called once per entity
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);    
    this.on('disable', this.onDisable, this);
    
    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // Listen for clicks on the background    
    
    this.overlay.enabled = true;
    this.overlay.element.on("click", this.start, this);
    
    if (this.ball) {
        this.ball.model.meshInstances[0].material.depthTest = false;
    }
};

UiMenu.prototype.onDisable = function () {
    this.overlay.enabled = false;
    // Stop listening to events
    this.overlay.element.off("click", this.start, this);
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // prevent touch and mouse events
    e.stopPropagation();
};
```
First we have set up an attribute with a reference to the overlay element. The overlay element is a full screen element which tints the screen green. We also use this to detect input as we only care about the user clicking on the full screen.

When the Entity is enabled we display the full screen overlay by enabling it and then we start listening for the click event. When the Entity is disabled we stop listening for the event and we hide the overlay. When an event is triggered we fire a "ui:start" event which the main game script is listening for and that triggers a change of game state.

We repeat similar behavior in the other two UI scripts where we listen for game events and fire ui events.

## Game Complete

Congratulations on reaching the end of the series! We hope you've learn a lot about how you can structure and build a game using PlayCanvas. If you have any feedback on the tutorial, please get in touch on our [forum][8].

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-four/
[5]: /tutorials/keepyup-part-five/
[6]: /user-manual/user-interface/
[7]: /user-manual/packs/components/screen/
[8]: /user-manual/packs/components/element/
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050
[12]: /images/tutorials/beginner/keepyup-part-six/image-element.jpg
[13]: /images/tutorials/beginner/keepyup-part-six/element-attr.jpg
[14]: http://forum.playcanvas.com