---
title: User Interface - Leaderboard
template: tutorial-page.tmpl.html
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501980/2D16F7-image-75.jpg
---

<iframe src="https://playcanv.as/p/nbMbtAGH/"></iframe>

*A leaderboard using Element components. See the [full scene][1].*

This tutorial demonstrates how to create a simple leaderboard using the built-in [Elements][2]. The leaderboard is filled programmatically with data that come from a JSON asset.

## Hierarchy

This is what our UI looks like in the hierarchy:

![Hierarchy][4]

As you can see we have a 2D [Screen][3], two Elements to show the title and sub title and two Image Elements which are going to be used as the backgrounds and panels for our leaderboard data. Under `Your Score` we are going to show the player's position in the leaderboard and under `Leaderboard` we will show the rest.

You will also notice a disabled Entity called `Entry Template`. This is a template that we will use for each row of the template. We will clone that template for each leaderboard entry that exists in our JSON asset and add each clone under the respective panel.

## Screen setup

Our [screen][3] is set up like so:

![Screen][5]

Since it's a 2D screen we have ticked Screen Space. Our Reference Resolution is the resolution that we are targeting - in this case it's 1080 x 1920. We choose Blend for Scale Mode so that our Screen adapts to resolution changes and we set Scale Blend to 1 so that the Screen will adapt only to height changes.

The screen entity also has a script component that contains the `leaderboard` script that we will see below.

## Panel setup

For each panel we have an Image element that shows its background. Under the panel we are going to programmatically add clones of the Entry Template. Our panels are anchored to the center of the screen.

## Entry Template setup

This is what our template for each leaderboard row looks like in the hierarchy:

![Entry Template][6]

It has four child Text Elements for displaying the Position in the leaderboard, the name of the player, the player's score and a label that says 'PTS'.

The `Entry Template` itself is a Group Element:

![Entry Template Attributes][7]

Notice how the Group Element has split horizontal anchors:

![Split Anchors][8]

The horizontal anchors are not equal (they are 0 and 1) which means that the Element will expand automatically to fill the entire horizontal area if the Screen is resized. We also have a horizontal margin of 50 pixels to allow a small gap from the edges - the margin can only be set when anchors are split.

Now let's look at the rest of the Group's children.

### Position

Position is anchored to the left:

![Position][9]

### Name

Name is anchored to the left and moved a bit to the right:

![Name][10]

### Score

Score is anchored to the right

![Score][11]

### Points

Points are anchored to the right

![Pts][12]

## Script

This is the `leaderboard` script that reads our JSON asset and fills the leaderboard:

```javascript
var Leaderboard = pc.createScript('leaderboard');

// the text entry template to clone
Leaderboard.attributes.add("template", {type: "entity"});
// the parent leaderboard for the personal score
Leaderboard.attributes.add("personal", {type: "entity"});
// the parent leaderboard for the top ten
Leaderboard.attributes.add("leaderboard", {type: "entity"});

Leaderboard.prototype.initialize = function() {
    var self = this;

    this.entries = [];

    this.load(function (data) {
        self.clear();

        // add the personal entry
        var y = -75;
        self.addEntry(self.personal, y, data.personal.position, data.personal.name, data.personal.score);

        // add the top ten
        y = -60;
        for (var i = 0; i < Math.min(data.leaderboard.length, 10); i++) {
            self.addEntry(self.leaderboard, y, i+1, data.leaderboard[i].name, data.leaderboard[i].score);
            y -= 99; // offset each entry
        }
    });
};

// clear all leaderboard entries
Leaderboard.prototype.clear = function () {
    for (var i = 0; i < this.entries.length; i++) {
        this.entries[i].destroy();
    }

    this.entries = [];
};

// add a new entry into the leaderboard
Leaderboard.prototype.addEntry = function (parent, y, position, name, score) {
    var entry = this.template.clone();
    entry.enabled = true;

    entry.findByName("Position").element.text = position.toString();
    entry.findByName("Name").element.text = name.toUpperCase();
    entry.findByName("Score").element.text = score.toString();

    this.entries.push(entry);

    parent.addChild(entry);
    entry.translateLocal(0, y, 0);
};

// Mock loading leaderboard data, for this demo we just get the data from a JSON file in the project
// For your project you could download this from a server backend
Leaderboard.prototype.load = function (callback) {
    var asset = this.app.assets.find("leaderboard-data.json");
    asset.ready(function () {
        callback(asset.resource);
    });
    this.app.assets.load(asset);
};
```

[1]: https://playcanvas.com/editor/scene/547907
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/leaderboard/hierarchy.png
[5]: /images/tutorials/ui/leaderboard/screen.png
[6]: /images/tutorials/ui/leaderboard/template.png
[7]: /images/tutorials/ui/leaderboard/group.png
[8]: /images/tutorials/ui/leaderboard/split-anchors.png
[9]: /images/tutorials/ui/leaderboard/position.png
[10]: /images/tutorials/ui/leaderboard/name.png
[11]: /images/tutorials/ui/leaderboard/score.png
[12]: /images/tutorials/ui/leaderboard/pts.png

