"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8533],{96724:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"user-manual/animation/anim-events","title":"Anim\u30a4\u30d9\u30f3\u30c8","description":"Anim\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u4e2d\u306b\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u5404\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u305d\u308c\u306b\u6dfb\u4ed8\u3055\u308c\u305f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u306e\u6307\u5b9a\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u304c\u305d\u306e\u30d5\u30ec\u30fc\u30e0\u306b\u9054\u3059\u308b\u3068\u3001\u30a4\u30d9\u30f3\u30c8\u306f\u767a\u751f\u3057\u3001\u95a2\u9023\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/animation/anim-events.md","sourceDirName":"user-manual/animation","slug":"/user-manual/animation/anim-events","permalink":"/ja/user-manual/animation/anim-events","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/animation/anim-events.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Anim\u30a4\u30d9\u30f3\u30c8","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Anim\u30ec\u30a4\u30e4\u30fc\u30de\u30b9\u30af","permalink":"/ja/user-manual/animation/anim-layer-masking"},"next":{"title":"\u7269\u7406\u6f14\u7b97","permalink":"/ja/user-manual/physics/"}}');var s=t(74848),r=t(28453);const a={title:"Anim\u30a4\u30d9\u30f3\u30c8",sidebar_position:5},o=void 0,c={},d=[{value:"\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210",id:"\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210",level:3},{value:"\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc",id:"\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc",level:3}];function l(n){const e={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Anim\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u4e2d\u306b\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u5404\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u305d\u308c\u306b\u6dfb\u4ed8\u3055\u308c\u305f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u306e\u6307\u5b9a\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u304c\u305d\u306e\u30d5\u30ec\u30fc\u30e0\u306b\u9054\u3059\u308b\u3068\u3001\u30a4\u30d9\u30f3\u30c8\u306f\u767a\u751f\u3057\u3001\u95a2\u9023\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210",children:"\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210"}),"\n",(0,s.jsxs)(e.p,{children:["\u65b0\u3057\u3044\u30a4\u30d9\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067\u9078\u629e\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u4ee5\u4e0b\u306b\u793a\u3059\u3088\u3046\u306b\u30a2\u30bb\u30c3\u30c8\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306b ",(0,s.jsx)(e.code,{children:"+ EVENT"})," \u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Animation Asset With Event",src:t(58086).A+"",width:"676",height:"1588"})}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u30a4\u30d9\u30f3\u30c8\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u4fee\u6b63\u53ef\u80fd\u306a\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5909\u6570"}),(0,s.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"time"}),(0,s.jsx)(e.td,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u751f\u4e2d\u306b\u30a4\u30d9\u30f3\u30c8\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308b\u7279\u5b9a\u306e\u6642\u9593\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u5358\u4f4d\u306f\u79d2\u3067\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"\u30a4\u30d9\u30f3\u30c8\u306e\u540d\u524d\u306f\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u6dfb\u4ed8\u3059\u308b\u3068\u304d\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"\u4efb\u610f\u306e\u6570\u5024\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u8ffd\u52a0\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u306b\u8ffd\u52a0\u306e\u8a73\u7d30\u3092\u6e21\u3059\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"string"}),(0,s.jsx)(e.td,{children:"\u4efb\u610f\u306e\u6587\u5b57\u5217\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u8ffd\u52a0\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u306b\u8ffd\u52a0\u306e\u8a73\u7d30\u3092\u6e21\u3059\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc",children:"\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc"}),"\n",(0,s.jsx)(e.p,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u304cAnim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u3088\u3063\u3066\u518d\u751f\u3055\u308c\u308b\u305f\u3073\u306b\u3001\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30ea\u30b9\u30ca\u30fc\u3092\u6dfb\u4ed8\u3057\u3066\u30a4\u30d9\u30f3\u30c8\u3092\u51e6\u7406\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u306f\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u6dfb\u4ed8\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"var AnimationEvents = pc.createScript('animationEvents');\n\n// initialize code called once per entity\nAnimationEvents.prototype.initialize = function() {\n    this.entity.anim.on('plant_foot', function (event) {\n        // get the foot bone from the event's string property, either right_foot or left_foot\n        const footBone = this.entity.findByName(event.string);\n        createDustCloudAtLocation(footBone.getPosition());\n    }, this);\n};\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5358\u4e00\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u306b\u4efb\u610f\u306e\u6570\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3092\u6dfb\u4ed8\u3057\u3001\u4efb\u610f\u306e\u6570\u306eAnim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u306e\u8ffd\u52a0\u306e ",(0,s.jsx)(e.code,{children:"number"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3068 ",(0,s.jsx)(e.code,{children:"string"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u540c\u3058\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u306b\u6e21\u3055\u308c\u308b\u30a4\u30d9\u30f3\u30c8\u3092\u533a\u5225\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},58086:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/animation_asset_with_events-f4b09e5b11d9bfb09175355559184206.png"},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);