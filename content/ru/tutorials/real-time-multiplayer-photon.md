---
title: Реальное время многопользовательской игры с Photon
layout: tutorial-page.hbs
tags: многопользовательские, сетевые
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/926999/90AE0A-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/e/p/dvJYXs1Y/" title="Реальное время многопользовательской игры с Photon - включая матчмейкинг"></iframe>

_Кликните по полу, чтобы переместиться_

Полный проект, включая матчмейкинг, можно найти [здесь][1].

Photon (также известный как PUN) используется во многих играх и имеет доступный JavaScript SDK для игр на HTML5.

Photon бесплатен для проектов с не более чем 20 онлайн-игроками (CCU).

### Вы узнаете

- Как добавить Photon SDK в PlayCanvas
- Реализация многопользовательской игры с Photon

# Настройка

## Проект PlayCanvas

Мы начинаем с создания форка [учебного проекта здесь][2].

![Пустой проект][3]

## Учетная запись Photon

Для использования SDK и просмотра документации требуется регистрация учетной записи.

Создайте свою учетную запись Photon [здесь][4] - (Photon Engine).

### Создать новое приложение

Нажмите **CREATE NEW APP** на панели инструментов

![Создать новое приложение][5]

### Выберите тип Photon и имя приложения.

Введите следующее

- Тип Photon: RealTime
- Имя: PlayCanvas-Photon и т.д.

![Создать проект Real Time][6]

### Копирование AppID

Пожалуйста, запишите этот AppId, так как он вам понадобится в будущем.

![App Id][7]

## Загрузка SDK

Загрузите SDK с панели инструментов.

### Нажмите SDK на панели инструментов

![SDK][8]

### Выберите RealTime JavaScript

![JavaScript SDK][9]

### Нажмите Загрузить SDK

![Загрузить SDK][10]

### Распакуйте SDK

![Распаковать SDK][11]

SDK будет загружен в формате ZIP, распакуйте его: `photon-javascript-sdk_vX-X-X-X` → `lib` → **`Photon-Javascript_SDK.min.js`**.

## Импорт SDK

Импортируйте только что загруженный SDK в редактор PlayCanvas.

### Загрузите SDK в редакторе

![Загрузить SDK][12]

Перетащите и поместите SDK в редакторе ассетов.

### Измените тип загрузки "Asset" на "Before Engine"

![Изменить тип загрузки][13]

# Реализация многопользовательской игры

Реализация многопользовательской игры будет делать следующее:

1. Использовать класс Photon для общения в реальном времени и балансировки нагрузки
2. Подключение к мастер-серверу Photon
3. Создание или присоединение к комнате
4. Синхронизация действий и движений других игроков

[Справочник API][14] и [глоссарий][15] доступны на сайте Photon.

## Использование Photon с PlayCanvas

### Создание экземпляров классов из PlayCanvas для использования Photon

Создайте скриптовый актив с именем **photon-loadbalancing-playcanvas.js** в проекте для инициализации Photon.

```javascript
// photon-loadbalancing-playcanvas.js
const PhotonLoadBalancingPlayCanvas = pc.createScript("PhotonLoadBalancingPlayCanvas");
PhotonLoadBalancingPlayCanvas.attributes.add("appId", { type: "string" });
PhotonLoadBalancingPlayCanvas.attributes.add("appVersion", { type: "string", default: "1.0" });
PhotonLoadBalancingPlayCanvas.attributes.add("wss", { type: "boolean", default: true });
PhotonLoadBalancingPlayCanvas.attributes.add("region", {
    type: "string", default: "jp",
    description: "Photon Cloud имеет серверы в нескольких регионах, распределенных по нескольким хостинг-центрам по всему миру. Вы можете выбрать оптимизированный регион для себя.",
    enum: [
        { "Выберите регион": "default" },
        { "Азия, Сингапур": "asia" },
        { "Австралия, Мельбурн": "au" },
        { "Канада, Восток Монреаль": "cae" },
        { "Китайский материк (См. инструкции) Шанхай": "cn" },
        { "Европа, Амстердам": "eu" },
        { "Индия, Ченнай": "in" },
        { "Япония, Токио": "jp" },
        { "Россия Москва": "ru" },
        { "Россия, Восток Хабаровск": "rue" },
        { "Южная Африка Йоханнесбург": "za" },
        { "Южная Америка, Сан-Паулу": "sa" },
        { "Южная Корея, Сеул": "kr" },
        { "Турция Стамбул": "tr" },
        { "США, Восток Вашингтон": "us" },
        { "США, Запад Сан-Хосе": "usw" },
    ],
});

PhotonLoadBalancingPlayCanvas.prototype.initialize = function () {

    // Настройки Photon
    this.loadBalancingClient = new Photon.LoadBalancing.LoadBalancingClient(this.wss ? 1 : 0, this.appId, this.appVersion);

    // pc.Application
    this.loadBalancingClient.app = this.app;
};
```
- **Photon.LoadBalancing.LoadBalancingClient** Этот класс содержит множество функций Photon SDK для обмена данными в реальном времени.

### Установить скрипт для корневой сущности

Создайте новый актив скрипта **photon-loadbalancing-playcanvas.js** и прикрепите его к корневой сущности в редакторе.

![Root Entity - Inspector][16]

### Вставьте AppId в атрибут скрипта.

Введите AppId в качестве атрибута скрипта.

![Script Attributes][17]

```javascript
this.loadBalancingClient = new Photon.LoadBalancing.LoadBalancingClient( this.wss ? 1 : 0, this.appId, this.appVersion );
```

- **wss** Безопасное соединение через WebSocket.
- **appId** Значение идентификатора приложения.
- **appVersion** Используется для версионирования. Разные версии не могут быть подключены друг к другу.

## Подключение к мастер-серверу Photon

### Подключение к мастер-серверу с использованием `connectToRegionMaster`

```javascript
PhotonLoadBalancingPlayCanvas.prototype.initialize = function () {

    // Настройки Photon
    this.loadBalancingClient = new Photon.LoadBalancing.LoadBalancingClient(this.wss ? 1 : 0, this.appId, this.appVersion);

    // pc.Application
    this.loadBalancingClient.app = this.app;

    // Подключение к мастер-серверу
    if (!this.loadBalancingClient.isInLobby()) {
        this.loadBalancingClient.connectToRegionMaster(this.region);
    }
};
```

- **connectToRegionMaster** Подключается к мастер-серверу в указанном регионе.
- **this.region** Используется для настройки региона.

Если вы успешно подключитесь к лобби, выполнив connectToRegionMaster, в журнале будет отображаться JoinedLobby.

![Console Log][18]

## Создать или присоединиться к комнате

Функция **onRoomList** вызывается при подключении к лобби.

**JoinRandomOrCreateRoom** для присоединения к комнате, если она существует, или случайного присоединения к комнате, если она не существует.

```javascript
PhotonLoadBalancingPlayCanvas.prototype.initialize = function () {

    // Настройки Photon
    this.loadBalancingClient = new Photon.LoadBalancing.LoadBalancingClient(this.wss ? 1 : 0, this.appId, this.appVersion);

    // pc.Application
    this.loadBalancingClient.app = this.app;

    // Подключение к мастер-серверу
    if (!this.loadBalancingClient.isInLobby()) {
        this.loadBalancingClient.connectToRegionMaster(this.region);
    }

    // Добавлено
    this.loadBalancingClient.onRoomList = this.onRoomList;
    this.loadBalancingClient.onJoinRoom = this.onJoinRoom;
};

PhotonLoadBalancingPlayCanvas.prototype.onRoomList = function () {
    this.joinRandomOrCreateRoom();
};

PhotonLoadBalancingPlayCanvas.prototype.onJoinRoom = function (createdByMe) {
    console.log("Присоединились к комнате.");
};
```

- **onRoomList(rooms)** Список комнат в лобби.
- **joinRandomOrCreateRoom(options, createRoomName, createOptions)** Присоединиться к случайной комнате. Если комната не существует, будет создана новая комната.
- **onJoinRoom** Вызывается при присоединении к комнате.

## Присоединение и выход

Когда игрок присоединяется к комнате, это синхронизируется с другими игроками.
Используйте **onActorJoin** и **onActorLeave**.

```javascript
PhotonLoadBalancingPlayCanvas.prototype.initialize = function () {

    // Настройки Photon
    this.loadBalancingClient = new Photon.LoadBalancing.LoadBalancingClient(this.wss ? 1 : 0, this.appId, this.appVersion);

    // pc.Application
    this.loadBalancingClient.app = this.app;

    // Подключение к мастер-серверу
    if (!this.loadBalancingClient.isInLobby()) {
        this.loadBalancingClient.connectToRegionMaster(this.region);
    }

    this.loadBalancingClient.onRoomList = this.onRoomList;
    this.loadBalancingClient.onJoinRoom = this.onJoinRoom;

    // Добавлено
    this.loadBalancingClient.onActorJoin = this.onActorJoin;
    this.loadBalancingClient.onActorLeave = this.onActorLeave;
};

PhotonLoadBalancingPlayCanvas.prototype.onRoomList = function () {
    this.joinRandomOrCreateRoom();
};

PhotonLoadBalancingPlayCanvas.prototype.onJoinRoom = function (createdByMe) {
    console.log("Присоединился к комнате.");
};

PhotonLoadBalancingPlayCanvas.prototype.onActorJoin = function (actor) {
    const { actorNr } = actor;
    if (actor.isLocal) return;
    const otherPlayer = new pc.Entity();
    otherPlayer.addComponent("render", { type: "capsule" });
    otherPlayer.setLocalPosition(0, 1, 0);
    otherPlayer.name = actorNr;
    this.app.root.children[0].addChild(otherPlayer);
};

PhotonLoadBalancingPlayCanvas.prototype.onActorLeave = function (actor) {
    const { actorNr } = actor;
    const otherPlayer = this.app.root.children[0].findByName(actorNr);
    if (actor.isLocal || !otherPlayer) return;
    otherPlayer.destroy();
};
```

  ![Actor][19]
- **actor** содержит `name`, `actorNr`, `isLocal` и `userId`.
- **onActorJoin** когда новый пользователь подключается, вы можете получить присоединившегося актера.
- **onActorLeave** когда пользователь отключается, вы можете получить отключившегося актера.

Если успешно, сущность добавляется при присоединении игрока.
![Console log - Actors ][20]

### Движение игрока

Создайте новый **player.js** для движения персонажа.

```javascript
const Player = pc.createScript("player");

Player.prototype.update = function (dt) {
    const pos = new pc.Vec3(0, 0, 0);
    if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        pos.x = -dt;
    }
    if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        pos.x = dt;
    }
    if (this.app.keyboard.isPressed(pc.KEY_UP)) {
        pos.z = -dt;
    }
    if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
        pos.z = dt;
    }
    if (!pos.equals(new pc.Vec3(0, 0, 0))) {
        this.entity.translate(pos);
    }
};
```

- **this.app.keyboard.isPressed:** проверьте, нажата ли клавиатура

## Синхронизация других игроков

Используйте **raiseEvent** и **onEvent** для синхронизации местоположения игрока.

### Синхронизация позиции с использованием **raiseEvent**.

```javascript
const PhotonLoadBalancingPlayCanvas = pc.createScript("PhotonLoadBalancingPlayCanvas");
PhotonLoadBalancingPlayCanvas.attributes.add("appId", { type: "string" });
PhotonLoadBalancingPlayCanvas.attributes.add("appVersion", {
    type: "string",
    default: "1.0",
});
PhotonLoadBalancingPlayCanvas.attributes.add("wss", {
    type: "boolean",
    default: true,
});
PhotonLoadBalancingPlayCanvas.attributes.add("region", {
    type: "string",
    default: "jp",
    description:
        "Photon Cloud имеет серверы в нескольких регионах, распределенных по нескольким хостинг-центрам по всему миру. Вы можете выбрать оптимизированный регион для себя.",
    enum: [
        { "Выберите регион": "default" },
        { "Азия, Сингапур": "asia" },
        { "Австралия, Мельбурн": "au" },
        { "Канада, Восток Монреаль": "cae" },
        { "Китайский материк (См. инструкции) Шанхай": "cn" },
        { "Европа, Амстердам": "eu" },
        { "Индия, Ченнай": "in" },
        { "Япония, Токио": "jp" },
        { "Россия Москва": "ru" },
        { "Россия, Восток Хабаровск": "rue" },
        { "Южная Африка Йоханнесбург": "za" },
        { "Южная Америка, Сан-Паулу": "sa" },
        { "Южная Корея, Сеул": "kr" },
        { "Турция Стамбул": "tr" },
        { "США, Восток Вашингтон": "us" },
        { "США, Запад Сан-Хосе": "usw" },
    ],
});

PhotonLoadBalancingPlayCanvas.prototype.initialize = function () {

    // Настройки Photon
    this.loadBalancingClient = new Photon.LoadBalancing.LoadBalancingClient(this.wss ? 1 : 0, this.appId, this.appVersion);

    // pc.Application
    this.loadBalancingClient.app = this.app;

    // Подключение к мастер-серверу
    if (!this.loadBalancingClient.isInLobby()) {
        this.loadBalancingClient.connectToRegionMaster(this.region);
    }
    this.loadBalancingClient.onRoomList = this.onRoomList;
    this.loadBalancingClient.onJoinRoom = this.onJoinRoom;
    this.loadBalancingClient.onActorJoin = this.onActorJoin;
    this.loadBalancingClient.onActorLeave = this.onActorLeave;

    // Добавлено
    this.loadBalancingClient.onEvent = this.onEvent;
    this.app.on("createOtherPlayerEntity", this.createOtherPlayerEntity, this);
    this.app.on("loadbalancing:sendPlayerPosition", this.sendPlayerPosition, this);
};

PhotonLoadBalancingPlayCanvas.prototype.onRoomList = function () {
    this.joinRandomOrCreateRoom();
};

PhotonLoadBalancingPlayCanvas.prototype.onJoinRoom = function (createdByMe) {
    this.myRoomActorsArray().forEach((actor) => {
        if (actor.isLocal) return;
        this.app.fire("createOtherPlayerEntity", actor);
    });
};

PhotonLoadBalancingPlayCanvas.prototype.onActorJoin = function (actor) {
    if (actor.isLocal) return;
    this.app.fire("createOtherPlayerEntity", actor);
    const { x, y, z } = this.app.root.findByName("Player").getLocalPosition();
    this.app.fire("loadbalancing:sendPlayerPosition", { x, y, z });
};

PhotonLoadBalancingPlayCanvas.prototype.onActorLeave = function (actor) {
    const { actorNr } = actor;
    const otherPlayer = this.app.root.findByName(actorNr);
    if (actor.isLocal || !otherPlayer) return;
    otherPlayer.destroy();
};

PhotonLoadBalancingPlayCanvas.prototype.createOtherPlayerEntity = function (actor) {
    const { actorNr } = actor;
    const entity = new pc.Entity();
    entity.addComponent("render", { type: "capsule" });
    entity.setLocalPosition(0, 1, 0);
    entity.name = actorNr;
    this.app.root.children[0].addChild(entity);
};

PhotonLoadBalancingPlayCanvas.prototype.sendPlayerPosition = function (position) {
    this.loadBalancingClient.raiseEvent(1, { position });
};

PhotonLoadBalancingPlayCanvas.prototype.onEvent = function (code, content, actorNr) {
    switch (code) {
        case 1: {
            const otherPlayer = this.app.root.findByName(actorNr);
            if (otherPlayer) {
                const { x, y, z } = content.position;
                otherPlayer.setLocalPosition(x, y, z);
            }
            break;
        }
        default:
    }
};
```

- **raiseEvent(eventCode,data, options)** отправить `eventCode` и `data`.
- **onEvent(code, content, actorNr)** получить данные. Включает `actorNr` и `eventCode`.

### Изменено на отправку событий при перемещении игрока

```javascript
const Player = pc.createScript("игрок");

Player.prototype.update = function (dt) {
    const pos = new pc.Vec3(0, 0, 0);
    if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        pos.x = -dt;
    }
    if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        pos.x = dt;
    }
    if (this.app.keyboard.isPressed(pc.KEY_UP)) {
        pos.z = -dt;
    }
    if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
        pos.z = dt;
    }
    if (!pos.equals(new pc.Vec3(0, 0, 0))) {
        this.entity.translate(pos);

        // Добавлено
        const { x, y, z } = this.entity.getPosition();
        this.app.fire("loadbalancing:sendPlayerPosition", { x, y, z });
    }
};
```

- **this.app.fire** [связь][22] между скриптами.

### Готово!

Теперь вы можете играть в многопользовательский режим в Photon!

![Проект][23]

Вы можете создать комнату с помощью Photon и синхронизировать позиции игроков друг с другом.

Хотя этот проект был лишь простым обменом сообщениями в реальном времени между игроками, вы также можете создать проект, включающий матчмейкинг. Для полного проекта, включая создание комнат и списки комнат, пожалуйста, [нажмите здесь][1].

[1]: https://playcanvas.com/project/926999/
[2]: https://playcanvas.com/project/954410/
[3]: /images/tutorials/multiplayer-photon/1.png
[4]: https://www.photonengine.com/
[5]: /images/tutorials/multiplayer-photon/2.png
[6]: /images/tutorials/multiplayer-photon/3.png
[7]: /images/tutorials/multiplayer-photon/4.png
[8]: /images/tutorials/multiplayer-photon/5.png
[9]: /images/tutorials/multiplayer-photon/6.png
[10]: /images/tutorials/multiplayer-photon/7.png
[11]: /images/tutorials/multiplayer-photon/8.png
[12]: /images/tutorials/multiplayer-photon/9.jpg
[13]: /images/tutorials/multiplayer-photon/10.png
[14]: https://doc-api.photonengine.com/en/javascript/current/Photon.LoadBalancing.LoadBalancingClient.html
[15]: https://doc.photonengine.com/ja-jp/quantum/v1/reference/glossary
[16]: /images/tutorials/multiplayer-photon/11.png
[17]: /images/tutorials/multiplayer-photon/12.png
[18]: /images/tutorials/multiplayer-photon/13.png
[19]: /images/tutorials/multiplayer-photon/14.png
[20]: /images/tutorials/multiplayer-photon/15.png
[22]: https://developer.playcanvas.com/en/user-manual/scripting/communication/
[23]: /images/tutorials/multiplayer-photon/16.gif
