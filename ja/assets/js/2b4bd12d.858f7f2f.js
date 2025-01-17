"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[58382],{19578:(A,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>n,toc:()=>s});const n=JSON.parse('{"id":"user-manual/profile/projects","title":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8","description":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30d6\u306b\u306f\u3001\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u4e0e\u3048\u3089\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3059\u3079\u3066\u8868\u793a\u3055\u308c\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/profile/projects.md","sourceDirName":"user-manual/profile","slug":"/user-manual/profile/projects","permalink":"/ja/user-manual/profile/projects","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/profile/projects.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"\u30db\u30fc\u30e0","permalink":"/ja/user-manual/profile/home"},"next":{"title":"\u30a2\u30ab\u30a6\u30f3\u30c8","permalink":"/ja/user-manual/profile/account"}}');var p=r(74848),t=r(28453);const a={title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",sidebar_position:2},i=void 0,l={},s=[{value:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"new-project",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u524a\u9664",id:"delete-project",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664",id:"unlock-project",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6240\u6709\u6a29\u79fb\u8ee2",id:"transfer-project-ownership",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3068\u5fa9\u5143",id:"backing-up-and-restoring-projects",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30fc\u30af",id:"forking-a-project",level:3},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306b\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b",id:"backing-up-a-project-to-an-archive-file",level:3},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30b9\u30c8\u304b\u3089",id:"from-the-projects-list",level:4},{value:"REST API\u3092\u4f7f\u7528\u3059\u308b",id:"using-the-rest-api",level:4},{value:"\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30ea\u30b9\u30c8\u30a2\u3059\u308b",id:"restoring-a-project-from-an-archive-file",level:3}];function c(A){const e={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,t.R)(),...A.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30d6\u306b\u306f\u3001\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u4e0e\u3048\u3089\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3059\u3079\u3066\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{alt:"projects_page",src:r(60685).A+"",title:"Projects",width:"598",height:"281"})}),"\n",(0,p.jsx)(e.h2,{id:"new-project",children:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,p.jsx)(e.p,{children:"\u53f3\u4e0a\u306eNEW\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.h2,{id:"delete-project",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u524a\u9664"}),"\n",(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6a2a\u306b\u3042\u308b\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u524a\u9664\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u5b8c\u5168\u306b\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.h2,{id:"unlock-project",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664"}),"\n",(0,p.jsxs)(e.p,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6a2a\u306b\u3042\u308b\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Unlock\u3092\u9078\u629e\u3057\u3066\u3001",(0,p.jsx)(e.em,{children:"\u30ed\u30c3\u30af\u3055\u308c\u305f"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30ed\u30c3\u30af\u89e3\u9664\u3057\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6240\u6709\u8005\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002\u6240\u6709\u8005\u304c\u30d1\u30fc\u30bd\u30ca\u30eb\u30d7\u30e9\u30f3\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30ed\u30c3\u30af\u89e3\u9664\u306b\u3088\u308a\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u306a\u305f\u3081\u3001Free\u30e6\u30fc\u30b6\u30fc\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664\u306f\u3001\u305d\u308c\u3092\u30d1\u30d6\u30ea\u30c3\u30af\u306b\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"]}),"\n",(0,p.jsx)(e.p,{children:"Organization\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664\u306e\u5225\u306e\u65b9\u6cd5\u306f\u3001\u30b7\u30fc\u30c8\u306e\u5236\u9650\u306b\u9054\u3057\u306a\u3044\u3088\u3046\u306b\u3001\u3055\u3089\u306b\u30b7\u30fc\u30c8\u3092\u8cfc\u5165\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,p.jsx)(e.h2,{id:"transfer-project-ownership",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6240\u6709\u6a29\u79fb\u8ee2"}),"\n",(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6240\u6709\u6a29\u3092\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u79fb\u3059\u5834\u5408\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6a2a\u306b\u3042\u308b\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Transfer Ownership\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{alt:"transfer-ownership-menu",src:r(11908).A+"",width:"651",height:"172"})}),"\n",(0,p.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u540d\u307e\u305f\u306f\u6240\u6709\u3059\u308bOrganization\u306e\u540d\u524d\u3092\u5165\u529b\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u308b\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{alt:"transfer-ownership-dialog",src:r(35245).A+"",width:"540",height:"272"})}),"\n",(0,p.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b\u3057\u3001FIND\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304bEnter\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001TRANSFER\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,p.jsx)(e.p,{children:"\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u79fb\u8ee2\u3092\u53d7\u3051\u5165\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u79fb\u8ee2\u4f9d\u983c\u306f\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30b9\u30c8\u306e\u4e00\u756a\u4e0a\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{alt:"transfer-ownership-accept",src:r(89309).A+"",width:"637",height:"186"})}),"\n",(0,p.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u627f\u8a8d\u3059\u308b\u3068\u3001\u79fb\u8ee2\u304c\u5b8c\u4e86\u3057\u3001\u65b0\u3057\u3044\u6240\u6709\u8005\u4ee5\u5916\u306e\u3059\u3079\u3066\u306e\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.h2,{id:"backing-up-and-restoring-projects",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3068\u5fa9\u5143"}),"\n",(0,p.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u8aa4\u3063\u3066\u524a\u9664\u3057\u305f\u308a\u3001\u60aa\u610f\u306e\u3042\u308b\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306b\u3088\u3063\u3066\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u3001\u5b9a\u671f\u7684\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u304c\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.h3,{id:"forking-a-project",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30fc\u30af"}),"\n",(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001\u30d5\u30a9\u30fc\u30af\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e 'main'\u30d6\u30e9\u30f3\u30c1\u306e\u30b3\u30d4\u30fc\u3067\u3042\u308b\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u65b0\u3057\u304f\u4f5c\u6210\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30af\u306b\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u306e\u5c65\u6b74\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,p.jsxs)(e.p,{children:["\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001",(0,p.jsx)(e.a,{href:"/user-manual/dashboard/header/",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,p.jsx)(e.h3,{id:"backing-up-a-project-to-an-archive-file",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306b\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b"}),"\n",(0,p.jsx)(e.p,{children:"\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001\u73fe\u5728\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u72b6\u614b\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u5c65\u6b74\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30aa\u30d5\u30e9\u30a4\u30f3\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e2\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.h4,{id:"from-the-projects-list",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30b9\u30c8\u304b\u3089"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{alt:"export-archive",src:r(21655).A+"",width:"736",height:"158"})}),"\n",(0,p.jsx)(e.p,{children:".zip\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3066\u3001\u30aa\u30d5\u30e9\u30a4\u30f3\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u5f8c\u3067\u305d\u306e.zip\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u306b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6a2a\u306b\u3042\u308b\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u300c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001 'main' \u30d6\u30e9\u30f3\u30c1\u306e\u307f\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,p.jsx)(e.h4,{id:"using-the-rest-api",children:"REST API\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,p.jsxs)(e.p,{children:["\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3055\u308c\u305f\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u3082\u3001",(0,p.jsx)(e.a,{href:"/user-manual/api/project-archive/",children:"REST API"}),"\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u3001\u81ea\u52d5\u7684\u306a\u5b9a\u671f\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306e\u305f\u3081\u306b\u7d99\u7d9a\u7684\u306a\u7d71\u5408\u30b7\u30b9\u30c6\u30e0\u3067\u81ea\u52d5\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,p.jsx)(e.p,{children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4ecb\u3057\u3066\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u30d6\u30e9\u30f3\u30c1\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,p.jsxs)(e.p,{children:["\u5f53\u793e\u306f\u3001\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u3088\u308a\u7c21\u5358\u306b\u3059\u308b",(0,p.jsx)(e.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#archiving-a-project",children:"Node\u30d9\u30fc\u30b9\u306e\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30c4\u30fc\u30eb"}),"\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,p.jsx)(e.h3,{id:"restoring-a-project-from-an-archive-file",children:"\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30ea\u30b9\u30c8\u30a2\u3059\u308b"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{alt:"import-archive",src:r(57452).A+"",width:"308",height:"234"})}),"\n",(0,p.jsxs)(e.p,{children:[(0,p.jsx)(e.a,{href:"#backing-up-a-project-to-an-archive-file",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306b\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b"}),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u65b9\u6cd5\u306e\u3044\u305a\u308c\u304b\u3067\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30fc\u30ab\u30a4\u30d6zip\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308c\u3070\u3001\u305d\u308c\u3092PlayCanvas\u4e0a\u306e\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,p.jsx)(e.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30da\u30fc\u30b8\u306e\u5de6\u5074\u306b\u3042\u308b 'Import Project' \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001zip\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]})}function o(A={}){const{wrapper:e}={...(0,t.R)(),...A.components};return e?(0,p.jsx)(e,{...A,children:(0,p.jsx)(c,{...A})}):c(A)}},60685:(A,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/profile-214bf1373738e23cc9bb64562d128685.png"},21655:(A,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/export-archive-button-6bd1ab9a0081e96cb60ef5a74f0d911b.jpg"},57452:(A,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/import-archive-button-62c27b914c25ec5e361d5edf9206acb9.jpg"},89309:(A,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/transfer-ownership-accept-9b3e01b37084c88689fd092676578061.png"},35245:(A,e,r)=>{r.d(e,{A:()=>n});const n="data:image/png;base64,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"},11908:(A,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/transfer-ownership-menu-fd7397c75888f1ceeaaec9f6e4bfefcd.png"},28453:(A,e,r)=>{r.d(e,{R:()=>a,x:()=>i});var n=r(96540);const p={},t=n.createContext(p);function a(A){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function i(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(p):A.components||p:a(A.components),n.createElement(t.Provider,{value:e},A.children)}}}]);