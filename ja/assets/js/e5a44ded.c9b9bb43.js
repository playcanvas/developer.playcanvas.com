"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[43825],{28453:(n,a,e)=>{e.d(a,{R:()=>r,x:()=>l});var t=e(96540);const s={},i=t.createContext(s);function r(n){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function l(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:a},n.children)}},30319:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-manual/animation/index","title":"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3","description":"PlayCanvas\u306f\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30e2\u30c7\u30eb\u3084\u4ed6\u306e\u4efb\u610f\u306e\u30b7\u30fc\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u3001\u5f37\u529b\u306a\u72b6\u614b\u30d9\u30fc\u30b9\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3001.FBX\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30c8\u30de\u30b7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u6574\u7406\u3057\u3001\u30b7\u30fc\u30f3\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u3092\u5b9f\u884c\u6642\u306b\u7c21\u5358\u306b\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/animation/index.md","sourceDirName":"user-manual/animation","slug":"/user-manual/animation/","permalink":"/ja/user-manual/animation/","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/animation/index.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3","sidebar_position":15},"sidebar":"userManualSidebar","previous":{"title":"Multiple Render Targets","permalink":"/ja/user-manual/graphics/advanced-rendering/multiple-render-targets"},"next":{"title":"Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8","permalink":"/ja/user-manual/animation/anim-component"}}');var s=e(74848),i=e(28453);const r={title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",sidebar_position:15},l=void 0,o={},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"PlayCanvas\u3067\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210",id:"playcanvas\u3067\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210",level:3}];function u(n){const a={h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"PlayCanvas\u306f\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30e2\u30c7\u30eb\u3084\u4ed6\u306e\u4efb\u610f\u306e\u30b7\u30fc\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u3001\u5f37\u529b\u306a\u72b6\u614b\u30d9\u30fc\u30b9\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3001.FBX\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30c8\u30de\u30b7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u6574\u7406\u3057\u3001\u30b7\u30fc\u30f3\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u3092\u5b9f\u884c\u6642\u306b\u7c21\u5358\u306b\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,s.jsx)(a.p,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u306f\u3001PlayCanvas\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e3\u3064\u306e\u4e3b\u8981\u306a\u9818\u57df\u306b\u95a2\u9023\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u9818\u57df\u3092\u4e00\u7dd2\u306b\u4f7f\u7528\u3057\u3066\u3001\u30e2\u30c7\u30eb\u306e\u8907\u96d1\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u6b21\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30e6\u30fc\u30b6\u30fc\u30de\u30cb\u30e5\u30a2\u30eb\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u5404\u9818\u57df\u3092\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.h3,{id:"playcanvas\u3067\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210",children:"PlayCanvas\u3067\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4f5c\u6210"}),"\n",(0,s.jsx)(a.p,{children:"PlayCanvas\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3059\u308b\u306b\u306f\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u306e\u30bb\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3001PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u30a2\u30cb\u30e1\u30fc\u30c8\u3059\u308b\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u99c6\u52d5\u3057\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u4eba\u578b\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306f\u3001Idle\u3001Walk\u3001Jump\u306e\u30bb\u30c3\u30c8\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u6301\u3064\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Animations",src:e(91295).A+"",width:"1000",height:"581"})}),"\n",(0,s.jsx)(a.p,{children:"\u3053\u308c\u3089\u306e3\u3064\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u5358\u4e00\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u306b\u7de8\u6210\u3057\u3066\u3001\u305d\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u7c21\u5358\u306a\u79fb\u52d5\u30b7\u30b9\u30c6\u30e0\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002PlayCanvas\u3067\u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u306f\u3001Animstategraph\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u306e\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u306e\u72b6\u614b\u30de\u30b7\u30f3\u3068\u8003\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u5404\u72b6\u614b\u304c\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u72b6\u614b\u30de\u30b7\u30f3\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30e2\u30c7\u30eb\u306e\u8907\u96d1\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u3092\u5b9a\u7fa9\u3059\u308b\u305f\u3081\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u304c1\u3064\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u505c\u6b62\u3057\u3066\u5225\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3084\u3001\u3053\u308c\u3089\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u9077\u79fb\u3092\u3069\u306e\u3088\u3046\u306b\u30d6\u30ec\u30f3\u30c9\u3059\u308b\u304b\u306e\u5b9a\u7fa9\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u6b21\u306b\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u7279\u5b9a\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306bAnimstategraph\u30a2\u30bb\u30c3\u30c8\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306bAnimstategraph\u30a2\u30bb\u30c3\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3068\u3001\u30b0\u30e9\u30d5\u306e\u5404\u72b6\u614b\u306b\u5b9f\u969b\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u72b6\u614b\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u3089\u3001Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u518d\u751f\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u6642\u70b9\u3067\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u304c\u5b8c\u4e86\u3057\u3001\u5b9a\u7fa9\u3055\u308c\u305f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u52d5\u4f5c\u304cPlayCanvas\u30e9\u30f3\u30c1\u30e3\u30fc\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]})}function d(n={}){const{wrapper:a}={...(0,i.R)(),...n.components};return a?(0,s.jsx)(a,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},91295:(n,a,e)=>{e.d(a,{A:()=>t});const t=e.p+"assets/images/animations-0017f50bdbec1638777a739b03ca38b6.gif"}}]);