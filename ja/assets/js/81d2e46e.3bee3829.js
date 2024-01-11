"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5332],{1924:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(85893),r=n(11151);const i={title:"Sprite",layout:"usermanual-page.hbs",sidebar_position:13},a=void 0,l={id:"user-manual/assets/sprites",title:"Sprite",description:"\u30b9\u30d7\u30e9\u30a4\u30c8 (Sprite) \u306f\u3001\u30b7\u30fc\u30f3\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u304d\u308b2D\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3067\u3059\u3002Sprite\u30a2\u30bb\u30c3\u30c8\u306f\u3001 Texture Atlas\u3078\u306e\u53c2\u7167\u3068\u3001\u305d\u306e\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3067\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u53d6\u308a\u51fa\u3057\u305f\u5358\u4e00\u306e\u753b\u50cf\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u4ed6\u3001\u30d5\u30ea\u30c3\u30d7\u30d6\u30c3\u30af\u30b9\u30bf\u30a4\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3(\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u8907\u6570\u306e\u30d5\u30ec\u30fc\u30e0)\u3092\u8868\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/sprites.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/sprites",permalink:"/ja/user-manual/assets/sprites",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/sprites.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Sprite",layout:"usermanual-page.hbs",sidebar_position:13},sidebar:"userManualSidebar",previous:{title:"Shader",permalink:"/ja/user-manual/assets/shader"},next:{title:"Template",permalink:"/ja/user-manual/assets/templates"}},u={},c=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u306e\u5358\u4f4d (Pixels Per Unit)",id:"\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u306e\u5358\u4f4d-pixels-per-unit",level:3},{value:"\u63cf\u753b\u30e2\u30fc\u30c9 (Render Mode)",id:"\u63cf\u753b\u30e2\u30fc\u30c9-render-mode",level:3},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9 (Texture Atlas)",id:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9-texture-atlas",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\u30b9\u30d7\u30e9\u30a4\u30c8 (Sprite) \u306f\u3001\u30b7\u30fc\u30f3\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u304d\u308b2D\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3067\u3059\u3002Sprite\u30a2\u30bb\u30c3\u30c8\u306f\u3001 ",(0,t.jsx)(s.a,{href:"/user-manual/assets/texture-atlas",children:"Texture Atlas"}),"\u3078\u306e\u53c2\u7167\u3068\u3001\u305d\u306e\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3067\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u53d6\u308a\u51fa\u3057\u305f\u5358\u4e00\u306e\u753b\u50cf\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u4ed6\u3001\u30d5\u30ea\u30c3\u30d7\u30d6\u30c3\u30af\u30b9\u30bf\u30a4\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3(\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u8907\u6570\u306e\u30d5\u30ec\u30fc\u30e0)\u3092\u8868\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"/images/user-manual/assets/sprites/sprites.jpg",alt:"Sprites"})}),"\n",(0,t.jsx)(s.h3,{id:"\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u306e\u5358\u4f4d-pixels-per-unit",children:"\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u306e\u5358\u4f4d (Pixels Per Unit)"}),"\n",(0,t.jsxs)(s.p,{children:["PlayCanvas\u306e\u30b7\u30fc\u30f3\u5185\u3067\u30011\u5358\u4f4d\u6bce\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u308b\u30b9\u30d7\u30e9\u30a4\u30c8\u30a4\u30e1\u30fc\u30b8\u306e\u30d4\u30af\u30bb\u30eb\u6570\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001 ",(0,t.jsx)(s.code,{children:"pixelsPerUnit"})," \u304c1\u3067\u30b9\u30d7\u30e9\u30a4\u30c8\u304c32x32\u306e\u5834\u5408\u3001\u30b7\u30fc\u30f3\u5185\u3067\u63cf\u753b\u3055\u308c\u308b\u3068\u6a2a\u5e45\u3068\u9ad8\u3055\u304c32\u30e6\u30cb\u30c3\u30c8\u306b\u306a\u308a\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001",(0,t.jsx)(s.em,{children:"Simple"}),"\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u306f ",(0,t.jsx)(s.code,{children:"pixelsPerUnit"})," \u304c100\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001100x100\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u30b7\u30fc\u30f3\u5185\u30671\u30e6\u30cb\u30c3\u30c8\u306e\u5e45/\u9ad8\u3055\u306b\u306a\u308a\u307e\u3059\u3002\n\xa0"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Sliced"})," \u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001\u65e2\u5b9a\u3067\u306f ",(0,t.jsx)(s.code,{children:"pixelsPerUnit"})," \u306e\u5024\u306f1\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u901a\u5e38\u3001\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306eScreen\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4e00\u90e8\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u30011\u3064\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u30d4\u30af\u30bb\u30eb\u306f1\u3064\u306e\u753b\u9762\u30d4\u30af\u30bb\u30eb\u306b\u30de\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h3,{id:"\u63cf\u753b\u30e2\u30fc\u30c9-render-mode",children:"\u63cf\u753b\u30e2\u30fc\u30c9 (Render Mode)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Simple - \u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u30dc\u30fc\u30c0\u30fc\u5024\u3092\u4f7f\u7528\u3057\u306a\u3044"}),"\n",(0,t.jsxs)(s.li,{children:["Sliced - \u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u30dc\u30fc\u30c0\u30fc\u5024\u3092\u4f7f\u7528\u3057\u3066",(0,t.jsx)(s.a,{href:"/user-manual/2D/9-slicing",children:"9\u30b9\u30e9\u30a4\u30b9"}),"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3044\u3001\u4f38\u7e2e\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["Tiled - \u30b9\u30d7\u30e9\u30a4\u30c8\u306f\u30dc\u30fc\u30c0\u30fc\u5024\u3092\u4f7f\u7528\u3057\u3066",(0,t.jsx)(s.a,{href:"/user-manual/2D/9-slicing",children:"9\u30b9\u30e9\u30a4\u30b9"}),"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3044\u3001\u30bf\u30a4\u30ea\u30f3\u30b0\u3057\u307e\u3059"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9-texture-atlas",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9 (Texture Atlas)"}),"\n",(0,t.jsx)(s.p,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u304c\u53c2\u7167\u3059\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u30a2\u30bb\u30c3\u30c8"})]})}function o(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var t=n(67294);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);