---
title: Real-time Multiplayer with Photon
layout: tutorial-page.hbs
tags: multiplayer, networking
thumb: https://www.photonengine.com/v2/img/nav-logo-photon.svg
---

<iframe loading="lazy" src="https://playcanv.as/e/p/dvJYXs1Y/" title="Real-time Multiplayer with Photon - including matchmaking"></iframe>

*Mouse click to move*

The complete project including matchmaking can be found [here][1].

Photon, also known as PUN in Unity, is used in a variety of game titles, and a JavaScript SDK for Photon is also available for free for projects with up to 20 CCU

### In this tutorial, you will learn

- How to use Photon SDK
- Multiplayer implementation

### Tutorial Project

<iframe loading="lazy" src="https://playcanv.as/e/p/sLGr3Ql2/" title="Real-time Multiplayer with Photon - a simple project"></iframe>

*Arrow keys to move.*

You can find the [tutorial project here][2].

# Setup

## PlayCanvas Project

Use an empty PlayCanvas project.

![Empty Project][3]

## Photon account

Account registration is required to use the SDK and view documentation.

Create your Photon account [here][4] - (Photon Engine).

### 1. Create a new app

Click **CREATE NEW APP** from the dashboard

![Create New Application][5]

### 2. Select Photon Type and Application name.

Enter the following

- Photon Type: RealTime
- Name: PlayCanvas-Photon etc.

![Create Real Time Project][6]

### 3. Copy of AppID

Please make a note of this AppId, as you will need it in the future.

![App Id][7]

## Download SDK

Download the SDK from the dashboard.

### 1. Click SDK from the dashboard

![SDK][8]

### 2. Select RealTime JavaScript

![JavaScript SDK][9]

### 3. Click download SDK

![Download SDK][10]

### 4. Unzip the SDK

![Unzip SDK][11]

The SDK will be downloaded in ZIP format, unzip it: `photon-javascript-sdk_v4-1-1-0` → `lib` → **`Photon-Javascript_Emscripten_SDK.min.js`**.

## Importing SDK

Import the SDK you have just downloaded into the PlayCanvas editor.

### 1. Upload the SDK on the editor

![Upload SDK][12]

Drag and drop the SDK to the assets in the editor.

### 2. Change Loading Type "Asset" to "Before Engine"

![Change Loading Type][13]

# Multiplayer implementation

Multiplayer implementation is as follows

1. use Photon class for real-time communication (LoadBalancing)
2. connect to Photon master server
3. Create or Join a room
4. Synchronize other players

The API reference and glossary are available here.

- [API Reference][14]
- [Photon Engine - glossary][15]

## Using Photon with PlayCanvas

### 1. Using the LoadBalancing class in the SDK

Develop using a class that extends **LoadBalancingClient**.
Please create **photon-loadbalancing.js**.

```javascript
// photon-loadbalancing.js
class LoadBalancing extends class LoadBalancing extends Photon.LoadBalancing.LoadBalancingClient {
    constructor(props) {
        // Photon Settings
        const wss = props.wss;
        const appId = props.appId;
        const appVersion = props.appVersion;
        super(wss, appId, appVersion);

        // pc.Application
        this.app = props.app;
    }
}
```

### 2. Instantiate classes from PlayCanvas to use Photon

Create a **photon-loadbalancing-playcanvas.js** to the project to initialize Photon.

```javascript
// photon-loadbalancing-playcanvas.js
class PhotonLoadBalancingPlayCanvas extends pc.ScriptType {
  initialize() {
    // Setting up Photon
    this.app.loadBalancing = new LoadBalancing({
      wss: this.wss ? 1 : 0,
      appId: this.appId,
      appVersion: this.appVersion,
      app: this.app,
    });
  }
}

pc.registerScript(PhotonLoadBalancingPlayCanvas);
// options
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
    "Photon Cloud has servers in several regions, distributed across multiple hosting centers over the world.You can choose optimized region for you.",
  enum: [
    { "Select Region": "default" },
    { "Asia, Singapore": "asia" },
    { "Australia, Melbourne": "au" },
    { "Canada, East Montreal": "cae" },
    { "Chinese Mainland (See Instructions)	Shanghai": "cn" },
    { "Europe, Amsterdam": "eu" },
    { "India, Chennai": "in" },
    { "Japan, Tokyo": "jp" },
    { "Russia Moscow": "ru" },
    { "Russia, East Khabarovsk": "rue" },
    { "South Africa Johannesburg": "za" },
    { "South America, Sao Paulo": "sa" },
    { "South Korea, Seoul": "kr" },
    { "Turkey Istanbul": "tr" },
    { "USA, East Washington": "us" },
    { "USA, West San José": "usw" },
  ],
});
```

### 3. Set Script for Root entity

Create a new **photon-loadbalancing-playcanvas.js** and attach it to the root entity.

![Root Entity - Inspector][16]

### 4. Paste AppId into the script attribute.

Enter AppId as a script attribute.

![Script Attributes][17]

```javascript
this.app.loadBalancing = new LoadBalancing({
  wss: this.wss ? 1 : 0,
  appId: this.appId,
  appVersion: this.appVersion,
  app: this.app,
});
```

- **wss** Secure connection via WebSocket.
- **appId** The value application identifier.
- **appVersion** Game version. Can be a separate Virtual Application.

## Connect to Photon's master server

### 1. Connect to the master server using connectToRegionMaster

```javascript
initialize() {
    this.app.loadBalancing = new LoadBalancing({
        wss: this.wss ? 1 : 0,
        appId: this.appId,
        appVersion: this.appVersion,
        app: this.app,
    });

    if (!this.app.loadBalancing.isInLobby()) {
        this.app.loadBalancing.connectToRegionMaster(this.region);
    }
}
```

- **connectToRegionMaster** Connects to the master server in the specified region.
- **this.region** Used to configure the region.

If you successfully connect to the lobby by running connectToRegionMaster, JoinedLobby will be displayed in the log.

![Console Log][18]

## Create or Join a room

**onRoomList** function is called when a connection is made to the lobby.

**JoinRandomOrCreateRoom** to join a room if it exists, or randomly join a room if it does not exist.

```javascript
class PhotonLoadBalancingPlayCanvas extends pc.ScriptType {
  initialize() {
    this.app.loadBalancing = new LoadBalancing({
      app: this.app,
      appId: this.appId,
      appVersion: this.appVersion,
      wss: this.wss ? 1 : 0,
    });

    if (!this.app.loadBalancing.isInLobby()) {
      this.app.loadBalancing.connectToRegionMaster(this.region);
    }
    // Added
    this.app.loadBalancing.onRoomList = this.onRoomList;
    this.app.loadBalancing.onJoinRoom = this.onJoinRoom;
  }
  onRoomList() {
    this.app.loadBalancing.joinRandomOrCreateRoom();
  }

  onJoinRoom() {
    console.log("Joined the room.");
  }
}
```

- **onRoomList(rooms)** list of rooms in the lobby.
- **joinRandomOrCreateRoom(options, createRoomName, createOptions)** join to a random room. If the room does not exist, a new room will be created.
- **onJoinRoom** when you join a room, this is called

## Join and Leave

When a player joins a room, it is synchronized with other players.
Use **onActorJoin** and **onActorLeave**.

```javascript
initialize() {
    this.app.loadBalancing = new LoadBalancing({
        app: this.app,
        appId: this.appId,
        appVersion: this.appVersion,
        wss: this.wss ? 1 : 0
    });

    if (!this.app.loadBalancing.isInLobby()) {
        this.app.loadBalancing.connectToRegionMaster(this.region);
    }
    this.app.loadBalancing.onRoomList = this.onRoomList;
    this.app.loadBalancing.onJoinRoom = this.onJoinRoom;
    // Added
    this.app.loadBalancing.onActorJoin = this.onActorJoin;
    this.app.loadBalancing.onActorLeave = this.onActorLeave;
}
onRoomList() {
    this.app.loadBalancing.joinRandomOrCreateRoom();
}
onJoinRoom() {
    console.log("Joined the room.");
}
// When a player joins the room.
onActorJoin(actor) {
    const { actorNr } = actor;
    if (actor.isLocal) return;
    const entity = new pc.Entity();
    entity.addComponent("render", { type: "box" });
    entity.setLocalPosition(0, 0.5, 0);
    entity.name = actorNr;
    this.app.root.children[0].addChild(entity);
}
// When a player leaves the room.
onActorLeave(actor) {
    const { actorNr } = actor;
    const entity = this.app.root.children[0].findByName(actorNr);
    if (actor.isLocal || !entity) return;
    entity.destroy();
}
```

- **actor** contains `name`, `actorNr`, `isLocal`, and `userId`.
  ![Actor][19]
- **onActorJoin** when a new user connects, you can get the joined actor.
- **onActorLeave** when a user is disconnected, you can get the disconnected actor.

If successful, the entity is added when the player joins.
![Console log - Actors ][20]

### Player Movement

Create a new **player.js** for character movement.
**Preload** must be enabled as this script is called by other scripts.

```javascript
class Player extends pc.ScriptType {
  update(dt) {
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
  }
}

pc.registerScript(Player);
```

- **this.app.keyboard.isPressed:** check if the keyboard is pressed

## Synchronize other players

Use **raiseEvent** and **onEvent** to synchronize the player's location.

### 1. Position synchronisation using **raiseEvent**.

```javascript
initialize() {
    this.app.loadBalancing = new LoadBalancing({
        app: this.app,
        appId: this.appId,
        appVersion: this.appVersion,
        wss: this.wss ? 1 : 0,
    });

    if (!this.app.loadBalancing.isInLobby()) {
        this.app.loadBalancing.connectToRegionMaster(this.region);
    }

    this.app.loadBalancing.onRoomList = this.onRoomList;
    this.app.loadBalancing.onJoinRoom = this.onJoinRoom;
    this.app.loadBalancing.onActorJoin = this.onActorJoin;
    this.app.loadBalancing.onActorLeave = this.onActorLeave;
    // Added
    this.app.loadBalancing.onEvent = this.onEvent;
    this.app.on("loadbalancing:sendPlayerPosition", this.sendPlayerPosition, this);
}

onRoomList() {
    this.app.loadBalancing.joinRandomOrCreateRoom();
}

onJoinRoom(createdByMe) {
    const entity = new pc.Entity();
    entity.name = "Player";
    entity.addComponent("render", { type: "box" });
    entity.setLocalPosition(0, 0.5, 0);
    this.app.root.children[0].addChild(entity);

    // Add Character movement scripts
    entity.addComponent("script");
    entity.script.create("Player");

    this.app.loadBalancing.myRoomActorsArray().forEach((actor) => {
        const { actorNr } = actor;
        if (actor.isLocal) return;
        const entity = new pc.Entity();
        entity.setLocalPosition(0, 0.5, 0);
        entity.addComponent("render", { type: "box" });
        entity.name = actorNr;
        this.app.root.children[0].addChild(entity);
    });
}

onActorJoin(actor) {
    const { actorNr } = actor;
    if (actor.isLocal) return;
    const entity = new pc.Entity();
    entity.addComponent("render", { type: "box" });
    entity.setLocalPosition(0, 0.5, 0);
    entity.name = actorNr;
    this.app.root.children[0].addChild(entity);

    // Synchronize the position of players who joined later
    const { x, y, z } = this.app.root.findByName("Player").getLocalPosition();
    this.app.fire("loadbalancing:sendPlayerPosition", { x, y, z });
}
onActorLeave(actor) {
    const { actorNr } = actor;
    const entity = this.app.root.findByName(actorNr);
    if (actor.isLocal || !entity) return;
    entity.destroy();
}

sendPlayerPosition(position) {
    // Send the position to Photon.
    this.app.loadBalancing.raiseEvent(1, { position });
}

// When data is received.
onEvent(code, content, actorNr) {
    switch (code) {
        case 1: {
            const player = this.app.root.children[0].findByName(actorNr);
            if (player) {
                const { x, y, z } = content.position;
                player.setLocalPosition(x, y, z);
            }
            break;
        }
    }
}
```

- **raiseEvent(eventCode,data, options)** send `eventCode` and `data`.
- **onEvent(code, content, actorNr)** receive data. Includes `actorNr` and `eventCode`.

### 2. Changed to fire events when player moves

```javascript
class Player extends pc.ScriptType {
  update(dt) {
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
      const { x, y, z } = this.entity.getPosition();

      // Communicate when it moves.
      this.app.fire("loadbalancing:sendPlayerPosition", { x, y, z });
    }
  }
}

pc.registerScript(Player);
```

- **this.app.fire** [communication][22] between scripts.

### If successful

You can play multiplayer in Photon.

![Project][23]

Now you can create a room using Photon and synchronize the location information of the characters.

Although this project was only a simple real-time communication between players, you can also create a project that includes matchmaking. For the full project, including room creation and room listings, please [click here][1] .

[1]: https://playcanvas.com/project/926999/
[2]: https://playcanvas.com/project/928285/
[3]: /images/tutorials/multiplayer-photon/1.png
[4]: https://www.photonengine.com/
[5]: /images/tutorials/multiplayer-photon/2.png
[6]: /images/tutorials/multiplayer-photon/3.png
[7]: /images/tutorials/multiplayer-photon/4.png
[8]: /images/tutorials/multiplayer-photon/5.png
[9]: /images/tutorials/multiplayer-photon/6.png
[10]: /images/tutorials/multiplayer-photon/7.png
[11]: /images/tutorials/multiplayer-photon/8.png
[12]: /images/tutorials/multiplayer-photon/9.png
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
