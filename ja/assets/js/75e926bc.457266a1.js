"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6742],{53589:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(85893),d=s(11151);const r={title:"Sound",layout:"usermanual-page.hbs",sidebar_position:19},i=void 0,c={id:"user-manual/packs/components/sound",title:"Sound",description:"Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u306e\u518d\u751f\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/packs/components/sound.md",sourceDirName:"user-manual/packs/components",slug:"/user-manual/packs/components/sound",permalink:"/ja/user-manual/packs/components/sound",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/packs/components/sound.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Sound",layout:"usermanual-page.hbs",sidebar_position:19},sidebar:"userManualSidebar",previous:{title:"Scrollview",permalink:"/ja/user-manual/packs/components/scrollview"},next:{title:"Sprite",permalink:"/ja/user-manual/packs/components/sprite"}},l={},o=[{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30b9\u30ed\u30c3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30b9\u30ed\u30c3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",level:2}];function a(e){const n={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u306e\u518d\u751f\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-sound.png",alt:"Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,t.jsx)(n.p,{children:'Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u30b5\u30a6\u30f3\u30c9\u306e\u518d\u751f\u3092\u62c5\u5f53\u3059\u308b "\u30b9\u30ed\u30c3\u30c8" \u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5404\u30b9\u30ed\u30c3\u30c8\u306b\u306f\u3001\u7570\u306a\u308bAudio\u30a2\u30bb\u30c3\u30c8\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u4ed6\u306e\u30b9\u30ed\u30c3\u30c8\u3068\u306f\u72ec\u7acb\u3057\u3066\u518d\u751f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'}),"\n",(0,t.jsx)(n.p,{children:'"ADD SLOT" \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u65b0\u3057\u3044\u30b9\u30ed\u30c3\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u5404\u30b9\u30ed\u30c3\u30c8\u306e\u30d8\u30c3\u30c0\u30fc\u306b\u3042\u308b\u30b4\u30df\u7bb1\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30ed\u30c3\u30c8\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002'}),"\n",(0,t.jsx)(n.p,{children:"Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d1\u30cd\u30eb\u306e\u53f3\u4e0a\u306b\u3042\u308b\u30c8\u30b0\u30eb\u3092\u4f7f\u7528\u3057\u3066\u6709\u52b9\u5316\u307e\u305f\u306f\u7121\u52b9\u5316\u3067\u304d\u307e\u3059\u3002\u6709\u52b9\u306b\u3057\u305f\u5834\u5408\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u300cAuto Play\u300d\u306b\u30de\u30fc\u30af\u3055\u308c\u305f\u30b9\u30ed\u30c3\u30c8\u3092\u518d\u751f\u3057\u307e\u3059\u3002\u305d\u306e\u4ed6\u306e\u30b9\u30ed\u30c3\u30c8\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u518d\u751f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Positional"}),(0,t.jsx)(n.td,{children:"\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f3D\u7a7a\u9593\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u304b\u3089\u518d\u751f\u3059\u308b\u3088\u3046\u306bAudio\u30a2\u30bb\u30c3\u30c8\u3092\u518d\u751f\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Volume"}),(0,t.jsx)(n.td,{children:"Audio\u30a2\u30bb\u30c3\u30c8\u3092\u518d\u751f\u3059\u308b\u3068\u304d\u306b\u3001\u5404\u30b9\u30ed\u30c3\u30c8\u306e\u97f3\u91cf\u306b\u4e57\u7b97\u3055\u308c\u308b\u97f3\u91cf\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pitch"}),(0,t.jsx)(n.td,{children:"Audio\u30a2\u30bb\u30c3\u30c8\u3092\u518d\u751f\u3059\u308b\u3068\u304d\u306b\u3001\u5404\u30b9\u30ed\u30c3\u30c8\u306e\u30d4\u30c3\u30c1\u306b\u4e57\u7b97\u3055\u308c\u308b\u30d4\u30c3\u30c1\u3002\u5024\u304c1\u306e\u5834\u5408\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u306f\u5143\u306e\u30d4\u30c3\u30c1\u3067\u518d\u751f\u3055\u308c\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ref Distance"}),(0,t.jsx)(n.td,{children:"\u30b5\u30a6\u30f3\u30c9\u30bd\u30fc\u30b9\u304c\u30ea\u30b9\u30ca\u30fc\u304b\u3089\u9060\u3056\u304b\u308b\u306b\u3064\u308c\u3066\u97f3\u91cf\u3092\u6e1b\u3089\u3059\u305f\u3081\u306e\u57fa\u6e96\u8ddd\u96e2\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Max Distance"}),(0,t.jsx)(n.td,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u6e1b\u8870\u304c\u505c\u6b62\u3059\u308b\u30ea\u30b9\u30ca\u30fc\u304b\u3089\u306e\u6700\u5927\u8ddd\u96e2\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u97f3\u91cf\u304c\u3053\u306e\u8ddd\u96e2\u3067\u5fc5\u305a\u3057\u30820\u306b\u306a\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u6e1b\u8870\u304c\u505c\u6b62\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Distance Model"}),(0,t.jsx)(n.td,{children:"\u30ea\u30b9\u30ca\u30fc\u304b\u3089\u9060\u3056\u304b\u308b\u306b\u3064\u308c\u3066\u97f3\u91cf\u3092\u6e1b\u3089\u3059\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002Linear\u3001Inverse\u3001Exponential\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Roll-off Factor"}),(0,t.jsx)(n.td,{children:"\u97f3\u91cf\u6e1b\u8870\u304c\u767a\u751f\u3059\u308b\u901f\u5ea6\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30b9\u30ed\u30c3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30b9\u30ed\u30c3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"\u30b9\u30ed\u30c3\u30c8\u306e\u540d\u524d\u3002\u3053\u308c\u306f\u30b3\u30fc\u30c9\u3067\u3053\u306e\u30b9\u30ed\u30c3\u30c8\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u540d\u524d\u3067\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Asset"}),(0,t.jsx)(n.td,{children:"\u518d\u751f\u3059\u308bAudio\u30a2\u30bb\u30c3\u30c8\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Range Start"}),(0,t.jsx)(n.td,{children:"Audio\u30a2\u30bb\u30c3\u30c8\u5185\u306e\u30b5\u30a6\u30f3\u30c9\u306e\u958b\u59cb\u4f4d\u7f6e(\u79d2\u5358\u4f4d)\u3002Audio\u30a2\u30bb\u30c3\u30c8\u5168\u4f53\u3067\u306f\u306a\u304f\u3001\u4e00\u90e8\u5206\u3060\u3051\u3092\u518d\u751f\u3059\u308b\u5834\u5408\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Range Duration"}),(0,t.jsx)(n.td,{children:"Range Start\u304b\u3089\u958b\u59cb\u3057\u3066\u518d\u751f\u3059\u308b\u30b5\u30a6\u30f3\u30c9\u306e\u9577\u3055(\u79d2\u5358\u4f4d)\u3002\u4f8b\u3048\u3070\u3001\u8907\u6570\u306e\u30b5\u30a6\u30f3\u30c9\u304c\u542b\u307e\u308c\u308bAudio\u30a2\u30bb\u30c3\u30c8\u304c\u3042\u308b\u5834\u5408\u3001\u305d\u306e\u30b5\u30a6\u30f3\u30c9\u3092\u518d\u751f\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u958b\u59cb\u6642\u9593\u3068\u9577\u3055\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Auto Play"}),(0,t.jsx)(n.td,{children:"\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30ed\u30c3\u30c8\u306f\u30ed\u30fc\u30c9\u6642\u306b\u518d\u751f\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30ed\u30c3\u30c8\u3092\u518d\u751f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Overlap"}),(0,t.jsx)(n.td,{children:"\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3068\u3001\u3053\u306e\u30b9\u30ed\u30c3\u30c8\u306f\u6700\u521d\u306b\u505c\u6b62\u305b\u305a\u306b\u30b5\u30a6\u30f3\u30c9\u3092\u518d\u751f\u3057\u307e\u3059\u3002\u30aa\u30fc\u30d0\u30fc\u30e9\u30c3\u30d7\u306f\u3001\u7e70\u308a\u8fd4\u3057\u518d\u751f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30ef\u30f3\u30b7\u30e7\u30c3\u30c8\u30b5\u30a6\u30f3\u30c9\u306b\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u7834\u68c4\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30c3\u30d7\u3059\u308b\u30b5\u30a6\u30f3\u30c9\u306f\u505c\u6b62\u3057\u307e\u305b\u3093\u304c\u3001\u7d42\u4e86\u3059\u308b\u304b\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u624b\u52d5\u3067\u505c\u6b62\u3059\u308b\u3068\u505c\u6b62\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Loop"}),(0,t.jsx)(n.td,{children:"\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30ed\u30c3\u30c8\u306f\u7121\u9650\u30eb\u30fc\u30d7\u3057\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u3001\u4e00\u5ea6\u518d\u751f\u3057\u3066\u5b8c\u4e86\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Volume"}),(0,t.jsx)(n.td,{children:"\u30b9\u30ed\u30c3\u30c8\u3067\u518d\u751f\u3055\u308c\u308bAudio\u30a2\u30bb\u30c3\u30c8\u306e\u97f3\u91cf\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pitch"}),(0,t.jsx)(n.td,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u304c\u518d\u751f\u3055\u308c\u308b\u30d4\u30c3\u30c1\u3002\u5024\u304c1\u306e\u5834\u5408\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u306f\u5143\u306e\u30d4\u30c3\u30c1\u3067\u518d\u751f\u3055\u308c\u307e\u3059\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/user-manual/packs/components/script",children:"Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f",(0,t.jsx)(n.a,{href:"/api/pc.SoundComponent.html",children:"\u3053\u3061\u3089"}),"\u3067\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(67294);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);