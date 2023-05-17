---
title: 2D
layout: usermanual-page.hbs
position: 17
---

Движок PlayCanvas разработан для быстрого и простого создания 3D-игр и приложений. Однако мы также поддерживаем ряд отличных функций для создания 2D-игр. С 2D-функциями PlayCanvas вы получаете все преимущества мощного 3D-движка, но для 2D-игр.

# Базовые функции

## Спрайты

![Sprite][5]

2D-графика часто называется **Спрайтами**. В PlayCanvas вы можете создавать [Sprite Assets][0] и [Sprite Components][1]. Компонент Sprite прикрепляется к Entity для отображения 2D-графики в вашей сцене. Sprite Assets в PlayCanvas хранят несколько кадров изображений из текстурного атласа последовательно. Таким образом, вы можете использовать Sprite Asset для создания анимированной графики в стиле flip-book в ваших играх.

## Текстурные атласы

![Texture Atlas][6]

[Texture Atlas][2] - это улучшенная версия стандартного [Texture][3] asset. В дополнение к обычным функциям текстуры, текстурный атлас включает определения набора "кадров". Каждый кадр - это область текстуры, которую можно ссылаться в Sprite Asset.

## Редактор спрайтов

![Sprite Editor][7]

[Sprite Editor][4] - это инструмент, используемый для создания кадров текстурного атласа и Sprite Assets. Вы можете открыть редактор спрайтов, дважды щелкнув по любому текстурному атласу или Sprite Asset. [Подробнее][4].

*Арт создан [PixelBoy](https://twitter.com/2pblog1)*

[0]: /user-manual/assets/sprites
[1]: /user-manual/packs/components/sprite
[2]: /user-manual/assets/texture-atlas
[3]: /user-manual/assets/textures
[4]: /user-manual/2D/sprite-editor

[5]: /images/user-manual/2D/sprite.jpg
[6]: /images/user-manual/2D/texture-atlas.jpg
[7]: /images/user-manual/2D/sprite-editor.jpg
