---
title: Анимированные текстуры
layout: tutorial-page.hbs
tags: анимация, текстуры
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/BM93v05L/" title="Анимированные текстуры"></iframe>

*Смотрите [полный проект][1].*

Анимация материала, примененного к поверхности, может быть очень полезной. В приведенном здесь примере текстура прокручивается для имитации движения.

## Прокрутка материала с помощью смещения карты

Квадратная плоскость в примере использует скрипт `scrolling-texture.js` для постоянного перемещения смещения UV каждый кадр. Например, это может быть использовано для имитации текущей воды. Цикл обновления показан ниже.

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var velocity = ScrollingTexture.tmpVec2;
    var offset = ScrollingTexture.tmpOffset;

    // Рассчитать, насколько сместить текстуру
    // Скорость * dt
    velocity.set(this.speed.x, this.speed.y);
    velocity.scale(dt);

    // Обновить значения смещения диффузной и нормальной карты
    offset.copy(this.material.diffuseMapOffset);
    offset.add(velocity);

    this.material.diffuseMapOffset = offset;
    this.material.normalMapOffset = offset;
    this.material.update();
};
```

Мы вычисляем требуемое смещение во временный вектор `tmp`. Это просто: `speed * timeStep`. Затем мы добавляем это смещение к свойству смещения для карты диффузии и карты нормалей, изменяя свойства `diffuseMapOffset` и `normalMapOffset`. Эти значения представляют собой `pc.Vec2`, которые смещают координаты UV, используемые для нанесения текстуры на поверхность. Если вы используете другие карты (например, emissive), вам также нужно будет обновить эти свойства смещения. Наконец, мы вызываем `material.update()` для распространения изменений в шейдер.

Это простой и понятный способ изменить смещение материала и прокрутить текстуру. Он имеет один недостаток: этот код изменяет свойства самого материала. Таким образом, если у вас в сцене несколько моделей с одним и тем же материалом, все они будут затронуты.

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png
