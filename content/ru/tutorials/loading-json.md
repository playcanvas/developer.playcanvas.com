---
title: Загрузка данных JSON
layout: tutorial-page.hbs
tags: loading
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405827/G8YF23-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/cHnXIXoN/" title="Загрузка данных JSON"></iframe>

[Этот проект][1] показывает, как загрузить данные JSON двумя способами. Во-первых, из Asset в проекте. Во-вторых, по протоколу HTTP с удаленного сервера.

## Загрузка JSON из Asset

```javascript
Game.attributes.add('characterData', {
    type: 'asset',
    assetType: 'json'
});

//...

Game.prototype.parseCharacterData = function (data) {
    var names = [];

    // Чтение данных о персонажах из JSON-ресурса и возвращение списка имен
    var characters = data.characters;
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        names.push(character.firstName + ' ' + character.lastName);
    }

    return names;
};

//...

// Получение данных JSON из ресурса проекта
var characterData = this.characterData.resource;

// Разбор данных JSON
var names = this.parseCharacterData(characterData);
```

Вы можете видеть в приведенном выше коде, что все, что вам нужно сделать для загрузки данных JSON из ассетов вашего проекта, это использовать атрибут сценария типа 'asset' или получить актив из реестра ассетов, а затем получить доступ к свойству `resource`. Для актива типа `json` данные уже будут проанализированы в стандартный объект javascript при доступе к свойству `resource`.

После того, как у вас есть объект javascript, вы можете получить доступ к данным, как обычно. Например, перебирая свойства, как в `parseCharacterData`.

## Загрузка JSON с удаленного сервера

```javascript
Game.prototype.loadJsonFromRemote = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};

//...

// загрузить JSON с удаленного сервера
this.loadJsonFromRemote("https://api.github.com/", function (data) {
    // отобразить JSON данные с удаленного сервера
    el = document.querySelector("#xhr-json");
    el.textContent = JSON.stringify(data, null, 4);
});
```

В этом коде мы используем объект XMLHttpRequest (который является частью стандартного веб-браузерного API) для запроса JSON-данных с URL, в данном случае API Github.

После получения события `"load"` мы разбираем JSON-данные с помощью `JSON.parse` (еще одна часть стандартного веб-браузерного API) и возвращаем данные через функцию `callback`.

Обратите внимание, что вызов `loadJsonFromRemote` является **асинхронным**.

Вот полный список кода:

```javascript
var Game = pc.createScript('game');

Game.attributes.add('display', {
    type: 'asset',
    assetType: 'html'
});

Game.attributes.add('style', {
    type: 'asset',
    assetType: 'css'
});

// Создать атрибут скрипта для включения перетаскивания и падения JSON-ассета с данными персонажа
Game.attributes.add('characterData', {
    type: 'asset',
    assetType: 'json'
});

// инициализировать код, вызываемый один раз для каждой сущности
Game.prototype.initialize = function() {
    this.initDisplay();

    var el;

    // Получить данные JSON из ассетов проекта
    var characterData = this.characterData.resource;

    // Разобрать данные JSON
    var names = this.parseCharacterData(characterData);

    // отображение имен персонажей
    el = document.querySelector("#character-name");
    el.textContent = names.join(", ");

    // отображение данных JSON из ассетов
    el = document.querySelector("#asset-json");
    el.textContent = JSON.stringify(characterData, null, 4);

    // загрузить JSON с удаленного сервера
    this.loadJsonFromRemote("https://api.github.com/", function (data) {
        // отображение данных JSON с удаленного сервера
        el = document.querySelector("#xhr-json");
        el.textContent = JSON.stringify(data, null, 4);
    });
};

Game.prototype.initDisplay = function () {
    var el = pc.createStyle(this.style.resource);
    document.head.appendChild(el);

    var div = document.createElement("div");
    div.setAttribute("id", "container");
    div.innerHTML = this.display.resource;
    document.body.appendChild(div);
};

Game.prototype.parseCharacterData = function (data) {
    var names = [];

    // Чтение данных персонажа из JSON-актива, возвращение списка имен
    var characters = data.characters;
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        names.push(character.firstName + ' ' + character.lastName);
    }

    return names;
};

Game.prototype.loadJsonFromRemote = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};
```

Попробуйте [проект][1] самостоятельно.

[1]: https://playcanvas.com/project/405827
