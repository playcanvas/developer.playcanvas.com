"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[53655],{75198:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"user-manual/graphics/advanced-rendering/batching","title":"\u30d0\u30c3\u30c1\u30f3\u30b0","description":"\u30d0\u30c3\u30c1\u30f3\u30b0 (Batching) \u3068\u306f\u3001\u8907\u6570\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30921\u3064\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u7d50\u5408\u3059\u308b\u3053\u3068\u3067\u3001\u3059\u3079\u3066\u30921\u56de\u306eGPU\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002 PlayCanvas\u306f\u3001Model\u3001Sprite\u3001\u304a\u3088\u3073Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u4fbf\u5229\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3001\u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092Batch Group\u306b\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30f3\u30b8\u30f3\u304c\u30e1\u30c3\u30b7\u30e5\u3092\u7d50\u5408\u3057\u3066\u7dcf\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u6570\u3092\u6e1b\u3089\u3059\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u30d2\u30f3\u30c8\u3092\u4e0e\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/advanced-rendering/batching.md","sourceDirName":"user-manual/graphics/advanced-rendering","slug":"/user-manual/graphics/advanced-rendering/batching","permalink":"/ja/user-manual/graphics/advanced-rendering/batching","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/advanced-rendering/batching.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"\u30d0\u30c3\u30c1\u30f3\u30b0","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"Advanced Rendering","permalink":"/ja/user-manual/graphics/advanced-rendering/"},"next":{"title":"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0","permalink":"/ja/user-manual/graphics/advanced-rendering/hardware-instancing"}}');var s=a(74848),t=a(28453);const i={title:"\u30d0\u30c3\u30c1\u30f3\u30b0",sidebar_position:4},c=void 0,l={},h=[{value:"Batch Group\u306e\u4f5c\u6210",id:"batch-group\u306e\u4f5c\u6210",level:2},{value:"Batch Group\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",id:"batch-group\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",level:3},{value:"Batch Group\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0",id:"batch-group\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0",level:2},{value:"\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7d50\u5408\u3055\u305b\u308b\u30eb\u30fc\u30eb",id:"\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7d50\u5408\u3055\u305b\u308b\u30eb\u30fc\u30eb",level:2},{value:"\u30c8\u30ea\u30ac\u30fc\u518d\u30d0\u30c3\u30c1\u30f3\u30b0",id:"\u30c8\u30ea\u30ac\u30fc\u518d\u30d0\u30c3\u30c1\u30f3\u30b0",level:2},{value:"\u4f8b - \u9759\u7684\u74b0\u5883\u306e\u30d0\u30c3\u30c1\u30f3\u30b0",id:"\u4f8b---\u9759\u7684\u74b0\u5883\u306e\u30d0\u30c3\u30c1\u30f3\u30b0",level:2},{value:"\u7528\u8a9e\u96c6",id:"\u7528\u8a9e\u96c6",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u30d0\u30c3\u30c1\u30f3\u30b0 (Batching) \u3068\u306f\u3001\u8907\u6570\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30921\u3064\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u7d50\u5408\u3059\u308b\u3053\u3068\u3067\u3001\u3059\u3079\u3066\u30921\u56de\u306eGPU\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002 PlayCanvas\u306f\u3001",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/model",children:"Model"}),"\u3001",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/sprite",children:"Sprite"}),"\u3001\u304a\u3088\u3073",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/element",children:"Element"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u4fbf\u5229\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3001\u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092Batch Group\u306b\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30f3\u30b8\u30f3\u304c\u30e1\u30c3\u30b7\u30e5\u3092\u7d50\u5408\u3057\u3066\u7dcf\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u6570\u3092\u6e1b\u3089\u3059\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u30d2\u30f3\u30c8\u3092\u4e0e\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u3001\u30a8\u30f3\u30b8\u30f3\u304c\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u30eb\u30fc\u30eb\u304c\u591a\u6570\u5b58\u5728\u3057\u3066\u3044\u307e\u3059\u3002\u6700\u521d\u306e\u30eb\u30fc\u30eb\u306f\u3001\u3059\u3079\u3066\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u540c\u3058\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u5171\u6709\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u3082\u306e\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u822c\u7684\u306a\u30d0\u30c3\u30c1\u30f3\u30b0\u306e\u4f7f\u7528\u4f8b\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9759\u7684\u30b8\u30aa\u30e1\u30c8\u30ea\u3092\u7d50\u5408\u3057\u3066\u3001\u30ab\u30e1\u30e9\u30fb\u30ab\u30ea\u30f3\u30b0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u305f\u307e\u307e\u3001\u63cf\u753b\u547c\u3073\u51fa\u3057\u3092\u524a\u6e1b\u3059\u308b\u305f\u3081\u30011\u3064\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u307e\u305f\u306f\u8907\u6570\u306e\u5927\u304d\u306a\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u52d5\u7684\u30b8\u30aa\u30e1\u30c8\u30ea\u30921\u3064\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u7d50\u5408\u3057\u3001GPU\u306b\u9069\u7528\u3055\u308c\u308b\u52d5\u7684\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3064\u3088\u3046\u306b\u3059\u308b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u73fe\u5728\u3001\u30d0\u30c3\u30c1\u30f3\u30b0\u306e\u4f7f\u7528\u306f\u3001\u5404\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u4ed8\u304d\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u72ec\u81ea\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u5fc5\u8981\u3067\u3042\u308b\u305f\u3081\u3001",(0,s.jsx)(n.a,{href:"/user-manual/graphics/lighting/runtime-lightmaps/",children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7"}),"\u3068\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u305b\u3093\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"batch-group\u306e\u4f5c\u6210",children:"Batch Group\u306e\u4f5c\u6210"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Creating Batch Groups",src:a(62098).A+"",width:"311",height:"293"})}),"\n",(0,s.jsxs)(n.p,{children:["Batch Group\u306f\u3001",(0,s.jsx)(n.a,{href:"/user-manual/scenes/settings#batch-groups",children:"\u30b7\u30fc\u30f3\u8a2d\u5b9a\u30d1\u30cd\u30eb"}),"\u306eBatch Group\u30bb\u30af\u30b7\u30e7\u30f3\u304b\u3089\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u5404Batch Group\u306b\u306f\u3001\u3053\u306eBatch Group\u304b\u3089\u30d0\u30c3\u30c1\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u30a8\u30f3\u30b8\u30f3\u306e\u30d2\u30f3\u30c8\u306b\u4f7f\u7528\u3055\u308c\u308b\u3044\u304f\u3064\u304b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"batch-group\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",children:"Batch Group\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": \u7570\u306a\u308bBatch Group\u3092\u533a\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306eBatch Group\u304c\u4fdd\u6709\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u7a2e\u985e\u3092\u8aac\u660e\u3059\u308b\u3088\u3046\u306a\u540d\u524d\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u7406\u60f3\u7684\u3067\u3059\u3002\u3053\u306e\u540d\u524d\u306f\u5b9f\u884c\u6642\u306b\u5229\u7528\u53ef\u80fd\u3067\u3001\u30b0\u30eb\u30fc\u30d7\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic"}),": \u6709\u52b9\u5316\u3055\u308c\u305f\u5834\u5408\u3067\u3082\u3001Batch Group\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u4f9d\u7136\u3068\u3057\u3066\u79fb\u52d5/\u56de\u8ee2/\u62e1\u5f35\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306f\u3001\u305f\u3068\u3048\u3070\u9283\u5f3e\u306a\u3069\u4e92\u3044\u306b\u985e\u4f3c\u3057\u3066\u3001\u540c\u3058\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f7f\u7528\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002\u9759\u7684\u306a\u30b0\u30eb\u30fc\u30d7\u306f\u3001\u3088\u308a\u5c11\u306a\u3044\u30e9\u30f3\u30bf\u30a4\u30e0\u30ea\u30bd\u30fc\u30b9\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001Batch Group\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u79fb\u52d5\u3057\u306a\u3044\u5834\u5408\u306b\u306fDynamic\u3092\u975e\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Max AABB size"}),": \u30d0\u30c3\u30c1\u304c\u4f5c\u6210\u3055\u308c\u305f\u6642\u70b9\u3067\u306eBatch Group\u5185\u306e\u3059\u3079\u3066\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3080\u3001\u30d0\u30a6\u30f3\u30c7\u30a3\u30f3\u30b0\u30dc\u30c3\u30af\u30b9\u306e\u4efb\u610f\u306e\u5074\u9762\u306e\u6700\u5927\u30b5\u30a4\u30ba\u3002\u30e1\u30c3\u30b7\u30e5\u306e\u30bb\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u304c\u3001\u6700\u5927\u30b5\u30a4\u30ba\u3088\u308a\u3082\u5927\u304d\u3044\u5834\u5408\u306b\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u7528\u306b\u8907\u6570\u30d0\u30c3\u30c1\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u3088\u308a\u5927\u304d\u306a\u30d0\u30a6\u30f3\u30c7\u30a3\u30f3\u30b0\u30dc\u30c3\u30af\u30b9\u306e\u5834\u5408\u306b\u306f\u3001\u3088\u308a\u5c11\u306a\u3044\u30c9\u30ed\u30fc\u30bb\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u3053\u306e\u5834\u5408\u306b\u306f\u30ab\u30e1\u30e9\u30ab\u30ea\u30f3\u30b0\u3068\u306e\u9023\u643a\u5ea6\u5408\u304c\u6e1b\u5c11\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"batch-group\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0",children:"Batch Group\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Selecting Batch Groups",src:a(17834).A+"",width:"318",height:"306"})}),"\n",(0,s.jsx)(n.p,{children:"\u30e2\u30c7\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306fBatch Group\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u3001\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u30e2\u30c7\u30eb\u3092Batch Group\u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7d50\u5408\u3055\u305b\u308b\u30eb\u30fc\u30eb",children:"\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7d50\u5408\u3055\u305b\u308b\u30eb\u30fc\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u30a8\u30f3\u30b8\u30f3\u304c\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7d50\u5408\u3067\u304d\u308b\u304b\u306e\u30eb\u30fc\u30eb\u306f\u975e\u5e38\u306b\u8907\u96d1\u3067\u3059\u304c\u3001\u7c21\u6f54\u306b\u3044\u3048\u30701\u3064\u306e\u30d0\u30c3\u30c1\u306b\u5c5e\u3059\u308b\u3059\u3079\u3066\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u4ee5\u4e0b\u306b\u5f93\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u540c\u3058Batch GroupID\u3092\u6301\u3064"}),"\n",(0,s.jsx)(n.li,{children:"\u540c\u3058\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u6301\u3064"}),"\n",(0,s.jsx)(n.li,{children:"\u540c\u3058\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6301\u3064"}),"\n",(0,s.jsx)(n.li,{children:"\u5074\u9762\u306e\u30b5\u30a4\u30ba\u304c\u3001Max AABB\u30b5\u30a4\u30ba\u4ee5\u4e0b\u306e\u30d0\u30a6\u30f3\u30c7\u30a3\u30f3\u30b0\u30dc\u30c3\u30af\u30b9\u5185\u306b\u3042\u308b"}),"\n",(0,s.jsx)(n.li,{children:"\u540c\u3058\u30ec\u30a4\u30e4\u30fc\u5185\u306b\u3042\u308b"}),"\n",(0,s.jsx)(n.li,{children:"\u5404\u30d0\u30c3\u30c1\u306e\u6700\u5927\u9802\u70b9\u30ab\u30a6\u30f3\u30c8\u306f65535"}),"\n",(0,s.jsx)(n.li,{children:"\u52d5\u7684\u30d0\u30c3\u30c1\u306b\u306f\u3001\u79fb\u52d5\u53ef\u80fd\u306a\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u6700\u5927\u6570\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u6700\u5927\u306f1024\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Batch Group\u306b\u3059\u3079\u3066\u306e\u30eb\u30fc\u30eb\u306b\u3057\u305f\u304c\u3046\u308f\u3051\u3067\u306f\u306a\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u307e\u305f\u306f\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001Batch Group\u306f\u8907\u6570\u306e\u30d0\u30c3\u30c1\u3092\u4f5c\u6210\u3057\u3001\u3059\u3079\u3066\u306e\u30eb\u30fc\u30eb\u306b\u3057\u305f\u304c\u3046\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u542b\u3080\u500b\u5225\u306e\u30d0\u30c3\u30c1\u304c\u8907\u6570\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30c8\u30ea\u30ac\u30fc\u518d\u30d0\u30c3\u30c1\u30f3\u30b0",children:"\u30c8\u30ea\u30ac\u30fc\u518d\u30d0\u30c3\u30c1\u30f3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:"Batch Group\u306b\u57fa\u3065\u3044\u3066\u3001\u30a8\u30f3\u30b8\u30f3\u306f\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u6700\u9069\u5316\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u591a\u304f\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u3055\u3089\u306a\u308b\u5909\u66f4\u306f\u3001\u6700\u9069\u5316\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u53cd\u6620\u3055\u308c\u307e\u305b\u3093\u3002\u30d0\u30c3\u30c1\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u3066\u826f\u597d\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5b9f\u73fe\u3059\u308b\u4e00\u65b9\u3067\u3001\u3044\u304f\u3064\u304b\u306e\u66f4\u65b0\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u306b\u3001\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5909\u66f4\u3092\u52a0\u3048\u305f\u5f8c\u306b\u30a8\u30f3\u30b8\u30f3\u306b\u500b\u3005\u306eBatch Group\u306e\u518d\u30d0\u30c3\u30c1\u30f3\u30b0\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u8981\u7d20\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3088\u304f\u4f7f\u7528\u3055\u308c\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u3092\u8a2d\u5b9a\u3057\u305f\u3044\u304c\u3001\u307e\u308c\u306b\u66f4\u65b0\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30b0\u30eb\u30fc\u30d7\u3092\u518d\u30d0\u30c3\u30c1\u30f3\u30b0\u3059\u308b\u3053\u3068\u306f\u3001\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u591a\u304f\u306e\u5834\u5408\u3001\u66f4\u65b0\u304c\u5fc5\u8981\u306a\u8981\u7d20\u3092\u5225\u3005\u306eBatch Group\u306b\u5206\u96e2\u3059\u308b\u3053\u3068\u3067\u3001\u518d\u30d0\u30c3\u30c1\u30f3\u30b0\u306e\u5f71\u97ff\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f\u5358\u7d14\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b\u3067\u3059\u3002\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u8981\u7d20\u306e",(0,s.jsx)(n.code,{children:"textureAsset"}),"\u3092\u66f4\u65b0\u3057\u3001Batch Group\u3092\u5909\u66f4\u6e08\u307f\u3068\u3057\u3066\u30de\u30fc\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// change textureAsset on element\nelement.textureAsset = this.hoverAsset;\n\n// if this element has Batch Group set, mark it dirty to rebuild the group in the next frame\nif (element.batchGroupId)\n    this.app.batcher.markGroupDirty(element.batchGroupId);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f8b---\u9759\u7684\u74b0\u5883\u306e\u30d0\u30c3\u30c1\u30f3\u30b0",children:"\u4f8b - \u9759\u7684\u74b0\u5883\u306e\u30d0\u30c3\u30c1\u30f3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Western Scene",src:a(6746).A+"",width:"600",height:"400"})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30b7\u30fc\u30f3\u3067\u306f\u30017\u3064\u306e\u500b\u5225\u306e\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u9759\u7684\u74b0\u5883\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u3089\u306e\u4e00\u90e8\u306f\u30b7\u30fc\u30f3\u5185\u3067\u53cd\u5fa9\u3055\u308c\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30ed\u30fc\u30c9\u30bf\u30a4\u30eb\u306f50\u500b\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u4f7f\u7528\u3055\u308c\u3001\u30b7\u30fc\u30f3\u306e\u4e2d\u592e\u3067\u9577\u3044\u9053\u8def\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Western Animation",src:a(64205).A+"",width:"600",height:"337"})}),"\n",(0,s.jsx)(n.p,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u5404\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u304c\u4f5c\u6210\u3055\u308c\u308b\u70b9\u3092\u53c2\u7167\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u74b0\u5883\u3067\u306f\u3001\u30a8\u30f3\u30b8\u30f3\u306f50\u4ee5\u4e0a\u306e\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u3066\u3001\u5404\u30e2\u30c7\u30eb\u3092\u500b\u5225\u306b\u30c9\u30ed\u30fc\u3057\u3066\u3044\u307e\u3059\u3002\u305f\u3060\u3057\u5730\u9762\u3092\u9664\u304d\u3001\u3053\u308c\u3089\u306e\u30e2\u30c7\u30eb\u306f\u3059\u3079\u3066\u540c\u3058\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u3053\u306e\u305f\u3081Batch Group\u306b\u7d50\u5408\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Western Animation Batched",src:a(24335).A+"",width:"600",height:"338"})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u5efa\u7269\u3001\u30b5\u30dc\u30c6\u30f3\u3001\u9053\u8def\u3001\u5730\u9762\u7528\u306b4\u3064\u306eBatch Group\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\u9053\u8def\u3068\u5730\u9762\u306f1\u3064\u306e\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u306b\u7d50\u5408\u3055\u308c\u3066\u3044\u306a\u3044\u70b9\u306b\u7559\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3001\u30e1\u30c3\u30b7\u30e5\u304cBatch Group\u3067\u5b9a\u7fa9\u3055\u308c\u305fMax AABB\u30b5\u30a4\u30ba\u3088\u308a\u3082\u5927\u304d\u3044\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7528\u8a9e\u96c6",children:"\u7528\u8a9e\u96c6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Group"})," - \u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u4f5c\u6210\u3055\u308c\u305f\u540d\u524d\u4ed8\u304d\u30b0\u30eb\u30fc\u30d7\u3067\u3001\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u7d50\u5408\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u30d2\u30f3\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306fBatch Group\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch"})," - \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30bb\u30c3\u30c8\u3067\u3042\u308b\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u4f5c\u6210\u3055\u308c\u308b\u30a8\u30f3\u30b8\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002Batch Group\u306b\u306f\u3001\u30d0\u30c3\u30c1\u306b\u8ffd\u52a0\u3055\u308c\u308b\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5fdc\u3058\u3066\u3001\u8907\u6570\u306e\u30d0\u30c3\u30c1\u304c\u4f5c\u6210\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Manager"})," - \u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30d0\u30c3\u30c1\u3092\u4f5c\u6210\u304a\u3088\u3073\u66f4\u65b0\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3002",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.BatchManager.html",children:"API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},62098:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/batch-groups-71afcb05f3885906a882c5464ea6addd.jpg"},17834:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/model-component-8948eefda2bdb4e3c1ecfdf2727bb3e9.jpg"},64205:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/western-animation-all-a48304499997b0ed498a4b6257e11516.gif"},24335:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/western-animation-819e8e6acdafbbccd480abdd1acfdb2a.gif"},6746:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/western-scene-e12977ef88437aeb6c5700fa13b27b0b.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var r=a(96540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);