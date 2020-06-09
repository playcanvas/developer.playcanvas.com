---
title: 实时多人游戏
template: tutorial-page.tmpl.html
tags: multiplayer, networking
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406048/507186-image-75.jpg
---

<iframe src="http://playcanv.as/p/XFp1Ty3X/" ></iframe>
*使用WASD移动角色。 如果您只看到一个胶囊体，请尝试在另一个选项卡或另一台计算机上打开此页面。*

在本教程中，我们将介绍如何使用Node.js和Socket.io设置基本多人项目。 它还将涵盖向/从服务器发送和接收消息的基础知识。 在演示的结尾，你应该可以看到一个类似于上面的项目。

## 设置服务器

在你可以处理任何多人相关的游戏之前，你需要一个服务器来处理游戏的数据。 对于本教程，我们将使用我们自己的计算机，但在将来，你可能需要使用服务器主机，如[Amazon] [5]或[OpenShift] [6]。

转到nodejs.org并下载并安装推荐的Node.js.

打开命令提示符窗口(Mac终端)，输入：

```
npm install socket.io
```

它应该需要几秒钟。 完成后，您应该在您的计算机上安装了Node.js和Socket.io。

![安装Socket][1]

接下来，我们需要创建一个服务器文件。 打开文本编辑器，然后键入以下内容:

```javascript
var server = require('http').createServer();
var io = require(‘socket.io')(server);

io.sockets.on('connection', function(socket) {
});

console.log ('Server started.');
server.listen(3000);
```

请注意，服务器正在侦听端口3000。现在我们返回，将其作为'server.js'保存在您的主文件夹中。 确保它被保存为Javascript文件而不是Server.js.txt。 要启动服务器，请打开命令提示符窗口并输入：

```
node server.js
```

您应该看到‘Server started.’提示 。恭喜，您现在正在运行自己的服务器。

![启动服务器][2]

## 设置项目

打开PlayCanvas并创建一个新项目。 首先，您需要创建一个名为“socket.js”的脚本。

打开脚本并使用[这个] [4]替换文件的内容。

现在我们需要创建一个新的脚本来处理网络逻辑。 创建一个名为“Network.js”的脚本。 我们首先需要创建一个到服务器的连接，这可以通过在initialize方法中添加这一行来实现：

```javascript
this.socket = io.connect(‘http://localhost:3000/');
```

‘http://localhost' 是您的本地服务器的地址， ‘3000’ 是端口。 因为我们连接到我们自己的计算机，我们使用localhost。 如果你想在别处托管，请确保您用于连接的端口与在服务器文件中设置的端口相同。 该项目现在设置为向/从服务器发送和接收消息。

## 服务器与客户端通讯

在客户端和服务器之间发送数据的方式是使用我们之前创建的套接字连接。 要从客户端发送数据，我们需要使用emit函数。 这里有一个例子:

```javascript
this.socket.emit (‘playerJoined’, ‘John’);
```

这会发送一个名为 ‘playerJoined’，数据为‘John’的消息。 为了服务器能够接收消息，我们需要在服务器文件中写入:

```javascript
socket.on (‘playerJoined’, function (name) {
	console.log (name);
});
```

这将记录发送‘playerJoined’ 时发送到服务器的任何数据。

对于这个演示，我们的目标是让玩家实时地与他人一起移动，所以我们需要创建一个环境。 首先创建一个实体作为地面，然后添加一个碰撞盒和静态刚体。

![地面实体][7]

接下来，我们需要一个可以控制的玩家。 我们创建一个新的作为 ‘Player’的胶囊体，为其添加一个动态刚体和碰撞盒，并更改刚体设置以匹配下面的图片。

![玩家实体][8]

复制玩家实体，并将其重命名为 'Other'。 这是我们将用来模拟游戏中其他玩家的实体。

将脚本组件添加到玩家实体上，并附加一个名为“Movement.js”的脚本:

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

当你启动游戏后，你就能够使用WASD来移动你的player。 如果不行，您可能错过了一个步骤，或者没有为实体设置正确的属性。 (尝试改变移动脚本上的速度属性)
对于实时多人游戏，我们需要跟踪游戏中的所有玩家。 将当前服务器代码替换为：

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
		// Creates a new player object with a unique ID number.

		players.push (newPlayer);
		// Adds the newly created player to the array.

		socket.emit (‘playerData’, {id: idNum, players: players});
		// Sends the connecting client his unique ID, and data about the other players already connected.

		socket.broadcast.emit (‘playerJoined’, newPlayer);
		// Sends everyone except the connecting player data about the new player.
	});
});

console.log ('Server started.');
server.listen(3000);
```

在上面的代码中，当玩家发送消息“初始化”时，我们向他发送他在游戏中其他玩家的唯一ID和数据。 它也告诉别人一个新的播放器已经连接。 让我们将这个逻辑添加到我们的网络脚本中。

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
	// Create a player array and populate it with the currently connected players.

	this.id = data.id
	// Keep track of what ID number you are.

	for (i = 0; i < this.players.length; i++) {
		if (i !== this.id) {
			this.players[i].entity = this.createPlayerEntity (data.players[i]);
		}
	}
	// For every player already connected, create a new capsule entity.

	this.initialized = true;
	// Mark that the client has received data from the server.
}

createPlayerEntity: function (data) {
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
},

addPlayer: function (data) {
	this.players.push (data);
	this.players[this.players.length - 1].entity = this.createPlayerEntity ();
}
```

现在我们加入游戏，客户端告诉了我们已经连接的服务器，服务器向我们发送了一个具有位置的玩家列表。 然后游戏为每个连接的玩家创建一个新实体，并将它们移动到当前位置。 唯一的问题是，服务器不知道所有玩家的位置。 我们需要向服务器发送我们每一帧的当前位置。 将此代码添加到您的Network.js脚本中：

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

回到服务器这边，我们需要考虑当玩家向我们发送他们的位置时会发生什么。

```javascript
socket.on ('positionUpdate', function (data) {
	players[data.id].x = data.x;
	players[data.id].y = data.y;
	players[data.id].z = data.z;

	socket.broadcast.emit ('playerMoved', data);
});
```

## 总结

就是这样！ 如果你愿意，可以尝试自己添加一些别的想法:
*玩家在关闭游戏时能够被移除
*添加当玩家脱离边缘时的复位功能。

有很多关于创建多人游戏的信息，你可以一一阅览。 记住这只是一个非常基本的多人游戏的实现。 实际上，当创建更大的多人游戏时，您需要考虑使用授权服务器，而不是处理客户端上的所有游戏逻辑。 您可能还想查看一个更永久的服务器主机，如[Amazon] [5]，[OpenShift] [6]或[Azure] [9]。

以下是整段的客户端联网代码:

```javascript
var Network = pc.createScript('network');

// static variables
Network.id = null;
Network.socket = null;

// initialize code called once per entity
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

// update code called every frame
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

以下是整段的服务器代码:

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

