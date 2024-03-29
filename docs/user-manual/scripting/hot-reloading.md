---
title: Hot Reloading
sidebar_position: 8
---

When you are iterating on a complex project it can be frustrating to have to do a full page refresh every time you make a change to a script. Especially if it takes you a long time to get to the point where you are testing your code. That is where hot-swapping of code comes in.

## How to use hot-swapping

Hot-swapping is enabled on a per-script basis and to enable it all you need to do is implement the `swap()` method in your script.

```javascript
MyScript.prototype.swap = function(old) {
   // recover state here
};
```

When a script with a `swap` function is changed in the code editor, any launched applications will reload the script and add it to script registry. Then it creates brand new script instances to swap with the old ones, calling the `swap` method during that process per each instance. The `initialize` method of the script is *not* called again. Instead, the old script instance is passed into the `swap` method and it is up to the developer to ensure that the state of the old script is copied into the new one. Declared script attributes are automatically copied over into the new script instance. It is also important to remove any event listeners from the old instance and re-attach them to the new one.

For example:

```javascript
var Rotator = pc.createScript('rotator');

Rotator.attributes.add('xSpeed', { type: 'number', default: 10 });

Rotator.prototype.initialize = function () {
    // listen for enable event and call method
    this.on('enable', this._onEnable);

    this.ySpeed = 0;
};

Rotator.prototype.swap = function (old) {
    // xSpeed is an attribute and so is automatically copied

    // copy the ySpeed property from the old script instance to the new one
    this.ySpeed = old.ySpeed;

    // remove the old event listener
    old.off('enable', old._onEnable);
    // add a new event listener
    this.on('enable', this._onEnable);
};

Rotator.prototype._onEnable = function () {
    // when enabled randomize the speed
    this.ySpeed = pc.math.random(0, 10);
}

Rotator.prototype.update = function (dt) {
    this.entity.rotate(this.xSpeed * dt, this.ySpeed * dt, 0);
};
```

Try changing logic within the `update` method and save the code. The launched application will automatically swap `rotator` script instances with new ones and your application will keep working with the new logic.

The `swap` method is called regardless of the running state of a script instance, so if it was disabled due to an error it can be re-enabled in the `swap` method.
