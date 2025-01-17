"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[27355],{20426:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-manual/editor/interface/assets","title":"Assets Panel","description":"\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u4f5c\u6210\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3001\u524a\u9664\u3001\u691c\u67fb\u3001\u7de8\u96c6\u306a\u3069\u304c\u884c\u3048\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/editor/interface/assets.md","sourceDirName":"user-manual/editor/interface","slug":"/user-manual/editor/interface/assets","permalink":"/ja/user-manual/editor/interface/assets","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/interface/assets.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Assets Panel","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8 (Viewport)","permalink":"/ja/user-manual/editor/interface/viewport"},"next":{"title":"Launch Page","permalink":"/ja/user-manual/editor/launch-page/"}}');var r=n(74848),l=n(28453);const t={title:"Assets Panel",sidebar_position:5},d=void 0,a={},c=[{value:"\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u968e\u5c64",id:"folder-hierarchy",level:2},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u4f5c\u6210\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",id:"creating-and-uploading-assets",level:2},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u7de8\u96c6",id:"editing-assets",level:2},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u8abf\u67fb",id:"inspecting-assets",level:2},{value:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0 (Filtering)",id:"filtering",level:2},{value:"\u691c\u7d22",id:"searching",level:2},{value:"\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7",id:"drag-and-drop",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u9593\u3067\u306e\u30b3\u30d4\u30fc\u3068\u8cbc\u308a\u4ed8\u3051",id:"copy-and-paste-between-projects",level:2},{value:"\u53c2\u7167\u306e\u78ba\u8a8d",id:"checking-references",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u4f5c\u6210\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3001\u524a\u9664\u3001\u691c\u67fb\u3001\u7de8\u96c6\u306a\u3069\u304c\u884c\u3048\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Assets Panel",src:n(63852).A+"",width:"1912",height:"786"})}),"\n",(0,r.jsx)(s.h2,{id:"folder-hierarchy",children:"\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u968e\u5c64"}),"\n",(0,r.jsx)(s.p,{children:"\u30d5\u30a9\u30eb\u30c0\u30fc\u30d1\u30cd\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30a2\u30bb\u30c3\u30c8\u3092\u30d5\u30a9\u30eb\u30c0\u306e\u30c4\u30ea\u30fc\u5f62\u5f0f\u3067\u6574\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u65b0\u3057\u3044\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001Add Asset (+) \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3001 'Folder' \u3092\u9078\u629e\u3057\u307e\u3059\u3002\u307e\u305f\u306f\u3001\u65b0\u3057\u3044\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u305f\u3044\u30d5\u30a9\u30eb\u30c0\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001 'New Asset' > 'Folder' \u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u540d\u524d\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d1\u30cd\u30eb\u3067\u305d\u308c\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Inspector\u306eName \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001\u3067\u305d\u308c\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3066delete\u3092\u62bc\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u524a\u9664\u3057\u305f\u3044\u30d5\u30a9\u30eb\u30c0\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304b\u3089Delete\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u30d5\u30a9\u30eb\u30c0\u306e\u69cb\u6210\u3092\u6574\u7406\u3059\u308b\u306b\u306f\u30d5\u30a9\u30eb\u30c0\u3092\u4e92\u3044\u306e\u4e2d\u306b\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"creating-and-uploading-assets",children:"\u30a2\u30bb\u30c3\u30c8\u306e\u4f5c\u6210\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),"\n",(0,r.jsx)(s.p,{children:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u65b0\u3057\u3044\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Editor\u304c\u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u53ca\u3073\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"Add Asset (+) \u30a2\u30a4\u30b3\u30f3\u3092\u4f7f\u7528\u3057\u3066\u7279\u5b9a\u306e\u30a2\u30bb\u30c3\u30c8\u30bf\u30a4\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3057\u3066Delete Asset\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u524a\u9664\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"editing-assets",children:"\u30a2\u30bb\u30c3\u30c8\u306e\u7de8\u96c6"}),"\n",(0,r.jsx)(s.p,{children:"\u6b21\u306e\u7279\u5b9a\u306e\u30c6\u30ad\u30b9\u30c8\u30d9\u30fc\u30b9\u306e\u30a2\u30bb\u30c3\u30c8\u306fPlayCanvas Script Editor\u3067\u958b\u3044\u3066\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1atext, json, shader, html, css, script asset\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"inspecting-assets",children:"\u30a2\u30bb\u30c3\u30c8\u306e\u8abf\u67fb"}),"\n",(0,r.jsx)(s.p,{children:"\u4efb\u610f\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306e\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u304cInspector\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"filtering",children:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0 (Filtering)"}),"\n",(0,r.jsx)(s.p,{children:"\u30d5\u30a3\u30eb\u30bf\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089\u8868\u793a\u3055\u305b\u308b\u30a2\u30bb\u30c3\u30c8\u306e\u7a2e\u985e\u3092\u9078\u629e\u3057\u3066\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u30d5\u30a3\u30eb\u30bf\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"searching",children:"\u691c\u7d22"}),"\n",(0,r.jsx)(s.p,{children:"\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u691c\u7d22\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30dc\u30c3\u30af\u30b9\u306b\u5165\u529b\u3057\u59cb\u3081\u308b\u3068\u3001Editor\u306f\u4e00\u81f4\u3059\u308b\u7d50\u679c\u3092\u52d5\u7684\u306b\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ID"})," - \u7279\u5b9a\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u56fa\u6709\u306eID\u3067\u691c\u7d22\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u306bID\u3092\u5165\u529b\u3059\u308b\u3060\u3051\u3067\u6b63\u78ba\u306a\u4e00\u81f4\u304c\u8a8d\u8b58\u3055\u308c\u3001\u305d\u306eID\u3092\u6301\u3064\u3072\u3068\u3064\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"RegExp"})," - \u6b63\u898f\u8868\u73fe\u3092\u4f7f\u7528\u3057\u3066\u691c\u7d22\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5148\u982d\u306b ",(0,r.jsx)(s.code,{children:"*"})," \u3092\u8ffd\u52a0\u3057\u3001\u5f8c\u308d\u306bregexp\u30af\u30a8\u30ea\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u691c\u7d22\u3059\u308b\u306b\u306f ",(0,r.jsx)(s.code,{children:"*."}),"(\u4efb\u610f\u306e\u6587\u5b57\u306e)\u6b63\u898f\u8868\u73fe\u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Tags"})," - \u30bf\u30b0\u3068\u305d\u306e\u7d44\u307f\u5408\u308f\u305b\u304b\u3089\u691c\u7d22\u3059\u308b\u306b\u306f\u3001\u5927\u62ec\u5f27",(0,r.jsx)(s.code,{children:"[ ]"}),"\u306b\u30bf\u30b0\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u5358\u7d14\u306a\u30af\u30a8\u30ea\u6f14\u7b97\u5b50\uff1aAND, OR\u306f\u30af\u30a8\u30ea\u3092\u6587\u5b57\u5217\u306e\u914d\u5217\u3001\u307e\u305f\u306f\u6587\u5b57\u5217\u3092\u6301\u3064\u4ed6\u306e\u914d\u5217\u3068\u3057\u3066\u8868\u73fe\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\u30af\u30a8\u30ea\u306e\u30ed\u30b8\u30c3\u30af\u306f\u3001 ",(0,r.jsx)(s.code,{children:"AssetsRegistry"}),"\u306e",(0,r.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.AssetRegistry.html#findByTag",children:(0,r.jsx)(s.code,{children:"findByTag"})}),"\u3068\u540c\u3058\u3067\u3059\u3002\n\u3044\u304f\u3064\u304b\u306e\u4f8b\u3092\u793a\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"[ level-1 ]"})," - ",(0,r.jsx)(s.code,{children:"level-1"}),"\u306b\u3088\u3063\u3066\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"[ level-1, level-2 ]"})," - ",(0,r.jsx)(s.code,{children:"level-1 OR level-2"}),"\u306b\u3088\u3063\u3066\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"[ [ level-1, monster ] ]"})," - ",(0,r.jsx)(s.code,{children:"level-1 AND monster"}),"\u306b\u3088\u3063\u3066\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002 \u89d2\u62ec\u5f27\u306e\u6570\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"[ [ level-1, monster ], [ level-2, monster ] ]"})," - ",(0,r.jsx)(s.code,{children:"(level-1 AND monster) OR (level-2 AND monster)"}),"\u306b\u3088\u3063\u3066\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"drag-and-drop",children:"\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7"}),"\n",(0,r.jsx)(s.p,{children:"\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30e1\u30a4\u30f3\u30d1\u30cd\u30eb\u304b\u3089\u30d5\u30a9\u30eb\u30c0\u968e\u5c64\u5185\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u5225\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u306f\u8907\u6570\u9078\u629e\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002CTRL+ A\u3067\u3001\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0\u5185\u306e\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u304b\u3089\u3001",(0,r.jsx)(s.a,{href:"/user-manual/editor/interface/inspector",children:"Inspector"}),"\u3067\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u305f\u30b9\u30ed\u30c3\u30c8\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002Inspector\u306e\u30b9\u30ed\u30c3\u30c8\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a2\u30bb\u30c3\u30c8\u5c5e\u6027\u307e\u305f\u306f\u30a2\u30bb\u30c3\u30c8\u30bf\u30a4\u30d7\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u306e\u3069\u3061\u3089\u304b\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u30e2\u30c7\u30eb\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3001\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7\u306a\u3069\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u76f4\u63a5 ",(0,r.jsx)(s.a,{href:"/user-manual/editor/interface/viewport",children:"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8"}),"\u306b\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u306b\u30e2\u30c7\u30eb\u30a2\u30bb\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3068\u3001\u30e2\u30c7\u30eb\u30a2\u30bb\u30c3\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30e2\u30c7\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6709\u3059\u308b\u65b0\u3057\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u306e\u30ab\u30e1\u30e9\u306f\u81ea\u52d5\u7684\u306b\u65b0\u3057\u304f\u4f5c\u6210\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30ba\u30fc\u30e0\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u5185\u306e\u7279\u5b9a\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4e0a\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3068\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306f(\u30d7\u30ec\u30d3\u30e5\u30fc\u3068\u3057\u3066)\u30c9\u30e9\u30c3\u30b0\u3055\u308c\u308b\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5207\u308a\u66ff\u3048\u3089\u308c\u307e\u3059\u3002\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u5909\u66f4\u3092\u4fdd\u6301\u3059\u308b\u306b\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3067\u30b7\u30fc\u30f3\u306e\u80cc\u666f\u306e\u4e0a\u306b\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3068\u3001\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7\u306f\u30b7\u30fc\u30f3\u306e\u30b9\u30ab\u30a4\u30dc\u30c3\u30af\u30b9\u306e\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7\u3068\u3057\u3066\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u306f",(0,r.jsx)(s.a,{href:"/user-manual/editor/settings",children:"Scene Settings"}),"\u304b\u3089\u3082\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"copy-and-paste-between-projects",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u9593\u3067\u306e\u30b3\u30d4\u30fc\u3068\u8cbc\u308a\u4ed8\u3051"}),"\n",(0,r.jsx)(s.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u9593\u3067\u30a2\u30bb\u30c3\u30c8\u307e\u305f\u306f\u8907\u6570\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b\u306b\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3057\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3057\u3001 'Copy' \u3092\u9078\u629e\u3057\u307e\u3059\u3002\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5834\u5408\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304c\u4f7f\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u4ee3\u308f\u308a\u306b\u30db\u30c3\u30c8\u30ad\u30fcCtrl/Cmd + C\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/right-click-copy.png",alt:"Right click copy menu",width:"500"}),"\n",(0,r.jsx)(s.p,{children:"\u30a2\u30bb\u30c3\u30c8\u3092\u30b3\u30d4\u30fc\u3057\u305f\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001 'Paste' \u3092\u9078\u629e\u3057\u307e\u3059\u3002Ctrl/Cmd + V\u306e\u30db\u30c3\u30c8\u30ad\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30bb\u30c3\u30c8\u304c\u30b3\u30d4\u30fc\u5148\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8cbc\u308a\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/right-click-paste.png",alt:"Right click paste menu",width:"500"}),"\n",(0,r.jsx)(s.p,{children:"\u30a2\u30bb\u30c3\u30c8\u306e\u30b3\u30d4\u30fc\u3068\u8cbc\u308a\u4ed8\u3051\u3067\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u306b\u95a2\u9023\u3059\u308b\u4f9d\u5b58\u95a2\u4fc2\u3082\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e2\u30c7\u30eb\u304c2\u3064\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u53c2\u7167\u3057\u3001\u305d\u308c\u3089\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u4e00\u9023\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u3082\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/copy-and-paste-model-with-dependencies.png",alt:"Model example",width:"100%"}),"\n",(0,r.jsx)(s.p,{children:"\u5225\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bModel\u30a2\u30bb\u30c3\u30c8\u3092\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3059\u308b\u5834\u5408\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u3082\u4e00\u7dd2\u306b\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/pasted-reference-assets.png",alt:"Pasted referenced assets",width:"100%"}),"\n",(0,r.jsx)(s.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30d5\u30e9\u30c3\u30c8\u306a\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3067\u8cbc\u308a\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002\u3082\u3057\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u3092\u7dad\u6301\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304c\u958b\u304b\u308c\u305f\u3068\u304d\u306bShift\u30ad\u30fc\u3092\u62bc\u3057\u7d9a\u3051\u308b\u3068\u3001'Paste (keep folders)' \u3068\u3044\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8cbc\u308a\u4ed8\u3051\u5148\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u30eb\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u3068\u3057\u3066\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u3092\u7dad\u6301\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/right-click-paste-keep-folders.png",alt:"Right click paste (keep folders) menu",width:"500"}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u304c\u4fdd\u6301\u3055\u308c\u305f\u7d50\u679c\u3068\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/pasted-assets-keep-folders.png",alt:"Pasted referenced assets with folders",width:"100%"}),"\n",(0,r.jsx)(s.p,{children:"\u4e00\u822c\u7684\u306b\u306f\u3001\u518d\u5229\u7528\u53ef\u80fd\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30a2\u30bb\u30c3\u30c8\u306b\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u7c21\u5358\u306b\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u3001\u30eb\u30fc\u30c8\u30ec\u30d9\u30eb\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u53ce\u3081\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u304c\u30b7\u30f3\u30d7\u30eb\u3067\u6574\u7406\u3055\u308c\u305f\u72b6\u614b\u3092\u4fdd\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u306f\u3001\u540c\u3058\u540d\u524d\u306e\u65e2\u5b58\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u4e0a\u66f8\u304d\u305b\u305a\u3001\u65b0\u3057\u3044\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"})}),"\n",(0,r.jsx)(s.h2,{id:"checking-references",children:"\u53c2\u7167\u306e\u78ba\u8a8d"}),"\n",(0,r.jsx)(s.p,{children:"\u7279\u5b9a\u306e\u30b7\u30fc\u30f3\u5185\u3067\u30a2\u30bb\u30c3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b(\u307e\u305f\u306f\u53c2\u7167\u3055\u308c\u3066\u3044\u308b)\u5834\u6240\u3092\u77e5\u308b\u3053\u3068\u304c\u6709\u7528\u306a\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u30a2\u30bb\u30c3\u30c8\u306e\u53c2\u7167\u3092\u691c\u51fa\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u30b5\u30e0\u30cd\u30a4\u30eb\u306b\u5c0f\u3055\u3044\u70b9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Unreferenced Asset",src:n(89570).A+"",width:"106",height:"104"})}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"Editor\u306f\u30b3\u30fc\u30c9\u3067\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u53c2\u7167\u3092\u691c\u51fa\u3067\u304d\u307e\u305b\u3093\u3002\u30a2\u30bb\u30c3\u30c8\u3092\u524a\u9664\u3059\u308b\u969b\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"})}),"\n",(0,r.jsx)(s.p,{children:"\u30a2\u30bb\u30c3\u30c8\u306b\u53c2\u7167\u304c\u3042\u308b\u5834\u5408\u306f\u3001References\u30b3\u30f3\u30c6\u30f3\u30c4\u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u4f7f\u7528\u3057\u3066\u53c2\u7167\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Asset References",src:n(91826).A+"",width:"385",height:"228"})}),"\n",(0,r.jsx)(s.p,{children:"\u53c2\u7167\u3092\u9078\u629e\u3059\u308b\u3068\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb\u306b\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},63852:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/assets-panel-14de8bcf02343c3a900d5b08557f6c8b.png"},91826:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/asset-references-46de20eb67eab172f839052064a56dae.png"},89570:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/unreferenced-asset-ec934742f75f28143455b40fde2d0ac9.png"},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>d});var i=n(96540);const r={},l=i.createContext(r);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);