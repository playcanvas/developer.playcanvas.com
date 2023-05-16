---
title: Snapchat Playable Ad
layout: usermanual-page.hbs
position: 2
---

PlayCanvas поддерживает формат и требования Snapchat Playable Ad через [официальный внешний инструмент на GitHub][2].

Snapchat playable ads использует стандарт [MRAID 2.0 API][mraid-api] и требует, чтобы активы для рекламы были внешними относительно `index.html`, а не встроенными.

Внешние активы должны быть в папке с уникальным именем (что инструмент обрабатывает для вас), чтобы их можно было загрузить на серверы CDN Snapchat.

Существуют некоторые ограничения, которые следует учитывать при использовании инструмента, их можно найти в документации на [GitHub][2].

## Пример проекта

Проект [Cube Jump][5] готов к экспорту в формат Snapchat Playable Ad, и ожидаемый HTML-вывод можно найти [здесь][6].

<iframe loading="lazy" src="https://playcanv.as/e/p/X1nwbUGA/" title="Cube Jump Playable Ad"></iframe>

## Советы по размеру файла

Поскольку есть мягкий лимит в 5 МБ (несжатый), вам придется планировать и бюджетировать использование ассетов для рекламы.

Минифицированный код движка PlayCanvas имеет размер **~1,2 МБ** в несжатом виде, и из-за необходимости кодировать файлы ассетов в строках Base64 это добавляет **~30%** к размеру каждого файла ассетов.

Это означает, что у вас будет около ~3 МБ для ассетов перед кодированием Base64.

Постарайтесь сохранять изображения с наименьшими возможными размерами и используйте инструменты, такие как [TinyPNG][4], чтобы еще больше уменьшить размер файла.

## Чек-лист для играбельной рекламы:

Сеть рекламы Snapchat требует, чтобы функция вызова к действию была в `index.html`, где сеть может заменить ее уникальной отслеживающей версией при обслуживании пользователю. URL будет установлен в инструменте рекламной кампании Snapchat.

Инструмент оборачивает эту логику в глобальную функцию: `snapchatCta();`, которая должна быть вызвана в проекте играбельной рекламы.

* Вы вызвали функцию `snapchatCta();` в качестве части обратного вызова к действию?

## Как экспортировать

Следуйте [шагам настройки][7] из файла readme в репозитории GitHub.

### Тест сухого прогона

Поскольку у Snapchat еще нет официального инструмента для тестирования, сначала мы должны провести тест сухого прогона, прежде чем экспортировать в формат, который ожидает рекламная сеть Snapchat.

Установите следующие параметры в `config.json`, как показано ниже. Это создаст ZIP-файл с данными ассетов и кодом движка PlayCanvas в виде отдельных файлов от `index.html`.

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": true,
        "extern_files": {
            "enabled": true,
            "folder_name": "78fb9255-3033-4fe2-b9e1-355b149229a1",
            "external_url_prefix": ""
        },
        "mraid_support": true,
        "snapchat_cta": true
    }
```

`folder_name` должно быть уникальной строкой. Для этой цели вы можете использовать случайный GUID из [генератора GUID][guid-generator] или ваш представитель Snapchat может иметь определенную строку, которую вы должны использовать.

И выполните команду:

```sh
npm run one-page
```

Полные сведения об опциях и командах можно найти в разделе readme для "[Преобразование проекта в один HTML-файл][2]".

Для тестирования рекламы на устройстве можно использовать Android-приложение [Creative Preview][creative-preview], но нам нужно разместить рекламу на https-сервере.

Мы рекомендуем [разместить локально][host-locally] и использовать [ngrok][ngrok] для создания https-туннеля к вашему компьютеру, к которому может получить доступ приложение.

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/snapchat-playable-ads/ngrok.png" width="600">

После настройки откройте приложение Creative Preview и создайте новую рекламу типа "Display" со следующими настройками:

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/snapchat-playable-ads/creative-preview.png" width="300">

### Экспорт для Snapchat

Когда реклама готова к загрузке для Snapchat, нам нужно добавить префикс URL CDN Snapchat к ссылкам на ресурсы в `index.html`. Мы можем сделать это через опции в `config.json` через свойство `external_url_prefix`:

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": true,
        "extern_files": {
            "enabled": true,
            "folder_name": "78fb9255-3033-4fe2-b9e1-355b149229a1",
            "external_url_prefix": "https://rtb-ads.shadow.snapads.com/html5"
        },
        "mraid_support": true,
        "snapchat_cta": true
    }
```

ZIP-файл можно передать вашему представителю Snapchat для загрузки в рекламную сеть.

[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/796932/overview/cube-jump-snapchat-ad
[6]: /downloads/sc-playable-ad-cube-jump.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[mraid-api]: https://www.iab.com/guidelines/mraid/
[guid-generator]: https://www.guidgenerator.com/
[creative-preview]: https://play.google.com/store/apps/details?id=com.google.android.apps.audition&hl=en_GB&gl=US
[host-locally]: /user-manual/publishing/web/self-hosting/#running-a-downloaded-build
[ngrok]: https://ngrok.com/
