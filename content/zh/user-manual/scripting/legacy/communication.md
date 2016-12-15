---
title: 交流
template: usermanual-page.tmpl.html
position: 4
---

不同脚本之间的通信非常简单。 脚本实例通过实体上的脚本组件公开。

举个例子，

~~~javascript~~~
// player.js
pc.script.create("player", function (app) {
    var Player = function (entity) {
        this.entity = entity;
    };

    Player.prototype = {
        move: function (x, y) {
            this.entity.translate(x, y, 0);
        }
    };

    return Player;
});
~~~

~~~javascript~~~

// input.js
pc.script.create("input", function (app) {
    var Input = function (entity) {
        this.entity = entity;
    };

    Input.prototype = {
        update: function (dt) {
            if (app.keyboard.isPressed(pc.KEY_LEFT)) {
                // Call the move() method on the player script
                this.entity.script.player.move(-1, 0);
            }

            if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
                // Call the move() method on the player script
                this.entity.script.player.move(1, 0);
            }
        }
    };

    return Input;
});
~~~

在上面的例子中，我们有两个附加到同一个实体上的脚本：* player.js *和* input.js *。 input脚本检查键盘上的输入，如果按下向左或向右箭头键，它会告诉player脚本移动玩家实体。

这是在脚本实例之间进行通信的关联处。

~~~js~~~
this.entity.script.player.move(1,0);
~~~

附加到脚本组件的所有脚本都以`pc.script.create()` 函数中定义的名称在脚本组件本身上公开。

## 事件

如果您希望同时广播消息到多个脚本，可以使用[event system] [0]发送和监听事件。

[0]: /user-manual/scripting/events

