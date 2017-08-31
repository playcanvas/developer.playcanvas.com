---
title: Input
template: usermanual-page.tmpl.html
position: 8
---

The user can interact with [Element][1] components, by enabling the `useInput` field on the Element component:

![Use Input][2]

Also in order for that to work there must be an initialized instance of `pc.ElementInput` for `pc.Application#elementInput`. This is created automatically for you if you are using the Editor. If you are using the Engine only make sure to create an instance *before* the other input devices like `pc.Mouse` or `pc.TouchDevice` like so:

```javascript
var app = new pc.Application(canvas, {
    elementInput: new pc.ElementInput(canvas),
    mouse: new pc.Mouse(canvas),
    touch: !!('ontouchstart' in window) ? new pc.TouchDevice(canvas) : null,
    keyboard: new pc.Keyboard(window),
    gamepads: new pc.GamePads(),
    ...
});
```

## Input Events

When you enable input on an Element component the following events will be fired:

### mousedown

Fired when the mouse is pressed while the mouse cursor is on the component.

### mouseup

Fired when the mouse is released while the mouse cursor is on the component.

### mouseenter

Fired when the mouse cursor enters the component.

### mouseleave

Fired when the mouse cursor leaves the component.

### mousemove

Fired when the mouse cursor is moved on the component.

### mousewheel

Fired when the mouse wheel is scrolled on the component.

### click

Fired when the mouse is pressed and released on the component or when a touch starts and ends on the component.

### touchstart

Fired when a touch starts on the component.

### touchend

Fired when a touch ends on the component.

### touchmove

Fired when a touch moves after it started touching the component.

### touchcancel

Fired when a touch is cancelled on the component.

## Event Handling

To handle an input event you can listen for it on the Element component:

```javascript
this.entity.element.on('click', function (event) {
    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

## Event bubbling

When an input event is fired on an Element component it bubbles up to its parent Elements unless you call `event.stopPropagation()`. For example:

```javascript
this.entity.element.on('click', function (event) {
    // stop bubbling
    event.stopPropagation();

    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

Calling `stopPropagation` will also stop the event from being handled by the other input devices like `pc.Mouse` or `pc.TouchDevice`. So if for example you are handling mouse input using `app.mouse.wasPressed`, you can call `stopPropagation` on the `mousedown` event to prevent `app.mouse.wasPressed` from returning true. For example:

```javascript
initialize: function () {
    this.entity.element.on('mousedown', function (evt) {
        evt.stopPropagation();
    }, this);
},

update: function (dt) {
    if (this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)) {
        // do something when the left button was pressed.
        // this will not be called if the button was pressed on the Element
        // because we call stopPropagation
    }
}
```


[1]: /user-manual/packs/components/element/
[2]: /images/user-manual/assets/fonts/use-input.png
