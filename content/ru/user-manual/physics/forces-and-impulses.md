---
title: Силы и импульсы
layout: usermanual-page.hbs
tags: physics,basics
position: 2
---

Динамические твердые тела движутся под действием сил и импульсов. Сила действует на тело в течение определенного времени, тогда как импульс - это сила, действующая мгновенно.

Чтобы применить силу или импульс к твердому телу, вы должны использовать [pc.RigidBodyComponent scripting API][1].

Рассмотрим несколько примеров. Если вы хотите толкнуть тяжелый груз по полу, вы должны приложить силу на определенное время:

```javascript
MyScript.prototype.update = function(dt) {
    // Пока нажата клавиша стрелки вправо, применить силу вправо
    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyForce(10, 0, 0);
    }
};
```

Если вы хотите выстрелить ядром из пушки, вы должны применить одиночный импульс:

```javascript
MyScript.prototype.update = function(dt) {
    // Если была нажата пробел, применить импульс вверх и вправо
    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
        this.entity.rigidbody.applyImpulse(10, 10, 0);
    }
};
```

[1]: /api/pc.RigidBodyComponent.html
