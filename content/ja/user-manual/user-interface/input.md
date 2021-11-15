---
title: 入力
template: usermanual-page.tmpl.html
position: 8
---

ユーザは、Elementコンポーネントの `useInput`フィールドを有効にすることで、[Element][1]コンポーネントとインタラクトできます：

![入力の使用][2]

また、動作させるためには `pc.Application#elementInput`に`pc.ElementInput`のインスタンスを初期化しなければなりません。Editorを使用している場合は自動的に作成されます。Engineを使用している場合は、次のように、`pc.Mouse`や`pc.TouchDevice`のような他の入力デバイスの*前に*インスタンスを作成してください：

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

## イベント入力

Elementコンポーネントで入力を有効にすると、次のイベントが発生します：

### mousedown

マウスカーソルがコンポーネント上にある際にマウスが押されると発生します。

### mouseup

マウスカーソルがコンポーネント上にある際ににマウスが離されると発生します。

### mouseenter

マウスカーソルがコンポーネントに入ると発生します。

### mouseleave

マウスカーソルがコンポーネントを離れると発生します。

### mousemove

マウスカーソルがコンポーネント上に移動すると発生します。

### mousewheel

コンポーネント上でマウスホイールがスクロールされると発生します。

### click

コンポーネント上でマウスを押して離したとき、またはコンポーネント上でタッチが開始および終了したときに発生します。

### touchstart

コンポーネント上でタッチが開始されたときに発生します。

### touchend

コンポーネント上でタッチが終了すると発生します。

### touchmove

コンポーネントに触れ始めた後にタッチが移動したときに発生します。

### touchcancel

コンポーネント上でタッチがキャンセルされたときに発生します。

## イベント処理

入力イベントを処理するには、Elementコンポーネントでリッスンします。

```javascript
this.entity.element.on('click', function (event) {
    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

## イベントバブリング

Elementコンポーネントで入力イベントが発生すると、 `event.stopPropagation()`を呼び出さない限り、親要素にバブルアップします。 例えば：

```javascript
this.entity.element.on('click', function (event) {
    // stop bubbling
    event.stopPropagation();

    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

`stopPropagation`を呼び出すと、イベントが` pc.Mouse`や `pc.TouchDevice`のような他の入力デバイスによって処理されなくなります。たとえば、`app.mouse.wasPressed`を使ってマウス入力を処理している場合、`mousedown`イベントで `stopPropagation`を呼び出して`app.mouse.wasPressed`がtrueを返さないようにします。 例えば：

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
## Mouse and Touch event conflict on Google Chrome

Google Chrome simulates mouse events also on touch devices. By doing so it could cause some unexpected behavior. For example if you hide a button right after the click event, another UI element that lays behind it could also receive an unwanted click event.

To prevent this behavior you can call the ```preventDefault()``` method of the native event object on the ```pc.EVENT_TOUCHEND``` event:

Here is small script to include once in your scene:

 ```javascript
var TouchFix = pc.createScript('touchFix');

// initialize code called once per entity
TouchFix.prototype.initialize = function() {
    // Only register touch events if the device supports touch
    var touch = this.app.touch;
    if (touch) {
        touch.on(pc.EVENT_TOUCHEND, function(event) {
            // This prevents that a mouse click event will be executed after a touch event.
            event.event.preventDefault();
        });
    }
};
```

[1]: /user-manual/packs/components/element/
[2]: /images/user-manual/assets/fonts/use-input.png

