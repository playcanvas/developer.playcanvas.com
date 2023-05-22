---
title: Многопользовательские игры в реальном времени
layout: tutorial-page.hbs
tags: многопользовательский, сетевой
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406048/507186-image-75.jpg
---

<div class="alert alert-info">В этом уроке рассматривается, как начать создавать свой собственный многопользовательский проект с нуля. Если вы предпочитаете использовать хостинговый многопользовательский сервис, у нас есть уроки для <a href="/tutorials/real-time-multiplayer-colyseus">Colyseus</a> и <a href="/tutorials/real-time-multiplayer-photon">Photon</a>.</div>

<iframe loading="lazy" src="https://playcanv.as/p/XFp1Ty3X/" title="Real Time Multiplayer"></iframe>

*Используйте WASD для перемещения игрока. Если вы видите только одну капсулу, попробуйте открыть эту страницу в другой вкладке или на другом компьютере.*

В этом уроке мы рассмотрим, как настроить базовый многопользовательский проект с использованием Node.js и Socket.io. Мы сосредоточимся на его реализации в PlayCanvas. В конце у вас должен быть проект, похожий на тот, что выше. Вы можете найти [проект учебника здесь][2].

## Настройка сервера

Мы будем реализовывать модель клиент-сервер (в отличие от одноранговой). Это будет базовый сервер, который будет получать данные от всех клиентов (наших экземпляров PlayCanvas) и транслировать их обратно.

[Glitch][3] предоставляет действительно удобный способ бесплатно написать и развернуть серверные приложения прямо в вашем браузере! Вы можете использовать его без учетной записи, но создание учетной записи позволит вам легко найти свою работу. [Создайте новое приложение Node][4] и замените содержимое `server.js` на это:

```javascript
var server = require('http').createServer();
var options = {
  cors: true
}

var io = require('socket.io')(server, options);

io.sockets.on('connection', function(socket) {
    console.log("Клиент подключился!");
});

console.log ('Сервер запущен.');
server.listen(3000);
```

Glitch автоматически перезапустит сервер каждый раз, когда вы закончите печатать. После того, как вы скопировали это, у вас должна возникнуть ошибка. Нажмите на кнопку `Logs` слева на экране, чтобы открыть консоль сервера. Здесь вы можете увидеть любой вывод сервера, а также ошибки. Вы должны увидеть `Error: Cannot find module 'socket.io'`.

![Открытие журнала][5]

Чтобы добавить пакет, перейдите в `package.json` и нажмите на кнопку `Add Package` сверху. Ищите `socket.io`.

![Добавление пакета][6]

Теперь, если вы очистите журнал и добавите пробел в `server.js`, чтобы он снова запустился, вы должны увидеть `Server started.` в журнале. Вы успешно развернули сервер! Если вы нажмете кнопку `Show` сверху, вы на самом деле ничего не увидите. Это потому, что наш сервер не прослушивает http-запросы, а вместо этого прослушивает запросы через веб-сокеты.

Вы можете найти домен, на котором развернут ваш сервер, нажав в левом верхнем углу (где у меня написано `thundering-polo`). Здесь вы также можете переименовать проект.

Этот сервер будет просто записывать сообщение каждый раз, когда кто-то подключается. Этого должно быть достаточно, чтобы начать работу над нашим клиентом и подтвердить, что он подключается к серверу.

## Настройка проекта

Создайте новый проект на PlayCanvas. Сначала нам нужно включить клиентскую библиотеку Socket.io JS в качестве внешнего скрипта.

Перейдите к настройкам проекта.
![Настройки проекта][12]

Найдите и откройте 'External Scripts'.
![Настройки внешних скриптов][13]

Измените значение с 0 на 1 и добавьте URL-адрес CDN для библиотеки сокетов из их [сервера фреймворка][11]. В данном случае мы будем использовать версию 3.1.1, так как это последняя на момент написания:
![Настройки проекта][14]


```
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.1/socket.io.min.js
```

Теперь нам нужно создать новый скрипт для обработки сетевой логики. Создайте новый скрипт с именем `Network.js`. Сначала нам нужно создать соединение с сервером. Мы можем сделать это, добавив эту строку в метод инициализации:

```javascript
this.socket = io.connect('https://thundering-polo.glitch.me');
```

# Issue Tracker

- [ ] Перевести документацию
- [ ] Создать русскоязычный раздел на сайте
- [ ] Обновить Tutorial Thumbnail

# Entity

- [ ] Добавить поддержку русского языка
- [ ] Перевести интерфейс пользователя
- [ ] Перевести сообщения об ошибках

# Material Asset

- [ ] Перевести описание материалов
- [ ] Перевести Material Inspector
- [ ] Перевести Shader Editor

# Node Inspector

- [ ] Перевести интерфейс Node Inspector
- [ ] Перевести подсказки для пользователей
- [ ] Перевести сообщения об ошибках

# Texture Inspector

- [ ] Перевести интерфейс Texture Inspector
- [ ] Перевести подсказки для пользователей
- [ ] Перевести сообщения об ошибках

# Graph Inspector

- [ ] Перевести интерфейс Graph Inspector
- [ ] Перевести подсказки для пользователей
- [ ] Перевести сообщения об ошибках

# Asset

- [ ] Перевести описание Asset
- [ ] Перевести интерфейс пользователя
- [ ] Перевести сообщения об ошибках

# Graph Editor

- [ ] Перевести интерфейс Graph Editor
- [ ] Перевести подсказки для пользователей
- [ ] Перевести сообщения об ошибках

# Assets

- [ ] Перевести описание Assets
- [ ] Перевести интерфейс пользователя
- [ ] Перевести сообщения об ошибках

Замените `https://thundering-polo.glitch.me` на адрес вашего собственного сервера.

Чтобы убедиться, что это работает, прикрепите этот сетевой скрипт к `Root` Entity и затем запустите игру. Следите за журналом сервера на Glitch. Если все работает, сервер должен записать `Client has connected!`. Теперь проект настроен на отправку и получение сообщений от сервера и на сервер.

## Общение сервера и клиента

Способ отправки данных между клиентом и сервером осуществляется через сокетное соединение, которое мы создали ранее. Чтобы отправить данные с клиента (в Network.js на PlayCanvas), мы используем функцию emit. Вот пример:

```javascript
this.socket.emit ('playerJoined', 'Джон');
```

Это отправляет сообщение с названием `playerJoined` и данными `John`. Чтобы сервер получил сообщение, нам нужно написать в файле сервера (в server.js на Glitch):

```javascript
socket.on ('playerJoined', function (name) {
    console.log (name);
});
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/Unity-Technologies/ShaderGraph/issues).

# Содержание

- [Tutorial Thumbnail](#tutorial-thumbnail)
- [Entity](#entity)
- [Material Asset](#material-asset)
- [Material Inspector](#material-inspector)
- [Shader Editor](#shader-editor)
- [Node Inspector](#node-inspector)
- [Texture Inspector](#texture-inspector)
- [Graph Inspector](#graph-inspector)
- [Graph Editor](#graph-editor)
- [Assets](#assets)

Это будет записывать любые данные, отправленные на сервер, когда вызывается `playerJoined`.

Для этой демонстрации мы стремимся к тому, чтобы игроки двигались вместе с другими в режиме реального времени, поэтому нам нужно создать среду. Начните с создания объекта Entity для использования в качестве земли и добавьте столкновение и статический твердотельный объект. Вот как должны выглядеть настройки объекта земли:

<img loading="lazy" src="/images/tutorials/multiplayer/ground_entity.png" width="360">

Теперь нам нужен игрок для управления. Создайте новый капсул и назовите его `Player`. добавьте динамический твердотельный объект и столкновение, и измените настройки твердотельного объекта, чтобы они соответствовали картинке ниже.

<img loading="lazy" src="/images/tutorials/multiplayer/player_entity.png" width="360">

Дублируйте объект игрока и переименуйте его в "Other". Снимите флажок `Enabled` на этом новом объекте, чтобы он был отключен с самого начала. Это объект, который мы будем использовать для имитации других игроков в игре.

Добавьте компонент сценария к вашему игроку и прикрепите новый сценарий под названием `Movement.js`:

```javascript
var Movement = pc.createScript('movement');

Movement.attributes.add('playerSpeed', {
    type: 'number',
    default: 30,
    title: 'Скорость игрока'
});

// инициализация кода, вызываемая один раз для каждой сущности
Movement.prototype.initialize = function() {
    this.force = new pc.Vec3();
};

// код обновления, вызываемый каждый кадр
Movement.prototype.update = function(dt) {
    var forward = this.entity.forward;
    var right = this.entity.right;
    var app = this.app;

    x = 0;
    z = 0;

    if (app.keyboard.isPressed(pc.KEY_A)) {
        x -= right.x;
        z -= right.z;
    }

    if (app.keyboard.isPressed(pc.KEY_D)) {
        x += right.x;
        z += right.z;
    }

    if (app.keyboard.isPressed(pc.KEY_W)) {
        x += forward.x;
        z += forward.z;
    }

    if (app.keyboard.isPressed(pc.KEY_S)) {
        x -= forward.x;
        z -= forward.z;
    }

    if (x !== 0 || z !== 0) {
        x *= dt;
        z *= dt;

        this.force.set (x, 0, z).normalize ().scale ((this.playerSpeed));
        this.entity.rigidbody.applyForce (this.force);
    }
};
```

Когда вы запустите игру, вы должны иметь возможность использовать WASD для перемещения вашего игрока. Если нет, вы пропустили шаг или не установили правильные настройки для сущности (Entity). (Попробуйте изменить атрибут скорости в скрипте движения)
Для работы игры в режиме многопользовательской игры в реальном времени нам нужно отслеживать всех игроков в игре. Замените текущий код сервера на этот:

```javascript
var server = require('http').createServer();
var options = {
  cors: true
}

var io = require('socket.io')(server, options);

var players = {};

function Player (id) {
    this.id = id;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.entity = null;
}

io.sockets.on('connection', function(socket) {
    socket.on ('initialize', function () {
        var id = socket.id;
        var newPlayer = new Player (id);
        // Создает новый объект игрока с уникальным номером ID.

        players[id] = newPlayer;
        // Добавляет нового созданного игрока в массив.

        socket.emit ('playerData', {id: id, players: players});
        // Отправляет подключающемуся клиенту его уникальный ID и данные об уже подключенных других игроках.

        socket.broadcast.emit ('playerJoined', newPlayer);
        // Отправляет всем, кроме подключающегося игрока, данные о новом игроке.
    });
});

console.log ('Сервер запущен.');
server.listen(3000);
```

В приведенном выше коде, когда игрок отправляет сообщение `initialize`, мы отправляем ему его уникальный ID и данные об других игроках в игре. Это также сообщает другим, что подключился новый игрок. Добавим эту логику в наш сетевой скрипт.

Добавьте этот код в `initialize`:

```javascript
// Ваш вызов функции io.connect должен быть здесь

this.socket.emit ('initialize');
var socket = this.socket;

this.player = this.app.root.findByName ('Player');
this.other = this.app.root.findByName ('Other');

var self = this;
socket.on ('playerData', function (data) {
    self.initializePlayers (data);
});

socket.on ('playerJoined', function (data) {
    self.addPlayer (data);
});
```

А затем объявите эти новые функции внутри Network.js:

```javascript
Network.prototype.initializePlayers = function (data) {
    this.players = data.players;
    // Создать массив игроков и заполнить его текущими подключенными игроками.

    this.id = data.id;
    // Отслеживать номер вашего идентификатора.

    for(var id in this.players){
        if(id != Network.id){
            this.players[id].entity = this.createPlayerEntity(this.players[id]);
        }
    }
    // Для каждого уже подключенного игрока создать новую капсульную сущность.

    this.initialized = true;
    // Отметить, что клиент получил данные от сервера.
};

Network.prototype.createPlayerEntity = function (data) {
    var newPlayer = this.other.clone ();
    // Создать новую сущность игрока.

    newPlayer.enabled = true;
    // Включить нового созданного игрока.

    this.other.getParent ().addChild (newPlayer);
    // Добавить сущность в иерархию сущностей.

    if (data)
        newPlayer.rigidbody.teleport (data.x, data.y, data.z);
    // Если было задано местоположение, переместить новую сущность в позицию подключенного игрока.

    return newPlayer;
    // Вернуть новую сущность.
};

Network.prototype.addPlayer = function (data) {
    this.players[data.id] = data;
    this.players[data.id].entity = this.createPlayerEntity(data);
};
```

Теперь, когда мы присоединяемся к игре, клиент сообщает серверу, что мы подключились, и сервер отправляет нам список игроков с их позициями. Затем игра создает новую сущность для каждого подключенного игрока и перемещает их на текущую позицию. Единственная проблема в том, что сервер не знает позиций всех игроков. Нам нужно отправлять серверу нашу текущую позицию каждый кадр.

Добавьте этот код в `initialize` вашего скрипта Network.js:

```javascript
socket.on ('playerMoved', function (data) {
    self.movePlayer (data);
});
```

Перевод Markdown файла с английского на русский:

# Issue Tracker

## Tutorial Thumbnail

### Entity

#### Material Asset

##### Material Inspector

###### Shader Editor

####### Node Inspector

######## Texture Inspector

######### Graph Inspector

########## Asset

########### Graph Editor

############ Assets

Замените свой `update` на это:

```javascript
Network.prototype.update = function (dt) {
    this.updatePosition ();
};
```

Сеть.prototype.update = функция (dt) {
    this.updatePosition ();
};


И затем объявите эти новые функции внутри Network.js:

```javascript
Network.prototype.movePlayer = function (data) {
    if (this.initialized)
        this.players[data.id].entity.rigidbody.teleport (data.x, data.y, data.z);
};

Network.prototype.updatePosition = function () {
    if (this.initialized) {
        var pos = this.player.getPosition ();
        this.socket.emit ('positionUpdate', {id: this.id, x: pos.x, y: pos.y, z: pos.z});
    }
};
```

Обратно на сервере нам нужно учесть, что происходит, когда игрок отправляет нам свою позицию. На сервере нам нужно добавить новое событие:

```javascript
socket.on ('positionUpdate', function (data) {
    players[data.id].x = data.x;
    players[data.id].y = data.y;
    players[data.id].z = data.z;

    socket.broadcast.emit ('playerMoved', data);
});
```

При тестировании этого учтите, что сервер в настоящее время не учитывает отключения. Чтобы правильно перезапустить, вам нужно будет закрыть все клиенты, перезапустить сервер (набрав в Glitch), а затем снова запустить клиентов.

## Заключение

Вот и все! Если хотите, попробуйте добавить некоторые из этих идей самостоятельно:
* Игроки удаляются при закрытии игры.
* Добавление функциональности возрождения, когда игроки падают за край.

Имейте в виду, что это только очень базовая реализация многопользовательской игры. В реальности, при создании больших многопользовательских игр, вы захотите рассмотреть использование авторитетного сервера, вместо обработки всей игровой логики на клиенте. Вы можете прочитать более подробное руководство о [том, как работает Socket.io и как разрабатывать многопользовательские игры на Javascript здесь][1].

Вы можете найти [полный код сервера на Glitch здесь][10], где также можете создать его форк и расширить его.

[1]: https://code.tutsplus.com/tutorials/create-a-multiplayer-pirate-shooter-game-in-your-browser--cms-23311
[2]: https://playcanvas.com/project/406048/overview/tutorial-realtime-multiplayer
[3]: https://glitch.com/
[4]: https://glitch.com/edit/#!/new-project
[5]: /images/tutorials/multiplayer/glitch_error.png
[6]: /images/tutorials/multiplayer/glitch_add_package.png
[7]: https://raw.githubusercontent.com/socketio/socket.io-client/master/dist/socket.io.js
[10]: https://glitch.com/edit/#!/sore-bloom-beech
[11]: https://cdnjs.com/libraries/socket.io
[12]: /images/tutorials/multiplayer/project_settings.png
[13]: /images/tutorials/multiplayer/external_scripts_settings.png
[14]: /images/tutorials/multiplayer/added_socket_io_library.png
