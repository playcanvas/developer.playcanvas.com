---
title: Анимированные текстуры
template: tutorial-page.tmpl.html
tags: анимация, текстуры
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/1C968A-image-75.jpg
---

<iframe src="http://playcanv.as/p/qFDE1q2H"></iframe>

*Два типа текстурной анимации. Первый - простой скролл материала, второй - покадровая анимация. Смотрите [полный проект][1].*

Анимация материала, наложенная на поверхность, может быть очень полезной. Два широко используемые случая рассмотрены в этом уроке. Первый - прокрутка текстуры, симулирующая какое-то движение. Второй - использование таблицы спрайтов чтобы проигрывать анимацию по кадрам. 

## Прокрутка материалов с картой отступа

Квадратная поверхность в примере использует скрипт `scrolling-texture.js`, чтобы непрерывно менять отступ UV каждый кадр. Например, это может быть использовано для анимация текущей воды. Цикл обновления показан ниже.

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var tmp = ScrollingTexture.tmp;

    // Рассчитаем насколько большой отступ у текстуры
    // Скорость * dt
    tmp.set(this.speed.x, this.speed.y);
    tmp.scale(dt);

    // Обновляем отступ у карты нормалей и цвета
    this.material.diffuseMapOffset.add(tmp);
    this.material.normalMapOffset.add(tmp);
    this.material.update();
};
```

Мы рассчитываем необходимый отступ во временном векторе `tmp`. Это просто скорость умноженная на временный отступ. После этого, мы добавляем отступ к отступу карты нормалей и цвета изменяя параметры `diffuseMapOffset` и `normalMapOffset`. Эти значения являются `pc.Vec2`, которые и смещают UV-координаты, используемые на поверхности. Если вы используете другие карты (например, излучения), вам также надо обновлять и их отступ. Наконец, мы вызываем `material.update()` чтобы передать изменения в шейдер.

Это простой метод модификации отступа материала и прокрутки текстуры. Этот метод имеет один существенный недостаток - если на вашей сцене несколько моделей использует один и тот же материал, они все будут подвержены смещению.

## Анимация нескольких материалов с отступом

Если в хотите иметь несколько сущностей, у которых будут независимые анимации, вы можете модифицировать отступ на MeshInstance, вместо всего материала. Тогда сетка отображает свойства материала и переопределяет параметры для себя. Например. это позволяет иметь несколько спрайтов использующих разные кадры анимации, но использующие один материал. Этот код в файле `animated-texture.js`

В нашем примере кода, монетки и цифры оба дублируют друг друга. И мы установили им разную частоту смены кадров. Таким образом, цифры используют другие кадры.

```javascript
AnimatedTexture.prototype.update = function(dt) {
    // calculate when to animate to next frame
    this.timer -= dt;
    if (this.timer < 0) {
        // move to next frame
        this.frame++;
        if (this.frame >= (this.numFrames + this.startFrame)) {
            this.frame = this.startFrame;
        }

        this.updateMaterial(this.frame);

        // reset the timer
        this.timer = 1/this.frameRate;
    }
};

AnimatedTexture.prototype.updateMaterial = function (frame) {
    // calculate how much to change UV to go to next frame
    var dx = 1 / this.width;
    var dy = 1 / this.height;

    // Convert frame number into UV co-ordinate
    var x = frame % this.width;
    var y = Math.floor(frame / this.width);

    var meshes = this.entity.model.meshInstances;

    // create the transform vector (tilingx, tilingy, offsetx, offsety)
    // and override the material properties for this mesh
    // This allows us to use different settings for different Entities, but share the same material
    this.transform.set(dx, dy, x * dx, (1 - dy) - (y * dy));
    meshes[0].setParameter("texture_diffuseMapTransform", this.transform.data);
    meshes[0].setParameter("texture_emissiveMapTransform", this.transform.data);
    meshes[0].setParameter("texture_opacityMapTransform", this.transform.data);
};
```

In this example, we're taking a sprite sheet for example this rotating coin

![Coin][2]

We've set up script attributes which let us specify the size of each frame of animation, by specifying the width and height of the image; the starting frame number and the number of frames to play in the animation. This means we can select a single animation from a page of multiple animations. And finally the framerate to play the animation back at.

In our code we use a timer to count down to when we advance the frame then we convert the frame number into a UV co-ordinate on the texture. Noting that, for the V co-ordinate, 0 is the bottom of the texture. Whilst in spritesheets usually the run the animation top to bottom. So subtract the V co-ordinate from `(1 - dy)` when we set the offset transform.

The main difference from the previous scrolling example. Is that we're using `pc.MeshInstance.setParameter` to set a specific value in the shader. `setParameter` is lower level code than modifying the material as above. In order to use it we need to know the exact uniform variable name that the PlayCanvas shader uses to modify the map transform. In this case `texture_diffuseMapTransform` which is a 4 value array of numbers that represent the tiling and the offset.

<div class="alert-info">
`setParameter` is currently an undocumented API in the PlayCanvas engine. It is a very useful feature but is dependent on the exact variable names in the shader. As such, use it with caution as the engine code may change before it becomes public API.
</div>

As you can see in our example, the two coins have a different frame rate and one set of numbers is only using 3 frames for the animation. This method is very useful if you wish to make sprite-based 2D animation and the script `animated-texture.js` is a good starting point.

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

