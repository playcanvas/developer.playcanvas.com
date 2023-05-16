---
title: Facebook Playable Ad
layout: usermanual-page.hbs
position: 1
---

PlayCanvas поддерживает форматы и требования [Facebook Playable Ad][1] через [официальный внешний инструмент на GitHub][2].

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/bitmoji-creator.gif" style="margin:0px 5px; display:inline;" width="185"> <img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/cube-jump.gif" style="margin:0px 5px; display:inline;" width="185"> <img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/flappy-bird.gif" style="margin:0px 5px; display:inline;" width="185">

Инструмент может создавать как один 2МБ (несжатый) HTML-файл, так и форматы ZIP размером 5МБ (несжатые) через опции конфигурации. Полные спецификации для Facebook Playable Ads можно найти в их [центре помощи][3].

Существуют некоторые ограничения, о которых следует знать при использовании инструмента, их можно найти в документации на [GitHub][2].

## Пример проекта

Проект [Cube Jump][5] готов к экспорту в формате Facebook Playable Ad, и ожидаемый [HTML-вывод можно найти здесь][6].

<iframe loading="lazy" src="https://playcanv.as/e/p/Hywjl9Bh/" title="Cube Jump Playable Ad"></iframe>

## Советы по размеру файла

Из-за строгого ограничения на размер файла вам придется планировать и распределять использование ассетов для рекламы.

Минифицированный код движка PlayCanvas имеет размер **~1,2 МБ** в несжатом виде, и из-за необходимости кодировать файлы ассетов в строки Base64, это добавляет **~30%** к размеру каждого файла актива.

Это означает, что для одного HTML-формата остается около 500 КБ для ассетов перед их кодированием в строки Base64. Для формата ZIP это будет около 3 МБ для ассетов перед кодированием.

Постарайтесь сохранять изображения с наименьшими возможными размерами и используйте инструменты, такие как [TinyPNG][4], чтобы еще больше уменьшить размер файла.

## Чек-лист для игровой рекламы:

* Вы добавили вызов функции `FbPlayableAd.onCTAClick()` в качестве части вашего обратного вызова для действия?

## Как экспортировать

Следуйте [шагам настройки][7] из файла readme в репозитории GitHub.

### Один HTML

Установите следующие параметры в `config.json`, как показано ниже. Это создаст один HTML-файл в каталоге вывода.

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": false
    }
```

# Issue Tracker

## Ошибки

- [ ] Ошибка 1
- [ ] Ошибка 2
- [ ] Ошибка 3

## Улучшения

- [ ] Улучшение 1
- [ ] Улучшение 2
- [ ] Улучшение 3

# Tutorial Thumbnail

![Tutorial Thumbnail](thumbnail.png)

# Entity

- [ ] Создать Entity
- [ ] Удалить Entity
- [ ] Изменить Entity

# Material Asset

- [ ] Создать Material Asset
- [ ] Удалить Material Asset
- [ ] Изменить Material Asset

# Material Inspector

- [ ] Открыть Material Inspector
- [ ] Закрыть Material Inspector
- [ ] Изменить параметры в Material Inspector

# Shader Editor

- [ ] Открыть Shader Editor
- [ ] Закрыть Shader Editor
- [ ] Изменить шейдеры в Shader Editor

# Node Inspector

- [ ] Открыть Node Inspector
- [ ] Закрыть Node Inspector
- [ ] Изменить параметры в Node Inspector

# Texture Inspector

- [ ] Открыть Texture Inspector
- [ ] Закрыть Texture Inspector
- [ ] Изменить текстуры в Texture Inspector

# Graph Inspector

- [ ] Открыть Graph Inspector
- [ ] Закрыть Graph Inspector
- [ ] Изменить параметры в Graph Inspector

# Asset

- [ ] Создать Asset
- [ ] Удалить Asset
- [ ] Изменить Asset

# Graph Editor

- [ ] Открыть Graph Editor
- [ ] Закрыть Graph Editor
- [ ] Изменить графы в Graph Editor

# Assets

- [ ] Создать Assets
- [ ] Удалить Assets
- [ ] Изменить Assets

### ZIP-файл

Установите следующие параметры в `config.json`, как показано ниже. Это создаст ZIP-файл с данными Asset и кодом PlayCanvas Engine в виде отдельных файлов от `index.html`.

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": true
    }
```

# Issue Tracker

## Ошибки

- [ ] Ошибка 1
- [ ] Ошибка 2
- [ ] Ошибка 3

## Улучшения

- [ ] Улучшение 1
- [ ] Улучшение 2
- [ ] Улучшение 3

# Tutorial Thumbnail

![Tutorial Thumbnail](https://example.com/tutorial-thumbnail.jpg)

# Entity

- Имя: Entity
- Тип: 3D модель
- Asset: Material Asset

# Material Asset

- Имя: Material Asset
- Тип: Материал
- Material Inspector: [Открыть Material Inspector](https://example.com/material-inspector)

# Material Inspector

- Shader Editor: [Открыть Shader Editor](https://example.com/shader-editor)
- Node Inspector: [Открыть Node Inspector](https://example.com/node-inspector)
- Texture Inspector: [Открыть Texture Inspector](https://example.com/texture-inspector)
- Graph Inspector: [Открыть Graph Inspector](https://example.com/graph-inspector)

# Shader Editor

- Graph Editor: [Открыть Graph Editor](https://example.com/graph-editor)

# Assets

- Asset 1
- Asset 2
- Asset 3

И выполните команду:

```
git clone https://github.com/OurMachinery/themachinery-public.git
```

## Issue Tracker

Если вы нашли ошибку или у вас есть предложение, пожалуйста, сообщите нам через наш [Issue Tracker](https://github.com/OurMachinery/themachinery-public/issues).

## Документация

Документация доступна на нашем сайте: [The Machinery Documentation](https://ourmachinery.com/doc/).

## Быстрый старт

1. Запустите **The Machinery**.
2. Выберите **New Project**.
3. Введите имя проекта и выберите папку для сохранения.
4. Нажмите **Create**.
5. В окне **Assets** дважды щелкните по **Tutorial Thumbnail**.
6. Выберите **Entity** и нажмите **Create**.
7. В окне **Assets** дважды щелкните по **Material Asset**.
8. В окне **Material Inspector** нажмите **Open Shader**.
9. В окне **Shader Editor** нажмите **Open Graph**.
10. В окне **Graph Editor** выберите узел и нажмите **Open Node**.
11. В окне **Node Inspector** измените параметры узла.
12. В окне **Texture Inspector** измените параметры текстуры.
13. В окне **Graph Inspector** измените параметры графа.
14. Сохраните свои изменения и наслаждайтесь результатом!

## Лицензия

Смотрите файл [LICENSE](LICENSE) для подробной информации о лицензии.

```sh
npm run one-page
```

Полные сведения об опциях и командах можно найти в разделе readme для "[Преобразование проекта в один HTML-файл][9]".

### Как провести тестирование

Следуйте шагам [здесь][8] для создания рекламы на Facebook, и в момент загрузки файлов для рекламы есть возможность провести тестирование в менеджере.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-tester.jpg">

Пожалуйста, проигнорируйте предупреждение о том, что источник может содержать `XMLHttpRequest`, так как кодовый путь был удален этим инструментом.

Facebook также позволяет проводить тестирование на устройстве через менеджер рекламы, но требует сначала опубликовать рекламу. Это странное ограничение со стороны Facebook, но в настоящее время оно необходимо.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-preview-device.jpg">

[1]: https://www.facebook.com/business/ads/playable-ad-format
[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[3]: https://www.facebook.com/business/help/412951382532338
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/354998/overview/cube-jump-playable-ad-for-fb
[6]: /downloads/fb-playable-ad-cube-jump-html.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[8]: https://www.facebook.com/business/help/338940216641734
[9]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
