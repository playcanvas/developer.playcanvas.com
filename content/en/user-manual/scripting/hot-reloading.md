---
title: Hot Reloading
template: usermanual-page.tmpl.html
position: 6
---

When you are iterating on a complex project it can be frustrating to have to do a full page refresh every time you make a change to a script. Especially if it takes you a long time to get to the point where you are testing your code. That is where hot-swapping of code comes in.

## How to use hot-swapping

Hot-swapping is enabled on a per-script basis and to enable it all you need to do is implement the `swap()` method in your script.

```javascript

MyScript.prototype.swap = function(old) {
   // recover state here
};
```

When a script with a swap function is changed in the code editor a brand new script instance is created and the old script instance is destroyed. The `initialize` method of the script is *not* called again. Instead the old script instance is passed into the `swap` method and it is up to the developer to ensure that the state of the old script is copied into the new one. Declared script attributes are automatically copied over into the new script instance. It is also important to remove any event listeners from the old instance and re-attach them to the new one.

For example:

```javascript
var Rotator = pc.createScript("rotater");

Rotator.attributes.add("xspeed", {type: "number", default: 10});

Rotator.prototype.initialize = function () {
    // listen for enable event and call method
    this.on("enable", this._onEnable);

    this.yspeed = 0;
};

Rotator.prototype.update = function (dt) {
    this.entity.rotate(this.xspeed * dt, this.yspeed * dt, 0);
};

Rotator.prototype._onEnable = function () {
    // when enabled randomize the speed
    this.yspeed = pc.math.random(0, 10);
};

Rotator.prototype.swap = function (old) {
    // xspeed is an attribute and so is automatically copied

    // copy the yspeed property from the old script instance to the new one
    this.yspeed = old.yspeed;

    // remove the old event listener
    old.off("enable", this._onEnable);
    // add a new event listener
    this.on("enable", this._onEnable);
};
```
