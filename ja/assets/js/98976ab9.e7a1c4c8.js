"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[13816],{30029:(A,E,g)=>{g.r(E),g.d(E,{assets:()=>e,contentTitle:()=>i,default:()=>s,frontMatter:()=>Q,metadata:()=>I,toc:()=>t});const I=JSON.parse('{"id":"tutorials/basic-materials","title":"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u57fa\u672c\u8a2d\u5b9a","description":"\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u30013D\u30e2\u30c7\u30eb\u306e\u8868\u9762\u306e\u5916\u89b3\u3092\u5b9a\u7fa9\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u6700\u3082\u5358\u7d14\u306a\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u30dd\u30ea\u30b4\u30f3\u306e\u8272\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u6700\u3082\u8907\u96d1\u306a\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u6d77\u306e\u8868\u9762\u3084\u30ac\u30e9\u30b9\u3092\u901a\u904e\u3059\u308b\u5149\u306e\u632f\u308b\u821e\u3044\u306a\u3069\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/basic-materials.md","sourceDirName":"tutorials","slug":"/tutorials/basic-materials","permalink":"/ja/tutorials/basic-materials","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/basic-materials.md","tags":[{"inline":true,"label":"materials","permalink":"/ja/tags/materials"},{"inline":true,"label":"basics","permalink":"/ja/tags/basics"}],"version":"current","frontMatter":{"title":"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u57fa\u672c\u8a2d\u5b9a","tags":["materials","basics"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"\u30ab\u30e1\u30e9\u306e\u57fa\u672c\u64cd\u4f5c","permalink":"/ja/tutorials/basic-cameras"},"next":{"title":"Basic touch input","permalink":"/ja/tutorials/basic-touch-input"}}');var B=g(74848),C=g(28453);const Q={title:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u57fa\u672c\u8a2d\u5b9a",tags:["materials","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},i=void 0,e={},t=[{value:"\u30b9\u30c6\u30c3\u30d71 - \u30b7\u30fc\u30f3\u306b\u30ad\u30e5\u30fc\u30d6\u3092\u8ffd\u52a0",id:"\u30b9\u30c6\u30c3\u30d71---\u30b7\u30fc\u30f3\u306b\u30ad\u30e5\u30fc\u30d6\u3092\u8ffd\u52a0",level:2},{value:"\u30b9\u30c6\u30c3\u30d72 - \u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210",id:"\u30b9\u30c6\u30c3\u30d72---\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210",level:2},{value:"\u30b9\u30c6\u30c3\u30d73 - \u30ad\u30e5\u30fc\u30d6\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b",id:"\u30b9\u30c6\u30c3\u30d73---\u30ad\u30e5\u30fc\u30d6\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d74 - \u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8272\u3092\u5909\u66f4\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d74---\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8272\u3092\u5909\u66f4\u3059\u308b",level:2},{value:"\u30dc\u30fc\u30ca\u30b9 - \u30de\u30c6\u30ea\u30a2\u30eb\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30dc\u30fc\u30ca\u30b9---\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8ffd\u52a0\u3059\u308b",level:2}];function n(A){const E={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,C.R)(),...A.components};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(E.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u30013D\u30e2\u30c7\u30eb\u306e\u8868\u9762\u306e\u5916\u89b3\u3092\u5b9a\u7fa9\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u6700\u3082\u5358\u7d14\u306a\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u30dd\u30ea\u30b4\u30f3\u306e\u8272\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u6700\u3082\u8907\u96d1\u306a\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u6d77\u306e\u8868\u9762\u3084\u30ac\u30e9\u30b9\u3092\u901a\u904e\u3059\u308b\u5149\u306e\u632f\u308b\u821e\u3044\u306a\u3069\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u4f5c\u6210\u65b9\u6cd5\u3001\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u5f62\u72b6\u3078\u306e\u5272\u308a\u5f53\u3066\u3001\u304a\u3088\u3073\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u7de8\u96c6\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u307e\u305a\u3001\u65b0\u3057\u3044\u7a7a\u306e\u30b7\u30fc\u30f3\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,B.jsx)(E.h2,{id:"\u30b9\u30c6\u30c3\u30d71---\u30b7\u30fc\u30f3\u306b\u30ad\u30e5\u30fc\u30d6\u3092\u8ffd\u52a0",children:"\u30b9\u30c6\u30c3\u30d71 - \u30b7\u30fc\u30f3\u306b\u30ad\u30e5\u30fc\u30d6\u3092\u8ffd\u52a0"}),"\n",(0,B.jsx)(E.p,{children:'\u30b7\u30fc\u30f3\u306e\u30eb\u30fc\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u521d\u671f\u306e\u540d\u524d\u306f "Root" \u3068\u547c\u3070\u308c\u307e\u3059\u3002\u5c5e\u6027\u30a8\u30c7\u30a3\u30bf\u3067\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u540d\u524d\u3092 "Material Tutorial" \u306e\u3088\u3046\u306a\u610f\u5473\u306e\u3042\u308b\u540d\u524d\u306b\u5909\u66f4\u3057\u307e\u3059\u3002'}),"\n",(0,B.jsx)(E.p,{children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d1\u30cd\u30eb\u3067 'New Entity'-> 'Box' \u30e1\u30cb\u30e5\u30fc\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306b\u65b0\u3057\u3044\u30dc\u30c3\u30af\u30b9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.p,{children:(0,B.jsx)(E.img,{alt:"New Box",src:g(13406).A+"",width:"427",height:"239"})}),"\n",(0,B.jsx)(E.h2,{id:"\u30b9\u30c6\u30c3\u30d72---\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210",children:"\u30b9\u30c6\u30c3\u30d72 - \u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210"}),"\n",(0,B.jsx)(E.p,{children:"PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304b\u3089\u76f4\u63a5\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067+\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u65b0\u3057\u3044\u30a2\u30bb\u30c3\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304d\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.p,{children:(0,B.jsx)(E.img,{alt:"Add Material",src:g(76710).A+"",width:"293",height:"333"})}),"\n",(0,B.jsx)(E.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u30a2\u30bb\u30c3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u3001\u753b\u9762\u306e\u53f3\u5074\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u30a8\u30c7\u30a3\u30bf\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30de\u30c6\u30ea\u30a2\u30eb\u30a8\u30c7\u30a3\u30bf\u3067\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u540d\u524d\u3092\u300cBox Material\u300d\u3068\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,B.jsx)(E.h2,{id:"\u30b9\u30c6\u30c3\u30d73---\u30ad\u30e5\u30fc\u30d6\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b",children:"\u30b9\u30c6\u30c3\u30d73 - \u30ad\u30e5\u30fc\u30d6\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b"}),"\n",(0,B.jsx)(E.p,{children:"\u30a8\u30c7\u30a3\u30bf\u3067\u65b0\u3057\u3044\u30ad\u30e5\u30fc\u30d6\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d7\u30ec\u30fc\u30f3\u306a\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30b7\u30fc\u30f3\u5185\u306e\u30e2\u30c7\u30eb\u306b\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u304b\u3089\u30e2\u30c7\u30eb\u3092\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u3001\u5272\u308a\u5f53\u3066\u305f\u3044\u30e2\u30c7\u30eb\u306e\u4e0a\u306b\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.h2,{id:"\u30b9\u30c6\u30c3\u30d74---\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8272\u3092\u5909\u66f4\u3059\u308b",children:"\u30b9\u30c6\u30c3\u30d74 - \u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8272\u3092\u5909\u66f4\u3059\u308b"}),"\n",(0,B.jsxs)(E.p,{children:["\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8272\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e ",(0,B.jsx)(E.em,{children:"Diffuse"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,B.jsx)(E.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067\u305d\u308c\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u30dc\u30c3\u30af\u30b9\u3092\u9078\u629e\u3057\u305f\u3068\u304d\u306b\u30d7\u30ed\u30d1\u30c6\u30a3\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.p,{children:(0,B.jsx)(E.img,{alt:"Diffuse Color",src:g(1703).A+"",width:"313",height:"175"})}),"\n",(0,B.jsx)(E.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u30a8\u30c7\u30a3\u30bf\u306e\u53f3\u30d1\u30cd\u30eb\u3067\u3001Diffuse\u8a2d\u5b9a\u30d1\u30cd\u30eb\u3092\u5c55\u958b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ab\u30e9\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306eDiffuse\u30ab\u30e9\u30fc\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.h2,{id:"\u30dc\u30fc\u30ca\u30b9---\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8ffd\u52a0\u3059\u308b",children:"\u30dc\u30fc\u30ca\u30b9 - \u30de\u30c6\u30ea\u30a2\u30eb\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8ffd\u52a0\u3059\u308b"}),"\n",(0,B.jsx)(E.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8272\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u826f\u3044\u30b9\u30bf\u30fc\u30c8\u3067\u3059\u304c\u3001\u30d5\u30e9\u30c3\u30c8\u306a\u8272\u3060\u3051\u3067\u306f\u8a73\u7d30\u306a\u8868\u73fe\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30de\u30c3\u30d7\u304c\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.p,{children:"\u3053\u3061\u3089\u304b\u3089\u30b5\u30f3\u30d7\u30eb\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,B.jsx)(E.p,{children:(0,B.jsx)(E.img,{alt:"Sample Diffuse Map",src:g(95505).A+"",width:"512",height:"512"})}),"\n",(0,B.jsx)(E.p,{children:(0,B.jsx)(E.img,{alt:"Sample Normal Map",src:g(83313).A+"",width:"512",height:"512"})}),"\n",(0,B.jsx)(E.p,{children:"\u305d\u306e\u5f8c\u3001\u30a8\u30c7\u30a3\u30bf\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"}),"\n",(0,B.jsxs)(E.p,{children:["\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u30b9\u30ed\u30c3\u30c8\u306b\u305d\u308c\u3089\u3092\u5272\u308a\u5f53\u3066\u308b\u6642\u304c\u6765\u307e\u3057\u305f\u3002\u524d\u8ff0\u306e\u3088\u3046\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u9078\u629e\u3057\u3066\u3001Diffuse\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u958b\u304d\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u304b\u3089 ",(0,B.jsx)(E.code,{children:"proto_orange"})," \u30c6\u30af\u30b9\u30c1\u30e3\u3092\u7a7a\u306e\u62e1\u6563\u30b9\u30ed\u30c3\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002\u6b21\u306bNormals\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u958b\u304d\u3001 ",(0,B.jsx)(E.code,{children:"proto_gray_n"})," \u30c6\u30af\u30b9\u30c1\u30e3\u3092Normal\u30de\u30c3\u30d7\u30b9\u30ed\u30c3\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002"]}),"\n",(0,B.jsx)(E.p,{children:"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,B.jsx)(E.p,{children:(0,B.jsx)(E.img,{alt:"Cube",src:g(4588).A+"",width:"527",height:"527"})}),"\n",(0,B.jsxs)(E.p,{children:["\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u30ad\u30e5\u30fc\u30d6\u306b\u5dfb\u304d\u4ed8\u3051\u3089\u308c\u308b\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001 ",(0,B.jsx)(E.strong,{children:"Tiling"})," \u304a\u3088\u3073 ",(0,B.jsx)(E.strong,{children:"Offset"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5909\u66f4\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,B.jsxs)(E.p,{children:["\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u306e\u306b\u3055\u3089\u306b\u6df1\u3044\u77e5\u8b58\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30de\u30cb\u30e5\u30a2\u30eb\u306e",(0,B.jsx)(E.a,{href:"/user-manual/graphics/physical-rendering/physical-materials/",children:"\u7269\u7406\u30de\u30c6\u30ea\u30a2\u30eb"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function s(A={}){const{wrapper:E}={...(0,C.R)(),...A.components};return E?(0,B.jsx)(E,{...A,children:(0,B.jsx)(n,{...A})}):n(A)}},1703:(A,E,g)=>{g.d(E,{A:()=>I});const I=g.p+"assets/images/diffuse-panel-8efd20e05fec555f4d8c541508844b77.jpg"},4588:(A,E,g)=>{g.d(E,{A:()=>I});const I=g.p+"assets/images/diffuse_normal_cube-bc6d7bf352d50a13ae86f3f0f909dff4.jpg"},13406:(A,E,g)=>{g.d(E,{A:()=>I});const I=g.p+"assets/images/new-box-aa54fc57b102e9cf681f632e37851c00.jpg"},76710:(A,E,g)=>{g.d(E,{A:()=>I});const I=g.p+"assets/images/new-material-786b409bac747ebe240d83ebb0dd54ba.jpg"},83313:(A,E,g)=>{g.d(E,{A:()=>I});const I="data:image/png;base64,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"},95505:(A,E,g)=>{g.d(E,{A:()=>I});const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABCFBMVEXIyMjEd1DEd1HEf1vEh2fEeFHEf1zEh2jEflrEhmbEgV/Fln7Gq57HwL3Eg2LFnIfGr6THvbjHxcTHxcPHvLfGqJnEhmfHx8bFm4bHvrnGqZvFlX3Hu7bGpJLFkHbEgmHEelTEeFLEhGPGppbFj3PGoY/Hs6rEflvHw8HEelXHxMPHtq7HurTGo5HFjnLHuLDHwsDFi27Ht6/FnYjHtKvEfFjFj3TGpZTEeVPGo5LFnIjHxMLFjG/Fm4XFjHDHxsXHxsbFkHXFkXfEeVTFnorFknjHt7DFmoXEe1fEfVnHubLHwr/Fn4vHwLzEiWrHtq3Hta3FnYnEgF3Eh2nEf13EiGnEiWv///8Tv5qtAAAAAWJLR0RXfQrZHwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QDFgsLCwugbgUAAAcFSURBVHja7dtZU9NQGIDhL6FtABUEtKi4gIpR1gqiuICI+65s//+neIHIWgZvnPGc57vITNOr9DyTvD2dRhhjsp4i3yl7Go2eMuMPIHcAzVZVtZoA5HsHaDUaLXeAjAH09vX1AgAAACIQABEIgAgEQAMAAAAAIvA/Xs/9Ne0/d/7C/voODF4cGh65dLkNQLIReATA4a3+vfdGrwCQagQeWcyr18b6909dv3Hz1vjE7TsRdwFItAFOWMzjpybjHgA5A6jjPgDJRuAZTj2IKQCSjcDp4amZ2dapAOZiHoBkIzAiIjoPTwHQXIhFABJtgEdj/RNLj+ej0+oO4EkMjQOQKIDdWZ6Op10BPIvnlX2AVCPw97yImW4AVmJ4tQAg1Qj80/kjXQCsxMu5AoBkI/DEL3oH3hiMtVcFAKk3QLHa5RGwGGvrBQDJA3i9ELMnAXgTo28LABKOwHfvqw/lx/VP8bk+AcCX4+svAtOKwL0ffL9+O/x6d40P/BmsBiDJCOyb/N4Z7fz4uVQAkHUE/uU9AwAARCAAIhAAEQiABgAAAABEIAAiEAARCIAGAAAAAEQgACIQABEIgAYAAAAARCAAIhAAEQiABgAAAABEIAAiEAARCIAGAAAAAEQgACIQABEIgAYAAAAARCAAIhAAEQiABgAAAABEIAAiEAARCIAGAAAAAEQgACIQABEIgAYAAAAARCAAIhAAEQiABgAAAABEIAAiEAARCIAGAAAAAEQgACIQABEIgAYAAAAARCAAIhAAEQiABgAAAABEIAAiEAARCIAGAAAAAEQgACIQABEIgAYAAAAARCAAIhAAEQiABgAAAABEIAAiEAARCIAGAAAAEQiACARABAKgAQAAAAARCIAIBEAEAqABAAAAABEIgAgEQAQCoAEAAAAAEQiACARABAKgAQAAAAARCIAIBEAEAqABAAAAABEIgAgEQAQCoAEAAAAAEQiACARABAKgAQAAAAARCIAIBEAEAqABAAAAABEIgAgEQAQCoAEAAAAAEQiACARABAKgAQAAAAARCIAIBEAEAqABAAAAABEIgAgEQAQCoAEAAAAAEQiACARABAKgAQAAAAARCIAIBEAEAqABAAAAABEIgAgEQAQCoAEAAAAAEQiACARABAKgAQAAAAARCIAIBEAEAqABAABABIpAEQiACARAAwAAAAAiEAARCIAIBEADAAAAACIQABEIgAgEQAMAAAAAIhAAEQiACARAAwAAAAAiEAARCIAIBEADAAAAACIQABEIgAgEQAMAAAAAIhAAEQiACARAAwAAAAAiEAARCIAIBEADAAAAACIQABEIgAgEQAMAAAAAIhAAEQiACARAAwAAAAAi8F8CKJtlWeZ5WN7Y3NxYzvbym2VERNStuq7zPGwNbG8PbGV7+a06IiLajXa7neehqnZ2qirby2+0AQDAIyD7R4AIzDwC7QTaB7ARBAAAANgJBCCz8XOwCBSBGgAAAAAQgQCIQABEIAAaAAAAABCBAIhAAEQgABoAAAAAEIEAiEAARCAAGgAAAAAQgQCIQABEIAAaAAAAABCBAIhAAEQgABoAAAAAEIEAiEAARCAAGgAAAAAQgQCIQABEIAAaAAAAABCBAIhAAEQgABoAAAAAEIEAiEAARCAAGgAAAAAQgQCIQABEIAAaAAAAABCBAIhAAEQgABoAAAAAEIEAiEAARCAAGgAAAAAQgQCIQABEIAAaAAAAABCBAIhAAEQgABoAAAAAEIEAiEAARCAAGgAAAAAQgQCIQABEIAAaAAAAABCBAIhAAESgBtAAAAAgAgEQgQCIQAA0AAAAACACARCBAIhAADQAAAAAIAIBEIEAiEAANAAAAAAgAgEQgQCIQAA0AAAAACACARCBAIhAADQAAAAAIAIBEIEAiEAANAAAAAAgAgEQgQCIQAA0AAAAACACARCBAIhAADQAAAAAIAIBEIEAiEAANAAAAAAgAgEQgQCIQAA0AAAAACACARCBAIhAADQAAAAAIAIBEIEAiEAANAAAAAAgAgEQgQCIQAA0AAAAACACARCBAIhAADQAAAAAIAIBEIEAiEAANAAAAAAgAgEQgQCIQAA0AAAAACACARCBAIhAADQAAACIQABEIAAiEAANAAAAAIhAAEQgACIQAA0AAAAAiEAARCAAIhAADQAAAACIQABEIAAiEAANAAAAAIhAAEQgACIQAA0AAAAAiEAARCAAIhAADQAAAACIQABEIAAiEAANAAAAAIhAAEQgACIQAA0AAAAAiEAARCAAIhAADQAAAACIQABEIAAiEAANAAAAAIhAAEQgACIQAA0AAAAAiEAARCAAIhAADQAAAACIQABEIAAiEAANAAAAAIhAAEQgACIQAA0AAAAAiEAARCAAIvCsAIwx2c4vZjMAJDKaUVMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMjJUMTE6MTE6MDgrMDA6MDChbJeVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAzLTIyVDExOjExOjA4KzAwOjAw0DEvKQAAAABJRU5ErkJggg=="},28453:(A,E,g)=>{g.d(E,{R:()=>Q,x:()=>i});var I=g(96540);const B={},C=I.createContext(B);function Q(A){const E=I.useContext(C);return I.useMemo((function(){return"function"==typeof A?A(E):{...E,...A}}),[E,A])}function i(A){let E;return E=A.disableParentContext?"function"==typeof A.components?A.components(B):A.components||B:Q(A.components),I.createElement(C.Provider,{value:E},A.children)}}}]);