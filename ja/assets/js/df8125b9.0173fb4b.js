"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3922],{28600:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=s(85893),t=s(11151);const c={title:"Managing Scenes",sidebar_position:3},r=void 0,i={id:"user-manual/scenes/managing-scenes",title:"Managing Scenes",description:"\u30b7\u30fc\u30f3\u306e\u7ba1\u7406\u306f\u3001\u30b7\u30fc\u30f3\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u958b\u3044\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scenes/managing-scenes.md",sourceDirName:"user-manual/scenes",slug:"/user-manual/scenes/managing-scenes",permalink:"/ja/user-manual/scenes/managing-scenes",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/managing-scenes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Managing Scenes",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Sprite",permalink:"/ja/user-manual/scenes/components/sprite"},next:{title:"\u30b7\u30fc\u30f3\u306e\u30ed\u30fc\u30c9",permalink:"/ja/user-manual/scenes/loading-scenes"}},o={},u=[];function l(e){const n={img:"img",p:"p",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u30b7\u30fc\u30f3\u306e\u7ba1\u7406\u306f\u3001\u30b7\u30fc\u30f3\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u958b\u3044\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u30b7\u30fc\u30f3\u30c0\u30a4\u30a2\u30ed\u30b0\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u306e 'Scene' \u30e1\u30cb\u30e5\u30fc\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/scenes/managing-scenes/scenes-menu.jpg",alt:"Scenes Menu"})}),"\n",(0,a.jsx)(n.p,{children:"\u3042\u308b\u3044\u306f3D\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u5185\u306e\u5de6\u4e0a\u306b\u3042\u308b\u30b7\u30fc\u30f3\u30e1\u30cb\u30e5\u30fc\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/scenes/managing-scenes/scenes-viewport.jpg",alt:"Scenes Viewport"})}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30fc\u30f3\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/scenes/managing-scenes/scenes.jpg",alt:"Scenes"})}),"\n",(0,a.jsx)(n.p,{children:'"ADD NEW SCENE" \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u65b0\u3057\u3044\u30b7\u30fc\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u30b7\u30fc\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u3001\u5404\u30b7\u30fc\u30f3\u306e\u53f3\u5074\u306b\u3042\u308b\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b7\u30fc\u30f3\u3092\u8907\u88fd\u3057\u305f\u308a\u524a\u9664\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u5de6\u5074\u306e\u30d0\u30ca\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30a2\u30d7\u30ea\u3092\u516c\u958b\u3059\u308b\u3068\u304d\u3084\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u3068\u304d\u306b\u6700\u521d\u306b\u8aad\u307f\u8fbc\u307e\u308c\u308b\u30b7\u30fc\u30f3\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u300c\u30ec\u30d9\u30eb\u300d\u3068\u8003\u3048\u3066\u304f\u3060\u3055\u3044\u3002'})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var a=s(67294);const t={},c=a.createContext(t);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);