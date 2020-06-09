---
title: リアルタイム マルチプレイヤー
template: tutorial-page.tmpl.html
tags: multiplayer, networking
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406048/507186-image-75.jpg
---

<iframe src="http://playcanv.as/p/XFp1Ty3X/" ></iframe>
*WASDを使用してプレイヤーを移動させます。カプセルが一つしか表示されない場合はこのページを別のタブまたは別のコンピュータで開いてみてください。*

このチュートリアルでは、Node.jsとSocket.ioを使用して基本的なマルチプロジェクトを設定する方法を説明します。また、サーバーに対するメッセージの送受信の基本を説明します。デモを終える頃には、上記と同様のプロジェクトが完成するはずです。

## サーバの設定

マルチプレイヤー関連の作業を行う前に、ゲームデータを処理するサーバが必要です。このチュートリアルでは独自のコンピュータを使用しますが、いずれは [Amazon][5]や[OpenShift.][6]のようなサーバホストを検討するべきです。

nodejs.orgに移動してNode.jsの推奨バージョンをダウンロードしてインストールします。

コマンドプロンプトウィンドウを開いて(Macの場合はterminal)次の通り入力します：

```
npm install socket.io
```

数秒で完了します。終わったら、コンピュータにNode.jsとSocket.ioがインストールされているはずです。

![ソケットがインストールされました][1]

次に、サーバファイルを作成する必要があります。テキストエディタを開き次を入力します：

```javascript
var server = require('http').createServer();
var io = require(‘socket.io')(server);

io.sockets.on('connection', function(socket) {
});

console.log ('Server started.');
server.listen(3000);
```

サーバがポート3000をリッスンしています。これについては後ほど説明します。ホームフォルダに「server.js」として保存してください。必ず、Server.js.txtではなくJavascriptファイルとして保存してください。サーバーを起動するには、コマンドプロンプトウィンドウを開き次を入力します：

```
node server.js
```

‘Server started.’と表示されます。これで自身のサーバが実行されました。

![サーバが起動しました][2]

## プロジェクトの設定

PlayCanvasを開いて新規のプロジェクトを作成します。まず。‘socket.js’という新しいスクリプトを作成します。

スクリプトを開き、内容を[こちら][4]で置き換えます。

次に、ネットワーク・ロジックを処理するための新しいスクリプトを作成する必要があります。「Network.js」という新しいスクリプトを作成してください。まず最初にサーバとの通信を作成する必要があります。これはinitializeメソッドに次の行を追加することで行うことができます：

```javascript
this.socket = io.connect(‘http://localhost:3000/');
```

'http://localhost' がサーバーのアドレスで、‘3000’はポートです。この場合は自身のコンピュータに接続するので、localhostを使用します。他の場所でホスティングする場合、これを変更します。接続に使用するポートがサーバファイルで設定したものと同じであることを確認してください。これでプロジェクトがサーバに対してメッセージを送受信できるように設定されました。

## サーバとクライアントの通信

クライアントとサーバ間でデータを送るためには以前に作成したソケット接続を使用します。クライアントからデータを送信するにはemit関数を使用します。例：

```javascript
this.socket.emit (‘playerJoined’, ‘John’);
```

‘John’のデータを含む‘playerJoined’というメッセージを出力します。サーバーがメッセージを受信するためには、サーバー・ファイルに次を記述する必要があります：

```javascript
socket.on (‘playerJoined’, function (name) {
	console.log (name);
});
```

これにより、‘playerJoined’が出力される際にサーバに送信されるデータがすべてログに記録されます。

このデモではプレイヤーがリアルタイムで他のプレイヤーと動き回ることが目的なので、環境を作成する必要があります。まず、地面をあらわすエンティティを作成し、コリジョンボックスと静的リジッドボディを追加します。

![地面をあらわすエンティティ][7]

次に、制御するプレイヤーが必要です。新しいカプセルを作成して‘Player’と名づけます。動的なリジッドボディとこりジョンボックスを追加して、リジッドボディの設定を書き画像のように変更してください。

![プレイヤーエンティティ][8]

プレイヤーエンティティを複製して'Other'に名前を変更します。これは、ゲーム上の他のプレイヤーをシミュレーションするためのエンティティです。

プレイヤーにスクリプトコンポーネントを追加して'Movement.js'という新しいスクリプトを添付します：

```javascript
var Movement = pc.createScript('movement');

Movement.attributes.add('playerSpeed', {
    type: 'number',
    default: 30,
    title: 'Player Speed'
});

// エンティティ毎にinitializeコードが一度呼ばれる
Movement.prototype.initialize = function() {
    this.force = new pc.Vec3();
};

// updateコードが毎フレーム呼ばれる
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

ゲームを起動すると、WASDを使用してプレーヤーを動かせるはずるです。動かせない場合は、手順を間違っているか、エンティティの設定が正しくありません。(動作スクリプト上の速度属性を変更してみてください)
ゲームはリアルタイムのマルチプレイとして機能するためには、ゲーム内のすべてのプレイヤーを管理する必要があります。現在のサーバコードを次で置き換えます：

```javascript
var server = require('http').createServer();
var io = require('socket.io')(server);

var players = [];

function Player (id) {
	this.id = id;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.entity = null;
}

io.sockets.on('connection', function(socket) {
	socket.on (‘initialize’, function () {
		var idNum = players.length;
		var newPlayer = new Player (idNum);
		// 固有のID番号を持つ新規のプレイヤーオブジェクトを作成。

		players.push (newPlayer);
		// 新しく作成したプレイヤーを配列に追加。

		socket.emit (‘playerData’, {id: idNum, players: players});
		// 接続されたクライアントに固有のIDとすでに接続されているプレイヤーのデータを送信。

		socket.broadcast.emit (‘playerJoined’, newPlayer);
		// 接続されたプレイヤー以外の全員に新規プレイヤーのデータを送信。
	});
});

console.log ('Server started.');
server.listen(3000);
```

上記のコードでプレイヤーが'initialize'メッセージを送信した際、そのプレイヤーの固有IDとゲーム内の他のプレーヤーのデータを送ります。また、他のプレイヤーに新しいプレーヤーが接続されたことを伝えます。ネットワークスクリプトにそのロジックを追加してみましょう。

```javascript
initialize: function () {
	socket = io.connect('http://localhost:3000/');
	socket.emit ('initialize');

	this.player = this.app.root.findByName ('Player');
	this.other = this.app.root.findByName ('Other');

	var self = this;
	socket.on ('playerData', function (data) {
		self.initializePlayers (data);
	});

	socket.on ('playerJoined', function (data) {
		self.addPlayer (data);
	});
},

initializePlayers: function (data) {
	self.players = data.players;
	// プレイヤー配列を作成して現在接続されたプレイヤーで埋めます。

	this.id = data.id
	// 自分のIDを管理

	for (i = 0; i < this.players.length; i++) {
		if (i !== this.id) {
			this.players[i].entity = this.createPlayerEntity (data.players[i]);
		}
	}
	// すでに接続されたすべてのプレイヤーに対して新しいカプセルエンティティを作成。

	this.initialized = true;
	// クライアントがサーバからデータを受信したことをマーク。
}

createPlayerEntity: function (data) {
	var newPlayer = this.other.clone ();
	// 新しいプレイヤーエンティティを作成。

	newPlayer.enabled = true;
	// 新しく作成したプレイヤーを有効にする。

	this.other.getParent ().addChild (newPlayer);
	// エンティティ階層にエンティティを追加。

	if (data)
		newPlayer.rigidbody.teleport (data.x, data.y, data.z);
	// 場所が指定された場合は、新しいエンティティを接続されたプレイヤーの位置にテレポート。

	return newPlayer;
	// 新しいエンティティを返す。
},

addPlayer: function (data) {
	this.players.push (data);
	this.players[this.players.length - 1].entity = this.createPlayerEntity ();
}
```

これで、ゲームに参加するとクライアントは接続したことをサーバに伝え、サーバからプレイヤーのリストとその位置を受信するようになりました。その後、ゲームは接続された各プレーヤーに対して新しいエンティティを作成し、それらを現在の位置に移動します。唯一の問題は、サーバがすべてのプレイヤーの位置を把握していないことです。サーバに現在位置すべてのフレームを送信する必要があります。Network.jsスクリプトにこのコードを追加します：

```javascript
initialize: function () {
	socket = io.connect('http://localhost:3000/');
	socket.emit ('initialize');

	this.player = this.app.root.findByName ('Player');
	this.other = this.app.root.findByName ('Other');

	var self = this;
	socket.on ('playerData', function (data) {
		self.initializePlayers (data);
	});

	socket.on ('playerJoined', function (data) {
		self.addPlayer (data);
	});

	socket.on ('playerMoved', function (data) {
		self.movePlayer (data);
	});
},

movePlayer: function (data) {
	if (this.initialized)
		this.players[data.id].entity.rigidbody.teleport (data.x, data.y, data.z);
},

update: function (dt) {
	this.updatePosition ();
},

updatePosition: function () {
	if (this.initialized) {
		var pos = this.player.getPosition ();
		socket.emit ('positionUpdate', {id: id, x: pos.x, y: pos.y, z: pos.z});
	}
}
```

サーバーでは、プレイヤーが自分の位置を送信したときに何が起こるかを把握する必要があります。

```javascript
socket.on ('positionUpdate', function (data) {
	players[data.id].x = data.x;
	players[data.id].y = data.y;
	players[data.id].z = data.z;

	socket.broadcast.emit ('playerMoved', data);
});
```

## まとめ

以上です！ご希望でしたら、次のいくつかを自身で追加してみてください：
* ゲームを閉じた際にプレイヤーが削除される。
* プレイヤーが端から落ちたときのための復活機能を追加。

マルチプレイヤーゲームの作成に関する情報はオンラインで読むことができます。このチュートリアルはマルチプレイヤーのごく基本的な実装です。大きなマルチプレイヤーゲームを作成する際は、クライアントでゲームロジックを処理するのではなく、認証サーバの使用を検討することをお勧めします。また、[Amazon][5], [OpenShift][6], [Azure][9]のような、より恒久的なサーバホストを検討しても良いかもしれません。

完全なNetworkスクリプトです:

```javascript
var Network = pc.createScript('network');

// 静的変数
Network.id = null;
Network.socket = null;

// 格エンティティでinitializeコードが一度だけ呼ばれる
Network.prototype.initialize = function() {
    this.player = this.app.root.findByName('Player');
    this.other = this.app.root.findByName('Other');

    var socket = io.connect('http://40.76.222.228/'); // playcanvas hosted server
    Network.socket = socket;

    socket.emit ('initialize');

    var self = this;
    socket.on ('playerData', function (data) {
        console.log('Connected.');
        self.initializePlayers (data);
    });

    socket.on ('playerJoined', function (data) {
        self.addPlayer(data);
    });

    socket.on ('playerMoved', function (data) {
        self.movePlayer(data);
    });

    socket.on ('killPlayer', function (data) {
        self.removePlayer(data);
    });

    setInterval (function () {
        if (self.initialized) {
            socket.emit('ping', Network.id);
            console.log('pinged as #' + Network.id);
        }
    }, 1000);
};

Network.prototype.initializePlayers = function (data) {
    this.players = data.players;
    Network.id = data.id;

    for (i = 0; i < this.players.length; i++) {
        if (i !== Network.id && !this.players[i].deleted) {
            this.players[i].entity = this.createPlayerEntity(data.players[i]);
            console.log('Found player.');
        }
        console.log(data);
    }

    this.initialized = true;
    console.log('initialized');
};

Network.prototype.addPlayer = function (data) {
    this.players.push(data);
    this.players[this.players.length - 1].entity = this.createPlayerEntity();
};

Network.prototype.movePlayer = function (data) {
    if (this.initialized && !this.players[data.id].deleted) {
        this.players[data.id].entity.rigidbody.teleport(data.x, data.y, data.z);
    }
};

Network.prototype.removePlayer = function (data) {
    if (this.players[data].entity) {
        this.players[data].entity.destroy ();
        this.players[data].deleted = true;
    }
};

Network.prototype.createPlayerEntity = function (data) {
    var newPlayer = this.other.clone();
    newPlayer.enabled = true;

    this.other.getParent().addChild(newPlayer);

    if (data)
        newPlayer.rigidbody.teleport(data.x, data.y, data.z);

    return newPlayer;
};

// updateコードが毎フレーム呼ばれる
Network.prototype.update = function(dt) {
    this.updatePosition();
};

Network.prototype.updatePosition = function () {
    if (this.initialized) {
        var pos = this.player.getPosition();
        Network.socket.emit('positionUpdate', {id: Network.id, x: pos.x, y: pos.y, z: pos.z});
    }
};

```

完全なサーバスクリプト:

```javascript
var server = require('http').createServer();
var io = require('socket.io')(server);

var players = [];

function Player (id) {
    this.id = id;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.entity = null;
}

io.sockets.on('connection', function(socket) {
	socket.on ('initialize', function () {
	        var idNum = players.length;
	        var newPlayer = new Player (idNum);
	        players.push (newPlayer);

	        socket.emit ('playerData', {id: idNum, players: players});
	        socket.broadcast.emit ('playerJoined', newPlayer);
	});

	socket.on ('positionUpdate', function (data) {
	        players[data.id].x = data.x;
	        players[data.id].y = data.y;
	        players[data.id].z = data.z;

		socket.broadcast.emit ('playerMoved', data);
	});
});

console.log ('Server started.');
server.listen(3000);
```

[1]: /images/tutorials/multiplayer/socket_installed.png
[2]: /images/tutorials/multiplayer/server_started.png
[3]: /images/tutorials/multiplayer/script_priority.png
[4]: http://raw.githubusercontent.com/socketio/socket.io-client/master/socket.io.js
[5]: http://aws.amazon.com/ec2/
[6]: https://www.openshift.com/
[7]: /images/tutorials/multiplayer/ground_entity.png
[8]: /images/tutorials/multiplayer/player_entity.png
[9]: https://azure.microsoft.com/en-gb/

