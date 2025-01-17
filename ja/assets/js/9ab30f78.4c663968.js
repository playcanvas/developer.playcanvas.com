"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[77939],{91290:(a,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"user-manual/xr/ar/zappar-integration","title":"Zappar","description":"Zappar\u306f\u3001\u753b\u50cf\u3084\u9854\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30ef\u30fc\u30eb\u30c9\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u6a5f\u80fd\u3092\u542b\u3080PlayCanvas\u7d71\u5408\u306eUniversal AR SDK\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u5f7c\u3089\u306eSDK\u306f\u3001Android\u7528Chrome\u304a\u3088\u3073iOS\u7528\u306eSafari 11.3+\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u4e16\u754c\u4e2d\u306e\u6570\u5341\u5104\u4eba\u306b\u5c4a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/ar/zappar-integration.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/zappar-integration","permalink":"/ja/user-manual/xr/ar/zappar-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/zappar-integration.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Zappar","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"8th Wall","permalink":"/ja/user-manual/xr/ar/8th-wall-integration"},"next":{"title":"VR","permalink":"/ja/user-manual/xr/vr/"}}');var s=e(74848),t=e(28453);const i={title:"Zappar",sidebar_position:2},p=void 0,l={},c=[{value:"Zappar\u306e\u59cb\u3081\u65b9",id:"zappar\u306e\u59cb\u3081\u65b9",level:2}];function o(a){const r={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Zappar\u306f\u3001\u753b\u50cf\u3084\u9854\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30ef\u30fc\u30eb\u30c9\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u6a5f\u80fd\u3092\u542b\u3080",(0,s.jsx)(r.a,{href:"https://zap.works/universal-ar/playcanvas/",children:"PlayCanvas\u7d71\u5408\u306eUniversal AR SDK"}),"\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u5f7c\u3089\u306eSDK\u306f\u3001Android\u7528Chrome\u304a\u3088\u3073iOS\u7528\u306eSafari 11.3+\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u4e16\u754c\u4e2d\u306e\u6570\u5341\u5104\u4eba\u306b\u5c4a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"zappar\u306e\u59cb\u3081\u65b9",children:"Zappar\u306e\u59cb\u3081\u65b9"}),"\n",(0,s.jsxs)(r.p,{children:["Zappar\u306f\u3001",(0,s.jsx)(r.a,{href:"https://docs.zap.works/universal-ar/playcanvas/getting-started/",children:"PlayCanvas\u3067\u306e\u59cb\u3081\u65b9"}),"\u30da\u30fc\u30b8\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304c\u7c21\u5358\u306b\u59cb\u3081\u308b\u305f\u3081\u306e",(0,s.jsx)(r.a,{href:"https://playcanvas.com/user/zappar",children:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3082\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3082\u7528\u610f\u3055\u308c\u3066\u304a\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u3088\u308a\u30b9\u30d4\u30fc\u30c7\u30a3\u30fc\u306b\u7acb\u3061\u4e0a\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["Zappar\u306eUniversal AR SDK\u3092\u4f7f\u3044\u59cb\u3081\u308b\u306b\u306f\u3001\u307e\u305a\u3001\u5f7c\u3089\u306e",(0,s.jsx)(r.a,{href:"https://playcanvas.com/project/797342/overview/instant-tracking--particles",children:"Zappar Universal AR Project"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u30d5\u30a9\u30fc\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Zappar Universal AR",src:e(85759).A+"",width:"2246",height:"438"})}),"\n",(0,s.jsx)(r.p,{children:"\u305d\u3053\u3067\u3001\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3044\u305a\u308c\u304b\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002Zappar\u304c\u63d0\u4f9b\u3059\u308b\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u9854\u306e\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0"}),"\n",(0,s.jsx)(r.li,{children:"\u753b\u50cf\u306e\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0"}),"\n",(0,s.jsx)(r.li,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u3053\u308c\u3089\u306e\u3044\u305a\u308c\u304b\u3092\u30b7\u30fc\u30f3\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3001\u4ed6\u306b\u30ab\u30e1\u30e9\u304c\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f!\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ab\u30e1\u30e9\u306b\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5c5e\u6027\u3092\u5fae\u8abf\u6574\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Zappar AR Camera Settings",src:e(78297).A+"",width:"624",height:"460"})}),"\n",(0,s.jsxs)(r.p,{children:["\u3053\u308c\u3089\u306e\u624b\u9806\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u554f\u984c\u306a\u304fZappar\u306eSDK\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(r.a,{href:"https://docs.zap.works/universal-ar/playcanvas/getting-started/",children:"PlayCanvas\u3067\u306e\u59cb\u3081\u65b9"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function d(a={}){const{wrapper:r}={...(0,t.R)(),...a.components};return r?(0,s.jsx)(r,{...a,children:(0,s.jsx)(o,{...a})}):o(a)}},78297:(a,r,e)=>{e.d(r,{A:()=>n});const n=e.p+"assets/images/zappar-camera-settings-fa5b1b16a6164de7b8201bbbb01c7b78.png"},85759:(a,r,e)=>{e.d(r,{A:()=>n});const n=e.p+"assets/images/zappar-universal-ar-249880999e46571d6f71d20e46b3e087.png"},28453:(a,r,e)=>{e.d(r,{R:()=>i,x:()=>p});var n=e(96540);const s={},t=n.createContext(s);function i(a){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof a?a(r):{...r,...a}}),[r,a])}function p(a){let r;return r=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:i(a.components),n.createElement(t.Provider,{value:r},a.children)}}}]);