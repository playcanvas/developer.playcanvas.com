---
title: HTML
layout: usermanual-page.hbs
position: 9
---

HTML-Asset содержит HTML-код. Код может быть как полной HTML-страницей, так и частичным HTML. Вы можете создать новый HTML-Asset в редакторе или загрузив файл с расширением .html.

Чтобы отредактировать HTML-Asset, щелкните правой кнопкой мыши на нем в редакторе и выберите "Редактировать".

Загруженный HTML-Asset представляет собой просто строку. Вы можете использовать эту строку как вам угодно - распространенный способ добавления HTML в документ выглядит следующим образом

```javascript
// получить Asset из реестра по id
var asset = app.assets.get(32);

// создать элемент
var div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);

// когда ресурс Asset загружается/изменяется,
// обновить html элемента
asset.on('load', function() {
    div.innerHTML = asset.resource;
});

// убедиться, что Asset загружается
app.assets.load(asset);
```
# Issue Tracker

## Новые функции

- Добавлен новый компонент "Tutorial Thumbnail"
- Добавлена поддержка импорта и экспорта Entity
- Добавлен новый тип Asset: Material Asset

## Улучшения

- Улучшен интерфейс Material Inspector
- Улучшен Shader Editor
- Улучшен Node Inspector
- Улучшен Texture Inspector
- Улучшен Graph Inspector

## Исправления ошибок

- Исправлены ошибки в Graph Editor
- Исправлены ошибки при импорте Assets
- Исправлены ошибки при экспорте Assets
