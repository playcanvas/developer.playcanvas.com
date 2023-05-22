---
title: リアルタイムマルチプレイヤー
layout: tutorial-page.hbs
tags: multiplayer, networking
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406048/507186-image-75.jpg"
---

<div class="alert alert-info">このチュートリアルでは、ゼロから自分自身のマルチプレイヤーを作成する方法について説明します。ホストされたマルチプレイヤーサービスを使用する場合は、<a href="/tutorials/real-time-multiplayer-colyseus">Colyseus</a>および<a href="/tutorials/real-time-multiplayer-photon">Photon</a>のチュートリアルがあります。</div>

<iframe loading="lazy" src="https://playcanv.as/p/XFp1Ty3X/" title="Real Time Multiplayer"></iframe>

*WASD キーを使用してプレイヤーを移動します。カプセルが 1 つしか表示されない場合は、別のタブまたは別のコンピューターでこのページを開いてみてください。*

このチュートリアルでは、Node.js と Socket.io を使用した基本的なマルチプレイヤープロジェクトの設定方法について説明します。PlayCanvasで実装することに焦点を当てます。最終的には、上記のものに類似するプロジェクトができるはずです。[チュートリアルプロジェクトはこちら][2]から見つけることができます。

## サーバーのセットアップ

ピアツーピアではなく、クライアントとサーバーのモデルを実装します。これは、すべてのクライアント(PlayCanvasのインスタンス)からデータを受信し、ブロードキャストします。 

[Glitch][3] は、完全にブラウザー内で無料でバックエンドアプリを書いてデプロイする便利な方法を提供しています。アカウントなしで使用できますが、作成すると作業内容を簡単に見つけることができます。[新しいNodeアプリを作成][4]し、`server.js` の内容を以下のように置き換えます。

```javascript
var server = require('http').createServer();
var options = {
  cors: true
}

var io = require('socket.io')(server, options);

io.sockets.on('connection', function(socket) {
    console.log("Client has connected!");
});

console.log ('Server started.');
server.listen(3000);

```

Glitchは、タイピングを終えると自動的にサーバーを再実行します。これをコピーした後、エラーが発生します。画面左側の `Logs` ボタンをクリックして、サーバーコンソールを開いてください。ここでは、サーバーの出力やエラーを見ることができます。 `Error: Cannot find module 'socket.io'` のエラーが表示されるはずです。

![Opening the log][5]

パッケージを含めるには、`package.json` に移動し、トップの `Add Package` ボタンをクリックします。 `socket.io` を検索します。

![Adding a package][6]


これでログを消去し、`server.js` にスペースを追加して再実行すると、ログに `Server started.` が表示されます。サーバーのデプロイが成功しました!トップの `Show` ボタンをクリックしても、実際には何も表示されません。なぜなら、サーバーがhttpリクエストを受信するのではなく、websocketリクエストを待機しているからです。

左上にある(私の場合 `thundering-polo` と表示されている)をクリックすると、デプロイされたサーバーのドメインが表示されます。ここでプロジェクト名も変更できます。

このサーバーは、誰かが接続するたびにメッセージをログに記録するだけです。これでクライアントが接続して、サーバーに接続したことを確認できます。

## プロジェクトのセットアップ

PlayCanvasで新しいプロジェクトを作成します。Socket.ioのクライアントJSライブラリを外部スクリプトとして含める必要があります。

プロジェクトの設定に移動します。
![Project settings][12]

'External Scripts'を見つけて開きます。
![External scripts settings][13]

値を0から1に変更し、[フレームワークサーバー][11]からのソケットライブラリのCDN URLを追加します。この場合、書いている時点で最新のバージョンであるv3.1.1を使用します。

設定は以下のようになるでしょう。
![Project settings][14]


```
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.1/socket.io.min.js
```

次に、ネットワークロジックを処理する新しいスクリプトを作成する必要があります。 `Network.js`という新しいスクリプトを作成します。最初に、サーバーに接続する必要があります。これは、initializeメソッドに次の行を追加することで行うことができます。


```javascript
this.socket = io.connect('https://thundering-polo.glitch.me');
```

`https://thundering-polo.glitch.me`を自分自身のサーバーアドレスに置き換えてください。

これが動作することを確認するには、ネットワークスクリプトを`Root`エンティティにアタッチし、ゲームを起動します。Glitchのサーバーログに目を向けてください。すべてがうまくいけば、サーバーは `Client has connected!` とログに記録されます。プロジェクトは、サーバーにメッセージを送信して受信するように設定されています。


## サーバーとクライアントの通信


クライアントとサーバー間でデータを送信する方法は、以前に作成したソケット接続を使用することです。クライアント（PlayCanvasのNetwork.jsで）からデータを送信するには、emit関数を使用します。例:


```javascript
this.socket.emit ('playerJoined', 'John');
```

これは、`playerJoined`というメッセージを、データ`John`で送信します。サーバーがメッセージを受信するには、サーバーファイル（Glitchのserver.js）に書き込む必要があります。

```javascript
socket.on ('playerJoined', function (name) {
    console.log (name);
});
```

これは、`playerJoined`が送信されたときにサーバーに送信されるデータをログに記録します。

このデモでは、リアルタイムマルチプレイヤーでプレイヤーが移動するようにしたいため、環境を作成する必要があります。グラウンドとして使用するエンティティを作成し、Collision (ボックス形状) とStaticタイプのRigidBodyを追加します。以下は、グラウンドエンティティの設定です：

<img loading="lazy" src="/images/tutorials/multiplayer/ground_entity.png" width="360">

次に、操作するプレイヤーを作成する必要があります。新しいカプセルを作成し、 `Player` と呼びます。ダイナミックなリジッドボディと衝突ボックスを追加し、リジッドボディの設定を以下の画像のように変更します。

<img loading="lazy" src="/images/tutorials/multiplayer/player_entity.png" width="360">

プレイヤーエンティティを複製し、 'Other' という名前に変更します。この新しいエンティティの `Enabled` ボックスをオフにして、最初は無効にします。これは、ゲーム内の他のプレイヤーをシミュレートするために使用するエンティティです。

プレイヤーにスクリプトコンポーネントを追加し、 `Movement.js` という新しいスクリプトをアタッチします。

```javascript
var Movement = pc.createScript('movement');

Movement.attributes.add('playerSpeed', {
    type: 'number',
    default: 30,
    title: 'Player Speed'
});

// initialize code called once per entity
Movement.prototype.initialize = function() {
    this.force = new pc.Vec3();
};

// update code called every frame
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

ゲームを起動すると、WASDを使用してプレイヤーを移動できるはずです。そうでない場合は、手順を見落としたか、エンティティの正しい設定を行っていない可能性があります。（移動スクリプトの速度属性を変更してみてください）
リアルタイムマルチプレイヤーでゲームを動作させるためには、ゲーム内のすべてのプレイヤーを追跡する必要があります。現在のサーバーコードを以下のコードに置き換えてください。

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
        // Creates a new player object with a unique ID number.

        players[id] = newPlayer;
        // Adds the newly created player to the array.

        socket.emit ('playerData', {id: id, players: players});
        // Sends the connecting client his unique ID, and data about the other players already connected.

        socket.broadcast.emit ('playerJoined', newPlayer);
        // Sends everyone except the connecting player data about the new player.
    });
});

console.log ('Server started.');
server.listen(3000);
```

上記のコードでは、プレイヤーが `initialize` メッセージを送信すると、ユニークなIDとゲーム内の他のプレイヤーのデータを送信します。また、他のプレイヤーが接続したことを通知します。これらのロジックを Network スクリプトに追加しましょう。

`initialize` に以下のコードを追加します。

```javascript
// Your io.connect function call should be up here

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

And then declare these new functions inside Network.js:

```javascript
Network.prototype.initializePlayers = function (data) {
    this.players = data.players;
    // Create a player array and populate it with the currently connected players.

    this.id = data.id;
    // Keep track of what ID number you are.

    for(var id in this.players){
        if(id != Network.id){
            this.players[id].entity = this.createPlayerEntity(this.players[id]);
        }
    }
    // For every player already connected, create a new capsule entity.

    this.initialized = true;
    // Mark that the client has received data from the server.
};

Network.prototype.createPlayerEntity = function (data) {
    var newPlayer = this.other.clone ();
    // Create a new player entity.

    newPlayer.enabled = true;
    // Enable the newly created player.

    this.other.getParent ().addChild (newPlayer);
    // Add the entity to the entity hierarchy.

    if (data)
        newPlayer.rigidbody.teleport (data.x, data.y, data.z);
    // If a location was given, teleport the new entity to the position of the connected player.

    return newPlayer;
    // Return the new entity.
};

Network.prototype.addPlayer = function (data) {
    this.players[data.id] = data;
    this.players[data.id].entity = this.createPlayerEntity(data);
};
```

ここでゲームに参加すると、クライアントがサーバーに接続したことを伝え、サーバーからプレイヤーのリストとその位置を受信します。その後、接続されている各プレイヤーに対して新しいエンティティを作成し、現在の位置に移動します。唯一の問題は、サーバーがすべてのプレイヤーの位置を把握していないことです。現在位置を1フレームごとにサーバーに送信する必要があります。

これらのコードを Network.js の `initialize` に追加します。

```javascript
socket.on ('playerMoved', function (data) {
    self.movePlayer (data);
});
```

`update` を以下のコードで置き換えます。

```javascript
Network.prototype.update = function (dt) {
    this.updatePosition ();
};
```


そして、Network.js 内に以下の新しい関数を宣言します。


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

サーバーに戻り、プレイヤーが自分の位置を送信した場合にどうなるかを考慮する必要があります。サーバーで新しいイベントを追加する必要があります。

```javascript
socket.on ('positionUpdate', function (data) {
    players[data.id].x = data.x;
    players[data.id].y = data.y;
    players[data.id].z = data.z;

    socket.broadcast.emit ('playerMoved', data);
});
```

これをテストする際には、現在サーバーが切断を考慮していないことに注意してください。正しく再起動するには、すべてのクライアントを閉じ、サーバーを再起動（Glitchで入力して）してから、クライアントを再起動する必要があります。

## 最後に

以上です！お好みで、以下のアイデアを追加してみてください。
* プレイヤーがゲームを終了したときに削除されるようにする
* プレイヤーが端から落ちた場合の復帰機能を追加する

これは非常に基本的なマルチプレイヤーの実装にすぎません。実際には、より大きなマルチプレイヤーゲームを作成する場合には、すべてのゲームロジックをクライアントで処理するのではなく、権威のあるサーバーを使用することを検討する必要があります。[こちら][1]で、Socket.ioがどのように動作するか、JavaScriptでマルチプレイヤーを開発する方法について、さらに詳細なチュートリアルを読むことができます。

You can find the [full server code on Glitch here][10], where you can also fork it and extend it.

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
