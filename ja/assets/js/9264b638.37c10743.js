"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7565],{19967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(85893),s=n(11151);const o={title:"\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0",layout:"usermanual-page.hbs",sidebar_position:5},i=void 0,r={id:"user-manual/physics/ray-casting",title:"\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0",description:"PlayCanvas\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ec\u30a4\u30ad\u30e3\u30b9\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u30ec\u30a4\u30ad\u30e3\u30b9\u30c8\u306f\u30012\u3064\u306e\u4efb\u610f\u306e3D\u30dd\u30a4\u30f3\u30c8\u9593\u306e\u76f4\u7dda\u304cRigidBody\u3068\u4ea4\u5dee\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3059\u308b\u30af\u30a8\u30ea\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/physics/ray-casting.md",sourceDirName:"user-manual/physics",slug:"/user-manual/physics/ray-casting",permalink:"/ja/user-manual/physics/ray-casting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/ray-casting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0",layout:"usermanual-page.hbs",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"Compound",permalink:"/ja/user-manual/physics/compound-shapes"},next:{title:"ammo.js\u306eAPI\u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5",permalink:"/ja/user-manual/physics/calling-ammo"}},c={},p=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"PlayCanvas\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ec\u30a4\u30ad\u30e3\u30b9\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u30ec\u30a4\u30ad\u30e3\u30b9\u30c8\u306f\u30012\u3064\u306e\u4efb\u610f\u306e3D\u30dd\u30a4\u30f3\u30c8\u9593\u306e\u76f4\u7dda\u304cRigidBody\u3068\u4ea4\u5dee\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3059\u308b\u30af\u30a8\u30ea\u3067\u3059\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0\u306e\u7528\u9014\u306e\u4e00\u3064\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u753b\u9762\u3092\u30bf\u30c3\u30c1/\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9078\u629e\u3067\u304d\u308b\u5834\u6240\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u3001\u753b\u9762\u306e\u30bf\u30c3\u30c1/\u30af\u30ea\u30c3\u30af\u4f4d\u7f6e\u3092\u4ecb\u3057\u3066\u30ab\u30e1\u30e9\u306e\u4f4d\u7f6e\u304b\u3089\u30b7\u30fc\u30f3\u306b\u30ec\u30a4\u30ad\u30e3\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u3001\u9078\u629e\u3055\u308c\u305f\u6700\u3082\u8fd1\u3044RigidBody\u3092\u6709\u52b9\u306b\u3057\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var Raycast = pc.createScript('raycast');\n\n// initialize code called once per entity\nRaycast.prototype.initialize = function() {\n    if (!this.entity.camera) {\n        console.error('This script must be applied to an entity with a camera component.');\n        return;\n    }\n\n    // Add a mousedown event handler\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.mouseDown, this);\n\n    // Add touch event only if touch is available\n    if (this.app.touch) {\n        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);\n    }\n};\n\nRaycast.prototype.mouseDown = function (e) {\n    this.doRaycast(e.x, e.y);\n};\n\nRaycast.prototype.touchStart = function (e) {\n    // Only perform the raycast if there is one finger on the screen\n    if (e.touches.length === 1) {\n        this.doRaycast(e.touches[0].x, e.touches[0].y);\n    }\n    e.event.preventDefault();\n};\n\nRaycast.prototype.doRaycast = function (screenX, screenY) {\n    // The pc.Vec3 to raycast from (the position of the camera)\n    var from = this.entity.getPosition();\n\n    // The pc.Vec3 to raycast to (the click position projected onto the camera's far clip plane)\n    var to = this.entity.camera.screenToWorld(screenX, screenY, this.entity.camera.farClip);\n\n    // Raycast between the two points and return the closest hit result\n    var result = this.app.systems.rigidbody.raycastFirst(from, to);\n\n    // If there was a hit, store the entity\n    if (result) {\n        var hitEntity = result.entity;\n        console.log('You selected ' + hitEntity.name);\n    }\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9078\u629e\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/410547/overview/entity-picking-using-physics",children:"\u3053\u3061\u3089"}),"\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0\u306b\u306f\u4ed6\u306e\u7528\u9014\u3082\u3042\u308a\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u30ec\u30a4\u30ad\u30e3\u30b9\u30c8\u3092\u767a\u5c04\u3059\u308b\u3053\u3068\u3067\u74b0\u5883\u3092\u8abf\u67fb\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u5730\u9762\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u5224\u65ad\u3059\u308b\u305f\u3081\u306b\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u76f4\u63a5\u4e0b\u65b9\u5411\u306b\u767a\u5c04\u3057\u3001\u74b0\u5883\u3068\u4ea4\u5dee\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);