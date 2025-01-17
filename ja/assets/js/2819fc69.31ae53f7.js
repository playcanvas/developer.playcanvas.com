"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[73437],{9271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorials/mouse-input","title":"\u57fa\u672c\u7684\u306a\u30de\u30a6\u30b9\u5165\u529b","description":"\u30de\u30a6\u30b9\u3092\u52d5\u304b\u3057\u3066\u30ad\u30e5\u30fc\u30d6\u3092\u52d5\u304b\u3057\u3001\u30de\u30a6\u30b9\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u8272\u3092\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/mouse-input.md","sourceDirName":"tutorials","slug":"/tutorials/mouse-input","permalink":"/ja/tutorials/mouse-input","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/mouse-input.md","tags":[{"inline":true,"label":"mouse","permalink":"/ja/tags/mouse"},{"inline":true,"label":"input","permalink":"/ja/tags/input"}],"version":"current","frontMatter":{"title":"\u57fa\u672c\u7684\u306a\u30de\u30a6\u30b9\u5165\u529b","tags":["mouse","input"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"\u30ab\u30e1\u30e9\u306e\u3055\u3089\u306a\u308b\u6d3b\u7528","permalink":"/ja/tutorials/more-cameras"},"next":{"title":"Multiple Camera Layers","permalink":"/ja/tutorials/multiple-camera-layers"}}');var i=s(74848),o=s(28453);const a={title:"\u57fa\u672c\u7684\u306a\u30de\u30a6\u30b9\u5165\u529b",tags:["mouse","input"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg"},c=void 0,r={},l=[{value:"\u30de\u30a6\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",id:"\u30de\u30a6\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",level:3},{value:"\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u306e\u7121\u52b9\u5316",id:"\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u306e\u7121\u52b9\u5316",level:3},{value:"\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u30d0\u30a4\u30f3\u30c9",id:"\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u30d0\u30a4\u30f3\u30c9",level:3},{value:"\u30de\u30a6\u30b9\u306e\u79fb\u52d5",id:"\u30de\u30a6\u30b9\u306e\u79fb\u52d5",level:3},{value:"\u30de\u30a6\u30b9\u30dc\u30bf\u30f3",id:"\u30de\u30a6\u30b9\u30dc\u30bf\u30f3",level:3},{value:"\u8a66\u3057\u3066\u307f\u3088\u3046\u3002",id:"\u8a66\u3057\u3066\u307f\u3088\u3046",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{src:"https://playcanv.as/p/MHIdZgaj/?overlay=false",title:"Basic Mouse Input",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u30de\u30a6\u30b9\u3092\u52d5\u304b\u3057\u3066\u30ad\u30e5\u30fc\u30d6\u3092\u52d5\u304b\u3057\u3001\u30de\u30a6\u30b9\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u8272\u3092\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["PlayCanvas\u306e\u30a8\u30f3\u30b8\u30f3\u3067\u306f\u3001",(0,i.jsx)(n.code,{children:"pc.Mouse"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u3066\u304a\u308a\u3001\u30de\u30a6\u30b9\u304c\u79fb\u52d5\u3057\u305f\u3068\u304d\u3084\u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u3068\u304d\u306b\u691c\u51fa\u3059\u308b\u305f\u3081\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30de\u30a6\u30b9\u5ea7\u6a19\u306e\u51e6\u7406\u306b\u304a\u3051\u308b\u30d6\u30e9\u30a6\u30b6\u9593\u3067\u306e\u4e00\u8cab\u6027\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://playcanvas.com/project/405819/overview/tutorial-basic-mouse-input",children:"tutorial project"}),"\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u6b21\u306b\u3001mouse.js\u306e\u30b3\u30fc\u30c9\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var Mouse = pc.createScript('mouse');\n\nMouse.attributes.add('redMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\nMouse.attributes.add('greenMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\nMouse.attributes.add('blueMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\n// initialize code called once per entity\nMouse.prototype.initialize = function() {\n    this.pos = new pc.Vec3();\n\n    // Disabling the context menu stops the browser displaying a menu when\n    // you right-click the page\n    this.app.mouse.disableContextMenu();\n\n    // Use the on() method to attach event handlers.\n    // The mouse object supports events on move, button down and\n    // up, and scroll wheel.\n    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);\n};\n\nMouse.prototype.onMouseMove = function (event) {\n    // Use the camera component's screenToWorld function to convert the\n    // position of the mouse into a position in 3D space\n    var depth = 10;\n    var cameraEntity = this.app.root.findByName('Camera');\n    cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);\n\n    // Finally update the cube's world-space position\n    this.entity.setPosition(this.pos);\n};\n\nMouse.prototype.onMouseDown = function (event) {\n    // If the left mouse button is pressed, change the cube color to red\n    if (event.button === pc.MOUSEBUTTON_LEFT) {\n        this.entity.render.meshInstances[0].material = this.redMaterial.resource;\n    }\n\n    // If the middle mouse button is pressed, change the cube color to green\n    if (event.button === pc.MOUSEBUTTON_MIDDLE) {\n        this.entity.render.meshInstances[0].material = this.greenMaterial.resource;\n    }\n\n    // If the right mouse button is pressed, change the cube color to blue\n    if (event.button === pc.MOUSEBUTTON_RIGHT) {\n        this.entity.render.meshInstances[0].material = this.blueMaterial.resource;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u30de\u30a6\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",children:"\u30de\u30a6\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30de\u30a6\u30b9\u306e\u5236\u5fa1\u306f",(0,i.jsx)(n.code,{children:"pc.Mouse"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(n.a,{href:"/user-manual/glossary#framework",children:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af"}),"\u306f\u3001",(0,i.jsx)(n.a,{href:"/user-manual/glossary#application",children:"application app"}),"\u4e0a\u3067\u3053\u308c\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u6b21\u306e\u3088\u3046\u306b\u5229\u7528\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"this.app.mouse\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u306e\u7121\u52b9\u5316",children:"\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u306e\u7121\u52b9\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u306f\u3001\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u3092\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u53f3\u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3092\u505c\u6b62\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"this.app.mouse.disableContextMenu();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u30d0\u30a4\u30f3\u30c9",children:"\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u30d0\u30a4\u30f3\u30c9"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pc.Mouse"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u30de\u30a6\u30b9\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u3059\u308b\u7570\u306a\u308b\u30a4\u30d9\u30f3\u30c8\u3092\u30ea\u30c3\u30b9\u30f3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001",(0,i.jsx)(n.code,{children:"onMouseMove"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u79fb\u52d5\u30a4\u30d9\u30f3\u30c8\u306b\u30d0\u30a4\u30f3\u30c9\u3057\u3001",(0,i.jsx)(n.code,{children:"onMouseDown"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u30dc\u30bf\u30f3\u30c0\u30a6\u30f3\u30a4\u30d9\u30f3\u30c8\u306b\u30d0\u30a4\u30f3\u30c9\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u304c\u30a4\u30d9\u30f3\u30c8\u306b\u30d0\u30a4\u30f3\u30c9\u3059\u308b\u305f\u3081\u306bon()\u30e1\u30bd\u30c3\u30c9\u306b",(0,i.jsx)(n.code,{children:"this"}),"\u3092\u6e21\u3059\u3053\u3068\u306b\u3082\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e3\u3064\u76ee\u306e\u5f15\u6570\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u5185\u3067",(0,i.jsx)(n.code,{children:"this"}),"\u3068\u3057\u3066\u4f7f\u308f\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);\nthis.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pc.Mouse"})," \u3067\u5229\u7528\u53ef\u80fd\u306a\u30a4\u30d9\u30f3\u30c8\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pc.EVENT_MOUSEUP"})," - \u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u304c\u96e2\u3055\u308c\u305f\u3068\u304d\u306b\u767a\u706b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pc.EVENT_MOUSEDOWN"})," - \u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u3068\u304d\u306b\u767a\u706b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pc.EVENT_MOUSEMOVE"})," - \u30de\u30a6\u30b9\u304c\u52d5\u304b\u3055\u308c\u305f\u3068\u304d\u306b\u767a\u706b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pc.EVENT_MOUSEMOVE"})," - \u30de\u30a6\u30b9\u304c\u52d5\u3044\u305f\u3068\u304d\u306b\u767a\u751f\u3059\u308b"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30d6\u30e9\u30a6\u30b6\u3067\u306e\u30de\u30a6\u30b9\u5165\u529b\u306f\u3001\u901a\u5e38\u3001\u30da\u30fc\u30b8\u306eDOM\u5185\u306e\u8981\u7d20\u306b\u5bfe\u3059\u308b",(0,i.jsx)(n.a,{href:"/user-manual/glossary#dom",children:"DOM"}),"\u30a4\u30d9\u30f3\u30c8\u3092\u30ea\u30b9\u30cb\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u5b9f\u88c5\u3055\u308c\u307e\u3059\u3002\u554f\u984c\u306f\u3001\u7570\u306a\u308b\u30d6\u30e9\u30a6\u30b6\u304c\u30a4\u30d9\u30f3\u30c8\u3092\u5fae\u5999\u306b\u7570\u306a\u308b\u65b9\u6cd5\u3067\u5b9f\u88c5\u3057\u3001\u7570\u306a\u308b\u5024\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u30b3\u30fc\u30c9\u306e\u8a18\u8ff0\u3092\u7c21\u7565\u5316\u3059\u308b\u305f\u3081\u306b\u3001PlayCanvas\u30a8\u30f3\u30b8\u30f3\u3067\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u3092DOM\u8981\u7d20\u3067\u306f\u306a\u304fPlayCanvas\u306e\u30de\u30a6\u30b9\u30cf\u30f3\u30c9\u30e9\u306b\u30d0\u30a4\u30f3\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u706b\u3059\u308b\u3068\u304d\u306b\u3001\u3059\u3079\u3066\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u4e00\u8cab\u6027\u306e\u3042\u308b",(0,i.jsx)(n.code,{children:"pc.MouseEvent"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3082\u3057\u5143\u306eDOM\u30a4\u30d9\u30f3\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,i.jsx)(n.code,{children:"pc.MouseEvent"}),"\u306e",(0,i.jsx)(n.code,{children:"event"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30de\u30a6\u30b9\u306e\u79fb\u52d5",children:"\u30de\u30a6\u30b9\u306e\u79fb\u52d5"}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u521d\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306f",(0,i.jsx)(n.code,{children:"onMouseMove"}),"\u3067\u3059\u3002\u3053\u308c\u306f\u30de\u30a6\u30b9\u304c\u52d5\u304f\u305f\u3073\u306b\u767a\u706b\u3057\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"EVENT_MOUSEMOVE"}),"\u30a4\u30d9\u30f3\u30c8\u306e\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"MouseEvent"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u73fe\u5728\u306e\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e",(0,i.jsx)(n.code,{children:"x"}),"\u3068",(0,i.jsx)(n.code,{children:"y"}),"\u3001\u305d\u3057\u3066\u6700\u5f8c\u306e\u30a4\u30d9\u30f3\u30c8\u304b\u3089\u306e\u4f4d\u7f6e\u306e\u5909\u5316",(0,i.jsx)(n.code,{children:"dx"}),"\u3068",(0,i.jsx)(n.code,{children:"dy"}),"\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u5f53\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30de\u30a6\u30b9\u306e\u73fe\u5728\u306e\u4f4d\u7f6e\u3092\u4f7f\u7528\u3057\u3001\u30ad\u30e5\u30fc\u30d6\u3092\u30ab\u30fc\u30bd\u30eb\u4f4d\u7f6e\u306b\u79fb\u52d5\u3055\u305b\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30de\u30a6\u30b9\u30dc\u30bf\u30f3",children:"\u30de\u30a6\u30b9\u30dc\u30bf\u30f3"}),"\n",(0,i.jsxs)(n.p,{children:["2\u3064\u76ee\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306f",(0,i.jsx)(n.code,{children:"onMouseDown"}),"\u3067\u3059\u3002\u3053\u308c\u306f\u30de\u30a6\u30b9\u306e\u4e09\u3064\u306e\u30dc\u30bf\u30f3\u306e\u3044\u305a\u308c\u304b\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u305f\u3073\u306b\u767a\u706b\u3057\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"EVENT_MOUSEDOWN"}),"\u3068",(0,i.jsx)(n.code,{children:"EVENT_MOUSEUP"}),"\u30a4\u30d9\u30f3\u30c8\u3067\u306f\u3001",(0,i.jsx)(n.code,{children:"MouseEvent"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u62bc\u3055\u308c\u305f/\u89e3\u653e\u3055\u308c\u305f\u30dc\u30bf\u30f3\u3092\u542b\u3080",(0,i.jsx)(n.code,{children:"button"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3061\u307e\u3059\u3002\u6b21\u306e\u3044\u305a\u308c\u304b\u306e\u5024\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pc.MOUSEBUTTON_NONE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pc.MOUSEBUTTON_LEFT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pc.MOUSEBUTTON_MIDDLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pc.MOUSEBUTTON_RIGHT"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u79c1\u305f\u3061\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u62bc\u3055\u308c\u305f\u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u306b\u5fdc\u3058\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u8272\u3092\u5909\u66f4\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8a66\u3057\u3066\u307f\u3088\u3046",children:"\u8a66\u3057\u3066\u307f\u3088\u3046\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5168\u753b\u9762\u3067\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f",(0,i.jsx)(n.a,{href:"https://playcanv.as/p/MHIdZgaj/",children:"\u3053\u3061\u3089"}),"\u304b\u3089\u3001\u307e\u305f\u306f\u30da\u30fc\u30b8\u306e\u4e0a\u90e8\u304b\u3089\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002\u30de\u30a6\u30b9\u3092\u52d5\u304b\u3057\u3066\u30ad\u30e5\u30fc\u30d6\u3092\u79fb\u52d5\u3055\u305b\u3001\u5de6\u3001\u4e2d\u592e\u3001\u53f3\u306e\u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u8272\u3092\u5909\u66f4\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);