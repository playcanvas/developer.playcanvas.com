"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[93259],{36454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"user-manual/publishing/web/self-hosting-for-beginners","title":"\u521d\u5fc3\u8005\u5411\u3051\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","description":"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001Web\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u521d\u5fc3\u8005\u5411\u3051\u3067\u3059\u3002Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u3055\u307e\u3056\u307e\u306a\u90e8\u5206\u3092\u3069\u306e\u3088\u3046\u306b\u7d44\u307f\u5408\u308f\u305b\u3066PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u305f\u308a\u3001\u30e6\u30fc\u30b6\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u4ed6\u306e\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3092\u63d0\u4f9b\u3059\u308b\u304b\u3092\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/publishing/web/self-hosting-for-beginners.md","sourceDirName":"user-manual/publishing/web","slug":"/user-manual/publishing/web/self-hosting-for-beginners","permalink":"/ja/user-manual/publishing/web/self-hosting-for-beginners","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/web/self-hosting-for-beginners.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u521d\u5fc3\u8005\u5411\u3051\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","permalink":"/ja/user-manual/publishing/web/self-hosting"},"next":{"title":"Web\u30da\u30fc\u30b8\u3068\u306e\u901a\u4fe1","permalink":"/ja/user-manual/publishing/web/communicating-webpage"}}');var i=s(74848),a=s(28453);const d={title:"\u521d\u5fc3\u8005\u5411\u3051\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",sidebar_position:3},t=void 0,r={},c=[{value:"\u30a6\u30a7\u30d6\u30b9\u30bf\u30c3\u30af",id:"\u30a6\u30a7\u30d6\u30b9\u30bf\u30c3\u30af",level:2},{value:"\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9",id:"\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9",level:3},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30b3\u30fc\u30c9",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30b3\u30fc\u30c9",level:3},{value:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",id:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",level:3},{value:"PlayCanvas \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",id:"playcanvas-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",level:2},{value:"PlayCanvas \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",id:"playcanvas-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",level:2},{value:"\u30b5\u30fc\u30d0",id:"\u30b5\u30fc\u30d0",level:3},{value:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",id:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4-1",level:3},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",level:3},{value:"Client",id:"client",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001Web\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u521d\u5fc3\u8005\u5411\u3051\u3067\u3059\u3002Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u3055\u307e\u3056\u307e\u306a\u90e8\u5206\u3092\u3069\u306e\u3088\u3046\u306b\u7d44\u307f\u5408\u308f\u305b\u3066PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u305f\u308a\u3001\u30e6\u30fc\u30b6\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u4ed6\u306e\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3092\u63d0\u4f9b\u3059\u308b\u304b\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30a6\u30a7\u30d6\u30b9\u30bf\u30c3\u30af",children:"\u30a6\u30a7\u30d6\u30b9\u30bf\u30c3\u30af"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u672c\u7684\u306b\u3001\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30923\u3064\u306b\u5206\u96e2\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u3001\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3059\u3002\u4e00\u90e8\u306e\u307f\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u306a\u5834\u5408\u3084\u4ed6\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u308a\u51e6\u7406\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u306f3\u3064\u3068\u3082\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9",children:"\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9"}),"\n",(0,i.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u30a6\u30a7\u30d6\u30d6\u30e9\u30a6\u30b6\u3067\u30ea\u30f3\u30af\u3092\u958b\u304f\u3068\u3001\u30d6\u30e9\u30a6\u30b6\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306e\u3069\u3053\u304b\u3067\u30b5\u30fc\u30d0\u306b\u8981\u6c42\u3092\u9001\u4fe1\u3057\u3066HTML\u30da\u30fc\u30b8\u3092\u8981\u6c42\u3057\u307e\u3059\u3002\u6700\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u5f62\u306e\u5834\u5408\u3001\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u4e0a\u306e\u30cf\u30fc\u30c9\u30c7\u30a3\u30b9\u30af\u306b\u7f6e\u304b\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u30da\u30fc\u30b8\u3067\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u4ecb\u3057\u3066\u30d6\u30e9\u30a6\u30b6\u306b\u623b\u308a\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30c6\u30ad\u30b9\u30c8\u3084\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3042\u308b\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306e\u5834\u5408\u3001\u3053\u308c\u306f\u975e\u5e38\u306b\u3046\u307e\u304f\u6a5f\u80fd\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u8981\u7d20\u3092\u52a0\u3048\u308b\u306b\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u30b5\u30fc\u30d0\u306f\u8981\u6c42\u3092\u53d7\u4fe1\u3057\u305f\u5f8c\u306b\u3044\u304f\u3064\u304b\u306e\u51e6\u7406\u3092\u884c\u3044\u3001\u305d\u306e\u51e6\u7406\u306e\u7d50\u679c\u3092\u542b\u3080HTML\u306e\u30da\u30fc\u30b8\u3092",(0,i.jsx)(n.strong,{children:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"}),"\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u3001PHP\u3067\u30da\u30fc\u30b8\u5185\u306e\u73fe\u5728\u306e\u65e5\u4ed8\u3068\u6642\u523b\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<html>\n    <head>\n        <title>My Homepage</title>\n    </head>\n    <body>\n        <h1>The date is</h1>\n        <?php\n            echo date(DATE_RFC2822);\n        ?>\n        <p>Have a nice day</p>\n    </body>\n</html>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306ePHP\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306aHTML\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u3001\u30d6\u30e9\u30a6\u30b6\u306b\u9001\u4fe1\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>My Homepage</title>\n    </head>\n    <body>\n        <h1>The date is</h1>\n        Mon, 11 Apr 2016 06:54:14 -0400\n        <p>Have a nice day</p>\n    </body>\n</html>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u969b\u3001\u6ca2\u5c71\u306e\u7570\u306a\u308b\u8a00\u8a9e\u3084\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u304b\u3089\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002PHP\u3001Python\u3001Nodejs\u3001Ruby\u306f\u4e00\u822c\u7684\u306a\u9078\u629e\u80a2\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u6700\u7d42\u7684\u306a\u7d50\u679c\u306f\u540c\u3058\u3067\u3059\u3002HTML\u30da\u30fc\u30b8\u306e\u8981\u6c42\u3092\u53d7\u4fe1\u3057\u3001\u3044\u304f\u3064\u304b\u306e\u51e6\u7406\u3092\u884c\u3044\u3001HTML\u30c7\u30fc\u30bf\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"PlayCanvas\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u3001PlayCanvas\u3067\u66f8\u304f\u30b3\u30fc\u30c9\u304c\u30b5\u30fc\u30d0\u5074\u3067\u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u306f\u306a\u304f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u306f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30b3\u30fc\u30c9",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30b3\u30fc\u30c9"}),"\n",(0,i.jsx)(n.p,{children:"\u30a6\u30a7\u30d6\u30b9\u30bf\u30c3\u30af\u3067\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u884c\u3044\u30e6\u30fc\u30b6\u30fc\u5165\u529b\u306b\u5fdc\u7b54\u3059\u308b\u306e\u306f\u30b5\u30fc\u30d0\u3060\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u5185\u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u30b3\u30fc\u30c9\u3092\u6307\u3057\u307e\u3059\u3002\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u304c\u5b9f\u884c\u3055\u308c\u308b\u8a00\u8a9e\u3067\u3042\u308b\u3001JavaScript\u3067\u3059\u3002\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306eJavaScript\u3067\u3055\u307e\u3056\u307e\u306a\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6700\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u306e\u306f\u3001\u30b5\u30fc\u30d0\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305fHTML\u30da\u30fc\u30b8\u306e\u5909\u66f4\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const title = document.getElementById("title");\ntitle.innerHTML = "This is the new title";\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305f\u3001\u6700\u3082\u8907\u96d1\u306a\u30b1\u30fc\u30b9\u306f\u3001PlayCanvas\u3092\u4f7f\u7528\u3057\u3066\u5b8c\u5168\u306a3D WebGL\u30b2\u30fc\u30e0\u3092\u66f8\u304f\u3053\u3068\u5834\u5408\u3067\u3059\u3002PlayCanvas\u3092\u4f7f\u7528\u3057\u3066\u66f8\u304f\u3082\u306e\u306f\u5168\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306eJavaScript\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",children:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4"}),"\n",(0,i.jsx)(n.p,{children:"\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u90e8\u306f\u3001\u52d5\u7684\u3067\u306f\u306a\u304f\u3001\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u4f8b\u3048\u3070\u3001\u753b\u50cf\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a1\u30a4\u30eb\u3001\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3001\u307e\u305f\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u5408\u306f3D\u30e2\u30c7\u30eb\u3084\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u304c\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306a\u306e\u3067\u5c11\u3057\u9045\u304f\u306a\u308a\u307e\u3059\u3002\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u63d0\u4f9b\u306f\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u30b3\u30fc\u30c9\u306e\u3088\u3046\u306b\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3001\u540c\u3058\u30de\u30b7\u30f3\u306b\u306a\u308a\u307e\u3059\u3002\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u8981\u7d20\u304c\u306a\u3044\u305f\u3081\u3001\u8981\u6c42\u3092\u6e80\u305f\u3059\u305f\u3081\u306e\u51e6\u7406\u306f\u884c\u308f\u308c\u307e\u305b\u3093\u3002\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u306f\u5358\u306b\u8981\u6c42\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u8fd4\u9001\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u304a\u3044\u3066\u91cd\u8981\u306a\u306e\u306f\u3001\u3067\u304d\u308b\u3060\u3051\u901f\u304f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"playcanvas-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",children:"PlayCanvas \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,i.jsx)(n.p,{children:"PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306eJavaScript\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3001\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3042\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u306f\u4e00\u5207\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.p,{children:"PlayCanvas\u3092\u4f7f\u7528\u3057\u3066\u516c\u958b\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u63d0\u4f9b\u3055\u308c\u308b\u5834\u6240\u3067URL\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3059\u308bHTML\u30da\u30fc\u30b8\u3092\u9001\u308a\u8fd4\u3057\u3001\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u3092\u51e6\u7406\u3057\u307e\u3059\u3002HTML\u30da\u30fc\u30b8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u308b\u3068\u305d\u308c\u306fPlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9javascript\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u30b5\u30fc\u30d0\u304b\u3089\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u80fd\u306a\u9650\u308a\u8fc5\u901f\u306b\u3001\u4e16\u754c\u4e2d\u306e\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306bPlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u3001PlayCanvas\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3092\u6700\u9069\u5316\u3057\u307e\u3057\u305f\u3002PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001\u516c\u958b\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001 ",(0,i.jsx)(n.code,{children:"playcanv.as"})," URL\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3001\u72ec\u81ea\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30db\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"playcanvas-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",children:"PlayCanvas \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,i.jsxs)(n.p,{children:["PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u306b\u95a2\u3059\u308b",(0,i.jsx)(n.a,{href:"/user-manual/publishing/web/self-hosting/",children:"\u8a73\u7d30\u30da\u30fc\u30b8"}),"\u304c\u3042\u308a\u307e\u3059\u3002\u8981\u7d04\u3059\u308b\u3068\u3001\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3092\u884c\u3046\u306b\u306f\u4e0a\u8a18\u3067\u8aac\u660e\u3057\u305f\u306e\u30a6\u30a7\u30d6\u30b9\u30bf\u30c3\u30af\u306e\u4e09\u3064\u306e\u90e8\u5206\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30b5\u30fc\u30d0",children:"\u30b5\u30fc\u30d0"}),"\n",(0,i.jsxs)(n.p,{children:["\u6a19\u6e96\u7684\u306aPlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u542b\u307e\u308c\u308b",(0,i.jsx)(n.code,{children:"index.html"}),"\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u306e\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Linux\u3067\u4f7f\u7528\u3059\u308b2\u3064\u306e\u4e00\u822c\u7684\u306a\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fApache\u3068Nginx\u3067\u3059\u3002Windows\u3067\u4f7f\u7528\u3059\u308b1\u3064\u306e\u4e00\u822c\u7684\u306a\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u306fIIS\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4-1",children:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Server"}),"\u3067\u8aac\u660e\u3057\u305f\u901a\u308a\u3001\u9759\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u3057\u3066\u3001\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u306e",(0,i.jsx)(n.code,{children:"index.html"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u3059\u3079\u3066PlayCanvas\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u63d0\u4f9b\u3059\u308b\u969b\u3001\u826f\u597d\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5f97\u308b\u305f\u3081\u306b\u306fgzip\u5727\u7e2e\u3092\u6709\u52b9\u306b\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u6b63\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d8\u30c3\u30c0\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c",(0,i.jsx)(n.strong,{children:"\u91cd\u8981"}),"\u3067\u3059\u3002\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u30d8\u30c3\u30c0\u306e\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u5727\u7e2e\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u306f\u3001\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7406\u7531\u3067\u3001PlayCanvas\u306e\u3088\u304f\u4f7f\u308f\u308c\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5bfe\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u30bf\u30a4\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u30b5\u30fc\u30d0\u30fc\u304c\u3042\u308b\u305f\u3081\u3001\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8aad\u307f\u8fbc\u3082\u3046\u3068\u3059\u308b\u3068\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3082\u3057\u30d6\u30e9\u30a6\u30b6\u30fc\u3067\u30a2\u30bb\u30c3\u30c8\u304c\u6b63\u3057\u304f\u63d0\u4f9b\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3084\u8b66\u544a\u304c\u51fa\u305f\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u306e\u30bf\u30a4\u30d7\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u30bf\u30a4\u30d7\u306e\u30ea\u30b9\u30c8\u3067\u3059\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30d5\u30a1\u30a4\u30eb\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.th,{children:"Content type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AAC"}),(0,i.jsx)(n.td,{children:"audio/aac"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BASIS"}),(0,i.jsx)(n.td,{children:"application/octet-stream"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BIN"}),(0,i.jsx)(n.td,{children:"application/octet-stream"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DDS"}),(0,i.jsx)(n.td,{children:"image/dds"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GLB"}),(0,i.jsx)(n.td,{children:"model/gltf-binary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JPEG"}),(0,i.jsx)(n.td,{children:"image/jpeg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JS"}),(0,i.jsx)(n.td,{children:"application/javascript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JSON"}),(0,i.jsx)(n.td,{children:"application/json"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MP3"}),(0,i.jsx)(n.td,{children:"audio/mpeg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MP4"}),(0,i.jsx)(n.td,{children:"video/mp4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OGG"}),(0,i.jsx)(n.td,{children:"audio/ogg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PNG"}),(0,i.jsx)(n.td,{children:"image/png"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TEXT"}),(0,i.jsx)(n.td,{children:"text/plain"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WASM"}),(0,i.jsx)(n.td,{children:"application/wasm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WAV"}),(0,i.jsx)(n.td,{children:"audio/x-wav"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"XML"}),(0,i.jsx)(n.td,{children:"application/xml"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"client",children:"Client"}),"\n",(0,i.jsxs)(n.p,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u90e8\u3068\u3057\u3066\u66f8\u304b\u308c\u3066\u3044\u308b\u5168\u3066\u3067\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u304c",(0,i.jsx)(n.code,{children:"index.html"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u969b\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u3001\u3042\u306a\u305f\u304c\u66f8\u3044\u305f\u3059\u3079\u3066\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var l=s(96540);const i={},a=l.createContext(i);function d(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);