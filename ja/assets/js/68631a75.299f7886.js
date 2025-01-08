"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5394],{3897:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"user-manual/version-control/merging","title":"\u30de\u30fc\u30b8\u3068\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a","description":"\u30de\u30fc\u30b8\u306f\u30012\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u884c\u308f\u308c\u305f\u4f5c\u696d\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002\u30de\u30fc\u30b8\u306f\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u30d6\u30e9\u30f3\u30c1\u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u81ea\u7136\u306a\u90e8\u5206\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/version-control/merging.md","sourceDirName":"user-manual/version-control","slug":"/user-manual/version-control/merging","permalink":"/ja/user-manual/version-control/merging","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/merging.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u30de\u30fc\u30b8\u3068\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"\u30d6\u30e9\u30f3\u30c1","permalink":"/ja/user-manual/version-control/branches"},"next":{"title":"View Changes","permalink":"/ja/user-manual/version-control/changes"}}');var r=s(74848),t=s(28453);const c={title:"\u30de\u30fc\u30b8\u3068\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a",sidebar_position:3},a=void 0,l={},o=[{value:"2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u30de\u30fc\u30b8",id:"2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u30de\u30fc\u30b8",level:2},{value:"\u30de\u30fc\u30b8\u306e\u4f8b",id:"\u30de\u30fc\u30b8\u306e\u4f8b",level:3},{value:"\u30de\u30fc\u30b8\u306e\u958b\u59cb",id:"\u30de\u30fc\u30b8\u306e\u958b\u59cb",level:2},{value:"\u81ea\u52d5\u30de\u30fc\u30b8",id:"\u81ea\u52d5\u30de\u30fc\u30b8",level:3},{value:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a",id:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a",level:3},{value:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",id:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",level:3}];function d(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u30de\u30fc\u30b8\u306f\u30012\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u884c\u308f\u308c\u305f\u4f5c\u696d\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002\u30de\u30fc\u30b8\u306f\u3001",(0,r.jsx)(n.a,{href:"/user-manual/version-control/branches",children:"\u30d6\u30e9\u30f3\u30c1\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u30d6\u30e9\u30f3\u30c1\u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u81ea\u7136\u306a\u90e8\u5206\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u30de\u30fc\u30b8",children:"2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u30de\u30fc\u30b8"}),"\n",(0,r.jsx)(n.p,{children:"PlayCanvas\u3067\u306f\u3001\u30de\u30fc\u30b8\u306f2\u3064\u306e\u7570\u306a\u308b\u30d6\u30e9\u30f3\u30c1\u304b\u30892\u3064\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u53d6\u5f97\u3057\u3066\u3001\u6700\u5f8c\u306b\u5171\u6709\u3055\u308c\u305f\u7956\u5148\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u4ee5\u964d\u306b\u767a\u751f\u3057\u305f\u5909\u66f4\u3092\u8a08\u7b97\u3057\u3001\u3053\u308c\u3089\u306e\u5909\u66f4\u3092\u4e00\u7dd2\u306b\u7d50\u5408(\u7af6\u5408\u3059\u308b\u5909\u66f4\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u6642\u306b\u52a9\u3051\u3092\u6c42\u3081\u308b)\u3057\u3001\u6700\u5f8c\u306b\u30012\u3064\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u30de\u30fc\u30b8\u7d50\u679c\u3092\u542b\u3080\u65b0\u3057\u3044\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u307e\u305a\u3001PlayCanvas\u3067\u30de\u30fc\u30b8\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u5b9f\u969b\u306b2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u30de\u30fc\u30b8\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u5b9f\u969b\u306b\u306f2\u3064\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u30de\u30fc\u30b8\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u30012\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u3046\u30611\u3064\u306b\u66f4\u65b0\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308b\u305f\u3081\u3067\u3059\u3002\u30de\u30fc\u30b8\u5148\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u5834\u5408\u3001PlayCanvas\u306f\u6700\u65b0\u306e\u5909\u66f4\u304c\u5931\u308f\u308c\u306a\u3044\u3088\u3046\u306b\u3001\u81ea\u52d5\u7684\u306b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30de\u30fc\u30b8\u306e\u4f8b",children:"\u30de\u30fc\u30b8\u306e\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Merging checkpoints",src:s(74924).A+"",width:"1700",height:"608"}),"\n",(0,r.jsxs)(n.em,{children:["Changes Y & Z are not included in merge result C and ",(0,r.jsx)(n.strong,{children:"are lost"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Merging checkpoints",src:s(77575).A+"",width:"1700",height:"608"}),"\n",(0,r.jsx)(n.em,{children:"By default PlayCanvas creates a new checkpoint in the destination branch of a merge, so changes Y are included"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Merging checkpoints",src:s(25086).A+"",width:"1700",height:"608"}),"\n",(0,r.jsx)(n.em,{children:"If changes Z are required, create a checkpoint in the source branch before starting the merge."})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30de\u30fc\u30b8\u306e\u958b\u59cb",children:"\u30de\u30fc\u30b8\u306e\u958b\u59cb"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Start merge",src:s(51086).A+"",width:"2122",height:"1204"})}),"\n",(0,r.jsx)(n.p,{children:"\u30de\u30fc\u30b8\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u30de\u30fc\u30b8\u3057\u305f\u3044\u30d6\u30e9\u30f3\u30c1\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002\u6b21\u306b\u3001\u30de\u30fc\u30b8\u3057\u305f\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u9078\u629e\u3057\u3066\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Merge dialog",src:s(60208).A+"",width:"2122",height:"1198"})}),"\n",(0,r.jsx)(n.p,{children:"\u30de\u30fc\u30b8\u3092\u958b\u59cb\u3059\u308b\u524d\u306b\u3044\u304f\u3064\u304b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u300c\u30de\u30fc\u30b8\u5143\u300d\u30d6\u30e9\u30f3\u30c1\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6700\u521d\u306b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"})," - \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30aa\u30f3\u306b\u3059\u308b\u3068\u3001\u30de\u30fc\u30b8\u524d\u306b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30d6\u30e9\u30f3\u30c1\u306b\u307e\u3060\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5909\u66f4\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u3001\u305d\u308c\u3089\u3092\u30de\u30fc\u30b8\u306b\u542b\u3081\u305f\u3044\u5834\u5408\u306b\u6709\u7528\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30de\u30fc\u30b8\u5f8c\u306b\u30d6\u30e9\u30f3\u30c1\u3092\u9589\u3058\u308b"})," - \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30aa\u30f3\u306b\u3059\u308b\u3068\u3001\u30de\u30fc\u30b8\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u306b\u300c\u30de\u30fc\u30b8\u5143\u300d\u30d6\u30e9\u30f3\u30c1\u304c\u9589\u3058\u3089\u308c\u307e\u3059\u3002\u6a5f\u80fd\u30d6\u30e9\u30f3\u30c1\u3067\u306f\u3001\u6a5f\u80fd\u304c\u5b8c\u4e86\u3057\u3001\u30d6\u30e9\u30f3\u30c1\u30ea\u30b9\u30c8\u3092\u53e4\u304f\u306a\u3063\u305f\u30d6\u30e9\u30f3\u30c1\u3067\u30af\u30ea\u30fc\u30f3\u306b\u4fdd\u3064\u305f\u3081\u306b\u3088\u304f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u300c\u30de\u30fc\u30b8\u5148\u300d\u30d6\u30e9\u30f3\u30c1\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6700\u521d\u306b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"})," - \u3053\u308c\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30aa\u30f3\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u30de\u30fc\u30b8\u306f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306b\u57fa\u3065\u3044\u3066\u884c\u308f\u308c\u308b\u305f\u3081(\u3064\u307e\u308a\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c81\u3064\u3092\u5225\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059)\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u304c\u306a\u3044\u300c\u30de\u30fc\u30b8\u5148\u300d\u30d6\u30e9\u30f3\u30c1\u306e\u5909\u66f4\u304c\u542b\u307e\u308c\u308b\u3088\u3046\u306b\u3001\u3053\u308c\u304c\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30aa\u30d5\u306b\u3059\u308b\u3068\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5909\u66f4\u304c\u7834\u68c4\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u306f\u304a\u52e7\u3081\u3057\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u52d5\u30de\u30fc\u30b8",children:"\u81ea\u52d5\u30de\u30fc\u30b8"}),"\n",(0,r.jsx)(n.p,{children:"2\u3064\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u30de\u30fc\u30b8\u3059\u308b\u5834\u5408\u3001PlayCanvas\u306f\u4e92\u3044\u306b\u7af6\u5408\u3057\u306a\u3044\u5909\u66f4\u3092\u81ea\u52d5\u7684\u306b\u30de\u30fc\u30b8\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002\u591a\u304f\u306e\u5834\u5408\u30012\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u5b8c\u5168\u306b\u81ea\u52d5\u7684\u306b\u30de\u30fc\u30b8\u3067\u304d\u307e\u3059\u3002\u81ea\u52d5\u30de\u30fc\u30b8\u3067\u306f\u3001\u30de\u30fc\u30b8\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30a8\u30c7\u30a3\u30bf\u304c\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3055\u308c\u305f\u5909\u66f4\u3067\u518d\u8aad\u307f\u8fbc\u307f\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a",children:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a"}),"\n",(0,r.jsx)(n.p,{children:"2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u7af6\u5408\u3059\u308b\u5909\u66f4\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u308c\u3089\u306e\u5909\u66f4\u3092\u81ea\u52d5\u7684\u306b\u30de\u30fc\u30b8\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u7af6\u5408\u3059\u308b\u5909\u66f4\u306e\u4f8b\u306f\u3001\u4e21\u65b9\u306e\u30d6\u30e9\u30f3\u30c1\u3067\u540c\u3058\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3057\u305f\u5834\u5408\u3067\u3059\u30022\u3064\u306e\u6700\u7d42\u7684\u306a\u4f4d\u7f6e\u306e\u9593\u3067\u30b7\u30b9\u30c6\u30e0\u304c\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsx)(n.p,{children:"2\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u30671\u3064\u4ee5\u4e0a\u306e\u7af6\u5408\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u30a8\u30c7\u30a3\u30bf\u306f\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u8868\u793a\u3057\u3001\u30de\u30fc\u30b8\u304c\u5b8c\u4e86\u3059\u308b\u524d\u306b\u5404\u7af6\u5408\u3092\u89e3\u6c7a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",children:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Conflict Manager",src:s(36865).A+"",width:"2496",height:"1490"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u306f\u3001\u5de6\u5074\u306b\u7af6\u5408\u3059\u308b\u5404\u30ea\u30bd\u30fc\u30b9\u304c\u8868\u793a\u3055\u308c\u3001\u9078\u629e\u3055\u308c\u305f\u5404\u30ea\u30bd\u30fc\u30b9\u306b\u3064\u3044\u3066\u3001\u30aa\u30ea\u30b8\u30ca\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3(Base)\u3068\u5404\u30d6\u30e9\u30f3\u30c1\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u6bd4\u8f03\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u7af6\u5408\u3057\u305f\u5404\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3064\u3044\u3066\u3001\u53d7\u3051\u5165\u308c\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u89e3\u6c7a\u3055\u308c\u305f\u3089\u3001\u300c\u30de\u30fc\u30b8\u3092\u5b8c\u4e86\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30de\u30fc\u30b8\u3092\u7d42\u4e86\u3057\u3001\u65b0\u3057\u3044\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Resolved Conflicts",src:s(91879).A+"",width:"2504",height:"1488"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3068\u30de\u30fc\u30b8\u304c\u9032\u884c\u4e2d\u306e\u9593\u3001\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u306f\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u3055\u3089\u306a\u308b\u7de8\u96c6\u3092\u30ed\u30c3\u30af\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u7af6\u5408\u306e\u89e3\u6c7a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u304d\u306b\u30de\u30fc\u30b8\u306b\u3088\u3063\u3066\u5909\u66f4\u304c\u4e0a\u66f8\u304d\u3055\u308c\u308b\u306e\u3092\u9632\u304e\u307e\u3059\u3002\u5225\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30de\u30fc\u30b8\u306b\u5fc5\u8981\u306a\u30d6\u30e9\u30f3\u30c1\u3092\u30d6\u30ed\u30c3\u30af\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u5f7c\u3089\u306e\u30de\u30fc\u30b8\u3092\u5f37\u5236\u7684\u306b\u7d42\u4e86\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},36865:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conflict-manager-95579639b79f8395f47fe5fe04514ea9.jpg"},91879:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conflicts-resolved-8611eec9b9b9330d7cf62543733cbc63.jpg"},60208:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/merge-dialog-5e81913bb37bc62fc67d40109335fabc.png"},74924:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/merging-checkpoints-1-27215400a5d6c620bc8a1bcfd5cbf84a.png"},77575:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/merging-checkpoints-2-0781f3b9aa6133fd350964c7e8bf2e02.png"},25086:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/merging-checkpoints-3-47ce329463c6a8d6b10f9a913899b105.png"},51086:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/start-merge-e14268b80fcd01021db136629a058104.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var i=s(96540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);