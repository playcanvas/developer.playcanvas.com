---
title: スクリプトの構造
layout: usermanual-page.hbs
position: 3
---

基本的なスクリプトです。PlayCanvasのスクリプトの構造を学ぶために使用できます。

```javascript
var Rotate = pc.createScript('rotate');

Rotate.attributes.add('speed', { type: 'number', default: 10 });

// initialize code called once per entity
Rotate.prototype.initialize = function() {
    this.local = false; // choose local rotation or world rotation
};

// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

スクリプトの各セクションを分解します。

# Script Methods

## Declaration of Script Type

```javascript
var Rotate = pc.createScript('rotate');
```

この行は、「rotate」という新しいScriptTypeを作成します。スクリプトの名前は、スクリプトコンポーネントでスクリプトを識別するために使用されます。プロジェクト内で宣言された各ScriptTypeには固有の名前が必要です。返される関数の`Rotate`は、メソッドの標準セットでそのプロトタイプを拡張できるjavascript関数です。クラス継承のようなものです。

## スクリプト属性

```javascript
Rotate.attributes.add('speed', { type: 'number', default: 10 });
```

This line declares a script attribute. A script attribute is a property of the script instance and it is exposed to the Editor UI. This allows you to customize individual entities in the Editor. In the above example, the attribute is called 'speed' and would be accessible in the script code as `this.speed`. It is a number and by default is initialized to 10.

Attributes are automatically inherited from a new script instance during code hot-swap.

## Initialize

```javascript
// initialize code called once per entity
Rotate.prototype.initialize = function() {
    // local rotation or world rotation
    this.local = false;
};
```

The `initialize` method is called on each entity that has the script attached to it. It is called after application loading is complete and the entity hierarchy has been constructed but before the first update loop or frame is rendered. The `initialize` method is only called once for each entity. You can use it to define and initialize member variables of the script instance. If an entity or script is disabled when the application starts, the initialize method will be called the first time the entity is enabled.

When an entity is cloned using the `entity.clone` method, the `initialize` method on the script is only called when the cloned entity is added to the scene hierarchy; as long as both the entity and script are enabled as well.

If a script component has multiple scripts attached to it, the `initialize` method is called in the order of the scripts on the component.

## Update

```javascript
// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
};
```

The update method is called for every frame; it is invoked within each entity that has an enabled script component and enabled script instance. Each frame is passed  the `dt` argument containing the time, in seconds, since the last frame.

スクリプトコンポーネントに複数のスクリプトが添付されている場合、`update`はコンポーネント上のスクリプトの順序で呼び出されます。

## Swap

```javascript
// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

The `swap` method is called whenever a ScriptType with same is added to registry. This is done automatically during Launch when a script is changed at runtime from the Editor. This method allows you to support "code hot reloading" whilst you continue to run your application. It is extremely useful if you wish to iterate on code that takes a while to reach while running your app. You can make changes and see them without having to reload and run through lots of set up or restoring the game state.

`swap`メソッドは、引数として古いスクリプトインスタンスで渡され、それを利用して古いインスタンスから新しいインスタンスに状態をコピーすることができます。また、イベントの購読解除とに再購読が行われることを確認する必要があります。

If you do not wish to support hot-swapping of code, you can delete the swap method and the engine will not attempt to refresh the script.

## Additional Methods: postInitialize and postUpdate

存在する限り、スクリプトでエンジンによって呼び出される二つのメソッドがあります。`postInitialize`は、すべてのスクリプトが初期化された後、それを実装するすべてのスクリプトで呼び出されます。すべてのスクリプトが初期化されると仮定することができる機能を実行するために、このメソッドを使用します。`postUpdate`は、すべてのスクリプトが更新された後に呼び出されるupdateメソッドです。すべてのスクリプトが更新されていると仮定することができる機能を実行するために使用します。例えば、他のエンティティを追跡するカメラは、別のエンティティがフレームで動作を完了できるように、`postUpdate`でその位置を更新する必要があります。

# イベント

スクリプトのインスタンスは、特定の状況に対応するために使用することができるイベントを複数発動させます。

## state and enable/disable

スクリプトインスタンスが実行状態を有効から無効、またはその逆に切り替える際に`state`イベントが発生します。スクリプトインスタンスの状態は、スクリプト自体、スクリプトが所属するコンポーネント、スクリプトコンポーネントが添付されているエンティティを有効／無効にすることで変更できます。`enable`イベントは、状態が無効から有効に変更された場合にのみ発生します。また、`disable`イベントは、、状態が有効から無効に変更された場合にのみ発生します。

```javascript
Rotate.prototype.initialize = function () {
    this.on("state", function (enabled) {
        // play a sound effect when the entity is enabled or disabled
        if (enabled) {
            this.entity.sound.play("bell");
        } else {
            this.entity.sound.play("horn");
        }
    });
};
```

または、同様で`enable`と`disable`を利用した場合。

```javascript
Rotate.prototype.initialize = function () {
    this.on("enable", function () {
        this.entity.sound.play("bell");
    });

    this.on("disable", function () {
        this.entity.sound.play("horn");
    });
};
```

## destroy

スクリプトインスタンスが破棄されると`destroy`イベントが発生します。`destroy()`メソッドの呼び出しによりコンポーネントからスクリプトが削除されたことが原因の場合もありますし、エンティティからスクリプトコンポーネントが削除された場合や、添付されているエンティティが破壊された場合もあります。

```javascript
Rotate.prototype.initialize = function () {
    this.on("destroy", function () {
        // remove a DOM event listener when the entity is destroyed
        window.removeEventListener("resize", this._onResize);
    });
};
```

## attr and attr:[name]

`attr`と`attr:[name]`イベントは宣言されたスクリプト属性値変更された時に発生します。これは、アプリケーションを実行する過程、あるいはエディタから値に変更が加えられたときに起きる可能性があります。`attr`は変更されたすべての属性に対して発生します。 `attr:[name]`は特定の属性に対してのみ発生します。例えば、「speed」という属性がある場合、速度が変更されたときに`attr:speed` イベントが発生します。

```javascript
Rotate.prototype.initialize = function () {
    this.on("attr:speed", function (value, prev) {
        // speed attribute has changed
    });
};
```
