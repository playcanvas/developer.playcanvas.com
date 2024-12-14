"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2897],{26997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorials/real-time-multiplayer","title":"Real Time Multiplayer","description":"This tutorial covers how to start creating your own multiplayer from scratch. If you prefer to use a hosted multiplayer service, we have tutorials for Colyseus and Photon.","source":"@site/docs/tutorials/real-time-multiplayer.md","sourceDirName":"tutorials","slug":"/tutorials/real-time-multiplayer","permalink":"/tutorials/real-time-multiplayer","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/real-time-multiplayer.md","tags":[{"inline":true,"label":"multiplayer","permalink":"/tags/multiplayer"},{"inline":true,"label":"networking","permalink":"/tags/networking"}],"version":"current","frontMatter":{"title":"Real Time Multiplayer","tags":["multiplayer","networking"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406048/507186-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Real-time Multiplayer with Photon","permalink":"/tutorials/real-time-multiplayer-photon"},"next":{"title":"Render 3D World to UI","permalink":"/tutorials/render-3d-world-to-ui"}}');var a=t(74848),o=t(28453);const r={title:"Real Time Multiplayer",tags:["multiplayer","networking"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406048/507186-image-75.jpg"},s=void 0,l={},c=[{value:"Setting up the Server",id:"setting-up-the-server",level:2},{value:"Setting up the Project",id:"setting-up-the-project",level:2},{value:"Server and Client Communication",id:"server-and-client-communication",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This tutorial covers how to start creating your own multiplayer from scratch. If you prefer to use a hosted multiplayer service, we have tutorials for ",(0,a.jsx)(n.a,{href:"/tutorials/real-time-multiplayer-colyseus",children:"Colyseus"})," and ",(0,a.jsx)(n.a,{href:"/tutorials/real-time-multiplayer-photon",children:"Photon"}),"."]})}),"\n",(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/XFp1Ty3X/",title:"Real Time Multiplayer"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Use WASD to move the player around. If you only see one capsule, try opening this page in another tab or on another computer."})}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial we\u2019ll cover how to setup a basic multiplayer project using Node.js and Socket.io. We\u2019ll focus on implementing it in PlayCanvas. By the end you should have a project similar to the one above. You can find the ",(0,a.jsx)(n.a,{href:"https://playcanvas.com/project/406048/overview/tutorial-realtime-multiplayer",children:"tutorial project here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-server",children:"Setting up the Server"}),"\n",(0,a.jsx)(n.p,{children:"We'll be implementing a client-server model (as opposed to peer-to-peer). This will be a basic server that will receive data from all clients (which are our PlayCanvas instances) and broadcast it back."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://glitch.com/",children:"Glitch"})," provides a really convenient way to write and deploy backend apps for free completely in your browser! You can use it without an account but creating one will let you easily find your work. ",(0,a.jsx)(n.a,{href:"https://glitch.com/edit/#!/new-project",children:"Create a new Node app"})," and replace the contents of ",(0,a.jsx)(n.code,{children:"server.js"})," with this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const http = require(\'http\');\nconst { Server } = require(\'socket.io\');\n\nconst server = http.createServer();\n\n// Configure Socket.IO with CORS\nconst io = new Server(server, {\n    cors: {\n        // If you only want to allow PlayCanvas launch domain:\n        // origin: "https://launch.playcanvas.com",\n\n        // Or allow all origins (less secure, but quick for testing)\n        origin: "*",\n        methods: ["GET", "POST"]\n    }\n});\n\nio.on(\'connection\', (socket) => {\n    console.log(`New client connected: ${socket.id}`);\n});\n\nconst PORT = process.env.PORT || 3000;\nserver.listen(PORT, () => {\n    console.log(`Server started on port ${PORT}`);\n});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Glitch will automatically re-run the server every time you finish typing. Once you\u2019ve copied this, you should get an error. Click on the ",(0,a.jsx)(n.code,{children:"Logs"})," button at the bottom of the window to open up the server console. Here you can see any server output, as well as the errors. You should see ",(0,a.jsx)(n.code,{children:"Error: Cannot find module 'socket.io'"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Opening the log",src:t(71364).A+"",width:"1402",height:"1044"})}),"\n",(0,a.jsxs)(n.p,{children:["To include a package, go to ",(0,a.jsx)(n.code,{children:"package.json"})," and click on the ",(0,a.jsx)(n.code,{children:"Add Package"})," button on the top. Search for ",(0,a.jsx)(n.code,{children:"socket.io"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Adding a package",src:t(91295).A+"",width:"1402",height:"599"})}),"\n",(0,a.jsxs)(n.p,{children:["Once ",(0,a.jsx)(n.code,{children:"socket.io"})," has finished installing, the server will automatically restart and you should see ",(0,a.jsx)(n.code,{children:"Server started on port 3000"})," in the log. Congratulations! You've successfully deployed a server!"]}),"\n",(0,a.jsxs)(n.p,{children:["You can find the domain your server is deployed at by clicking ",(0,a.jsx)(n.code,{children:"Settings"})," in the left sidebar. This is where you can also rename the project."]}),"\n",(0,a.jsx)(n.p,{children:"This server will simply log a message every time someone connects. This should be enough to start working on our client and confirm that it connects to the server."}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-project",children:"Setting up the Project"}),"\n",(0,a.jsx)(n.p,{children:"Create a new project on PlayCanvas. We first need to include the Socket.io client JS library, as an external script. To do this. go to your project settings:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Project settings",src:t(32909).A+"",width:"630",height:"199"})}),"\n",(0,a.jsx)(n.p,{children:"Find and open 'External Scripts'."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"External scripts settings",src:t(99512).A+"",width:"386",height:"136"})}),"\n",(0,a.jsxs)(n.p,{children:["Change the value from 0 to 1 and add the CDN URL for the socket library from their ",(0,a.jsx)(n.a,{href:"https://cdnjs.com/libraries/socket.io",children:"framework server"}),". In this case, we will be using version ",(0,a.jsx)(n.code,{children:"4.8.1"})," as that is the latest at time of writing:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Project settings",src:t(7373).A+"",width:"386",height:"136"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-none",children:"https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.8.1/socket.io.min.js\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now we need to create a new script to handle the network logic. Create a new script called ",(0,a.jsx)(n.code,{children:"Network.js"}),". We first need to create a connection to the server. We can do this by adding this line in the initialize method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"this.socket = io.connect('https://playcanvas-multiplayer-server.glitch.me');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"https://playcanvas-multiplayer-server.glitch.me"})," with the address of your own server."]}),"\n",(0,a.jsxs)(n.p,{children:["To confirm that this works, attach this network script to the ",(0,a.jsx)(n.code,{children:"Root"})," entity, and then launch the game. Keep your eye on the server log at Glitch. If everything worked, the server should log ",(0,a.jsx)(n.code,{children:"New client connected:"})," along with the client ID. The project is now setup to send and receive messages to and from the server."]}),"\n",(0,a.jsx)(n.h2,{id:"server-and-client-communication",children:"Server and Client Communication"}),"\n",(0,a.jsxs)(n.p,{children:["The way you can send data between the client and server is with the socket connection we made earlier. To send data from the client (in Network.js on PlayCanvas), we use the ",(0,a.jsx)(n.code,{children:"emit"})," function. Here\u2019s an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"this.socket.emit('playerJoined', 'John');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This emits a message called ",(0,a.jsx)(n.code,{children:"playerJoined"}),", with the data ",(0,a.jsx)(n.code,{children:"John"}),". For the server to receive the message, we need to write in the server file (in ",(0,a.jsx)(n.code,{children:"server.js"})," on Glitch):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"socket.on('playerJoined', function (name) {\n    console.log (name);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will log whatever data is sent to the server when ",(0,a.jsx)(n.code,{children:"playerJoined"})," is emitted."]}),"\n",(0,a.jsx)(n.p,{children:"For this demo, we\u2019re aiming to have players move around with others in real time, so we'll need to create an environment. Start by create an entity to use as a ground, and add a collision box and static rigidbody. Here is what the settings on the ground entity should look like:"}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/tutorials/multiplayer/ground_entity.png",width:"360"}),"\n",(0,a.jsxs)(n.p,{children:["Next we\u2019ll need a player to control. Create a new capsule and call it ",(0,a.jsx)(n.code,{children:"Player"}),". add a dynamic rigidbody and collision box, and change the rigid body settings to match the picture below."]}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/tutorials/multiplayer/player_entity.png",width:"360"}),"\n",(0,a.jsxs)(n.p,{children:["Duplicate the player entity and rename it as 'Other'. Uncheck the ",(0,a.jsx)(n.code,{children:"Enabled"})," box on this new entity so that it's disabled to begin with.  This is the entity we'll be using to simulate other players in the game."]}),"\n",(0,a.jsxs)(n.p,{children:["Add a script component to your player, and attach a new script called ",(0,a.jsx)(n.code,{children:"Movement.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var Movement = pc.createScript('movement');\n\nMovement.attributes.add('playerSpeed', {\n    type: 'number',\n    default: 30,\n    title: 'Player Speed'\n});\n\n// initialize code called once per entity\nMovement.prototype.initialize = function() {\n    this.force = new pc.Vec3();\n};\n\n// update code called every frame\nMovement.prototype.update = function(dt) {\n    var forward = this.entity.forward;\n    var right = this.entity.right;\n    var app = this.app;\n\n    x = 0;\n    z = 0;\n\n    if (app.keyboard.isPressed(pc.KEY_A)) {\n        x -= right.x;\n        z -= right.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_D)) {\n        x += right.x;\n        z += right.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_W)) {\n        x += forward.x;\n        z += forward.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_S)) {\n        x -= forward.x;\n        z -= forward.z;\n    }\n\n    if (x !== 0 || z !== 0) {\n        x *= dt;\n        z *= dt;\n\n        this.force.set (x, 0, z).normalize ().scale ((this.playerSpeed));\n        this.entity.rigidbody.applyForce (this.force);\n    }\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"When you launch the game you should be able to use WASD to move your player around. If not, you\u2019ve missed a step or did not set the correct settings for the entity. Try changing the speed attribute on the movement script."}),"\n",(0,a.jsx)(n.p,{children:"For the game to work in real time multiplayer, we need to keep track of all players in the game. Replace the current server code with this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const http = require('http');\nconst { Server } = require('socket.io');\n\n/** \n * Class to track each connected player (id + position)\n */\nclass Player {\n    constructor(id) {\n        this.id = id;\n        this.x = 0;\n        this.y = 0;\n        this.z = 0;\n    }\n}\n\nconst server = http.createServer();\n\n// Configure Socket.IO with CORS\nconst io = new Server(server, {\n    cors: {\n        // If you only want to allow PlayCanvas launch domain:\n        // origin: \"https://launch.playcanvas.com\",\n\n        // Or allow all origins (less secure, but quick for testing)\n        origin: \"*\",\n        methods: [\"GET\", \"POST\"]\n    }\n});\n\nconst players = {};\n\n/**\n * Handle new socket connections\n */\nio.on('connection', (socket) => {\n    console.log(`New client connected: ${socket.id}`);\n\n    // Fired when the client is ready to initialize their Player object\n    socket.on('initialize', () => {\n        const newPlayer = new Player(socket.id);\n        players[socket.id] = newPlayer;\n\n        // Send to this client its own ID and the current list of players\n        socket.emit('playerData', { id: socket.id, players });\n\n        // Tell everyone else about this new player\n        socket.broadcast.emit('playerJoined', newPlayer);\n    });\n});\n\nconst PORT = process.env.PORT || 3000;\nserver.listen(PORT, () => {\n    console.log(`Server started on port ${PORT}`);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the code above, when a player sends the message ",(0,a.jsx)(n.code,{children:"initialize"}),", we send him his unique ID and data about other players in the game. It also tells others that a new player has connected. Let\u2019s add that logic into our Network script."]}),"\n",(0,a.jsxs)(n.p,{children:["Add this code in the ",(0,a.jsx)(n.code,{children:"initialize"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Your io.connect function call should be up here\n\nthis.socket.emit('initialize');\nvar socket = this.socket;\n\nthis.player = this.app.root.findByName('Player');\nthis.other = this.app.root.findByName('Other');\n\nvar self = this;\nsocket.on('playerData', function (data) {\n    self.initializePlayers (data);\n});\n\nsocket.on('playerJoined', function (data) {\n    self.addPlayer(data);\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"And then declare these new functions inside Network.js:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Network.prototype.initializePlayers = function (data) {\n    this.players = data.players;\n    Network.id = data.id;\n\n    for (var id in this.players) {\n        if (id != Network.id) {\n            this.players[id].entity = this.createPlayerEntity(this.players[id]);\n        }\n    }\n\n    this.initialized = true;\n    console.log('initialized');\n};\n\nNetwork.prototype.createPlayerEntity = function (data) {\n    // Create a new player entity\n    var newPlayer = this.other.clone();\n    newPlayer.enabled = true;\n\n    // Add the entity to the entity hierarchy\n    this.other.getParent().addChild(newPlayer);\n\n    // If a location was given, teleport the new entity to the position of the connected player\n    if (data)\n        newPlayer.rigidbody.teleport(data.x, data.y, data.z);\n\n    return newPlayer;\n};\n\nNetwork.prototype.addPlayer = function (data) {\n    this.players[data.id] = data;\n    this.players[data.id].entity = this.createPlayerEntity(data);\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now when we join the game, the client tells the server we've connected, and the server sends us a list of players with their positions. The game then creates a new entity for each player connected, and moves them to their current position. The only problem is, the server doesn't know the positions of all players. We need to send the server our current position every frame."}),"\n",(0,a.jsxs)(n.p,{children:["Add this code into the ",(0,a.jsx)(n.code,{children:"initialize"})," of your Network.js script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"socket.on('playerMoved', function (data) {\n    self.movePlayer(data);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Replace your ",(0,a.jsx)(n.code,{children:"update"})," with this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Network.prototype.update = function (dt) {\n    this.updatePosition();\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"And then declare these new functions inside Network.js:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Network.prototype.movePlayer = function (data) {\n    if (this.initialized && !this.players[data.id].deleted) {\n        this.players[data.id].entity.rigidbody.teleport(data.x, data.y, data.z);\n    }\n};\n\nNetwork.prototype.updatePosition = function () {\n    if (this.initialized) {    \n        var pos = this.player.getPosition();\n        Network.socket.emit('positionUpdate', {id: Network.id, x: pos.x, y: pos.y, z: pos.z});\n    }\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Back on the server, we need to account for what happens when the player sends us their position. On the server, we need to add a new event:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Update player position\nsocket.on('positionUpdate', (data) => {\n    if (!players[socket.id]) return;\n    players[socket.id].x = data.x;\n    players[socket.id].y = data.y;\n    players[socket.id].z = data.z;\n\n    // Broadcast updated position to all other players\n    socket.broadcast.emit('playerMoved', {\n        id: socket.id,\n        x: data.x,\n        y: data.y,\n        z: data.z\n    });\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, we need to handle player disconnects. We can do this by listening for the ",(0,a.jsx)(n.code,{children:"disconnect"})," event on the socket."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Handle disconnections\nsocket.on('disconnect', () => {\n    console.log(`Client disconnected: ${socket.id}`);\n    if (!players[socket.id]) return;\n    delete players[socket.id];\n    // Notify other players to remove this player\n    socket.broadcast.emit('killPlayer', socket.id);\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's review the full and final server code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const http = require('http');\nconst { Server } = require('socket.io');\n\n/** \n * Class to track each connected player (id + position)\n */\nclass Player {\n    constructor(id) {\n        this.id = id;\n        this.x = 0;\n        this.y = 0;\n        this.z = 0;\n    }\n}\n\nconst server = http.createServer();\n\n// Configure Socket.IO with CORS\nconst io = new Server(server, {\n    cors: {\n        // If you only want to allow PlayCanvas launch domain:\n        // origin: \"https://launch.playcanvas.com\",\n\n        // Or allow all origins (less secure, but quick for testing)\n        origin: \"*\",\n        methods: [\"GET\", \"POST\"]\n    }\n});\n\nconst players = {};\n\n/**\n * Handle new socket connections\n */\nio.on('connection', (socket) => {\n    console.log(`New client connected: ${socket.id}`);\n\n    // Fired when the client is ready to initialize their Player object\n    socket.on('initialize', () => {\n        const newPlayer = new Player(socket.id);\n        players[socket.id] = newPlayer;\n\n        // Send to this client its own ID and the current list of players\n        socket.emit('playerData', { id: socket.id, players });\n\n        // Tell everyone else about this new player\n        socket.broadcast.emit('playerJoined', newPlayer);\n    });\n\n    // Update player position\n    socket.on('positionUpdate', (data) => {\n        if (!players[socket.id]) return;\n        players[socket.id].x = data.x;\n        players[socket.id].y = data.y;\n        players[socket.id].z = data.z;\n\n        // Broadcast updated position to all other players\n        socket.broadcast.emit('playerMoved', {\n            id: socket.id,\n            x: data.x,\n            y: data.y,\n            z: data.z\n        });\n    });\n\n    // Handle disconnections\n    socket.on('disconnect', () => {\n        console.log(`Client disconnected: ${socket.id}`);\n        if (!players[socket.id]) return;\n        delete players[socket.id];\n        // Notify other players to remove this player\n        socket.broadcast.emit('killPlayer', socket.id);\n    });\n});\n\nconst PORT = process.env.PORT || 3000;\nserver.listen(PORT, () => {\n    console.log(`Server started on port ${PORT}`);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"That's about it! If you'd like, try adding some of these ideas on your own:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Players are removed when they close the game."}),"\n",(0,a.jsx)(n.li,{children:"Adding respawning functionality for when players fall off the edge."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Keep in mind this is only a very basic implementation of multiplayer. Realistically, when creating larger multiplayer games you'll want to consider using an authoritative server, instead of handling all the game logic on the client. You can read a more in depth tutorial about ",(0,a.jsx)(n.a,{href:"https://code.tutsplus.com/create-a-multiplayer-pirate-shooter-game-in-your-browser--cms-23311t",children:"how Socket.io works and how to develop multiplayer in JavaScript here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can find the ",(0,a.jsx)(n.a,{href:"https://glitch.com/edit/#!/playcanvas-multiplayer-server",children:"full server code on Glitch here"}),", where you can also fork it and extend it."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7373:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/added_socket_io_library-a3cab8602b56a3a92d0154930c5e8e33.png"},99512:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/external_scripts_settings-21a0a9f5a6e9f572226be885d599f155.png"},91295:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/glitch-add-package-f5bd42ee3498d4677f615d4c85f5e82e.png"},71364:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/glitch-error-3637521f9bb7518a40ab437f6f33febe.png"},32909:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/project-settings-a0fc485a0a9d94b74700e50385f82ddf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);