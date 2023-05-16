---
title: Частицы
layout: usermanual-page.hbs
position: 5
---

PlayCanvas предоставляет всеобъемлющую поддержку для создания и редактирования систем частиц.

## Что такое система частиц?

Система частиц - это симуляция, которая управляет множеством независимо движущихся частиц. Они могут использоваться для приближения огромного количества эффектов, таких как дождь, снег, дым, огонь и так далее.

Обратите внимание, что частицы не симулируются физически. Они не взаимодействуют и не сталкиваются друг с другом. Они будут проходить сквозь поверхности в вашей сцене.

## Создание системы частиц

В 3D-просмотре редактора не выбранная система частиц представлена следующим значком:

![Значок системы частиц][1]

Чтобы создать новую систему частиц, просто создайте новую сущность и добавьте в нее компонент системы частиц. Для удобства меню редактора есть элемент, который делает это в один шаг:

![Создание системы частиц][2]

Новая созданная система частиц с настройками по умолчанию выглядит так:

![Система частиц по умолчанию][3]

Чтобы настроить систему частиц через интерфейс компонента системы частиц, обратитесь к справочнику [здесь][4].

## Запуск системы частиц в скрипте

Иногда вам может понадобиться, чтобы система частиц воспроизводилась в ответ на какое-то событие или в определенное время. Например, взрыв должен проигрываться, когда ракета достигает своей цели. Чтобы сделать это, убедитесь, что для вашей системы частиц отключена опция Autoplay. Затем прикрепите компонент скрипта к сущности вашей системы частиц. Следующие две строки запустят (или перезапустят) систему частиц:

```javascript
this.entity.particlesystem.reset();
this.entity.particlesystem.play();
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/playcanvas/engine/issues).

# Учебники

- [Tutorial Thumbnail](https://developer.playcanvas.com/en/tutorials/thumbnail/)
- [Entity](https://developer.playcanvas.com/en/tutorials/entity/)
- [Material Asset](https://developer.playcanvas.com/en/tutorials/material-asset/)
- [Material Inspector](https://developer.playcanvas.com/en/tutorials/material-inspector/)
- [Shader Editor](https://developer.playcanvas.com/en/tutorials/shader-editor/)
- [Node Inspector](https://developer.playcanvas.com/en/tutorials/node-inspector/)
- [Texture Inspector](https://developer.playcanvas.com/en/tutorials/texture-inspector/)
- [Graph Inspector](https://developer.playcanvas.com/en/tutorials/graph-inspector/)
- [Asset](https://developer.playcanvas.com/en/tutorials/asset/)
- [Graph Editor](https://developer.playcanvas.com/en/tutorials/graph-editor/)
- [Assets](https://developer.playcanvas.com/en/tutorials/assets/)

## Мягкие частицы

Мягкие частицы - это частицы, которые затухают около своих пересечений с геометрией сцены. Если мягкие частицы включены с использованием [```depthSoftening```][5], камера, которая отображает частицы, должна иметь включенную функцию [Depth Map][6].

[1]: /images/user-manual/graphics/particles/particle_system_icon.png
[2]: /images/user-manual/graphics/particles/particle_system_create.png
[3]: /images/user-manual/graphics/particles/particle_system_default.gif
[4]: /user-manual/packs/components/particlesystem
[5]: /api/pc.ParticleSystemComponent.html#depthSoftening
[6]: /user-manual/graphics/cameras/depth-layer
