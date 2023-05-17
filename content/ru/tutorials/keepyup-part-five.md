---
title: Создание простой игры - Часть 5
layout: tutorial-page.hbs
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="Создание простой игры - Часть 5"></iframe>

*Вы можете найти [полный проект здесь][9]. Если вы еще не видели [Часть 1][1], [Часть 2][2], [Часть 3][3] и [Часть 4][4], прочитайте их сначала.*

## Аудио и частицы

### Аудио

Аудио является критически важной частью вашей игры. Оно предоставит ценную обратную связь игроку о том, что их вводы оказывают эффект, а также может создать настроение и атмосферу.

В игре Keepy Up есть 3 аудиоэффекта: фоновая музыкальная дорожка, звук нажатия при ударе по мячу и грустный звук тромбона при проигрыше. Каждый из них обрабатывается несколько по-разному.

#### Музыка и стинг

Музыка и стинг обрабатываются аналогичным образом. Основное отличие состоит в том, что музыка установлена в режиме повтора. В `game.js` у нас есть атрибут скрипта, который связывает игровой скрипт с Entity с нашим звуковым компонентом, и мы просто воспроизводим и останавливаем правильный слот.

```javascript
this.audio.sound.stop(); // остановить текущий воспроизводимый звук
this.audio.sound.play("gameover") // воспроизвести слот 'gameover'
```

#### Шарик тап

Звук тапа шарика прямо прикреплен к шарику Entity. Это короткий, неповторяющийся звук. Поэтому мы воспроизводим его каждый раз, когда тап попадает на шарик.

```javascript
this.entity.sound.play("bounce");
```

### Частицы

![Частицы][7]

В Keepy Up у нас есть один эффект частиц. Это облако пыли, которое срабатывает при каждом касании мяча. Облако пыли - это не зацикленный эффект, и его нужно позиционировать и вращать так, чтобы облако отходило от мяча при его движении.

```javascript
this.impactEffect.setLocalPosition(tmp);
this.impactEffect.particlesystem.reset();
this.impactEffect.particlesystem.play();
this.impactEffect.lookAt(this.entity.getPosition());
```

В этом коде мы перезапускаем эффект однократной частицы, вызывая `reset()` и `play()`, и мы позиционируем и вращаем его так, чтобы он указывал на центр мяча.

![Curves][8]

Используя график Local Velocity в редакторе эффектов частиц, эффект частиц настроен так, чтобы стрелять в противоположном направлении от того, в котором он находится, то есть частицы движутся вдоль положительной оси z.

Продолжайте в [Части 6][6].

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-four/
[6]: /tutorials/keepyup-part-six/
[7]: /images/tutorials/beginner/keepyup-part-five/particle-bounce.gif
[8]: /images/tutorials/beginner/keepyup-part-five/particle-velocity-curves.jpg
[9]: https://playcanvas.com/project/406050
