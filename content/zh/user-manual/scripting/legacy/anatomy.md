---
title: 脚本解析
template: usermanual-page.tmpl.html
position: 2
---

~~~js~~~
pc.script.create("script_name", function (app) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    };

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {

        }
    };

    return ScriptObject;
});
~~~
*脚本框架*

这是一份脚本框架，它展示了使一个功能具备功能的必要的最小量代码。

<div class="alert alert-info">
事实上, 你可以把 `initialize` 和 `update` 部分也从脚本中删除。 不过大多数的脚本都需要一个“update”更新环节来做些事情, 以及一个”initialize “环节在游戏开始之前对有用的属性值进行设置。
</div>

我们将把这份脚本拆分成一个部分一个部分。

## 声明和应用

~~~js~~~
pc.script.create("script_name", function(app) {
    //...
});
~~~

将整个脚本进行封装的做法是调用 `pc.script.create`。第一个被传入的参数是脚本的名字，这将在稍后你想实现脚本实例之间的通信的时候被用来识别该脚本。第二个参数就是用来定义提供脚本的行为和功能的类。

定义函数只有一个参数`app`，这是当前[`应用`] [1]的实例。

因为`ScriptObject`是一个闭合对象，该`app`变量可在脚本对象内被使用。它还包含了其它各种有用的属性。

* `systems` 集装箱的所有组件系统，例如`app.systems.model` 就是一个模型组件的系统。
* `root` 实例面板中的根节点。
* `keyboard`  `pc.Keyboard`的一个实例
* `mouse` `pc.Mouse`的一个实例
* `scene`  `pc.Scene`的一个实例
* `assets`  `pc.AssetRegistry` 用于装载和访问资源的一个实例

参见[API参考] [2]可获得pc.Application对象的更多细节。

## 定义脚本对象

~~~js~~~
pc.script.create("script_name", function (app) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    }

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {

        }
    };

    return ScriptObject;
})
~~~

在第二个参数位置的函数目的是定义脚本对象，并返回该定义，以使发动机能够实例化每个新实例。

在这里，你可以看到基本设置。变量`ScriptObject`被声明为一个构造函数，它把它能够链接到的实例作为唯一的参数。为便以后使用把这个实体存储在该实例中的行为通常是有用的，因此行`this.entity=Entiy;`在为你的对象创建其它成员变量时会经常被使用到。

接下来，我们来定义初始化和更新功能。 `initialize()` 在所有的脚本实例中都只被调用一次。它在所有的实例都在加载完成后(因此脚本中通过调用`app.root` 获取实例面板的根节点是可行的)以及所有`update()` 方法运行前被调用。
`update()` 是我们脚本的一个循环执行的部分。脚本组件系统会在与自变量`dt`上一次更新传入秒的时间相隔时间dt的每帧调用一次update方法。注意，这两种功能是可选的，如果没有使用它们，应把它们从脚本内容里排除。

最后，我们把 `ScriptObject` 对象返回。

## 一个完整的例子

这里是一份完整的脚本代码，尝试把它保存为一个文件，并附加到一个实体上。

~~~js~~~
///
// This script moves the entity backwards and forwards on the x-axis.
// You can pause the oscillation by pressing the space bar.
///
pc.script.create('oscillator', function (app) {

    // define the constructor
    var Oscillator = function (entity) {
        this.entity = entity;

        this.paused = false; // paused state
        this.amplitude = 10; // The amount to oscillate
        this.time = 0; // The time value for the oscillation
    };

    // define the update function
    Oscillator.prototype = {
        update: function (dt) {

            // Use the keyboard handler from the Application
            // to pause/unpause
            if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
                this.paused = !this.paused; // toggle paused state
            }

            if (!this.paused) {
                // increment the time value by the frametime
                this.time += dt;

                // Calculate the new value
                var x = this.amplitude * Math.sin(this.time);

                // Update the x position of the Entity
                this.entity.setLocalPosition(x, 0, 0);
            }
        }
    };

    // return the class definition
    return Oscillator;
});
~~~

## 脚本内置方法

以下是一份按照引擎调用顺序排列的方法列表，如果它们存在即被调用，它们被称为脚本的内置方法。

`initialize()`

这是脚本内部在所有的实例都被加载后被第一个执行的方法，并且它只执行一次。通常使用它进行属性值的初始化。

`onEnable()`

每当该脚本组件连接到其实体或该脚本得到启用时调用。它紧跟`initialize`方法被执行。使用它处理发生的每一个脚本组件或实体得到启用的时候会发生的事。

`postInitialize()`

只在`onEnable`后被调用一次。使用此命令对不同的脚本进行初始化。例如，你可能在别的脚本被初始化后，再进行一些初始化的语句操作。

`update(dt)`

每帧都被检测，当时间间隔长于当时距离变量 `dt`传入的时间时执行。这个方法被用于执行像物体移动，力的作用，输入检测等等行为。如果你不需要使用更新方法，删除它以获得更好的效率。

`postUpdate(dt)`

在每次 `update`方法执行后被调用。使用此方法执行`update`步骤后需要采取的行动，例如相机脚本中的移动相机行为在`postUpdate`执行，因为它可能需要跟踪已在`update`中被移动过的物体实体。

`onDisable()`

当该脚本被停用或脚本组件连接到实体被停用时调用。也会在`destroy`方法执行前被调用。使用这个脚本处理每次脚本组件或链接实例被停用前要做的事。

`destroy()`

当脚本组件或该脚本连接到的实体被摧毁时调用。使用它进行清理工作。

`onAttributeChanged(name, oldValue, newValue)`

在每次 [脚本属性][3]的值被编辑器更改后被调用。 属性的名称和新、旧属性值被传送进入方法。 使用它在属性值改变时更新你的脚本。

[1]: /user-manual/glossary#application
[2]: /engine/api/stable/symbols/pc.Application.html
[3]: /user-manual/scripting/script-attributes/

