---
title: Создание простой игры - Часть 3
layout: tutorial-page.hbs
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="Создание простой игры - Часть 3"></iframe>

*Вы можете найти [полный проект здесь][4]. Если вы не видели [Часть 1][1] и [Часть 2][2], прочитайте их сначала.*

## Скрипт игры и ввод

Эти два скрипта `game.js` и `input.js` прикреплены к корневой сущности в сцене, называемой "Game". Скрипты обычно выполняются в том порядке, в котором они встречаются в иерархии, поэтому проще всего прикрепить любые неспецифические для Entity скрипты к первой сущности. Вы также можете управлять порядком загрузки скриптов в панели настроек редактора, чтобы сначала загружать скрипты без их привязки к сущности.

## game.js

```javascript
var Game = pc.createScript('game');

Game.attributes.add('uiMenu', {type: 'entity'});
Game.attributes.add('uiInGame', {type: 'entity'});
Game.attributes.add('uiGameOver', {type: 'entity'});
Game.attributes.add('audio', {type: 'entity'});

Game.STATE_MENU = 'menu';
Game.STATE_INGAME = 'ingame';
Game.STATE_GAMEOVER = 'gameover';

// инициализация кода, вызываемая один раз для каждой сущности
Game.prototype.initialize = function() {
    this._state = Game.STATE_MENU;
    this._score = 0;

    this.setResolution();

    window.addEventListener("resize", this.setResolution.bind(this));

    // слушаем события от пользовательского интерфейса
    this.app.on("ui:start", this.start, this);
    this.app.on("ui:reset", this.reset, this);
};

Game.prototype.setResolution = function () {
    // если ширина экрана меньше 640
    // заполняем все окно
    // в противном случае
    // используем настройки по умолчанию

    var w = window.screen.width;
    var h = window.screen.height;

    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};

// Вызовите это, чтобы перейти от MENU к INGAME
Game.prototype.start = function () {
    this._state = Game.STATE_INGAME;
    this.app.fire("game:start");
    this.uiMenu.enabled = false;
    this.uiInGame.enabled = true;

    this.audio.sound.play("music");
};

// Вызовите это, чтобы перейти от INGAME к GAMEOVER
Game.prototype.gameOver = function () {
    this._state = Game.STATE_GAMEOVER;
    this.app.fire("game:gameover");
    this.uiInGame.enabled = false;
    this.uiGameOver.enabled = true;

    this.audio.sound.stop();
    this.audio.sound.play("gameover");
};

// Вызовите это, чтобы перейти от GAMEOVER к MENU
Game.prototype.reset = function () {
    this.app.fire("game:reset");
    this.resetScore();
    this._state = Game.STATE_MENU;
    this.uiGameOver.enabled = false;
    this.uiMenu.enabled = true;

    this.audio.sound.stop();
};

// вернуть текущий счет
Game.prototype.getScore = function () {
    return this._score;
};

// добавить значение к счету
Game.prototype.addScore = function (v) {
    this._score += v;
    this.app.fire("game:score", this._score);
};

// сбросить счет
Game.prototype.resetScore = function () {
    this._score = 0;
    this.app.fire("game:score", this._score);
};
```

### Состояние игры

Скрипт игры управляет общим состоянием игры, он предоставляет некоторые методы для изменения состояния игры и запускает события для оповещения другого кода о том, что состояние игры изменилось.

Мы разделили игру на три основных состояния: Меню, В игре и Конец игры. Скрипт игры предоставляет методы для перехода между каждым состоянием: `start()`, `gameOver()` и `reset()`. Каждый из них устанавливает переменную `_state`, чтобы запомнить, в каком состоянии мы находимся; запускает событие приложения, чтобы оповестить другие скрипты об изменении состояния; включает и выключает элементы пользовательского интерфейса; и управляет состоянием музыки или звукового эффекта конца игры.

Эти методы изменения состояния будут вызываться из других скриптов, когда происходят соответствующие триггерные события. Например, метод `gameOver()` вызывается из `ball.js`, когда мяч выходит за нижнюю границу экрана.

### События приложения

Давайте остановимся и рассмотрим, как скрипт игры запускает события в приложении.

```javascript
this.app.fire("game:start")
```

События являются чрезвычайно полезным способом общения от одного скрипта к многим другим скриптам. Принцип работы события заключается в том, что объект (в данном случае `this.app`) выбирает "запустить" событие. Любой другой код, имеющий доступ к объекту, может выбрать прослушивание одного или нескольких событий на этом объекте, и код будет уведомлен, когда событие будет запущено.

Одна из проблем с этим заключается в том, что коду нужен доступ к объекту, чтобы начать прослушивание события. Вот почему события приложения настолько полезны. Каждый скрипт в PlayCanvas имеет доступ к `this.app`. Это делает его полезным для действия в качестве центрального коммуникационного узла между любыми другими скриптами.

Мы решили использовать шаблон пространства имен, чтобы сделать события более понятными и избежать конфликтов. Чтобы прослушать событие `game:start` из примера выше, вы должны использовать этот код:

```javascript
this.app.on("game:start", function () {
    console.log("событие game:start было вызвано");
}, this)
```

### Счет

Игровой скрипт также управляет текущим счетом. Он предоставляет методы, которые используются для изменения счета, и также запускает события, чтобы другой код знал, что счет изменился.

### Разрешение

Наконец, игровой скрипт обрабатывает начальный выбор разрешения, чтобы убедиться, что основной холст имеет правильный размер как на мобильных устройствах, так и на настольных компьютерах. На мобильных устройствах (определяется экраном менее 640 пикселей в ширину) игра просто заполняет весь экран. На настольных компьютерах мы используем предопределенное разрешение, установленное в настройках проекта.

## input.js

Скрипт ввода прослушивает ввод от мыши или сенсорного экрана, нормализует ввод от двух в общее назначение "tap" и сообщает остальной части приложения о том, что произошло нажатие.

```javascript
var Input = pc.createScript('input');

Input.attributes.add('ball', {type: 'entity'});
Input.attributes.add('camera', {type: 'entity'});
Input.attributes.add('ballRadius', {type: 'number', default: 0.5});

Input.worldPos = new pc.Vec3();

// инициализация кода, вызываемая один раз для каждой сущности
Input.prototype.initialize = function() {

    var self = this;

    this._paused = true;

    // Слушаем игровые события, чтобы знать, следует ли реагировать на ввод
    this.app.on("game:start", function () {
        self._paused = false;
    });
    this.app.on("game:gameover", function () {
        self._paused = true;
    });

    // настройка событий касания, если доступны
    if (this.app.touch) {
        this.app.touch.on("touchstart", this._onTouchStart, this);
    }

    // настройка событий мыши
    this.app.mouse.on("mousedown", this._onMouseDown, this);
};

Input.prototype._onTap = function (x, y) {
    var p = this.ball.getPosition();
    var camPos = this.camera.getPosition();
    var worldPos = Input.worldPos;

    // Получаем позицию в 3D-мире касания или клика
    // Сохраняем в переменной worldPos.
    // Эта позиция находится на том же расстоянии от камеры, что и мяч
    this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);

    // получаем расстояние от касания/клика до мяча
    var dx = (p.x - worldPos.x);
    var dy = (p.y - worldPos.y);

    // Если клик внутри мяча, тапните по мячу
    var lenSqr = dx*dx + dy*dy;
    if (lenSqr < this.ballRadius*this.ballRadius) {
        this.ball.script.ball.tap(dx, dy);
    }
};

Input.prototype._onTouchStart = function (e) {
    if (this._paused) {
        return;
    }

    // реагировать на событие
    var touch = e.changedTouches[0];
    this._onTap(touch.x, touch.y);

    // остановить срабатывание событий мыши
    e.event.preventDefault();
};

Input.prototype._onMouseDown = function (e) {
    if (this._paused) {
        return;
    }

    // реагировать на событие
    this._onTap(e.x, e.y);
};
```

Сначала в функции инициализации мы настраиваем прослушивание событий. Мы слушаем события приложения, чтобы определить, находится ли игра в состоянии паузы (то есть в меню или в состоянии окончания игры). Если ввод приостановлен, мы не реагируем на касания. Затем мы слушаем события касания (обратите внимание, что вы должны проверить наличие `this.app.touch`) и события мыши.

### События касания

Для событий касания мы берем первое касание и передаем координаты экрана. Мы также вызываем `preventDefault()` на событии браузера, чтобы остановить генерацию события `click` браузером, которое он сделает в противном случае.

### События мыши

На событиях "mousedown" мы передаем координаты экрана в код касания. Обратите внимание, что PlayCanvas гарантирует, что события касания и мыши имеют одну и ту же систему координат. Это не так с обычными событиями браузера!

### Касания

`_onTap()` принимает координату экрана (x, y), определяет, "попала" ли она в мяч, и, если это так, сообщает коду мяча, что он был нажат.

```javascript
this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);
```

Подробнее, эта функция принимает координаты экрана (x, y) и просит камеру преобразовать их в позицию в 3D-пространстве под этой точкой на экране. Чтобы сделать это, нам нужно указать глубину, то есть насколько далеко от экрана вы хотите получить 3D-точку. В данном случае мы получаем 3D-точку на той же глубине, что и мяч.

Мы также передаем вектор `Input.worldPos`. В приложениях PlayCanvas важно избегать создания новых объектов, например вызывая `new pc.Vec3()` для создания нового вектора, в ваших циклах обновления. Чем больше выделений памяти вы делаете (вызывая `new`), тем больше сбора мусора браузеру придется делать для очистки ваших выделений. Сбор мусора - это (сравнительно медленная) операция и вызовет заикание вашей игры или приложения, если она происходит часто.

В большинстве случаев PlayCanvas предоставит возможность передать вектор или аналогичный параметр, чтобы вы могли предварительно выделить и повторно использовать объекты.


```javascript
// получить расстояние от касания/клика до мяча
var dx = (p.x - worldPos.x);
var dy = (p.y - worldPos.y);

// Если клик внутри мяча, нажмите на мяч
var lenSqr = dx*dx + dy*dy;
if (lenSqr < this.ballRadius*this.ballRadius) {
    this.ball.script.ball.tap(dx, dy);
}
```

Как только у нас есть 3D-точка, по которой мы только что нажали, мы проверяем, пересекается ли она с мячом. Здесь вы увидите, что мы проверяем квадрат радиуса по сравнению с квадратом расстояния между нажатием и мячом. Это предотвращает медленное выполнение операции квадратного корня каждый раз при проверке.

Если нажатие попало по мячу, мы вызываем функцию `tap(dx, dy)` в сценарии мяча, и передаем расстояние от мяча, где произошло нажатие. Мы будем использовать это в [Части 4][3].

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-four/
[4]: https://playcanvas.com/project/406050
