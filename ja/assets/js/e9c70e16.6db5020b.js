"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9035],{76242:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"shader-editor/overview/file-handling","title":"\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u308a\u6271\u3044","description":"\u30b7\u30a7\u30fc\u30c0\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u30d6\u30e9\u30a6\u30b6\u30d9\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u3067\u3059\u304c\u3001\u4f5c\u6210\u3055\u308c\u305f\u30b0\u30e9\u30d5\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30de\u30b7\u30f3\u4e0a\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/shader-editor/overview/file-handling.md","sourceDirName":"shader-editor/overview","slug":"/shader-editor/overview/file-handling","permalink":"/ja/shader-editor/overview/file-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/shader-editor/overview/file-handling.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u308a\u6271\u3044","sidebar_position":5},"sidebar":"shaderEditorSidebar","previous":{"title":"\u30c6\u30af\u30b9\u30c1\u30e3","permalink":"/ja/shader-editor/overview/textures"},"next":{"title":"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc","permalink":"/ja/shader-editor/overview/workflow"}}');var i=r(74848),o=r(28453);const s={title:"\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u308a\u6271\u3044",sidebar_position:5},d=void 0,a={},l=[{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30c3\u30af",id:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30c3\u30af",level:3}];function c(e){const n={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u30d6\u30e9\u30a6\u30b6\u30d9\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u3067\u3059\u304c\u3001\u4f5c\u6210\u3055\u308c\u305f\u30b0\u30e9\u30d5\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30de\u30b7\u30f3\u4e0a\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30b7\u30a7\u30fc\u30c0\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,i.jsx)(n.p,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u4f5c\u696d\u3057\u3066\u3044\u308b\u3068\u304d\u3001\u4f5c\u6210\u3055\u308c\u305f\u30b0\u30e9\u30d5\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3001\u30d7\u30ec\u30d3\u30e5\u30fc\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30bb\u30c3\u30c8\u306b\u307e\u3068\u3081\u3089\u308c\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u30ed\u30fc\u30ab\u30eb\u306e IndexedDB \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001\u30da\u30fc\u30b8\u306e\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3092\u307e\u305f\u3044\u3067\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4e00\u8cab\u3057\u3066\u4fdd\u6301\u3055\u308c\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d6\u30e9\u30a6\u30b6\u30c7\u30fc\u30bf\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u4e0a\u306e2\u3064\u306e\u7570\u306a\u308b\u30d6\u30e9\u30a6\u30b6\u304c\u7570\u306a\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6301\u3064\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u30ed\u30fc\u30ab\u30eb\u306e\u30cf\u30fc\u30c9\u30c9\u30e9\u30a4\u30d6\u306b\u4fdd\u5b58\u3057\u3066\u3001\u5f8c\u3067\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,i.jsx)(n.a,{href:"/shader-editor/window-layout/inspector-pane",children:"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30c3\u30af",children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30c3\u30af"}),"\n",(0,i.jsx)(n.p,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u4f5c\u6210\u3057\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30c3\u30af\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u30d1\u30c3\u30af\u306b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b0\u30e9\u30d5\u3084\u30ce\u30fc\u30c9\u306f\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u751f\u6210\u3055\u308c\u305f\u30b7\u30a7\u30fc\u30c0\u30fc\u30b3\u30fc\u30c9\u3068\u30d1\u30e9\u30e1\u30fc\u30bf\u5024\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,i.jsx)(n.a,{href:"/shader-editor/window-layout/inspector-pane",children:"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);