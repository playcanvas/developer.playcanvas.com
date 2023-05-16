---
title: Пост-эффекты
layout: usermanual-page.hbs
position: 6
---

PlayCanvas поддерживает добавление пост-обработки эффектов в ваши проекты. Пост-эффекты изменяют окончательное отображаемое изображение и предоставляют простой способ добавления визуального блеска в ваше приложение.

Мы реализовали пост-эффекты в виде скриптов, которые вы можете добавить к Entity, к которому прикреплен компонент [Camera][1]. Чтобы добавить пост-эффекты к камере, выполните следующие действия:

1. Выберите один из эффектов ниже и получите скрипт по ссылке на GitHub.
  * [Bloom][3]
  * [Brightness-Contrast][4]
  * [Hue-Saturation][5]
  * [FXAA][6]
  * [Sepia][7]
  * [Vignette][8]
2. Добавьте компонент [Script][9] к Entity, представляющему вашу камеру.
3. Назначьте желаемые скрипты пост-эффектов на компонент Script камеры Entity. Обратите внимание, что порядок, в котором скрипты пост-эффектов указаны в компоненте Script, определяет порядок их применения.

Вы также можете создавать собственные пост-эффекты. Вы можете найти дополнительные на [GitHub][2].

[1]: /user-manual/packs/components/camera
[2]: https://github.com/playcanvas/engine/tree/main/scripts/posteffects
[3]: /user-manual/graphics/posteffects/bloom
[4]: /user-manual/graphics/posteffects/brightness_contrast
[5]: /user-manual/graphics/posteffects/hue_saturation
[6]: /user-manual/graphics/posteffects/fxaa
[7]: /user-manual/graphics/posteffects/sepia
[8]: /user-manual/graphics/posteffects/vignette
[9]: /user-manual/packs/components/script
