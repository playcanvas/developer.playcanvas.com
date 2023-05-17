---
title: Сжатие текстур
layout: usermanual-page.hbs
position: 1
---

Данные текстур хранятся в видеопамяти (или VRAM) устройства. Важно следить за тем, чтобы ваше приложение не исчерпывало VRAM, так как это может вызвать нежелательные вещи, такие как сбои вкладок браузера.

Редактор имеет возможность применять схемы сжатия с потерями к вашим текстурам, чтобы значительно уменьшить использование VRAM с помощью Basis.

[Basis][1] - это формат "суперсжатых" текстур. Это платформонезависимый формат сжатия с потерями, который может быть преобразован в поддерживаемый аппаратными средствами формат сжатия во время выполнения. Поддерживаемые форматы преобразования: ASTC, DXT, ETC2, ETC, PVR и ATC (выбираются в указанном порядке, если доступны).

Рассмотрим этот текстурный ассет:

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/brick.jpg" alt="Brick Texture" width="256" height="256">

Это изображение 512x512 в формате JPG размером 202 КБ. Однако JPG является сжатым форматом, и когда он передается графическому движку, он расширяется до несжатого формата RGB8, который занимает 1,05 МБ VRAM (включая уровни мип-карт).

Включение сжатия текстур дает следующие результаты:

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/compression-results.png" alt="Basis Compression results" width="400">

Сжатие позволило уменьшить использование VRAM в 6 раз. Более того, в данном случае сжатие также уменьшило размер загрузки с 202 КБ до всего лишь 46 КБ, используя настройку качества Default и режим ETC.

Ниже представлено сравнение текстуры кирпича на Mac с Chrome:

<a href="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-brick.png" target="_blank"><img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-brick-thumb.jpg" alt="Сравнение сжатия текстуры кирпича"></a>

Вот еще один пример куба PlayCanvas [с Basis (режим ETC)][2] и [без него][3] на Mac с Chrome:

<a href="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-cube.png" target="_blank"><img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-cube-thumb.jpg" alt="Сравнение сжатия куба PlayCanvas"></a>

## Использование сжатия текстур Basis

После того, как текстура импортирована в редактор, выберите ее и прокрутите вниз в инспекторе, чтобы найти раздел Compression.

1. Отметьте BASIS.
2. Нажмите на Import Basis, чтобы добавить WASM-модуль для среды выполнения Basis в проект (это нужно сделать только один раз).
3. Измените режим с 'ETC (меньший размер, ниже качество)' на 'ASTC (больший размер, выше качество)', если вам нужно уменьшить артефакты сжатия на этой текстуре.
4. Отметьте Normals, если сжимаете нормальную карту.
5. Измените настройку качества для балансировки размера файла и качества. Низкое качество дает меньшие размеры файлов.
6. Нажмите на Compress Basis.

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/enable-basis-texture-compression.gif" alt="Включение сжатия текстур Basis" width="400">

WASM-модуль Basis добавит 253 КБ дополнительных сжатых данных к размеру предварительной загрузки, но это должно быть компенсировано экономией размера текстур по сравнению с использованием файлов формата сжатия текстур старого типа ([см. ниже][4]).

Чтобы удалить сжатие Basis из текстуры:

1. Снимите галочку с BASIS.
2. Нажмите на Compress Basis.

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/disable-basis-texture-compression.gif" alt="Отключение сжатия текстур Basis" width="400">

Если вы больше не хотите использовать Basis, удалите сжатие Basis со всех текстур и удалите папку Basis из проекта.

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/delete-basis-library.png" alt="Удаление модуля Basis" width="400">

## Ограничения Basis

В PlayCanvas есть некоторые ограничения сжатия текстур Basis.

1. Формат PVR поддерживает только текстуры, размеры которых являются одновременно квадратными (одинаковая ширина и высота) и степенью двойки (например, 256, 512, 1024 и так далее). Старые устройства iOS (с SoC A6 или ниже, такие как iPhone 5 и 5C) и старые версии iOS (13.7 и ниже) поддерживают только PVR. Текстура Basis, которая не является квадратной или степенью двойки, не может быть преобразована в формат PVR, но вместо этого будет использовать 16-битный формат пикселей 565. Она все равно будет отображаться корректно, хотя может занимать больше VRAM.
2. Максимальные размеры текстур, поддерживаемые для сжатия Basis, составляют 4096x4096. Текстуры большего размера займут чрезмерное количество времени для сжатия, поэтому это отключено.

## Сжатие текстур устаревшего типа

Мы настоятельно рекомендуем использовать сжатие Basis, где это возможно, так как для него требуется один файл текстуры для всех платформ, и он также имеет гораздо меньший размер по сравнению с устаревшими форматами. Наши тесты показывают, что Basis меньше примерно на 50% с минимальной разницей в качестве.

Схемы устаревших текстур:

* DXT: Обычно поддерживается настольными устройствами.
* PVR: Обычно поддерживается устройствами iOS.
* ETC: Обычно поддерживается устройствами Android.

Чтобы использовать параметры сжатия устаревших текстур, выберите текстуру и прокрутите вниз в инспекторе, чтобы найти раздел Сжатие.

1. Установите флажок LEGACY.
2. Установите флажки для всех форматов, которые вы хотите использовать.
3. Нажмите на Compress Legacy.

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/enable-legacy-texture-compression.gif" alt="Включение сжатия устаревших текстур" width="400">

Чтобы удалить один или несколько форматов:

1. Снимите флажки со всех форматов, которые вы хотите удалить.
2. Нажмите на Compress Legacy.

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/disable-legacy-texture-compression.gif" alt="Отключение сжатия устаревших текстур" width="400">

## Миграция с устаревшего сжатия текстур на Basis

Если у вас есть проект, который уже использует форматы сжатия устаревших текстур и вы хотите использовать Basis, выполните следующие действия:

1. Удалите все форматы устаревших текстур.
2. Включите и используйте Basis.

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/migrate-legacy-to-basis.gif" alt="Миграция с устаревшего на Basis" width="400">


[1]: https://github.com/BinomialLLC/basis_universal
[2]: https://playcanv.as/p/j8rsh3eO/
[3]: https://playcanv.as/p/nAW3WkW8/
[4]: #legacy-texture-compression
[5]: #using-basis-texture-compression
[6]: /images/user-manual/assets/textures/texture-compression/compression-results.png
