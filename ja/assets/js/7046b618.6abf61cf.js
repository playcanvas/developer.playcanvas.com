"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[28975],{38839:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"user-manual/physics/compound-shapes","title":"Compound","description":"\u8907\u5408\u5f62\u72b6 (Compound) \u3068\u306f\u3001\u8907\u6570\u306e\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u5f62\u72b6\uff08\u5f62\u72b6\u306e\u30ea\u30b9\u30c8\u306f\u3053\u3061\u3089\uff09\u304b\u3089\u4f5c\u3089\u308c\u305f\u30ab\u30b9\u30bf\u30e0\u30b3\u30ea\u30b8\u30e7\u30f3\u5f62\u72b6\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30ab\u30b9\u30bf\u30e0\u30e1\u30c3\u30b7\u30e5\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u305b\u305a\u306b\u3001\u3088\u308a\u8907\u96d1\u306a\u30b3\u30ea\u30b8\u30e7\u30f3\u5f62\u72b6\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/physics/compound-shapes.md","sourceDirName":"user-manual/physics","slug":"/user-manual/physics/compound-shapes","permalink":"/ja/user-manual/physics/compound-shapes","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/compound-shapes.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Compound","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0","permalink":"/ja/user-manual/physics/trigger-volumes"},"next":{"title":"\u30ec\u30a4\u30ad\u30e3\u30b9\u30c6\u30a3\u30f3\u30b0","permalink":"/ja/user-manual/physics/ray-casting"}}');var o=n(74848),c=n(28453);const i={title:"Compound",sidebar_position:4},t=void 0,r={},p=[];function l(s){const e={a:"a",img:"img",p:"p",...(0,c.R)(),...s.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u8907\u5408\u5f62\u72b6 (Compound) \u3068\u306f\u3001\u8907\u6570\u306e\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u5f62\u72b6\uff08",(0,o.jsx)(e.a,{href:"/user-manual/physics/physics-basics/#rigid-bodies",children:"\u5f62\u72b6\u306e\u30ea\u30b9\u30c8\u306f\u3053\u3061\u3089"}),"\uff09\u304b\u3089\u4f5c\u3089\u308c\u305f\u30ab\u30b9\u30bf\u30e0\u30b3\u30ea\u30b8\u30e7\u30f3\u5f62\u72b6\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30ab\u30b9\u30bf\u30e0\u30e1\u30c3\u30b7\u30e5\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u305b\u305a\u306b\u3001\u3088\u308a\u8907\u96d1\u306a\u30b3\u30ea\u30b8\u30e7\u30f3\u5f62\u72b6\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u6700\u5927\u306e\u5229\u70b9\u306f\u3001\u30e1\u30c3\u30b7\u30e5\u30b3\u30ea\u30b8\u30e7\u30f3\u5f62\u72b6\u3067\u306f\u4e0d\u53ef\u80fd\u306a\u52d5\u7684\u306aRigidBody\u306e\u30b3\u30ea\u30b8\u30e7\u30f3\u3092\u30b3\u30f3\u30d1\u30a6\u30f3\u30c9\u9593\u3067\u884c\u3048\u308b\u3053\u3068\u3067\u3059(\u4e0b\u8a18\u306e\u3088\u3046\u306b\u8868\u793a)\u3002"}),"\n",(0,o.jsx)("div",{className:"iframe-container",children:(0,o.jsx)("iframe",{src:"https://playcanv.as/e/p/KXZ5Lsda/",title:"Compound Physic Shapes",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://playcanvas.com/project/688146/overview/compound-physics-shapes",children:"PlayCanvas \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30f3\u30af"})}),"\n",(0,o.jsx)(e.p,{children:"\u8907\u5408\u5f62\u72b6\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5f62\u72b6\u306f\u3001\u5b50\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ea\u30b8\u30e7\u30f3\u5f62\u72b6\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Compound shapes setup",src:n(16415).A+"",width:"2688",height:"1920"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Compound shapes chair",src:n(49204).A+"",width:"846",height:"480"})}),"\n",(0,o.jsxs)(e.p,{children:['\u89aa\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u3042\u308bChair\u306f\u30bf\u30a4\u30d7\u304c "Compound" \u306e ',(0,o.jsx)(e.a,{href:"/user-manual/scenes/components/collision/",children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," \u3092\u6301\u3061\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b50\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u3001\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u5f62\u72b6\u306e\u30bf\u30a4\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u5f62\u72b6\u306f\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5f62\u72b6\u3092\u5f62\u6210\u3057\u3001\u89aa\u306b\u5bfe\u3059\u308b\u76f8\u5bfe\u4f4d\u7f6e\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u89aa\u3082\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u91cd\u5fc3\u3067\u3042\u308a\u3001\u901a\u5e38\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5f62\u72b6\u306e\u7bc4\u56f2\u5185\uff08\u901a\u5e38\u306f\u4e2d\u5fc3\uff09\u306b\u3042\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u529b\u3084\u30c8\u30eb\u30af\u304c\u52a0\u308f\u3063\u305f\u3068\u304d\u306b\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u4e0d\u601d\u8b70\u306a\u6319\u52d5\u3092\u793a\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function u(s={}){const{wrapper:e}={...(0,c.R)(),...s.components};return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(l,{...s})}):l(s)}},16415:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/compound-shape-chair-setup-50987bc636ecc5df7c10bb742c57af54.png"},49204:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/compound-shape-chair-7298c69b8e7218684d19c54c1fc293ec.gif"},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>t});var a=n(96540);const o={},c=a.createContext(o);function i(s){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(o):s.components||o:i(s.components),a.createElement(c.Provider,{value:e},s.children)}}}]);