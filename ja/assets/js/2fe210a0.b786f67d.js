"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1678],{90097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manual/editor/version-control/checkpoints","title":"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8","description":"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u7279\u5b9a\u306e\u6642\u9593\u70b9\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3067\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5b8c\u5168\u306a\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u542b\u3093\u3067\u3044\u308b\u305f\u3081\u3001\u5c06\u6765\u7684\u306b\u3044\u3064\u3067\u3082\u3053\u306e\u72b6\u614b\u3092\u5fa9\u5143\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u4ed6\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u306e \u30b3\u30df\u30c3\u30c8 \u3068\u4f3c\u3066\u3044\u307e\u3059\u3002\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u5165\u529b\u3057\u305f\u4e00\u610f\u306eID\u756a\u53f7\u3068\u8aac\u660e\u6587\u306b\u3088\u3063\u3066\u8b58\u5225\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/editor/version-control/checkpoints.md","sourceDirName":"user-manual/editor/version-control","slug":"/user-manual/editor/version-control/checkpoints","permalink":"/ja/user-manual/editor/version-control/checkpoints","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/version-control/checkpoints.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406","permalink":"/ja/user-manual/editor/version-control/"},"next":{"title":"\u30d6\u30e9\u30f3\u30c1","permalink":"/ja/user-manual/editor/version-control/branches"}}');var i=s(74848),r=s(28453);const c={title:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8",sidebar_position:1},a=void 0,o={},d=[{value:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u4f5c\u6210",id:"creating-a-checkpoint",level:2},{value:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u5fa9\u5143",id:"restoring-a-checkpoint",level:2},{value:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u307e\u3067\u306e\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8",id:"hard-reset-to-a-checkpoint",level:2}];function l(e){const n={em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u7279\u5b9a\u306e\u6642\u9593\u70b9\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3067\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5b8c\u5168\u306a\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u542b\u3093\u3067\u3044\u308b\u305f\u3081\u3001\u5c06\u6765\u7684\u306b\u3044\u3064\u3067\u3082\u3053\u306e\u72b6\u614b\u3092\u5fa9\u5143\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u4ed6\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u306e ",(0,i.jsx)(n.em,{children:"\u30b3\u30df\u30c3\u30c8"})," \u3068\u4f3c\u3066\u3044\u307e\u3059\u3002\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u5165\u529b\u3057\u305f\u4e00\u610f\u306eID\u756a\u53f7\u3068\u8aac\u660e\u6587\u306b\u3088\u3063\u3066\u8b58\u5225\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Checkpoint",src:s(21307).A+"",width:"882",height:"262"})}),"\n",(0,i.jsx)(n.p,{children:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u72b6\u614b\u306e\u6c38\u4e45\u7684\u306a\u8a18\u9332\u3067\u3042\u308a\u3001\u30d6\u30e9\u30f3\u30c1\u3084\u5909\u66f4\u306e\u30de\u30fc\u30b8\u306b\u4f7f\u7528\u3055\u308c\u308b\u30b0\u30e9\u30d5\u306e\u4e00\u90e8\u3092\u5f62\u6210\u3057\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u4e00\u5ea6\u4f5c\u6210\u3055\u308c\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u524a\u9664\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u308c\u306f\u3001\u4e00\u5ea6\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3068\u3057\u3066\u5909\u66f4\u3092\u30b3\u30df\u30c3\u30c8\u3057\u305f\u5834\u5408\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5c65\u6b74\u306b\u6c38\u4e45\u306b\u4fdd\u5b58\u3055\u308c\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-checkpoint",children:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u4f5c\u6210"}),"\n",(0,i.jsx)(n.p,{children:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u3001 \u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30d1\u30cd\u30eb\u304b\u3089\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VC Panel",src:s(47237).A+"",width:"1890",height:"1208"})}),"\n",(0,i.jsx)(n.p,{children:"New Checkpoint\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u304c\u958b\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8 Ctrl + S (OS X\u306e\u5834\u5408\u3001Cmd + S) \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Checkpoint",src:s(95914).A+"",width:"1898",height:"1208"})}),"\n",(0,i.jsx)(n.h2,{id:"restoring-a-checkpoint",children:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u5fa9\u5143"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Restore Checkpoint",src:s(89868).A+"",width:"1897",height:"1218"})}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4ee5\u524d\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u72b6\u614b\u306b\u5fa9\u5143\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30d1\u30cd\u30eb\u304b\u3089\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30d1\u30cd\u30eb\u3092\u958b\u304d\u3001\u5fa9\u5143\u3057\u305f\u3044\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u898b\u3064\u3051\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u5fa9\u5143\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6ce8\u610f:\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u5fa9\u5143\u3059\u308b\u3068\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u306e\u5909\u66f4\u304c\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u304c\u3001PlayCanvas\u3067\u306f\u30d6\u30e9\u30f3\u30c1\u3092\u660e\u793a\u7684\u306b\u4f5c\u6210\u3057\u306a\u3044\u9650\u308a\u3001\u30d6\u30e9\u30f3\u30c1\u3092\u8a31\u53ef\u3057\u307e\u305b\u3093\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u5fa9\u5143\u3057\u3066\u304b\u3089\u65b0\u3057\u3044\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u306f\u30d6\u30e9\u30f3\u30c1\u5185\u306e\u6700\u65b0\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u5b50\u3068\u306a\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Restore checkpoint applied",src:s(93056).A+"",width:"1700",height:"548"})}),"\n",(0,i.jsx)(n.h2,{id:"hard-reset-to-a-checkpoint",children:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u307e\u3067\u306e\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8"}),"\n",(0,i.jsx)(n.p,{children:"\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u9078\u629e\u3057\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u4ee5\u964d\u306e\u3059\u3079\u3066\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30de\u30fc\u30b8\u3092\u300c\u5143\u306b\u623b\u3059\u300d\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059(\u304a\u305d\u3089\u304f\u30d6\u30e9\u30f3\u30c1\u304c\u9593\u9055\u3063\u3066\u30de\u30fc\u30b8\u3055\u308c\u305f\u304b\u3001\u30de\u30fc\u30b8\u3092\u5225\u306e\u65b9\u6cd5\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306a\u3069)\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u306f\u3001\u6b21\u306e\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u524a\u9664\u3055\u308c\u308b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u30d6\u30e9\u30f3\u30c1\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u306a\u3044"}),"\n",(0,i.jsx)(n.li,{children:"\u524a\u9664\u3055\u308c\u308b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u304c\u30d6\u30e9\u30f3\u30c1\u306e\u30de\u30fc\u30b8\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u3066\u3044\u306a\u3044"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6ce8\u610f:\u524a\u9664\u3055\u308c\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u5fa9\u5143\u3067\u304d\u307e\u305b\u3093\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u3092\u884c\u3046\u306b\u306f\u3001\u30d1\u30cd\u30eb\u3092\u958b\u304d\u3001\u30ea\u30bb\u30c3\u30c8\u3057\u305f\u3044\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u898b\u3064\u3051\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(53488).A+"",width:"2134",height:"1224"})}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306b 'hard reset' \u3068\u5165\u529b\u3057\u3066\u3001\u9078\u629e\u3057\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u4ee5\u964d\u306e\u3059\u3079\u3066\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(44503).A+"",width:"2140",height:"1220"})}),"\n",(0,i.jsx)(n.p,{children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3057\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},21307:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/checkpoint-fbe8c007f5d89bc91eebc5ec60beef8d.jpg"},95914:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-checkpoint-3cfddf922ba322a654aa21bf228d4a4a.jpg"},44503:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/hard-reset-confirm-9b0a854bdb69fa31f554b622b995d42a.png"},53488:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/hard-reset-ac574ba6614c1b0905da248891ab622e.png"},93056:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/restore-checkpoint-applied-982481eeda593187119ef24a013c693d.png"},89868:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/restore-checkpoint-01ba45d06968772eac2e2dbe704aecec.jpg"},47237:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vc-panel-df4b40936377a374134a21582245078e.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);