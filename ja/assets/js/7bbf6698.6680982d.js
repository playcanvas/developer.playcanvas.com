"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2059],{73556:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"user-manual/graphics/lighting/lightmapping","title":"\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0","description":"PlayCanvas Lightmapping","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/lighting/lightmapping.md","sourceDirName":"user-manual/graphics/lighting","slug":"/user-manual/graphics/lighting/lightmapping","permalink":"/ja/user-manual/graphics/lighting/lightmapping","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/lightmapping.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"\u30b7\u30e3\u30c9\u30a6","permalink":"/ja/user-manual/graphics/lighting/shadows"},"next":{"title":"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3(AO)","permalink":"/ja/user-manual/graphics/lighting/ambient-occlusion"}}');var a=i(74848),l=i(28453);const t={title:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0",sidebar_position:3},r=void 0,c={},d=[{value:"\u6982\u8981",id:"overview",level:2},{value:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",id:"external-lightmap-generation",level:2},{value:"\u30c4\u30fc\u30eb",id:"tools",level:2},{value:"\u30ac\u30f3\u30de\u88dc\u6b63 (Gamma Correction)",id:"gamma-correction",level:2},{value:"UV \u30de\u30c3\u30d4\u30f3\u30b0",id:"uv-mapping",level:2},{value:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b8\u30aa\u30e1\u30c8\u30ea",id:"simple-geometry",level:3},{value:"\u4e00\u8cab\u3057\u305f\u30c6\u30af\u30bb\u30eb\u30b5\u30a4\u30ba",id:"consistent-texel-size",level:3},{value:"\u91cd\u306a\u3089\u306a\u3044UV",id:"non-overlapping-uv",level:3},{value:"\u305d\u306e\u4ed6\u306e\u30d2\u30f3\u30c8",id:"other-tips",level:2},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",id:"render-to-texture",level:2},{value:"\u30ce\u30a4\u30ba",id:"noise",level:2},{value:"\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",id:"upload-to-editor",level:2},{value:"\u6700\u5f8c\u306b",id:"final-remarks",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,a.jsx)(n.img,{alt:"PlayCanvas Lightmapping",src:i(82958).A+"",width:"800",height:"450"})}),"\n",(0,a.jsx)(n.em,{children:"The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0a\u306e\u753b\u50cf\u306e\u7d50\u679c\u3092\u5f97\u308b\u305f\u3081\u306b\u3053\u308c\u3089\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u7528\u3059\u308b",(0,a.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:"\u6700\u7d42\u30b7\u30fc\u30f3"}),"\u3068",(0,a.jsx)(n.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3078\u306e\u30ea\u30f3\u30af\u3067\u3059\uff1a\u5916\u90e8HDR\u30e9\u30a4\u30c8\u30de\u30c3\u30d7(\u3053\u306e\u30da\u30fc\u30b8\u3067\u8aac\u660e\u3057\u307e\u3059)\u3001",(0,a.jsx)(n.a,{href:"/user-manual/graphics/lighting/ambient-occlusion/",children:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3"}),"\u3001HDR Cubemap\u306f\u3001",(0,a.jsx)(n.a,{href:"/user-manual/graphics/physical-rendering/image-based-lighting/",children:"Image Based Lighting"}),"\u6280\u6cd5\u3092\u4f7f\u7528\u3057\u305fBox Projection\u3067\u9069\u7528\u3055\u308c\u3001\u73fe\u5b9f\u7684\u306a\u53cd\u5c04\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"\u6982\u8981"}),"\n",(0,a.jsx)(n.p,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210\u306f\u9759\u7684\u30b7\u30fc\u30f3\u306e\u7167\u660e\u60c5\u5831\u3092\u4e8b\u524d\u306b\u8a08\u7b97\u3057\u3001\u591a\u304f\u306e\u5834\u5408\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u9069\u7528\u3055\u308c\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u683c\u7d0d\u3059\u308b\u51e6\u7406\u3067\u3059\u3002\u3053\u308c\u306f\u30e9\u30a4\u30c8\u30bd\u30fc\u30b9\u3084\u5f62\u72b6\u306e\u591a\u304f\u304c\u9759\u7684\u307e\u305f\u306f\u74b0\u5883\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u30b7\u30fc\u30f3\u3092\u7167\u3089\u3059\u52b9\u7387\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["PlayCanvas\u3067\u306f\u3001\u30b7\u30fc\u30f3\u5185\u3067\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3059\u308b\uff12\u3064\u306e\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\uff1a\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u305f",(0,a.jsx)(n.strong,{children:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210"}),"\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u3057\u3066\u3044\u308b\u9593\u307e\u305f\u306f\u8aad\u307f\u8fbc\u307f\u4e2d\u306b\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u308b",(0,a.jsx)(n.a,{href:"/user-manual/graphics/lighting/runtime-lightmaps/",children:(0,a.jsx)(n.strong,{children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0"})}),"\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u5916\u90e8\u30c4\u30fc\u30eb\u304b\u3089\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u969b\u306e\u8a73\u7d30\u3068\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"external-lightmap-generation",children:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210"}),"\n",(0,a.jsx)(n.p,{children:"\u591a\u304f\u306e3D\u30b3\u30f3\u30c6\u30f3\u30c4\u30c4\u30fc\u30eb\u306b\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u30013DS Max\u3001Maya\u3001Blender\u3001\u307e\u305f\u3001\u4ed6\u306e\u30c4\u30fc\u30eb\u306b\u306f\u3059\u3079\u3066\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u30d9\u30a4\u30af\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210\u306b\u30aa\u30d5\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u5229\u70b9\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30a4\u30eb\u30df\u30cd\u30fc\u30b7\u30e7\u30f3\u3001\u30d0\u30a6\u30f3\u30b9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3001\u30bd\u30d5\u30c8\u30b7\u30e3\u30c9\u30a6\u3001\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u306a\u3069\u306e\u6d17\u7df4\u3055\u308c\u305f\u7167\u660e\u306e\u8a08\u7b97\u304c\u3067\u304d\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u4e3b\u8981\u306a\u6b20\u70b9\u306f\u30013D\u30c4\u30fc\u30eb\u5185\u3067\u30b7\u30fc\u30f3\u3092\u5b8c\u5168\u306b\u63cf\u5199\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002PlayCanvas\u30b7\u30fc\u30f3\u304c\u30a8\u30c7\u30a3\u30bf\u5185\u306b\u6ca2\u5c71\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u914d\u7f6e\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c4\u30fc\u30eb\u306e\u4e2d\u306b\u3053\u308c\u3092\u518d\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5916\u90e8\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001\u901a\u5e38\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\u3068\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3092\u3057\u3066\u6a19\u6e96\u306ePhysical Material\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30b9\u30ed\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u6dfb\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"tools",children:"\u30c4\u30fc\u30eb"}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u30013ds Max\u3068VRay\u3092\u4f7f\u7528\u3057\u3066\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u751f\u6210\u3057\u307e\u3059\u304c\u3001\u4ed6\u306e\u540c\u69d8\u306e\u30e2\u30c7\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb\u3067\u3082\u540c\u3058\u6a5f\u80fd\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"gamma-correction",children:"\u30ac\u30f3\u30de\u88dc\u6b63 (Gamma Correction)"}),"\n",(0,a.jsx)(n.p,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u307e\u305f\u306f\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3068\u304d\u306f\u3001\u30ab\u30e9\u30fc\u30ab\u30fc\u30d6\u304c\uff12\u5ea6\u30ac\u30f3\u30de\u88dc\u6b63\u306e\u5f71\u97ff\u3092\u53d7\u3051\u306a\u3044\u3088\u3046\u306b\u3001\u7dda\u5f62\u30b9\u30da\u30fc\u30b9\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002PlayCanvas Engine\u306f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u4e2d\u306b\u30ac\u30f3\u30de\u88dc\u6b63\u3092\u9069\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"3ds Max\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3(\u30ac\u30f3\u30de/ LUT\u88dc\u6b63\u3092\u6709\u52b9\u306b\u3059\u308b)\u3092\u7121\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u74b0\u5883\u8a2d\u5b9a(\u30ab\u30b9\u30bf\u30de\u30a4\u30ba > \u74b0\u5883\u8a2d\u5b9a)\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"3ds Max &gt; Preferences &gt; Linear Space",src:i(4120).A+"",width:"600",height:"636"})}),"\n",(0,a.jsx)(n.p,{children:"\u6b21\u306b\u3001\u30ab\u30e9\u30fc\u30de\u30c3\u30d4\u30f3\u30b0\u304c\u66f4\u65b0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u8a2d\u5b9a(F10\u3001\u307e\u305f\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304b\u3089\u30c6\u30af\u30b9\u30c1\u30e3\u30a6\u30a3\u30f3\u30c9\u30a6)\u306b\u3042\u308a\u307e\u3059\u3002\u51fa\u529b\u306f\u30af\u30e9\u30f3\u30d7\u3084\u5f8c\u51e6\u7406\u3055\u308c\u308b\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093(Mode\u30aa\u30d7\u30b7\u30e7\u30f3)\u3002Linear Multiply\u306f\u7dda\u5f62\u8272\u7a7a\u9593\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u4ee5\u4e0b\u306f\u3001\u3069\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u3069\u306e\u5024\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u3059\u3002Default\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u8a2d\u5b9a\u3092Expert\u306b\u5c55\u958b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"3D&#39;s Max &gt; Render Settings",src:i(28783).A+"",width:"330",height:"165"})}),"\n",(0,a.jsx)(n.h2,{id:"uv-mapping",children:"UV \u30de\u30c3\u30d4\u30f3\u30b0"}),"\n",(0,a.jsx)(n.p,{children:"\u30b8\u30aa\u30e1\u30c8\u30ea\u306b\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u9069\u7528\u3059\u308b\u306b\u306f\u3001\u6700\u521d\u306b\u30a2\u30f3\u30e9\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u9069\u3057\u305fUV\u3092\u5f97\u308b\u306e\u306b\u5f79\u7acb\u3064\u3044\u304f\u3064\u304b\u306e\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"simple-geometry",children:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b8\u30aa\u30e1\u30c8\u30ea"}),"\n",(0,a.jsx)(n.p,{children:"\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u9762\u7a4d\u306f\u5c0f\u3055\u3044\u65b9\u304c\u826f\u3044\u3067\u3059\u3002\u4e09\u89d2\u5f62\u306e\u9762\u7a4d\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3001\u898b\u3048\u306a\u3044\u4e09\u89d2\u5f62\u3092\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u9762\u7a4d\u304c\u5927\u304d\u304f\u306a\u308b\u3068\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u8a73\u7d30\u3092\u6e1b\u3089\u3057\u3001\u3088\u308a\u5927\u304d\u306a\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u5fc5\u8981\u3068\u3057\u3001\u6642\u306b\u306f\u8907\u6570\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Lighmapping Tips: Simple Geometry",src:i(40638).A+"",width:"800",height:"319"})}),"\n",(0,a.jsx)(n.h3,{id:"consistent-texel-size",children:"\u4e00\u8cab\u3057\u305f\u30c6\u30af\u30bb\u30eb\u30b5\u30a4\u30ba"}),"\n",(0,a.jsx)(n.p,{children:"\u540c\u3058\u30b8\u30aa\u30e1\u30c8\u30ea\u5185\u306e\u4ed6\u306e\u30c6\u30af\u30bb\u30eb\u3068\u6bd4\u8f03\u3057\u3066\u3001UV\u306e\u30c6\u30af\u30bb\u30eb\u3092\u4f38\u3070\u3055\u305a\u306b\u4e00\u5b9a\u306b\u4fdd\u3061\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30c7\u30a3\u30c6\u30fc\u30eb\u30ec\u30d9\u30eb\u304c\u30b7\u30fc\u30f3\u5185\u3067\u4e00\u8cab\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u3067\u3059\u3002\u30c6\u30af\u30b9\u30c1\u30e3\u30b5\u30a4\u30ba\u306e\u30d0\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30d3\u30b8\u30e5\u30a2\u30eb\u304a\u3088\u3073\u6700\u9069\u5316\u306e\u5224\u65ad\u306b\u5fdc\u3058\u3066\u30b8\u30aa\u30e1\u30c8\u30ea\u3092\u8fd1\u3065\u3051\u305f\u308a\u3001\u9060\u304f\u96e2\u3057\u305f\u5834\u5408\u306b\u9069\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Lighmapping Tips: UV Consistent Texel Size",src:i(66208).A+"",width:"800",height:"298"})}),"\n",(0,a.jsx)(n.h3,{id:"non-overlapping-uv",children:"\u91cd\u306a\u3089\u306a\u3044UV"}),"\n",(0,a.jsx)(n.p,{children:"UV\u306e\u4e09\u89d2\u5f62\u306f\u91cd\u306a\u308a\u5408\u308f\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u3001\u5404\u30d4\u30af\u30bb\u30eb\u304c\u30b8\u30aa\u30e1\u30c8\u30ea\u4e0a\u306e3D\u7a7a\u9593\u5185\u3067\u72ec\u7279\u306e\u4f4d\u7f6e\u3092\u6301\u3061\u3001\u72ec\u81ea\u306e\u7167\u660e\u60c5\u5831\u3092\u9069\u5207\u306b\u683c\u7d0d\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306eUV\u7a7a\u9593\u306f\u30af\u30e9\u30f3\u30d7\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001UV\u306f0.0\u301c1.0\u306e\u9593\u306b\u542b\u307e\u308c\u3001\u5916\u5074\u306b\u306f\u51fa\u307e\u305b\u3093\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Lighmapping Tips: Non-overlapping UV",src:i(98513).A+"",width:"800",height:"303"})}),"\n",(0,a.jsx)(n.h2,{id:"other-tips",children:"\u305d\u306e\u4ed6\u306e\u30d2\u30f3\u30c8"}),"\n",(0,a.jsx)(n.p,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u826f\u3044\u7d50\u679c\u3092\u5f97\u308b\u306b\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u30ab\u30e1\u30e9\u306e\u8996\u70b9\u3067\u306f\u306a\u304f\u3001\u5149\u306e\u4f1d\u64ad\u306b\u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u306e\u307f\u306b\u57fa\u3065\u3044\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\u30de\u30c6\u30ea\u30a2\u30eb\u306e ",(0,a.jsx)(n.strong,{children:"\u30ce\u30fc\u30de\u30eb\u30de\u30c3\u30d7\u3092\u7121\u52b9\u306b\u3059\u308b"}),"  - \u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30b9\u306e\u30c7\u30a3\u30c6\u30fc\u30eb\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u95a2\u9023\u3059\u308b\u306b\u306f\u5c0f\u3055\u3059\u304e\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u30de\u30c6\u30ea\u30a2\u30eb\u306e ** Reflection\u30920 **\u306b\u3001",(0,a.jsx)(n.strong,{children:"Gloss Maps\u3092\u7121\u52b9"})," \u306b\u8a2d\u5b9a\u3059\u308b - \u53cd\u5c04\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u554f\u984c\u306b\u7e4b\u304c\u308a\u3001\u8996\u899a\u7684\u306a\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306f\u62e1\u6563\u7167\u660e\u306e\u307f\u3092\u542b\u3080\u5fc5\u8981\u304c\u3042\u308a\u3001\u53cd\u5c04\u7387\u306f\u30e9\u30f3\u30bf\u30a4\u30e0\u6280\u8853\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u975e\u5e38\u306b\u6697\u3044\u6750\u6599\u306f\u5149\u3092\u3042\u307e\u308a\u53cd\u5c04\u305b\u305a\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30a4\u30eb\u30df\u30cd\u30fc\u30b7\u30e7\u30f3\u306e\u30d7\u30e9\u30b9\u306b\u306a\u3089\u305a\u3001 ",(0,a.jsx)(n.strong,{children:"\u826f\u3044\u7d50\u679c\u3092\u751f\u307f\u307e\u305b\u3093"})," \u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["Render To Texture\u30a6\u30a3\u30f3\u30c9\u30a6(\u4e0b\u8a18\u53c2\u7167)\u3067\u3001 ",(0,a.jsx)(n.strong,{children:"Padding"})," \u3092\u3088\u308a\u5927\u304d\u306a\u5024\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u30e9\u30a4\u30c8\u306f\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u5f8c\u308d\u304b\u3089\u30ea\u30fc\u30af\u3059\u308b\u3053\u3068\u304c\u3042\u308b"})," \u306e\u3067\u3001\u305d\u308c\u3092\u9632\u3050\u305f\u3081\u306b\u30d6\u30ed\u30c3\u30ad\u30f3\u30b0\u30b8\u30aa\u30e1\u30c8\u30ea\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Lighmapping Light Leaking",src:i(80283).A+"",width:"400",height:"927"})}),"\n",(0,a.jsx)(n.h2,{id:"render-to-texture",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"}),"\n",(0,a.jsx)(n.p,{children:"\u30e2\u30c7\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb\u304b\u3089\u7167\u660e\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u30e9\u30a4\u30c8\u30c7\u30fc\u30bf\u3092\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002 \u89e3\u50cf\u5ea6\u3068\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["3ds Max\u3067\u306f\u3001\u3053\u308c\u306fRender To Texture\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u4f7f\u7528\u3057\u3066\u884c\u3044\u307e\u3059\u3002Padding\u3092\u3088\u308a\u5927\u304d\u306a\u5024\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u30012\u756a\u76ee\u306eUV\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u9078\u629e\u3001\u30ec\u30f3\u30c0\u30e9\u306b\u5fdc\u3058\u3066\u51fa\u529b\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3002 \u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u306f",(0,a.jsx)(n.code,{children:"VRayRawTotalLightingMap"}),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Render To Texture: PlayCanvas Lightmapping",src:i(65673).A+"",width:"558",height:"1295"})}),"\n",(0,a.jsx)(n.h2,{id:"noise",children:"\u30ce\u30a4\u30ba"}),"\n",(0,a.jsx)(n.p,{children:"\u72b6\u6cc1\u306b\u3088\u3063\u3066\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u54c1\u8cea\u3068\u6642\u9593\u306b\u5fdc\u3058\u3066\u3001\u51fa\u529b\u306e\u7167\u660e\u30c7\u30fc\u30bf\u304c\u5b8c\u5168\u3067\u306f\u306a\u304f\u3001\u30ce\u30a4\u30ba\u306b\u60a9\u307e\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u7aef\u3092\u307c\u304b\u3059\u3053\u3068\u306a\u304f\u9762\u306e\u90e8\u5206\u3092\u6ed1\u3089\u304b\u306b\u3059\u308b\u3088\u3046\u3001\u307c\u304b\u3057\u3092\u753b\u50cf\u306b\u9069\u7528\u3059\u308b\u3053\u3068\u3067\u7c21\u5358\u306b\u89e3\u6c7a\u3067\u304d\u307e\u3059\u3002Photoshop\u3067\u306f\u3001\u3053\u308c\u306fSurface Blur\u30d5\u30a3\u30eb\u30bf\u3092\u4f7f\u7528\u3057\u3066\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Lightmapping: Photoshop &gt; Surface Blur",src:i(65558).A+"",width:"400",height:"682"})}),"\n",(0,a.jsx)(n.h2,{id:"upload-to-editor",children:"\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u308c\u3067\uff12\u3064\u76ee\u306eUV\u30c1\u30e3\u30f3\u30cd\u30eb(UV1)\u3068HDR\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f7f\u7528\u3057\u305f\u30b8\u30aa\u30e1\u30c8\u30ea\u304c\u3067\u304d\u305f\u306e\u3067\u3001\u305d\u308c\u3089\u3092PlayCanvas\u30b7\u30fc\u30f3\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3066\u884c\u3044\u307e\u3059\u3002\u30b8\u30aa\u30e1\u30c8\u30ea\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3001\u81ea\u52d5\u7684\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u5404\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u9078\u629e\u3057\u3001\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u3092\u3059\u308b\u304b\u3001Lightmap\u30b9\u30ed\u30c3\u30c8\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"PlayCanvas Editor: Material Lightmap Texture Slot",src:i(26883).A+"",width:"306",height:"146"})}),"\n",(0,a.jsx)(n.h2,{id:"final-remarks",children:"\u6700\u5f8c\u306b"}),"\n",(0,a.jsx)(n.p,{children:"\u30ac\u30f3\u30de\u88dc\u6b63\u3001\u30c8\u30fc\u30f3\u30de\u30c3\u30d4\u30f3\u30b0\u3001\u9732\u51fa \u306f\u3001\u30b7\u30fc\u30f3\u306b\u5fc5\u8981\u306a\u7279\u5fb4\u3068\u8272\u3092\u52a0\u3048\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u826f\u3044\u8a2d\u5b9a\u3067\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3063\u305f",(0,a.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:"\u4f8b"}),"\u3084\u3001",(0,a.jsx)(n.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4120:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3ds-max-preferences-fef399133705691ed7589b4d42861847.png"},28783:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},65673:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3ds-max-render-to-texture-window-a883447c11290404608d3376bf0eca84.png"},80283:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/lightmapping-light-leak-00e37ceff23603114d9d5143fd8bd072.jpg"},26883:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/lightmapping-material-slot-932da6d087715ac3963fcb684a5f7950.png"},65558:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/lightmapping-surface-blur-7cccf4dcaa2ed80e2a6bd081c838dc45.jpg"},82958:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/playcanvas-lightmapping-scene-839426fc6835a0b39b941115c90cc21e.jpg"},66208:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/uv-consistency-106ecdde67f70e75071f4864595bf188.jpg"},40638:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/uv-geometry-81a905575cb8d050928e5171fa1c14a6.jpg"},98513:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/uv-overlapping-ac340c97a51edee545af986645fe9cd9.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(96540);const a={},l=s.createContext(a);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);