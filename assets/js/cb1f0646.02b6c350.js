"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[641],{13529:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=t(74848),s=t(28453);const o={title:"Forces and Impulses",tags:["physics","collision"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg"},a=void 0,r={id:"tutorials/Using-forces-on-rigid-bodies",title:"Forces and Impulses",description:"Use the cursor keys to apply impulses, the WASD keys to apply torques and rotate the cube. Press and hold F to apply a constant upward force to cancel gravity effects.",source:"@site/docs/tutorials/Using-forces-on-rigid-bodies.md",sourceDirName:"tutorials",slug:"/tutorials/Using-forces-on-rigid-bodies",permalink:"/tutorials/Using-forces-on-rigid-bodies",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/Using-forces-on-rigid-bodies.md",tags:[{inline:!0,label:"physics",permalink:"/tags/physics"},{inline:!0,label:"collision",permalink:"/tags/collision"}],version:"current",frontMatter:{title:"Forces and Impulses",tags:["physics","collision"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"360 lookaround camera",permalink:"/tutorials/360-lookaround-camera"},next:{title:"Additive Loading Scenes",permalink:"/tutorials/additive-loading-scenes"}},l={},c=[{value:"Scripting Forces",id:"scripting-forces",level:2},{value:"Applying a Constant Force",id:"applying-a-constant-force",level:3},{value:"Impulses",id:"impulses",level:3},{value:"Torques",id:"torques",level:3},{value:"TorqueImpulses",id:"torqueimpulses",level:3},{value:"Moving dynamic rigidbodies",id:"moving-dynamic-rigidbodies",level:2},{value:"General setup",id:"general-setup",level:2},{value:"Limiting and control",id:"limiting-and-control",level:2},{value:"Teleporting a Body",id:"teleporting-a-body",level:2},{value:"Reset cube code",id:"reset-cube-code",level:2},{value:"Full code listing",id:"full-code-listing",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/8LTSuf4F/",title:"Forces and Impulses"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Use the cursor keys to apply impulses, the WASD keys to apply torques and rotate the cube. Press and hold F to apply a constant upward force to cancel gravity effects."}),"\n",(0,n.jsx)(i.em,{children:"Press R to reset the cube."})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Try to get the cube to balance and spin on one of its corners!"}),"\n",(0,n.jsx)(i.em,{children:"The full code used is shown at the bottom of this page."})]}),"\n",(0,n.jsx)(i.p,{children:"In this tutorial we will show you how to use forces to control a dynamic rigidbody and produce the demo shown above. We will briefly show the use of forces, impulses, torques and the use of rigidbody component UI to customize behavior."}),"\n",(0,n.jsx)(i.h2,{id:"scripting-forces",children:"Scripting Forces"}),"\n",(0,n.jsx)(i.h3,{id:"applying-a-constant-force",children:"Applying a Constant Force"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_F) ) {\n    this.entity.rigidbody.applyForce(0, 9.8, 0);\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Here a force along the global y-axis is applied to the accessed entity when the user presses the F key via ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyForce",children:(0,n.jsx)(i.code,{children:"applyForce(x, y, z)"})}),". The point of application of the force vector can also be set."]}),"\n",(0,n.jsx)(i.h3,{id:"impulses",children:"Impulses"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_LEFT) ) {\n    this.entity.rigidbody.applyImpulse(-1, 0, 0);\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The cube is given an x-axis impulse to impart an instant change of velocity via ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyImpulse",children:(0,n.jsx)(i.code,{children:"applyImpulse(x, y, z)"})}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"torques",children:"Torques"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_W) ) {\n    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Torque",children:"Torques"})," (rotational forces) are applied to the entity via ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyTorque",children:(0,n.jsx)(i.code,{children:"applyTorque(x, y, z)"})}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"torqueimpulses",children:"TorqueImpulses"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"this.entity.rigidbody.applyTorqueImpulse(x, y, z)\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Instantaneous changes in angular velocity are applied via ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyTorqueImpulse",children:(0,n.jsx)(i.code,{children:"applyTorqueImpulse(x, y, z)"})}),". This was not used in the code for the above demo."]}),"\n",(0,n.jsx)(i.h2,{id:"moving-dynamic-rigidbodies",children:"Moving dynamic rigidbodies"}),"\n",(0,n.jsx)(i.p,{children:"In order to move rigidbodies, you apply linear forces and rotational forces (torque) using the methods above. Usually you should try to avoid directly modifying the position or velocity of a rigidbody as this will override the simulation and it can lead to odd effects, especially when objects collide."}),"\n",(0,n.jsxs)(i.p,{children:["However, if you need to, you can override the velocity by assigning a new '",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.Vec3.html",children:"pc.Vec3"}),"' set of values directly to ",(0,n.jsx)(i.code,{children:"entity.rigidbody.linearVelocity"})," or ",(0,n.jsx)(i.code,{children:"entity.rigidbody.angularVelocity"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["For more information on rigidbody types, see ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.CollisionComponent.html",children:"the collision API page"}),", ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/modules/Engine.html",children:"the pc namespace page"}),", ",(0,n.jsx)(i.a,{href:"/tutorials/first-person-movement/",children:"the fps-controller tutorial"})," and ",(0,n.jsx)(i.a,{href:"/tutorials/collision-and-triggers/",children:"the collision tutorial"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"general-setup",children:"General setup"}),"\n",(0,n.jsxs)(i.p,{children:["We set up a basic scene with a spotlight, a cube (entity with model, rigidbody, collision and script components) and a floor (with model, rigidbody and collision components). The cube's rigidbody was set to dynamic while the floor's rigidbody was set to static. We created some materials for each box and changed the diffuse colors just to make it easier on the eye. We have also activated the 'cast shadows' option on both the SpotLight and DynamicBody entities. The full 'usingForces' Scene and code for ",(0,n.jsx)(i.a,{href:"https://playcanvas.com/project/405828/overview/tutorial-forces--impulses",children:"this PlayCanvas app can be found here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"limiting-and-control",children:"Limiting and control"}),"\n",(0,n.jsx)(i.p,{children:"Some Editor settings were set to prevent the constant application of unbalanced forces (and so prevent a body from continuously accelerating and moving out of control). We enabled angular damping on the cube's attribute editor as well as friction on both the cube and floor. Linear damping is not used here, however it can be used to simulate air resistance, and of course decelerations can be applied as required via code."}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/img/tutorials/forces/rigidbody_settings.jpg",alt:"rigidbody_settings"}),"\n",(0,n.jsx)(i.h2,{id:"teleporting-a-body",children:"Teleporting a Body"}),"\n",(0,n.jsx)(i.p,{children:"To instantly teleport a body to a new position, you can't use the setPosition function from the pc.Entity API. This is because the physics engine would still think the body is in the old location. Instead, you have to use the rigidbody component's teleport function:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"//code within the update function\nthis.playerPos = this.entity.getLocalPosition();\n\n// Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.\nif (this.playerPos.x < -9.0) {\n    this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);\n}\nif (this.playerPos.x > 9.0) {\n    this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["If the cube moves beyond the viewable area in the x-direction, the teleport function is called and the cube entity is teleported across the screen. The entity is teleported to a less extreme left/right position so as not to continuously activate the ",(0,n.jsx)(i.code,{children:"if()"})," statement."]}),"\n",(0,n.jsx)(i.h2,{id:"reset-cube-code",children:"Reset cube code"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.wasPressed(pc.KEY_R)) {\n    this.reset();\n}\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"reset: function () {\n    this.entity.rigidbody.teleport(0, 2, 0);\n    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;\n    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"We include a reset function that brings the cube to its original position and, as mentioned above, synchronizes the rigidbody's location to that of the teleported entity. The final two lines in the reset function reset the body's linear and angular velocities to zero. The object's orientation could also be reset, but is not carried out in this code."}),"\n",(0,n.jsx)(i.h2,{id:"full-code-listing",children:"Full code listing"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"var DynamicBody = pc.createScript('dynamicBody');\n\n// initialize code called once per entity\nDynamicBody.prototype.initialize = function() {\n    this.torque = 7;\n    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n\n    this.on('destroy', function() {\n        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n    }, this);\n};\n\nDynamicBody.prototype.onKeyDown = function (event) {\n    event.event.preventDefault();\n};\n\n// update code called every frame\nDynamicBody.prototype.update = function(dt) {\n    //update player's position\n    this.playerPos = this.entity.getLocalPosition();\n\n    var app = this.app;\n\n    //keyboard controls and applying forces and moments.\n    if (app.keyboard.isPressed(pc.KEY_LEFT) ) {\n        this.entity.rigidbody.applyImpulse(-1, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_RIGHT) ) {\n        this.entity.rigidbody.applyImpulse(1, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_UP) ) {\n        this.entity.rigidbody.applyImpulse(0, 1, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_A) ) {\n        this.entity.rigidbody.applyTorque(0, this.torque, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_D) ) {\n        this.entity.rigidbody.applyTorque(0, -this.torque, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_W) ) {\n        this.entity.rigidbody.applyTorque(-this.torque, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_S) ) {\n        this.entity.rigidbody.applyTorque(this.torque, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_F) ) {\n        this.entity.rigidbody.applyForce(0, 9.8, 0);\n    }\n\n    // Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.\n    if (this.playerPos.x < -9.0) {\n        this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);\n    }\n    if (this.playerPos.x > 9.0) {\n        this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);\n    }\n\n    // cube reset control\n    if (app.keyboard.wasPressed(pc.KEY_R) ) {\n        this.reset();\n    }\n};\n\nDynamicBody.prototype.reset = function () {\n    this.entity.rigidbody.teleport(0, 2, 0);\n    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;\n    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;\n};\n"})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var n=t(96540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);