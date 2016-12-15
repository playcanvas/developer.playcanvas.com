---
title: 通信
template: usermanual-page.tmpl.html
position: 4
---

異なるスクリプト間の通信はとても率直です。スクリプトインスタンスはエンティティのスクリプトコンポーネントを通してエクスポーズされます。

例えば：

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

上記例には二つのスクリプトがあります： 同じエンティティに添付されている*player.js* と *input.js*です。インプットスクリプトはキーボードの入力を確認します。左右の矢印キーを押すとプレイヤースクリプトにプレイヤーを動かすよう指示します。

スクリプトインスタンスの間で通信する行です。

~~~js~~~
this.entity.script.player.move(1,0);
~~~

スクリプトコンポーネントに添付されている全てのスクリプトは、スクリプトコンポーネント自体で、pc.script.create()関数で定義された名前でエクスポーズされます。

## イベント

一度に沢山のスクリプトにブロードキャストする場合、[イベントシステム][0]を使用してイベントを送信およびリッスンできます。

[0]: /user-manual/scripting/events

