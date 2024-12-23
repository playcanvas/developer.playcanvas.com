"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4441],{72704:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"user-manual/publishing/web/hosting-cdn","title":"CDN\u3092\u4f7f\u7528\u3057\u305f\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","description":"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3067PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3068\u304d\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30ed\u30fc\u30c9\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u306e\u8ca0\u8377\u304b\u3089\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u5834\u6240(index.html)\u3092\u5206\u3051\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u591a\u3044\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(CDN)\u306f\u30a2\u30bb\u30c3\u30c8\u304c\u30e6\u30fc\u30b6\u30fc\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u304b\u3089\u5730\u7406\u7684\u306b\u8fd1\u3044\u30b5\u30fc\u30d0\u304b\u3089\u914d\u4fe1\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u901f\u304f\u30ed\u30fc\u30c9\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u30a2\u30bb\u30c3\u30c8\u306b\u5225\u306e\u5834\u6240\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/publishing/web/hosting-cdn.md","sourceDirName":"user-manual/publishing/web","slug":"/user-manual/publishing/web/hosting-cdn","permalink":"/ja/user-manual/publishing/web/hosting-cdn","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/web/hosting-cdn.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"CDN\u3092\u4f7f\u7528\u3057\u305f\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Web\u30da\u30fc\u30b8\u3068\u306e\u901a\u4fe1","permalink":"/ja/user-manual/publishing/web/communicating-webpage"},"next":{"title":"Facebook","permalink":"/ja/user-manual/publishing/web/facebook"}}');var c=n(74848),d=n(28453);const l={title:"CDN\u3092\u4f7f\u7528\u3057\u305f\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",sidebar_position:5},t=void 0,r={},a=[{value:"\u5225\u306e\u5834\u6240\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u30b5\u30fc\u30d3\u30f3\u30b0",id:"\u5225\u306e\u5834\u6240\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u30b5\u30fc\u30d3\u30f3\u30b0",level:2},{value:"\u305d\u306e\u4ed6\u306eURL",id:"\u305d\u306e\u4ed6\u306eurl",level:2},{value:"CDN\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc",id:"cdn\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc",level:2},{value:"CORS\u306e\u8a2d\u5b9a",id:"cors\u306e\u8a2d\u5b9a",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3067PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3068\u304d\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30ed\u30fc\u30c9\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u306e\u8ca0\u8377\u304b\u3089\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u5834\u6240(index.html)\u3092\u5206\u3051\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u591a\u3044\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(CDN)\u306f\u30a2\u30bb\u30c3\u30c8\u304c\u30e6\u30fc\u30b6\u30fc\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u304b\u3089\u5730\u7406\u7684\u306b\u8fd1\u3044\u30b5\u30fc\u30d0\u304b\u3089\u914d\u4fe1\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u901f\u304f\u30ed\u30fc\u30c9\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u30a2\u30bb\u30c3\u30c8\u306b\u5225\u306e\u5834\u6240\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u6700\u521d\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001",(0,c.jsx)(s.a,{href:"/user-manual/publishing/web/self-hosting",children:"\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u30ac\u30a4\u30c9"}),"\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a6\u30a7\u30d6\u30d3\u30eb\u30c9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u305d\u306e\u5f8c\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30d3\u30eb\u30c9\u306e ",(0,c.jsx)(s.code,{children:"index.html"})," \u3068 ",(0,c.jsx)(s.code,{children:"__settings__.js"})," \u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304b\u3089\u59cb\u3081\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u5225\u306e\u5834\u6240\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u30b5\u30fc\u30d3\u30f3\u30b0",children:"\u5225\u306e\u5834\u6240\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u30b5\u30fc\u30d3\u30f3\u30b0"}),"\n",(0,c.jsxs)(s.p,{children:["\u6700\u3082\u7c21\u5358\u306a\u5909\u66f4\u306f\u3001\u5225\u306e\u5834\u6240\u304b\u3089\u306e\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f",(0,c.jsx)(s.code,{children:"__settings__.js"}),"\u306e",(0,c.jsx)(s.code,{children:"ASSET_PREFIX"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3057\u3066\u884c\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"settings.js",src:n(93581).A+"",width:"2174",height:"962"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"ASSET_PREFIX"}),"\u306f\u3001\u30d7\u30ea\u30ed\u30fc\u30c9\u6642\u3068\u30e9\u30f3\u30bf\u30a4\u30e0\u6642\u306e\u4e21\u65b9\u3067\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u305f\u3081\u306b\u4f5c\u3089\u308c\u308b\u3059\u3079\u3066\u306e\u8981\u6c42(\u30b7\u30fc\u30f3\u3092\u542b\u3080)\u306e\u524d\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001CDN\u30a2\u30bb\u30c3\u30c8\u30b9\u30c8\u30a2\u306e\u30eb\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u306b\u8a2d\u5b9a\u3059\u308b\u3079\u304d\u307e\u3059\u3002\u4e0a\u8a18\u306e\u4f8b\u3067\u306f\u3001\u4ee5\u524d\u306f",(0,c.jsx)(s.code,{children:"files/123456/1/texture.jpg"})," \u306e\u3088\u3046\u306aURL\u306e\u30a2\u30bb\u30c3\u30c8\u304c",(0,c.jsx)(s.code,{children:"http://keepy-up-cdn.example.com/files/123456/1/texture.jpg"})," \u304b\u3089\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u305d\u306e\u4ed6\u306eurl",children:"\u305d\u306e\u4ed6\u306eURL"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"index.html"}),"\u306b\u3088\u3063\u3066\u76f4\u63a5\u53c2\u7167\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u3044\u304f\u3064\u304b\u6b8b\u3063\u3066\u3044\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3001PlayCanvas\u306ejavascript\u30a8\u30f3\u30b8\u30f3\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",(0,c.jsx)(s.code,{children:"__settings__.json"}),"\u3001",(0,c.jsx)(s.code,{children:"__loading__.js"}),"\u3001 ",(0,c.jsx)(s.code,{children:"__start__.js"}),"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306bindex.html\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"index.html",src:n(59053).A+"",width:"2230",height:"812"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"__settings__.js"}),"\u30d5\u30a1\u30a4\u30eb\u5185\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8a2d\u5b9a\u306e",(0,c.jsx)(s.code,{children:"config.json"}),"\u3078\u306e\u30d1\u30b9\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"settings.js",src:n(43558).A+"",width:"2222",height:"960"})}),"\n",(0,c.jsx)(s.h2,{id:"cdn\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc",children:"CDN\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc"}),"\n",(0,c.jsxs)(s.p,{children:["\u6b21\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u65b0\u3057\u3044\u5834\u6240\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u5168\u3066\u30b3\u30d4\u30fc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001 ",(0,c.jsx)(s.code,{children:"ASSET_PREFIX"}),"\u3092\u4f7f\u7528\u3057\u3066\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"__game_scripts.js"}),", \u30b7\u30fc\u30f3 json (e.g. ",(0,c.jsx)(s.code,{children:"123456.json"}),"), ",(0,c.jsx)(s.code,{children:"config.json"}),",\u30a2\u30bb\u30c3\u30c8 (",(0,c.jsx)(s.code,{children:"files"})," \u30d5\u30a9\u30eb\u30c0\u306e\u4e2d\u306e\u5168\u3066), \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u753b\u9762\u30ed\u30b4\u306e",(0,c.jsx)(s.code,{children:"logo.png"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u305d\u3057\u3066\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306findex.html:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"playcanvas-stable.min.js"}),","]}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"manifest.json"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"__settings__.js"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"__loading__.js"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"__start__.js"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"styles.css"})}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"CDN files",src:n(4352).A+"",width:"1540",height:"704"})}),"\n",(0,c.jsx)(s.p,{children:"\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5168\u3066CDN\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u306b\u30b3\u30d4\u30fc\u3059\u308b\u3079\u304d\u3067\u3059\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"cors\u306e\u8a2d\u5b9a",children:"CORS\u306e\u8a2d\u5b9a"}),"\n",(0,c.jsxs)(s.p,{children:["\u3053\u308c\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u6700\u5f8c\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u6b63\u3057\u304f\u30af\u30ed\u30b9\u30aa\u30ea\u30b8\u30f3\u30ea\u30bd\u30fc\u30b9\u30fb\u30b7\u30a7\u30a2\u30ea\u30f3\u30b0(CORS)\u30d8\u30c3\u30c0\u3092\u30b5\u30fc\u30d6\u3067\u304d\u308b\u3088\u3046\u306b\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3059\u3002CORS\u306f\u30d6\u30e9\u30a6\u30b6\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f",(0,c.jsx)(s.code,{children:"http://example.com"})," \u4e0a\u306eWeb\u30da\u30fc\u30b8\u3092\u3001",(0,c.jsx)(s.code,{children:"http://keepy-up-cdn.example.com/"})," \u4e0a\u306eWeb\u30da\u30fc\u30b8\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u4e8c\u3064\u306e\u8d77\u6e90\u304c\u7570\u306a\u308b\u305f\u3081\u3067\u3059\u3002\u3053\u308c\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306b\u306f\u30b5\u30fc\u30d0\u3092",(0,c.jsx)(s.code,{children:"http://keepy-up-cdn.example.com/"}),"  \u306b\u8a2d\u5b9a\u3057\u3066\u3001\u4ed6\u306e\u30da\u30fc\u30b8\u306b\u3088\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u8a31\u53ef\u3059\u308b\u3088\u3046\u30d6\u30e9\u30a6\u30b6\u306b\u6307\u793a\u3059\u308bCORS\u30d8\u30c3\u30c0\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["CORS\u306e\u8a2d\u5b9a\u306f\u3001\u4f7f\u7528\u3059\u308bCDN\u307e\u305f\u306f\u30b5\u30fc\u30d0\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002CORS\u30d8\u30c3\u30c0\u30fc\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u30b5\u30fc\u30d0\u307e\u305f\u306fCDN\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001Amazon Web Services CORS\u306e\u8a2d\u5b9a\u306e\u30da\u30fc\u30b8\u306f",(0,c.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html",children:"\u3053\u3061\u3089"}),"\u3067\u3059\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},4352:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/cdn-files-bab967362ca8fc6923dcd890f2b8ddb0.png"},59053:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/cdn-index-6e370e07f1f73bdb8d25db49e5bec6c3.png"},93581:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/cdn-settings-assets-prefix-613b8c646d2539be4e666097e43613f9.png"},43558:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/cdn-settings-config-prefix-5a749ef11bba061abc66d4fff9811e49.png"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var i=n(96540);const c={},d=i.createContext(c);function l(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);