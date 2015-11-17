---
title: 通信
template: usermanual-page.tmpl.html
position: 4
---

異なるスクリプトの間の通信はとても率直です。スクリプトインスタンスはエンティティのスクリプトコンポーネントを通してエクスポーズされます。

例えば

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
                // プレイヤースクリプトのmove()メソッドを呼ぶ
                this.entity.script.player.move(-1, 0);
            }

            if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
                // プレイヤースクリプトのmove()メソッドを呼ぶ
                this.entity.script.player.move(1, 0);
            }
        }
    };

    return Input;
});
~~~

上記例には二つのスクリプトがあります： *player.js* と *input.js*が同じエンティティに添付されています。インプットスクリプトはキーボードの入力を確認します。左右どちらかの矢印キーを押すとプレイヤースクリプトにプレイヤーを動かすよう指示します。

スクリプトインスタンスの間で通信する行です。

~~~js~~~
this.entity.script.player.move(1,0);
~~~

スクリプトコンポーネントに添付されている全てのスクリプトはスクリプトコンポーネント自体で、pc.script.create()機能で定義された名前を使用してエクスポーズされます。

## イベント

沢山のスクリプトに一度にブロードキャストする場合、[イベントシステム][0]を使用してイベントを送信およびリッスンできます。

[0]: /user-manual/scripting/events

