---
title: Эффект Bloom
layout: usermanual-page.hbs
position: 1
---

[Bloom][1] - это эффект постобработки, используемый для воспроизведения артефакта изображения реальных камер. Эффект создает бахрому (или перья) света, исходящую от границ ярких областей на изображении, что способствует созданию иллюзии чрезвычайно яркого света, ослепляющего камеру, захватывающую сцену.

Вот изображение без эффекта Bloom:

![Изображение без эффекта][2]

И то же изображение с примененным эффектом Bloom:

![Изображение с эффектом][3]

Встроенный эффект Bloom имеет следующие атрибуты:

* **Bloom Intensity**: Интенсивность эффекта
* **Bloom Threshold**: Будут обрабатываться только пиксели, ярче этого порога. Диапазон от 0 до 1.
* **Blur Amount**: Регулирует степень размытия.

Найдите скрипт эффекта постобработки на [GitHub][4].

[1]: https://en.wikipedia.org/wiki/Bloom_(shader_effect)
[2]: /images/platform/posteffects/without_effects.png
[3]: /images/platform/posteffects/with_bloom.png
[4]: https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-bloom.js
