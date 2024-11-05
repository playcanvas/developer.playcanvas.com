"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2553],{58040:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-manual/animation/anim-layer-masking","title":"Anim\u30ec\u30a4\u30e4\u30fc\u30de\u30b9\u30af","description":"\u30b2\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8907\u96d1\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u3092\u4f5c\u6210\u3059\u308b\u969b\u3001\u7279\u5b9a\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u3092\u5404\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e2\u30c7\u30eb\u306e\u7279\u5b9a\u306e\u30dc\u30fc\u30f3\u306b\u5206\u96e2\u3059\u308b\u3053\u3068\u304c\u3057\u3070\u3057\u3070\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u540c\u6642\u306b\u8907\u6570\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3059\u308b\u969b\u306b\u7279\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002PlayCanvas\u3067\u306f\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30ec\u30a4\u30e4\u30fc\u306b\u5bfe\u3057\u3066\u30de\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3053\u308c\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/animation/anim-layer-masking.md","sourceDirName":"user-manual/animation","slug":"/user-manual/animation/anim-layer-masking","permalink":"/ja/user-manual/animation/anim-layer-masking","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/animation/anim-layer-masking.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Anim\u30ec\u30a4\u30e4\u30fc\u30de\u30b9\u30af","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"Animstategraph\u30a2\u30bb\u30c3\u30c8","permalink":"/ja/user-manual/animation/anim-state-graph-assets"},"next":{"title":"Anim\u30a4\u30d9\u30f3\u30c8","permalink":"/ja/user-manual/animation/anim-events"}}');var t=a(74848),i=a(28453);const r={title:"Anim\u30ec\u30a4\u30e4\u30fc\u30de\u30b9\u30af",sidebar_position:4},o=void 0,m={},c=[{value:"\u30de\u30b9\u30af\u306e\u4f5c\u6210",id:"\u30de\u30b9\u30af\u306e\u4f5c\u6210",level:3}];function l(n){const e={a:"a",code:"code",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u30b2\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8907\u96d1\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u3092\u4f5c\u6210\u3059\u308b\u969b\u3001\u7279\u5b9a\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u3092\u5404\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e2\u30c7\u30eb\u306e\u7279\u5b9a\u306e\u30dc\u30fc\u30f3\u306b\u5206\u96e2\u3059\u308b\u3053\u3068\u304c\u3057\u3070\u3057\u3070\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u540c\u6642\u306b\u8907\u6570\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3059\u308b\u969b\u306b\u7279\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002PlayCanvas\u3067\u306f\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e",(0,t.jsx)(e.a,{href:"/user-manual/animation/anim-state-graph-assets/#layers",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30ec\u30a4\u30e4\u30fc"}),"\u306b\u5bfe\u3057\u3066\u30de\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3053\u308c\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u30de\u30b9\u30af\u306e\u4f5c\u6210",children:"\u30de\u30b9\u30af\u306e\u4f5c\u6210"}),"\n",(0,t.jsxs)(e.p,{children:["Anim State Graph\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a2\u30bf\u30c3\u30c1\u3059\u308b\u3068\u3001\u30b0\u30e9\u30d5\u306b\u542b\u307e\u308c\u308b\u30ec\u30a4\u30e4\u30fc\u306e\u30ea\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u5404\u30ec\u30a4\u30e4\u30fc\u30d1\u30cd\u30eb\u306e\u4e0b\u306b\u3042\u308b ",(0,t.jsx)(e.strong,{children:"Create Mask"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u308c\u3089\u306e\u30ec\u30a4\u30e4\u30fc\u306e\u3044\u305a\u308c\u304b\u306b\u30de\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Anim Component Create Mask",src:a(16007).A+"",width:"1014",height:"1456"})}),"\n",(0,t.jsx)(e.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u4e0b\u8a18\u306b\u793a\u3059\u30ec\u30a4\u30e4\u30fc\u306e\u30de\u30b9\u30af\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u304c\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Mask Inspector",src:a(21744).A+"",width:"1032",height:"1010"})}),"\n",(0,t.jsxs)(e.p,{children:["\u30de\u30b9\u30af\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306f\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u99c6\u52d5\u3059\u308b\u5b8c\u5168\u306a\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u6307\u5b9a\u3055\u308c\u305f",(0,t.jsx)(e.code,{children:"root bone"}),"\u304b\u3089\u59cb\u307e\u308a\u307e\u3059\u3002\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u5185\u306e\u5404\u30dc\u30fc\u30f3\u306f\u3001\u30de\u30b9\u30af\u306b\u542b\u3081\u308b\u305f\u3081\u306b\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u7279\u5b9a\u306e\u30dc\u30fc\u30f3\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306e\u5168\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u542b\u3081\u305f\u308a\u9664\u5916\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30de\u30b9\u30af\u3067\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u30dc\u30fc\u30f3\u306f\u3001\u3053\u306e\u30de\u30b9\u30af\u306e\u30ec\u30a4\u30e4\u30fc\u3067\u518d\u751f\u3055\u308c\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u3044\u305a\u308c\u306b\u3082\u5f71\u97ff\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30de\u30b9\u30af\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001",(0,t.jsx)(e.a,{href:"/user-manual/animation/anim-state-graph-assets/#layer-blending",children:"\u30ec\u30a4\u30e4\u30fc\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30de\u30b9\u30af\u3055\u308c\u305f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8907\u6570\u306e\u30ec\u30a4\u30e4\u30fc\u3067\u30b9\u30e0\u30fc\u30ba\u306b\u30d6\u30ec\u30f3\u30c9\u3067\u304d\u307e\u3059\u3002"]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},16007:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/anim_component_create_mask-bfb843a616e0aee4443160ba2e852828.png"},21744:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/anim_mask_inspector-7fcdb89cb5d5ca081c0de2de95af8592.png"},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var s=a(96540);const t={},i=s.createContext(t);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);