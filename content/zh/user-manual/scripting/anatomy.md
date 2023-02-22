---
title: 脚本构造
layout: usermanual-page.hbs
position: 3
---

以下是一组基础脚本，用户可以从中学习PlayCanvas脚本的结构。

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

来让我们对脚本代码的每个部份来进行分析

# Script Methods

## Declaration of Script Type

```javascript
var Rotate = pc.createScript('rotate');
```

这行代码创建了一个新的脚本类型名为“rotate”。脚本的名称用以识别在脚本组件中各个脚本。在程序中每个脚本类型都必须有它们专属的名称。返回函数“Rotate”是一个将已有属性进行扩展的Javascript函数。类似于类继承。

## 脚本特性

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

如果一个脚本组件附加了多个脚本，“更新”函数将在组件中按照脚本的排序被响应。

## Swap

```javascript
// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

The `swap` method is called whenever a ScriptType with same is added to registry. This is done automatically during Launch when a script is changed at runtime from the Editor. This method allows you to support "code hot reloading" whilst you continue to run your application. It is extremely useful if you wish to iterate on code that takes a while to reach while running your app. You can make changes and see them without having to reload and run through lots of set up or restoring the game state.

旧的脚本实例作为参数被传递给交换函数，用户可以这个步骤将旧实例的状态复制给新的实例。还必须要确保事件的状态为‘unsubscribed’and‘re-subscribed’。

If you do not wish to support hot-swapping of code, you can delete the swap method and the engine will not attempt to refresh the script.

## Additional Methods: postInitialize and postUpdate

‘postInitialize’可以在所有脚本中被调用，并且在脚本被初始化之后进行实现。使用这个方法来执行可以认为所有脚本都被初始化。‘postUpdate’是一个更新函数，在所有脚本被更新之后响应。使用这个方法来执行可以认为所有脚本都被更新。譬如，摄像机在跟踪一个应该在’postUpdate‘中更新其位置的实体，与此同时另外一个实体已经在这个框架中完成了这个动作。

# 事件

脚本实例触发多个事件，可以用来对特定的情况做出响应。

## state and enable/disable

当脚本实例改变运行状态从启用到禁用，或禁用到启用，‘state’事件被响应。脚本实例状态可以通过开启/禁用脚本来进行，组件和脚本也是其中一员，或者有脚本组件附加的实体。‘enable’事件仅仅只当状态从禁用到启用时被响应，‘disable’事件仅仅只当状态从启用到禁用时才被 响应。

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

或使用 `enable`和  `disable`等式

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

当脚本实例被销毁时，‘destroy’事件被触发。这可能是因为脚本从组件通过使用’destroy()’函数被移动，或者脚本组件已经从实体移动，又或者实体所附加的脚本已经被销毁。

```javascript
Rotate.prototype.initialize = function () {
    this.on("destroy", function () {
        // remove a DOM event listener when the entity is destroyed
        window.removeEventListener("resize", this._onResize);
    });
};
```

## attr and attr:[name]

当声明脚本属性值被更改时`attr` 和 `attr:[name]` 事件将被触发。这可能发生在运行过程中的应用程序，或者在通过编辑器进行更改模型的值的时候。`attr`事件当每个属性发生改变时被触发。`attr:[name]` 事件只当特定属性被改变时候被触发。譬如如果用户有一个'speed' 的属性 `attr:speed`事件为当speed被改变时才会触发。

```javascript
Rotate.prototype.initialize = function () {
    this.on("attr:speed", function (value, prev) {
        // speed attribute has changed
    });
};
```
