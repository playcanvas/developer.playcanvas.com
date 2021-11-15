---
title: Forces and Impulses
template: usermanual-page.tmpl.html
position: 2
---

リジッドボディは、動力と衝撃に反応して動きます。動力は一定の時間にわたってボディに適用され、衝撃は瞬時に適用される力です。

動力または衝撃をリジッドボディに適用するには、[pc.RigidBodyComponentスクリプトAPI][1]を使用する必要があります。

いくつかの例を見てみましょう。重い物を押して動かす場合は、一定の時間をかけて継続的に力を加えます。

```javascript
MyScript.prototype.update = function(dt) {
    // While the right arrow key is pressed, apply a force to the right
    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyForce(10, 0, 0);
    }
};
```

大砲を発射する場合などは、単一の衝撃を適用します。

```javascript
MyScript.prototype.update = function(dt) {
    // If the space bar was pressed, apply an impulse up and to the right
    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
        this.entity.rigidbody.applyImpulse(10, 10, 0);
    }
};
```

[1]: https://developer.playcanvas.com/en/api/pc.RigidBodyComponent.html

