---
title: Анимированные текстуры
template: tutorial-page.tmpl.html
tags: анимация, текстуры
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/1C968A-image-75.jpg
---

<iframe src="https://playcanv.as/p/BM93v05L/"></iframe>

*See the [full project][1].*

It can be very useful to animate a material that has been applied to a surface. The example shown here is scrolling a texture to simulate some movement.

## Прокрутка материалов с картой отступа

Квадратная поверхность в примере использует скрипт `scrolling-texture.js`, чтобы непрерывно менять отступ UV каждый кадр. Например, это может быть использовано для анимация текущей воды. Цикл обновления показан ниже.

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var velocity = ScrollingTexture.tmpVec2;
    var offset = ScrollingTexture.tmpOffset;
    
    // Calculate how much to offset the texture
    // Speed * dt
    velocity.set(this.speed.x, this.speed.y);
    velocity.scale(dt);

    // Update the diffuse and normal map offset values
    offset.copy(this.material.diffuseMapOffset);
    offset.add(velocity);
    
    this.material.diffuseMapOffset = offset;
    this.material.normalMapOffset = offset;
    this.material.update();
};
```

Мы рассчитываем необходимый отступ во временном векторе `tmp`. Это просто скорость умноженная на временный отступ. После этого, мы добавляем отступ к отступу карты нормалей и цвета изменяя параметры `diffuseMapOffset` и `normalMapOffset`. Эти значения являются `pc.Vec2`, которые и смещают UV-координаты, используемые на поверхности. Если вы используете другие карты (например, излучения), вам также надо обновлять и их отступ. Наконец, мы вызываем `material.update()` чтобы передать изменения в шейдер.

Это простой метод модификации отступа материала и прокрутки текстуры. Этот метод имеет один существенный недостаток - если на вашей сцене несколько моделей использует один и тот же материал, они все будут подвержены смещению.

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

