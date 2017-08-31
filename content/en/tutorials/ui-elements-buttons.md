---
title: User Interface - Buttons
template: tutorial-page.tmpl.html
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501973/ED1B35-image-75.jpg
---

<iframe src="https://playcanv.as/p/jpRiV53D/"></iframe>

*Simple buttons using Element components. See the [full scene][1].*

When building a UI for your application you will almost certainly need to create buttons. This tutorial demonstrates how you can achieve that using the built-in [Elements][2].

In this [scene][1] we have created a 2D [Screen][3] that looks like this in the hierarchy:

![Hierarchy][4]

## Screen setup

Our screen is set up like so:

![Screen][5]

Since it's a 2D screen we have ticked Screen Space. Our Reference Resolution is the resolution that we are targeting - in this case it's 1080 x 1920. We choose Blend for Scale Mode so that our Screen adapts to resolution changes and we set Scale Blend to 1 so that the Screen will adapt only to height changes.

Our screen has various children like an Image Element for the logo that is displayed on the top, a Text Element for showing the 'SELECT QUALITY' text and 3 buttons.

## Button setup

Let's take a closer look at the first button:

![Button][6]

The button has 2 components - a Script component and an Element component. The Script is handling our interactions with the button and the Element is handling the rendering of the button. The button Entity also has a Text Element as a child for showing text.

The Element's type is Image and it's anchored to the bottom of the screen. After anchoring the button we give it an offset from the bottom by simply moving it up. We also have Use Input enabled in order to interact with the button.

## Button events

Now let's have a look at the script that handles interaction with the button. This script will assign a different image to the button when we hover on it and when we press it. This script works for both mouse and touch:

```javascript
var BtnStates = pc.createScript('btnStates');

BtnStates.attributes.add('hoverAsset', {
    type:'asset',
    assetType:'texture'
});

BtnStates.attributes.add('activeAsset', {
    type:'asset',
    assetType:'texture'
});

// initialize code called once per entity
BtnStates.prototype.initialize = function() {
    // Get the original button texture
    this.originalTexture = this.entity.element.textureAsset;

    // Whether the element is currently hovered or not
    this.hovered = false;

    // mouse events
    this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
    this.entity.element.on('mouseleave', this.onLeave, this);

    // touch events
    this.entity.element.on('touchstart', this.onPress, this);
    this.entity.element.on('touchend', this.onRelease, this);
};


// When the cursor enters the element assign the hovered texture
BtnStates.prototype.onEnter = function (event) {
    this.hovered = true;
    event.element.textureAsset = this.hoverAsset;

    // set our cursor to a pointer
    document.body.style.cursor = 'pointer';
};

// When the cursor leaves the element assign the original texture
BtnStates.prototype.onLeave = function (event) {
    this.hovered = false;
    event.element.textureAsset = this.originalTexture;

    // go back to default cursor
    document.body.style.cursor = 'default';
};

// When we press the element assign the active texture
BtnStates.prototype.onPress = function (event) {
    event.element.textureAsset = this.activeAsset;
};

// When we release the element assign the original texture if
// we are not hovering or the hover texture if we are still hovering
BtnStates.prototype.onRelease = function (event) {
    event.element.textureAsset = this.hovered ? this.hoverAsset : this.originalTexture;
};
```

Our script has 2 script attributes which are used to set which texture asset is going to be used for each button state. In `initialize` we set up our input events - note that these work because have set Use Input to true on the button element. The rest of our methods assign the texture that corresponds to each button state.

[1]: https://playcanvas.com/editor/scene/547900
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/buttons/hierarchy.png
[5]: /images/tutorials/ui/buttons/screen.png
[6]: /images/tutorials/ui/buttons/button.png
