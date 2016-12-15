---
title: イベント
template: usermanual-page.tmpl.html
position: 5
---

イベントを使用すれば毎フレーム確認をせずに、発生する出来事に応答できます。

PlayCanvas Engineには、如何なるオブジェクトにもイベント処理を追加できるシンプルな方法があります。

~~~javascript~~~
pc.events.attach(object);
~~~

オブジェクトに`on()`, `off()`, `fire()` , `hasEvent()` メソッドが追加されます。つまり、そのオブジェクトから始動されるイベントに対してリッスンすることができます。

デフォルトで、全てのスクリプトインスタンスはイベントを始動できます。手動で呼ぶ必要はありません。

## イベントの使用

`on()` と `off()`で起動するイベントをリッスン

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

`fire()`を使用してイベントをトリガー

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

詳細は [API Reference][1]からご確認ください

[1]: http://developer.playcanvas.com/en/api/pc.events.html#fire

