---
title: 事件
template: usermanual-page.tmpl.html
position: 5
---

事件是一种高效的，不在程序运行时每帧进行检查的情况下响应事件发生的方式。

PlayCanvas引擎包含一种向任何对象添加事件处理的简单方法：

~~~javascript~~~
pc.events.attach(object);
~~~

这将向对象添加方法: `on()`, `off()`, `fire()` 和`hasEvent()` 。这意味着你可以监听由该对象触发的对应事件。

默认情况下，所有脚本实例都可以触发事件，您不需要手动调用触发事件。

## 使用事件

通过使用 `on()`和`off()`来监听事件触发。

~~~javascript~~~
pc.script.create("display", function (app) {
    var Display = function (entity) {
        this.entity = entity;
    };

    Display.prototype = {
        initialize: function () {
            var player = app.root.findByName("Player");

            // remove move event listeners
            player.script.player.off("move");

            // listen move event
            player.script.player.on("move", function (x, y) {
                //...
            });

        }
    };

    return Display;
});
~~~

使用 `fire()` 触发事件

~~~javascript~~~
pc.script.create("player", function (app) {
    var Player = function (entity) {
        this.entity = entity;
    };

    Player.prototype = {
        update: function (dt) {
            var x = 1;
            var y = 1;

            this.fire("move", x, y);
        }
    };

    return Player;
});
~~~

更多细节请 [参考 API ][1]

[1]: http://developer.playcanvas.com/en/api/pc.events.html#fire

