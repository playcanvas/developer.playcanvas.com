"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4443],{62564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manual/scripting/script-attributes","title":"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027","description":"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027 (Script Attributes) \u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u5024\u3092PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8868\u793a\u3057\u3066\u8abf\u6574\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5f37\u529b\u306a\u6a5f\u80fd\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u30011\u5ea6\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\uff08Entity\uff09\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3054\u3068\u306b\u5024\u3092\u8abf\u6574\u3057\u3066\u7570\u306a\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\u3001\u307e\u305f\u306f\u4ed6\u306e\u975e\u30d7\u30ed\u30b0\u30e9\u30de\u306e\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306b\u5024\u8abf\u6574\u3068\u5909\u66f4\u3092\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u306a\u304f\u884c\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scripting/script-attributes.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/script-attributes","permalink":"/ja/user-manual/scripting/script-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/script-attributes.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb","permalink":"/ja/user-manual/scripting/application-lifecyle"},"next":{"title":"\u30b9\u30af\u30ea\u30d7\u30c8\u9593\u306e\u901a\u4fe1\u65b9\u6cd5","permalink":"/ja/user-manual/scripting/communication"}}');var s=t(74848),i=t(28453);const a={title:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027",sidebar_position:5},c=void 0,d={},l=[{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u5ba3\u8a00\u3059\u308b",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u5ba3\u8a00\u3059\u308b",level:2},{value:"\u30a8\u30c7\u30a3\u30bf\u30fc\u4e0a\u3067\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b",id:"\u30a8\u30c7\u30a3\u30bf\u30fc\u4e0a\u3067\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b",level:2},{value:"\u30b3\u30fc\u30c9\u5185\u3067\u5c5e\u6027\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",id:"\u30b3\u30fc\u30c9\u5185\u3067\u5c5e\u6027\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",level:2},{value:"\u5c5e\u6027\u3092\u66f4\u65b0",id:"\u5c5e\u6027\u3092\u66f4\u65b0",level:2},{value:"\u5c5e\u6027\u306e\u30bf\u30a4\u30d7",id:"\u5c5e\u6027\u306e\u30bf\u30a4\u30d7",level:2},{value:"Entity\u5c5e\u6027",id:"entity\u5c5e\u6027",level:3},{value:"Asset\u5c5e\u6027",id:"asset\u5c5e\u6027",level:3},{value:"Color\u5c5e\u6027",id:"color\u5c5e\u6027",level:3},{value:"Curve\u5c5e\u6027",id:"curve\u5c5e\u6027",level:3},{value:"Enum\u5c5e\u6027",id:"enum\u5c5e\u6027",level:3},{value:"JSON\u5c5e\u6027",id:"json\u5c5e\u6027",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027 (Script Attributes) \u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u5024\u3092PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8868\u793a\u3057\u3066\u8abf\u6574\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5f37\u529b\u306a\u6a5f\u80fd\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u30011\u5ea6\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\uff08Entity\uff09\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3054\u3068\u306b\u5024\u3092\u8abf\u6574\u3057\u3066\u7570\u306a\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\u3001\u307e\u305f\u306f\u4ed6\u306e\u975e\u30d7\u30ed\u30b0\u30e9\u30de\u306e\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306b\u5024\u8abf\u6574\u3068\u5909\u66f4\u3092\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u306a\u304f\u884c\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u5ba3\u8a00\u3059\u308b",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u5ba3\u8a00\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u306f\u3001\u6b21\u306e\u5f62\u5f0f\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u5148\u982d\u3067\u5ba3\u8a00\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var MyScript = pc.createScript('myScript');\n\nMyScript.attributes.add('speed', {\n    type: 'number',\n    default: 80\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u4f8b\u3067\u3001",(0,s.jsx)(n.code,{children:"speed"})," \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u5ba3\u8a00\u3055\u308c\u3066\u3044\u307e\u3059\u3002type \u306f ",(0,s.jsx)(n.code,{children:"number"})," \u3067\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f ",(0,s.jsx)(n.code,{children:"80"})," \u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3057\u5c5e\u6027\u306e\u914d\u5217\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b ",(0,s.jsx)(n.code,{children:"array: true"})," \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var MyScript = pc.createScript('myScript');\n\nMyScript.attributes.add('names', {\n    type: 'string',\n    array: true\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30a8\u30c7\u30a3\u30bf\u30fc\u4e0a\u3067\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b",children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u4e0a\u3067\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Script Attributes",src:t(12235).A+"",width:"534",height:"371"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c5e\u6027\u3092\u5ba3\u8a00\u3057\u305f\u3089Editor\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u9732\u51fa\u3055\u305b\u308b\u305f\u3081\u306b\u30b3\u30fc\u30c9\u3092\u30d1\u30fc\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5c5e\u6027\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306f\u3001\u624b\u52d5\u3067\u5c5e\u6027\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d1\u30fc\u30b9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Parse Button",src:t(87590).A+"",width:"56",height:"56"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30b3\u30fc\u30c9\u5185\u3067\u5c5e\u6027\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",children:"\u30b3\u30fc\u30c9\u5185\u3067\u5c5e\u6027\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5c5e\u6027\u3092\u5ba3\u8a00\u3059\u308b\u3068\u3001\u5c5e\u6027\u304c\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e1\u30f3\u30d0\u30fc\u5909\u6570\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u4e0a\u8a18\u3067\u5ba3\u8a00\u3055\u308c\u305f ",(0,s.jsx)(n.code,{children:"speed"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001",(0,s.jsx)(n.code,{children:"this.speed"})," \u3068\u3057\u3066\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.prototype.update = function (dt) {\n    this.entity.translate(this.speed * dt, 0, 0);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5c5e\u6027\u3092\u66f4\u65b0",children:"\u5c5e\u6027\u3092\u66f4\u65b0"}),"\n",(0,s.jsxs)(n.p,{children:["\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u5c5e\u6027\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u8d77\u52d5\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30d4\u30fc\u306b\u5bfe\u3057\u3066\u5909\u66f4\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u3053\u3068\u306a\u304f\u5c5e\u6027\u3092\u30e9\u30a4\u30d6\u3067\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u5c5e\u6027\u304c\u5909\u308f\u3063\u305f\u969b\u306e\u7279\u5225\u306a\u52d5\u4f5c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,s.jsx)(n.code,{children:"attr"})," \u3068 ",(0,s.jsx)(n.code,{children:"attr:[name]"})," \u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u5c5e\u6027\u306e\u5909\u66f4\u306b\u5fdc\u7b54\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.prototype.initialize = function () {\n    // `speed` \u5c5e\u6027\u306e\u5834\u5408\u3060\u3051\u767a\u706b\n    this.on('attr:speed', function (value, prev) {\n        // \u65b0\u3057\u3044speed\u306e\u5024\n    });\n\n    // \u5168\u3066\u306e\u5c5e\u6027\u5909\u66f4\u3067\u767a\u706b\n    this.on('attr', function(name, value, prev) {\n        // \u65b0\u3057\u3044\u5c5e\u6027\u5024\n    });\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5c5e\u6027\u306e\u30bf\u30a4\u30d7",children:"\u5c5e\u6027\u306e\u30bf\u30a4\u30d7"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c5e\u6027\u3092\u5ba3\u8a00\u3059\u308b\u969b\u306f\u3001\u305d\u306e\u5c5e\u6027\u306e\u30bf\u30a4\u30d7\u3082\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u5c5e\u6027\u3092\u7de8\u96c6\u3059\u308b\u305f\u3081\u306e\u95a2\u9023\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002\u307b\u3068\u3093\u3069\u306e\u30bf\u30a4\u30d7\u306f\u81ea\u5df1\u8aac\u660e\u7684\u3067\u3059\u304c\u3001\u4f8b\u3048\u3070 ",(0,s.jsx)(n.code,{children:"boolean"})," \u3001 ",(0,s.jsx)(n.code,{children:"number"})," \u3001",(0,s.jsx)(n.code,{children:"string"}),"\u306a\u3069\u3067\u3059\u3002\u4ee5\u4e0b\u306b\u3055\u3089\u306b\u8a73\u3057\u3044\u8aac\u660e\u304c\u5fc5\u8981\u306a\u5c5e\u6027\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.ScriptAttributes.html",children:"\u5c5e\u6027\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"entity\u5c5e\u6027",children:"Entity\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('target', { type: 'entity' })\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bf\u30a4\u30d7\u306b\u3088\u308a\u3001\u968e\u5c64\u3067\u4ed6\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e8c\u3064\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ea\u30f3\u30af\u3059\u308b\u826f\u3044\u65b9\u6cd5\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"asset\u5c5e\u6027",children:"Asset\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Asset\u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a2\u30bb\u30c3\u30c8\u306b\u53c2\u7167\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,s.jsx)(n.code,{children:"assetType"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5c5e\u6027\u304c\u7279\u5b9a\u306e\u30bf\u30a4\u30d7\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u9650\u5b9a\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001'texture' \u3001'material' \u3001'model' \u306a\u3069\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Asset\u5c5e\u6027\u306e\u30e9\u30f3\u30bf\u30a4\u30e0\u30bf\u30a4\u30d7\u306f ",(0,s.jsx)(n.code,{children:"pc.Asset"})," \u3067\u3059\u3002Asset\u5c5e\u6027\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u53c2\u7167\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('texture', {type: 'asset', assetType: 'texture'});\n\nMyScript.prototype.initialize = function () {\n    console.log('This is the texture asset', this.texture);\n    console.log('This is the texture resource', this.texture.resource);\n};\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"color\u5c5e\u6027",children:"Color\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('color', { type: 'rgba' });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8272\u5c5e\u6027\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u3067\u9732\u51fa\u3055\u308c\u305f\u3068\u304d\u306b\u30ab\u30e9\u30fc\u30d4\u30c3\u30ab\u30fc\u3092\u793a\u3057\u307e\u3059\u3002\u30a2\u30eb\u30d5\u30a1\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u516c\u958b\u3059\u308b\u304b\u5426\u304b\u306b\u5fdc\u3058\u3066\u3001\u4e8c\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3",(0,s.jsx)(n.code,{children:"rgb"}),"\u3068",(0,s.jsx)(n.code,{children:" rgba"}),"\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"curve\u5c5e\u6027",children:"Curve\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('wave', { type: 'curve' }); // one curve\nMyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // three curves: x, y, z\nMyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // one curve for red channel\nMyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // four curves for full color including alpha\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Curve\u5c5e\u6027\u306f\u3001\u6642\u9593\u306e\u7d4c\u904e\u306b\u5fdc\u3058\u3066\u5024\u304c\u5909\u5316\u3059\u308b\u5024\u3092\u8868\u73fe\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30ab\u30fc\u30d6\u306f\u3001\u671f\u95930.0 - 1.0\u306e\u9593\u3067\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u30023D\u4f4d\u7f6e\u3092\u30ab\u30fc\u30d6\u3067\u8868\u73fe\u3059\u308b\u5834\u5408\u306f\u3001",(0,s.jsx)(n.code,{children:"curves"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066 x\u3001y\u3001z \u305d\u308c\u305e\u308c\u306e 3 \u3064\u306e\u30ab\u30fc\u30d6\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001",(0,s.jsx)(n.code,{children:"color"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u7279\u5225\u306a\u30ab\u30fc\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u5229\u7528\u3057\u3066\u30ab\u30e9\u30fc\u3092\u5909\u66f4\u3067\u304d\u308b\u3088\u3046\u306b\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"enum\u5c5e\u6027",children:"Enum\u5c5e\u6027"}),"\n",(0,s.jsx)(n.p,{children:"Enum\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306e1\u3064\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30ea\u30b9\u30c8\u3092\u5ba3\u8a00\u3059\u308b\u5f62\u5f0f\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('value', {\n    type: 'number',\n    enum: [\n        { 'valueOne': 1 },\n        { 'valueTwo': 2 },\n        { 'valueThree': 3 }\n    ]\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c5e\u6027\u306b\u5bfe\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u5024\u306e\u30ea\u30b9\u30c8\u3092\u5ba3\u8a00\u3059\u308b\u305f\u3081\u306b\u3001enum\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8868\u3059\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",(0,s.jsx)(n.code,{children:"key"})," \u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30bf\u30a4\u30c8\u30eb\u3067\u3001 ",(0,s.jsx)(n.code,{children:"value"})," \u306f\u5c5e\u6027\u306e\u5024\u3067\u3059\u3002\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001",(0,s.jsx)(n.code,{children:"number"}),"\u3001",(0,s.jsx)(n.code,{children:"string"}),"\u306a\u3069\u306e\u69d8\u3005\u306a\u5c5e\u6027\u30bf\u30a4\u30d7\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"json\u5c5e\u6027",children:"JSON\u5c5e\u6027"}),"\n",(0,s.jsx)(n.p,{children:"JSON\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u4ed6\u306e\u5c5e\u6027\u306e\u578b\u3092\u81ea\u7531\u306b\u5165\u308c\u5b50\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002JSON\u5c5e\u6027\u3092\u4f5c\u6210\u3059\u308b\u305f\u3073\u306b\u3001\u305d\u306e\u8981\u7d20\u3092\u8aac\u660e\u3059\u308b\u30b9\u30ad\u30fc\u30de\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b9\u30ad\u30fc\u30de\u306b\u306f\u4e0a\u8a18\u3068\u540c\u69d8\u306b\u3001\u901a\u5e38\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u5b9a\u7fa9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u305f\u3068\u3048\u3070\uff0c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.attributes.add('gameConfig', {\n    type: 'json',\n    schema: [{\n        name: 'numEnemies',\n        type: 'number',\n        default: 10\n    }, {\n        name: 'enemyModels',\n        type: 'asset',\n        assetType: 'model',\n        array: true\n    }, {\n        name: 'godMode',\n        type: 'boolean',\n        default: false\n    }]\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u307e\u305f\u3001\u7de8\u96c6\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u5217\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001JSON\u5c5e\u6027\u306e\u914d\u5217\u3092\u5ba3\u8a00\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u4ed6\u306e\u5c5e\u6027\u30bf\u30a4\u30d7\u3068\u540c\u69d8\u306b\u3001JSON\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b\u969b\u306b ",(0,s.jsx)(n.code,{children:"array: true"})," \u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u4e0a\u8a18\u306e\u5c5e\u6027\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u4f8b\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"MyScript.prototype.update = function (dt) {\n    if (this.gameConfig.godMode) {\n        for (var i = 0; i < this.gameConfig.numEnemies; i++) {\n            // ...\n        }\n    }\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u73fe\u5728\u3001JSON\u5c5e\u6027\u3092\u4ed6\u306eJSON\u5c5e\u6027\u306e\u5b50\u3068\u3057\u3066\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002JSON\u5c5e\u6027\u3092\u5b9a\u7fa9\u3059\u308b\u969b\u306b\u306f1\u30ec\u30d9\u30eb\u306e\u6df1\u3055\u307e\u3067\u3057\u304b\u8a2d\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},12235:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/script-attributes-4cecd3ce6b71000d3ec60c7a2cfef611.png"},87590:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVRoge2Y30tTYRjHv9Mz2i4czHGsLX8kCykdIsNBQ/F2UBdTdtEBvUjoEAYGXSRe9QfUhahYFwUWGAgZIWIQIWSwOxlDpAuRIPshbKjBIXZwR+rG6aRyHs/zrvPK+7naxnmf5/nwvD/OO8flyJVfOMVU/O8CWCMEeUcI8o4Q5B0hyDtCkHeEIO8IQd4RgrxjC8FgRwwRH5vYthDEuVYkBgYRvySRh7aHIACckRHtHYLaIcNJGNZB/adToFPBtSaXqTFuXz0CnkL3DGSXZjAx+xE6QT3kc8J9tg7BxioLESTI7QqG5QWMPV3ElsV67DNFi8l9weJc0rIcwKCDxXx+dx+PP5R+Lpi4B7Vtr+s/ljH1aAYrOZoamAqaRV97i4kXSWQNupg2EdSRXZo/vLFILrigQ7coa4s1uP7mCcYOyTUhfltF9wXrsW0hmM/pyBe++MLou9uHqGzuqPkXbAV3zQ/p6ulGyENXAjNBbXkak0nz4yoraetgIGhgKzWFBy+L1pSvDg2EXTEDuWDm/TOMvF7dX1PO2hju3FIQraHOdDzIjwltc3v/c3VYwc14M6orNGSoEx0TRueghIaYiv5OPwp7oeTxI+AvPdLtoK6EHC8iyg0kWrxFv1Uh1DOAEH2yktBvMpKM+vPe0s+VCfoOGqt4NTqObK+KqxcLE9SA9m0dmR0zgXR8/2m9HPIL7wEuhOIqrrfLcEJD+vlDTK+xyXQUDN9kdKzMjmNk/hPJzfykMOzgAc7aMFp2U0hvsM70J2W5LuW/ppAuR6K/YIvbBEuEIO8IQd4RgrwjBHlHCPKOEOSdUy/4G9E9heu7IE38AAAAAElFTkSuQmCC"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);