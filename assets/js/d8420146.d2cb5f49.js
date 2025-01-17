"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[34830],{65054:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/real-time-multiplayer-colyseus","title":"Real-time Multiplayer with Colyseus","description":"Select create game to open a new game. And click anywhere on the floor to move the object.","source":"@site/docs/tutorials/real-time-multiplayer-colyseus.md","sourceDirName":"tutorials","slug":"/tutorials/real-time-multiplayer-colyseus","permalink":"/tutorials/real-time-multiplayer-colyseus","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/real-time-multiplayer-colyseus.md","tags":[{"inline":true,"label":"multiplayer","permalink":"/tags/multiplayer"},{"inline":true,"label":"networking","permalink":"/tags/networking"}],"version":"current","frontMatter":{"title":"Real-time Multiplayer with Colyseus","tags":["multiplayer","networking"],"thumb":"https://avatars.githubusercontent.com/u/28384334?s=300&v=4"},"sidebar":"tutorialsSidebar","previous":{"title":"Raycast with Camera Viewports","permalink":"/tutorials/raycast-with-camera-viewports"},"next":{"title":"Real-time Multiplayer with Photon","permalink":"/tutorials/real-time-multiplayer-photon"}}');var i=s(74848),r=s(28453);const a={title:"Real-time Multiplayer with Colyseus",tags:["multiplayer","networking"],thumb:"https://avatars.githubusercontent.com/u/28384334?s=300&v=4"},o=void 0,l={},c=[{value:"On this tutorial you will learn:",id:"on-this-tutorial-you-will-learn",level:2},{value:"Materials",id:"materials",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Prior Knowledge Expected",id:"prior-knowledge-expected",level:3},{value:"Software requirements",id:"software-requirements",level:3},{value:"Creating the Server",id:"creating-the-server",level:2},{value:"Including the Colyseus JavaScript SDK",id:"including-the-colyseus-javascript-sdk",level:2},{value:"Establishing a Client-Server Connection",id:"establishing-a-client-server-connection",level:2},{value:"Room State and Schema",id:"room-state-and-schema",level:2},{value:"Setting up the Scene for Synchronization",id:"setting-up-the-scene-for-synchronization",level:2},{value:"Creating the Plane",id:"creating-the-plane",level:3},{value:"Creating the Player",id:"creating-the-player",level:3},{value:"Listening for State Changes",id:"listening-for-state-changes",level:2},{value:"Adding new players",id:"adding-new-players",level:3},{value:"The &quot;Current Player&quot;",id:"the-current-player",level:3},{value:"Removing disconnected players",id:"removing-disconnected-players",level:3},{value:"Moving the players",id:"moving-the-players",level:2},{value:"Sending the new position to the server",id:"sending-the-new-position-to-the-server",level:3},{value:"Receiving the message from the server",id:"receiving-the-message-from-the-server",level:3},{value:"Updating Player&#39;s visual representation",id:"updating-players-visual-representation",level:3},{value:"Extra: Monitoring Rooms and Connections",id:"extra-monitoring-rooms-and-connections",level:2},{value:"More",id:"more",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{src:"https://playcanv.as/p/1QoAsx7r/",title:"Real-time Multiplayer with Colyseus",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Select create game to open a new game. And click anywhere on the floor to move the object."})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"on-this-tutorial-you-will-learn",children:"On this tutorial you will learn:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting up your Colyseus server"}),"\n",(0,i.jsx)(n.li,{children:"Synchronizing the state between server and client"}),"\n",(0,i.jsx)(n.li,{children:"Exchanging messages between client and server"}),"\n",(0,i.jsx)(n.li,{children:"Matchmaking: how to create, join, and list available games"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playcanvas.com/project/859259/overview/colyseus-demo",children:"PlayCanvas Project (Client-side)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/colyseus/tutorial-playcanvas-server",children:"Colyseus TypeScript Project (Server-side)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,i.jsx)(n.h3,{id:"prior-knowledge-expected",children:"Prior Knowledge Expected"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Basic PlayCanvas knowledge (",(0,i.jsx)(n.a,{href:"https://developer.playcanvas.com/",children:"See PlayCanvas Developer Resources"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Basic JavaScript/TypeScript understanding (",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/intro.html",children:"See TypeScript Handbook"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Basic Node.js understanding (",(0,i.jsx)(n.a,{href:"https://nodejs.dev/en/learn/",children:"See Introduction to Node.js"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"software-requirements",children:"Software requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js LTS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-server",children:"Creating the Server"}),"\n",(0,i.jsx)(n.p,{children:"We will be making a basic server, hosted locally on your computer for keeping player states. Changes will be synchronized with clients accordingly."}),"\n",(0,i.jsx)(n.p,{children:"To create a fresh new Colyseus server, run the following from your command-line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm init colyseus-app ./playcanvas-demo-server\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's make sure you can run the server locally now, by running ",(0,i.jsx)(n.code,{children:"npm start"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd playcanvas-demo-server\nnpm start\n"})}),"\n",(0,i.jsx)(n.p,{children:"If successful, the output should look like this in your command-line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"> my-app@1.0.0 start\n> ts-node-dev --respawn --transpile-only src/index.ts\n\n\u2705 development.env loaded.\n\u2705 Express initialized\n\ud83c\udfdf Your Colyseus App\n\u2694\ufe0f Listening on ws://localhost:2567\n"})}),"\n",(0,i.jsx)(n.h2,{id:"including-the-colyseus-javascript-sdk",children:"Including the Colyseus JavaScript SDK"}),"\n",(0,i.jsx)(n.p,{children:"Now we need to add the Colyseus JavaScript SDK on PlayCanvas."}),"\n",(0,i.jsx)(n.p,{children:'We can do that through a "external script" on PlayCanvas project settings.'}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.strong,{children:'"Menu" \u2192 "Settings"'}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"settings",src:s(88383).A+"",width:"369",height:"308"})}),"\n",(0,i.jsxs)(n.p,{children:["From the Settings panel, expand on ",(0,i.jsx)(n.strong,{children:'"External Scripts"'}),", and increase the number of ",(0,i.jsx)(n.strong,{children:'"URLs"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CDN",src:s(37293).A+"",width:"319",height:"607"})}),"\n",(0,i.jsxs)(n.p,{children:["In the new ",(0,i.jsx)(n.strong,{children:'"URL"'})," field, let's include the Colyseus JavaScript SDK, from a CDN:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-none",children:"https://unpkg.com/colyseus.js@^0.15.0-preview.2/dist/colyseus.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is going to make the ",(0,i.jsx)(n.code,{children:"Colyseus"})," ",(0,i.jsx)(n.a,{href:"https://docs.colyseus.io/getting-started/javascript-client/",children:"JavaScript SDK"})," available for our PlayCanvas scripts."]}),"\n",(0,i.jsx)(n.h2,{id:"establishing-a-client-server-connection",children:"Establishing a Client-Server Connection"}),"\n",(0,i.jsxs)(n.p,{children:["Now, from a new PlayCanvas Script, let's instantiate our ",(0,i.jsx)(n.code,{children:"Colyseus.Client"})," instance. (",(0,i.jsx)(n.a,{href:"/user-manual/scripting/creating-new/",children:'see "Creating new scripts"'}),")"]}),"\n",(0,i.jsx)(n.p,{children:'You can attach this script to a new empty entity called "NetworkManager".'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var NetworkManager = pc.createScript(\'networkManager\');\n\nNetworkManager.prototype.initialize = async function () {\n  //\n  // instantiate the SDK\n  // (no connection is established at this point)\n  //\n  this.app.colyseus = new Colyseus.Client("ws://localhost:2567");\n\n  //\n  // request to join or create a room "my_room"\n  // (establish connection with the server)\n  //\n  this.room = await this.app.colyseus.joinOrCreate("my_room");\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note that we're using the local ",(0,i.jsx)(n.code,{children:"ws://localhost:2567"})," endpoint here. You need to ",(0,i.jsx)(n.a,{href:"https://docs.colyseus.io/deployment/",children:"deploy your server"})," to the public internet in order to play with others online. You can also use ",(0,i.jsx)(n.a,{href:"https://glitch.com/edit/#!/tutorial-playcanvas-server",children:"Glitch"})," to host your server publicly."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When you ",(0,i.jsx)(n.strong,{children:'"Launch"'})," your PlayCanvas project now, your client is going to establish a connection with the server, and the server is going to create the room ",(0,i.jsx)(n.code,{children:"my_room"})," on demand for you."]}),"\n",(0,i.jsxs)(n.p,{children:["Notice that ",(0,i.jsx)(n.code,{children:"my_room"})," is the default room identifier set by the barebones Colyseus server. You can and should change this identifier in the ",(0,i.jsx)(n.code,{children:"arena.config.ts"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"You will be seeing the following message in your server logs, which means a client successfully joined the room!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-none",children:"19U8WkmoK joined!\n"})}),"\n",(0,i.jsx)(n.h2,{id:"room-state-and-schema",children:"Room State and Schema"}),"\n",(0,i.jsxs)(n.p,{children:["In Colyseus, we define shared data through its ",(0,i.jsx)(n.code,{children:"Schema"})," structures."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Schema"})," is a special data type from Colyseus that is capable of encoding its changes/mutations ",(0,i.jsx)(n.em,{children:"incrementally"}),". The encoding and decoding process happens internally by the framework and its SDK."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The state synchronization loop looks like this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"State changes (mutations) are synchronized automatically from Server \u2192 Clients"}),"\n",(0,i.jsxs)(n.li,{children:["Clients, by attaching callbacks to their local ",(0,i.jsx)(n.em,{children:"read-only"})," ",(0,i.jsx)(n.code,{children:"Schema"})," structures, can observe for state mutations and react to it."]}),"\n",(0,i.jsxs)(n.li,{children:["Clients can send arbitrary messages to the server - which decides what to do with it - and may mutate the state (Go back to step ",(0,i.jsx)(n.strong,{children:"1."}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Let's go back to editing the Server code, and define our Room State in the Server."}),"\n",(0,i.jsxs)(n.p,{children:["We need to handle multiple ",(0,i.jsx)(n.code,{children:"Player"})," instances, and each ",(0,i.jsx)(n.code,{children:"Player"})," will have ",(0,i.jsx)(n.code,{children:"x"}),", ",(0,i.jsx)(n.code,{children:"y"})," and ",(0,i.jsx)(n.code,{children:"z"})," coordinates:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// MyRoomState.ts\nimport { MapSchema, Schema, type } from "@colyseus/schema";\n\nexport class Player extends Schema {\n    @type("number") x: number;\n    @type("number") y: number;\n    @type("number") z: number;\n}\n\nexport class MyRoomState extends Schema {\n    @type({ map: Player }) players = new MapSchema<Player>();\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["See more about the ",(0,i.jsx)(n.a,{href:"https://docs.colyseus.io/state/schema/",children:"Schema structures"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now, still in the server-side, let's modify our ",(0,i.jsx)(n.code,{children:"onJoin()"})," method to create a ",(0,i.jsx)(n.code,{children:"Player"})," instance whenever a new connection is established with the room."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// MyRoom.ts\n// ...\n    onJoin(client: Client, options: any) {\n        console.log(client.sessionId, "joined!");\n\n        // create Player instance\n        const player = new Player();\n\n        // place Player at a random position\n        const FLOOR_SIZE = 4;\n        player.x = -(FLOOR_SIZE/2) + (Math.random() * FLOOR_SIZE);\n        player.y = 1.031;\n        player.z = -(FLOOR_SIZE/2) + (Math.random() * FLOOR_SIZE);\n\n        // place player in the map of players by its sessionId\n        // (client.sessionId is unique per connection!)\n        this.state.players.set(client.sessionId, player);\n    }\n// ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Also, when the client disconnects, let's remove the player from the map of players:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// MyRoom.ts\n// ...\n    onLeave(client: Client, consented: boolean) {\n        console.log(client.sessionId, "left!");\n\n        this.state.players.delete(client.sessionId);\n    }\n// ...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The state mutations we've done in the server-side ",(0,i.jsx)(n.strong,{children:"can be observed"})," in the client-side, and that's what we're going to do in the next section."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-scene-for-synchronization",children:"Setting up the Scene for Synchronization"}),"\n",(0,i.jsx)(n.p,{children:"For this demo, we need to create two objects in our Scene:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A Plane to represent the floor"}),"\n",(0,i.jsx)(n.li,{children:"A Capsule to represent the players, which we will clone for each new player joining the room."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"creating-the-plane",children:"Creating the Plane"}),"\n",(0,i.jsxs)(n.p,{children:["Let's create a Plane with scale ",(0,i.jsx)(n.code,{children:"8"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plane",src:s(82316).A+"",width:"319",height:"708"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-the-player",children:"Creating the Player"}),"\n",(0,i.jsxs)(n.p,{children:["Let's create the Player capsule with scale ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to uncheck the ",(0,i.jsx)(n.code,{children:'"Enabled"'})," property. We will not have any Player instances enabled until we have active connections with the server."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Player",src:s(42087).A+"",width:"323",height:"703"})}),"\n",(0,i.jsx)(n.h2,{id:"listening-for-state-changes",children:"Listening for State Changes"}),"\n",(0,i.jsx)(n.p,{children:"After a connection with the room has been established, the client-side can start listening for state changes, and create a visual representation of the data in the server."}),"\n",(0,i.jsx)(n.h3,{id:"adding-new-players",children:"Adding new players"}),"\n",(0,i.jsxs)(n.p,{children:["As per ",(0,i.jsx)(n.a,{href:"#room-state-and-schema",children:"Room State and Schema"})," section, whenever the server accepts a new connection - the ",(0,i.jsx)(n.code,{children:"onJoin()"})," method is creating a new Player instance within the state."]}),"\n",(0,i.jsx)(n.p,{children:"We're going to listen to this event on the client-side now:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// ...\nthis.room.state.players.onAdd((player, sessionId) => {\n  //\n  // A player has joined!\n  //\n  console.log("A player has joined! Their unique session id is", sessionId);\n});\n// ...\n'})}),"\n",(0,i.jsx)(n.p,{children:"When playing the Scene, you should see a message in the browser's console whenever a new client joins the room."}),"\n",(0,i.jsxs)(n.p,{children:['For the visual representation, we need to clone the "Player" object, and keep a local reference to the cloned object based on their ',(0,i.jsx)(n.code,{children:"sessionId"}),", so we can operate on them later:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// ...\n\n// we will assign each player visual representation here\n// by their `sessionId`\nthis.playerEntities = {};\n\n// listen for new players\nthis.room.state.players.onAdd((player, sessionId) => {\n  // find the base Player representation (not enabled)\n  const playerEntityToClone = this.app.root.findByName("Player");\n\n  // clone the Player representation, and enabled it!\n  const entity = playerEntityToClone.clone();\n  entity.enabled = true;\n\n  // set position based on server data\n  entity.setPosition(player.x, player.y, player.z);\n\n  // add clone to the Scene\n  playerEntityToClone.parent.addChild(entity);\n\n  // assign visual representation by their `sessionId`\n  this.playerEntities[sessionId] = entity;\n});\n// ...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"the-current-player",children:'The "Current Player"'}),"\n",(0,i.jsxs)(n.p,{children:["You can keep a special reference to the current player object by checking the ",(0,i.jsx)(n.code,{children:"sessionId"})," against the connected ",(0,i.jsx)(n.code,{children:"room.sessionId"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// ...\nthis.room.state.players.onAdd((player, sessionId) => {\n  // ...\n  if (this.room.sessionId === sessionId) {\n    this.currentPlayerEntity = this.playerEntities[sessionId];\n  }\n  // ...\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"removing-disconnected-players",children:"Removing disconnected players"}),"\n",(0,i.jsxs)(n.p,{children:["When a player is removed from the state (upon ",(0,i.jsx)(n.code,{children:"onLeave()"})," in the server-side), we need to remove their visual representation as well."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// ...\nthis.room.state.players.onRemove((player, sessionId) => {\n  // destroy entity\n  this.playerEntities[sessionId].destroy();\n\n  // clear local reference\n  delete this.playerEntities[sessionId];\n});\n// ...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"moving-the-players",children:"Moving the players"}),"\n",(0,i.jsx)(n.h3,{id:"sending-the-new-position-to-the-server",children:"Sending the new position to the server"}),"\n",(0,i.jsxs)(n.p,{children:['We are going to allow the "mouse down" event; use ',(0,i.jsx)(n.a,{href:"/user-manual/physics/ray-casting/",children:"ray cast"})," to determine the exact ",(0,i.jsx)(n.code,{children:"Vec3"})," position the player should move towards, and then send it as a message to the server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// ...\nthis.app.mouse.on(pc.EVENT_MOUSEDOWN, (event) => {\n  // Create the "bounding box" for the floor\n  const boundingBox = new pc.BoundingBox(new pc.Vec3(0, 0, 0), new pc.Vec3(4, 0.001, 4));;\n\n  // Initialize the ray and work out the direction of the ray\n  // from the a screen position\n  const ray = new pc.Ray();\n  const targetPosition = new pc.Vec3();\n\n  const cameraEntity = this.app.root.findByName("Camera");\n  cameraEntity.camera.screenToWorld(event.x, event.y, cameraEntity.camera.farClip, ray.direction);\n  ray.origin.copy(cameraEntity.getPosition());\n  ray.direction.sub(ray.origin).normalize();\n\n  // Test the ray against the ground\n  const result = boundingBox.intersectsRay(ray, targetPosition);\n\n  if (result) {\n    // Adjust position height\n    targetPosition.y = 1.031;\n\n    //\n    // Send new target player position to server.\n    //\n    this.room.send("updatePosition", {\n        x: targetPosition.x,\n        y: targetPosition.y,\n        z: targetPosition.z,\n    });\n  }\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"receiving-the-message-from-the-server",children:"Receiving the message from the server"}),"\n",(0,i.jsxs)(n.p,{children:["Whenever the ",(0,i.jsx)(n.code,{children:'"updatePosition"'})," message is received in the server, we're going to mutate the player that sent the message through its ",(0,i.jsx)(n.code,{children:"sessionId"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// MyRoom.ts\n// ...\n  onCreate(options: any) {\n    this.setState(new MyRoomState());\n\n    this.onMessage("updatePosition", (client, data) => {\n      const player = this.state.players.get(client.sessionId);\n      player.x = data.x;\n      player.y = data.y;\n      player.z = data.z;\n    });\n  }\n// ...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"updating-players-visual-representation",children:"Updating Player's visual representation"}),"\n",(0,i.jsxs)(n.p,{children:["Having the mutation on the server, we can detect it on the client-side via ",(0,i.jsx)(n.code,{children:"player.onChange()"}),", or ",(0,i.jsx)(n.code,{children:"player.listen()"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"player.onChange()"})," is triggered ",(0,i.jsx)(n.strong,{children:"per schema instance"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"player.listen(prop)"})," is triggered ",(0,i.jsx)(n.strong,{children:"per property"})," change"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We are going to use ",(0,i.jsx)(n.code,{children:".onChange()"})," since we need all the new coordinates at once, no matter if just one has changed individually."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// ...\nthis.room.state.players.onAdd((player, sessionId) => {\n  // ...\n  player.onChange(() => {\n    this.playerEntities[sessionId].setPosition(player.x, player.y, player.z);\n  });\n\n  // Alternative, listening to individual properties:\n  // player.listen("x", (newX, prevX) => console.log(newX, prevX));\n  // player.listen("y", (newY, prevY) => console.log(newY, prevY));\n  // player.listen("z", (newZ, prevZ) => console.log(newZ, prevZ));\n});\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://docs.colyseus.io/state/schema/#client-side",children:"more about Schema callbacks"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"extra-monitoring-rooms-and-connections",children:"Extra: Monitoring Rooms and Connections"}),"\n",(0,i.jsx)(n.p,{children:"Colyseus comes with an optional monitoring panel that can be helpful during the development of your game."}),"\n",(0,i.jsxs)(n.p,{children:["To view the monitor panel from your local server, go to ",(0,i.jsx)(n.code,{children:"http://localhost:2567/colyseus"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"monitor",src:s(79532).A+"",width:"1366",height:"262"})}),"\n",(0,i.jsx)(n.p,{children:"You can see and interact with all spawned rooms and active client connections through this panel."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://docs.colyseus.io/tools/monitor/",children:"more information about the monitor panel"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"more",children:"More"}),"\n",(0,i.jsxs)(n.p,{children:["We hope you found this tutorial useful, if you'd like to learn more about Colyseus please have a look at the ",(0,i.jsx)(n.a,{href:"https://docs.colyseus.io/",children:"Colyseus documentation"}),", and join the ",(0,i.jsx)(n.a,{href:"https://discord.gg/RY8rRS7",children:"Colyseus Discord community"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},37293:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ext_script-1d45673adbb1346c6690c1e5cfa82624.png"},79532:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/monitor-104a08f8f297af7cfd0577dbb5d45910.png"},82316:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/plane-c9def1c57791bd1fa86134fe2af936a2.jpg"},42087:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/player-13f8026721acbd6fce59a06c79985189.png"},88383:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/settings-8b735c00e32ba99e803923784b20633b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);