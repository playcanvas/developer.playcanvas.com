"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[46906],{14274:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"user-manual/graphics/physical-rendering/image-based-lighting","title":"\u30a4\u30e1\u30fc\u30b8\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0(IBL)","description":"PlayCanvas\u3067\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u6700\u826f\u306e\u7d50\u679c\u3092\u5f97\u308b\u306b\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u307e\u305f\u306fIBL\u3068\u3044\u3046\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u4e8b\u524d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u30c7\u30fc\u30bf\u3092\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u304a\u3088\u3073\u53cd\u5c04\u5149\u306e\u30bd\u30fc\u30b9\u60c5\u5831\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/physical-rendering/image-based-lighting.md","sourceDirName":"user-manual/graphics/physical-rendering","slug":"/user-manual/graphics/physical-rendering/image-based-lighting","permalink":"/ja/user-manual/graphics/physical-rendering/image-based-lighting","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/physical-rendering/image-based-lighting.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"\u30a4\u30e1\u30fc\u30b8\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0(IBL)","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"\u7269\u7406\u30de\u30c6\u30ea\u30a2\u30eb","permalink":"/ja/user-manual/graphics/physical-rendering/physical-materials"},"next":{"title":"3D Gaussian Splatting","permalink":"/ja/user-manual/graphics/gaussian-splatting"}}');var s=a(74848),r=a(28453);const t={title:"\u30a4\u30e1\u30fc\u30b8\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0(IBL)",sidebar_position:2},c=void 0,l={},p=[{value:"HDR",id:"hdr",level:2},{value:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168",id:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168",level:2},{value:"Environment(\u74b0\u5883)\u30de\u30c3\u30d7\u306e\u30aa\u30fc\u30b5\u30ea\u30f3\u30b0",id:"environment\u74b0\u5883\u30de\u30c3\u30d7\u306e\u30aa\u30fc\u30b5\u30ea\u30f3\u30b0",level:2},{value:"CubeMap\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",id:"cubemap\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",level:2},{value:"IBL\u306e\u9069\u7528",id:"ibl\u306e\u9069\u7528",level:2},{value:"\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30de\u30c3\u30d4\u30f3\u30b0",id:"\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30de\u30c3\u30d4\u30f3\u30b0",level:2},{value:"\u4f8b",id:"\u4f8b",level:2}];function d(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"PlayCanvas\u3067\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u6700\u826f\u306e\u7d50\u679c\u3092\u5f97\u308b\u306b\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u307e\u305f\u306fIBL\u3068\u3044\u3046\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u4e8b\u524d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u30c7\u30fc\u30bf\u3092\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u304a\u3088\u3073\u53cd\u5c04\u5149\u306e\u30bd\u30fc\u30b9\u60c5\u5831\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u306f\u3001\u30ad\u30e5\u30fc\u30d6\u3092\u69cb\u6210\u3059\u308b6\u3064\u306e\u30c6\u30af\u30b9\u30c1\u30e3(\u9762)\u3067\u69cb\u6210\u3055\u308c\u3001\u5b8c\u5168\u306a\u30b5\u30e9\u30a6\u30f3\u30c9\u30c6\u30af\u30b9\u30c1\u30e3\u30ab\u30d0\u30ec\u30c3\u30b8\u3092\u6301\u3064\u74b0\u5883\u30de\u30c3\u30d7\u3067\u3042\u308b",(0,s.jsx)(n.a,{href:"/user-manual/assets/types/cubemap/",children:"CubeMap"}),"\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"hdr",children:"HDR"}),"\n",(0,s.jsx)(n.p,{children:"\u753b\u50cf\u30c7\u30fc\u30bf\u306fLDR\u307e\u305f\u306fHDR(\u9ad8\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30ec\u30f3\u30b8)\u306e\u8272\u7a7a\u9593\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u5358\u4e00\u30c1\u30e3\u30f3\u30cd\u30eb\u30670.0\u301c1.0(256\u968e\u8abf)\u4ee5\u4e0a\u306e\u4fdd\u5b58\u304c\u53ef\u80fd\u3067\u3059\u3002HDR\u3067\u306f\u3001\u30ac\u30f3\u30de\u88dc\u6b63\u3001\u30c8\u30fc\u30f3\u30de\u30c3\u30d4\u30f3\u30b0\u3001\u9732\u5149\u306a\u3069\u306e\u74b0\u5883\u8981\u56e0\u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u3088\u308a\u30011.0\u4ee5\u4e0a\u306e(\u767d\u8272\u3068\u898b\u306a\u3055\u308c\u307e\u3059)\u3092\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u3088\u308a\u8a73\u7d30\u306a\u5149\u306e\u8a73\u7d30\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u5149\u306e\u54c1\u8cea\u306a\u3069\u306e\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u304c\u671b\u3080\u7d50\u679c\u3092\u5f97\u3089\u308c\u308b\u3088\u3046\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u307e\u3059 \u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"HDR vs LDR CubeMap for Image Based Rendering",src:a(52240).A+"",width:"800",height:"418"})}),"\n",(0,s.jsx)(n.p,{children:"Notice how bright parts in the texture are clamped using LDR."}),"\n",(0,s.jsx)(n.h2,{id:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168",children:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u6982\u5ff5\u306f\u3001\u62e1\u6563\u5149\u304a\u3088\u3073\u53cd\u5c04\u5149\u304c\u5168\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5f53\u305f\u308b\u5149\u304b\u3089\u6765\u308b\u3068\u3044\u3046\u4e8b\u5b9f\u304b\u3089\u5f97\u3089\u308c\u3001\u62e1\u6563\u5149\u304a\u3088\u3073\u53cd\u5c04\u5149\u306e\u5408\u8a08\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5f53\u305f\u308b\u7dcf\u5149\u91cf\u3088\u308a\u5927\u304d\u304f\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u5b9f\u969b\u306b\u306f\u3001\u8868\u9762\u304c\u975e\u5e38\u306b\u53cd\u5c04\u7684\u3067\u3042\u308b\u5834\u5408\u3001\u8868\u793a\u3055\u308c\u308b\u62e1\u6563\u8272\u304c\u975e\u5e38\u306b\u5c11\u306a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u9006\u306b\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u660e\u308b\u3044\u62e1\u6563\u8272\u3092\u6709\u3059\u308b\u5834\u5408\u3001\u3042\u307e\u308a\u53cd\u6620\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u7136\u754c\u3067\u306f\u3001\u6ed1\u3089\u304b\u306a\u8868\u9762\u306f\u3088\u308a\u9bae\u660e\u306a\u53cd\u5c04\u3092\u6709\u3057\u3001\u7c97\u3044\u8868\u9762\u306f\u307c\u3084\u3051\u307e\u3059\u3002\u305d\u306e\u7406\u7531\u306f\u3001\u57fa\u672c\u7684\u306b\u7c97\u3044\u8868\u9762\u306f\u3088\u308a\u5927\u304d\u304f\u3001\u3088\u308a\u9855\u8457\u306a\u30de\u30a4\u30af\u30ed\u30d5\u30a1\u30bb\u30c3\u30c8\u3092\u6709\u3059\u308b\u305f\u3081\u5149\u3092\u591a\u304f\u306e\u65b9\u5411\u306b\u53cd\u5c04\u3057\u3001\u6ed1\u3089\u304b\u306a\u8868\u9762\u306f\u4e3b\u306b\u4e00\u65b9\u5411\u306b\u53cd\u5c04\u3059\u308b\u50be\u5411\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002\u7570\u306a\u308b\u8996\u70b9\u304b\u3089\u6765\u308b\u5149\u304c\u5c0f\u3055\u306a\u8996\u70b9\u306e\u4e2d\u3067\u5e73\u5747\u5316\u3055\u308c\u308b\u3068\u3001\u7d50\u679c\u306f\u307c\u3084\u3051\u3066\u898b\u3048\u3001\u7701\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u304a\u304b\u3052\u3067\u6bd4\u8f03\u7684\u660e\u308b\u304f\u306a\u308a\u307e\u305b\u3093\u3002PlayCanvas\u306f\u7167\u660e\u306e\u305f\u3081\u306b\u81ea\u52d5\u7684\u306b\u52d5\u4f5c\u3059\u308b\u5149\u6ca2\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u3053\u306e\u52d5\u4f5c\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3057\u307e\u3059\u304c\u3001IBL\u306e\u5834\u5408\u306f\u4e8b\u524d\u306b\u6b63\u78ba\u306a\u307c\u304b\u3057\u5fdc\u7b54\u3092\u4e8b\u524d\u306b\u8a08\u7b97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30d7\u30ec\u30d5\u30a3\u30eb\u30bf\u30fc\u30dc\u30bf\u30f3\u306e\u6a5f\u80fd\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Prefilter"}),"\u30dc\u30bf\u30f3\u306f\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306eCubeMap\u30a2\u30bb\u30c3\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u304c\u3001CubeMap\u3092\u4f7f\u7528\u3057\u3066\u7269\u7406\u7684\u30de\u30c6\u30ea\u30a2\u30eb\u3067IBL\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"environment\u74b0\u5883\u30de\u30c3\u30d7\u306e\u30aa\u30fc\u30b5\u30ea\u30f3\u30b0",children:"Environment(\u74b0\u5883)\u30de\u30c3\u30d7\u306e\u30aa\u30fc\u30b5\u30ea\u30f3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:"\u74b0\u5883\u30de\u30c3\u30d7\u306b\u306f\u3001\u7b49\u89d2\u6295\u5f71\u3001CubeMap(\u9762\u306e\u30ea\u30b9\u30c8)\u3001\u65b9\u4f4d\u89d2\u306a\u3069\u591a\u304f\u306e\u7570\u306a\u308b\u6295\u5f71\u304c\u3042\u308a\u307e\u3059\u3002WebGL\u3068GPU\u306f\u9762\u306e\u30ea\u30b9\u30c8\u3067\u52d5\u4f5c\u3057\u307e\u3059 - \u30ad\u30e5\u30fc\u30d6 - CubeMap\u306e\u5074\u9762\u3092\u8868\u30596\u3064\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30bb\u30c3\u30c8\u3002\u74b0\u5883\u30de\u30c3\u30d7\u304c\u4ed6\u306e\u6295\u5f71\u6cd5\u306e\u5834\u5408\u30016\u3064\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6295\u5f71\u9593\u3067\u5909\u63db\u3059\u308b\u306b\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u305d\u306e1\u3064\u306f\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eCubeMap\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb",(0,s.jsx)(n.a,{href:"https://github.com/dariomanesku/cmftStudio",children:"cmftStudio"}),"\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["CubeMaps\u306fCGI\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u305f\u308a\u3001\u5199\u771f\u304b\u3089\u7d44\u307f\u7acb\u3066\u305f\u308a\u3001HDR\u74b0\u5883\u30de\u30c3\u30d7\u3092\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9/\u8cfc\u5165\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u5b9f\u9a13\u306e\u305f\u3081\u306e\u826f\u3044\u60c5\u5831\u6e90\u306b\u306f\uff1a",(0,s.jsx)(n.a,{href:"http://www.hdrlabs.com/sibl/archive.html",children:"sIBL Archive"}),"\u3001",(0,s.jsx)(n.a,{href:"http://noemotionhdrs.net/",children:"No Emotion HDR's"}),"\u3001",(0,s.jsx)(n.a,{href:"https://www.openfootage.net/?tag=hdri",children:"Open Footage"}),"\u3001",(0,s.jsx)(n.a,{href:"https://www.pauldebevec.com/Probes/",children:"Paul Debevec"}),"\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002\u74b0\u5883\u30de\u30c3\u30d7\u306f\u3001\u4e0a\u8ff0\u306ecmftStudio\u306b\u3088\u3063\u3066\u7b49\u89d2\u6295\u5f71\u6cd5\u3068\u30b3\u30f3\u30d0\u30fc\u30c1\u30d6\u30eb\u6cd5\u304c\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"cubemap\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",children:"CubeMap\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:"CubeMap\u306f6\u9762\u3067\u69cb\u6210\u3055\u308c\u3001\u5404\u9762\u306f\u7acb\u65b9\u4f53\u306e\u6b63\u65b9\u5f62\u306e\u9762\u3092\u8868\u3057\u307e\u3059\u3002\u6b63\u65b9\u5f62\u306e\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u30ab\u30e1\u30e9\u3092\u4f7f\u7528\u3057\u3066\u300190\u5ea6\u306e\u8996\u91ce\u3067\u7570\u306a\u308b90\u5ea6\u306e\u65b9\u5411\u306b\u56de\u8ee2\u3055\u305b\u3066\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CubeMap Faces",src:a(29845).A+"",width:"600",height:"450"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u822c\u7684\u306a3D\u30e2\u30c7\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb\u3001\u307e\u305f\u306f\u5199\u771f\u3068360 \u753b\u50cf\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u7dda\u5f62\u30ac\u30f3\u30de\u7a7a\u9593\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u3079\u304d\u3067\u3042\u308a\u3001",(0,s.jsx)(n.a,{href:"/user-manual/graphics/lighting/lightmapping/#gamma-correction",children:"Lightmapping \u30ac\u30f3\u30de\u88dc\u6b63\u30bb\u30af\u30b7\u30e7\u30f3"}),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u8272\u88dc\u6b63\u3092\u884c\u3046\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity",children:"\u3053\u306e\u3088\u3046\u306a"}),"3D Studio Max\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\uff11\u3064\u3092\u4f7f\u3063\u3066\u3001VRay CubeMap\u306e\u9762\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3066\u3001PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"ibl\u306e\u9069\u7528",children:"IBL\u306e\u9069\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u306b\u306f2\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"CubeMap\u3092\u30b7\u30fc\u30f3\u8a2d\u5b9a\u306eSkybox\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u74b0\u5883\u30de\u30c3\u30d7\u3068\u3057\u3066CubeMap\u3092\u76f4\u63a5\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30de\u30c3\u30d4\u30f3\u30b0",children:"\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30de\u30c3\u30d4\u30f3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u6280\u8853\u306f\u3001\u74b0\u5883\u30de\u30c3\u30d7\u306e\u6295\u5f71\u3092\u5909\u66f4\u3057\u3066\u3001CubeMap\u304c\u305d\u306e\u5883\u754c\u306b\u5bfe\u5fdc\u3059\u308b\u3088\u3046\u306b\u7a7a\u9593\u5185\u3067\u30dc\u30c3\u30af\u30b9\u3092\u6307\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u6700\u3082\u4e00\u822c\u7684\u306a\u7528\u9014\u306f\u3001\u30eb\u30fc\u30e0\u30b9\u30b1\u30fc\u30eb\u74b0\u5883\u5185\u306e\u8868\u9762\u4e0a\u306e\u53cd\u5c04\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Material CubeMap Box Projection",src:a(76852).A+"",width:"306",height:"307"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["CubeMap Box Projection\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30fc\u30f3\u306e",(0,s.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:"\u4f8b"}),"\u3068",(0,s.jsx)(n.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3067\u3059\u3002\u7a93\u306b\u6620\u308b\u6728\u306e\u5e8a\u306e\u53cd\u5c04\u3068\u5929\u4e95\u306b\u6620\u308b\u50c5\u304b\u306a\u53cd\u5c04\u3084\u3001\u53f3\u306e\u58c1\u306e\u91d1\u5c5e\u306ePlayCanvas\u30ed\u30b4\u306b\u6620\u308b\u90e8\u5c4b\u306e\u53cd\u5c04\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u52d5\u7684\u306a\u30a8\u30d5\u30a7\u30af\u30c8\u3067\u3042\u308a\u3001\u975e\u5e38\u306b\u73fe\u5b9f\u7684\u306a\u53cd\u5c04\u3092\u4f5c\u6210\u3057\u3001\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u304c\u90e8\u5c4b\u306e\u74b0\u5883\u3092\u3069\u306e\u3088\u3046\u306b\u6620\u3057\u51fa\u3059\u304b\u5236\u5fa1\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,s.jsx)(n.img,{alt:"Environment Box Projection Mapping",src:a(82958).A+"",width:"800",height:"450"})})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30b7\u30fc\u30f3\u306e\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3068AO\u30c6\u30af\u30b9\u30c1\u30e3\u3068Box\u6295\u5f71IBL(\u53cd\u5c04)\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},82958:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/playcanvas-lightmapping-scene-839426fc6835a0b39b941115c90cc21e.jpg"},76852:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/cubemap-box-projection-5f86a77a6c023a679baf3348351163cd.png"},29845:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/cubemap-faces-33df09fbabc7f0c01c77c78ade45a890.jpg"},52240:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/ibl-hdr-ldr-1d70e5bde2357268007e5a5c0d3431ad.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var i=a(96540);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);