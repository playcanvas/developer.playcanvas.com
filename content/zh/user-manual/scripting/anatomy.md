---
title: 脚本解析
template: usermanual-page.tmpl.html
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

# 脚本方法

## 脚本类型说明

```javascript
var Rotate = pc.createScript('rotate');
```

这行代码创建了一个新的脚本类型名为“rotate”。脚本的名称用以识别在脚本组件中各个脚本。在程序中每个脚本类型都必须有它们专属的名称。返回函数“Rotate”是一个将已有属性进行扩展的Javascript函数。类似于类继承。

## 脚本特性

```javascript
Rotate.attributes.add('speed', { type: 'number', default: 10 });
```

这行代码定义了脚本的属性。脚本属性是一个脚本实例的特性用户可以在编辑器UI中找到这个。允许用户在 编辑器中对单个实体进行自定义。在上面代码的情况中，属性称之为“speed”在代码中也可以使用“this.speed”。默认数字为“10”。
属性在代码热交换过程中自动继承到新的脚本实例。

## 初始化

```javascript
// initialize code called once per entity
Rotate.prototype.initialize = function() {
    // local rotation or world rotation
    this.local = false;
};
```

当脚本附加实体时候，初始化函数被调用。在应用程序加载之后初始化函数将会被响应，但在第一次上传循环或者帧渲染之前实体层次结构已被构造。初始化函数将仅仅只会对每个实体响应一次。用户可以使用初始化函数定义或者初始化脚本实例的数字变量。当应用程序开始如果一个实体或者脚本被关闭，初始化函数被响应，在第一时间实体将会被开启。

如果一个脚本组件附加了有多个脚本，“初始化”将在组件中按照脚本的排序被响应。

## 上传

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

在实体的每个框架中，每个实体都需要更新函数，脚本组件和脚本实例被启用。每个框架的“dt”属性将被当作参数传递。

如果一个脚本组件附加了多个脚本，“更新”函数将在组件中按照脚本的排序被响应。

## 交换

```javascript
// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

当有一个脚本类型被添加到注册表时交换函数将会响应。这个将会在编辑器中脚本在运行状态下被自动完成。这个函数允许用户在运行应用时支持“代码热加载”。对于用户来说这个是十分有帮助的，如果用户希望对代码进行迭代当运行App时。用户可以进行修改可以实时看到结果并不需要重新加载和设置。

旧的脚本实例作为参数被传递给交换函数，用户可以这个步骤将旧实例的状态复制给新的实例。还必须要确保事件的状态为‘unsubscribed’and‘re-subscribed’。

如果用户不希望进行代码的热交换，用户可以删除交换函数，引擎将不会尝试更新脚本。

## 其它方法: postInitialize and postUpdate

‘postInitialize’可以在所有脚本中被调用，并且在脚本被初始化之后进行实现。使用这个方法来执行可以认为所有脚本都被初始化。‘postUpdate’是一个更新函数，在所有脚本被更新之后响应。使用这个方法来执行可以认为所有脚本都被更新。譬如，摄像机在跟踪一个应该在’postUpdate‘中更新其位置的实体，与此同时另外一个实体已经在这个框架中完成了这个动作。

# 事件

脚本实例触发多个事件，可以用来对特定的情况做出响应。

## state, 启用, 禁用

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

## attr & attr:[name]

当声明脚本属性值被更改时`attr` 和 `attr:[name]` 事件将被触发。这可能发生在运行过程中的应用程序，或者在通过编辑器进行更改模型的值的时候。`attr`事件当每个属性发生改变时被触发。`attr:[name]` 事件只当特定属性被改变时候被触发。譬如如果用户有一个'speed' 的属性 `attr:speed`事件为当speed被改变时才会触发。

```javascript
Rotate.prototype.initialize = function () {
    this.on("attr:speed", function (value, prev) {
        // speed attribute has changed
    });
};
```

