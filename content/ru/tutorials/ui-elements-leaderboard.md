---
title: Пользовательский интерфейс - Таблица лидеров
layout: tutorial-page.hbs
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501980/2D16F7-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/nbMbtAGH/" title="User Interface - Leaderboard"></iframe>

*Таблица лидеров с использованием компонентов Element. Смотрите [полную сцену][1].*

В этом уроке показано, как создать простую таблицу лидеров с использованием встроенных [Elements][2]. Таблица лидеров заполняется программно данными, которые поступают из JSON-ассета.

## Иерархия

Вот как выглядит наш пользовательский интерфейс в иерархии:

![Hierarchy][4]

Как видите, у нас есть 2D [Screen][3], два элемента для отображения заголовка и подзаголовка, а также два элемента изображения, которые будут использоваться в качестве фонов и панелей для данных нашей таблицы лидеров. Под «Your Score» мы будем показывать позицию игрока в таблице лидеров, а под «Leaderboard» мы будем показывать остальные данные.

Вы также заметите отключенный объект Entity с названием «Entry Template». Это шаблон, который мы будем использовать для каждой строки таблицы. Мы будем клонировать этот шаблон для каждой записи в таблице лидеров, которая существует в нашем JSON-ассете, и добавлять каждый клон под соответствующую панель.

## Настройка экрана

Наш [screen][3] настроен следующим образом:

![Screen][5]

Поскольку это 2D-экран, мы установили флажок Screen Space. Наша опорная разрешение - это разрешение, которое мы нацеливаем - в данном случае это 1080 x 1920. Мы выбираем Blend для режима масштабирования, чтобы наш экран адаптировался к изменениям разрешения, и устанавливаем Scale Blend на 1, чтобы экран адаптировался только к изменениям высоты.

Компонент экрана также содержит компонент сценария, который содержит сценарий «leaderboard», который мы рассмотрим ниже.

## Настройка панели

Для каждой панели у нас есть элемент изображения, который показывает его фон. Под панелью мы будем программно добавлять клонов шаблона Entry Template. Наши панели закреплены в центре экрана.

## Настройка шаблона записи

Вот как выглядит наш шаблон для каждой строки таблицы лидеров в иерархии:

![Entry Template][6]

У него есть четыре дочерних текстовых элемента для отображения позиции в таблице лидеров, имени игрока, очков игрока и метки с надписью «PTS».

Сам «Entry Template» является элементом группы:

![Entry Template Attributes][7]

Обратите внимание, что у элемента группы есть разделенные горизонтальные якоря:

![Split Anchors][8]

Горизонтальные якоря не равны (они равны 0 и 1), что означает, что элемент будет автоматически расширяться, чтобы заполнить всю горизонтальную область, если экран изменит размер. У нас также есть горизонтальный отступ в 50 пикселей, чтобы оставить небольшой зазор от краев - отступ можно установить только при разделении якорей.

Теперь давайте посмотрим на остальных детей группы.

### Позиция

Позиция закреплена слева:

![Position][9]

### Имя

Имя закреплено слева и смещено немного вправо:

![Name][10]

### Очки

Очки закреплены справа

![Score][11]

### Очки

Очки закреплены справа

![Pts][12]

## Скрипт

Это скрипт «leaderboard», который считывает наш JSON-ассет и заполняет таблицу лидеров:

```javascript
var Leaderboard = pc.createScript('leaderboard');

// шаблон текстовой записи для клонирования
Leaderboard.attributes.add("template", {type: "entity"});
// родительский Issue Tracker для персонального счета
Leaderboard.attributes.add("personal", {type: "entity"});
// родительский Issue Tracker для топ-10
Leaderboard.attributes.add("leaderboard", {type: "entity"});

Leaderboard.prototype.initialize = function() {
    var self = this;

    this.entries = [];

    this.load(function (data) {
        self.clear();

        // добавляем персональную запись
        var y = -75;
        self.addEntry(self.personal, y, data.personal.position, data.personal.name, data.personal.score);

        // добавляем топ-10
        y = -60;
        for (var i = 0; i < Math.min(data.leaderboard.length, 10); i++) {
            self.addEntry(self.leaderboard, y, i+1, data.leaderboard[i].name, data.leaderboard[i].score);
            y -= 99; // смещение каждой записи
        }
    });
};

// очистить все записи в Issue Tracker
Leaderboard.prototype.clear = function () {
    for (var i = 0; i < this.entries.length; i++) {
        this.entries[i].destroy();
    }

    this.entries = [];
};

// добавить новую запись в Issue Tracker
Leaderboard.prototype.addEntry = function (parent, y, position, name, score) {
    var entry = this.template.clone();
    entry.enabled = true;

    entry.findByName("Position").element.text = position.toString();
    entry.findByName("Name").element.text = name.toUpperCase();
    entry.findByName("Score").element.text = score.toString();

    this.entries.push(entry);

    parent.addChild(entry);
    entry.translateLocal(0, y, 0);
};

// Моделирование загрузки данных Issue Tracker, для этой демонстрации мы просто получаем данные из JSON-файла в проекте
// Для вашего проекта вы можете загрузить это с серверного бэкенда
Leaderboard.prototype.load = function (callback) {
    var asset = this.app.assets.find("leaderboard-data.json");
    asset.ready(function () {
        callback(asset.resource);
    });
    this.app.assets.load(asset);
};
```

[1]: https://playcanvas.com/editor/scene/547907
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/leaderboard/hierarchy.png
[5]: /images/tutorials/ui/leaderboard/screen.png
[6]: /images/tutorials/ui/leaderboard/template.png
[7]: /images/tutorials/ui/leaderboard/group.png
[8]: /images/tutorials/ui/leaderboard/split-anchors.png
[9]: /images/tutorials/ui/leaderboard/position.png
[10]: /images/tutorials/ui/leaderboard/name.png
[11]: /images/tutorials/ui/leaderboard/score.png
[12]: /images/tutorials/ui/leaderboard/pts.png
