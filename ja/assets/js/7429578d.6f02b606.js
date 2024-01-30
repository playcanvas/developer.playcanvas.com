"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7280],{69757:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(85893),t=n(11151);const r={title:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3068\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0",sidebar_position:3},i=void 0,l={id:"user-manual/assets/preloading-and-streaming",title:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3068\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0",description:"\u30a6\u30a7\u30d6\u4e0a\u3067\u306f\u3001\u30da\u30fc\u30b8\u3092\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6848\u5185\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30d0\u30fc\u3092\u8868\u793a\u3057\u3066\u5f85\u3064\u3088\u3046\u6c42\u3081\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u307e\u3060\u958b\u59cb\u3055\u308c\u3066\u3044\u306a\u3044\u3046\u3061\u306b\u8a2a\u554f\u8005\u304c\u30da\u30fc\u30b8\u3092\u96e2\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002PlayCanvas\u306e\u30a2\u30bb\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30d7\u30ed\u30bb\u30b9\u3092\u52b9\u7387\u5316\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u6a5f\u80fd\u3092\u6570\u591a\u304f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/preloading-and-streaming.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/preloading-and-streaming",permalink:"/ja/user-manual/assets/preloading-and-streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/preloading-and-streaming.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3068\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",permalink:"/ja/user-manual/assets/import-pipeline/import-hierarchy"},next:{title:"Animation",permalink:"/ja/user-manual/assets/animation"}},o={},d=[{value:"\u30d7\u30ea\u30ed\u30fc\u30c9 (Preload)",id:"preload",level:2},{value:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0 (Streaming)",id:"streaming",level:2},{value:"\u30a2\u30bb\u30c3\u30c8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0",id:"when-are-assets-loaded",level:2},{value:"\u30a2\u30bb\u30c3\u30c8\u30bf\u30b0 (Asset Tags)",id:"asset-tags",level:2}];function c(e){const s={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"\u30a6\u30a7\u30d6\u4e0a\u3067\u306f\u3001\u30da\u30fc\u30b8\u3092\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6848\u5185\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30d0\u30fc\u3092\u8868\u793a\u3057\u3066\u5f85\u3064\u3088\u3046\u6c42\u3081\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u307e\u3060\u958b\u59cb\u3055\u308c\u3066\u3044\u306a\u3044\u3046\u3061\u306b\u8a2a\u554f\u8005\u304c\u30da\u30fc\u30b8\u3092\u96e2\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002PlayCanvas\u306e\u30a2\u30bb\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30d7\u30ed\u30bb\u30b9\u3092\u52b9\u7387\u5316\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u6a5f\u80fd\u3092\u6570\u591a\u304f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"preload",children:"\u30d7\u30ea\u30ed\u30fc\u30c9 (Preload)"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"/images/user-manual/assets/preloading-and-streaming/asset-properties.jpg",alt:"Asset Properties"})}),"\n",(0,a.jsxs)(s.p,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u306f\u3001 ",(0,a.jsx)(s.code,{children:"preload"})," \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u308c\u306ftrue\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u304cpreload\u3068\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u521d\u671f\u5316\u30d5\u30a7\u30fc\u30ba\u304c\u958b\u59cb\u3055\u308c\u308b\u524d\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u3001\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u59cb\u6642\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u5b58\u5728\u3059\u308b\u3053\u3068\u3092\u78ba\u5b9f\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ea\u30ed\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u305f\u5f8c\u306b\u30a2\u30bb\u30c3\u30c8\u304c\u7a81\u7136\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"streaming",children:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0 (Streaming)"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"/images/user-manual/assets/preloading-and-streaming/streaming.gif",alt:"Streaming"})}),"\n",(0,a.jsx)(s.p,{children:"\u3082\u3057\u30b7\u30fc\u30f3\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30a2\u30bb\u30c3\u30c8\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u6709\u52b9\u5316\u3055\u308c\u308b\u3068\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30b7\u30fc\u30f3\u5185\u3067\u6709\u52b9\u5316\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3059\u3050\u306b\u884c\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:"\u3059\u3079\u3066\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u52d5\u7684\u306a\u30a2\u30bb\u30c3\u30c8\u306e\u30ed\u30fc\u30c9\u3092\u51e6\u7406\u3057\u3066\u3001\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001\u901a\u5e38\u901a\u308a\u52d5\u4f5c\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u52d5\u7684\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3059\u308b\u5834\u5408\u3001\u3057\u3070\u3057\u3070\u300c\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u300d\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30de\u30c6\u30ea\u30a2\u30eb\u3084\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u7121\u304f\u3066\u3082\u3001\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3059\u3050\u306b\u30e2\u30c7\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"when-are-assets-loaded",children:"\u30a2\u30bb\u30c3\u30c8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0"}),"\n",(0,a.jsx)(s.p,{children:"\u7279\u5b9a\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u3044\u3064\u8aad\u307f\u8fbc\u307e\u308c\u308b\u304b\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3089\u306e\u30eb\u30fc\u30eb\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"preload = true"})," \u306e\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u308b\u524d\u306b\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.li,{children:"\u30a2\u30bb\u30c3\u30c8\u304c\u30b7\u30fc\u30f3\u306e\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306b\u5b58\u5728\u3057\u3001\u6709\u52b9\u306a\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u3088\u3063\u3066\u53c2\u7167\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u3057\u3066\u305d\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30bb\u30c3\u30c8\u306f\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6709\u52b9\u5316\u3055\u308c\u305f\u6642\u70b9\u3001\u307e\u305f\u306f\u30a2\u30bb\u30c3\u30c8\u304c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u6642\u70b9\u3067\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u3067\u6709\u52b9\u5316\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5834\u5408\u3001\u3053\u308c\u306f\u30d7\u30ea\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u76f4\u5f8c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3059\u3050\u306b\u884c\u308f\u308c\u307e\u3059\u3002\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6709\u52b9\u5316\u3055\u308c\u308b\u305f\u3081\u306b\u306f\u3001\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u81ea\u4f53\u304c\u6709\u52b9\u3067\u3042\u308a\u3001\u305d\u306e\u4e0a\u4f4d\u306e\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3082\u6709\u52b9\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u30a2\u30bb\u30c3\u30c8\u304c\u4ed6\u306e\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306b\u3088\u3063\u3066\u53c2\u7167\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u3082\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e2\u30c7\u30eb\u304c\u30ed\u30fc\u30c9\u3055\u308c\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u30ed\u30fc\u30c9\u3055\u308c\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u30c6\u30af\u30b9\u30c1\u30e3\u3082\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"asset-tags",children:"\u30a2\u30bb\u30c3\u30c8\u30bf\u30b0 (Asset Tags)"}),"\n",(0,a.jsx)(s.p,{children:'\u591a\u304f\u306e\u5834\u5408\u3001\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u969b\u306b "\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7" \u3055\u305b\u305f\u304f\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u4e00\u9023\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3057\u3066\u304b\u3089\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u597d\u307e\u3057\u3044\u3067\u3059\u3002\u3053\u306e\u305f\u3081\u306b\u3001\u30a2\u30bb\u30c3\u30c8\u30bf\u30b0\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30bb\u30c3\u30c8\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u7279\u5b9a\u306e\u30bf\u30b0\u3092\u6301\u3064\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3057\u3066\u304b\u3089\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'}),"\n",(0,a.jsx)(s.p,{children:"\u4ee5\u4e0b\u306f\u3001\u30bf\u30b0\u3092\u4f7f\u7528\u3057\u3066\u4e00\u9023\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u305fJavaScript\u306e\u4f8b\u3067\u3059\u3002"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:'var assets = this.app.assets.findByTag("level-1");\nvar count = 0;\n\nfor (var i = 0; i < assets.length; i++) {\n    assets[i].once("load", function () {\n        count++;\n        if (count === assets.length) {\n            // \u5168\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3057\u305f\u3002\n        }\n    });\n    this.app.assets.load(assets[i]);\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var a=n(67294);const t={},r=a.createContext(t);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);