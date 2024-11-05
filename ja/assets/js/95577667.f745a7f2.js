"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[715],{91714:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorials/Using-forces-on-rigid-bodies","title":"\u529b\u3068\u885d\u6483","description":"\u30ab\u30fc\u30bd\u30eb\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30d1\u30eb\u30b9\u3092\u9069\u7528\u3057\u3001WASD\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30c8\u30eb\u30af\u3092\u9069\u7528\u3057\u3001\u30ad\u30e5\u30fc\u30d6\u3092\u56de\u8ee2\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002F\u30ad\u30fc\u3092\u62bc\u3057\u7d9a\u3051\u308b\u3068\u3001\u91cd\u529b\u306e\u5f71\u97ff\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u305f\u3081\u306b\u4e00\u5b9a\u306e\u4e0a\u5411\u304d\u306e\u529b\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/Using-forces-on-rigid-bodies.md","sourceDirName":"tutorials","slug":"/tutorials/Using-forces-on-rigid-bodies","permalink":"/ja/tutorials/Using-forces-on-rigid-bodies","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/Using-forces-on-rigid-bodies.md","tags":[{"inline":true,"label":"physics","permalink":"/ja/tags/physics"},{"inline":true,"label":"collision","permalink":"/ja/tags/collision"}],"version":"current","frontMatter":{"title":"\u529b\u3068\u885d\u6483","tags":["physics","collision"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"360 lookaround camera","permalink":"/ja/tutorials/360-lookaround-camera"},"next":{"title":"\u30b7\u30fc\u30f3\u306e\u8ffd\u52a0\u8aad\u307f\u8fbc\u307f","permalink":"/ja/tutorials/additive-loading-scenes"}}');var t=n(74848),o=n(28453);const r={title:"\u529b\u3068\u885d\u6483",tags:["physics","collision"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405828/95F429-image-75.jpg"},a=void 0,l={},d=[{value:"\u529b\u306e\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",id:"\u529b\u306e\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",level:2},{value:"\u4e00\u5b9a\u306e\u529b\u3092\u9069\u7528",id:"\u4e00\u5b9a\u306e\u529b\u3092\u9069\u7528",level:3},{value:"\u30a4\u30f3\u30d1\u30eb\u30b9 (Impulses)",id:"\u30a4\u30f3\u30d1\u30eb\u30b9-impulses",level:3},{value:"\u30c8\u30eb\u30af (Torques)",id:"\u30c8\u30eb\u30af-torques",level:3},{value:"\u30c8\u30eb\u30af\u30a4\u30f3\u30d1\u30eb\u30b9 (TorqueImpulses)",id:"\u30c8\u30eb\u30af\u30a4\u30f3\u30d1\u30eb\u30b9-torqueimpulses",level:3},{value:"RigidBody\u306e\u79fb\u52d5",id:"rigidbody\u306e\u79fb\u52d5",level:2},{value:"\u4e00\u822c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u4e00\u822c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u5236\u9650\u3068\u5236\u5fa1",id:"\u5236\u9650\u3068\u5236\u5fa1",level:2},{value:"RigidBody\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",id:"rigidbody\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",level:2},{value:"\u30ad\u30e5\u30fc\u30d6\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8",id:"\u30ad\u30e5\u30fc\u30d6\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8",level:2},{value:"\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u30ea\u30b9\u30c8",id:"\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u30ea\u30b9\u30c8",level:2}];function p(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"iframe-container",children:(0,t.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/8LTSuf4F/",title:"Forces and Impulses"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"\u30ab\u30fc\u30bd\u30eb\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30d1\u30eb\u30b9\u3092\u9069\u7528\u3057\u3001WASD\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30c8\u30eb\u30af\u3092\u9069\u7528\u3057\u3001\u30ad\u30e5\u30fc\u30d6\u3092\u56de\u8ee2\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002F\u30ad\u30fc\u3092\u62bc\u3057\u7d9a\u3051\u308b\u3068\u3001\u91cd\u529b\u306e\u5f71\u97ff\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u305f\u3081\u306b\u4e00\u5b9a\u306e\u4e0a\u5411\u304d\u306e\u529b\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.em,{children:"R\u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001\u30ad\u30e5\u30fc\u30d6\u304c\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002"})]}),"\n",(0,t.jsxs)(i.p,{children:["*\u30ad\u30e5\u30fc\u30d6\u3092\u89d2\u3067\u7acb\u305f\u305b\u56de\u8ee2\u3055\u305b\u3066\u307f\u307e\u3057\u3087\u3046\uff01*",(0,t.jsx)(i.em,{children:"\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u306f\u3053\u306e\u30da\u30fc\u30b8\u306e\u4e0b\u90e8\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"})]}),"\n",(0,t.jsx)(i.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u529b\u3092\u4f7f\u7528\u3057\u3066\u52d5\u7684\u306a\u30ea\u30b8\u30c3\u30c9\u30dc\u30c7\u30a3\u3092\u5236\u5fa1\u3057\u3001\u4e0a\u306b\u793a\u3057\u305f\u30c7\u30e2\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u529b\u3001\u885d\u52d5\u3001\u30c8\u30eb\u30af\u306e\u5229\u7528\u3068\u30ea\u30b8\u30c3\u30c9\u30dc\u30c7\u30a3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8UI\u3092\u4f7f\u7528\u3057\u3066\u52d5\u4f5c\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u65b9\u6cd5\u3092\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u529b\u306e\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",children:"\u529b\u306e\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,t.jsx)(i.h3,{id:"\u4e00\u5b9a\u306e\u529b\u3092\u9069\u7528",children:"\u4e00\u5b9a\u306e\u529b\u3092\u9069\u7528"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_F) ) {\n    this.entity.rigidbody.applyForce(0, 9.8, 0);\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u30e6\u30fc\u30b6\u30fc\u304cF\u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001",(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyForce",children:(0,t.jsx)(i.code,{children:"applyForce(x, y, z)"})}),"\u3092\u4ecb\u3057\u3066\u3001\u30b0\u30ed\u30fc\u30d0\u30eby\u8ef8\u306b\u6cbf\u3063\u305f\u529b\u304c\u30a2\u30af\u30bb\u30b9\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001\u529b\u30d9\u30af\u30c8\u30eb\u306e\u9069\u7528\u30dd\u30a4\u30f3\u30c8\u3082\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"\u30a4\u30f3\u30d1\u30eb\u30b9-impulses",children:"\u30a4\u30f3\u30d1\u30eb\u30b9 (Impulses)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_LEFT) ) {\n    this.entity.rigidbody.applyImpulse(-1, 0, 0);\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyImpulse",children:(0,t.jsx)(i.code,{children:"applyImpulse(x, y, z)"})}),"\u3092\u4ecb\u3057\u3066\u3001\u30ad\u30e5\u30fc\u30d6\u306bx\u8ef8\u306e\u30a4\u30f3\u30d1\u30eb\u30b9\u3092\u4e0e\u3048\u3066\u3001\u77ac\u6642\u306e\u901f\u5ea6\u5909\u5316\u3092\u4e0e\u3048\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"\u30c8\u30eb\u30af-torques",children:"\u30c8\u30eb\u30af (Torques)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_W) ) {\n    this.entity.rigidbody.applyTorque(-this.torque, 0, 0);\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Torque",children:"\u30c8\u30eb\u30af"})," (\u56de\u8ee2\u529b)\u306f\u3001",(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyTorque",children:(0,t.jsx)(i.code,{children:"applyTorque(x, y, z)"})}),"\u3092\u4ecb\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"\u30c8\u30eb\u30af\u30a4\u30f3\u30d1\u30eb\u30b9-torqueimpulses",children:"\u30c8\u30eb\u30af\u30a4\u30f3\u30d1\u30eb\u30b9 (TorqueImpulses)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"this.entity.rigidbody.applyTorqueImpulse(x, y, z)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u77ac\u9593\u7684\u306a\u89d2\u901f\u5ea6\u306e\u5909\u5316\u306f\u3001",(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#applyTorqueImpulse",children:(0,t.jsx)(i.code,{children:"applyTorqueImpulse(x, y, z)"})}),"\u3092\u4ecb\u3057\u3066\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u4e0a\u8a18\u306e\u30c7\u30e2\u306e\u30b3\u30fc\u30c9\u3067\u306f\u4f7f\u7528\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"rigidbody\u306e\u79fb\u52d5",children:"RigidBody\u306e\u79fb\u52d5"}),"\n",(0,t.jsx)(i.p,{children:"RigidyBody\u3092\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001\u4e0a\u8a18\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u7dda\u5f62\u529b\u3068\u56de\u8ee2\u529b(\u30c8\u30eb\u30af)\u3092\u9069\u7528\u3057\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u885d\u7a81\u3059\u308b\u5834\u5408\u3001\u76f4\u63a5\u4f4d\u7f6e\u3084\u901f\u5ea6\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u907f\u3051\u308b\u3079\u304d\u3067\u3042\u308a\u3001\u3053\u308c\u306b\u3088\u308a\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u4e0a\u66f8\u304d\u3055\u308c\u3001\u7279\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u885d\u7a81\u3059\u308b\u5834\u5408\u306b\u5947\u5999\u306a\u52b9\u679c\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u305f\u3060\u3057\u3001\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,t.jsx)(i.code,{children:"entity.rigidbody.linearVelocity"}),"\u307e\u305f\u306f",(0,t.jsx)(i.code,{children:"entity.rigidbody.angularVelocity"}),"\u306b\u65b0\u3057\u3044 '",(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.Vec3.html",children:"pc.Vec3"}),"'\u306e\u5024\u3092\u76f4\u63a5\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u3067\u3001\u901f\u5ea6\u3092\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["RigidBody\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.CollisionComponent.html",children:"Collision\u306eAPI\u30da\u30fc\u30b8"}),"\u3001",(0,t.jsx)(i.a,{href:"https://api.playcanvas.com/modules/Engine.html",children:"pc\u306e\u540d\u524d\u7a7a\u9593\u30da\u30fc\u30b8"}),"\u3001",(0,t.jsx)(i.a,{href:"/tutorials/first-person-movement/",children:"\u4e00\u4eba\u79f0\u8996\u70b9\u306e\u79fb\u52d5"}),"\u3001",(0,t.jsx)(i.a,{href:"/tutorials/collision-and-triggers/",children:"Collision\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u4e00\u822c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u4e00\u822c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,t.jsxs)(i.p,{children:["\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u3001\u30ad\u30e5\u30fc\u30d6(\u30e2\u30c7\u30eb\u3001\u525b\u4f53\u3001\u885d\u7a81\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3)\u3001\u30d5\u30ed\u30a2(\u30e2\u30c7\u30eb\u3001\u525b\u4f53\u3001\u885d\u7a81\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064)\u3092\u542b\u3080\u57fa\u672c\u30b7\u30fc\u30f3\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\u3002\u7acb\u65b9\u4f53\u306e\u525b\u4f53\u306f\u52d5\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u3001\u30d5\u30ed\u30a2\u306e\u525b\u4f53\u306f\u9759\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3057\u305f\u3002\u305d\u308c\u305e\u308c\u306e\u7bb1\u306b\u5bfe\u3057\u3066\u3044\u304f\u3064\u304b\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210\u3057\u3001\u62e1\u6563\u8272\u3092\u5909\u66f4\u3057\u3066\u8996\u899a\u7684\u306b\u898b\u3084\u3059\u304f\u3057\u307e\u3057\u305f\u3002SpotLight\u3068DynamicBody\u306e\u4e21\u65b9\u3067 \"\u30ad\u30e3\u30b9\u30c8\u30b7\u30e3\u30c9\u30a6\"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u3057\u307e\u3057\u305f\u3002\u5b8c\u5168\u306a 'usingForces'\u30b7\u30fc\u30f3\u3068\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(i.a,{href:"https://playcanvas.com/project/405828/overview/tutorial-forces--impulses",children:"\u3053\u306ePlayCanvas\u30a2\u30d7\u30ea"}),"\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u5236\u9650\u3068\u5236\u5fa1",children:"\u5236\u9650\u3068\u5236\u5fa1"}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u5b9a\u306e\u30d0\u30e9\u30f3\u30b9\u306e\u3068\u308c\u3066\u3044\u306a\u3044\u529b\u3092\u7d99\u7d9a\u7684\u306b\u9069\u7528\u3059\u308b\u3053\u3068\u3092\u9632\u304e\u3001(\u7269\u4f53\u304c\u7d99\u7d9a\u7684\u306b\u52a0\u901f\u3057\u3066\u5236\u5fa1\u3092\u5931\u3046\u3053\u3068\u3092\u9632\u3050\u305f\u3081\u306b)\u30a8\u30c7\u30a3\u30bf\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3057\u305f\u3002\u7acb\u65b9\u4f53\u306e\u5c5e\u6027\u30a8\u30c7\u30a3\u30bf\u3067\u89d2\u901f\u5ea6\u6e1b\u8870\u3092\u6709\u52b9\u306b\u3057\u3001\u7acb\u65b9\u4f53\u3068\u30d5\u30ed\u30a2\u306e\u4e21\u65b9\u3067\u6469\u64e6\u3092\u6709\u52b9\u306b\u3057\u307e\u3057\u305f\u3002\u3053\u3053\u3067\u306f\u7dda\u5f62\u6e1b\u8870\u306f\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u7a7a\u6c17\u62b5\u6297\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u6e1b\u901f\u3092\u30b3\u30fc\u30c9\u3067\u9069\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)("img",{loading:"lazy",src:"/img/tutorials/forces/rigidbody_settings.jpg",alt:"rigidbody_settings"}),"\n",(0,t.jsx)(i.h2,{id:"rigidbody\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",children:"RigidBody\u306e\u30c6\u30ec\u30dd\u30fc\u30c8"}),"\n",(0,t.jsx)(i.p,{children:"RigidBody\u3092\u77ac\u6642\u306b\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u30c6\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u306b\u306f\u3001pc.Entity API\u306esetPosition\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u308c\u306f\u3001\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u304c\u307e\u3060\u30dc\u30c7\u30a3\u304c\u53e4\u3044\u4f4d\u7f6e\u306b\u3042\u308b\u3068\u601d\u3063\u3066\u3044\u308b\u305f\u3081\u3067\u3059\u3002\u4ee3\u308f\u308a\u306b\u3001RigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306eteleport\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"//code within the update function\nthis.playerPos = this.entity.getLocalPosition();\n\n// Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.\nif (this.playerPos.x < -9.0) {\n    this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);\n}\nif (this.playerPos.x > 9.0) {\n    this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u30ad\u30e5\u30fc\u30d6\u304cx\u65b9\u5411\u306e\u53ef\u8996\u7bc4\u56f2\u3092\u8d85\u3048\u308b\u3068\u3001teleport\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u3001\u7acb\u65b9\u4f53\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u753b\u9762\u3092\u6a2a\u5207\u3063\u3066\u30c6\u30ec\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9023\u7d9a\u7684\u306b",(0,t.jsx)(i.code,{children:"if()"}),"\u6587\u3092\u30a2\u30af\u30c6\u30a3\u30d6\u5316\u3059\u308b\u3053\u3068\u3092\u9632\u3050\u305f\u3081\u306b\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u3088\u308a\u5de6\u53f3\u306b\u79fb\u52d5\u3059\u308b\u3088\u3046\u306b\u30c6\u30ec\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u30ad\u30e5\u30fc\u30d6\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8",children:"\u30ad\u30e5\u30fc\u30d6\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"if (app.keyboard.wasPressed(pc.KEY_R)) {\n    this.reset();\n}\n"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"reset: function () {\n    this.entity.rigidbody.teleport(0, 2, 0);\n    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;\n    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u4e0a\u8a18\u306b\u52a0\u3048\u3066\u3001\u30ad\u30e5\u30fc\u30d6\u3092\u5143\u306e\u4f4d\u7f6e\u306b\u623b\u3059\u30ea\u30bb\u30c3\u30c8\u6a5f\u80fd\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u4e0a\u8a18\u306e\u3088\u3046\u306b\u3001RigidBody\u306e\u5834\u6240\u3092\u30c6\u30ec\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5834\u6240\u306b\u540c\u671f\u3055\u305b\u307e\u3059\u3002\u30ea\u30bb\u30c3\u30c8\u95a2\u6570\u306e\u6700\u5f8c\u306e2\u884c\u306f\u3001RigidBody\u306e\u7dda\u5f62\u304a\u3088\u3073\u89d2\u901f\u5ea6\u3092\u30bc\u30ed\u306b\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5411\u304d\u3082\u30ea\u30bb\u30c3\u30c8\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u5b9f\u884c\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u30ea\u30b9\u30c8",children:"\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u30ea\u30b9\u30c8"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"var DynamicBody = pc.createScript('dynamicBody');\n\n// initialize code called once per entity\nDynamicBody.prototype.initialize = function() {\n    this.torque = 7;\n    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n\n    this.on('destroy', function() {\n        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n    }, this);\n};\n\nDynamicBody.prototype.onKeyDown = function (event) {\n    event.event.preventDefault();\n};\n\n// update code called every frame\nDynamicBody.prototype.update = function(dt) {\n    //update player's position\n    this.playerPos = this.entity.getLocalPosition();\n\n    var app = this.app;\n\n    //keyboard controls and applying forces and moments.\n    if (app.keyboard.isPressed(pc.KEY_LEFT) ) {\n        this.entity.rigidbody.applyImpulse(-1, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_RIGHT) ) {\n        this.entity.rigidbody.applyImpulse(1, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_UP) ) {\n        this.entity.rigidbody.applyImpulse(0, 1, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_A) ) {\n        this.entity.rigidbody.applyTorque(0, this.torque, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_D) ) {\n        this.entity.rigidbody.applyTorque(0, -this.torque, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_W) ) {\n        this.entity.rigidbody.applyTorque(-this.torque, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_S) ) {\n        this.entity.rigidbody.applyTorque(this.torque, 0, 0);\n    }\n    if (app.keyboard.isPressed(pc.KEY_F) ) {\n        this.entity.rigidbody.applyForce(0, 9.8, 0);\n    }\n\n    // Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.\n    if (this.playerPos.x < -9.0) {\n        this.entity.rigidbody.teleport(8.8, this.playerPos.y, this.playerPos.z);\n    }\n    if (this.playerPos.x > 9.0) {\n        this.entity.rigidbody.teleport(-8.8, this.playerPos.y, this.playerPos.z);\n    }\n\n    // cube reset control\n    if (app.keyboard.wasPressed(pc.KEY_R) ) {\n        this.reset();\n    }\n};\n\nDynamicBody.prototype.reset = function () {\n    this.entity.rigidbody.teleport(0, 2, 0);\n    this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;\n    this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;\n};\n"})})]})}function c(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);