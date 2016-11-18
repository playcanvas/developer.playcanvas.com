---
title: Real Time Multiplayer
template: tutorial-page.tmpl.html
tags: multiplayer, networking
---

<iframe src="http://playcanv.as/p/XFp1Ty3X/" ></iframe>
*Use WASD to move the player around. If you only see one capsule, try opening this page in another tab or on another computer.*

In this tutorial we’ll cover how to setup basic multiplayer project, using Node.js and Socket.io. It will also cover the basics of sending and receiving messages to/from the server. By the end of the demo you should have a project similar to the one above.

## Setting up the Server

Before you can work on anything multiplayer related, you’ll need a server to process your game’s data. For this tutorial we’ll be using our own computer, but in the future you may want to look into server hosts such as [Amazon][5] or [OpenShift.][6]

Head over to nodejs.org and download and install the recommended version of Node.js.

Open up a command prompt window (terminal for Mac) and type in:

~~~
npm install socket.io
~~~

It should take a few seconds. When it's done, you should have Node.js and Socket.io installed on your computer.

![Socket Installed][1]

Next, we’ll need to create a server file. Open up a text editor and type in the following:

~~~javascript~~~
var server = require('http').createServer();
var io = require(‘socket.io')(server);

io.sockets.on('connection', function(socket) {
});

console.log ('Server started.');
server.listen(3000);
~~~

Notice that the server is listening on port 3000. We’ll come back to this. Save it in your home folder as ‘server.js’. Make sure it’s saved as a Javascript file and not Server.js.txt. To start your server, open up a command prompt window and type in:

~~~
node server.js
~~~

You should see ‘Server started.’ Congratulations, you’re now running your very own server.

![Server Started][2]

## Setting up the Project

Open up PlayCanvas and create a new project. First, you’ll want to create a new script called ‘socket.js’.

Open the script and replace the contents of the file with [this.][4]

Now we need to create a new script to handle the network logic. Create a new script called ‘Network.js’. We first need to create a connection to the server. We can do this by adding this line in the initialize method:

~~~javascript~~~
this.socket = io.connect(‘http://localhost:3000/');
~~~

‘http://localhost' is the address of your server and the ‘3000’ is the port. Since we’re connecting to our own computer, we use localhost. If you were hosting elsewhere this is what you'd want to change. Make sure the port you’re using to connect is the same as the one you set in the server file. The project is now setup to send and receive messages to/from the server.

## Server and Client Communication

The way you can send data between the client and server is with the socket connection we made earlier. To send data from the client, we use the emit function. Here’s an example:

~~~javascript~~~
this.socket.emit (‘playerJoined’, ‘John’);
~~~

This emits a message called ‘playerJoined’, with the data ‘John’. For the server to receive the message, we need to write in the server file:

~~~javascript~~~
socket.on (‘playerJoined’, function (name) {
	console.log (name);
});
~~~

This will log whatever data is sent to the server when ‘playerJoined’ is emitted.

For this demo, we’re aiming to have players move around with others in real time, so we'll need to create an environment. Start by create an entity to use as a ground, and add a collision box and static rigidbody.

![Ground Entity][7]

Next we’ll need a player to control. Create a new capsule and call it ‘Player’. add a dynamic rigidbody and collision box, and change the rigid body settings to match the picture below.

![Player Entity][8]

Duplicate the player entity and rename it as 'Other'. This is the entity we'll be using to simulate other players in the game.

Add a script component to your player, and attach a new script called 'Movement.js':

~~~javascript~~~
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
~~~

When you launch the game you should be able to use WASD to move your player around. If not, you’ve missed a step or not set the correct settings for the entity. (Try changing the speed attribute on the movement script)
For the game to work in real time multiplayer, we need to keep track of all players in the game. Replace the current server code with this:

~~~javascript~~~
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
~~~

In the code above, when a player sends the message 'initialize', we send him his unique ID and data about other players in the game. It also tells others that a new player has connected. Let's add that logic into our Network script.

~~~javascript~~~
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
~~~

Now when we join the game, the client tells the server we've connected, and the server sends us a list of players with their positions. The game then creates a new entity for each player connected, and moves them to their current position. The only problem is, the server doesn't know the positions of all players. We need to send the server our current position every frame. Add this code into your Network.js script:

~~~javascript~~~
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
~~~

And back on the server, we need to account for what happens when the player sends us their position.

~~~javascript~~~
socket.on ('positionUpdate', function (data) {
	players[data.id].x = data.x;
	players[data.id].y = data.y;
	players[data.id].z = data.z;

	socket.broadcast.emit ('playerMoved', data);
});
~~~

## Conclusion

That's about it! If you'd like, try adding some of these ideas on your own:
* Players are removed when they close the game.
* Adding respawning functionality for when players fall off the edge.

There's a lot of information online about creating multiplayer games that you can read into. Keep in mind this is only a very basic implementation of multiplayer. Realistically, when creating larger multiplayer games you'll want to consider using an authoritive server, instead of handling all the game logic on the client. You might also want to look into a more permanent server host like [Amazon][5], [OpenShift][6], or [Azure][9].

Here's the full Network script:

~~~javascript~~~
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

~~~

Here's the full server script:

~~~javascript~~~
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
~~~

[1]: /images/tutorials/multiplayer/socket_installed.png
[2]: /images/tutorials/multiplayer/server_started.png
[3]: /images/tutorials/multiplayer/script_priority.png
[4]: http://raw.githubusercontent.com/socketio/socket.io-client/master/socket.io.js
[5]: http://aws.amazon.com/ec2/
[6]: https://www.openshift.com/
[7]: /images/tutorials/multiplayer/ground_entity.png
[8]: /images/tutorials/multiplayer/player_entity.png
[9]: https://azure.microsoft.com/en-gb/
