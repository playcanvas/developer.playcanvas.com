"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[536],{31107:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=r(74848),n=r(28453);const i={title:"Sprite"},d=void 0,c={id:"user-manual/scenes/components/sprite",title:"Sprite",description:"Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001Sprite\u30a2\u30bb\u30c3\u30c8\u3092\u30b7\u30fc\u30f3\u306b\u8868\u793a\u3055\u305b\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3055\u305b\u308b\u3082\u306e\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scenes/components/sprite.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/sprite",permalink:"/ja/user-manual/scenes/components/sprite",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/sprite.md",tags:[],version:"current",frontMatter:{title:"Sprite"},sidebar:"userManualSidebar",previous:{title:"Sound",permalink:"/ja/user-manual/scenes/components/sound"},next:{title:"Managing Scenes",permalink:"/ja/user-manual/scenes/managing-scenes"}},l={},h=[{value:"\u30b7\u30f3\u30d7\u30eb\u30b9\u30d7\u30e9\u30a4\u30c8 (Simple Sprites)",id:"\u30b7\u30f3\u30d7\u30eb\u30b9\u30d7\u30e9\u30a4\u30c8-simple-sprites",level:2},{value:"\u30b7\u30f3\u30d7\u30ebSprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30b7\u30f3\u30d7\u30ebsprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30d7\u30e9\u30a4\u30c8",id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30d7\u30e9\u30a4\u30c8",level:2},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",level:2}];function a(e){const s={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001",(0,t.jsx)(s.a,{href:"/user-manual/assets/types/sprite",children:"Sprite\u30a2\u30bb\u30c3\u30c8"}),"\u3092\u30b7\u30fc\u30f3\u306b\u8868\u793a\u3055\u305b\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3055\u305b\u308b\u3082\u306e\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u30b7\u30f3\u30d7\u30eb\u30bf\u30a4\u30d7\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u306e2\u7a2e\u985e\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u30b7\u30f3\u30d7\u30eb\u30b9\u30d7\u30e9\u30a4\u30c8-simple-sprites",children:"\u30b7\u30f3\u30d7\u30eb\u30b9\u30d7\u30e9\u30a4\u30c8 (Simple Sprites)"}),"\n",(0,t.jsx)(s.p,{children:"\u30b7\u30f3\u30d7\u30ebSprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u306e\u5358\u4e00\u306e\u30d5\u30ec\u30fc\u30e0\u3092\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Simple Sprite",src:r(13767).A+"",width:"628",height:"605"})}),"\n",(0,t.jsx)(s.h2,{id:"\u30b7\u30f3\u30d7\u30ebsprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30b7\u30f3\u30d7\u30ebSprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"}),(0,t.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(s.td,{children:"\u30b7\u30f3\u30d7\u30eb\u307e\u305f\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sprite"}),(0,t.jsx)(s.td,{children:"\u8868\u793a\u3059\u308bSprite\u30a2\u30bb\u30c3\u30c8\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Frame"}),(0,t.jsx)(s.td,{children:"\u8868\u793a\u3059\u308b\u30b9\u30d7\u30e9\u30a4\u30c8\u306e\u30d5\u30ec\u30fc\u30e0\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Color"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u306b\u9069\u7528\u3059\u308b\u8272\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Opacity"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u306e\u900f\u660e\u5ea6\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Flip X"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u6c34\u5e73\u65b9\u5411\u306b\u53cd\u8ee2\u3055\u305b\u308b\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Flip Y"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u5782\u76f4\u65b9\u5411\u306b\u53cd\u8ee2\u3055\u305b\u308b\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30ec\u30a4\u30e4\u30fc\u306e\u4e00\u89a7 (Layers)"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u30ec\u30a4\u30e4\u30fc\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Draw Order"}),(0,t.jsx)(s.td,{children:"\u3053\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u9806\u5e8f\u3002\u6570\u5024\u304c\u5c0f\u3055\u3044\u3082\u306e\u304b\u3089\u5148\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Batch Group"}),(0,t.jsxs)(s.td,{children:["\u3053\u306e\u30e2\u30c7\u30eb\u304c\u5c5e\u3059\u308b\u30d0\u30c3\u30c1\u30b0\u30eb\u30fc\u30d7\u3002\u305d\u308c\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(s.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30d7\u30e9\u30a4\u30c8",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30d7\u30e9\u30a4\u30c8"}),"\n",(0,t.jsx)(s.p,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u7570\u306a\u308bSprite\u30a2\u30bb\u30c3\u30c8\u3092\u518d\u751f\u3067\u304d\u308b\u8907\u6570\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u304c\u6dfb\u4ed8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Animated Sprite",src:r(94522).A+"",width:"628",height:"557"})}),"\n",(0,t.jsx)(s.h2,{id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"}),(0,t.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(s.td,{children:"\u30b7\u30f3\u30d7\u30eb\u307e\u305f\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Frame"}),(0,t.jsx)(s.td,{children:"\u8868\u793a\u3059\u308b\u30b9\u30d7\u30e9\u30a4\u30c8\u306e\u30d5\u30ec\u30fc\u30e0\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Color"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u306b\u9069\u7528\u3059\u308b\u8272\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Opacity"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u306e\u900f\u660e\u5ea6\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Flip X"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u6c34\u5e73\u65b9\u5411\u306b\u53cd\u8ee2\u3055\u305b\u308b\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Flip Y"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u5782\u76f4\u65b9\u5411\u306b\u53cd\u8ee2\u3055\u305b\u308b\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30b9\u30d4\u30fc\u30c9"}),(0,t.jsx)(s.td,{children:"\u3053\u306eSprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u518d\u751f\u3055\u308c\u308b\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u901f\u5ea6\u306b\u9069\u7528\u3055\u308c\u308b\u4e57\u6570\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30ec\u30a4\u30e4\u30fc\u306e\u4e00\u89a7 (Layers)"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u30ec\u30a4\u30e4\u30fc\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Draw Order"}),(0,t.jsx)(s.td,{children:"\u3053\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u9806\u5e8f\u3002\u6570\u5024\u304c\u5c0f\u3055\u3044\u3082\u306e\u304b\u3089\u5148\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u81ea\u52d5\u518d\u751f (Auto Play)"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u3092\u6709\u52b9\u306b\u3057\u305f\u3068\u304d\u306b\u518d\u751f\u3059\u308b\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u540d\u524d\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"}),(0,t.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u540d\u524d"}),(0,t.jsx)(s.td,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306e\u540d\u524d\u3002\u500b\u3005\u306e\u30af\u30ea\u30c3\u30d7\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30eb\u30fc\u30d7 (Loop)"}),(0,t.jsx)(s.td,{children:"true\u306e\u5834\u5408\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30af\u30ea\u30c3\u30d7\u306f\u7d42\u70b9\u306b\u5230\u9054\u3059\u308b\u3068\u59cb\u70b9\u306b\u623b\u308a\u307e\u3059\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"FPS"}),(0,t.jsx)(s.td,{children:"\u79d2\u9593\u30d5\u30ec\u30fc\u30e0\u6570\u3067\u518d\u751f\u3055\u308c\u308b\u30af\u30ea\u30c3\u30d7\u306e\u901f\u5ea6\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sprite"}),(0,t.jsx)(s.td,{children:"\u3053\u306e\u30af\u30ea\u30c3\u30d7\u3092\u518d\u751f\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308bSprite\u30a2\u30bb\u30c3\u30c8\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/user-manual/scenes/components/script",children:"Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.SpriteComponent.html",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},94522:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/component-sprite-animated-6a3dab1a62cad01061bdb17bc1ad64eb.png"},13767:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/component-sprite-simple-6cdabac71e39b8589b542c97fc392a7a.png"},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);