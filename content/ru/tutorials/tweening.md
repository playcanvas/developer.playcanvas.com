---
title: Использование библиотеки Tween
layout: tutorial-page.hbs
tags: анимация, скрипты
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/452634/BDFB7E-image-75.jpg
---

Часто мы хотим анимировать Entity или некоторое произвольное значение между двумя точками. Это называется твинингом. Мы создали библиотеку твининга для этой конкретной цели. Вы можете найти библиотеку по адресу [https://github.com/playcanvas/playcanvas-tween][1].

Чтобы использовать библиотеку, просто загрузите файл `tween.js` в ваш проект. Это позволит вам анимировать свойства Entity, такие как позиция, вращение, масштаб и т. д., следующим образом:

```javascript
entity.tween(entity.getLocalPosition()).to({x: 10, y: 0, z: 0}, 1, pc.SineOut);
```

Вот пример того, как сделать плавное изменение локальной позиции Entity:

<iframe loading="lazy" src="https://playcanv.as/b/wEftzstB/" title="Использование библиотеки Tween"></iframe>

Здесь ссылки на [Проект][2] и [Редактор][3] для этого примера.

Чтобы получить вышеуказанное, мы делаем:

```javascript
this.entity
    .tween(this.entity.getLocalPosition())
    .to(new pc.Vec3(4, 0, 0), 1.0, pc.SineOut)
    .loop(true)
    .yoyo(true)
    .start();
```

Вот пример того, как сделать плавное изменение локального вращения Entity:

<iframe loading="lazy" src="https://playcanv.as/b/H8553dGa/" title="Tween Local Rotation"></iframe>

Здесь ссылки на [Проект][2] и [Редактор][4] для этого примера.

Чтобы получить вышеуказанное, мы можем сделать:

```javascript
this.entity
    .tween(this.entity.getLocalEulerAngles())
    .rotate(new pc.Vec3(180, 0, 180), 1.0, pc.Linear)
    .loop(true)
    .yoyo(true)
    .start();
```

Вот как сделать плавное изменение локального масштаба Entity:

<iframe loading="lazy" src="https://playcanv.as/b/ndTiHCpD/" title="Tween Local Scale"></iframe>

Здесь ссылки на [Проект][2] и [Редактор][5] для этого примера.

Чтобы получить то, что выше, мы можем сделать:

```javascript
this.entity
    .tween(this.entity.getLocalScale())
    .to(new pc.Vec3(3, 3, 3), 1.0, pc.SineOut)
    .loop(true)
    .yoyo(true)
    .start();
```

И, наконец, вот способ сделать плавный переход между цветами:

<iframe loading="lazy" src="https://playcanv.as/b/aoRYsYrc/" title="Tween Material Color"></iframe>

Вот ссылки на [Проект][2] и [Редактор][6] для этого примера.

Чтобы получить то, что выше, мы можем сделать:

```javascript
var color = new pc.Color(0, 0, 0);
var material = this.entity.render.material;
this.app
    .tween(color)
    .to(new pc.Color(1, 1, 1), 1.0, pc.Linear)
    .loop(true)
    .yoyo(true)
    .on('update', function () {
        material.diffuse = color;
        material.update();
    })
    .start();
```

Снова вы можете найти библиотеку по адресу [https://github.com/playcanvas/playcanvas-tween][1].

[1]: https://github.com/playcanvas/playcanvas-tween
[2]: https://playcanvas.com/project/452634/overview/using-the-tween-library
[3]: https://playcanvas.com/editor/scene/491504
[4]: https://playcanvas.com/editor/scene/491558
[5]: https://playcanvas.com/editor/scene/491585
[6]: https://playcanvas.com/editor/scene/491559
