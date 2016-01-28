---
title: CSS
template: usermanual-page.tmpl.html
position: 11
---

CSS ассет содержит CSS код. Вы можете создать новый CSS ассет в редакторе или загрузив .css файл.

Для редактирования ассета таблицы стилей CSS, кликните правой кнопкой в редакторе и выберите пункт "Edit".

Загруженный CSS-ассет это просто строка. Вы можете использовать её как хотите. Основной способ добавить загруженную CSS-строку в документ такой:

```javascript
// get asset from registry by id
var asset = app.assets.get(32);

// create element
var style = pc.createStyle(asset.resource || '');
document.head.appendChild(style);

// when asset resource loads/changes,
// update html of element
asset.on('load', function() {
    style.innerHTML = asset.resource;
});

// make sure assets loads
app.assets.load(asset);
```

