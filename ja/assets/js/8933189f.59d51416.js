"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4118],{90659:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-manual/2D/texture-packing","title":"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0","description":"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u3068\u306f","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/2D/texture-packing.md","sourceDirName":"user-manual/2D","slug":"/user-manual/2D/texture-packing","permalink":"/ja/user-manual/2D/texture-packing","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/2D/texture-packing.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"9\u30b9\u30e9\u30a4\u30b9","permalink":"/ja/user-manual/2D/slicing"},"next":{"title":"\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9","permalink":"/ja/user-manual/user-interface/"}}');var t=s(74848),i=s(28453);const l={title:"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0",sidebar_position:3},a=void 0,c={},d=[{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u3068\u306f",id:"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u3068\u306f",level:2},{value:"\u30c4\u30fc\u30eb",id:"\u30c4\u30fc\u30eb",level:2},{value:"TexturePacker Online (\u7121\u6599)",id:"texturepacker-online-\u7121\u6599",level:3},{value:"Texture Packer \u30c4\u30fc\u30eb",id:"texture-packer-\u30c4\u30fc\u30eb",level:3},{value:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u5185\u3067\u306e\u30d5\u30ec\u30fc\u30e0\u4f5c\u6210",id:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u5185\u3067\u306e\u30d5\u30ec\u30fc\u30e0\u4f5c\u6210",level:2}];function u(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u3068\u306f",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u3068\u306f"}),"\n",(0,t.jsxs)(n.p,{children:["\u30b9\u30d7\u30e9\u30a4\u30c8\u3084UI\u753b\u50cf\u3092\u5225\u3005\u306e\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u30d0\u30f3\u30c9\u30eb\u3059\u308b\u3053\u3068\u306f\u4e00\u822c\u7684\u3067\u3059\u3002\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u306f\u3053\u308c\u3089\u306e\u5225\u3005\u306e\u753b\u50cf\u3092",(0,t.jsx)(n.a,{href:"/user-manual/assets/types/texture-atlas/",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9"}),"\u306b\u7d71\u5408\u3059\u308b\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u306b\u306f\u4ee5\u4e0b\u306e\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u591a\u6570\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u306f\u306a\u304f\u3001\u5358\u4e00\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u9ad8\u901f\u306a\u30ed\u30fc\u30c9\u304c\u53ef\u80fd\u3002"}),"\n",(0,t.jsx)(n.li,{children:"1\u3064\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306a\u306e\u3067\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u5358\u4e00\u306e\u63cf\u753b\u30b3\u30fc\u30eb\u306b\u30d0\u30c3\u30c1\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30c4\u30fc\u30eb",children:"\u30c4\u30fc\u30eb"}),"\n",(0,t.jsx)(n.p,{children:"PlayCanvas\u3068\u4e92\u63db\u6027\u306e\u3042\u308b\u3044\u304f\u3064\u304b\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u30c4\u30fc\u30eb\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"texturepacker-online-\u7121\u6599",children:"TexturePacker Online (\u7121\u6599)"}),"\n",(0,t.jsxs)(n.p,{children:["(",(0,t.jsx)(n.a,{href:"https://www.codeandweb.com/tp-online",children:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"TexturePacker Online\u306f\u30d6\u30e9\u30a6\u30b6\u3067\u52d5\u4f5c\u3059\u308b\u7121\u6599\u306e\u30c4\u30fc\u30eb\u3067\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30d1\u30c3\u30ad\u30f3\u30b0\u306e\u57fa\u672c\u6a5f\u80fd\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(72658).A+"",width:"1852",height:"800"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u3092\u30af\u30ea\u30a2\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8/UI\u30a4\u30e1\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u51fa\u529b\u5f62\u5f0f\u306fJSON hash\u306e\u307e\u307e\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u306e.png\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30d5\u30ec\u30fc\u30e0\u30c7\u30fc\u30bf\u306e.json\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"texture-packer-\u30c4\u30fc\u30eb",children:"Texture Packer \u30c4\u30fc\u30eb"}),"\n",(0,t.jsxs)(n.p,{children:["(",(0,t.jsx)(n.a,{href:"https://www.codeandweb.com/texturepacker",children:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["TexturePacker\u306f\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u308b\u6709\u6599\u30c4\u30fc\u30eb\u3067\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u4f5c\u6210\u306b\u591a\u304f\u306e\u6a5f\u80fd\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u30b9\u30d7\u30e9\u30a4\u30c8/UI\u753b\u50cf\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u3064\u3044\u3066\u306e\u3088\u308a\u591a\u304f\u306e\u5236\u5fa1\u6a5f\u80fd\u3084",(0,t.jsx)(n.a,{href:"/user-manual/2D/slicing/",children:"9\u30b9\u30e9\u30a4\u30b9"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(96765).A+"",width:"2158",height:"1280"})}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u672c\u7684\u306a\u624b\u9806:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8/UI\u30a4\u30e1\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u51fa\u529b\u30d5\u30a1\u30a4\u30eb -> PlayCanvas\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30b7\u30fc\u30c8\u3092\u767a\u884c\u3059\u308b\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u3068JSON\u30d5\u30ec\u30fc\u30e0\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u5185\u3067\u306e\u30d5\u30ec\u30fc\u30e0\u4f5c\u6210",children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u5185\u3067\u306e\u30d5\u30ec\u30fc\u30e0\u4f5c\u6210"}),"\n",(0,t.jsxs)(n.p,{children:["\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u3001",(0,t.jsx)(n.a,{href:"/user-manual/assets/types/texture-atlas/",children:"Texture Atlas\u30a2\u30bb\u30c3\u30c8"}),"\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u3092\u958b\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(55780).A+"",width:"2466",height:"1274"})}),"\n",(0,t.jsx)(n.p,{children:"'Upload Texture Packer JSON'\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001JSON\u30d5\u30ec\u30fc\u30e0\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001Sprite\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u958b\u767a\u4e2d\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3068\u30d5\u30ec\u30fc\u30e0\u540d\u304c\u540c\u3058\u3067\u3042\u308c\u3070\u3001\u65b0\u3057\u3044\u30d5\u30ec\u30fc\u30e0\u30c7\u30fc\u30bf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u969b\u306b\u4ee5\u4e0b\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u524a\u9664\u3055\u308c\u305f\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u3001\u305d\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30a2\u30c8\u30e9\u30b9\u306b\u8ffd\u52a0\u3055\u308c\u305f\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u3001\u30ea\u30b9\u30c8\u306e\u672b\u5c3e\u306b\u65b0\u3057\u3044\u30d5\u30ec\u30fc\u30e0\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u65e2\u5b58\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u3001\u305d\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},55780:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/playcanvas-sprite-editor-cec39b4c065805083518d06c88148e81.png"},72658:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/texture-packer-online-steps-fb5c80b5de6e9af5c11a7fe53557f066.png"},96765:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/texture-packer-tool-steps-3d737300279a04b4105b43ea2d91e5f0.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);