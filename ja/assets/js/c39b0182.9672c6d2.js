"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3303],{19308:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"user-manual/version-control/graph-view","title":"Graph View","description":"\u6982\u8981","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/version-control/graph-view.md","sourceDirName":"user-manual/version-control","slug":"/user-manual/version-control/graph-view","permalink":"/ja/user-manual/version-control/graph-view","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/graph-view.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Graph View","sidebar_position":10},"sidebar":"userManualSidebar","previous":{"title":"\u30d6\u30e9\u30f3\u30c1\u3092\u5229\u7528\u3057\u305f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc","permalink":"/ja/user-manual/version-control/branch-workflows"},"next":{"title":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u5c65\u6b74\u7ba1\u7406","permalink":"/ja/user-manual/version-control/item-history"}}');var r=s(74848),c=s(28453);const l={title:"Graph View",sidebar_position:10},a=void 0,t={},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306e\u8d77\u52d5",id:"\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306e\u8d77\u52d5",level:2},{value:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9",id:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9",level:2},{value:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc",id:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc",level:2},{value:"\u62e1\u5f35\u53ef\u80fd\u306a\u30ce\u30fc\u30c9",id:"\u62e1\u5f35\u53ef\u80fd\u306a\u30ce\u30fc\u30c9",level:2},{value:"\u30af\u30ed\u30fc\u30ba\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1",id:"\u30af\u30ed\u30fc\u30ba\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1",level:2},{value:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30ec\u30a4\u30a2\u30a6\u30c8\u30ed\u30b8\u30c3\u30af",id:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30ec\u30a4\u30a2\u30a6\u30c8\u30ed\u30b8\u30c3\u30af",level:2}];function d(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(n.p,{children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30b0\u30e9\u30d5 (Version Control Graph) \u306f\u3001PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u9032\u6357\u72b6\u6cc1\u3084\u30de\u30fc\u30b8\u5c65\u6b74\u3092\u8ffd\u8de1\u3059\u308b\u3053\u3068\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d1\u30cd\u30eb ( Version Control Panel) \u3067\u306f\u3001\u9078\u629e\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306e\u6700\u65b0\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30ea\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u304c\u3001\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u3067\u306f\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3001\u30d6\u30e9\u30f3\u30c1\u3001\u304a\u3088\u3073\u30de\u30fc\u30b8\u3092\u542b\u3080\u3001\u5168\u4f53\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30b0\u30e9\u30d5\u306e\u3088\u308a\u5927\u304d\u306a(\u62e1\u5f35\u53ef\u80fd\u306a)\u30d3\u30e5\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(75953).A+"",width:"1070",height:"942"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306e\u8d77\u52d5",children:"\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306e\u8d77\u52d5"}),"\n",(0,r.jsx)(n.p,{children:"\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc (Graph View) \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d1\u30cd\u30eb\u306e\u30c8\u30c3\u30d7\u30e1\u30cb\u30e5\u30fc\u306b\u3042\u308b\u300c\u30b0\u30e9\u30d5\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af(\u73fe\u5728\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u30d6\u30e9\u30f3\u30c1\u306e\u5834\u5408)\u3059\u308b\u304b\u3001\u30d6\u30e9\u30f3\u30c1\u30e1\u30cb\u30e5\u30fc\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306e\u300c\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30b0\u30e9\u30d5\u300d\u30a8\u30f3\u30c8\u30ea\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(3374).A+"",width:"2122",height:"1198"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9",children:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(67846).A+"",width:"320",height:"152"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u306b\u306f\u3001\u6b21\u306e\u60c5\u5831\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6700\u59272\u884c\u307e\u3067\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e(\u5207\u308a\u6368\u3066\u3089\u308c\u305f)\u8aac\u660e\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6b21\u306e\u884c\u306b\u306f\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8GUID\u306e\u6700\u521d\u306e4\u6587\u5b57\u3001\u65e5\u4ed8\u3001\u304a\u3088\u3073\u4f5c\u6210\u8005\u306e\u540d\u524d\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6700\u5f8c\u306e\u884c\u306b\u306f\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u540d\u524d\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc",children:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(59363).A+"",width:"494",height:"272"})}),"\n",(0,r.jsx)(n.p,{children:"\u30ce\u30fc\u30c9\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30ce\u30fc\u30c9\u3068\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u306b\u5fdc\u3058\u3066\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u9078\u629e\u80a2\u306b\u5bfe\u5fdc\u3059\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304c\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["**\u5909\u66f4\u306e\u8868\u793a (View Changes) ** - \u3053\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3068\u76f4\u524d\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u9593\u306bDiff View\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002 (",(0,r.jsx)(n.a,{href:"/user-manual/version-control/changes/",children:"\u8a73\u7d30"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"**\u6bd4\u8f03\u9078\u629e (Select for Compare) ** - \u6bd4\u8f03\u3059\u308b\u30da\u30a2\u306e\u6700\u521d\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"**\u9078\u629e\u306e\u6bd4\u8f03 (Compare with Selected) ** - \u73fe\u5728\u306e\u30ce\u30fc\u30c9\u3068\u3001 'Select for Compare'\u3092\u901a\u3058\u3066\u30de\u30fc\u30af\u3055\u308c\u305f\u30ce\u30fc\u30c9\u3068\u306e\u9593\u306bDiff View\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(37543).A+"",width:"3182",height:"1588"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["**\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1 (New Branch) ** - \u9078\u629e\u3057\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 (",(0,r.jsx)(n.a,{href:"/user-manual/version-control/branches/#creating-a-new-branch",children:"\u8a73\u7d30"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"**\u30c7\u30fc\u30bf\u306e\u30b3\u30d4\u30fc (Copy Data) ** - \u5909\u66f4\u304c\u306a\u304f\u3001\u5207\u308a\u6368\u3066\u3089\u308c\u3066\u3044\u306a\u3044\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u30c7\u30fc\u30bf(\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8GUID\u3001\u30d6\u30e9\u30f3\u30c1ID\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306a\u3069)\u3092JSON\u5f62\u5f0f\u3067\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["**\u5fa9\u5143 (Restore) **(\u73fe\u5728\u306e\u30a8\u30c7\u30a3\u30bf\u30d6\u30e9\u30f3\u30c1\u306e\u5834\u5408\u306e\u307f)- \u30d6\u30e9\u30f3\u30c1\u306e\u72b6\u614b\u3092\u9078\u629e\u3057\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u72b6\u614b\u306b\u5fa9\u5143\u3057\u307e\u3059\u3002 (",(0,r.jsx)(n.a,{href:"/user-manual/version-control/checkpoints/#restoring-a-checkpoint",children:"\u8a73\u7d30"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["**\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8 (Hard Reset) **(\u73fe\u5728\u306e\u30a8\u30c7\u30a3\u30bf\u30d6\u30e9\u30f3\u30c1\u306e\u5834\u5408\u306e\u307f)- \u9078\u629e\u3057\u305f\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306b\u30cf\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 (",(0,r.jsx)(n.a,{href:"/user-manual/version-control/checkpoints/#restoring-a-checkpoint",children:"\u8a73\u7d30"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u62e1\u5f35\u53ef\u80fd\u306a\u30ce\u30fc\u30c9",children:"\u62e1\u5f35\u53ef\u80fd\u306a\u30ce\u30fc\u30c9"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(2327).A+"",width:"294",height:"170"})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u521d\u306b\u3001\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306f\u3001\u5404\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u6700\u592720\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3001\u304a\u3088\u3073\u5408\u8a0860\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ce\u30fc\u30c9\u306e\u53f3\u4e0a\u9685\u306b\u3042\u308b\u4e09\u89d2\u5f62\u306f\u3001\u8ffd\u52a0\u306e\u5165\u529b\u307e\u305f\u306f\u51fa\u529b\u30a8\u30c3\u30b8(\u30d6\u30e9\u30f3\u30c1\u3084\u30de\u30fc\u30b8\u306a\u3069)\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3001 '\u30ce\u30fc\u30c9\u306e\u5c55\u958b'\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u30a8\u30f3\u30c8\u30ea\u3092\u4ecb\u3057\u3066\u5c55\u958b\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(49817).A+"",width:"1770",height:"728"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30af\u30ed\u30fc\u30ba\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1",children:"\u30af\u30ed\u30fc\u30ba\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1"}),"\n",(0,r.jsx)(n.p,{children:"\u30b0\u30e9\u30d5\u306b\u306f\u3001\u5e38\u306b\u30de\u30fc\u30b8\u7d50\u679c\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u4e21\u65b9\u306e\u89aa\u3092\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u9589\u3058\u305f\u30d6\u30e9\u30f3\u30c1\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3082\u542b\u307e\u308c\u307e\u3059\u3002\u30d6\u30e9\u30f3\u30c1\u540d\u306e\u5f8c\u306b[X]\u304c\u4ed8\u3044\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(43979).A+"",width:"318",height:"314"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30ec\u30a4\u30a2\u30a6\u30c8\u30ed\u30b8\u30c3\u30af",children:"\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u30ec\u30a4\u30a2\u30a6\u30c8\u30ed\u30b8\u30c3\u30af"}),"\n",(0,r.jsx)(n.p,{children:"\u30b0\u30e9\u30d5\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u30b5\u30a4\u30ba\u3092\u7e26\u304a\u3088\u3073\u6a2a\u306b\u7e2e\u5c0f\u3057\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u5bb9\u6613\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u306f\u7279\u5b9a\u306e\u65b9\u6cd5\u3067\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30b0\u30e9\u30d5\u8868\u793a\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u9078\u629e\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1\u306f\u5de6\u5074\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u4ed6\u306e\u3059\u3079\u3066\u306e\u30d6\u30e9\u30f3\u30c1\u306f\u305d\u308c\u306e\u53f3\u5074\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u7684\u306b\u3001\u5404\u30d6\u30e9\u30f3\u30c1\u306f\u72ec\u81ea\u306e\u5217\u3092\u5360\u6709\u3057\u307e\u3059\u304c\u3001\u53ef\u80fd\u306a\u5834\u5408\u306f\u3001\u30b0\u30e9\u30d5\u306f\u30d6\u30e9\u30f3\u30c1\u3092\u4e0a\u4e0b\u306b\u91cd\u306d\u3066\u914d\u7f6e\u3057\u3001\u30ce\u30fc\u30c9\u304c\u6c34\u5e73\u65b9\u5411\u306b\u3042\u307e\u308a\u9060\u304f\u306b\u914d\u7f6e\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u307e\u305f\u3001\u3067\u304d\u308b\u3060\u3051\u89aa\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u5b50\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3088\u308a\u3082\u4f4e\u3044\u4f4d\u7f6e\u306b\u914d\u7f6e\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u540c\u6642\u306b\u3001\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306e\u4e2d\u3067\u6700\u521d\u306b\u9078\u629e\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1\u306e\u3059\u3079\u3066\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u660e\u78ba\u306a\u6982\u8981\u304c\u5fc5\u8981\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u305f\u3081\u3001\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u306e\u4e2d\u3067\u89aa\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u304c\u4ed6\u306e\u30d6\u30e9\u30f3\u30c1\u306e\u5b50\u3088\u308a\u3082\u9ad8\u3044\u4f4d\u7f6e\u306b\u8868\u793a\u3055\u308c\u3001\u4e0b\u5411\u304d\u306e\u77e2\u5370 \u304c\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30a8\u30c3\u30b8\u306e\u8272\u306f\u3001\u5e38\u306b\u30bd\u30fc\u30b9\u30ce\u30fc\u30c9\u3068\u30de\u30c3\u30c1\u3059\u308b\u305f\u3081\u3001\u305d\u306e\u65b9\u5411\u3092\u7c21\u5358\u306b\u7279\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5404\u30d6\u30e9\u30f3\u30c1\u306e\u8272\u306f\u3001Graph View\u3092\u8d77\u52d5\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306b\u4f9d\u5b58\u305b\u305a\u3001\u5e38\u306b\u540c\u3058\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30b0\u30e9\u30d5\u30d3\u30e5\u30fc\u3067\u306f\u3001\u30b9\u30af\u30ed\u30fc\u30eb\u30db\u30a4\u30fc\u30eb\u3067\u30ba\u30fc\u30e0\u30a4\u30f3/\u30ba\u30fc\u30e0\u30a2\u30a6\u30c8\u3001\u30af\u30ea\u30c3\u30af\u30a2\u30f3\u30c9\u30c9\u30e9\u30c3\u30b0\u3067\u30d1\u30f3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3374:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/access-buttons-b3ce195b9f6a117a2c58332dabe17b73.png"},43979:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/closed-branches-ac20b73529d9ba52fe2dee36eef526b9.png"},67846:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/commit-node-33ff7364bff4bcc4ef7a35634ac020c0.png"},37543:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/compare-checkpoints-example-177209ccf856d4acbe8cc29c9b1c81c0.gif"},59363:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/context-menu-861caf26f9cc8372af1ef35432f3ebd7.png"},49817:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/node-expand-example-d2d46a02644b9c9a6cc33eb602c5c7c9.gif"},2327:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/node-expand-ae166cfd6e563adf6b1761098005d3c4.png"},75953:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/overview-e2e52c94a77976ea464d1fda4ac31879.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(96540);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);