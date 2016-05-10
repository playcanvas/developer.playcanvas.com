---
title: Real Time Multiplayer
template: tutorial-page.tmpl.html
---

<iframe src="http://playcanv.as/p/kvMKtuwp" ></iframe>

*Use WASD to move the player around. If you only see one capsule, try opening this page in another tab or on another computer.*

In this tutorial we’ll cover how to setup basic multiplayer project, using Node.js and Socket.io. It will also cover the basics of sending and receiving messages to/from the server. By the end of the demo you should have a project similar to the one above.

## Setting up the Server

Before you can work on anything multiplayer related, you’ll need a server to process your game’s data. For this tutorial we’ll be using our own computer, but in the future you may want to look into server hosts such as [Amazon][5] or [OpenShift.][6]

Head over to nodejs.org and download and install the recommended version of Node.js.

Open up a command prompt window (terminal for Mac) and type in:

~~~javascript~~~
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

~~~javascript~~~
	node server.js
~~~

You should see ‘Server started.’ Congratulations, you’re now running your very own server.

![Server Started][2]

## Setting up the Project

Open up PlayCanvas and create a new project. Firstly, you’ll want to create a new script called ‘socket.js’. Next, add it to your projects priority list.

![Script Priority][3]

Open the script and replace the contents of the file with [this.][4]

Now we need to create a new script to handle the network logic. Create a new script called ‘Network.js’. We first need to create a connection to the server. We can do this by adding this line in the initialize method:

	this.socket = io.connect(‘http://localhost:3000/');

‘http://localhost' is the address of your server and the ‘3000’ is the port. Since we’re connecting to our own computer, we use localhost. If you were hosting elsewhere this is what you'd want to change. Make sure the port you’re using to connect is the same as the one you set in the server file. The project is now setup to send and receive messages to/from the server.

## Server and Client Communication

The way you can send data between the client and server is with the socket connection we made earlier. To send data from the client, we use the emit function. Here’s an example:

~~~javascript~~~
	this.socket.emit (‘playerJoined’, ‘John’);
~~~

This emits a message called ‘playerJoined’, with the data ‘John’. For the server to receive the message, we need to write in the server file:
	
~~~javascript
	socket.on (‘playerJoined’, function (name) {
		console.log (name);
	});
~~~

This will log whatever data is sent to the server when ‘playerJoined’ is emitted.

For this demo, we’re aiming to have players move around with others in real time, so we'll need to create an environemnt. Start by create an entity to use as a ground, and add a collision box and static rigidbody.

![Ground Entity][7]

Next we’ll need a player to control. Create a new capsule and call it ‘Player’. add a dynamic rigidbody and collision box, and change the rigid body settings to match the picture below.

![Player Entity][8]

Duplicate the player entity and rename it as 'Other'. This is the entity we'll be using to simulate other players in the game.

Add a script component to your player, and attach a new script called 'Movement.js':

~~~javascript~~~
  pc.script.attribute('playerSpeed', 'number', 10, {displayName: 'Player Speed'});

	pc.script.create('Movement', function (app) {
    	// Creates a new Movement instance
    	var Movement = function (entity) {
        		this.entity = entity;
        		this.force = new pc.Vec3 ();
    	};

    	Movement.prototype = {
        		// Called every frame, dt is time in seconds since last update
        		update: function (dt) {
            		var forward = this.entity.forward;
           			var right = this.entity.right;
            
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
                
                			this.force.set (x, 0, z).normalize ().scale ((this.playerSpeed / 100));
                			this.entity.translate (this.force);
                			this.entity.rigidbody.syncEntityToBody ();
            		}
        		}
   	};

    	return Movement;

	});
~~~

When you launch the game you should be able to use WASD to move your player around. If not, you’ve missed a step or not set the correct settings for the entity. (Try changing the speed attribute on the movement script?)
For the game to work in real time multiplayer, we need to keep track of all players in the game, as well as their current positions. Replace the current server code with this:

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
    		this.deleted = false;
	}

	io.sockets.on('connection', function(socket) {
	});

	console.log ('Server started.');
	server.listen(3000);
~~~

This code creates a new data type called ‘Player’ that stores all the information about each player, and creates an array called ‘players’.

Back on the Network script, in the initialize method, we need to add a message to tell the server that we’ve joined.

~~~javascript~~~
	socket.emit (‘initialize’);
~~~

Now, on the server code we need to decide what happens when a player connects. Replace part of the server code with this:

~~~javascript~~~
	io.sockets.on('connection', function(socket) {

		socket.on (‘initialize’, function () {
			var idNum = players.length;
			var newPlayer = new Player (idNum);
			// Creates a new player object with a unique ID number.

			players.push (newPlayer);
			// Adds the newly created player to the array.
			
			socket.emit (‘playerData’, {id: idNum, players: players});
			// Sends the connecting client his unique ID, and data about the other 				players already connected.

			socket.broadcast.emit (‘playerJoined’, newPlayer);
			// Sends everyone except the connecting player data about the new player.
		}); 

	});
~~~

In the code above, we are creating a new player, adding them to the array, sending the connecting client his ID number as well as the other players’ data, and finally telling already connected players that a new player has joined. The way we distinguish this is with by adding broadcast in the function. Inside of a ‘socket.on’ method, using:

~~~javascript~~~
	socket.emit (‘test’, data);
~~~

Will only emit the message to the original sender. But using:

~~~javascript~~~
	socket.broadcast.emit(‘test’, data);
~~~

Will emit the message to everyone except the original sender.

Next we have to account for the data being received about other players. Back on the Network.js, we need to create two new functions:

~~~javascript~~~
  setListeners: function () {
            var self = this;
            socket.on ('playerData', function (data) {
            	self.players = data.players;
		// Create a player array and populate it with the currently connected players.
		
		this.id = data.id
		// Keep track of what ID number you are.
		
		for (i = 0; i < this.players.length; i++) {
               		if (i !== id && !this.players[i].deleted) {
                    			this.players[i].entity = this.createPlayerEntity (data.players[i]);
                		}
           		}
		// For every player already connected, create a new capsule entity.

            	this.initialized = true;
		// This will be used later.
            });
  },

createPlayerEntity: function (data) {
	var newPlayer = this.other.clone ();
            newPlayer.enabled = true;
            
            this.other.getParent ().addChild (newPlayer);
            
            if (data)
            	newPlayer.rigidbody.teleport (data.x, data.y, data.z);
            
            return newPlayer;
}
~~~

Don’t forget to call the setListeners function in the initialize method:

~~~javascript~~~
	this.setListeners ();
~~~


[1]: /images/tutorials/multiplayer/socket_installed.png
[2]: /images/tutorials/multiplayer/server_started.png
[3]: /images/tutorials/multiplayer/script_priority.png
[4]: http://raw.githubusercontent.com/socketio/socket.io-client/master/socket.io.js
[5]: http://aws.amazon.com/ec2/
[6]: https://www.openshift.com/
[7]: /images/tutorials/multiplayer/ground_entity.png
[8]: /images/tutorials/multiplayer/player_entity.png
