"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[68917],{90847:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/physics/physics-basics","title":"Physics Basics","description":"PlayCanvas incorporates a very powerful physics engine called ammo.js. This is a browser port of the open source C++ Bullet physics engine.","source":"@site/docs/user-manual/physics/physics-basics.md","sourceDirName":"user-manual/physics","slug":"/user-manual/physics/physics-basics","permalink":"/user-manual/physics/physics-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/physics-basics.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Physics Basics","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"Physics","permalink":"/user-manual/physics/"},"next":{"title":"Forces and Impulses","permalink":"/user-manual/physics/forces-and-impulses"}}');var t=s(74848),a=s(28453);const o={title:"Physics Basics",sidebar_position:1},c=void 0,r={},l=[{value:"Enabling Physics",id:"enabling-physics",level:2},{value:"Gravity",id:"gravity",level:2},{value:"Units of Measurement",id:"units-of-measurement",level:2},{value:"Rigid Bodies",id:"rigid-bodies",level:2},{value:"Creating a Static Ground",id:"creating-a-static-ground",level:2},{value:"Creating Dynamic Bodies",id:"creating-dynamic-bodies",level:2},{value:"Creating Kinematic Bodies",id:"creating-kinematic-bodies",level:2},{value:"Teleporting Dynamic Bodies",id:"teleporting-dynamic-bodies",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["PlayCanvas incorporates a very powerful physics engine called ",(0,t.jsx)(i.a,{href:"https://github.com/kripken/ammo.js",children:"ammo.js"}),". This is a browser port of the open source C++ Bullet physics engine."]}),"\n",(0,t.jsxs)(i.p,{children:["PlayCanvas provides the ",(0,t.jsx)(i.a,{href:"/user-manual/scenes/components/rigidbody/",children:"rigidbody"})," and ",(0,t.jsx)(i.a,{href:"/user-manual/scenes/components/collision/",children:"collision"})," components to set up physics simulations."]}),"\n",(0,t.jsx)(i.h2,{id:"enabling-physics",children:"Enabling Physics"}),"\n",(0,t.jsx)(i.p,{children:"By default, a new PlayCanvas project does not include ammo.js modules. This is because ammo.js weighs in at several hundred kilobytes and your app should not have to load this library if it is not needed."}),"\n",(0,t.jsx)(i.p,{children:"You can import ammo.js modules into your project using the import button on the Scene Settings panel:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Physics Settings",src:s(87347).A+"",width:"632",height:"234"})}),"\n",(0,t.jsxs)(i.p,{children:["This will import the default build of ammo.js provided by PlayCanvas. However please note it is possible to compile your own version of ammo.js and add it to your project instead. For more information see ",(0,t.jsx)(i.a,{href:"/user-manual/assets/types/wasm/",children:"this page"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["For details on migrating legacy projects to the latest ammo.js see ",(0,t.jsx)(i.a,{href:"/user-manual/physics/physics-migration/",children:"this page"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"gravity",children:"Gravity"}),"\n",(0,t.jsx)(i.p,{children:"In the same Settings panel, you can set global gravity of the physics simulation. Gravity is a constant force applied to all rigid bodies in your scene. By default, this is set to -9.81 in the world's negative Y axis (straight down, in other words). This default approximates Earth gravity. But you may want to increase or decrease this value. For example, for a game set in space, you will probably want to set gravity to zero."}),"\n",(0,t.jsx)(i.h2,{id:"units-of-measurement",children:"Units of Measurement"}),"\n",(0,t.jsx)(i.p,{children:"By default, the PlayCanvas physics engine interprets 1 unit as 1 meter. Therefore, for objects to fall at a rate that appears to be physically accurate, you should ensure that your scenes size objects appropriately."}),"\n",(0,t.jsx)(i.p,{children:"For example, if your game features a character that is 1.8m tall, he should be 1.8 units high in the Editor's 3D view."}),"\n",(0,t.jsx)(i.h2,{id:"rigid-bodies",children:"Rigid Bodies"}),"\n",(0,t.jsx)(i.p,{children:"You can make any entity in your scene participate in the physics simulation. Just add a rigidbody component and a collision component. The rigidbody component specifies a type:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Static - A physical object that never moves"}),"\n",(0,t.jsx)(i.li,{children:"Dynamic - A physical object that will move in response to an applied force"}),"\n",(0,t.jsx)(i.li,{children:"Kinematic - A physical object that can only be positioned explicitly via the API"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"It also specifies physical properties like mass, friction and restitution (essentially a measure of 'bounciness')."}),"\n",(0,t.jsx)(i.p,{children:"The collision component specifies the physical shape of the body. Note that a rigid body's physical shape does not have to match its graphical shape. It is typical for physical representations of objects to be much simpler than the graphical. The available collision component types are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Box"}),"\n",(0,t.jsx)(i.li,{children:"Sphere"}),"\n",(0,t.jsx)(i.li,{children:"Capsule"}),"\n",(0,t.jsx)(i.li,{children:"Cylinder"}),"\n",(0,t.jsx)(i.li,{children:"Mesh"}),"\n",(0,t.jsx)(i.li,{children:"Cone"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/user-manual/physics/compound-shapes/",children:"Compound"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"creating-a-static-ground",children:"Creating a Static Ground"}),"\n",(0,t.jsx)(i.p,{children:"Most of the time, you will want to create some kind of static physical environment. For example, a race track or a football pitch. The simplest example is a flat plane. PlayCanvas doesn't expose a plane-type collision primitive but it does provide a box primitive. Here is how to configure a 1 unit high 10x10 box that is a static rigid body:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Static Ground",src:s(85572).A+"",width:"2657",height:"1470"})}),"\n",(0,t.jsx)(i.p,{children:"You could also set the collision component type to Mesh and assign a model asset if you want something more complex."}),"\n",(0,t.jsx)(i.h2,{id:"creating-dynamic-bodies",children:"Creating Dynamic Bodies"}),"\n",(0,t.jsx)(i.p,{children:"Physics is all about movement so things get interesting when we create dynamic rigid bodies. Let's create a dynamic 1x1x1 box:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Dynamic Box",src:s(13153).A+"",width:"2657",height:"1470"})}),"\n",(0,t.jsx)(i.p,{children:"The box has been rotated so that when it collides with the static ground, it will bounce in an interesting way:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Falling Box",src:s(21456).A+"",width:"1024",height:"768"})}),"\n",(0,t.jsx)(i.h2,{id:"creating-kinematic-bodies",children:"Creating Kinematic Bodies"}),"\n",(0,t.jsx)(i.p,{children:"Sometimes, it can be useful to be able to explicitly control the motion of physical objects in your scene and have these objects exert an irresistible force on other physical objects. For example, imagine a moving platform that can carry the player across a level. To achieve this, you can set a rigid body's type to Kinematic. Let's create a kinematic box:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Kinematic Box",src:s(10705).A+"",width:"2657",height:"1470"})}),"\n",(0,t.jsx)(i.p,{children:"The responsibility for animating kinematic bodies is on you, the developer. You will notice that the kinematic box shown above also has a script component with a script called movement.js assigned:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"var Movement = pc.createScript('movement');\n\n// initialize code called once per entity\nMovement.prototype.initialize = function() {\n\n};\n\n// update code called every frame\nMovement.prototype.update = function(dt) {\n    this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);\n};\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This script simply animates the box along the world x-axis using a sine function. You move kinematic bodies using the standard transformation functions on the entity like ",(0,t.jsx)(i.code,{children:"setPosition"}),", ",(0,t.jsx)(i.code,{children:"setRotation"})," and ",(0,t.jsx)(i.code,{children:"setEulerAngles"}),". Now when we run the scene, the dynamic box falls on the kinematic box and is carried along on top of it:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Kinematic Box",src:s(4286).A+"",width:"1024",height:"768"})}),"\n",(0,t.jsx)(i.h2,{id:"teleporting-dynamic-bodies",children:"Teleporting Dynamic Bodies"}),"\n",(0,t.jsx)(i.p,{children:"Although you can use the standard entity transformation function with kinematic bodies, this is not allowed for dynamic bodies. When creating a dynamic rigid body, you pass the responsibility for setting the position and orientation of that entity to the physics engine. This means that if you try to update the position or orientation of an entity in a script using the pc.Entity API, the functions will not have an effect. Instead, you must call the teleport function on the rigid body component which explicitly notifies the physics engine you want to momentarily update a rigid body's position and/or orientation."})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},13153:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/dynamic-box-b7d07cf86063a73876d6e99893f403cb.png"},21456:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/falling-box-bba02e73b92882b76fd0c781174738e9.gif"},4286:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/kinematic-box-eb7d67e6a3c618cc8655e0af9748d6d6.gif"},10705:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/kinematic-box-3b34f7f32c06fca8f92e9716f557fa85.png"},87347:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/physics-settings-a5c7a9a251c36536c6201285e4061890.png"},85572:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/static-ground-99b663666fc27f7fab1bc038d81e4f2f.png"},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>c});var n=s(96540);const t={},a=n.createContext(t);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);