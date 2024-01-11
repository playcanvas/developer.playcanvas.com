"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2228],{92467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(85893),a=n(11151);const s={title:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u69cb\u9020",layout:"usermanual-page.hbs",sidebar_position:3},r="\u30b9\u30af\u30ea\u30d7\u30c8\u30e1\u30bd\u30c3\u30c9",l={id:"user-manual/scripting/anatomy",title:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u69cb\u9020",description:"\u57fa\u672c\u7684\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002PlayCanvas\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u69cb\u9020\u3092\u5b66\u3076\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scripting/anatomy.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/anatomy",permalink:"/ja/user-manual/scripting/anatomy",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/anatomy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u69cb\u9020",layout:"usermanual-page.hbs",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc",permalink:"/ja/user-manual/scripting/code-editor"},next:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",permalink:"/ja/user-manual/scripting/application-lifecyle"}},c={},d=[{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u30bf\u30a4\u30d7 (Script Type) \u306e\u5ba3\u8a00",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30bf\u30a4\u30d7-script-type-\u306e\u5ba3\u8a00",level:2},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027 (Script Attributes)",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027-script-attributes",level:2},{value:"\u521d\u671f\u5316 (Initialize)",id:"\u521d\u671f\u5316-initialize",level:2},{value:"\u66f4\u65b0 (Update)",id:"\u66f4\u65b0-update",level:2},{value:"\u30b9\u30ef\u30c3\u30d7 (Swap)",id:"\u30b9\u30ef\u30c3\u30d7-swap",level:2},{value:"\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9\uff1a postInitialize \u3068 postUpdate",id:"\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9-postinitialize-\u3068-postupdate",level:2},{value:"state\uff08\u72b6\u614b\uff09\u3001enable\uff08\u6709\u52b9\u5316\uff09\u3001disable\uff08\u7121\u52b9\u5316\uff09",id:"state\u72b6\u614benable\u6709\u52b9\u5316disable\u7121\u52b9\u5316",level:2},{value:"destroy",id:"destroy",level:2},{value:"attr\u3068attr:[name]",id:"attr\u3068attrname",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u57fa\u672c\u7684\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002PlayCanvas\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u69cb\u9020\u3092\u5b66\u3076\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var Rotate = pc.createScript('rotate');\n\nRotate.attributes.add('speed', { type: 'number', default: 10 });\n\n// initialize code called once per entity\nRotate.prototype.initialize = function() {\n    this.local = false; // choose local rotation or world rotation\n};\n\n// update code called every frame\nRotate.prototype.update = function(dt) {\n    if (this.local) {\n        this.entity.rotateLocal(0, this.speed * dt, 0);\n    } else {\n        this.entity.rotate(0, this.speed * dt, 0);\n    }\n};\n\n// swap method called for script hot-reloading\n// inherit your script state here\nRotate.prototype.swap = function(old) {\n    this.local = old.local;\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5404\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u5206\u89e3\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h1,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30e1\u30bd\u30c3\u30c9",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,i.jsx)(t.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30bf\u30a4\u30d7-script-type-\u306e\u5ba3\u8a00",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30bf\u30a4\u30d7 (Script Type) \u306e\u5ba3\u8a00"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var Rotate = pc.createScript('rotate');\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u306e\u884c\u306f\u3001\u300crotate\u300d\u3068\u3044\u3046\u65b0\u3057\u3044ScriptType\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u306f\u3001Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u5ba3\u8a00\u3055\u308c\u305f\u5404ScriptType\u306b\u306f\u56fa\u6709\u306e\u540d\u524d\u304c\u5fc5\u8981\u3067\u3059\u3002\u8fd4\u3055\u308c\u308b\u95a2\u6570\u306e",(0,i.jsx)(t.code,{children:"Rotate"}),"\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u306e\u6a19\u6e96\u30bb\u30c3\u30c8\u3067\u305d\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u62e1\u5f35\u3067\u304d\u308bjavascript\u95a2\u6570\u3067\u3059\u3002\u30af\u30e9\u30b9\u7d99\u627f\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027-script-attributes",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027 (Script Attributes)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"Rotate.attributes.add('speed', { type: 'number', default: 10 });\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u306e\u884c\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u5ba3\u8a00\u3057\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3042\u308a\u3001Editor UI\u306b\u9732\u51fa\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u3067\u500b\u3005\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u5c5e\u6027\u306f\u300cspeed\u300d\u3068\u547c\u3070\u308c\u3001",(0,i.jsx)(t.code,{children:"this.speed"}),"\u3068\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30fc\u30c9\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\u6570\u5024\u3067\u3042\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f10\u306b\u521d\u671f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u5c5e\u6027\u306f\u3001\u81ea\u52d5\u7684\u306b\u30b3\u30fc\u30c9\u306e\u30db\u30c3\u30c8\u30b9\u30ef\u30c3\u30d7\u4e2d\u306b\u3001\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u7d99\u627f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u521d\u671f\u5316-initialize",children:"\u521d\u671f\u5316 (Initialize)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// initialize code called once per entity\nRotate.prototype.initialize = function() {\n    // local rotation or world rotation\n    this.local = false;\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"initialize"}),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u5404\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u968e\u5c64\u304c\u69cb\u7bc9\u3055\u308c\u305f\u5f8c\u3001\u6700\u521d\u306e\u66f4\u65b0\u30eb\u30fc\u30d7\u307e\u305f\u306f\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u524d\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(t.code,{children:"initialize"}),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u5404\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u4e00\u5ea6\u306e\u307f\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e1\u30f3\u30d0\u30fc\u5909\u6570\u3092\u5b9a\u7fa9\u3057\u3001\u521d\u671f\u5316\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8d77\u52d5\u6642\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u307e\u305f\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001initialize\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u6700\u521d\u306b\u6709\u52b9\u306b\u306a\u3063\u305f\u6642\u306b\u547c\u3070\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c ",(0,i.jsx)(t.code,{children:"entity.clone"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ed\u30fc\u30f3\u3055\u308c\u308b\u3068\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4e21\u65b9\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u9650\u308a\u3001\u30af\u30ed\u30fc\u30f3\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30b7\u30fc\u30f3\u968e\u5c64\u306b\u8ffd\u52a0\u3055\u308c\u305f\u969b\u306b\u306e\u307f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e",(0,i.jsx)(t.code,{children:" initialize"}),"\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8907\u6570\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u6dfb\u4ed8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001",(0,i.jsx)(t.code,{children:"initialize"}),"\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4e0a\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u9806\u5e8f\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u66f4\u65b0-update",children:"\u66f4\u65b0 (Update)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// update code called every frame\nRotate.prototype.update = function(dt) {\n    if (this.local) {\n        this.entity.rotateLocal(0, this.speed * dt, 0);\n    } else {\n        this.entity.rotate(0, this.speed * dt, 0);\n    }\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u6bce\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306bupdate\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3070\u308c\u3001\u6709\u52b9\u306aScript\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u6301\u3064\u5404\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u5185\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u5404\u30d5\u30ec\u30fc\u30e0\u306b\u306f\u3001\u524d\u306e\u30d5\u30ec\u30fc\u30e0\u304b\u3089\u306e\u7d4c\u904e\u6642\u9593\uff08\u79d2\u5358\u4f4d\uff09\u304c\u542b\u307e\u308c\u308b ",(0,i.jsx)(t.code,{children:"dt"})," \u5f15\u6570\u304c\u6e21\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8907\u6570\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u6dfb\u4ed8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001",(0,i.jsx)(t.code,{children:"update"}),"\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4e0a\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u9806\u5e8f\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u30b9\u30ef\u30c3\u30d7-swap",children:"\u30b9\u30ef\u30c3\u30d7 (Swap)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// swap method called for script hot-reloading\n// inherit your script state here\nRotate.prototype.swap = function(old) {\n    this.local = old.local;\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u540c\u69d8\u306eScriptType\u304c\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u8ffd\u52a0\u3055\u308c\u305f\u3068\u304d\u306b",(0,i.jsx)(t.code,{children:"swap"}),"\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u5b9f\u884c\u6642\u306b\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u3001\u81ea\u52d5\u7684\u306bLaunch\u3067\u884c\u308f\u308c\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u7d9a\u3051\u306a\u304c\u3089\u300c\u30b3\u30fc\u30c9\u306e\u30db\u30c3\u30c8\u30ea\u30ed\u30fc\u30c9\u300d\u306b\u5bfe\u5fdc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30d7\u30ea\u5b9f\u884c\u4e2d\u3001\u5230\u9054\u6642\u9593\u304c\u304b\u304b\u308b\u30b3\u30fc\u30c9\u306e\u53cd\u5fa9\u51e6\u7406\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306b\u306f\u6975\u3081\u3066\u6709\u7528\u3067\u3059\u3002\u30b2\u30fc\u30e0\u72b6\u614b\u306e\u5fa9\u5143\u3084\u30ea\u30ed\u30fc\u30c9\u3092\u3057\u3066\u8907\u6570\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u306a\u304f\u3001\u5909\u66f4\u3092\u52a0\u3048\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"swap"}),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u5f15\u6570\u3068\u3057\u3066\u53e4\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u6e21\u3055\u308c\u3001\u305d\u308c\u3092\u5229\u7528\u3057\u3066\u53e4\u3044\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u65b0\u3057\u3044\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u72b6\u614b\u3092\u30b3\u30d4\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30a4\u30d9\u30f3\u30c8\u306e\u8cfc\u8aad\u89e3\u9664\u3068\u306b\u518d\u8cfc\u8aad\u304c\u884c\u308f\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u30b3\u30fc\u30c9\u306e\u30db\u30c3\u30c8\u30b9\u30ef\u30c3\u30d7\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001\u30b9\u30ef\u30c3\u30d7\u30e1\u30bd\u30c3\u30c9\u3092\u524a\u9664\u3059\u308c\u3070\u30a8\u30f3\u30b8\u30f3\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f4\u65b0\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9-postinitialize-\u3068-postupdate",children:"\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9\uff1a postInitialize \u3068 postUpdate"}),"\n",(0,i.jsxs)(t.p,{children:["\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u547c\u3073\u51fa\u3055\u308c\u308b\u4e8c\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.jsx)(t.code,{children:"postInitialize"}),"\u306f\u3001\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u521d\u671f\u5316\u3055\u308c\u305f\u5f8c\u3001\u305d\u308c\u3092\u5b9f\u88c5\u3059\u308b\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u521d\u671f\u5316\u3055\u308c\u308b\u3068\u4eee\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u6a5f\u80fd\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",(0,i.jsx)(t.code,{children:"postUpdate"}),"\u306f\u3001\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u66f4\u65b0\u3055\u308c\u305f\u5f8c\u306b\u547c\u3073\u51fa\u3055\u308c\u308bupdate\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u66f4\u65b0\u3055\u308c\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u6a5f\u80fd\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4ed6\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8ffd\u8de1\u3059\u308b\u30ab\u30e1\u30e9\u306f\u3001\u5225\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30d5\u30ec\u30fc\u30e0\u3067\u52d5\u4f5c\u3092\u5b8c\u4e86\u3067\u304d\u308b\u3088\u3046\u306b\u3001",(0,i.jsx)(t.code,{children:"postUpdate"}),"\u3067\u305d\u306e\u4f4d\u7f6e\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.h1,{id:"\u30a4\u30d9\u30f3\u30c8",children:"\u30a4\u30d9\u30f3\u30c8"}),"\n",(0,i.jsx)(t.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u7279\u5b9a\u306e\u72b6\u6cc1\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u3092\u8907\u6570\u767a\u52d5\u3055\u305b\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"state\u72b6\u614benable\u6709\u52b9\u5316disable\u7121\u52b9\u5316",children:"state\uff08\u72b6\u614b\uff09\u3001enable\uff08\u6709\u52b9\u5316\uff09\u3001disable\uff08\u7121\u52b9\u5316\uff09"}),"\n",(0,i.jsxs)(t.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5b9f\u884c\u72b6\u614b\u3092\u6709\u52b9\u304b\u3089\u7121\u52b9\u3001\u307e\u305f\u306f\u305d\u306e\u9006\u306b\u5207\u308a\u66ff\u3048\u308b\u969b\u306b",(0,i.jsx)(t.code,{children:"state"}),"\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u72b6\u614b\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u81ea\u4f53\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u6240\u5c5e\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3001Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6dfb\u4ed8\u3055\u308c\u3066\u3044\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u6709\u52b9\uff0f\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(t.code,{children:"enable"}),"\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u72b6\u614b\u304c\u7121\u52b9\u304b\u3089\u6709\u52b9\u306b\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306b\u306e\u307f\u767a\u751f\u3057\u307e\u3059\u3002\u307e\u305f\u3001",(0,i.jsx)(t.code,{children:"disable"}),"\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u3001\u72b6\u614b\u304c\u6709\u52b9\u304b\u3089\u7121\u52b9\u306b\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306b\u306e\u307f\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("state", function (enabled) {\n        // play a sound effect when the entity is enabled or disabled\n        if (enabled) {\n            this.entity.sound.play("bell");\n        } else {\n            this.entity.sound.play("horn");\n        }\n    });\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u307e\u305f\u306f\u3001\u540c\u69d8\u3067",(0,i.jsx)(t.code,{children:"enable"}),"\u3068",(0,i.jsx)(t.code,{children:"disable"}),"\u3092\u5229\u7528\u3057\u305f\u5834\u5408\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("enable", function () {\n        this.entity.sound.play("bell");\n    });\n\n    this.on("disable", function () {\n        this.entity.sound.play("horn");\n    });\n};\n'})}),"\n",(0,i.jsx)(t.h2,{id:"destroy",children:"destroy"}),"\n",(0,i.jsxs)(t.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u7834\u68c4\u3055\u308c\u308b\u3068",(0,i.jsx)(t.code,{children:"destroy"}),"\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002",(0,i.jsx)(t.code,{children:"destroy()"}),"\u30e1\u30bd\u30c3\u30c9\u306e\u547c\u3073\u51fa\u3057\u306b\u3088\u308a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u524a\u9664\u3055\u308c\u305f\u3053\u3068\u304c\u539f\u56e0\u306e\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3057\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304b\u3089Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u524a\u9664\u3055\u308c\u305f\u5834\u5408\u3084\u3001\u6dfb\u4ed8\u3055\u308c\u3066\u3044\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u7834\u58ca\u3055\u308c\u305f\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("destroy", function () {\n        // remove a DOM event listener when the entity is destroyed\n        window.removeEventListener("resize", this._onResize);\n    });\n};\n'})}),"\n",(0,i.jsx)(t.h2,{id:"attr\u3068attrname",children:"attr\u3068attr:[name]"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"attr"}),"\u3068",(0,i.jsx)(t.code,{children:"attr:[name]"}),"\u30a4\u30d9\u30f3\u30c8\u306f\u5ba3\u8a00\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u5024\u5909\u66f4\u3055\u308c\u305f\u6642\u306b\u767a\u751f\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u904e\u7a0b\u3001\u3042\u308b\u3044\u306f\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u5024\u306b\u5909\u66f4\u304c\u52a0\u3048\u3089\u308c\u305f\u3068\u304d\u306b\u8d77\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.jsx)(t.code,{children:"attr"}),"\u306f\u5909\u66f4\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u767a\u751f\u3057\u307e\u3059\u3002 ",(0,i.jsx)(t.code,{children:"attr:[name]"}),"\u306f\u7279\u5b9a\u306e\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u306e\u307f\u767a\u751f\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u300cspeed\u300d\u3068\u3044\u3046\u5c5e\u6027\u304c\u3042\u308b\u5834\u5408\u3001\u901f\u5ea6\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b",(0,i.jsx)(t.code,{children:"attr:speed"})," \u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("attr:speed", function (value, prev) {\n        // speed attribute has changed\n    });\n};\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);