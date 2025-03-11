"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[62998],{28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var n=a(96540);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}},58179:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/assets/models/index","title":"Importing 3D Models","description":"3D\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001Blender\u30013D Studio Max\u3001Maya\u306a\u3069\u306e3D\u30e2\u30c7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30b7\u30fc\u30f3\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001PlayCanvas\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/models/index.md","sourceDirName":"user-manual/assets/models","slug":"/user-manual/assets/models/","permalink":"/ja/user-manual/assets/models/","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/models/index.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Importing 3D Models","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8","permalink":"/ja/user-manual/assets/import-pipeline/import-hierarchy"},"next":{"title":"3D\u30e2\u30c7\u30eb\u306e\u5927\u304d\u3055\u306e\u5358\u4f4d","permalink":"/ja/user-manual/assets/models/units"}}');var t=a(74848),r=a(28453);const l={title:"Importing 3D Models",sidebar_position:4},i=void 0,o={},d=[];function u(e){const s={a:"a",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["3D\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001",(0,t.jsx)(s.a,{href:"https://www.blender.org/",children:"Blender"}),"\u30013D Studio Max\u3001Maya\u306a\u3069\u306e",(0,t.jsx)(s.a,{href:"/user-manual/assets/models/building",children:"3D\u30e2\u30c7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\u304b\u3089\u30b7\u30fc\u30f3\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001PlayCanvas\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"PlayCanvas\u306f\u591a\u69d8\u306a\u5f62\u5f0f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001GLB\u3001FBX\u3001COLLADA\u3001obj\u306a\u3069\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u6700\u9ad8\u306e\u7d50\u679c\u3092\u5f97\u308b\u305f\u3081\u306b\u306f\u3001GLB\u5f62\u5f0f\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["Uploading one of these files will create a ",(0,t.jsx)(s.a,{href:"/user-manual/glossary#source-asset",children:"Source Asset"})," of type 'Model' and will produce several ",(0,t.jsx)(s.a,{href:"/user-manual/glossary#target-asset",children:"Target Assets"})," including a '",(0,t.jsx)(s.a,{href:"/user-manual/assets/types/template/",children:"Template"}),"' with the model hierarchy and 'Render' assets. You can add an instance of the 'Template' in your game."]}),"\n",(0,t.jsx)(s.p,{children:"\u8a73\u3057\u304f\u306f\u4ee5\u4e0b\u3092\u3054\u89a7\u304f\u3060\u3055\u3044:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/user-manual/assets/models/building",children:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u4f5c\u6210"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/user-manual/assets/models/exporting",children:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/user-manual/assets/import-pipeline/import-hierarchy/",children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/user-manual/editor/templates/",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4f7f\u7528"})}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);