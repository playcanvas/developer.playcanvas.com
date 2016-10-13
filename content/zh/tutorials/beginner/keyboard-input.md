---
title: 基础键盘输入
template: tutorial-page.tmpl.html
position: 1
---

<iframe src="https://playcanv.as/p/rFZGQWCi?overlay=false"></iframe>

*点击以聚焦, 然后按下 `左箭头`, `右箭头` 以及`空格键` 来旋转方块。 按下或抬起按键 'a' 来改变颜色。*

PlayCanvas引擎中的键盘处理由`pc.Keyboard`对象提供。Keyboard 为常见的键盘操作，比如检查键是被敲击还是按住，提供了一个简单的接口。它还消除了处理关键代码和字符码的各种跨浏览器问题。

在[教程项目][1]中看一看键盘输入场景。以下是该教程所用的代码:

~~~javascript~~~
var KeyboardHandler = pc.createScript('keyboardHandler');

KeyboardHandler.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

KeyboardHandler.attributes.add('whiteMaterial', {
    type: 'asset',
    assetType: 'material'
});

// initialize code called once per entity
KeyboardHandler.prototype.initialize = function() {
    // Use on() to listen for events on the keyboard device.
    // Arguments are:
    // 1) The event name to listen for
    // 2) The callback function to call when the event fires
    // 3) (optional) The value to use for 'this' in the callback function

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);
};

// update code called every frame
KeyboardHandler.prototype.update = function(dt) {
    /*
     * Notice in the demo that pressing and holding the arrow keys doesn't
     * make the block spin. wasPressed() is used to detect a
     * keypress that occurred since the last frame and will only be
     * called once even if the key is held down.
     */
    var angle = 0;
    if (this.app.keyboard.wasPressed(pc.KEY_LEFT)) {
        angle = -5;
    } else if (this.app.keyboard.wasPressed(pc.KEY_RIGHT)) {
        angle = 5;
    }

    /*
     * Notice that pressing and holding the space bar makes the block
     * continuously spin. isPressed() is used to detected if a
     * key is down right now. So it will be true every frame as long as
     * the key is still pressed.
     */
    if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {
        angle = 1;
    }

    // Update the spinning cube
    this.entity.rotateLocal(0, angle, 0);
};

/*
* Event handler called when key is pressed
*/
KeyboardHandler.prototype.onKeyDown = function (event) {
    // Check event.key to detect which key has been pressed
    if (event.key === pc.KEY_A && this.redMaterial) {
        this.entity.model.meshInstances[0].material = this.redMaterial.resource;
    }

    // When the space bar is pressed this scrolls the window.
    // Calling preventDefault() on the original browser event stops this.
    event.event.preventDefault();
};

/*
* Event handler called when key is released
*/
KeyboardHandler.prototype.onKeyUp = function (event) {
    // Check event.key to detect which key has been pressed
    if (event.key === pc.KEY_A && this.whiteMaterial) {
        this.entity.model.meshInstances[0].material = this.whiteMaterial.resource;
    }
};
~~~

有两种方式检测键盘输入。第一种是在你的脚本的update环节中更新。使用`isPressed()` 和 `wasPressed()` 检测一个按键当前是否被按下或之前已经被按下。第二种是当按键按下或抬起时通过事件来响应。

## `isPressed` 与 `wasPressed`

在下方的案例中你可以看到`isPressed()` 与 `wasPressed()`的表现的不同处。

当你按下并保持按住左箭头或右箭头按键时，方块会旋转5&deg;。这是因为`wasPressed()` 只在键被按下后立即返回true。

如果你按住空格键，你会看到立方体每帧连续旋转1＆deg; 。 这是因为 `isPressed()` 对于检测到键被按下的每一帧都返回true。

### `isPressed(key)`

`isPressed(key)` 检查`key`当前是否被按下，如果是，则返回true。 当按下键时，它每帧都将返回true。

### `wasPressed(key)`

`wasPressed(key)` 从之前的最后一帧开始检查是否按下了“key”*。`wasPressed(key)`对于单个按键只返回true一次。

## 事件

第二种处理按键的方式是监听事件。键盘设备支持两种键盘事件:

* `pc.EVENT_KEYDOWN`
* `pc.EVENT_KEYUP`

[DOM] [3]键盘事件在不同的浏览器上的实现不同，所以PlayCanvas引擎在`pc.Keyboard`对象上提供事件，所以你可以在任何地方使用相同的代码。 当键盘事件被触发时，一个包含被释放的按键的键代码的`pc.KeyboardEvent`对象被传递给事件处理程序。

注意我们也传递一个第三个参数给on()，这是`this`或者脚本实例本身。 on()的第三个参数在事件回调中用作于`this`，所以我们需要在这里传递它，否则它不会被设置为正确的对象。

## 键盘编码

分辨哪一个键被按下时就要使用按键编码。它们是与键盘上的键所匹配的数值。 例如，pc.KEY_A是`A`键，pc.LEFT是左箭头键。

注意，你应该总是使用枚举`pc.KEY_ *`，而不是使用数值。 因为这些常数的实际值可能会在将来进行更改。

## 试试看

在[这里] [2]进行全屏尝试或在页面顶部尝试。 比较轻敲并按住箭头键，然后点击并按住空格键。

[1]: https://playcanvas.com/project/405804/overview/tutorial-basic-keyboard-input
[2]: https://playcanv.as/p/rFZGQWCi
[3]: /user-manual/glossary#dom

