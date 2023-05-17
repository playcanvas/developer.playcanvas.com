---
title: ironSource Playable Ad (MRAID)
layout: usermanual-page.hbs
position: 3
---

PlayCanvas поддерживает формат и требования ironSource MRAID Playable Ad через [официальный внешний инструмент на GitHub][2].

Рекламные объявления ironSource используют стандарт [MRAID 2.0 API][mraid-api] и требуют, чтобы ассеты для объявления были внешними относительно `index.html`, а не встроенными.

Внешние ассеты необходимо будет загрузить на свой сервер или CDN, чтобы ironSource мог разместить объявление в своей сети.

Существуют некоторые ограничения, о которых следует знать при использовании инструмента, их можно найти в документации на [GitHub][2].

## Пример проекта

Проект [Cube Jump][5] готов к экспорту в формат ironSource MRAID Playable Ad, и ожидаемый HTML-вывод можно найти [здесь][6].

<iframe loading="lazy" src="https://playcanv.as/e/p/AA9osNyV/" title="Cube Jump Playable Ad"></iframe>

## Советы по размеру файла

Поскольку есть ограничение в 5 МБ (несжатых), вам придется планировать и бюджетировать использование ассетов для объявления.

Минифицированный код движка PlayCanvas имеет размер **~1,2 МБ** в несжатом виде, и из-за необходимости кодировать файлы ассетов в строках Base64, это добавляет **~30%** к размеру каждого файла ассетов.

Это означает, что у вас будет около ~3 МБ для ассетов перед кодированием Base64.

Старайтесь сохранять изображения как можно меньше по размерам и используйте такие инструменты, как [TinyPNG][4], чтобы еще больше уменьшить размер файла.

## Чек-лист для рекламных объявлений:

* Вы добавили вызов функции `mraid.open` (для URL-адресов, не относящихся к магазину) или `mraid.openStoreUrl` (для приложений магазина) в качестве части вашего обратного вызова для действия?

## Как экспортировать

Следуйте [шагам настройки][7] из файла readme в репозитории GitHub.

### Тестирование с помощью инструмента ironSource Playable Test Tool

ironSource предлагает отличный инструмент для тестирования [здесь][ironsource-test-tool], который можно использовать для проверки их списка требований к рекламным объявлениям.

Убедитесь, что на странице включены режим тестирования и MRAID.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-options.png" width="600">

Установите следующие параметры в `config.json`, как показано ниже. Это создаст ZIP-файл с данными ассетов и кодом движка PlayCanvas, отдельными от файла `index.html`.

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": false,
        "extern_files": {
            "enabled": true,
            "folder_name": "assets",
            "external_url_prefix": ""
        },
        "mraid_support": true
    }
```

И выполните команду:

```sh
npm run one-page
```

Полные сведения об опциях и командах можно найти в разделе readme для "[Преобразование проекта в один HTML-файл][2]".

Нам нужно будет разместить файлы на конечной точке HTTPS для тестирования с помощью инструмента тестирования ironSource.

Мы рекомендуем [разместить локально][host-locally] и использовать [ngrok][ngrok] для создания https-туннеля к вашему компьютеру, к которому может получить доступ приложение.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ngrok.png" width="600">

Это даст уникальный URL для конечной точки, который нам нужно добавить в `index.html`, где он ссылается на внешние файлы.

Измените конец `index.html` с:

```html
</style>

    <title>Cube Jump MRAID</title>
    <script src="mraid.js"></script>
    <script src="assets/playcanvas-stable.min.js"></script>
    <script src="assets/one-page-mraid-resize-canvas.js"></script>
    <script src="assets/__settings__.js"></script>
</head>
<body>
    <script src="assets/__start__.js"></script>
</body>
</html>
```

Для (где `XXXXXXX` - уникальный субдомен от ngrok):

```html
</style>

    <title>Cube Jump MRAID</title>
    <script src="mraid.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/playcanvas-stable.min.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/one-page-mraid-resize-canvas.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/__settings__.js"></script>
</head>
<body>
    <script src="https://XXXXXXX.ngrok.io/assets/__start__.js"></script>
</body>
</html>
```

Тестируйте локально на своем ПК, дважды щелкнув по `index.html`, чтобы убедиться, что он корректно воспроизводится.

Если он корректно воспроизводится на вашем ПК, мы можем протестировать его с помощью [инструмента тестирования ironSource][ironsource-test-tool], скопировав содержимое `index.html` и вставив его в область MRAID-тега инструмента.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-paste-mraid-tag.png" width="600">

Нажмите на 'Test Ad' и после отображения, воспроизведите рекламу, чтобы дойти до кнопки CTA. После нажатия на кнопку CTA инструмент должен показать, что все тесты пройдены, и предложить вам возможность сгенерировать код.

Это используется для тестирования на устройстве с помощью их приложения, доступного как на Android, так и на iOS.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-generate-code.png" width="400">

### Финальный экспорт для ironSource

Когда реклама готова к отправке в ironSource, загрузите внешние ресурсы на свой сервер или CDN и добавьте URL-адрес в параметры `config.json` через свойство `external_url_prefix`:

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": false,
        "extern_files": {
            "enabled": true,
            "folder_name": "assets",
            "external_url_prefix": "https://some-cdn.com/unique-id"
        },
        "mraid_support": true
    }
```

Следуйте процессу отправки играбельного объявления из [документации ironSource][ironsource-documentation].

[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/775981/overview/cube-jump-mraid
[6]: /downloads/is-playable-ad-cube-jump.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[mraid-api]: https://www.iab.com/guidelines/mraid/
[guid-generator]: https://www.guidgenerator.com/
[creative-preview]: https://play.google.com/store/apps/details?id=com.google.android.apps.audition&hl=en_GB&gl=US
[host-locally]: /user-manual/publishing/web/self-hosting/#running-a-downloaded-build
[ngrok]: https://ngrok.com/
[ironsource-test-tool]: https://demos.ironsrc.com/test-tool/?adUnitLoader=mraid&mode=testing
[ironsource-documentation]: https://developers.ironsrc.com/ironsource-mobile/general/submit-playable-qa/
